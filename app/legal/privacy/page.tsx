import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/section-heading";
import { getCurrentLanguage } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Skalvora privacy policy template with GDPR-aware language."
};

export default function PrivacyPage() {
  const language = getCurrentLanguage();

  const lastUpdated = language === "hu" ? "2026. február 26." : "February 26, 2026";

  return (
    <article className="section-shell py-16 sm:py-20">
      <SectionHeading
        eyebrow={language === "hu" ? "Jogi" : "Legal"}
        title={language === "hu" ? "Adatkezelési tájékoztató" : "Privacy Policy"}
        description={
          language === "hu"
            ? `Utolsó frissítés: ${lastUpdated}. Ez egy általános sablon, amelyet éles használat előtt jogi felülvizsgálat szükséges.`
            : `Last updated: ${lastUpdated}. This document is a generic template and should be reviewed by legal counsel before production use.`
        }
      />

      <div className="prose-content space-y-5 text-sm text-muted">
        {language === "hu" ? (
          <>
            <p>
              A Skalvora tiszteletben tartja a magánszférádat, és körültekintően kezeli a személyes adatokat. Ez a tájékoztató bemutatja, milyen adatokat gyűjtünk, miért, és hogyan élhetsz a jogaiddal.
            </p>
            <h2>1. Milyen adatokat gyűjtünk</h2>
            <p>
              Gyűjthetünk kapcsolattartási adatokat, céges információkat és a kapcsolatfelvételi űrlapon vagy emailben megadott tartalmakat.
            </p>
            <h2>2. Jogszerű adatkezelési alap (GDPR)</h2>
            <p>
              Az adatkezelés jogalapja az interakciótól függően jogos érdek, szerződéses szükségesség, hozzájárulás vagy jogi kötelezettség lehet.
            </p>
            <h2>3. Mire használjuk az adatokat</h2>
            <ul>
              <li>Megkeresések megválaszolására és a kért szolgáltatások nyújtására</li>
              <li>Szolgáltatásminőség és weboldal teljesítmény fejlesztésére</li>
              <li>Ügyfélmunkához kapcsolódó nyilvántartások fenntartására</li>
            </ul>
            <h2>4. Adatmegőrzés</h2>
            <p>
              Személyes adatokat csak a szolgáltatásnyújtáshoz, jogi megfeleléshez és legitim üzleti célokhoz szükséges ideig őrzünk.
            </p>
            <h2>5. A jogaid</h2>
            <p>
              A joghatóságodtól függően jogosult lehetsz hozzáférni, helyesbíteni, törölni vagy korlátozni a személyes adataid kezelését.
            </p>
            <h2>6. Kapcsolat</h2>
            <p>Adatvédelmi kérdések: hello@skalvora.com</p>
          </>
        ) : (
          <>
            <p>
              Skalvora respects your privacy and handles personal data with care. This policy explains what data we collect, why we collect it, and how you can exercise your rights.
            </p>
            <h2>1. Data We Collect</h2>
            <p>
              We may collect contact details, company information, and communication content you submit through our forms or email.
            </p>
            <h2>2. Lawful Basis (GDPR)</h2>
            <p>
              We process data based on legitimate interest, contractual necessity, consent, or legal obligations depending on the interaction context.
            </p>
            <h2>3. How We Use Data</h2>
            <ul>
              <li>To respond to inquiries and provide requested services</li>
              <li>To improve service quality and website performance</li>
              <li>To maintain records related to client engagements</li>
            </ul>
            <h2>4. Data Retention</h2>
            <p>
              We retain personal data only as long as necessary for service delivery, legal compliance, and legitimate business purposes.
            </p>
            <h2>5. Your Rights</h2>
            <p>
              Depending on your jurisdiction, you may have rights to access, correct, delete, or restrict processing of your personal data.
            </p>
            <h2>6. Contact</h2>
            <p>For privacy questions, contact: hello@skalvora.com</p>
          </>
        )}
      </div>
    </article>
  );
}
