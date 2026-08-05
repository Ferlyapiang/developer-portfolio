"use client";

import { useRef } from "react";
import { BilingualText } from "@/components/bilingual-text";
import { HeroAirflow } from "@/components/hero-airflow";

const orbitNodes = [
  { label: { id: "ERP", en: "ERP" }, className: "orbit-node-a" },
  { label: { id: "CRM", en: "CRM" }, className: "orbit-node-b" },
  { label: { id: "API", en: "API" }, className: "orbit-node-c" },
  { label: { id: "WEB", en: "WEB" }, className: "orbit-node-d" },
];

const moleculeNodes = [
  { className: "hero-molecule__node hero-molecule__node-a" },
  { className: "hero-molecule__node hero-molecule__node-b" },
  { className: "hero-molecule__node hero-molecule__node-c" },
  { className: "hero-molecule__node hero-molecule__node-d" },
  { className: "hero-molecule__node hero-molecule__node-e" },
  { className: "hero-molecule__node hero-molecule__node-f" },
];

const dnaSteps = Array.from({ length: 8 }, (_, index) => index);

const floatingTexts = [
  { id: "CFD", en: "CFD" },
  { id: "ALIRAN", en: "STREAM" },
  { id: "TEKANAN", en: "PRESSURE" },
  { id: "VORTEKS", en: "VORTEX" },
];

export function HeroCinematic() {
  const boardRef = useRef<HTMLDivElement | null>(null);

  return (
    <div ref={boardRef} className="hero-board" data-reveal>
      <HeroAirflow hostRef={boardRef} />
      <div className="hero-board__noise" />
      <div className="hero-board__glow hero-board__glow-a" />
      <div className="hero-board__glow hero-board__glow-b" />
      <div className="hero-board__grid" />
      <div className="hero-fog" aria-hidden="true">
        <span className="hero-fog__cloud hero-fog__cloud-a" />
        <span className="hero-fog__cloud hero-fog__cloud-b" />
      </div>
      <div className="hero-molecule" aria-hidden="true">
        <span className="hero-molecule__bond hero-molecule__bond-a" />
        <span className="hero-molecule__bond hero-molecule__bond-b" />
        <span className="hero-molecule__bond hero-molecule__bond-c" />
        {moleculeNodes.map((node) => (
          <span key={node.className} className={node.className} />
        ))}
      </div>
      <div className="hero-dna" aria-hidden="true">
        {dnaSteps.map((step) => (
          <span key={step} className="hero-dna__step" style={{ ["--step" as string]: step }} />
        ))}
      </div>
        <div className="hero-floating-text" aria-hidden="true">
          {floatingTexts.map((item) => (
            <span key={item.en}>
              <BilingualText text={item} />
            </span>
          ))}
        </div>
      <div className="hero-orbit" aria-hidden="true">
        <div className="hero-orbit__ring hero-orbit__ring-outer" />
        <div className="hero-orbit__ring hero-orbit__ring-inner" />
        <div className="hero-orbit__core">
          <span>
            <BilingualText text={{ id: "SISTEM", en: "SYSTEM" }} />
          </span>
        </div>
        {orbitNodes.map((node) => (
          <div key={node.label.en} className={`orbit-node ${node.className}`}>
            <span>
              <BilingualText text={node.label} />
            </span>
          </div>
        ))}
      </div>
      <div className="hero-cubes" aria-hidden="true">
        <span className="hero-cube hero-cube-a" />
        <span className="hero-cube hero-cube-b" />
        <span className="hero-cube hero-cube-c" />
      </div>

      <div className="hero-board__frame">
        <div className="hero-board__topline">
          <div className="hero-board__name">
            <span className="hero-board__eyebrow">FERLY APIANG</span>
            <span className="hero-board__role">
              <BilingualText
                text={{
                  id: "Software Engineer untuk sistem yang dipakai bisnis sehari-hari",
                  en: "Software engineer for systems businesses rely on every day",
                }}
              />
            </span>
          </div>
          <div className="hero-board__signal">
            <span className="hero-dot" />
            <BilingualText text={{ id: "Terbuka untuk project", en: "Open for projects" }} />
          </div>
        </div>

        <div className="hero-board__headline">
          <span className="hero-board__title hero-board__title-main">
            <BilingualText text={{ id: "HALO, SAYA FERLY", en: "HI, I&apos;M FERLY" }} />
          </span>
          <span className="hero-board__title hero-board__title-sub">
            <BilingualText text={{ id: "ENGINEER SISTEM", en: "SYSTEMS ENGINEER" }} />
          </span>
        </div>

        <div className="hero-board__traces">
          <span className="trace trace-a" />
          <span className="trace trace-b" />
          <span className="trace trace-c" />
          <span className="trace trace-d" />
        </div>
      </div>
    </div>
  );
}
