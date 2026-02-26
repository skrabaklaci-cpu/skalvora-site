import type { Language } from "@/lib/language";

type LocalizedString = {
  en: string;
  hu: string;
};

type LocalizedNavItem = {
  label: LocalizedString;
  href: string;
};

const siteBase = {
  name: "Skalvora",
  url: "https://www.skalvora.com",
  email: "hello@skalvora.com"
} as const;

const siteCopy = {
  tagline: {
    en: "Turn process pressure into operational momentum.",
    hu: "Alakítsd a folyamatnyomást működési lendületté."
  },
  elevatorPitch: {
    en: "Skalvora helps teams remove workflow friction through audit-led AI optimization, practical workshops, and automation planning.",
    hu: "A Skalvora auditvezérelt AI-optimalizálással, gyakorlati workshopokkal és automatizációs tervezéssel csökkenti a folyamatok súrlódását."
  },
  description: {
    en: "Skalvora audits business workflows, identifies AI opportunities, and guides teams to save time with clearer ownership and fewer bottlenecks.",
    hu: "A Skalvora üzleti munkafolyamatokat auditál, AI-lehetőségeket azonosít, és segíti a csapatokat, hogy tisztább felelősséggel és kevesebb szűk keresztmetszettel időt takarítsanak meg."
  },
  ctaPrimary: {
    en: "Book a discovery call",
    hu: "Foglalj egy feltáró hívást"
  },
  ctaSecondary: {
    en: "Request an audit",
    hu: "Audit kérése"
  },
  navigation: [
    { label: { en: "Home", hu: "Kezdőlap" }, href: "/" },
    { label: { en: "Services", hu: "Szolgáltatások" }, href: "/services" },
    { label: { en: "Case Studies", hu: "Esettanulmányok" }, href: "/case-studies" },
    { label: { en: "About", hu: "Rólunk" }, href: "/about" },
    { label: { en: "Blog", hu: "Blog" }, href: "/blog" },
    { label: { en: "Contact", hu: "Kapcsolat" }, href: "/contact" }
  ] satisfies LocalizedNavItem[]
} as const;

const companyCopy = {
  mission: {
    en: "Skalvora exists to make people happy at work by giving them back the time and clarity they need to do their best work.",
    hu: "A Skalvora azért létezik, hogy boldogabbá tegye az embereket a munkában: visszaadja nekik az időt és az átláthatóságot, ami a legjobb teljesítményhez kell."
  },
  purpose: {
    en: "We wake up every day to make people happy.",
    hu: "Minden nap azért kelünk fel, hogy boldogabbá tegyük az embereket."
  },
  value: {
    en: "We optimize painful work processes so teams save more time every month, not just once.",
    hu: "A legfájdalmasabb munkafolyamatokat optimalizáljuk, hogy a csapatok minden hónapban egyre több időt nyerjenek, ne csak egyszer."
  },
  dreamClient: {
    en: "Professionals over 30 who care deeply about their work but constantly feel short on time due to inefficient workflows.",
    hu: "30+ szakemberek, akik szeretik a munkájukat, mégis állandó időhiányban vannak a nem hatékony folyamatok miatt."
  }
} as const;

const socialProofCopy = {
  logos: [
    "Northline Group",
    "Helm Advisory",
    "Krona Freight",
    "Redwood Operations",
    "Mira Systems"
  ],
  testimonials: [
    {
      quote: {
        en: "Skalvora translated our process chaos into a roadmap we could actually execute. Within weeks, our handoff delays dropped.",
        hu: "A Skalvora a folyamatkáoszunkat végrehajtható ütemtervvé alakította. Néhány héten belül csökkentek az átadási késések."
      },
      name: "Elena Voss",
      title: {
        en: "COO, Northline Group",
        hu: "operatív igazgató, Northline Group"
      }
    },
    {
      quote: {
        en: "The audit gave us clarity on where AI helps and where it does not. We stopped guessing and started prioritizing.",
        hu: "Az audit pontos képet adott arról, hol segít az AI, és hol nem. Abbahagytuk a találgatást, és elkezdtünk priorizálni."
      },
      name: "Marcus Hale",
      title: {
        en: "Head of Operations, Helm Advisory",
        hu: "operációs vezető, Helm Advisory"
      }
    },
    {
      quote: {
        en: "Their workshop aligned leadership and delivery teams in one day. We left with owners, timelines, and confidence.",
        hu: "A workshop egy nap alatt összehangolta a vezetést és a delivery csapatokat. Tulajdonosokkal, határidőkkel és magabiztossággal távoztunk."
      },
      name: "Priya Menon",
      title: {
        en: "Director of Enablement, Krona Freight",
        hu: "enablement igazgató, Krona Freight"
      }
    }
  ]
} as const;

