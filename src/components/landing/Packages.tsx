import { useMemo, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  CakeSlice,
  Flower2,
  MapPin,
  ShoppingBag,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useIsItalian } from "@/lib/locale";
import Logo from "./Logo";

type Offer = {
  id: string;
  label: string;
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  bullets: string[];
  note: string;
};

type OccasionKey = "birthdays" | "onboarding" | "anniversary" | "milestone";

type Composition = {
  name: string;
  items: string[];
  note: string;
};

type Occasion = {
  label: string;
  title: string;
  intro: string;
  packs: Composition[];
};

const offers: Offer[] = [
  {
    id: "cakes",
    label: "Cakes",
    title: "Artisan cakes for birthdays, office celebrations and milestone moments",
    description:
      "From elegant celebration cakes to smaller formats for tighter teams, we source the right cake style for the moment and the company tone.",
    image: "/images/offers/cake-display.svg",
    icon: CakeSlice,
    bullets: ["Classic celebration cakes", "Premium custom finishes", "Smaller formats for lean teams", "Fresh local bakery sourcing"],
    note: "Designed to feel crafted, not generic.",
  },
  {
    id: "flowers",
    label: "Flowers",
    title: "Bouquets and floral compositions that add warmth without feeling generic",
    description:
      "Seasonal flowers, elegant bouquets and softer premium combinations for celebrations, anniversaries and more personal gestures.",
    image: "/images/offers/flowers-display.svg",
    icon: Flower2,
    bullets: ["Seasonal bouquets", "Premium floral boxes", "Elegant office-ready arrangements", "Boutique florist sourcing"],
    note: "Freshness and quality are part of the experience.",
  },
  {
    id: "gadgets",
    label: "Work gadgets",
    title: "Useful custom company gadgets employees actually keep on their desk",
    description:
      "From water bottles and notebooks to planners, anti-stress balls and practical work accessories, each item is selected to feel useful and well-made.",
    image: "/images/offers/gadgets-display.svg",
    icon: BriefcaseBusiness,
    bullets: ["Water bottles", "Planners and notebooks", "Desk accessories", "Custom branded practical items"],
    note: "Made to be used, not forgotten.",
  },
  {
    id: "merch",
    label: "Branded merch",
    title: "Premium branded merch that looks like part of a real brand system",
    description:
      "T-shirts, hoodies, caps, backpacks, laptop carriers and other branded pieces that feel cohesive, useful and high-quality.",
    image: "/images/offers/merch-display.svg",
    icon: ShoppingBag,
    bullets: ["T-shirts and hoodies", "Caps and accessories", "Backpacks and laptop carriers", "Premium branded essentials"],
    note: "Brand-forward without looking promotional.",
  },
];

