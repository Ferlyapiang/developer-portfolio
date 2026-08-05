import type { Metadata } from "next";
import Link from "next/link";
import { BilingualText } from "@/components/bilingual-text";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/data/site";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Case studies and project summaries covering banking systems, CRM, ERP, company websites, and operational platforms.",
};

const delayClasses = [
  "reveal-delay-1",
  "reveal-delay-2",
  "reveal-delay-3",
  "reveal-delay-4",
];

export default function ProjectsPage() {
  return (
    <div className="page-shell section-space section-shell section-shell-indigo" data-reveal>
      <SectionHeading
        eyebrow={{ id: "Proyek", en: "Projects" }}
        title={{
          id: "Project-project ini menunjukkan bagaimana saya bekerja pada sistem yang benar-benar dipakai bisnis.",
          en: "These projects show how I work on systems that businesses genuinely depend on.",
        }}
        description={{
          id: "Saya tidak hanya membangun fitur. Saya juga memikirkan alur kerja, struktur sistem, kemudahan penggunaan, dan dampaknya terhadap operasional sehari-hari.",
          en: "I do more than ship features. I think about workflow, system structure, usability, and the effect software has on day-to-day operations.",
        }}
      />

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {[
          { id: "Masalah bisnis", en: "Business problem" },
          { id: "Pendekatan solusi", en: "Solution approach" },
          { id: "Dampak operasional", en: "Operational impact" },
        ].map((item, index) => (
          <div
            key={item.en}
            className={`metric-card reveal-up ${delayClasses[index]}`}
          >
            <p className="text-sm uppercase tracking-[0.25em] text-[var(--color-accent)]">
              <BilingualText text={{ id: "Fokus", en: "Focus" }} />
            </p>
            <p className="mt-3 text-base text-white/72">
              <BilingualText text={item} />
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {projects.map((project, index) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className={`section-card reveal-up ${delayClasses[index % 4]} rounded-[32px] p-7`}
          >
            <div className="flex items-center justify-between gap-4">
              <p className="text-sm uppercase tracking-[0.25em] text-[var(--color-accent)]">
                <BilingualText text={project.category} />
              </p>
              <p className="text-sm text-white/42">{project.year}</p>
            </div>
            <h2 className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-white">
              {project.name}
            </h2>
            <p className="mt-2 text-sm uppercase tracking-[0.24em] text-white/44">
              <BilingualText text={project.timeline} />
            </p>
            <p className="mt-4 text-base leading-7 text-white/68">
              <BilingualText text={project.problem} />
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.technology.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/58"
                >
                  {item}
                </span>
              ))}
            </div>
            <p className="mt-6 text-sm text-[var(--color-accent)]">
              <BilingualText text={{ id: "Buka studi kasus", en: "Open case study" }} />
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
