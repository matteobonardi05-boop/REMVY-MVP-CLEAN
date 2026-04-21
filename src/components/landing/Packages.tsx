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
  const [activeOccasion, setActiveOccasion] = useState<OccasionKey>("birthdays");
  const currentOccasion = useMemo(() => occasions[activeOccasion], [activeOccasion]);

  return (
    <section id="packages" className="relative overflow-hidden border-t border-border bg-surface/20">
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/45 to-transparent"
        aria-hidden
      />

      <div className="mx-auto w-full max-w-[1240px] px-6 py-28 lg:px-10 lg:py-40">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-border-strong bg-card/60 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
            What we offer
          </span>
          <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.02] tracking-tight text-foreground lg:text-6xl">
            <span className="block">Customizable packages</span>
            <span className="mt-2 block text-accent text-glow">for every important employee moment</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[64ch] text-base leading-relaxed text-muted-foreground lg:text-lg">
            Choose from our physical gifting selection, sourced from local boutiques to make the most
            important employee moments feel special.
          </p>
        </div>

        <div className="mt-16 rounded-[32px] border border-border-strong bg-card/88 px-5 py-8 shadow-elegant backdrop-blur lg:px-8">
          <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-accent">
                Scroll through the offer
              </p>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                Each category has a clearer visual identity and a stronger product feeling, so the
                section reads as an offer, not as abstract copy.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
              <Sparkles className="size-3.5 text-accent" strokeWidth={1.7} />
              Drag or use arrows
            </div>
          </div>

          <Carousel opts={{ align: "start" }} className="px-1">
            <CarouselContent className="-ml-5">
              {offers.map((offer) => {
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

                        <h3 className="mt-6 font-display text-3xl font-bold leading-tight text-foreground">
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
                          <span>Configured by moment, audience and budget</span>
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

        <div className="mt-20 grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
          <div className="rounded-[30px] border border-border-strong bg-card/92 p-7 shadow-soft">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-accent">
              Example combinations
            </p>
            <h3 className="mt-4 font-display text-3xl font-bold leading-tight text-foreground">
              <span className="block">Signature combinations</span>
              <span className="mt-2 block text-accent text-glow">for every key moment</span>
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground lg:text-base">
              Choose a moment below to preview example combinations. The section stays visual, but the
              structure is clearer and less repetitive than having a separate gifting catalogue.
            </p>

            <div className="mt-8 flex flex-wrap gap-2.5">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveOccasion(tab.key)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
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

          <div className="rounded-[30px] border border-border-strong bg-card/95 p-7 shadow-elegant">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-accent">
                  {currentOccasion.label}
                </p>
                <h3 className="mt-3 max-w-2xl font-display text-3xl font-bold leading-tight text-foreground">
                  {currentOccasion.title}
                </h3>
              </div>
              <BadgeCheck className="size-9 text-accent" strokeWidth={1.7} />
            </div>

            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground lg:text-base">
              {currentOccasion.intro}
            </p>

            <div className="mt-8 grid gap-4 xl:grid-cols-2">
              {currentOccasion.packs.map((pack) => (
                <div key={pack.name} className="rounded-[26px] border border-border bg-background/25 p-5">
                  <p className="font-display text-xl font-bold text-foreground">{pack.name}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {pack.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-border-strong bg-surface/70 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-foreground/85"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{pack.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 rounded-[32px] border border-border-strong bg-[linear-gradient(135deg,hsl(var(--accent)/0.12),transparent_55%)] p-7 shadow-soft lg:p-9">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-card/70 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-accent">
                <MapPin className="size-3.5" strokeWidth={1.8} />
                Local boutique partners
              </p>
              <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-border-strong bg-card/60 px-3 py-1.5">
                <Logo size={18} />
                <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-foreground/88">
                  Remvy curated sourcing
                </span>
              </div>
              <h3 className="mt-5 font-display text-3xl font-bold leading-tight text-foreground lg:text-4xl">
                We work with local boutiques to protect quality, freshness and craft.
              </h3>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground lg:text-base">
                Cakes, flowers and selected gift components are sourced through local boutique partners
                because that is how we keep the experience artisanal, fresh and high-quality. It also
                means your recognition budget supports the local economy instead of defaulting to generic
                mass-market sourcing.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Artisanal quality", "The objects and gifts feel made with care, not bulk-ordered."],
                ["Freshness", "Cakes and flowers arrive with a level of quality standard sourcing rarely matches."],
                ["Stronger perception", "The moment feels more premium and more intentional."],
                ["Local impact", "Recognition supports local businesses and makers."],
              ].map(([title, copy]) => (
                <div key={title} className="rounded-[26px] border border-border bg-card/90 p-5">
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
