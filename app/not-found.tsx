import { Button } from "@/components/ui/button";
import { getCurrentLanguage } from "@/lib/i18n";

export default function NotFound() {
  const language = getCurrentLanguage();

  return (
    <div className="section-shell py-24 text-center">
      <p className="text-xs uppercase tracking-[0.14em] text-muted">404</p>
      <h1 className="mt-3 text-4xl font-semibold">
        {language === "hu" ? "Az oldal nem található" : "Page not found"}
      </h1>
      <p className="mx-auto mt-4 max-w-xl text-sm text-muted">
        {language === "hu"
          ? "A keresett oldal lehet, hogy áthelyezésre került. Folytasd a kezdőlapról, vagy írj nekünk közvetlenül."
          : "The page you are looking for may have moved. Continue from the homepage or contact us for direct support."}
      </p>
      <div className="mt-6 flex justify-center gap-3">
        <Button href="/">{language === "hu" ? "Vissza a kezdőlapra" : "Back to home"}</Button>
        <Button href="/contact" variant="secondary">
          {language === "hu" ? "Kapcsolat" : "Contact us"}
        </Button>
      </div>
    </div>
  );
}
