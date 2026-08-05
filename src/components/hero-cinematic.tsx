"use client";

import { BilingualText } from "@/components/bilingual-text";

const specialties = [
  { id: "ERP", en: "ERP" },
  { id: "CRM", en: "CRM" },
  { id: "API", en: "API" },
  { id: "APP", en: "APP" },
];

const highlights = [
  {
    title: { id: "Terpusat", en: "Centralized" },
    body: {
      id: "Satu alur kerja.",
      en: "One workflow.",
    },
  },
  {
    title: { id: "Rapi", en: "Structured" },
    body: {
      id: "Siap dipakai tim.",
      en: "Ready for teams.",
    },
  },
  {
    title: { id: "Scalable", en: "Scalable" },
    body: {
      id: "Siap berkembang.",
      en: "Built to grow.",
    },
  },
];

const orbitNodes = [
  { label: "ERP", className: "orbit-node-a" },
  { label: "CRM", className: "orbit-node-b" },
  { label: "API", className: "orbit-node-c" },
  { label: "WEB", className: "orbit-node-d" },
];

export function HeroCinematic() {
  return (
    <div className="hero-board" data-reveal>
      <div className="hero-board__noise" />
      <div className="hero-board__glow hero-board__glow-a" />
      <div className="hero-board__glow hero-board__glow-b" />
      <div className="hero-board__grid" />
      <div className="hero-orbit" aria-hidden="true">
        <div className="hero-orbit__ring hero-orbit__ring-outer" />
        <div className="hero-orbit__ring hero-orbit__ring-inner" />
        <div className="hero-orbit__core">
          <span>SYSTEM</span>
        </div>
        {orbitNodes.map((node) => (
          <div key={node.label} className={`orbit-node ${node.className}`}>
            <span>{node.label}</span>
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
          <span className="hero-board__title hero-board__title-main">HI, I&apos;M FERLY</span>
          <span className="hero-board__title hero-board__title-sub">SYSTEMS ENGINEER</span>
        </div>

        <div className="hero-board__traces">
          <span className="trace trace-a" />
          <span className="trace trace-b" />
          <span className="trace trace-c" />
          <span className="trace trace-d" />
        </div>

        <div className="hero-board__chipset">
          {specialties.map((item) => (
            <div key={item.en} className="hero-chip">
              <BilingualText text={item} />
            </div>
          ))}
        </div>

        <div className="hero-board__cards">
          {highlights.map((item) => (
            <article key={item.title.en} className="hero-card">
              <p className="hero-card__title">
                <BilingualText text={item.title} />
              </p>
              <p className="hero-card__body">
                <BilingualText text={item.body} />
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
