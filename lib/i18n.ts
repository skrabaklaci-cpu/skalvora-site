import { cookies } from "next/headers";
import { isLanguage, type Language, LANGUAGE_COOKIE } from "@/lib/language";

export type LocalizedText = {
  en: string;
  hu: string;
};

export function getCurrentLanguage(): Language {
  const cookieStore = cookies();
  const value = cookieStore.get(LANGUAGE_COOKIE)?.value;

  if (isLanguage(value)) {
    return value;
  }

  return "en";
}

export function pickLocalizedText(value: LocalizedText, language: Language) {
  return value[language];
}
