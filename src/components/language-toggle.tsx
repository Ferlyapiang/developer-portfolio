"use client";

import { useEffect, useState } from "react";

type Language = "id" | "en";

const options: Array<{ value: Language; label: string }> = [
  { value: "id", label: "ID" },
  { value: "en", label: "EN" },
];

export function LanguageToggle() {
  const [language, setLanguage] = useState<Language>("id");

  useEffect(() => {
    document.documentElement.dataset.lang = language;
    document.documentElement.lang = language;
    window.localStorage.setItem("portfolio-language", language);
  }, [language]);

  function handleChange(next: Language) {
    setLanguage(next);
  }

  return (
    <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1">
      {options.map((option) => {
        const active = option.value === language;

        return (
          <button
            key={option.value}
            type="button"
            onClick={() => handleChange(option.value)}
            className={`rounded-full px-3 py-1.5 text-xs font-semibold tracking-[0.2em] transition ${
              active
                ? "bg-white text-slate-950"
                : "text-white/62 hover:bg-white/8 hover:text-white"
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
