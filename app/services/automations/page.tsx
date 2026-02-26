import type { Metadata } from "next";
import { CtaBlock } from "@/components/ui/cta-block";
import { SectionHeading } from "@/components/ui/section-heading";
import { getCurrentLanguage } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Automations",
  description:
    "Skalvora automations are coming soon. Join the waitlist for implementation-focused workflow automation offers."
};

export default function AutomationsPage() {
  const language = getCurrentLanguage();

  const copy = {
    eyebrow: language === "hu" ? "Hamarosan" : "Coming soon",
    title:
      language === "hu"
        ? "Automatizációs megvalósítási csomagok"
        : "Automation implementation packages",
    description:
      language === "hu"
        ? "Egy fókuszált automatizációs ajánlaton dolgozunk azoknak a csapatoknak, akik auditokból és workshopokból már validált workflow lehetőségekkel rendelkeznek."
        : "We are preparing a focused automation offer for teams with validated workflow opportunities from audits and workshops.",
    includesTitle:
      language === "hu" ? "Mit tartalmaz majd" : "What this will include",
    includesList:
      language === "hu"
        ? [
            "Priorizált automatizációs blueprint üzleti mutatókhoz kötve",
            "Pilot megvalósítási terv governance kontrollokkal",
            "Teljesítménymérési keretrendszer skálázási döntésekhez"
          ]
        : [
            "Prioritized automation blueprint tied to business metrics",
            "Pilot implementation plan with governance controls",
            "Performance measurement framework for scale decisions"
          ],
    ctaTitle:
      language === "hu"
        ? "Csatlakozz az automatizációs várólistához"
        : "Join the automation waitlist",
    ctaDescription:
      language === "hu"
        ? "Írd meg, mely folyamatokat automatizálnátok először. A várólistás ügyfelek korai pilot hozzáférést kapnak."
        : "Tell us which processes you want to automate first. Waitlist members get early access to pilot slots.",
    ctaPrimary:
      language === "hu"
        ? "Csatlakozás az automatizációs várólistához"
        : "Join automation waitlist",
    ctaSecondary:
      language === "hu" ? "Kezdd audittal" : "Start with an audit"
  };

  return (
    <>
      <section className="section-shell py-16 sm:py-20">
        <SectionHeading eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />

        <article className="rounded-xl2 border border-border bg-surface p-6 shadow-card">
          <h2 className="text-xl font-semibold">{copy.includesTitle}</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {copy.includesList.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="section-shell pb-24">
        <CtaBlock
          title={copy.ctaTitle}
          description={copy.ctaDescription}
          primaryHref="/contact"
          primaryLabel={copy.ctaPrimary}
          secondaryHref="/services/workflow-audit"
          secondaryLabel={copy.ctaSecondary}
        />
      </section>
    </>
  );
}
