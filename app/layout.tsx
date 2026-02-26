import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CookieNotice } from "@/components/layout/cookie-notice";
import { MobileStickyCta } from "@/components/layout/mobile-sticky-cta";
import { AnalyticsPlaceholder } from "@/components/layout/analytics-placeholder";
import { getSiteConfig, siteConfig } from "@/content/site";
import { getCurrentLanguage } from "@/lib/i18n";
import { getServices } from "@/content/services";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Skalvora | Workflow Audits for AI-Ready Operations",
    template: "%s | Skalvora"
  },
  description: siteConfig.description,
  openGraph: {
    title: "Skalvora | Workflow Audits for AI-Ready Operations",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Skalvora"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Skalvora | Workflow Audits for AI-Ready Operations",
    description: siteConfig.description,
    images: ["/og-image.svg"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const language = getCurrentLanguage();
  const site = getSiteConfig(language);
  const services = getServices(language);

  const localized = {
    skipToContent: language === "hu" ? "Tovább a tartalomra" : "Skip to content",
    servicesMenuLabel: language === "hu" ? "Szolgáltatások" : "Services",
    languageSwitchLabel: language === "hu" ? "Nyelv" : "Language",
    openMenuLabel: language === "hu" ? "Menü megnyitása" : "Open menu",
    closeMenuLabel: language === "hu" ? "Menü bezárása" : "Close menu",
    homeAriaLabel: language === "hu" ? "Skalvora kezdőlap" : "Skalvora home",
    cookieTitle: language === "hu" ? "Cookie értesítés" : "Cookie notice",
    cookieDescription:
      language === "hu"
        ? "Alapvető és könnyű analitikai cookie-kat használunk az oldal teljesítményének javításához. Ezt később a böngésző beállításaiban módosíthatod."
        : "We use essential and lightweight analytics cookies to improve site performance. You can update this later in your browser settings.",
    cookieAccept: language === "hu" ? "Elfogadom" : "Accept",
    mobileBookCall: language === "hu" ? "Hívás foglalása" : "Book call",
    mobileRequestAudit: language === "hu" ? "Audit kérése" : "Request audit",
    newsletterTitle: language === "hu" ? "Hírlevél" : "Newsletter",
    newsletterDescription:
      language === "hu"
        ? "Havi, gyakorlatias betekintések workflow optimalizálásról és felelős AI-működésről."
        : "Monthly practical insights on workflow optimization and responsible AI operations.",
    newsletterInputLabel: language === "hu" ? "Email cím" : "Email address",
    newsletterPlaceholder: language === "hu" ? "te@ceged.hu" : "you@company.com",
    newsletterButton: language === "hu" ? "Feliratkozás" : "Subscribe",
    rightsText:
      language === "hu"
        ? `${new Date().getFullYear()} Skalvora. Minden jog fenntartva.`
        : `${new Date().getFullYear()} Skalvora. All rights reserved.`,
    footerSections: [
      {
        title: language === "hu" ? "Cég" : "Company",
        links: [
          { label: language === "hu" ? "Rólunk" : "About", href: "/about" },
          {
            label: language === "hu" ? "Esettanulmányok" : "Case Studies",
            href: "/case-studies"
          },
          { label: "Blog", href: "/blog" }
        ]
      },
      {
        title: language === "hu" ? "Szolgáltatások" : "Services",
        links: [
          {
            label: services.find((item) => item.slug === "workflow-audit")?.name ??
              (language === "hu" ? "Workflow audit" : "Workflow Audit"),
            href: "/services/workflow-audit"
          },
          {
            label:
              services.find((item) => item.slug === "workshops")?.name ??
              (language === "hu" ? "Workshopok" : "Workshops"),
            href: "/services/workshops"
          },
          {
            label:
              services.find((item) => item.slug === "automations")?.name ??
              (language === "hu" ? "Automatizációk" : "Automations"),
            href: "/services/automations"
          }
        ]
      },
      {
        title: language === "hu" ? "Jogi" : "Legal",
        links: [
          {
            label: language === "hu" ? "Adatkezelési tájékoztató" : "Privacy Policy",
            href: "/legal/privacy"
          },
          {
            label: language === "hu" ? "Felhasználási feltételek" : "Terms of Service",
            href: "/legal/terms"
          }
        ]
      }
    ]
  };

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    email: site.email,
    description: site.description,
    logo: `${site.url}/og-image.svg`
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    description: site.description,
    potentialAction: {
      "@type": "SearchAction",
      target: `${site.url}/blog?query={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <html lang={language} className={`${inter.variable} ${manrope.variable}`}>
      <body className="min-h-screen bg-bg font-[var(--font-inter)] text-text antialiased">
        <a href="#main-content" className="skip-link">
          {localized.skipToContent}
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <Navbar
          siteName={site.name}
          ctaPrimary={site.ctaPrimary}
          navigation={site.navigation}
          servicesMenuLabel={localized.servicesMenuLabel}
          serviceLinks={services.map((service) => ({
            label: service.name,
            href: `/services/${service.slug}`
          }))}
          language={language}
          languageSwitchLabel={localized.languageSwitchLabel}
          openMenuLabel={localized.openMenuLabel}
          closeMenuLabel={localized.closeMenuLabel}
          homeAriaLabel={localized.homeAriaLabel}
        />
        <main id="main-content">{children}</main>
        <Footer
          siteName={site.name}
          siteDescription={site.description}
          email={site.email}
          newsletterTitle={localized.newsletterTitle}
          newsletterDescription={localized.newsletterDescription}
          newsletterInputLabel={localized.newsletterInputLabel}
          newsletterPlaceholder={localized.newsletterPlaceholder}
          newsletterButton={localized.newsletterButton}
          sections={localized.footerSections}
          rightsText={localized.rightsText}
        />
        <MobileStickyCta
          bookCallLabel={localized.mobileBookCall}
          requestAuditLabel={localized.mobileRequestAudit}
        />
        <CookieNotice
          title={localized.cookieTitle}
          description={localized.cookieDescription}
          acceptLabel={localized.cookieAccept}
        />
        <AnalyticsPlaceholder />
      </body>
    </html>
  );
}
