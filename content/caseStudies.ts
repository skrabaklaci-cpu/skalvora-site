import type { Language } from "@/lib/language";

type LocalizedString = {
  en: string;
  hu: string;
};

function localize(value: LocalizedString, language: Language) {
  return value[language];
}

export type CaseStudy = {
  slug: string;
  title: string;
  industry: string;
  timeline: string;
  summary: string;
  problem: string;
  approach: string[];
  solution: string;
  results: string[];
};

type LocalizedCaseStudy = {
  slug: string;
  title: LocalizedString;
  industry: LocalizedString;
  timeline: LocalizedString;
  summary: LocalizedString;
  problem: LocalizedString;
  approach: LocalizedString[];
  solution: LocalizedString;
  results: LocalizedString[];
};

const localizedCaseStudies: LocalizedCaseStudy[] = [
  {
    slug: "northline-handoff-optimization",
    title: {
      en: "Northline Group: Rebuilding Handoffs Across Operations",
      hu: "Northline Group: Átadások újratervezése az operációban"
    },
    industry: { en: "Logistics", hu: "Logisztika" },
    timeline: { en: "8 weeks", hu: "8 hét" },
    summary: {
      en: "A logistics operator reduced internal delays by redesigning a fragmented dispatch-to-delivery workflow.",
      hu: "Egy logisztikai szereplő belső késéseket csökkentett egy széttöredezett dispatch-to-delivery workflow újratervezésével."
    },
    problem: {
      en: "Northline was losing time in every dispatch cycle due to scattered communication and unclear handoff ownership.",
      hu: "A Northline minden diszpécser ciklusban időt veszített a szétszórt kommunikáció és az átadási felelősségek bizonytalansága miatt."
    },
    approach: [
      { en: "Mapped dispatch, tracking, and exception workflows", hu: "Feltérképeztük a diszpécselési, követési és kivételkezelési workflow-kat" },
      { en: "Interviewed operations managers and coordinators", hu: "Interjúkat készítettünk operációs vezetőkkel és koordinátorokkal" },
      { en: "Ranked recurring bottlenecks by delay cost", hu: "A visszatérő szűk keresztmetszeteket késési költség alapján rangsoroltuk" },
      { en: "Designed AI-supported triage rules for exception handling", hu: "AI-támogatott triage szabályokat terveztünk kivételkezelésre" }
    ],
    solution: {
      en: "Skalvora delivered a phased roadmap that introduced standardized handoff checkpoints and AI-assisted escalation cues.",
      hu: "A Skalvora egy fázisokra bontott roadmapet adott, amely standardizált átadási checkpointokat és AI-támogatott eszkalációs jelzéseket vezetett be."
    },
    results: [
      { en: "31% fewer delayed handoffs", hu: "31%-kal kevesebb késő átadás" },
      { en: "9 hours reclaimed per team each week", hu: "Heti 9 óra visszanyerve csapatonként" },
      { en: "Improved SLA consistency across regional teams", hu: "Javuló SLA-konzisztencia a regionális csapatok között" }
    ]
  },
  {
    slug: "helm-advisory-proposal-cycle",
    title: {
      en: "Helm Advisory: Shortening Proposal Cycle Time",
      hu: "Helm Advisory: Rövidebb ajánlatkészítési ciklusidő"
    },
    industry: { en: "Professional Services", hu: "Professzionális szolgáltatások" },
    timeline: { en: "6 weeks", hu: "6 hét" },
    summary: {
      en: "A consulting firm accelerated proposal delivery by reducing rework and improving review flow.",
      hu: "Egy tanácsadó cég gyorsította az ajánlatkészítést az újramunka csökkentésével és a review folyamat javításával."
    },
    problem: {
      en: "Proposal development was bottlenecked by repeated edits, unclear approvals, and long internal turnaround times.",
      hu: "Az ajánlatkészítést visszatérő szerkesztési körök, nem egyértelmű jóváhagyások és hosszú belső átfutási idők lassították."
    },
    approach: [
      { en: "Audited proposal intake, drafting, and review steps", hu: "Auditáltuk az ajánlatbefogadás, készítés és review lépéseit" },
      { en: "Identified decision latency and content duplication", hu: "Azonosítottuk a döntési késést és a tartalmi duplikációkat" },
      { en: "Introduced prompt-based drafting guardrails", hu: "Prompt-alapú készítési guardraileket vezettünk be" },
      { en: "Defined owner matrix for approval gates", hu: "Felelősmátrixot definiáltunk a jóváhagyási pontokhoz" }
    ],
    solution: {
      en: "The team adopted a new proposal workflow with reusable prompt templates and a clear reviewer sequence.",
      hu: "A csapat új ajánlat workflow-t vezetett be újrahasznosítható prompt sablonokkal és egyértelmű review sorrenddel."
    },
    results: [
      { en: "42% faster proposal turnaround", hu: "42%-kal gyorsabb ajánlat átfutás" },
      { en: "Lower review-loop volume", hu: "Kevesebb review-kör" },
      { en: "Higher predictability in weekly pipeline planning", hu: "Jobb kiszámíthatóság a heti pipeline tervezésben" }
    ]
  },
  {
    slug: "mira-systems-support-ops",
    title: {
      en: "Mira Systems: Stabilizing Support Operations",
      hu: "Mira Systems: Support operáció stabilizálása"
    },
    industry: { en: "SaaS", hu: "SaaS" },
    timeline: { en: "10 weeks", hu: "10 hét" },
    summary: {
      en: "A growing software company improved support throughput while reducing escalation noise.",
      hu: "Egy növekvő szoftvercég javította a support áteresztőképességét és csökkentette az eszkalációs zajt."
    },
    problem: {
      en: "Support volume was increasing, but triage practices were inconsistent and handoffs to engineering were slow.",
      hu: "A support volumene nőtt, de a triage gyakorlat nem volt konzisztens, az engineering felé történő átadások pedig lassúak voltak."
    },
    approach: [
      { en: "Mapped support intake and escalation pathways", hu: "Feltérképeztük a support intake és eszkalációs útvonalakat" },
      { en: "Measured repeat ticket patterns and resolution lag", hu: "Mértük az ismétlődő ticket mintákat és a megoldási késéseket" },
      { en: "Built AI triage opportunity shortlist", hu: "AI triage lehetőségi rövidlistát készítettünk" },
      { en: "Co-created governance controls with support leaders", hu: "A support vezetőkkel közösen alakítottunk ki governance kontrollokat" }
    ],
    solution: {
      en: "Skalvora provided a governance-first plan to standardize triage and introduce automation pilots safely.",
      hu: "A Skalvora governance-first tervet adott a triage standardizálására és az automatizációs pilotok biztonságos bevezetésére."
    },
    results: [
      { en: "24% improvement in first-response consistency", hu: "24%-os javulás az első válasz konzisztenciájában" },
      { en: "2-day reduction in average escalation resolution", hu: "Átlagosan 2 nappal gyorsabb eszkalációs megoldás" },
      { en: "Clearer ownership between support and engineering", hu: "Tisztább felelősség a support és engineering között" }
    ]
  }
];

export function getCaseStudies(language: Language): CaseStudy[] {
  return localizedCaseStudies.map((study) => ({
    slug: study.slug,
    title: localize(study.title, language),
    industry: localize(study.industry, language),
    timeline: localize(study.timeline, language),
    summary: localize(study.summary, language),
    problem: localize(study.problem, language),
    approach: study.approach.map((item) => localize(item, language)),
    solution: localize(study.solution, language),
    results: study.results.map((item) => localize(item, language))
  }));
}

export const caseStudies = getCaseStudies("en");
