"use client";

import { BilingualText } from "@/components/bilingual-text";

const specialties = [
  { id: "Enterprise Systems", en: "Enterprise Systems" },
  { id: "ERP & CRM", en: "ERP & CRM" },
  { id: "Web & Mobile Flow", en: "Web & Mobile Flow" },
  { id: "Backend & API", en: "Backend & API" },
];

const highlights = [
  {
    title: { id: "Sistem Terpusat", en: "Centralized Systems" },
    body: {
      id: "Menyatukan dashboard admin, customer portal, mobile app, dan backend dalam satu alur kerja.",
      en: "Connecting admin dashboards, customer portals, mobile apps, and backend services into one workflow.",
    },
  },
  {
    title: { id: "Operational Ready", en: "Operational Ready" },
    body: {
      id: "Dibangun untuk kebutuhan nyata seperti approval flow, reporting, inventory, dan tracking.",
      en: "Built for real needs like approval flows, reporting, inventory, and tracking.",
    },
  },
  {
    title: { id: "Scalable Build", en: "Scalable Build" },
    body: {
      id: "Struktur sistem disiapkan agar aman untuk pengembangan berikutnya, bukan hanya cepat jadi.",
      en: "Structured for future growth, not only for a fast first release.",
    },
  },
];

export function HeroCinematic() {
  return (
    <div className="hero-board" data-reveal>
      <div className="hero-board__noise" />
      <div className="hero-board__glow hero-board__glow-a" />
      <div className="hero-board__glow hero-board__glow-b" />
      <div className="hero-board__grid" />

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
          <span className="hero-board__title hero-board__title-sub">FULL STACK ENGINEER</span>
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
