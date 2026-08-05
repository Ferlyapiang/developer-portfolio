import Link from "next/link";
import { BilingualText } from "@/components/bilingual-text";
import { LanguageToggle } from "@/components/language-toggle";
import { siteConfig } from "@/data/site";

const navItems = [
  { href: "/", label: { id: "Beranda", en: "Home" } },
  { href: "/projects", label: { id: "Proyek", en: "Projects" } },
  { href: "/services", label: { id: "Layanan", en: "Services" } },
  { href: "/blog", label: { id: "Blog", en: "Blog" } },
  { href: "/contact", label: { id: "Kontak", en: "Contact" } },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(7,10,20,0.72)] backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4 lg:px-10">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/6 text-sm font-semibold text-white">
            FA
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-white">{siteConfig.shortName}</p>
            <p className="truncate text-xs text-white/52">
              <BilingualText text={siteConfig.role} />
            </p>
          </div>
        </Link>
        <nav className="order-3 flex w-full items-center gap-5 overflow-x-auto pb-1 text-sm md:order-2 md:w-auto md:justify-center md:overflow-visible md:pb-0">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="shrink-0 text-white/72 transition hover:text-white"
            >
              <BilingualText text={item.label} />
            </Link>
          ))}
        </nav>
        <div className="order-2 flex items-center gap-3 md:order-3">
          <LanguageToggle />
          <Link href="/contact" className="button-primary px-4 py-2">
            <BilingualText text={{ id: "Hire Me", en: "Hire Me" }} />
          </Link>
        </div>
      </div>
    </header>
  );
}
