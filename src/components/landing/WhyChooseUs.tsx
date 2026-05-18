import { Check, X } from "lucide-react";

import { useIsItalian } from "@/lib/locale";

const WhyChooseUs = () => {
  const isItalian = useIsItalian();
  const content = isItalian
    ? {
        badge: "Why choose us",
        titleLines: ["Automazione e coordinamento", "per rafforzare", "recognition e retention"],
        withoutTitle: "Senza Remvy",
        withTitle: "Con Remvy",
        without: [
          "HR o altri ricordano manualmente ogni ricorrenza",
          "Coordinano acquisti con fornitori diversi",
          "Seguono consegne e gestiscono ritardi",
          "Nessuna traccia chiara di cosa è stato fatto",
          "Esperienza diversa ogni volta",
          "Stima: 5-6 ore perse ogni settimana",
        ],
        with: [
          "Il sistema rileva ogni momento in automatico",
          "Remvy coordina reminder, fornitore, timing e consegna",
          "HR o altri gestiscono solo la personalizzazione iniziale",
          "Dashboard con spesa, dettagli ordini e feedback",
          "Stessa qualità ogni volta, per ogni dipendente",
          "Stima: 0 ore HR · 6 momenti gestiti perfettamente",
        ],
      }
    : {
        badge: "Why choose us",
        titleLines: ["Automation and coordination", "for stronger", "recognition and retention"],
        withoutTitle: "Without Remvy",
        withTitle: "With Remvy",
        without: [
          "HR or others manually remember every recurrence",
          "Coordinate purchases with different suppliers",
          "Follow deliveries and manage delays",
          "No clear trace of what has been done",
          "Different experience every time",
          "Estimate: 5-6 hours lost every week",
        ],
        with: [
          "The system detects every moment automatically",
          "Remvy coordinates reminders, supplier, timing and delivery",
          "HR or others only manage initial personalization",
          "Dashboard shows spend, order details and feedback",
          "Same quality every time, for every employee",
          "Estimate: 0 HR hours · 6 moments perfectly managed",
        ],
      };

  return (
    <section id="why-choose-us" className="relative border-t border-border/70 bg-background">
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/45 to-transparent"
        aria-hidden
      />
      <div className="mx-auto w-full max-w-[1240px] px-5 py-16 sm:px-6 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-accent">
            <span className="size-2 rounded-full bg-accent shadow-[0_0_12px_hsl(var(--accent)/0.75)]" />
            {content.badge}
          </div>
          <h2 className="mx-auto mt-7 max-w-4xl [font-family:Georgia,'Times_New_Roman',serif] text-[clamp(2.15rem,5vw,4.25rem)] font-normal leading-[1.08] tracking-[-0.055em] text-foreground">
            {content.titleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
        </div>

        <div className="mx-auto mt-14 grid max-w-6xl overflow-hidden rounded-[34px] border border-border-strong bg-[linear-gradient(135deg,hsl(var(--card)/0.96),hsl(var(--surface)/0.82))] shadow-elegant lg:grid-cols-2">
          <ComparisonPanel tone="muted" title={content.withoutTitle} items={content.without} />
          <ComparisonPanel tone="accent" title={content.withTitle} items={content.with} />
        </div>
      </div>
    </section>
  );
};

const ComparisonPanel = ({
  tone,
  title,
  items,
}: {
  tone: "muted" | "accent";
  title: string;
  items: string[];
}) => {
  const isAccent = tone === "accent";

  return (
    <div
      className={`relative p-7 sm:p-9 lg:p-11 ${
        isAccent
          ? "border-t border-accent/25 bg-accent/8 lg:border-l lg:border-t-0"
          : "bg-background/18"
      }`}
    >
      {isAccent && (
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsl(var(--accent)/0.16),transparent_62%)]"
          aria-hidden
        />
      )}
      <div className="relative">
        <div className="mb-9 flex items-center gap-3">
          <span
            className={`grid size-8 place-items-center rounded-full ${
              isAccent ? "bg-accent text-accent-foreground" : "bg-destructive/15 text-destructive"
            }`}
          >
            {isAccent ? <Check className="size-5" strokeWidth={2.6} /> : <X className="size-5" strokeWidth={2.6} />}
          </span>
          <h3 className="font-display text-2xl font-extrabold tracking-[-0.03em] text-foreground">{title}</h3>
        </div>

        <div className="space-y-5">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <div key={item} className="flex gap-4">
                <span
                  className={`mt-0.5 grid size-6 shrink-0 place-items-center rounded-full ${
                    isAccent ? "bg-emerald-400/18 text-emerald-300" : "bg-destructive/18 text-destructive"
                  }`}
                >
                  {isAccent ? (
                    <Check className="size-4" strokeWidth={3} />
                  ) : (
                    <X className="size-4" strokeWidth={3} />
                  )}
                </span>
                <p
                  className={`text-base leading-relaxed ${
                    isLast
                      ? isAccent
                        ? "font-bold text-emerald-300"
                        : "font-bold text-destructive"
                      : "font-medium text-foreground/82"
                  }`}
                >
                  {item}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
