import type { Language } from "@/lib/language";

type LocalizedString = {
  en: string;
  hu: string;
};

type LocalizedService = {
  slug: "workflow-audit" | "workshops" | "automations";
  name: LocalizedString;
  summary: LocalizedString;
  whoItsFor: LocalizedString[];
  outcomes: LocalizedString[];
  deliverables: LocalizedString[];
  timeline: LocalizedString;
  clientNeeds: LocalizedString[];
  ctaLabel: LocalizedString;
  ctaHref: string;
  comingSoon?: boolean;
};

export type Service = {
  slug: "workflow-audit" | "workshops" | "automations";
  name: string;
  summary: string;
  whoItsFor: string[];
  outcomes: string[];
  deliverables: string[];
  timeline: string;
  clientNeeds: string[];
  ctaLabel: string;
  ctaHref: string;
  comingSoon?: boolean;
};

function localize(value: LocalizedString, language: Language) {
  return value[language];
}

const localizedServices: LocalizedService[] = [
  {
    slug: "workflow-audit",
    name: { en: "Workflow Audit", hu: "Workflow audit" },
    summary: {
      en: "A structured analysis of where your current operations lose time, clarity, and momentum.",
      hu: "Strukturált elemzés arról, hol veszít időt, átláthatóságot és lendületet a működésetek."
    },
    whoItsFor: [
      {
        en: "Operations and delivery leaders managing complex handoffs",
        hu: "Komplex átadásokat irányító operációs és delivery vezetők"
      },
      {
        en: "Teams with repeated delays and unclear ownership",
        hu: "Visszatérő csúszásokkal és nem egyértelmű felelősséggel küzdő csapatok"
      },
      {
        en: "Companies exploring AI but unsure where it delivers real value",
        hu: "AI-lehetőségeket kereső cégek, amelyek még nem látják pontosan a valódi üzleti értéket"
      }
    ],
    outcomes: [
      {
        en: "Process visibility across critical workflows",
        hu: "Átláthatóság a kritikus munkafolyamatokban"
      },
      {
        en: "Prioritized pain points by business impact",
        hu: "Üzleti hatás szerint priorizált fájdalompontok"
      },
      {
        en: "AI opportunities shortlist with practical constraints",
        hu: "Gyakorlati korlátokkal együtt értékelt AI-lehetőségi lista"
      },
      {
        en: "Clear implementation roadmap and ROI estimate",
        hu: "Világos megvalósítási ütemterv és ROI-becslés"
      }
    ],
    deliverables: [
      { en: "Current-state process map", hu: "Jelenlegi folyamatállapot-térkép" },
      { en: "Pain point analysis", hu: "Fájdalompont-elemzés" },
      { en: "AI opportunity shortlist", hu: "AI-lehetőségek rövidlistája" },
      { en: "ROI estimate", hu: "ROI-becslés" },
      { en: "90-day implementation roadmap", hu: "90 napos megvalósítási ütemterv" }
    ],
    timeline: { en: "2-6 weeks", hu: "2-6 hét" },
    clientNeeds: [
      { en: "Access to key process stakeholders", hu: "Hozzáférés a kulcsfontosságú folyamattulajdonosokhoz" },
      { en: "Existing SOPs or workflow documentation", hu: "Meglévő SOP-k vagy workflow dokumentáció" },
      { en: "Time for interviews and one alignment review", hu: "Idő interjúkra és egy közös egyeztető áttekintésre" }
    ],
    ctaLabel: { en: "Request an audit", hu: "Audit kérése" },
    ctaHref: "/contact"
  },
  {
    slug: "workshops",
    name: { en: "Workshops", hu: "Workshopok" },
    summary: {
      en: "Hands-on sessions that turn AI concepts into practical workflow decisions for your team.",
      hu: "Gyakorlatorientált alkalmak, amelyek az AI-koncepciókat konkrét folyamatdöntésekké alakítják."
    },
    whoItsFor: [
      {
        en: "Leadership teams preparing AI operating models",
        hu: "AI működési modellekre készülő vezetői csapatok"
      },
      {
        en: "Departments needing repeatable prompt workflows",
        hu: "Ismételhető prompt workflow-kat igénylő részlegek"
      },
      {
        en: "Cross-functional groups aligning on governance and risk",
        hu: "Governance és kockázat terén összehangolódó cross-funkcionális csapatok"
      }
    ],
    outcomes: [
      { en: "Shared understanding of where AI fits", hu: "Közös kép arról, hol illeszkedik az AI" },
      { en: "Immediate workflow improvements", hu: "Azonnal alkalmazható folyamatfejlesztések" },
      { en: "Team alignment on roles, ownership, and guardrails", hu: "Szerepkörök, felelősségek és keretek mentén egységes csapatmunka" }
    ],
    deliverables: [
      { en: "Customized workshop agenda", hu: "Testreszabott workshop agenda" },
      { en: "Facilitated exercises and takeaways", hu: "Facilitált gyakorlatok és konkrét tanulságok" },
      { en: "Action plan with owners and deadlines", hu: "Akcióterv felelősökkel és határidőkkel" }
    ],
    timeline: { en: "90 minutes to full-day formats", hu: "90 perctől egész napos formátumig" },
    clientNeeds: [
      { en: "Defined participant group", hu: "Jól meghatározott résztvevői kör" },
      { en: "Pre-session goals", hu: "Előre rögzített workshop célok" },
      { en: "One sponsor for implementation follow-through", hu: "Egy kijelölt sponsor az utókövetéshez" }
    ],
    ctaLabel: { en: "Book a discovery call", hu: "Foglalj egy feltáró hívást" },
    ctaHref: "/contact"
  },
  {
    slug: "automations",
    name: { en: "Automations", hu: "Automatizációk" },
    summary: {
      en: "Upcoming implementation offer focused on high-impact process automation opportunities.",
      hu: "Közelgő megvalósítási szolgáltatás a legnagyobb üzleti hatású automatizációs lehetőségekre."
    },
    whoItsFor: [
      { en: "Audit clients ready for execution", hu: "Megvalósításra kész audit ügyfelek" },
      { en: "Teams with validated automation opportunities", hu: "Validált automatizációs lehetőségekkel rendelkező csapatok" },
      { en: "Leaders seeking controlled rollout with measurable ROI", hu: "Mérhető ROI-t és kontrollált bevezetést kereső vezetők" }
    ],
    outcomes: [
      { en: "Pilot automations tied to business metrics", hu: "Üzleti mutatókhoz kötött pilot automatizációk" },
      { en: "Safer implementation with governance in place", hu: "Biztonságosabb megvalósítás megfelelő governance mellett" },
      { en: "Faster scaling of proven workflow improvements", hu: "Gyorsabb skálázás a bizonyított folyamatfejlesztések mentén" }
    ],
    deliverables: [
      { en: "Automation blueprint", hu: "Automatizációs blueprint" },
      { en: "Pilot build plan", hu: "Pilot megvalósítási terv" },
      { en: "Measurement framework", hu: "Mérési keretrendszer" }
    ],
    timeline: { en: "Coming soon", hu: "Hamarosan" },
    clientNeeds: [
      { en: "Prioritized processes", hu: "Priorizált folyamatok" },
      { en: "Operational sponsor", hu: "Operatív sponsor" },
      { en: "Baseline performance data", hu: "Kiinduló teljesítményadatok" }
    ],
    ctaLabel: { en: "Join automation waitlist", hu: "Csatlakozás az automatizációs várólistához" },
    ctaHref: "/contact",
    comingSoon: true
  }
];

