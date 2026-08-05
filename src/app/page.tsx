import Link from "next/link";
import { BilingualText } from "@/components/bilingual-text";
import { HeroCinematic } from "@/components/hero-cinematic";
import { SectionHeading } from "@/components/section-heading";
import {
  differentiators,
  faqs,
  processSteps,
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

      <section className="page-shell section-space section-shell section-shell-violet" data-reveal>
        <SectionHeading
          eyebrow={{ id: "Tentang", en: "About" }}
          title={{
            id: "Saya membangun software yang bukan hanya jadi, tapi benar-benar dipakai dan membantu bisnis berjalan lebih rapi.",
            en: "I build software that does more than launch. It gets used, trusted, and keeps the business running better.",
          }}
          description={{
            id: "Bidang saya ada di titik pertemuan antara kebutuhan bisnis dan sistem teknis: mulai dari ERP, CRM, dashboard internal, platform operasional, sampai integrasi web dan mobile. Saya suka membangun sistem yang terstruktur, scalable, dan tetap nyaman dipakai user setiap hari.",
            en: "My work sits at the intersection of business needs and technical execution: ERP, CRM, internal dashboards, operational platforms, and connected web and mobile systems. I like building software that is structured, scalable, and still pleasant for teams to use every day.",
          }}
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="section-card">
            <p className="text-sm uppercase tracking-[0.24em] text-[var(--color-accent)]">
              <BilingualText text={{ id: "Posisi inti", en: "Core positioning" }} />
            </p>
            <h3 className="mt-5 text-3xl font-semibold tracking-[-0.05em] text-white">
              <BilingualText
                text={{
                  id: "Saya masuk ketika perusahaan membutuhkan sistem yang lebih rapi, lebih cepat, dan lebih bisa dikembangkan ke depan.",
                  en: "I step in when a company needs systems that are cleaner, faster, and easier to grow over time.",
                }}
              />
            </h3>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/68">
              <BilingualText
                text={{
                  id: "Biasanya masalahnya datang dari proses yang masih manual, tools yang terpisah-pisah, data yang tidak sinkron, atau dashboard yang tidak cukup membantu user. Saya menyusun ulang itu menjadi software yang lebih jelas, terintegrasi, dan siap dipakai di level operasional.",
                  en: "That usually means replacing manual processes, disconnected tools, unsynced data, or dashboards that are not helping enough. I turn those situations into software that is clearer, more integrated, and ready for real operational use.",
                }}
              />
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            {[
              { id: "Pengembangan Software Enterprise", en: "Enterprise Software Development" },
              { id: "Backend dan Frontend Engineering", en: "Backend and Frontend Engineering" },
              { id: "Arsitektur, Deployment, dan Delivery Operasional", en: "Architecture, Deployment, and Operational Delivery" },
            ].map((item, index) => (
              <div key={item.en} className={`section-card ${delayClasses[index]}`}>
                <p className="text-lg font-semibold text-white">
                  <BilingualText text={item} />
                </p>
                <p className="mt-3 text-sm leading-7 text-white/66">
                  <BilingualText
                    text={{
                      id: "Cocok untuk perusahaan yang ingin keluar dari proses yang berantakan menuju sistem yang lebih terpusat, stabil, dan siap berkembang.",
                      en: "Built for companies that want to move from fragmented processes into systems that are centralized, stable, and ready to grow.",
                    }}
                  />
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell section-space section-shell section-shell-cyan" data-reveal>
        <SectionHeading
          eyebrow={{ id: "Layanan", en: "Services" }}
          title={{
            id: "Layanan yang saya tawarkan berfokus pada sistem yang dipakai bisnis, bukan sekadar tampilan.",
            en: "The services I offer are focused on business systems, not surface-level presentation.",
          }}
          description={{
            id: "Mulai dari pengembangan sistem baru, penyatuan platform yang sudah ada, sampai konsultasi dan modernisasi software. Tujuannya satu: membantu proses kerja jadi lebih tertata, terukur, dan efisien.",
            en: "From building new systems to unifying existing platforms, consulting, and modernization. The goal is always the same: make operations more structured, measurable, and efficient.",
          }}
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={service.slug}
              className={`section-card ${delayClasses[index % 4]} rounded-[30px]`}
            >
              <p className="text-lg font-semibold text-white">
                <BilingualText text={service.title} />
              </p>
              <p className="mt-3 text-sm leading-7 text-white/66">
                <BilingualText text={service.summary} />
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {service.outcomes.map((outcome, outcomeIndex) => (
                  <span
                    key={outcomeIndex}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/62"
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
              className={`section-card ${delayClasses[index % 4]} rounded-[32px] p-7`}
            >
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
            id: "Saya menggunakan stack yang realistis untuk sistem yang harus stabil, terukur, dan mudah dirawat.",
            en: "I use tools that are practical for systems that need to be stable, measurable, and maintainable.",
          }}
          description={{
            id: "Bagi saya, stack bukan soal tren. Yang penting adalah seberapa kuat dia mendukung arsitektur, kecepatan development, dan kenyamanan tim dalam jangka panjang.",
            en: "For me, the stack is not about trends. It is about how well it supports architecture, development speed, and long-term team maintainability.",
          }}
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-4">
          {Object.entries(techStack).map(([category, items], index) => (
            <div key={category} className={`section-card ${delayClasses[index]}`}>
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

      <section className="page-shell section-space section-shell section-shell-violet" data-reveal>
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow={{ id: "Proses", en: "Process" }}
              title={{
                id: "Saya bekerja dengan proses yang jelas supaya kebutuhan bisnis tidak hilang di tengah pengembangan.",
                en: "I follow a clear process so business needs do not get lost during development.",
              }}
              description={{
                id: "Dari pemahaman masalah, perencanaan teknis, desain flow, implementasi, sampai deployment. Tujuannya agar proyek tetap bergerak, minim miskomunikasi, dan hasil akhirnya benar-benar bisa dipakai.",
                en: "From understanding the problem to technical planning, flow design, implementation, and deployment. The goal is to keep the project moving, reduce ambiguity, and produce something teams can truly use.",
              }}
            />
          </div>
          <div className="max-h-[34rem] space-y-4 overflow-y-auto pr-2 lg:pr-3">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`section-card ${delayClasses[index % 4]} flex items-start gap-4 p-5`}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/6 text-sm font-semibold text-white">
                  {index + 1}
                </div>
                <p className="pt-1 text-base leading-7 text-white/70">
                  <BilingualText text={step} />
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell section-space section-shell section-shell-cyan" data-reveal>
        <SectionHeading
          eyebrow={{ id: "Mengapa Saya", en: "Why Choose Me" }}
          title={{
            id: "Saya cocok untuk tim yang butuh engineer yang bisa berpikir sistem, bukan hanya mengerjakan ticket.",
            en: "I am a strong fit for teams that need an engineer who thinks in systems, not just tickets.",
          }}
          description={{
            id: "Saya terbiasa melihat software dari dua sisi sekaligus: dari sudut pandang bisnis yang membutuhkan hasil, dan dari sisi teknis yang harus tetap aman, rapi, dan bisa dikembangkan lagi.",
            en: "I look at software from both sides at once: the business side that needs outcomes, and the technical side that must remain clean, secure, and extensible.",
          }}
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {differentiators.map((item, index) => (
            <div
              key={index}
              className={`section-card ${delayClasses[index % 4]}`}
            >
              <p className="text-base leading-7 text-white/74">
                <BilingualText text={item} />
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="page-shell section-space section-shell section-shell-indigo" data-reveal>
        <SectionHeading
          eyebrow={{ id: "FAQ", en: "FAQ" }}
          title={{
            id: "Pertanyaan yang biasanya muncul sebelum mulai kerja sama.",
            en: "Questions that usually come up before a project starts.",
          }}
          description={{
            id: "Saya siapkan jawaban singkat untuk hal-hal yang paling sering ditanyakan oleh owner bisnis, HR, maupun tim teknis.",
            en: "Here are concise answers to the things business owners, HR teams, and technical stakeholders usually ask first.",
          }}
        />
        <div className="mt-10 grid gap-5">
          {faqs.map((item, index) => (
            <div
              key={index}
              className={`section-card ${delayClasses[index % 4]}`}
            >
              <h3 className="text-lg font-semibold text-white">
                <BilingualText text={item.question} />
              </h3>
              <p className="mt-3 text-sm leading-7 text-white/66">
                <BilingualText text={item.answer} />
              </p>
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
