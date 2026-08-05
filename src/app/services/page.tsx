import type { Metadata } from "next";
import { BilingualText } from "@/components/bilingual-text";
import { SectionHeading } from "@/components/section-heading";
import { services } from "@/data/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Detailed software engineering services covering ERP, CRM, web apps, dashboards, APIs, logistics systems, cloud deployment, and modernization.",
};

const delayClasses = [
  "reveal-delay-1",
  "reveal-delay-2",
  "reveal-delay-3",
  "reveal-delay-4",
];

export default function ServicesPage() {
  return (
    <div className="page-shell section-space section-shell section-shell-cyan" data-reveal>
      <SectionHeading
        eyebrow={{ id: "Layanan", en: "Services" }}
        title={{
          id: "Layanan saya dirancang untuk perusahaan yang membutuhkan software yang benar-benar dipakai.",
          en: "My services are built for companies that need software people will actually use.",
        }}
        description={{
          id: "Mulai dari membangun sistem baru, menghubungkan platform yang sudah ada, sampai modernisasi aplikasi lama. Fokus saya selalu pada sistem yang membuat operasional lebih rapi, lebih cepat, dan lebih mudah dikembangkan.",
          en: "From building new systems to connecting existing platforms and modernizing legacy applications, my focus stays on software that makes operations cleaner, faster, and easier to grow.",
        }}
      />
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {[
          {
            id: "Software untuk operasional nyata",
            en: "Software for real operations",
          },
          {
            id: "Web, mobile, backend, dan integrasi dalam satu arah",
            en: "Web, mobile, backend, and integration under one direction",
          },
          {
            id: "Bisa mulai dari nol atau lanjutkan sistem yang sudah ada",
            en: "Can start from zero or continue an existing system",
          },
        ].map((item, index) => (
          <div key={item.en} className={`metric-card reveal-up ${delayClasses[index]}`}>
            <p className="text-sm leading-7 text-white/74">
              <BilingualText text={item} />
            </p>
          </div>
        ))}
      </div>
      <div className="mt-10 grid gap-6">
        {services.map((service, index) => (
          <div
            key={service.slug}
            className={`section-card reveal-up ${delayClasses[index % 4]} grid gap-6 rounded-[32px] p-7 lg:grid-cols-[0.82fr_1.18fr]`}
          >
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-[var(--color-accent)]">
                <BilingualText text={{ id: "Layanan", en: "Service" }} />
              </p>
              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-white">
                <BilingualText text={service.title} />
              </h2>
              <p className="mt-4 text-base leading-7 text-white/68">
                <BilingualText text={service.summary} />
              </p>
            </div>
            <div>
              <p className="text-base leading-7 text-white/70">
                <BilingualText text={service.details} />
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                {service.outcomes.map((outcome, outcomeIndex) => (
                  <span
                    key={outcomeIndex}
                    className="rounded-full border border-white/10 bg-black/10 px-3 py-2 text-sm text-white/60"
                  >
                    <BilingualText text={outcome} />
                  </span>
                ))}
              </div>
              <p className="mt-6 text-sm leading-7 text-white/52">
                <BilingualText
                  text={{
                    id: "Setiap layanan bisa disesuaikan dengan kondisi sistem, kompleksitas bisnis, tim yang terlibat, dan target pengembangan ke depan.",
                    en: "Each service can be adapted to the condition of the system, business complexity, team structure, and the direction of future development.",
                  }}
                />
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
