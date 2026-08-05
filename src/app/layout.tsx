import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/data/site";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: `${siteConfig.shortName} | Senior Full Stack Software Engineer`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.shortName,
  keywords: [
    "Senior Full Stack Software Engineer",
    "Enterprise Software Developer",
    "ERP Developer",
    "CRM Developer",
    "Logistics Software",
    "Indonesia Software Engineer",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  openGraph: {
    title: `${siteConfig.shortName} | Enterprise Software Engineer`,
    description: siteConfig.description,
    url: siteConfig.domain,
    siteName: siteConfig.shortName,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.shortName} | Enterprise Software Engineer`,
    description: siteConfig.description,
  },
  alternates: {
    canonical: siteConfig.domain,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  jobTitle: siteConfig.role,
  description: siteConfig.description,
  url: siteConfig.domain,
  address: {
    "@type": "PostalAddress",
    addressCountry: "ID",
  },
  knowsAbout: [
    "Enterprise software development",
    "ERP systems",
    "CRM systems",
    "Logistics platforms",
    "Backend engineering",
    "Frontend engineering",
    "Cloud deployment",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      data-lang="id"
      className={`${plusJakartaSans.variable} ${jetBrainsMono.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full bg-[var(--color-bg)] text-[var(--color-text)] antialiased">
        <ScrollReveal />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="relative flex min-h-screen flex-col overflow-x-clip">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
