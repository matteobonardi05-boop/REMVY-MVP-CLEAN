import { LayoutDashboard, Settings2, Store, Truck } from "lucide-react";

import { useIsItalian } from "@/lib/locale";

const HowItWorks = () => {
  const isItalian = useIsItalian();
  const steps = isItalian
    ? [
        {
          icon: Store,
          title: "Fornitore locale",
          body: "Partner boutique preparano gift di qualità.",
        },
        {
          icon: Settings2,
          title: "Coordinamento Remvy",
          body: "Ordini, timing ed eccezioni gestiti da noi.",
        },
        {
          icon: Truck,
          title: "Consegna in sede",
          body: "Il gift arriva direttamente. Il momento si vive.",
        },
        {
          icon: LayoutDashboard,
          title: "Feedback → Dashboard",
          body: "Tutto tracciato in real time.",
        },
      ]
    : [
        {
          icon: Store,
          title: "Local supplier",
          body: "Boutique partners prepare quality gifts.",
        },
        {
          icon: Settings2,
          title: "Remvy coordination",
          body: "Orders, timing and exceptions handled by us.",
        },
        {
          icon: Truck,
          title: "Office delivery",
          body: "The gift arrives directly. The moment happens.",
        },
        {
          icon: LayoutDashboard,
          title: "Feedback → Dashboard",
          body: "Everything is tracked in real time.",
        },
      ];

  return (
    <section id="how" className="relative border-t border-border bg-surface/30">
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/45 to-transparent"
        aria-hidden
      />

      <div className="mx-auto w-full max-w-[1240px] px-6 py-16 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-border-strong bg-card/60 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
            {isItalian ? "Set it once" : "Set it once"}
          </span>
          <h2 className="mt-5 font-display text-[clamp(2rem,9vw,3.6rem)] font-extrabold leading-[1.02] tracking-tight text-foreground">
            <span className="block">{isItalian ? "Dal fornitore locale" : "From local supplier"}</span>
            <span className="mt-2 block text-accent text-glow">{isItalian ? "alla cultura aziendale." : "to company culture."}</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[56ch] text-base leading-relaxed text-muted-foreground">
            {isItalian ? "Un flusso operativo unico dal fornitore al feedback." : "One operating flow from supplier to feedback."}
          </p>
        </div>

        <div className="relative mt-12">
          <div
            className="pointer-events-none absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent md:block"
            aria-hidden
          />

          <div className="flex max-w-full snap-x gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-2 md:overflow-visible md:pb-0 lg:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div key={step.title} className="relative min-w-[82%] snap-center rounded-[28px] border border-border-strong bg-card/95 p-6 shadow-soft sm:min-w-[48%] md:min-w-0">
                  <div className="flex items-center gap-4">
                    <div className="inline-flex size-14 items-center justify-center rounded-full border border-accent/40 bg-accent/10 shadow-glow">
                      <Icon className="size-6 text-accent" strokeWidth={1.6} />
                    </div>
                    <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                      Step {index + 1}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-xl font-bold leading-tight text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
