"use client";

import { RefObject, useEffect, useEffectEvent, useRef } from "react";

type HeroAirflowProps = {
  hostRef: RefObject<HTMLDivElement | null>;
};

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  px: number;
  py: number;
  seed: number;
};

type PointerState = {
  x: number;
  y: number;
  tx: number;
  ty: number;
  vx: number;
  vy: number;
  impulse: number;
  active: boolean;
};

type FlowVector = {
  x: number;
  y: number;
  pressure: number;
};

const TAU = Math.PI * 2;

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

const halton = (index: number, base: number) => {
  let result = 0;
  let fraction = 1 / base;
  let i = index;

  while (i > 0) {
    result += fraction * (i % base);
    i = Math.floor(i / base);
    fraction /= base;
  }

  return result;
};

const resetParticle = (
  particle: Particle,
  index: number,
  width: number,
  height: number,
  time: number,
) => {
  const lane = (index % 32) / 32;
  const curve = Math.sin(time * 0.36 + lane * TAU) * 0.08;
  particle.x = -32 - (index % 6) * 8;
  particle.y = (0.1 + lane * 0.8 + curve) * height;
  particle.px = particle.x;
  particle.py = particle.y;
  particle.vx = 42 + lane * 20;
  particle.vy = Math.cos(lane * TAU + time * 0.4) * 8;
};

const createParticles = (count: number, width: number, height: number) => {
  const particles: Particle[] = [];

  for (let index = 0; index < count; index += 1) {
    const u = halton(index + 1, 2);
    const v = halton(index + 1, 3);
    const seed = halton(index + 1, 5);
    const x = (u * 1.18 - 0.1) * width;
    const y = (0.08 + v * 0.84 + Math.sin(seed * TAU * 2) * 0.03) * height;

    particles.push({
      x,
      y,
      px: x,
      py: y,
      vx: 32 + seed * 12,
      vy: Math.cos(seed * TAU) * 6,
      seed,
    });
  }

  return particles;
};

