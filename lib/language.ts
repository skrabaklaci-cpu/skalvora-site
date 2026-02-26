export const LANGUAGE_COOKIE = "skalvora_lang";

export type Language = "en" | "hu";

export function isLanguage(value: string | undefined): value is Language {
  return value === "en" || value === "hu";
}
