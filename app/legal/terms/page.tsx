import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/section-heading";
import { getCurrentLanguage } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Generic, editable terms of service for Skalvora."
};

export default function TermsPage() {
  const language = getCurrentLanguage();

  const lastUpdated = language === "hu" ? "2026. február 26." : "February 26, 2026";

  return (
    <article className="section-shell py-16 sm:py-20">
      <SectionHeading
        eyebrow={language === "hu" ? "Jogi" : "Legal"}
        title={language === "hu" ? "Felhasználási feltételek" : "Terms of Service"}
        description={
          language === "hu"
            ? `Utolsó frissítés: ${lastUpdated}. Ez egy szerkeszthető általános sablon, élesítés előtt jogi felülvizsgálat szükséges.`
            : `Last updated: ${lastUpdated}. This is a generic template for editing with legal counsel.`
        }
      />

      <div className="prose-content space-y-5 text-sm text-muted">
        {language === "hu" ? (
          <>
            <p>
              Ezek a feltételek szabályozzák a Skalvora weboldalának és szolgáltatásainak használatát. Az oldal használatával elfogadod ezeket a feltételeket.
            </p>
            <h2>1. Hatókör</h2>
            <p>
              A Skalvora workflow audit, workshop és tanácsadási szolgáltatásokat nyújt. A részletes scope, árazás és teljesítési feltételek külön írásbeli megállapodásban szerepelnek.
            </p>
            <h2>2. Elfogadható használat</h2>
            <p>
              Vállalod, hogy nem használod visszaélésszerűen a weboldalt, nem sérted a biztonsági működését, és nem küldesz jogellenes tartalmat a felületeken.
            </p>
            <h2>3. Szellemi tulajdon</h2>
            <p>
              A weboldal tartalma a Skalvora tulajdona, eltérő jelzés hiányában. Újrahasználat csak előzetes írásos engedéllyel lehetséges.
            </p>
            <h2>4. Felelősségkorlátozás</h2>
            <p>
              A weboldal &quot;jelen állapotában&quot; érhető el. A jogszabályok által megengedett mértékben a Skalvora nem felel közvetett vagy következményes károkért.
            </p>
            <h2>5. Irányadó jog</h2>
            <p>
              Az irányadó jogot és illetékességet élesítés előtt az adott működési joghatóság szerint kell pontosítani.
            </p>
            <h2>6. Kapcsolat</h2>
            <p>Feltételekkel kapcsolatos kérdések: hello@skalvora.com</p>
          </>
        ) : (
          <>
            <p>
              These Terms of Service govern your access to and use of the Skalvora website and services. By using this site, you agree to these terms.
            </p>
            <h2>1. Scope</h2>
            <p>
              Skalvora provides workflow audit, workshop, and advisory services. Any detailed scope, pricing, and delivery terms are defined in written agreements.
            </p>
            <h2>2. Acceptable Use</h2>
            <p>
              You agree not to misuse the website, interfere with security, or submit unlawful content through any site forms.
            </p>
            <h2>3. Intellectual Property</h2>
            <p>
              All content on this website is owned by Skalvora unless otherwise noted. Reuse requires prior written permission.
            </p>
            <h2>4. Limitation of Liability</h2>
            <p>
              The website is provided &quot;as is&quot;. Skalvora is not liable for indirect or consequential damages arising from site use to the extent permitted by law.
            </p>
            <h2>5. Governing Law</h2>
            <p>
              Governing law and venue should be specified based on your operating jurisdiction before production deployment.
            </p>
            <h2>6. Contact</h2>
            <p>For terms inquiries, contact: hello@skalvora.com</p>
          </>
        )}
      </div>
    </article>
  );
}