const occasions: Record<OccasionKey, Occasion> = {
  birthdays: {
    label: "For birthdays",
    title: "Birthday combinations that can stay simple or become more premium",
    intro:
      "Birthday gifting should adapt to budget, role and company culture without creating operational overhead.",
    packs: [
      {
        name: "Birthday Signature",
        items: ["Cake", "Personalized card"],
        note: "A simple and warm combination that always works.",
      },
      {
        name: "Team Celebration",
        items: ["Cake", "Useful gadget"],
        note: "Adds a practical layer to the moment.",
      },
      {
        name: "Premium Spotlight",
        items: ["Cake", "Merch", "Personalized card"],
        note: "A higher-value option without feeling excessive.",
      },
      {
        name: "Sweet & Floral",
        items: ["Cake", "Flowers"],
        note: "More refined and visually expressive.",
      },
    ],
  },
  onboarding: {
    label: "For onboarding",
    title: "Onboarding sets that make day one feel considered and branded",
    intro:
      "Welcome kits should create belonging quickly while staying useful in everyday work.",
    packs: [
      {
        name: "First Day Essentials",
        items: ["Merch", "Work gadgets"],
        note: "A clean and practical onboarding combination.",
      },
      {
        name: "Brand Welcome",
        items: ["Hoodie or T-shirt", "Planner", "Water bottle"],
        note: "Balanced and easy to scale.",
      },
      {
        name: "Workday Starter",
        items: ["Notebook", "Desk accessories", "Water bottle"],
        note: "Designed to feel useful from the first week.",
      },
      {
        name: "Executive Arrival",
        items: ["Backpack or laptop carrier", "Notebook", "Desk accessories"],
        note: "Best for key hires or premium employer branding.",
      },
    ],
  },
  anniversary: {
    label: "For work anniversaries",
    title: "Work anniversary combinations that feel intentional, not templated",
    intro:
      "Anniversary recognition works best when it is visible enough to matter and tailored enough to feel sincere.",
    packs: [
      {
        name: "Quiet Appreciation",
        items: ["Work gadget", "Personalized card"],
        note: "Clean, professional and easy to tailor.",
      },
      {
        name: "Culture Gesture",
        items: ["Flowers or cake", "Personalized card"],
        note: "Adds warmth to the recognition moment.",
      },
      {
        name: "Team Recognition",
        items: ["Merch", "Gadget", "Message card"],
        note: "A stronger expression for a more visible moment.",
      },
      {
        name: "Tenure Tribute",
        items: ["Premium gadget", "Flowers", "Personalized card"],
        note: "A more elevated anniversary combination for long-tenure employees.",
      },
    ],
  },
  milestone: {
    label: "For milestones",
    title: "Milestone combinations designed for higher-value recognition moments",
    intro:
      "Longer-tenure and strategic milestones deserve combinations that feel premium while still being operationally simple.",
    packs: [
      {
        name: "Milestone Signature",
        items: ["Personalized card", "Gadget", "Merch"],
        note: "A strong premium baseline for milestone gifting.",
      },
      {
        name: "Celebration plus",
        items: ["Premium cake", "Merch", "Message card"],
        note: "Ideal when the moment is shared with the wider team.",
      },
      {
        name: "Leadership Marker",
        items: ["Premium merch", "Work gadget", "Personalized card"],
        note: "A cleaner premium combination with strong perceived value.",
      },
      {
        name: "Boutique Recognition",
        items: ["Flowers", "Premium gadget", "Personal note"],
        note: "Polished, warm and more boutique in feel.",
      },
    ],
  },
};

const tabs: { key: OccasionKey; label: string }[] = [
  { key: "birthdays", label: "Birthdays" },
  { key: "onboarding", label: "Onboarding" },
  { key: "anniversary", label: "Work anniversaries" },
  { key: "milestone", label: "Milestones" },
];

