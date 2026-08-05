import type { Metadata } from "next";
import Link from "next/link";
import { BilingualText } from "@/components/bilingual-text";
import { notFound } from "next/navigation";
import { projects } from "@/data/site";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

const delayClasses = [
  "reveal-delay-1",
  "reveal-delay-2",
  "reveal-delay-3",
  "reveal-delay-4",
];

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {};
  }

  return {
    title: project.name,
    description: typeof project.intro === "string" ? project.intro : project.intro.en,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="page-shell section-space section-shell section-shell-violet" data-reveal>
      <Link href="/projects" className="text-sm text-white/62 transition hover:text-white">
        <BilingualText text={{ id: "Kembali ke semua proyek", en: "Back to all projects" }} />
      </Link>

      <div className="mt-8 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="reveal-up">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-accent)]">
            <BilingualText text={project.category} />
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
            {project.name}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/68">
            <BilingualText text={project.intro} />
          </p>
        </div>
        <div className="glass-panel reveal-up reveal-delay-2 rounded-[32px] p-6">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/45">
                <BilingualText text={{ id: "Tahun", en: "Year" }} />
              </p>
              <p className="mt-2 text-base text-white">{project.year}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/45">
                <BilingualText text={{ id: "Timeline", en: "Timeline" }} />
              </p>
              <p className="mt-2 text-base text-white">
                <BilingualText text={project.timeline} />
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/45">
                <BilingualText text={{ id: "Teknologi", en: "Technology" }} />
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.technology.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/58"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <div className="section-card reveal-up reveal-delay-1">
          <h2 className="text-xl font-semibold text-white">
            <BilingualText text={{ id: "Masalah Bisnis", en: "Business Problem" }} />
          </h2>
          <p className="mt-4 text-base leading-7 text-white/68">
            <BilingualText text={project.problem} />
          </p>
        </div>
        <div className="section-card reveal-up reveal-delay-2">
          <h2 className="text-xl font-semibold text-white">
            <BilingualText text={{ id: "Solusi", en: "Solution" }} />
          </h2>
          <p className="mt-4 text-base leading-7 text-white/68">
            <BilingualText text={project.solution} />
          </p>
        </div>
        <div className="section-card reveal-up reveal-delay-3">
          <h2 className="text-xl font-semibold text-white">
            <BilingualText text={{ id: "Arsitektur", en: "Architecture" }} />
          </h2>
          <p className="mt-4 text-base leading-7 text-white/68">
            <BilingualText text={project.architecture} />
          </p>
        </div>
        <div className="section-card reveal-up reveal-delay-4">
          <h2 className="text-xl font-semibold text-white">
            <BilingualText text={{ id: "Dampak Bisnis", en: "Business Impact" }} />
          </h2>
          <p className="mt-4 text-base leading-7 text-white/68">
            <BilingualText text={project.impact} />
          </p>
        </div>
      </div>

      <div className="mt-12 section-card rounded-[34px] p-7 reveal-up reveal-delay-2">
        <div className="grid gap-6 lg:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-[0.26em] text-[var(--color-accent)]">
              <BilingualText text={{ id: "Nilai Project", en: "Project Value" }} />
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-white">
              <BilingualText
                text={{
                  id: "Bukan hanya apa yang dibangun, tetapi bagaimana sistem itu membantu bisnis bergerak lebih baik.",
                  en: "Not only what was built, but how the system helped the business move better.",
                }}
              />
            </h2>
          </div>
          <div className="lg:col-span-2">
            <p className="text-base leading-8 text-white/68">
              <BilingualText
                text={{
                  id: "Setiap case study di halaman ini saya posisikan sebagai kombinasi antara pemecahan masalah, ketelitian implementasi, dan kontribusi terhadap kebutuhan operasional yang nyata. Itu sebabnya saya selalu menyorot problem, solusi, arsitektur, dan dampak bisnis secara berdampingan.",
                  en: "Each case study on this page is positioned as a mix of problem-solving, implementation discipline, and contribution to real operational needs. That is why I always present the problem, solution, architecture, and business impact side by side.",
                }}
              />
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="section-card reveal-up reveal-delay-1">
          <h2 className="text-xl font-semibold text-white">
            <BilingualText text={{ id: "Tanggung Jawab", en: "Responsibilities" }} />
          </h2>
          <div className="mt-5 space-y-3">
            {project.responsibilities.map((item, index) => (
              <p
                key={index}
                className={`rounded-2xl border border-white/8 bg-black/10 px-4 py-3 text-sm leading-7 text-white/68 reveal-up ${delayClasses[index % 4]}`}
              >
                <BilingualText text={item} />
              </p>
            ))}
          </div>
        </div>
        <div className="section-card reveal-up reveal-delay-2">
          <h2 className="text-xl font-semibold text-white">
            <BilingualText text={{ id: "Galeri & Highlight", en: "Gallery & Highlights" }} />
          </h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {project.gallery.map((item, index) => (
              <div
                key={index}
                className={`rounded-[24px] border border-white/8 bg-[linear-gradient(180deg,rgba(125,211,252,0.12),rgba(255,255,255,0.02))] p-5 text-sm leading-6 text-white/72 reveal-up ${delayClasses[index % 4]}`}
              >
                <BilingualText text={item} />
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-[24px] border border-white/8 bg-black/10 p-5">
            <h3 className="text-sm uppercase tracking-[0.3em] text-[var(--color-accent)]">
              <BilingualText text={{ id: "Pembelajaran", en: "Lessons Learned" }} />
            </h3>
            <p className="mt-3 text-sm leading-7 text-white/68">
              <BilingualText text={project.lessons} />
            </p>
          </div>
        </div>
      </div>

      {"media" in project && Array.isArray(project.media) ? (
        <div className="mt-12">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-white">
              <BilingualText text={{ id: "Visual Case Study", en: "Visual Case Study" }} />
            </h2>
            <p className="mt-3 max-w-3xl text-base leading-7 text-white/66">
              <BilingualText
                text={{
                  id: "Menambahkan foto perusahaan dan screenshot web di bagian ini akan membuat project jauh lebih kuat, karena pengunjung bisa langsung melihat konteks bisnis dan kualitas hasil implementasinya.",
                  en: "Adding company photos and product screenshots here makes the project much stronger, because visitors can immediately see the business context and the quality of the implementation.",
                }}
              />
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {project.media.map((item, index) => (
              <div
                key={index}
                className={`media-frame reveal-up ${delayClasses[index % 4]} aspect-[4/3] p-5`}
              >
                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div className="media-badge w-fit">
                    <BilingualText text={item.type} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      <BilingualText text={item.title} />
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-white/68">
                      <BilingualText text={item.description} />
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
