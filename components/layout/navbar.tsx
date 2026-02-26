"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LanguageSwitch } from "@/components/layout/language-switch";
import type { Language } from "@/lib/language";

type NavItem = { label: string; href: string };

type NavbarProps = {
  siteName: string;
  ctaPrimary: string;
  navigation: NavItem[];
  serviceLinks: NavItem[];
  servicesMenuLabel: string;
  language: Language;
  languageSwitchLabel: string;
  openMenuLabel: string;
  closeMenuLabel: string;
  homeAriaLabel: string;
};

export function Navbar({
  siteName,
  ctaPrimary,
  navigation,
  serviceLinks,
  servicesMenuLabel,
  language,
  languageSwitchLabel,
  openMenuLabel,
  closeMenuLabel,
  homeAriaLabel
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const servicesHref = navigation.find((item) => item.href === "/services")?.href ?? "/services";

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-bg/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-3 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          aria-label={homeAriaLabel}
        >
          <Image src="/skalvora-logo.png" alt="Skalvora" width={56} height={56} className="rounded" priority />
          <span className="text-2xl font-semibold tracking-wide">{siteName}</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
          {navigation
            .filter((item) => item.href !== "/services")
            .map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-text transition hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                {item.label}
              </Link>
            ))}

          <div className="group relative -order-1">
            <button
              className="inline-flex items-center gap-1 text-sm text-text transition hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              aria-haspopup="true"
            >
              {servicesMenuLabel}
              <ChevronDownIcon className="h-4 w-4" aria-hidden="true" />
            </button>
            <div className="invisible absolute left-0 top-full mt-3 w-56 translate-y-1 rounded-xl2 border border-border bg-surface p-2 opacity-0 shadow-card transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
              <Link
                href={servicesHref}
                className="block rounded-lg px-3 py-2 text-sm text-text transition hover:bg-accent/10 hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                {servicesMenuLabel}
              </Link>
              {serviceLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-lg px-3 py-2 text-sm text-text transition hover:bg-accent/10 hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitch language={language} label={languageSwitchLabel} />
          <Button href="/contact">{ctaPrimary}</Button>
        </div>

        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex rounded-md border border-border p-2 text-text lg:hidden"
          aria-label={isOpen ? closeMenuLabel : openMenuLabel}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          "overflow-hidden border-t border-border lg:hidden",
          isOpen ? "max-h-[560px]" : "max-h-0"
        )}
      >
        <div className="space-y-2 px-4 py-4 sm:px-6">
          <div className="rounded-lg border border-border bg-surface p-3">
            <LanguageSwitch language={language} label={languageSwitchLabel} />
          </div>

          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block rounded-md px-2 py-2 text-sm font-medium text-text hover:bg-surface"
            >
              {item.label}
            </Link>
          ))}

          <div className="rounded-lg border border-border bg-surface p-3">
            <p className="text-xs uppercase tracking-[0.14em] text-muted">{servicesMenuLabel}</p>
            <div className="mt-2 space-y-1">
              {serviceLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded px-2 py-1.5 text-sm text-text hover:bg-accent/10"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <Button href="/contact" className="mt-2" fullWidth>
            {ctaPrimary}
          </Button>
        </div>
      </div>
    </header>
  );
}
