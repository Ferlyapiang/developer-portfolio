import type { Metadata } from "next";
import { BilingualText } from "@/components/bilingual-text";
import { SectionHeading } from "@/components/section-heading";
import { blogPosts } from "@/data/site";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "A future-ready blog section for writing about enterprise systems, custom software, and software delivery strategy.",
};

export default function BlogPage() {
  return (
    <div className="page-shell section-space section-shell section-shell-soft" data-reveal>
      <SectionHeading
        eyebrow={{ id: "Blog", en: "Blog" }}
        title={{
          id: "Blog ini saya siapkan untuk menulis cara saya memikirkan sistem, operasional, dan pengembangan software.",
          en: "This blog is prepared for writing about how I think through systems, operations, and software development.",
        }}
        description={{
          id: "Ke depannya, bagian ini akan berisi insight dari pengalaman membangun platform enterprise, dashboard operasional, CRM, ERP, sampai pendekatan arsitektur yang lebih maintainable.",
          en: "Over time, this section will include insights from building enterprise platforms, operational dashboards, CRM, ERP, and more maintainable system architectures.",
        }}
      />
      <div className="mt-8 rounded-[30px] border border-white/10 bg-white/[0.04] p-6 text-white/68">
        <p className="max-w-3xl text-base leading-8">
          <BilingualText
            text={{
              id: "Tujuannya bukan sekadar menulis artikel teknis, tetapi menjelaskan bagaimana keputusan software memengaruhi kecepatan kerja tim, kualitas operasional, dan skalabilitas bisnis.",
              en: "The goal is not only to publish technical articles, but to explain how software decisions affect team velocity, operational quality, and business scalability.",
            }}
          />
        </p>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <article key={post.slug} className="section-card rounded-[30px]">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
              <BilingualText text={post.status} />
            </p>
            <h2 className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-white">
              <BilingualText text={post.title} />
            </h2>
            <p className="mt-4 text-base leading-7 text-white/66">
              <BilingualText text={post.excerpt} />
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
