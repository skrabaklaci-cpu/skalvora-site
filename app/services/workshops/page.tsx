import type { Metadata } from "next";
import { CtaBlock } from "@/components/ui/cta-block";
import { SectionHeading } from "@/components/ui/section-heading";
import { getWorkshopFormats, getWorkshopTopics } from "@/content/services";
import { getCurrentLanguage } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Workshops",
  description:
    "Practical AI and workflow workshops: 90-minute, half-day, and full-day formats for operations teams."
};

export default function WorkshopsPage() {
  const language = getCurrentLanguage();
  const workshopFormats = getWorkshopFormats(language);
  const workshopTopics = getWorkshopTopics(language);

  const copy = {
    eyebrow: language === "hu" ? "Workshopok" : "Workshops",
    title:
      language === "hu"
        ? "Gyakorlati sessionök, amelyek az érdeklődésből végrehajtást csinálnak"
        : "Hands-on sessions that move teams from interest to execution",
    description:
      language === "hu"
        ? "A Skalvora workshopok olyan vezetőknek és operátoroknak készülnek, akik konkrét folyamatfejlesztést akarnak, nem elvont AI-elméletet."
        : "Skalvora workshops are designed for leaders and operators who need practical workflow improvements, not abstract AI theory.",
    topicsEyebrow: language === "hu" ? "Témák" : "Topics",
    topicsTitle: language === "hu" ? "Workshop témakörök" : "Workshop topic tracks",
    topicsDescription:
      language === "hu"
        ? "A témákat az operációs célok és a jelenlegi érettségi szint alapján választjuk ki és priorizáljuk."
        : "Topics are selected and prioritized around your operational goals and current maturity level.",
    includesTitle: language === "hu" ? "Amit kaptok" : "What you get",
    includesList:
      language === "hu"
        ? [
            "Strukturált agenda a workflow-jaitokra szabva",
            "Facilitált gyakorlatok csapatszintű alignment eredménnyel",
            "Akcióterv felelősökkel, mérföldkövekkel és governance megjegyzésekkel"
          ]
        : [
            "Structured agenda adapted to your workflows",
            "Facilitated exercises with team alignment outcomes",
            "Action plan with owners, milestones, and governance notes"
          ],
    topicCardDetail:
      language === "hu"
        ? "Gyakorlati feladatokkal, döntési keretekkel és egyértelmű felelősökkel a következő lépésekhez."
        : "Includes practical exercises, decision frameworks, and clear owners for next actions.",
    ctaTitle: language === "hu" ? "Workshop tervezése a csapatotoknak" : "Plan a workshop for your team",
    ctaDescription:
      language === "hu"
        ? "Oszd meg a céljaitokat és a résztvevői profilt. Javaslunk egy megfelelő formátumot és scope-ot."
        : "Share your goals and participant profile. We’ll recommend a format and scope."
  };

  return (
    <>
      <section className="section-shell py-16 sm:py-20">
        <SectionHeading eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />

        <div className="grid gap-4 md:grid-cols-3">
          {workshopFormats.map((format) => (
            <article key={format.name} className="rounded-xl2 border border-border bg-surface p-6 shadow-card">
              <h2 className="text-xl font-semibold">{format.name}</h2>
              <p className="mt-3 text-sm text-muted">{format.details}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface py-16 sm:py-20">
        <div className="section-shell">
          <SectionHeading
            eyebrow={copy.topicsEyebrow}
            title={copy.topicsTitle}
            description={copy.topicsDescription}
          />

          <div className="grid gap-4 md:grid-cols-2">
            {workshopTopics.map((topic) => (
              <article key={topic} className="rounded-xl2 border border-border bg-bg p-5 shadow-card">
                <h3 className="text-lg font-semibold">{topic}</h3>
                <p className="mt-2 text-sm text-muted">{copy.topicCardDetail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-16">
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
          primaryLabel={language === "hu" ? "Foglalj egy feltáró hívást" : "Book a discovery call"}
          secondaryHref="/contact"
          secondaryLabel={language === "hu" ? "Audit kérése" : "Request an audit"}
        />
      </section>
    </>
  );
}
