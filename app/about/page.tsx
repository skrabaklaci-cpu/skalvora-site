import type { Metadata } from "next";
import { getCompanyDetails } from "@/content/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { CtaBlock } from "@/components/ui/cta-block";
import { getCurrentLanguage } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Skalvora's mission, values, and audit-first approach to AI-enabled workflow optimization."
};

export default function AboutPage() {
  const language = getCurrentLanguage();
  const companyDetails = getCompanyDetails(language);

  const values =
    language === "hu"
      ? [
          {
            title: "Precizitás",
            text: "A komplexitás helyett működési tisztaságot adunk, és bizonyítékból végrehajtásba fordítjuk a döntéseket."
          },
          {
            title: "Gyakorlati ambíció",
            text: "Nagy célokra törekszünk, de mérhető és földhözragadt megoldásokkal."
          },
          {
            title: "Emberi fókusz",
            text: "A jó folyamat csökkenti a stresszt, és segíti a csapatot a minőségi munkában."
          }
        ]
      : [
          {
            title: "Precision",
            text: "We prioritize operational clarity over complexity and move from evidence to execution."
          },
          {
            title: "Practical ambition",
            text: "We aim for transformative outcomes through grounded, measurable decisions."
          },
          {
            title: "Respect for people",
            text: "Process design should reduce stress and help teams do meaningful work with confidence."
          }
        ];

  return (
    <>
      <section className="section-shell py-16 sm:py-20">
        <SectionHeading
          eyebrow={language === "hu" ? "A Skalvoráról" : "About Skalvora"}
          title={
            language === "hu"
              ? "Azért épültünk, hogy jobbá tegyük a munkát azoknak, akik komolyan veszik, amit csinálnak"
              : "Built to make work better for people who care deeply about what they do"
          }
          description={companyDetails.mission}
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {values.map((value) => (
            <article key={value.title} className="rounded-xl2 border border-border bg-surface p-6 shadow-card">
              <h2 className="text-xl font-semibold">{value.title}</h2>
              <p className="mt-3 text-sm text-muted">{value.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface py-16 sm:py-20">
        <div className="section-shell grid gap-6 lg:grid-cols-2">
          <article className="rounded-xl2 border border-border bg-bg p-6 shadow-card">
            <h2 className="text-xl font-semibold">{language === "hu" ? "Küldetésünk" : "Our purpose"}</h2>
            <p className="mt-3 text-sm text-muted">{companyDetails.purpose}</p>
          </article>

          <article className="rounded-xl2 border border-border bg-bg p-6 shadow-card">
            <h2 className="text-xl font-semibold">
              {language === "hu" ? "Értékígéretünk" : "Our value promise"}
            </h2>
            <p className="mt-3 text-sm text-muted">{companyDetails.value}</p>
          </article>
        </div>
      </section>

      <section className="section-shell py-16 sm:py-20">
        <SectionHeading
          eyebrow={language === "hu" ? "Miért Skalvora" : "Why Skalvora"}
          title={
            language === "hu"
              ? "Azoknak, akik szeretik a munkájukat, mégis folyamatosan időhiánnyal küzdenek"
              : "For professionals who care about quality but keep running out of time"
          }
          description={companyDetails.dreamClient}
        />

        <article className="rounded-xl2 border border-border bg-surface p-6 shadow-card">
          <h3 className="text-xl font-semibold">{language === "hu" ? "Így dolgozunk" : "How we work"}</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {(language === "hu"
              ? [
                  "A legfájóbb workflow-kkal kezdünk, nem általános AI eszközválasztással",
                  "A szűk keresztmetszeteket működési és pénzügyi hatás alapján priorizáljuk",
                  "Olyan megvalósítási utakat tervezünk, amelyeket a csapat valóban fenn tud tartani",
                  "Úgy javítjuk az eredményeket, hogy közben csökkentjük a napi káoszt"
                ]
              : [
                  "Start with painful workflows, not generic AI tooling decisions",
                  "Prioritize bottlenecks with operational and financial impact",
                  "Build implementation paths that teams can sustain in real conditions",
                  "Improve outcomes while making day-to-day work less chaotic"
                ]).map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="section-shell pb-24">
        <CtaBlock
          title={
            language === "hu"
              ? "Nézzük meg, mely workflow-k fogják vissza a növekedést"
              : "See if your current workflows are holding back growth"
          }
          description={
            language === "hu"
              ? "Foglalj egy rövid hívást, és segítünk beazonosítani, hol tud az auditvezérelt optimalizálás azonnali enyhülést adni."
              : "Book a short call and we’ll help identify where audit-led optimization can create immediate relief."
          }
          primaryHref="/contact"
          primaryLabel={language === "hu" ? "Foglalj egy feltáró hívást" : "Book a discovery call"}
          secondaryHref="/services/workflow-audit"
          secondaryLabel={language === "hu" ? "Audit kérése" : "Request an audit"}
        />
      </section>
    </>
  );
}
