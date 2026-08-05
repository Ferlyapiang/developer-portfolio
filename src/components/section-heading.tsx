import { BilingualText, type LocalizedText } from "@/components/bilingual-text";

type SectionHeadingProps = {
  eyebrow: LocalizedText;
  title: LocalizedText;
  description: LocalizedText;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl";

  return (
    <div className={alignment}>
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-accent)]">
        <BilingualText text={eyebrow} />
      </p>
      <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
        <BilingualText text={title} />
      </h2>
      <p className="mt-4 text-base leading-7 text-white/68 sm:text-lg">
        <BilingualText text={description} />
      </p>
    </div>
  );
}
