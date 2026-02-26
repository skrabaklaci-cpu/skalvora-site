"use client";

import { LANGUAGE_COOKIE, type Language } from "@/lib/language";
import { cn } from "@/lib/utils";

type LanguageSwitchProps = {
  language: Language;
  label: string;
};

export function LanguageSwitch({ language, label }: LanguageSwitchProps) {
  const setLanguage = (nextLanguage: Language) => {
    document.cookie = `${LANGUAGE_COOKIE}=${nextLanguage}; path=/; max-age=31536000; samesite=lax`;
    window.location.reload();
  };

  return (
    <div className="inline-flex items-center gap-2" role="group" aria-label={label}>
      <span className="text-xs font-semibold uppercase tracking-[0.13em] text-muted">{label}</span>
      <button
        type="button"
        className={cn(
          "rounded-full px-3 py-1 text-xs font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
          language === "en" ? "bg-accent text-white" : "bg-surface text-text hover:text-accent"
        )}
        onClick={() => setLanguage("en")}
        aria-pressed={language === "en"}
      >
        EN
      </button>
      <button
        type="button"
        className={cn(
          "rounded-full px-3 py-1 text-xs font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
          language === "hu" ? "bg-accent text-white" : "bg-surface text-text hover:text-accent"
        )}
        onClick={() => setLanguage("hu")}
        aria-pressed={language === "hu"}
      >
        HU
      </button>
    </div>
  );
}
