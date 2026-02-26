import type { Metadata } from "next";
import { getServices } from "@/content/services";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { getCurrentLanguage } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Skalvora services: workflow audits, workshops, and upcoming automation offerings."
};

export default function ServicesPage() {
  const language = getCurrentLanguage();
  const services = getServices(language);

  const copy = {
    eyebrow: language === "hu" ? "Szolgáltatások áttekintése" : "Services overview",
    title:
      language === "hu"
        ? "Szolgáltatások operációs átláthatóságra és idő-visszanyerésre"
        : "Services designed for operational clarity and time recovery",
    description:
      language === "hu"
        ? "Minden ajánlat gyakorlatias, mérhető, és valós működési nyomás alatt dolgozó csapatokra készült."
        : "Each offer is practical, measurable, and built for teams facing real delivery pressure.",
    whoItsFor: language === "hu" ? "Kinek szól" : "Who it is for",
    outcomes: language === "hu" ? "Eredmények" : "Outcomes",
    deliverables: language === "hu" ? "Deliverable-ök" : "Deliverables",
    timeline: language === "hu" ? "Időtáv" : "Timeline",
    clientNeeds:
      language === "hu" ? "Mire van szükségünk a csapatodtól" : "What we need from your team"
  };

  return (
    <div className="section-shell py-16 sm:py-20">
      <SectionHeading eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />

      <div className="space-y-8">
        {services.map((service) => {
          const href = service.slug === "workflow-audit" ? "/services/workflow-audit" : `/services/${service.slug}`;

          return (
            <article key={service.slug} className="rounded-xl2 border border-border bg-surface p-6 shadow-card sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-semibold">{service.name}</h2>
                  <p className="mt-2 max-w-3xl text-sm text-muted">{service.summary}</p>
                </div>
                <Button href={href} variant={service.comingSoon ? "secondary" : "primary"}>
                  {service.ctaLabel}
                </Button>
              </div>

              <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-muted">{copy.whoItsFor}</h3>
                  <ul className="mt-2 space-y-1 text-sm">
                    {service.whoItsFor.map((item) => (
                      <li key={item}>- {item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-muted">{copy.outcomes}</h3>
                  <ul className="mt-2 space-y-1 text-sm">
                    {service.outcomes.map((item) => (
                      <li key={item}>- {item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-muted">{copy.deliverables}</h3>
                  <ul className="mt-2 space-y-1 text-sm">
                    {service.deliverables.map((item) => (
                      <li key={item}>- {item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-muted">{copy.timeline}</h3>
                  <p className="mt-2 text-sm">{service.timeline}</p>
                </div>

                <div className="md:col-span-2 xl:col-span-2">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-muted">{copy.clientNeeds}</h3>
                  <ul className="mt-2 space-y-1 text-sm">
                    {service.clientNeeds.map((item) => (
                      <li key={item}>- {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