const localizedWorkflowAuditProcess = [
  {
    step: "01",
    title: { en: "Discovery and Scope", hu: "Feltárás és scope" },
    description: {
      en: "We align on your highest-friction workflows, define audit boundaries, and map business goals.",
      hu: "Egyeztetjük a legnagyobb súrlódású workflow-kat, kijelöljük az audit határait, és feltérképezzük az üzleti célokat."
    }
  },
  {
    step: "02",
    title: { en: "Process Mapping", hu: "Folyamattérképezés" },
    description: {
      en: "We document current-state handoffs, tooling, and dependencies to expose bottlenecks and hidden costs.",
      hu: "Dokumentáljuk a jelenlegi átadásokat, eszközöket és függőségeket, hogy láthatóvá váljanak a szűk keresztmetszetek és rejtett költségek."
    }
  },
  {
    step: "03",
    title: { en: "Pain Point Analysis", hu: "Fájdalompont-elemzés" },
    description: {
      en: "We quantify delays, rework, and ownership gaps, then rank them by operational and financial impact.",
      hu: "Számszerűsítjük a csúszásokat, újramunkát és felelősségi réseket, majd működési és pénzügyi hatás szerint rangsoroljuk ezeket."
    }
  },
  {
    step: "04",
    title: { en: "AI Opportunity Design", hu: "AI-lehetőségek tervezése" },
    description: {
      en: "We identify where AI can improve speed, quality, or consistency and note risk and governance constraints.",
      hu: "Azonosítjuk, hol javítható az AI-val a sebesség, minőség vagy konzisztencia, és rögzítjük a kockázati és governance korlátokat."
    }
  },
  {
    step: "05",
    title: { en: "Roadmap and ROI", hu: "Roadmap és ROI" },
    description: {
      en: "You receive a practical roadmap with sequencing, owners, quick wins, and starting ROI ranges.",
      hu: "Gyakorlati roadmapet adunk sorrenddel, felelősökkel, gyors nyereségekkel és induló ROI-sávokkal."
    }
  }
] as const;

