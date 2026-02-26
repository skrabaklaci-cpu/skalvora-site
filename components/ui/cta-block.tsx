import { Button } from "@/components/ui/button";

type CtaBlockProps = {
  title: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function CtaBlock({
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel
}: CtaBlockProps) {
  return (
    <section className="rounded-xl2 border border-border bg-surface px-6 py-10 shadow-card sm:px-10">
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="mt-3 max-w-2xl text-sm text-muted">{description}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Button href={primaryHref}>{primaryLabel}</Button>
        {secondaryHref && secondaryLabel ? (
          <Button href={secondaryHref} variant="secondary">
            {secondaryLabel}
          </Button>
        ) : null}
      </div>
    </section>
  );
}
