import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type FooterLink = { label: string; href: string };

type FooterProps = {
  siteName: string;
  siteDescription: string;
  email: string;
  newsletterTitle: string;
  newsletterDescription: string;
  newsletterInputLabel: string;
  newsletterPlaceholder: string;
  newsletterButton: string;
  sections: Array<{ title: string; links: FooterLink[] }>;
  rightsText: string;
};

export function Footer({
  siteName,
  siteDescription,
  email,
  newsletterTitle,
  newsletterDescription,
  newsletterInputLabel,
  newsletterPlaceholder,
  newsletterButton,
  sections,
  rightsText
}: FooterProps) {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.4fr_2fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <Image src="/skalvora-logo.png" alt="Skalvora logo" width={56} height={56} className="rounded" />
            <h2 className="text-3xl font-semibold">{siteName}</h2>
          </div>
          <p className="mt-3 max-w-md text-sm text-muted">{siteDescription}</p>
          <div className="mt-6 rounded-xl2 border border-border bg-bg p-4">
            <p className="text-xs uppercase tracking-[0.15em] text-muted">{newsletterTitle}</p>
            <p className="mt-2 text-sm text-text">{newsletterDescription}</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <input
                aria-label={newsletterInputLabel}
                type="email"
                placeholder={newsletterPlaceholder}
                className="w-full min-w-[220px] flex-1 rounded-full border border-border bg-surface px-4 py-2 text-sm text-text outline-none ring-accent/30 focus:ring sm:w-auto"
              />
              <Button type="button">{newsletterButton}</Button>
            </div>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-muted">{section.title}</h3>
              <ul className="mt-3 space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-text transition hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-4 text-xs text-muted sm:px-6 lg:px-8">
          <span>{rightsText}</span>
          <Link href={`mailto:${email}`} className="hover:text-accent">
            {email}
          </Link>
        </div>
      </div>
    </footer>
  );
}