const localizedAuditPricingTiers = [
  {
    tier: { en: "Starter", hu: "Starter" },
    startingAt: "$6,000+",
    description: {
      en: "Best for one critical workflow and a focused leadership team.",
      hu: "Ideális egy kritikus workflow-ra és fókuszált vezetői csapatra."
    },
    includes: [
      { en: "1 workflow audit", hu: "1 workflow audit" },
      { en: "Up to 6 stakeholder interviews", hu: "Legfeljebb 6 stakeholder interjú" },
      { en: "Core pain point analysis", hu: "Alapvető fájdalompont-elemzés" },
      { en: "Initial AI opportunities shortlist", hu: "Kezdeti AI-lehetőségi rövidlista" },
      { en: "Executive summary", hu: "Vezetői összefoglaló" }
    ],
    featured: false
  },
  {
    tier: { en: "Growth", hu: "Growth" },
    startingAt: "$14,000+",
    description: {
      en: "Built for scaling teams with multiple cross-functional bottlenecks.",
      hu: "Skálázódó csapatoknak, több cross-funkcionális szűk keresztmetszettel."
    },
    includes: [
      { en: "Up to 3 workflows", hu: "Legfeljebb 3 workflow" },
      { en: "Cross-team process mapping", hu: "Csapatokon átívelő folyamattérképezés" },
      { en: "Prioritized opportunity matrix", hu: "Priorizált lehetőségmátrix" },
      { en: "ROI estimate model", hu: "ROI-becslési modell" },
      { en: "90-day roadmap", hu: "90 napos roadmap" }
    ],
    featured: true
  },
  {
    tier: { en: "Enterprise", hu: "Enterprise" },
    startingAt: "$30,000+",
    description: {
      en: "For larger organizations requiring multi-department alignment and governance.",
      hu: "Nagyobb szervezeteknek, ahol több részleg összehangolása és governance szükséges."
    },
    includes: [
      { en: "Complex workflow portfolio", hu: "Komplex workflow-portfólió" },
      { en: "Department-level stakeholder tracks", hu: "Részlegszintű stakeholder pályák" },
      { en: "Governance and risk considerations", hu: "Governance és kockázati szempontok" },
      { en: "Implementation sequencing", hu: "Megvalósítási sorrend" },
      { en: "Leadership workshops", hu: "Vezetői workshopok" }
    ],
    featured: false
  }
] as const;

const localizedWorkshopFormats = [
  {
    name: { en: "90-Minute Session", hu: "90 perces session" },
    details: {
      en: "Executive brief with practical examples and immediate next actions.",
      hu: "Vezetői összefoglaló gyakorlati példákkal és azonnali következő lépésekkel."
    }
  },
  {
    name: { en: "Half-Day Workshop", hu: "Fél napos workshop" },
    details: {
      en: "Focused enablement for one team with exercises and implementation planning.",
      hu: "Fókuszált enablement egy csapat számára gyakorlatokkal és megvalósítási tervezéssel."
    }
  },
  {
    name: { en: "Full-Day Workshop", hu: "Egész napos workshop" },
    details: {
      en: "Cross-functional deep dive covering strategy, execution, and governance.",
      hu: "Cross-funkcionális mélymerülés stratégia, végrehajtás és governance témákban."
    }
  }
] as const;

const localizedWorkshopTopics = [
  { en: "AI for operations", hu: "AI az operációban" },
  { en: "Prompt workflows", hu: "Prompt workflow-k" },
  { en: "Automation ideas", hu: "Automatizációs ötletek" },
  { en: "Governance and safety", hu: "Governance és biztonság" }
] as const;

export function getServices(language: Language): Service[] {
  return localizedServices.map((service) => ({
    slug: service.slug,
    name: localize(service.name, language),
    summary: localize(service.summary, language),
    whoItsFor: service.whoItsFor.map((item) => localize(item, language)),
    outcomes: service.outcomes.map((item) => localize(item, language)),
    deliverables: service.deliverables.map((item) => localize(item, language)),
    timeline: localize(service.timeline, language),
    clientNeeds: service.clientNeeds.map((item) => localize(item, language)),
    ctaLabel: localize(service.ctaLabel, language),
    ctaHref: service.ctaHref,
    comingSoon: service.comingSoon
  }));
}

export function getWorkflowAuditProcess(language: Language) {
  return localizedWorkflowAuditProcess.map((item) => ({
    step: item.step,
    title: localize(item.title, language),
    description: localize(item.description, language)
  }));
}

export function getAuditPricingTiers(language: Language) {
  return localizedAuditPricingTiers.map((item) => ({
    tier: localize(item.tier, language),
    startingAt: item.startingAt,
    description: localize(item.description, language),
    includes: item.includes.map((entry) => localize(entry, language)),
    featured: item.featured
  }));
}

export function getWorkshopFormats(language: Language) {
  return localizedWorkshopFormats.map((item) => ({
    name: localize(item.name, language),
    details: localize(item.details, language)
  }));
}

export function getWorkshopTopics(language: Language) {
  return localizedWorkshopTopics.map((item) => localize(item, language));
}

export const services = getServices("en");
export const workflowAuditProcess = getWorkflowAuditProcess("en");
export const auditPricingTiers = getAuditPricingTiers("en");
export const workshopFormats = getWorkshopFormats("en");
export const workshopTopics = getWorkshopTopics("en");
