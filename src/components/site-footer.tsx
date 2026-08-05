import Link from "next/link";
import { BilingualText } from "@/components/bilingual-text";
import { siteConfig } from "@/data/site";

const links = [
  { href: "/projects", label: { id: "Proyek", en: "Projects" } },
  { href: "/services", label: { id: "Layanan", en: "Services" } },
  { href: "/contact", label: { id: "Kontak", en: "Contact" } },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#050816]">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-10 lg:flex-row lg:items-end lg:justify-between lg:px-10">
        <div className="max-w-2xl">
          <p className="text-lg font-semibold text-white">{siteConfig.shortName}</p>
          <p className="mt-2 text-sm leading-7 text-white/62">
            <BilingualText text={siteConfig.role} />{" "}
            <BilingualText
              text={{
                id: "yang berfokus pada sistem enterprise, platform operasional, dan software yang benar-benar memberi nilai bisnis.",
                en: "focused on enterprise systems, operational platforms, and software that creates real business value.",
              }}
            />
          </p>
          <p className="mt-4 text-sm leading-7 text-white/44">
            <BilingualText
              text={{
                id: "Membangun sistem yang lebih rapi, lebih terhubung, dan lebih siap dipakai bisnis setiap hari.",
                en: "Building systems that are cleaner, more connected, and ready for everyday business use.",
              }}
            />
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-5 text-sm text-white/68">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-white">
              <BilingualText text={link.label} />
            </Link>
          ))}
          <a href={siteConfig.github} className="transition hover:text-white">
            GitHub
          </a>
          <a href={siteConfig.linkedin} className="transition hover:text-white">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
