import Image from "next/image";
import { ArrowRightIcon, CheckIcon } from "@heroicons/react/24/outline";
import { getSiteConfig, getSocialProof, getOutcomes, getFaqs } from "@/content/site";
import { getServices, getWorkflowAuditProcess } from "@/content/services";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { CaseStudyCard, ServiceCard, TestimonialCard } from "@/components/ui/cards";
import { StepTimeline } from "@/components/ui/step-timeline";
import { CtaBlock } from "@/components/ui/cta-block";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { getCaseStudies } from "@/content/caseStudies";
import { getCurrentLanguage } from "@/lib/i18n";

export default function HomePage() {
  const language = getCurrentLanguage();
  const siteConfig = getSiteConfig(language);
  const socialProof = getSocialProof(language);
  const outcomes = getOutcomes(language);
  const faqs = getFaqs(language);
  const services = getServices(language);
  const workflowAuditProcess = getWorkflowAuditProcess(language);
  const caseStudies = getCaseStudies(language);

  const copy = {
    eyebrow: language === "hu" ? "Workflow auditok valós operációra" : "Workflow audits for real operations",
    whyTitle:
      language === "hu"
        ? "A csapatod nem tehetségben szűkölködik, hanem workflow átláthatóságban."
        : "Your team is not short on talent. It is short on workflow clarity.",
    whyDescription:
      language === "hu"
        ? "Azoknak a csapatoknak segítünk, akik fontosnak tartják a minőséget, mégis folyamat-súrlódás miatt veszítenek időt. A komplexitást precíz, mérhető fejlesztésekké alakítjuk."
        : "We help teams that care about quality but keep losing time to process friction. Our work turns complexity into precise, measurable improvements.",
    whatYouGet: language === "hu" ? "Amit kapsz" : "What you get",
    whatYouGetItems:
      language === "hu"
        ? [
            "Folyamattérkép a legnagyobb súrlódású workflow-król",
            "Fájdalompont-elemzés számszerűsített hatással",
            "AI-lehetőségi rövidlista és megvalósítási roadmap"
          ]
        : [
            "Process map of high-friction workflows",
            "Pain point analysis with quantified impact",
            "AI opportunity shortlist and implementation roadmap"
          ],
    quickBullets:
      language === "hu"
        ? [
            "Tisztább folyamattulajdonlás",
            "Kevesebb szűk keresztmetszet és eszkaláció",
            "Gyakorlati AI-lehetőségek ROI fókuszban"
          ]
        : [
            "Clear process ownership",
            "Fewer bottlenecks and escalations",
            "Practical AI opportunities with ROI focus"
          ],
    socialEyebrow:
      language === "hu" ? "Operációvezérelt csapatok bizalma" : "Trusted by operations-led teams",
    socialTitle: language === "hu" ? "Komoly végrehajtásra tervezve" : "Built for serious execution",
    socialDescription:
      language === "hu"
        ? "Az alábbi elemek szerkeszthető helyőrzők. Cseréld őket valós ügyféllogókra és jóváhagyott ügyfélidézetekre."
        : "Placeholders below are editable. Replace with client logos and final testimonials as they become available.",
    servicesEyebrow: language === "hu" ? "Szolgáltatások" : "Services",
    servicesTitle:
      language === "hu"
        ? "Szolgáltatások workflow eredményekre tervezve"
        : "Offerings built around workflow outcomes",
    servicesDescription:
      language === "hu"
        ? "Audittól az enablementig minden ajánlat célja az operációs súrlódás csökkentése és a végrehajtásra fordítható idő növelése."
        : "From audit to enablement, each service is designed to reduce operational drag and free up execution time.",
    howEyebrow: language === "hu" ? "Hogyan működik" : "How it works",
    howTitle:
      language === "hu"
        ? "Precíz folyamat a diagnózistól a roadmapig"
        : "A precise process from diagnosis to roadmap",
    howDescription:
      language === "hu"
        ? "Audit megközelítésünk az insightból akciót csinál anélkül, hogy extra terhet rakna a csapatodra."
        : "Our audit approach is designed to move from insight to action without creating extra overhead for your team.",
    howCta:
      language === "hu"
        ? "Workflow audit részletek"
        : "See full workflow audit details",
    outcomesEyebrow: language === "hu" ? "Eredmények" : "Outcomes",
    outcomesTitle:
      language === "hu"
        ? "Mérhető fejlődés, nem elvont ígéretek"
        : "Measured improvement, not abstract promises",
    outcomesDescription:
      language === "hu"
        ? "Az értékek szerkeszthető minták. Cseréld őket validált ügyfél benchmarkokra."
        : "Representative metrics shown as editable placeholders. Update with validated client benchmarks over time.",
    caseEyebrow: language === "hu" ? "Esetpillanatképek" : "Case snapshots",
    caseTitle:
      language === "hu"
        ? "Valós operációs problémák, gyakorlatias megoldások"
        : "Real operational problems, practical solutions",
    caseDescription:
      language === "hu"
        ? "Nézd meg, hogyan fordul az auditvezérelt optimalizálás mérhető csapatteljesítménnyé."
        : "Explore examples of how audit-led optimization translates into measurable team performance gains.",
    faqEyebrow: "FAQ",
    faqTitle: language === "hu" ? "Gyakori kérdések" : "Common questions",
    faqDescription:
      language === "hu"
        ? "Rövid, egyenes válaszok a gyors döntéshez."
        : "Direct answers to help you evaluate fit quickly.",
    ctaOneTitle:
      language === "hu" ? "Foglalj egy feltáró hívást" : "Book a discovery call",
    ctaOneDescription:
      language === "hu"
        ? "Mondd el, hol veszít időt a csapatod a workflow súrlódás miatt, és egy rövid munkasessionben feltérképezzük a következő lépéseket."
        : "Tell us where workflow friction is costing your team time, and we will map next steps in a short working session.",
    ctaOneSecondary: language === "hu" ? "Esettanulmányok" : "See case studies",
    ctaTwoTitle: language === "hu" ? "Audit kérése" : "Request an audit",
    ctaTwoDescription:
      language === "hu"
        ? "Oszd meg a legnagyobb súrlódású folyamatodat, és kapsz egy ajánlott audit scope-ot várható eredményekkel."
        : "Share your highest-friction process and receive a recommended audit scope with expected outcomes.",
    ctaTwoSecondary: language === "hu" ? "Audit részletek" : "Audit details"
  };

  return (
    <>
      <section className="relative overflow-hidden border-b border-border py-16 sm:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[url('/motif.svg')] bg-cover bg-center opacity-35"
        />
        <div className="section-shell relative grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="animate-fade-up">
            <div className="flex items-center gap-4">
              <Image
                src="/skalvora-logo.png"
                alt="Skalvora"
                width={84}
                height={84}
                className="rounded-lg"
                priority
              />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{copy.eyebrow}</p>
            </div>
            <h1 className="mt-4 max-w-3xl font-[var(--font-manrope)] text-4xl font-semibold leading-tight sm:text-5xl">
              {siteConfig.tagline}
            </h1>
            <p className="mt-5 max-w-2xl text-pretty text-base text-muted sm:text-lg">{siteConfig.elevatorPitch}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="/contact">{siteConfig.ctaPrimary}</Button>
              <Button href="/services/workflow-audit" variant="secondary">
                {siteConfig.ctaSecondary}
              </Button>
            </div>
            <ul className="mt-8 space-y-2 text-sm text-text">
              {copy.quickBullets.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-accent" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl2 border border-border bg-surface p-6 shadow-card">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted">
              {language === "hu" ? "Miért a Skalvora" : "Why teams engage Skalvora"}
            </p>
            <h2 className="mt-3 text-2xl font-semibold">{copy.whyTitle}</h2>
            <p className="mt-4 text-sm text-muted">{copy.whyDescription}</p>
            <div className="mt-6 rounded-lg border border-border bg-bg p-4">
              <p className="text-xs uppercase tracking-[0.14em] text-muted">{copy.whatYouGet}</p>
              <ul className="mt-3 space-y-2 text-sm">
                {copy.whatYouGetItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-16 sm:py-20">
        <SectionHeading
          eyebrow={copy.socialEyebrow}
          title={copy.socialTitle}
          description={copy.socialDescription}
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {socialProof.logos.map((logo) => (
            <div
              key={logo}
              className="rounded-lg border border-border bg-surface px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.14em] text-muted"
            >
              {logo}
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {socialProof.testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </section>

      <section className="section-shell py-16 sm:py-20">
        <SectionHeading
          eyebrow={copy.servicesEyebrow}
          title={copy.servicesTitle}
          description={copy.servicesDescription}
        />
        <div className="grid gap-4 md:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.slug}
              name={service.name}
              summary={service.summary}
              href={service.slug === "workflow-audit" ? "/services/workflow-audit" : `/services/${service.slug}`}
              comingSoon={service.comingSoon}
              exploreLabel={language === "hu" ? "Szolgáltatás megnyitása" : "Explore service"}
              detailsLabel={language === "hu" ? "Részletek" : "View details"}
            />
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface py-16 sm:py-20">
        <div className="section-shell grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow={copy.howEyebrow}
              title={copy.howTitle}
              description={copy.howDescription}
            />
            <Button href="/services/workflow-audit" variant="secondary">
              {copy.howCta}
              <ArrowRightIcon className="ml-2 h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
          <StepTimeline steps={workflowAuditProcess} />
        </div>
      </section>

      <section className="section-shell py-16 sm:py-20">
        <SectionHeading
          eyebrow={copy.outcomesEyebrow}
          title={copy.outcomesTitle}
          description={copy.outcomesDescription}
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {outcomes.map((item) => (
            <article
              key={item.label}
              className="rounded-xl2 border border-border bg-surface p-5 text-center shadow-card"
            >
              <p className="text-3xl font-bold text-accent">{item.value}</p>
              <p className="mt-2 text-sm text-muted">{item.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell py-16 sm:py-20">
        <SectionHeading
          eyebrow={copy.caseEyebrow}
          title={copy.caseTitle}
          description={copy.caseDescription}
        />
        <div className="grid gap-4 md:grid-cols-3">
          {caseStudies.map((study) => (
            <CaseStudyCard
              key={study.slug}
              title={study.title}
              industry={study.industry}
              timeline={study.timeline}
              summary={study.summary}
              href={`/case-studies/${study.slug}`}
              readLabel={language === "hu" ? "Esettanulmány megnyitása" : "Read case study"}
            />
          ))}
        </div>
      </section>

      <section className="section-shell space-y-6 py-4 pb-20 sm:pb-24">
        <CtaBlock
          title={copy.ctaOneTitle}
          description={copy.ctaOneDescription}
          primaryHref="/contact"
          primaryLabel={siteConfig.ctaPrimary}
          secondaryHref="/case-studies"
          secondaryLabel={copy.ctaOneSecondary}
        />
        <CtaBlock
          title={copy.ctaTwoTitle}
          description={copy.ctaTwoDescription}
          primaryHref="/contact"
          primaryLabel={siteConfig.ctaSecondary}
          secondaryHref="/services/workflow-audit"
          secondaryLabel={copy.ctaTwoSecondary}
        />
      </section>

      <section className="section-shell pb-24">
        <SectionHeading
          eyebrow={copy.faqEyebrow}
          title={copy.faqTitle}
          description={copy.faqDescription}
        />
        <FaqAccordion items={faqs} />
      </section>
    </>
  );
}