const Packages = () => {
  const isItalian = useIsItalian();
  const [activeOccasion, setActiveOccasion] = useState<OccasionKey>("birthdays");
  const localizedOffers = useMemo(() => {
    if (!isItalian) return offers;

    const copy: Record<string, Partial<Offer>> = {
      cakes: {
        label: "Torte",
        title: "Torte artigianali per compleanni, celebrazioni in ufficio e milestone",
        description:
          "Dalle torte eleganti ai formati più piccoli per team snelli, selezioniamo lo stile giusto per il momento e per il tono aziendale.",
        bullets: ["Torte classiche da celebrazione", "Finiture custom premium", "Formati piccoli per team snelli", "Sourcing da pasticcerie locali"],
        note: "Pensate per sembrare curate, non generiche.",
      },
      flowers: {
        label: "Fiori",
        title: "Bouquet e composizioni floreali che aggiungono calore senza essere banali",
        description:
          "Fiori stagionali, bouquet eleganti e combinazioni premium per celebrazioni, anniversari e gesti più personali.",
        bullets: ["Bouquet stagionali", "Flower box premium", "Composizioni adatte all'ufficio", "Sourcing da florist boutique"],
        note: "Freschezza e qualità fanno parte dell'esperienza.",
      },
      gadgets: {
        label: "Work gadgets",
        title: "Gadget aziendali utili, custom e pensati per essere usati davvero",
        description:
          "Borracce, notebook, planner, palline antistress e accessori pratici da lavoro, selezionati per essere utili e ben fatti.",
        bullets: ["Borracce", "Planner e notebook", "Accessori da scrivania", "Oggetti pratici brandizzati"],
        note: "Creati per essere usati, non dimenticati.",
      },
      merch: {
        label: "Branded merch",
        title: "Merch brandizzato premium, coerente con un vero sistema di brand",
        description:
          "T-shirt, felpe, cappelli, zaini, porta-computer e altri prodotti brandizzati con una percezione curata, utile e di qualità.",
        bullets: ["T-shirt e felpe", "Cappelli e accessori", "Zaini e porta-computer", "Essential brandizzati premium"],
        note: "Brand-forward senza sembrare promozionale.",
      },
    };

    return offers.map((offer) => ({ ...offer, ...copy[offer.id] }));
  }, [isItalian]);
  const localizedOccasions = useMemo(() => {
    if (!isItalian) return occasions;

    return {
      birthdays: {
        label: "Per compleanni",
        title: "Combinazioni birthday semplici o più premium",
        intro: "Il birthday gifting deve adattarsi a budget, ruolo e cultura aziendale senza creare carico operativo.",
        packs: occasions.birthdays.packs.map((pack) => ({
          ...pack,
          items: pack.items.map((item) =>
            ({ Cake: "Torta", "Personalized card": "Biglietto personalizzato", "Useful gadget": "Gadget utile", Merch: "Merch", Flowers: "Fiori" })[item] ?? item,
          ),
          note:
            {
              "Birthday Signature": "Una combinazione semplice, calda e sempre efficace.",
              "Team Celebration": "Aggiunge una componente pratica al momento.",
              "Premium Spotlight": "Una soluzione più premium senza risultare eccessiva.",
              "Sweet & Floral": "Più raffinata e visivamente più espressiva.",
            }[pack.name] ?? pack.note,
        })),
      },
      onboarding: {
        label: "Per onboarding",
        title: "Welcome set che fanno sentire il day one più curato e branded",
        intro: "I welcome kit devono creare appartenenza in fretta e restare utili nella vita lavorativa quotidiana.",
        packs: occasions.onboarding.packs.map((pack) => ({
          ...pack,
          items: pack.items.map((item) =>
            ({
              Merch: "Merch",
              "Work gadgets": "Work gadgets",
              "Hoodie or T-shirt": "Felpa o T-shirt",
              Planner: "Planner",
              "Water bottle": "Borraccia",
              Notebook: "Notebook",
              "Desk accessories": "Accessori desk",
              "Backpack or laptop carrier": "Zaino o porta-computer",
            })[item] ?? item,
          ),
          note:
            {
              "First Day Essentials": "Una combinazione onboarding pulita e pratica.",
              "Brand Welcome": "Bilanciata e facile da scalare.",
              "Workday Starter": "Pensata per essere utile già dalla prima settimana.",
              "Executive Arrival": "Ideale per key hire o employer branding premium.",
            }[pack.name] ?? pack.note,
        })),
      },
      anniversary: {
        label: "Per work anniversaries",
        title: "Combinazioni anniversary intenzionali, non standardizzate",
        intro: "La recognition per anniversari funziona quando è abbastanza visibile da contare e abbastanza personalizzata da sembrare sincera.",
        packs: occasions.anniversary.packs.map((pack) => ({
          ...pack,
          items: pack.items.map((item) =>
            ({
              "Work gadget": "Work gadget",
              "Personalized card": "Biglietto personalizzato",
              "Flowers or cake": "Fiori o torta",
              Merch: "Merch",
              Gadget: "Gadget",
              "Message card": "Biglietto",
              "Premium gadget": "Gadget premium",
              Flowers: "Fiori",
            })[item] ?? item,
          ),
          note:
            {
              "Quiet Appreciation": "Pulita, professionale e facile da personalizzare.",
              "Culture Gesture": "Aggiunge calore al momento di recognition.",
              "Team Recognition": "Una scelta più forte per un momento più visibile.",
              "Tenure Tribute": "Una combinazione più elevata per employee con maggiore seniority.",
            }[pack.name] ?? pack.note,
        })),
      },
      milestone: {
        label: "Per milestone",
        title: "Combinazioni milestone per momenti di recognition ad alto valore",
        intro: "Le milestone più strategiche meritano combinazioni premium, mantenendo il processo semplice da gestire.",
        packs: occasions.milestone.packs.map((pack) => ({
          ...pack,
          items: pack.items.map((item) =>
            ({
              "Personalized card": "Biglietto personalizzato",
              Gadget: "Gadget",
              Merch: "Merch",
              "Premium cake": "Torta premium",
              "Message card": "Biglietto",
              "Premium merch": "Merch premium",
              "Work gadget": "Work gadget",
              Flowers: "Fiori",
              "Premium gadget": "Gadget premium",
              "Personal note": "Nota personale",
            })[item] ?? item,
          ),
          note:
            {
              "Milestone Signature": "Una baseline premium forte per gifting da milestone.",
              "Celebration plus": "Ideale quando il momento viene condiviso con il team.",
              "Leadership Marker": "Una combinazione premium pulita, con forte valore percepito.",
              "Boutique Recognition": "Curata, calda e più boutique nella percezione.",
            }[pack.name] ?? pack.note,
        })),
      },
    } satisfies Record<OccasionKey, Occasion>;
  }, [isItalian]);
  const localizedTabs = isItalian
    ? [
        { key: "birthdays" as OccasionKey, label: "Compleanni" },
        { key: "onboarding" as OccasionKey, label: "Onboarding" },
        { key: "anniversary" as OccasionKey, label: "Work anniversaries" },
        { key: "milestone" as OccasionKey, label: "Milestone" },
      ]
    : tabs;
  const currentOccasion = useMemo(() => localizedOccasions[activeOccasion], [activeOccasion, localizedOccasions]);

  return (
    <section id="packages" className="relative overflow-hidden border-t border-border bg-surface/20">
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/45 to-transparent"
        aria-hidden
      />

      <div className="mx-auto w-full max-w-[1240px] px-6 py-16 lg:px-10 lg:py-40">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-border-strong bg-card/60 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
            {isItalian ? "Execution fisica" : "Physical execution"}
          </span>
          <h2 className="mt-5 font-display text-[clamp(2rem,9vw,2.45rem)] font-extrabold leading-[1.02] tracking-tight text-foreground sm:text-4xl lg:text-6xl">
            <span className="block">{isItalian ? "I kit sono l'output." : "The kits are the output."}</span>
            <span className="mt-2 block text-accent text-glow">
              {isItalian ? "Il sistema è il valore." : "The system is the value."}
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-[64ch] text-base leading-relaxed text-muted-foreground lg:text-lg">
            {isItalian
              ? "Remvy trasforma regole, budget e momenti employee in kit fisici curati, consegnati in tempo e gestiti tramite boutique locali."
              : "Remvy turns rules, budgets and employee moments into curated physical kits, delivered on time and managed through local boutiques."}
          </p>
        </div>

        <div className="mt-10 rounded-[32px] border border-border-strong bg-card/88 px-5 py-8 shadow-elegant backdrop-blur lg:mt-16 lg:px-8">
          <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-accent">
                {isItalian ? "Componenti disponibili" : "Available components"}
              </p>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                {isItalian
                  ? "Torte, fiori, gadget e merch non sono un catalogo separato: sono componenti che Remvy combina automaticamente secondo le regole del tuo playbook."
                  : "Cakes, flowers, gadgets and merch are not a separate catalogue: they are components Remvy combines automatically according to your playbook rules."}
              </p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
              <Sparkles className="size-3.5 text-accent" strokeWidth={1.7} />
              {isItalian ? "Trascina o usa le frecce" : "Drag or use arrows"}
            </div>
          </div>

          <Carousel opts={{ align: "start" }} className="px-1">
            <CarouselContent className="-ml-5">
              {localizedOffers.map((offer) => {
                const Icon = offer.icon;
                return (
                  <CarouselItem key={offer.id} className="pl-5 md:basis-[78%] xl:basis-[70%]">
                    <div className="grid overflow-hidden rounded-[30px] border border-border bg-background/20 shadow-soft lg:grid-cols-[1fr_1fr]">
                      <div className="relative min-h-[320px] border-b border-border bg-[#f7efe5] lg:min-h-[430px] lg:border-b-0 lg:border-r">
                        <img
                          src={offer.image}
                          alt={offer.title}
                          className="absolute inset-0 h-full w-full object-cover"
                        />
                        <div className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full border border-white/45 bg-white/70 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-700 shadow-soft backdrop-blur">
                          <Icon className="size-3.5" strokeWidth={1.8} />
                          {offer.label}
                        </div>
                      </div>

                      <div className="flex flex-col p-7 lg:p-9">
                        <div className="flex items-start justify-between gap-4">
                          <span className="rounded-full border border-border-strong bg-surface/70 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                            {offer.note}
                          </span>
                          <Icon className="mt-1 size-5 text-accent" strokeWidth={1.7} />
                        </div>

                        <h3 className="mt-6 font-display text-[clamp(1.85rem,8vw,2.25rem)] font-bold leading-tight text-foreground lg:text-3xl">
                          {offer.title}
                        </h3>
                        <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground lg:text-base">
                          {offer.description}
                        </p>

                        <div className="mt-8 grid gap-3 sm:grid-cols-2">
                          {offer.bullets.map((bullet) => (
                            <div key={bullet} className="rounded-2xl border border-border bg-card px-4 py-3 text-sm text-foreground/88">
                              {bullet}
                            </div>
                          ))}
                        </div>

                        <div className="mt-8 flex items-center gap-2 text-sm font-medium text-foreground">
                          <span>{isItalian ? "Configurato per momento, audience e budget" : "Configured by moment, audience and budget"}</span>
                          <ArrowRight className="size-4 text-accent" strokeWidth={1.6} />
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="left-2 top-auto bottom-[-3.25rem] border-border-strong bg-card text-foreground hover:bg-surface disabled:opacity-35 md:bottom-auto md:top-1/2 md:-translate-y-1/2" />
            <CarouselNext className="right-2 top-auto bottom-[-3.25rem] border-border-strong bg-card text-foreground hover:bg-surface disabled:opacity-35 md:bottom-auto md:top-1/2 md:-translate-y-1/2" />
          </Carousel>
        </div>

        <div className="mt-14 grid gap-5 lg:mt-20 lg:grid-cols-[0.88fr_1.12fr] lg:gap-8">
          <div className="rounded-[28px] border border-border-strong bg-card/92 p-5 shadow-soft sm:p-7 lg:rounded-[30px]">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-accent">
              {isItalian ? "Combinazioni esempio" : "Example combinations"}
            </p>
            <h3 className="mt-4 font-display text-[clamp(1.75rem,7.4vw,2.15rem)] font-bold leading-tight text-foreground lg:text-3xl">
              <span className="block">{isItalian ? "Combinazioni signature" : "Signature combinations"}</span>
              <span className="mt-2 block text-accent text-glow">
                {isItalian ? "per ogni momento chiave" : "for every key moment"}
              </span>
            </h3>
            <p className="mt-4 text-[13px] leading-relaxed text-muted-foreground sm:text-sm lg:text-base">
              {isItalian
                ? "Scegli un momento per vedere delle combinazioni esempio. La struttura resta modificabile a piacimento, ma i pacchetti evitano di fornire un catalogo gifting separato e ridondante."
                : "Choose a moment below to preview example combinations. The section stays visual, but the structure is clearer and less repetitive than having a separate gifting catalogue."}
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {localizedTabs.map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveOccasion(tab.key)}
                  className={`rounded-full border px-3.5 py-2 text-sm font-medium transition-all sm:px-4 ${
                    activeOccasion === tab.key
                      ? "border-accent/40 bg-accent text-accent-foreground shadow-cta"
                      : "border-border-strong bg-surface/60 text-foreground hover:bg-surface"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-border-strong bg-card/95 p-5 shadow-elegant sm:p-7 lg:rounded-[30px]">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-accent">
                  {currentOccasion.label}
                </p>
                <h3 className="mt-3 max-w-2xl font-display text-[clamp(1.65rem,7vw,2.1rem)] font-bold leading-tight text-foreground lg:text-3xl">
                  {currentOccasion.title}
                </h3>
              </div>
              <BadgeCheck className="hidden size-9 text-accent sm:block" strokeWidth={1.7} />
            </div>

            <p className="mt-4 max-w-2xl text-[13px] leading-relaxed text-muted-foreground sm:text-sm lg:text-base">
              {currentOccasion.intro}
            </p>

            <div className="mt-6 grid gap-3 xl:mt-8 xl:grid-cols-2 xl:gap-4">
              {currentOccasion.packs.map((pack) => (
                <div key={pack.name} className="rounded-[22px] border border-border bg-background/25 p-4 xl:rounded-[26px] xl:p-5">
                  <p className="font-display text-lg font-bold leading-tight text-foreground xl:text-xl">{pack.name}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5 xl:mt-4 xl:gap-2">
                    {pack.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-border-strong bg-surface/70 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-foreground/85 sm:text-xs xl:px-3 xl:py-1.5 xl:tracking-[0.16em]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground sm:text-sm xl:mt-4">{pack.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-[32px] border border-border-strong bg-[linear-gradient(135deg,hsl(var(--accent)/0.12),transparent_55%)] p-6 shadow-soft lg:mt-16 lg:p-9">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-card/70 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-accent">
                <MapPin className="size-3.5" strokeWidth={1.8} />
                Local boutique partners
              </p>
              <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-border-strong bg-card/60 px-3 py-1.5">
                <Logo size={18} />
                <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-foreground/88">
                  {isItalian ? "Sourcing curato da Remvy" : "Remvy curated sourcing"}
                </span>
              </div>
              <h3 className="mt-5 font-display text-[clamp(1.85rem,8vw,2.25rem)] font-bold leading-tight text-foreground lg:text-4xl">
                {isItalian
                  ? "Lavoriamo con boutique locali per proteggere qualità, freschezza e artigianalità."
                  : "We work with local boutiques to protect quality, freshness and craft."}
              </h3>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground lg:text-base">
                {isItalian
                  ? "Torte, fiori e componenti selezionate dei gift vengono gestiti tramite partner locali per mantenere l'esperienza artigianale, fresca e di qualità. In più, il budget di recognition sostiene l'economia locale invece di finire in sourcing generico di massa."
                  : "Cakes, flowers and selected gift components are sourced through local boutique partners because that is how we keep the experience artisanal, fresh and high-quality. It also means your recognition budget supports the local economy instead of defaulting to generic mass-market sourcing."}
              </p>
            </div>

            <div className="flex max-w-full snap-x gap-4 overflow-x-auto pb-2 sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0">
              {[
                ...(isItalian
                  ? [
                      ["Qualità artigianale", "Oggetti e gift sembrano scelti con cura, non ordinati in blocco."],
                      ["Freschezza", "Torte e fiori arrivano con uno standard che il sourcing generico raramente raggiunge."],
                      ["Percezione più forte", "Il momento risulta più premium e intenzionale."],
                      ["Impatto locale", "La recognition supporta business e maker locali."],
                    ]
                  : [
                      ["Artisanal quality", "The objects and gifts feel made with care, not bulk-ordered."],
                      ["Freshness", "Cakes and flowers arrive with a level of quality standard sourcing rarely matches."],
                      ["Stronger perception", "The moment feels more premium and more intentional."],
                      ["Local impact", "Recognition supports local businesses and makers."],
                    ]),
              ].map(([title, copy]) => (
                <div key={title} className="min-w-[78%] snap-center rounded-[26px] border border-border bg-card/90 p-5 sm:min-w-0">
                  <p className="font-display text-xl font-bold text-foreground">{title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
