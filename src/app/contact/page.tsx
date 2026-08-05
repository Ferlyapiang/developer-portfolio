import type { Metadata } from "next";
import { BilingualText } from "@/components/bilingual-text";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Ferly Jeremi Purnawan Apiang for software projects, consulting, modernization, or system architecture work.",
};

const contacts = [
  { label: { id: "WhatsApp", en: "WhatsApp" }, value: "082110933040", href: siteConfig.whatsapp },
  { label: { id: "Telepon", en: "Phone" }, value: "082110933040", href: "tel:082110933040" },
  { label: { id: "LinkedIn", en: "LinkedIn" }, value: "Ferly Apiang", href: siteConfig.linkedin },
  { label: { id: "GitHub", en: "GitHub" }, value: "github.com/Ferlyapiang", href: siteConfig.github },
];

const delayClasses = [
  "reveal-delay-1",
  "reveal-delay-2",
  "reveal-delay-3",
  "reveal-delay-4",
];

export default function ContactPage() {
  return (
    <div className="page-shell section-space section-shell section-shell-hero" data-reveal>
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            eyebrow={{ id: "Kontak", en: "Contact" }}
            title={{
              id: "Mari bicara jika Anda membutuhkan engineer yang bisa membantu dari sisi sistem dan implementasi.",
              en: "Let’s talk if you need an engineer who can help from both the system and implementation side.",
            }}
            description={{
              id: "Saya terbuka untuk pembangunan sistem baru, pengembangan sistem yang sudah ada, consulting, arsitektur, integrasi platform, dan kebutuhan software operasional lainnya.",
              en: "I’m open to building new systems, improving existing products, consulting, architecture work, platform integration, and other operational software needs.",
            }}
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              {
                id: "Respon cepat untuk diskusi awal",
                en: "Fast response for initial discussions",
              },
              {
                id: "Bisa mulai dari kebutuhan kecil sampai sistem besar",
                en: "Can start from smaller needs up to larger systems",
              },
            ].map((item, index) => (
              <div key={item.en} className={`metric-card reveal-up ${delayClasses[index]}`}>
                <p className="text-sm leading-7 text-white/74">
                  <BilingualText text={item} />
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 space-y-4">
            {contacts.map((item, index) => (
              <a
                key={item.label.en}
                href={item.href}
                className={`section-card reveal-up ${delayClasses[index % 4]} flex items-center justify-between p-5`}
              >
                <div>
                  <p className="text-sm uppercase tracking-[0.22em] text-white/44">
                    <BilingualText text={item.label} />
                  </p>
                  <p className="mt-2 text-base text-white/74">{item.value}</p>
                </div>
                <span className="text-sm text-white/44">
                  <BilingualText text={{ id: "Buka", en: "Open" }} />
                </span>
              </a>
            ))}
          </div>
        </div>
        <div className="glass-panel reveal-up reveal-delay-2 rounded-[34px] p-7 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-accent)]">
            <BilingualText text={{ id: "Form Inquiry", en: "Inquiry Form" }} />
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white">
            <BilingualText text={{ id: "Ringkasan proyek", en: "Project brief" }} />
          </h2>
          <p className="mt-3 text-base leading-7 text-white/66">
            <BilingualText
              text={{
                id: "Form front-end ini siap dihubungkan ke pengiriman email, automasi webhook, atau endpoint backend di tahap berikutnya.",
                en: "This front-end form is ready to be connected to email delivery, webhook automation, or a backend endpoint later.",
              }}
            />
          </p>
          <form className="mt-8 grid gap-4">
            <input
              className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none placeholder:text-white/34"
              placeholder="Nama Anda / Your name"
            />
            <input
              className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none placeholder:text-white/34"
              placeholder="Email perusahaan / Company email"
            />
            <input
              className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none placeholder:text-white/34"
              placeholder="Perusahaan atau proyek / Company or project"
            />
            <textarea
              className="min-h-40 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none placeholder:text-white/34"
              placeholder="Ceritakan sistem yang ingin Anda bangun, kembangkan, atau modernisasi / Tell me about the system you want to build, improve, or modernize."
            />
            <button
              type="button"
              className="button-primary w-fit"
            >
              <BilingualText text={{ id: "Hubungi via WhatsApp", en: "Contact via WhatsApp" }} />
            </button>
          </form>
          <p className="mt-6 text-sm leading-7 text-white/52">
            <BilingualText
              text={{
                id: "Jika Anda lebih nyaman diskusi cepat, WhatsApp biasanya menjadi jalur tercepat untuk memulai percakapan.",
                en: "If you prefer a faster conversation, WhatsApp is usually the quickest way to get started.",
              }}
            />
          </p>
        </div>
      </div>
    </div>
  );
}
