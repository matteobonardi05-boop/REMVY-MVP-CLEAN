import { Check } from "lucide-react";

const tiers = [
  {
    name: "Birthday Basic",
    tag: "Essentials",
    description: "Cover the moment everyone notices when it's missed.",
    features: [
      "Birthdays for the whole company",
      "Artisan cake or curated gift",
      "Personalized card per employee",
      "Standard delivery tracking",
    ],
    highlighted: false,
  },
  {
    name: "Culture Pro",
    tag: "Most chosen",
    description: "End-to-end execution for the moments that build culture.",
    features: [
      "Birthdays, anniversaries & onboarding",
      "Branded merch + welcome kits",
      "Custom rules per role & seniority",
      "Full delivery & feedback tracking",
    ],
    highlighted: true,
  },
  {
    name: "Retention Plus",
    tag: "Scale",
    description: "Premium experiences for retention-critical milestones.",
    features: [
      "All Culture Pro moments",
      "Experience gifts & custom kits",
      "Dedicated account manager",
      "Quarterly culture reporting",
    ],
    highlighted: false,
  },
];

const Packages = () => {
  return (
    <section id="packages" className="relative border-t border-border">
      <div className="mx-auto w-full max-w-[1240px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground lg:text-5xl">
            Packages built around your moments.
          </h2>
          <p className="mt-5 text-base text-muted-foreground">
            Three tiers, fully managed. Pick the level of execution your team needs today — scale up
            anytime.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative flex flex-col rounded-2xl border bg-card p-7 transition-all ${
                t.highlighted
                  ? "border-accent/50 shadow-glow"
                  : "border-border hover:border-accent/40"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-accent">
                  {t.tag}
                </span>
                {t.highlighted && (
                  <span className="inline-flex items-center rounded-full border border-accent/40 bg-accent/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent">
                    Popular
                  </span>
                )}
              </div>
              <h3 className="mt-3 font-display text-2xl font-extrabold text-foreground">
                {t.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.description}</p>

              <ul className="mt-6 space-y-3 border-t border-border pt-6">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-accent" strokeWidth={2.5} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

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
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          Custom scope? We tailor packages for teams of 20 to 500 employees.
        </p>
      </div>
    </section>
  );
};

export default Packages;