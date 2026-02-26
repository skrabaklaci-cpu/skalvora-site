import type { Metadata } from "next";
import { getCaseStudies } from "@/content/caseStudies";
import { CaseStudyCard } from "@/components/ui/cards";
import { SectionHeading } from "@/components/ui/section-heading";
import { getCurrentLanguage } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Skalvora case studies showing workflow audit approach, implementation planning, and measurable operational outcomes."
};

export default function CaseStudiesPage() {
  const language = getCurrentLanguage();
  const caseStudies = getCaseStudies(language);

  return (
    <div className="section-shell py-16 sm:py-20">
      <SectionHeading
        eyebrow={language === "hu" ? "Esettanulmányok" : "Case studies"}
        title={
          language === "hu"
            ? "Hogyan jutnak a csapatok workflow súrlódásból mérhető előrelépésig"
            : "How teams move from workflow friction to measurable progress"
        }
        description={
          language === "hu"
            ? "Minden eset a problémát, a megközelítést, a megoldást és az eredményeket mutatja be üzleti nyelven."
            : "Each case outlines the problem, approach, solution, and outcomes in practical business terms."
        }
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
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
    </div>
  );
}