const outcomesCopy = [
  {
    label: {
      en: "Average weekly hours reclaimed",
      hu: "Hetente visszanyert átlagos munkaidő"
    },
    value: "8-14"
  },
  {
    label: {
      en: "Reduction in workflow bottlenecks",
      hu: "Folyamatszűk keresztmetszetek csökkenése"
    },
    value: "27%"
  },
  {
    label: {
      en: "Faster task handoff cycles",
      hu: "Gyorsabb feladatátadási ciklus"
    },
    value: "2.1x"
  },
  {
    label: {
      en: "Teams with clearer process ownership",
      hu: "Tisztább folyamattulajdonlással működő csapatok"
    },
    value: "92%"
  }
] as const;

const faqsCopy = [
  {
    question: {
      en: "How long does a workflow audit usually take?",
      hu: "Mennyi ideig tart általában egy workflow audit?"
    },
    answer: {
      en: "Most audits run 2 to 6 weeks based on process scope, team availability, and data access.",
      hu: "A legtöbb audit 2-6 hétig tart a folyamat összetettsége, a csapat rendelkezésre állása és az adathozzáférés alapján."
    }
  },
  {
    question: {
      en: "Do we need technical teams involved from day one?",
      hu: "Szükséges, hogy a technikai csapat az első naptól részt vegyen?"
    },
    answer: {
      en: "No. We start with operational leaders and process owners, then involve technical stakeholders when solutions are prioritized.",
      hu: "Nem. Az operatív vezetőkkel és folyamattulajdonosokkal kezdünk, majd a megoldások priorizálásakor vonjuk be a technikai szereplőket."
    }
  },
  {
    question: {
      en: "Do you implement automations too?",
      hu: "Az automatizációk megvalósítását is vállaljátok?"
    },
    answer: {
      en: "We currently focus on audit and enablement. Automation implementation packages are launching soon, and waitlist clients get first access.",
      hu: "Jelenleg auditra és enablementre fókuszálunk. Az automatizációs megvalósítási csomagok hamarosan indulnak, a várólistás ügyfelek elsőként kapnak hozzáférést."
    }
  },
  {
    question: {
      en: "Is this suitable for smaller companies?",
      hu: "Kisebb cégeknek is megfelelő ez a szolgáltatás?"
    },
    answer: {
      en: "Yes. If workflow friction is slowing delivery or creating stress, the audit framework can be scoped for lean teams.",
      hu: "Igen. Ha a folyamatok súrlódása lassítja a szállítást vagy stresszt okoz, az audit keretrendszer kisebb csapatokra is jól szabható."
    }
  }
] as const;

function localize(value: LocalizedString, language: Language) {
  return value[language];
}

export function getSiteConfig(language: Language) {
  return {
    ...siteBase,
    tagline: localize(siteCopy.tagline, language),
    elevatorPitch: localize(siteCopy.elevatorPitch, language),
    description: localize(siteCopy.description, language),
    ctaPrimary: localize(siteCopy.ctaPrimary, language),
    ctaSecondary: localize(siteCopy.ctaSecondary, language),
    navigation: siteCopy.navigation.map((item) => ({
      label: localize(item.label, language),
      href: item.href
    }))
  };
}

export function getCompanyDetails(language: Language) {
  return {
    mission: localize(companyCopy.mission, language),
    purpose: localize(companyCopy.purpose, language),
    value: localize(companyCopy.value, language),
    dreamClient: localize(companyCopy.dreamClient, language)
  };
}

export function getSocialProof(language: Language) {
  return {
    logos: socialProofCopy.logos,
    testimonials: socialProofCopy.testimonials.map((item) => ({
      quote: localize(item.quote, language),
      name: item.name,
      title: localize(item.title, language)
    }))
  };
}

export function getOutcomes(language: Language) {
  return outcomesCopy.map((item) => ({
    label: localize(item.label, language),
    value: item.value
  }));
}

export function getFaqs(language: Language) {
  return faqsCopy.map((item) => ({
    question: localize(item.question, language),
    answer: localize(item.answer, language)
  }));
}

export const siteConfig = {
  ...siteBase,
  tagline: siteCopy.tagline.en,
  elevatorPitch: siteCopy.elevatorPitch.en,
  description: siteCopy.description.en,
  ctaPrimary: siteCopy.ctaPrimary.en,
  ctaSecondary: siteCopy.ctaSecondary.en,
  navigation: siteCopy.navigation.map((item) => ({ label: item.label.en, href: item.href }))
} as const;
