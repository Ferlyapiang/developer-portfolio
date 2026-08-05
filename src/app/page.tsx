import Link from "next/link";
import { BilingualText } from "@/components/bilingual-text";
import { HeroCinematic } from "@/components/hero-cinematic";
import { SectionHeading } from "@/components/section-heading";
import {
  projects,
  services,
  siteConfig,
  techStack,
  trustAreas,
} from "@/data/site";

const delayClasses = [
  "reveal-delay-1",
  "reveal-delay-2",
  "reveal-delay-3",
  "reveal-delay-4",
];

const serviceBadges = [
  "Enterprise",
  "Custom",
  "CRM",
  "Centralized",
  "Logistics",
  "Backend",
  "Frontend",
  "Cloud",
  "Application",
  "AI",
];

export default function Home() {
  return (
    <div className="space-y-6 pb-12 sm:space-y-8 sm:pb-16">
      <section className="page-shell section-space section-shell section-shell-hero relative overflow-hidden pt-10 sm:pt-14">
        <div className="hero-grid" />
        <div className="hero-sweep" />
        <div className="hero-glow float-slow left-0 top-16" />
        <div className="hero-glow float-slower right-0 top-32" />

        <div className="grid gap-10 xl:grid-cols-[0.95fr_1.05fr] xl:items-center">
          <div data-reveal>
            <div className="reveal-up">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/74 pulse-border">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <BilingualText text={siteConfig.experience} />
            </div>
            <h1 className="mt-8 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl">
              <BilingualText text={siteConfig.headline} />
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70 sm:text-xl">
              <BilingualText text={siteConfig.subheadline} />
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/projects" className="button-primary">
                <BilingualText text={{ id: "Lihat Proyek", en: "View My Work" }} />
              </Link>
              <Link href="/contact" className="button-secondary">
                <BilingualText text={{ id: "Hubungi Saya", en: "Hire Me" }} />
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="metric-card reveal-up reveal-delay-1">
                <p className="metric-value">4+</p>
                <p className="mt-2 text-sm text-white/60">
                  <BilingualText text={{ id: "Tahun membangun sistem yang berjalan di production", en: "Years building systems that run in production" }} />
                </p>
              </div>
              <div className="metric-card reveal-up reveal-delay-2">
                <p className="metric-value">Multi-platform</p>
                <p className="mt-2 text-sm text-white/60">
                  <BilingualText text={{ id: "Web admin, customer portal, mobile, dan backend yang saling terhubung", en: "Admin web, customer portal, mobile, and backend working together" }} />
                </p>
              </div>
              <div className="metric-card reveal-up reveal-delay-3">
                <p className="metric-value">Consulting</p>
                <p className="mt-2 text-sm text-white/60">
                  <BilingualText text={{ id: "Dari arsitektur, pengembangan, hingga modernisasi sistem yang sudah ada", en: "From architecture and development to modernization of existing systems" }} />
                </p>
              </div>
            </div>
            </div>
          </div>
          <HeroCinematic />
        </div>
      </section>

      <section className="page-shell pb-8 section-shell section-shell-soft" data-reveal>
        <div className="mb-4">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-accent)]">
            <BilingualText text={{ id: "Bekerja Sama Dengan", en: "Worked With" }} />
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {trustAreas.map((item) => (
            <div key={item} className="tag-chip">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="page-shell section-space section-shell section-shell-cyan" data-reveal>
        <div className="service-room" aria-hidden="true">
          <div className="service-room__grid" />
          <div className="service-room__floor" />
          <div className="service-room__wall service-room__wall-left" />
          <div className="service-room__wall service-room__wall-right" />
          <div className="service-room__light service-room__light-a" />
          <div className="service-room__light service-room__light-b" />
        </div>
        <SectionHeading
          eyebrow={{ id: "Layanan", en: "Services" }}
          title={{
            id: "Yang bisa saya bangun.",
            en: "What I can build.",
          }}
          description={{
            id: "Langsung ke intinya.",
            en: "Straight to the point.",
          }}
        />
        <div className="service-room__cards mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {services.map((service, index) => (
            <div
              key={service.slug}
              className={`section-card service-card ${delayClasses[index % 4]} rounded-[30px]`}
            >
              <p className="service-card__badge">
                {serviceBadges[index]}
              </p>
              <div className="service-card__orb" aria-hidden="true">
                <span>{serviceBadges[index].slice(0, 2)}</span>
              </div>
              <p className="text-lg font-semibold text-white">
                <BilingualText text={service.title} />
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {service.outcomes.map((outcome, outcomeIndex) => (
                  <span
                    key={outcomeIndex}
                    className="service-card__tag"
                  >
                    <BilingualText text={outcome} />
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="page-shell section-space section-shell section-shell-indigo" data-reveal>
        <div className="flex items-end justify-between gap-6">
          <SectionHeading
            eyebrow={{ id: "Proyek Unggulan", en: "Featured Projects" }}
            title={{
              id: "Beberapa project ini menunjukkan bagaimana saya bekerja di sistem yang benar-benar dipakai bisnis.",
              en: "These selected projects show how I work on systems that businesses actually depend on.",
            }}
            description={{
              id: "Bukan hanya apa yang dibangun, tetapi juga bagaimana saya memecahkan masalah, menyusun arsitektur, dan menjaga agar sistem tetap relevan untuk kebutuhan operasional.",
              en: "They show not only what was built, but how I solve business problems, shape architecture, and keep software relevant to operational needs.",
            }}
          />
          <Link href="/projects" className="hidden text-sm font-medium text-white/70 transition hover:text-white md:block">
            <BilingualText text={{ id: "Lihat semua proyek", en: "See all projects" }} />
          </Link>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className={`section-card project-card ${delayClasses[index % 4]} rounded-[32px] p-7`}
            >
              <div className="project-card__glyph" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm uppercase tracking-[0.25em] text-[var(--color-accent)]">
                  <BilingualText text={project.category} />
                </p>
                <p className="text-sm text-white/42">{project.year}</p>
              </div>
              <h3 className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-white">
                {project.name}
              </h3>
              <p className="mt-4 text-base leading-7 text-white/68">
                <BilingualText text={project.intro} />
              </p>
              <div className="mt-6 flex items-center justify-between text-sm text-white/52">
                <span><BilingualText text={project.timeline} /></span>
                <span><BilingualText text={{ id: "Lihat studi kasus", en: "View case study" }} /></span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="page-shell section-space section-shell section-shell-soft" data-reveal>
        <SectionHeading
          eyebrow={{ id: "Tech Stack", en: "Tech Stack" }}
          title={{
            id: "Stack yang paling sering saya pakai.",
            en: "Stack I use the most.",
          }}
          description={{
            id: "Praktis, stabil, dan enak dikembangkan.",
            en: "Practical, stable, and easy to build on.",
          }}
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-4">
          {Object.entries(techStack).map(([category, items], index) => (
            <div key={category} className={`section-card stack-card ${delayClasses[index]}`}>
              <div className="stack-card__icon" aria-hidden="true">
                {category.slice(0, 2)}
              </div>
              <p className="text-lg font-semibold text-white">{category}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-black/10 px-3 py-2 text-sm text-white/68"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="page-shell section-space pt-8 section-shell section-shell-hero" data-reveal>
        <div className="glass-panel rounded-[36px] px-8 py-10 sm:px-10 sm:py-12">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-accent)]">
            <BilingualText text={{ id: "Kontak", en: "Contact" }} />
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
            <BilingualText
              text={{
                id: "Jika Anda butuh engineer untuk membangun, merapikan, atau mengembangkan sistem yang sudah ada, saya siap membantu.",
                en: "If you need an engineer to build, improve, or scale an existing system, I am ready to help.",
              }}
            />
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/68">
            <BilingualText text={siteConfig.availability} />
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={siteConfig.whatsapp} className="button-primary">
              <BilingualText text={{ id: "WhatsApp Saya", en: "WhatsApp Me" }} />
            </a>
            <a href={siteConfig.linkedin} className="button-secondary">
              LinkedIn
            </a>
            <a href={siteConfig.github} className="button-secondary">
              GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
