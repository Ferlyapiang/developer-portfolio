export type LocalizedText = {
  id: string;
  en: string;
};

type BilingualTextProps = {
  text: LocalizedText | string;
};

export function BilingualText({ text }: BilingualTextProps) {
  if (typeof text === "string") {
    return <>{text}</>;
  }

  return (
    <>
      <span data-lang="id">{text.id}</span>
      <span data-lang="en">{text.en}</span>
    </>
  );
}
