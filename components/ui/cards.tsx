import Link from "next/link";
import { ArrowRightIcon, CheckCircleIcon } from "@heroicons/react/24/outline";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function TestimonialCard({
  quote,
  name,
  title
}: {
  quote: string;
  name: string;
  title: string;
}) {
  return (
    <article className="rounded-xl2 border border-border bg-surface p-6 shadow-card">
      <p className="text-sm leading-relaxed text-text">&quot;{quote}&quot;</p>
      <div className="mt-5 border-t border-border pt-4">
        <p className="text-sm font-semibold">{name}</p>
        <p className="text-xs text-muted">{title}</p>
      </div>
    </article>
  );
}

export function ServiceCard({
  name,
  summary,
  href,
  comingSoon,
  exploreLabel,
  detailsLabel
}: {
  name: string;
  summary: string;
  href: string;
  comingSoon?: boolean;
  exploreLabel?: string;
  detailsLabel?: string;
}) {
  return (
    <article className="group rounded-xl2 border border-border bg-surface p-6 transition duration-200 hover:-translate-y-1 hover:border-accent/40">
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="mt-3 text-sm text-muted">{summary}</p>
      <Link
        href={href}
        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-text transition hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        {comingSoon ? detailsLabel ?? "View details" : exploreLabel ?? "Explore service"}
        <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
      </Link>
    </article>
  );
}

export function PricingCard({
  tier,
  startingAt,
  description,
  includes,
  featured,
  buttonLabel
}: {
  tier: string;
  startingAt: string;
  description: string;
  includes: readonly string[];
  featured?: boolean;
  buttonLabel?: string;
}) {
  return (
    <article
      className={cn(
        "rounded-xl2 border bg-surface p-6 shadow-card",
        featured ? "border-accent" : "border-border"
      )}
    >
      <h3 className="text-xl font-semibold">{tier}</h3>
      <p className="mt-2 text-3xl font-bold">{startingAt}</p>
      <p className="mt-3 text-sm text-muted">{description}</p>
      <ul className="mt-5 space-y-2 text-sm text-text">
        {includes.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <Button href="/contact" variant={featured ? "primary" : "secondary"} className="mt-6" fullWidth>
        {buttonLabel ?? "Request an audit"}
      </Button>
    </article>
  );
}

export function CaseStudyCard({
  title,
  industry,
  summary,
  timeline,
  href,
  readLabel
}: {
  title: string;
  industry: string;
  summary: string;
  timeline: string;
  href: string;
  readLabel?: string;
}) {
  return (
    <article className="rounded-xl2 border border-border bg-surface p-6 shadow-card transition duration-200 hover:border-accent/40">
      <div className="flex items-center justify-between gap-3">
        <span className="text-xs uppercase tracking-[0.16em] text-muted">{industry}</span>
        <span className="text-xs text-muted">{timeline}</span>
      </div>
      <h3 className="mt-4 text-xl font-semibold">{title}</h3>
      <p className="mt-3 text-sm text-muted">{summary}</p>
      <Button href={href} variant="ghost" className="mt-5 px-0">
        {readLabel ?? "Read case study"}
      </Button>
    </article>
  );
}
