import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/contact-form";
import { SectionHeading } from "@/components/ui/section-heading";
import { getSiteConfig } from "@/content/site";
import { getCurrentLanguage } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Skalvora to book a discovery call, request a workflow audit, or join the automations waitlist."
};

export default function ContactPage() {
  const language = getCurrentLanguage();
  const siteConfig = getSiteConfig(language);

  return (
    <div className="section-shell py-16 sm:py-20">
      <SectionHeading
        eyebrow={language === "hu" ? "Kapcsolat" : "Contact"}
        title={
          language === "hu"
            ? "Fejlesszük együtt azt a folyamatot, amely most a legtöbb időt viszi el"
            : "Let’s improve the process that is costing your team the most time"
        }
        description={
          language === "hu"
            ? "Írd le a helyzetet, és javaslunk egy konkrét következő lépést."
            : "Share your context and we will suggest next steps."
        }
      />

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <ContactForm language={language} />

        <aside className="space-y-6">
          <article className="rounded-xl2 border border-border bg-surface p-6 shadow-card">
            <h2 className="text-xl font-semibold">
              {language === "hu" ? "Hívás foglalása" : "Book a call"}
            </h2>
            <p className="mt-3 text-sm text-muted">
              {language === "hu"
                ? "Ha inkább beszélnél először, írj nekünk emailt, és küldünk elérhető időpontokat."
                : "Prefer to talk first? Email us and we will share available discovery call slots."}
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-4 inline-flex text-sm font-semibold text-accent underline-offset-4 hover:underline"
            >
              {siteConfig.email}
            </a>
          </article>

          <article className="rounded-xl2 border border-border bg-surface p-6 shadow-card">
            <h2 className="text-xl font-semibold">
              {language === "hu" ? "Mire számíthatsz" : "Response expectations"}
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              {(language === "hu"
                ? [
                    "Általában 1 munkanapon belül válaszolunk",
                    "Első fit értékelés és javasolt scope",
                    "Következő lépés javaslat auditra vagy workshopra"
                  ]
                : [
                    "Typical response in one business day",
                    "Initial fit assessment and recommended scope",
                    "Next-step proposal for audit or workshop"
                  ]).map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </article>
        </aside>
      </div>
    </div>
  );
}