export function HeroAirflow({ hostRef }: HeroAirflowProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const updatePointerTarget = useEffectEvent((event: PointerEvent) => {
    const host = hostRef.current;

    if (!host) {
      return;
    }

    const rect = host.getBoundingClientRect();
    const pointer = pointerRef.current;
    const nextX = event.clientX - rect.left;
    const nextY = event.clientY - rect.top;
    const deltaX = nextX - pointer.tx;
    const deltaY = nextY - pointer.ty;

    pointer.tx = nextX;
    pointer.ty = nextY;
    pointer.active = true;
    pointer.impulse = clamp(pointer.impulse + Math.hypot(deltaX, deltaY) * 0.0045, 0, 1.8);
  });

  const releasePointer = useEffectEvent(() => {
    const bounds = boundsRef.current;
    const pointer = pointerRef.current;

    pointer.tx = bounds.width * 0.62;
    pointer.ty = bounds.height * 0.42;
    pointer.active = false;
  });

  const particlesRef = useRef<Particle[]>([]);
  const frameRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);
  const pointerRef = useRef<PointerState>({
    x: 0,
    y: 0,
    tx: 0,
    ty: 0,
    vx: 0,
    vy: 0,
    impulse: 0,
    active: false,
  });
  const boundsRef = useRef({
    width: 0,
    height: 0,
    dpr: 1,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = hostRef.current;

    if (!canvas || !host) {
      return;
    }

    const context = canvas.getContext("2d");

    if (!context) {
      return;
    }

    const updateBounds = () => {
      const rect = host.getBoundingClientRect();
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const dpr = clamp(window.devicePixelRatio || 1, 1, 1.5);
      const width = Math.max(1, Math.floor(rect.width));
      const height = Math.max(1, Math.floor(rect.height));
      const area = width * height;
      const count = reducedMotion
        ? 260
        : clamp(Math.floor(area / 720), 900, 2200);

      boundsRef.current = { width, height, dpr };
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      particlesRef.current = createParticles(count, width, height);

      const pointer = pointerRef.current;
      pointer.x = width * 0.62;
      pointer.y = height * 0.42;
      pointer.tx = width * 0.62;
      pointer.ty = height * 0.42;
    };

    const resizeObserver = new ResizeObserver(updateBounds);
    resizeObserver.observe(host);
    updateBounds();

    const getFlow = (x: number, y: number, time: number) => {
      const { width, height } = boundsRef.current;
      const pointer = pointerRef.current;
      const nx = x / width;
      const ny = y / height;
      const driftX = 56 + 24 * Math.sin((ny * 1.18 + time * 0.045) * TAU);
      const driftY = 12 * Math.cos((nx * 1.32 - time * 0.028) * TAU);
      let flowX = driftX;
      let flowY = driftY;
      let pressure = 0.12;

      const vortices = [
        {
          x: width * (0.26 + Math.sin(time * 0.21) * 0.04),
          y: height * (0.28 + Math.cos(time * 0.18) * 0.05),
          strength: 160,
          radius: width * 0.18,
        },
        {
          x: width * (0.56 + Math.cos(time * 0.16) * 0.05),
          y: height * (0.72 + Math.sin(time * 0.22) * 0.04),
          strength: -190,
          radius: width * 0.22,
        },
        {
          x: width * (0.82 + Math.sin(time * 0.12) * 0.03),
          y: height * (0.44 + Math.cos(time * 0.2) * 0.05),
          strength: 220,
          radius: width * 0.26,
        },
      ];

      for (const vortex of vortices) {
        const dx = x - vortex.x;
        const dy = y - vortex.y;
        const distance = Math.hypot(dx, dy) + 0.001;
        const radial = Math.exp(-(distance * distance) / (vortex.radius * vortex.radius));
        const swirl = (vortex.strength * radial) / distance;

        flowX += (-dy / distance) * swirl;
        flowY += (dx / distance) * swirl;
        pressure += radial * 0.22;
      }

      const curlX =
        16 * Math.sin((ny * 2.4 + time * 0.038 + nx * 0.6) * TAU) +
        10 * Math.cos((nx * 1.8 - time * 0.032) * TAU);
      const curlY =
        16 * Math.cos((nx * 2.2 - time * 0.03 + ny * 0.5) * TAU) -
        10 * Math.sin((ny * 1.7 + time * 0.036) * TAU);

      flowX += curlX;
      flowY += curlY;

      const focusX = width * 0.92;
      const focusY = height * 0.48;
      const focusDx = focusX - x;
      const focusDy = focusY - y;
      const focusDistance = Math.hypot(focusDx, focusDy) + 0.001;
      const streamline = Math.exp(-(focusDistance * focusDistance) / (width * width * 0.26));

      flowX += (focusDx / focusDistance) * 82 * streamline;
      flowY += (focusDy / focusDistance) * 82 * streamline;
      pressure += streamline * 0.28;

      const mouseDx = x - pointer.x;
      const mouseDy = y - pointer.y;
      const mouseDistance = Math.hypot(mouseDx, mouseDy) + 0.001;
      const mouseInfluence = Math.exp(
        -(mouseDistance * mouseDistance) / (width * width * 0.04),
      );
      const tangentialX = -mouseDy / mouseDistance;
      const tangentialY = mouseDx / mouseDistance;
      const radialX = mouseDx / mouseDistance;
      const radialY = mouseDy / mouseDistance;
      const turbulence = pointer.impulse * mouseInfluence;
      const wavePhase = mouseDistance * 0.035 - time * 5.4;
      const wave = Math.sin(wavePhase) * turbulence * 42;

      flowX += tangentialX * turbulence * 220 + radialX * wave;
      flowY += tangentialY * turbulence * 220 + radialY * wave;
      pressure += turbulence * 0.4;

      return {
        x: flowX,
        y: flowY,
        pressure,
      } satisfies FlowVector;
    };

    const render = (now: number) => {
      const dt = clamp((now - lastTimeRef.current) / 1000 || 0.016, 0.008, 0.02);
      lastTimeRef.current = now;

      const { width, height } = boundsRef.current;
      const pointer = pointerRef.current;
      const particles = particlesRef.current;
      const time = now / 1000;

      pointer.vx += (pointer.tx - pointer.x - pointer.vx * 16) * dt * 18;
      pointer.vy += (pointer.ty - pointer.y - pointer.vy * 16) * dt * 18;
      pointer.x += pointer.vx * dt;
      pointer.y += pointer.vy * dt;
      pointer.impulse += (0 - pointer.impulse) * dt * (pointer.active ? 1.6 : 2.3);

      context.clearRect(0, 0, width, height);
      context.globalCompositeOperation = "lighter";
      context.lineCap = "round";

      for (let index = 0; index < particles.length; index += 1) {
        const particle = particles[index];
        const flow = getFlow(particle.x, particle.y, time + particle.seed * 0.8);
        const spring = 4.2 + particle.seed * 0.8;
        const damping = 0.92;

        particle.px = particle.x;
        particle.py = particle.y;
        particle.vx += (flow.x - particle.vx) * dt * spring;
        particle.vy += (flow.y - particle.vy) * dt * spring;
        particle.vx *= damping;
        particle.vy *= damping;
        particle.x += particle.vx * dt;
        particle.y += particle.vy * dt;

        if (
          particle.x > width + 48 ||
          particle.x < -80 ||
          particle.y < -48 ||
          particle.y > height + 48
        ) {
          resetParticle(particle, index, width, height, time);
        }

        const speed = Math.hypot(particle.vx, particle.vy);
        const alpha = clamp(speed / 180, 0.1, 0.5) + flow.pressure * 0.12;
        const lineWidth = 0.6 + flow.pressure * 0.9;
        const hue = 200 + flow.pressure * 48 + particle.seed * 22;

        context.strokeStyle = `hsla(${hue}, 100%, 72%, ${clamp(alpha, 0.08, 0.76)})`;
        context.lineWidth = lineWidth;
        context.beginPath();
        context.moveTo(particle.px, particle.py);
        context.lineTo(particle.x, particle.y);
        context.stroke();
      }

      const centerFlow = getFlow(width * 0.58, height * 0.48, time);
      const windShiftX = (pointer.x - width * 0.5) * 0.08;
      const windShiftY = (pointer.y - height * 0.5) * 0.08;
      const turbulence = clamp(pointer.impulse * 0.9 + centerFlow.pressure * 0.18, 0, 1);

      host.style.setProperty("--wind-shift-x", `${windShiftX.toFixed(2)}px`);
      host.style.setProperty("--wind-shift-y", `${windShiftY.toFixed(2)}px`);
      host.style.setProperty("--wind-pressure", `${centerFlow.pressure.toFixed(3)}`);
      host.style.setProperty("--wind-turbulence", `${turbulence.toFixed(3)}`);

      frameRef.current = window.requestAnimationFrame(render);
    };

    host.addEventListener("pointermove", updatePointerTarget, { passive: true });
    host.addEventListener("pointerleave", releasePointer);
    host.addEventListener("pointercancel", releasePointer);
    frameRef.current = window.requestAnimationFrame(render);

    return () => {
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }

      resizeObserver.disconnect();
      host.removeEventListener("pointermove", updatePointerTarget);
      host.removeEventListener("pointerleave", releasePointer);
      host.removeEventListener("pointercancel", releasePointer);
    };
  }, [hostRef, releasePointer, updatePointerTarget]);

  return <canvas ref={canvasRef} className="hero-airflow" aria-hidden="true" />;
}
