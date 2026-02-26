import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCaseStudies } from "@/content/caseStudies";
import { Button } from "@/components/ui/button";
import { getCurrentLanguage } from "@/lib/i18n";

export function generateStaticParams() {
  return getCaseStudies("en").map((study) => ({ slug: study.slug }));
}

export function generateMetadata({
  params
}: {
  params: { slug: string };
}): Metadata {
  const { slug } = params;
  const study = getCaseStudies("en").find((item) => item.slug === slug);

  if (!study) {
    return { title: "Case Study Not Found" };
  }

  return {
    title: study.title,
    description: study.summary
  };
}

export default function CaseStudyDetailPage({
  params
}: {
  params: { slug: string };
}) {
  const language = getCurrentLanguage();
  const { slug } = params;
  const study = getCaseStudies(language).find((item) => item.slug === slug);

  if (!study) {
    notFound();
  }

  return (
    <article className="section-shell py-16 sm:py-20">
      <p className="text-xs uppercase tracking-[0.14em] text-muted">
        {study.industry} - {study.timeline}
      </p>
      <h1 className="mt-3 max-w-4xl font-[var(--font-manrope)] text-4xl font-semibold leading-tight">
        {study.title}
      </h1>
      <p className="mt-4 max-w-3xl text-muted">{study.summary}</p>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <section className="rounded-xl2 border border-border bg-surface p-6 shadow-card">
          <h2 className="text-xl font-semibold">{language === "hu" ? "Probléma" : "Problem"}</h2>
          <p className="mt-3 text-sm text-muted">{study.problem}</p>
        </section>

        <section className="rounded-xl2 border border-border bg-surface p-6 shadow-card">
          <h2 className="text-xl font-semibold">{language === "hu" ? "Megoldás" : "Solution"}</h2>
          <p className="mt-3 text-sm text-muted">{study.solution}</p>
        </section>
      </div>

      <section className="mt-6 rounded-xl2 border border-border bg-surface p-6 shadow-card">
        <h2 className="text-xl font-semibold">{language === "hu" ? "Megközelítés" : "Approach"}</h2>
        <ul className="mt-3 space-y-2 text-sm">
          {study.approach.map((item) => (
            <li key={item}>- {item}</li>
          ))}
        </ul>
      </section>

      <section className="mt-6 rounded-xl2 border border-border bg-surface p-6 shadow-card">
        <h2 className="text-xl font-semibold">{language === "hu" ? "Eredmények" : "Results"}</h2>
        <ul className="mt-3 space-y-2 text-sm">
          {study.results.map((item) => (
            <li key={item}>- {item}</li>
          ))}
        </ul>
      </section>

      <div className="mt-10 flex flex-wrap gap-3">
        <Button href="/contact">
          {language === "hu" ? "Foglalj egy feltáró hívást" : "Book a discovery call"}
        </Button>
        <Button href="/services/workflow-audit" variant="secondary">
          {language === "hu" ? "Audit kérése" : "Request an audit"}
        </Button>
      </div>
    </article>
  );
}
