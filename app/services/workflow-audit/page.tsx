import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { CtaBlock } from "@/components/ui/cta-block";
import { PricingCard } from "@/components/ui/cards";
import { SectionHeading } from "@/components/ui/section-heading";
import { StepTimeline } from "@/components/ui/step-timeline";
import { getAuditPricingTiers, getWorkflowAuditProcess } from "@/content/services";
import { getCurrentLanguage } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Workflow Audit",
  description:
    "Detailed workflow audit service page with process, deliverables, sample questions, and editable starting price tiers."
};

export default function WorkflowAuditPage() {
  const language = getCurrentLanguage();
  const auditPricingTiers = getAuditPricingTiers(language);
  const workflowAuditProcess = getWorkflowAuditProcess(language);

  const copy = {
    eyebrow: language === "hu" ? "Fő ajánlat" : "Core offer",
    title: language === "hu" ? "Workflow audit" : "Workflow Audit",
    description:
      language === "hu"
        ? "Strukturált operációs audit, amely feltárja, hol veszít időt a csapatod, miért történik ez, és mit érdemes először javítani AI-val vagy anélkül."
        : "A structured operational audit that identifies where your team is losing time, why it happens, and what to fix first with or without AI.",
    caseStudies: language === "hu" ? "Esettanulmányok" : "See case studies",
    whatYouGet: language === "hu" ? "Amit kapsz" : "What you get",
    whatYouGetList:
      language === "hu"
        ? [
            "Jelenlegi folyamatállapot-térkép",
            "Fájdalompont-elemzés gyökérokokkal",
            "AI-lehetőségek rövidlistája",
            "ROI-becslés (sávos)",
            "Megvalósítási roadmap sorrenddel"
          ]
        : [
            "Current-state process map",
            "Pain point analysis with root causes",
            "AI opportunities shortlist",
            "ROI estimate (range-based)",
            "Implementation roadmap with sequencing"
          ],
    whatWeNeed: language === "hu" ? "Mire van szükségünk a csapatodtól" : "What we need from your team",
    whatWeNeedList:
      language === "hu"
        ? [
            "Hozzáférés folyamattulajdonosokhoz és cross-funkcionális stakeholderekhez",
            "Jelenlegi eszközök, SOP-k vagy workflow artefaktok",
            "Egy kijelölt sponsor a priorizációhoz",
            "Heti egyeztetésekre rendelkezésre állás"
          ]
        : [
            "Access to process owners and cross-functional stakeholders",
            "Current tools, SOPs, or workflow artifacts",
            "One sponsor for prioritization decisions",
            "Availability for weekly alignment checkpoints"
          ],
    processEyebrow: language === "hu" ? "Folyamat" : "Process",
    processTitle: language === "hu" ? "Így működik az audit" : "How the audit works",
    processDescription:
      language === "hu"
        ? "Ötlépéses módszer, amely egyensúlyban tartja a szakmai mélységet és a végrehajtási tempót."
        : "A five-step method that balances rigor and execution speed.",
    sampleEyebrow: language === "hu" ? "Minta kérdések" : "Sample questions",
    sampleTitle:
      language === "hu" ? "Pillantás az audit szempontrendszerébe" : "A preview of the audit lens",
    sampleDescription:
      language === "hu"
        ? "Ezek a kérdések segítenek feltárni a rejtett folyamatköltségeket és a reális AI-lehetőségeket."
        : "These are examples of questions used to reveal hidden process costs and realistic AI opportunities.",
    sampleQuestions:
      language === "hu"
        ? [
            "Hol jelennek meg a késések a leggyakrabban ebben a folyamatban?",
            "Mely átadások támaszkodnak hallgatólagos tudásra explicit felelősség helyett?",
            "Mely feladatok ismétlődnek, mert a minőségellenőrzés túl későn történik?",
            "Hol csökkenthetné az AI a manuális terhelést kockázatnövekedés nélkül?",
            "Mely változtatások hoznának jelentős időmegtakarítást a következő 90 napban?"
          ]
        : [
            "Where do delays most often appear in this process?",
            "Which handoffs rely on tacit knowledge instead of explicit ownership?",
            "What work is repeated because quality checks happen too late?",
            "Where could AI reduce manual effort without increasing risk?",
            "Which changes would create meaningful time savings in the next 90 days?"
          ],
    pricingEyebrow: language === "hu" ? "Árazás" : "Pricing",
    pricingTitle:
      language === "hu"
        ? "Induló ársávok (szerkeszthető helyőrzők)"
        : "Starting ranges (editable placeholders)",
    pricingDescription:
      language === "hu"
        ? "Ezek nem kötelező érvényű mintasávok, frissítsd a saját kereskedelmi modelled szerint."
        : "These ranges are non-binding placeholders and should be updated to match your commercial model.",
    ctaTitle:
      language === "hu"
        ? "Készen állsz a legnagyobb súrlódású workflow diagnosztizálására?"
        : "Ready to diagnose your highest-friction workflow?",
    ctaDescription:
      language === "hu"
        ? "Egy feltáró híváson kijelöljük a scope-ot, a kulcsszereplőket és a várható eredményeket."
        : "Start with a discovery call to define scope, stakeholders, and expected outcomes."
  };

  return (
    <>
      <section className="section-shell py-16 sm:py-20">
        <SectionHeading
          eyebrow={copy.eyebrow}
          title={copy.title}
          description={copy.description}
        >
          <div className="flex flex-wrap gap-3">
            <Button href="/contact">{language === "hu" ? "Audit kérése" : "Request an audit"}</Button>
            <Button href="/case-studies" variant="secondary">
              {copy.caseStudies}
            </Button>
          </div>
        </SectionHeading>

        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-xl2 border border-border bg-surface p-6 shadow-card">
            <h2 className="text-xl font-semibold">{copy.whatYouGet}</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {copy.whatYouGetList.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </article>

          <article className="rounded-xl2 border border-border bg-surface p-6 shadow-card">
            <h2 className="text-xl font-semibold">{copy.whatWeNeed}</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {copy.whatWeNeedList.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="border-y border-border bg-surface py-16 sm:py-20">
        <div className="section-shell grid gap-10 lg:grid-cols-2">
          <SectionHeading
            eyebrow={copy.processEyebrow}
            title={copy.processTitle}
            description={copy.processDescription}
          />
          <StepTimeline steps={workflowAuditProcess} />
        </div>
      </section>

      <section className="section-shell py-16 sm:py-20">
        <SectionHeading
          eyebrow={copy.sampleEyebrow}
          title={copy.sampleTitle}
          description={copy.sampleDescription}
        />
        <div className="rounded-xl2 border border-border bg-surface p-6 shadow-card">
          <ul className="space-y-3 text-sm">
            {copy.sampleQuestions.map((question) => (
              <li key={question} className="border-b border-border pb-3 last:border-b-0 last:pb-0">
                {question}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-shell py-6 pb-16 sm:pb-20">
        <SectionHeading
          eyebrow={copy.pricingEyebrow}
          title={copy.pricingTitle}
          description={copy.pricingDescription}
        />
        <div className="grid gap-4 md:grid-cols-3">
          {auditPricingTiers.map((tier) => (
            <PricingCard
              key={tier.tier}
              {...tier}
              buttonLabel={language === "hu" ? "Audit kérése" : "Request an audit"}
            />
          ))}
        </div>
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
