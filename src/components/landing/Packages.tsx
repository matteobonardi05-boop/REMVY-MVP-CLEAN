import { Cake, Sparkles, Crown, type LucideIcon } from "lucide-react";

type Tier = {
  name: string;
  tag: string;
  useCase: string;
  description: string;
  moments: string[];
  personalization: string;
  gifts: string[];
  suppliers: string;
  pricing: string;
  highlighted?: boolean;
  icon: LucideIcon;
};

const tiers: Tier[] = [
  {
    name: "Birthday Essentials",
    tag: "Starter",
    useCase: "Best for birthdays",
    description: "Cover the one moment everyone notices when it's missed.",
    moments: ["Birthdays", "Personalized card"],
    personalization: "Light — same kit, personalized message",
    gifts: ["Artisan cakes", "Curated small gifts"],
    suppliers: "Local partners",
    pricing: "Starting from €12 / employee",
    icon: Cake,
  },
  {
    name: "Culture Flow",
    tag: "Most chosen",
    useCase: "Best for onboarding & milestones",
    description: "End-to-end execution for the moments that build culture.",
    moments: ["Birthdays", "Anniversaries", "Onboarding", "Team moments"],
    personalization: "Rules per role, seniority and event",
    gifts: ["Cakes", "Branded merch", "Welcome kits", "Flowers"],
    suppliers: "Local partners + curated vendors",
    pricing: "Custom pricing",
    highlighted: true,
    icon: Sparkles,
  },
  {
    name: "Retention Plus",
    tag: "Premium",
    useCase: "Best for retention-critical roles",
    description: "Premium experiences for the people you can't afford to lose.",
    moments: ["All Culture Flow moments", "5y / 10y milestones", "Promotions"],
    personalization: "Fully bespoke, per employee",
    gifts: ["Experience gifts", "Custom kits", "Premium hampers"],
    suppliers: "Premium vendors + dedicated sourcing",
    pricing: "Custom pricing",
    icon: Crown,
  },
];

const Row = ({ label, value }: { label: string; value: React.ReactNode }) => (
  <div className="flex flex-col gap-1 border-t border-border/60 py-3">
    <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
      {label}
    </span>
    <span className="text-sm text-foreground">{value}</span>
  </div>
);

const Packages = () => {
  return (
    <section id="packages" className="relative border-t border-border">
      <div className="mx-auto w-full max-w-[1240px] px-6 py-28 lg:px-10 lg:py-40">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-accent">
            Packages
          </span>
          <h2 className="mt-3 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground lg:text-6xl">
            Flexible packages, built around your moments.
          </h2>
          <p className="mt-5 text-base text-muted-foreground lg:text-lg">
            Start with a structured package — then customize gifts, budgets and rules to fit your
            culture. We handle execution either way.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3 lg:mt-20">
          {tiers.map((t) => {
            const Icon = t.icon;
            return (
              <div
                key={t.name}
                className={`relative flex flex-col rounded-2xl border bg-card p-8 transition-all ${
                  t.highlighted
                    ? "border-accent/50 shadow-glow"
                    : "border-border hover:border-accent/40"
                }`}
              >
                {t.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-accent/40 bg-accent px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-accent-foreground shadow-cta">
                    Most chosen
                  </span>
                )}

                <div className="flex items-center justify-between">
                  <div className="inline-flex size-11 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 text-accent">
                    <Icon className="size-5" strokeWidth={1.5} />
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                    {t.tag}
                  </span>
                </div>

                <h3 className="mt-6 font-display text-2xl font-extrabold text-foreground">
                  {t.name}
                </h3>
                <p className="mt-2 text-sm font-medium text-accent">{t.useCase}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {t.description}
                </p>

                <div className="mt-6">
                  <Row label="Moments covered" value={t.moments.join(" · ")} />
                  <Row label="Personalization" value={t.personalization} />
                  <Row label="Sample gifts" value={t.gifts.join(", ")} />
                  <Row label="Suppliers" value={t.suppliers} />
                  <Row
                    label="Pricing"
                    value={<span className="font-semibold text-foreground">{t.pricing}</span>}
                  />
                </div>

                <a
                  href="#cta"
                  className={`mt-8 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-all ${
                    t.highlighted
                      ? "bg-accent text-accent-foreground shadow-cta hover:-translate-y-px hover:shadow-glow"
                      : "border border-border-strong bg-surface/40 text-foreground hover:bg-surface"
                  }`}
                >
                  Talk to us
                </a>
              </div>
            );
          })}
        </div>

        <div className="mx-auto mt-12 max-w-2xl rounded-2xl border border-border bg-surface/40 p-6 text-center">
          <p className="text-sm text-foreground">
            <span className="font-semibold text-accent">Fully customizable</span> based on your
            company's culture, budget and preferences.
          </p>
          <p className="mt-1.5 text-xs text-muted-foreground">
            Mix and match moments, swap gift categories, set your own rules — Remvy adapts.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Packages;