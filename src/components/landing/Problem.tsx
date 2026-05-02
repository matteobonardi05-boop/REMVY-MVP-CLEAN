import { CalendarX, EyeOff, Scale } from "lucide-react";

import { useIsItalian } from "@/lib/locale";

const enItems = [
  {
    icon: CalendarX,
    label: "Memory",
    title: "Dates depend on memory",
    body: "Moments live in calendars, sheets and heads.",
    impact: "Moments arrive late",
  },
  {
    icon: Scale,
    label: "Inconsistency",
    title: "Teams execute differently",
    body: "Each manager improvises with different timing.",
    impact: "Culture feels uneven",
  },
  {
    icon: EyeOff,
    label: "Hidden admin",
    title: "Small tasks compound",
    body: "Buying, suppliers and delivery create recurring work.",
    impact: "Hours disappear monthly",
  },
];

const Problem = () => {
  const isItalian = useIsItalian();
  const items = isItalian
    ? [
        {
          icon: CalendarX,
          label: "Memoria",
          title: "Le date dipendono dalla memoria",
          body: "Momenti sparsi tra calendari, fogli e chat.",
          impact: "I momenti arrivano tardi",
        },
        {
          icon: Scale,
          label: "Incoerenza",
          title: "I team eseguono diversamente",
          body: "Ogni manager improvvisa tempi e standard.",
          impact: "La cultura sembra discontinua",
        },
        {
          icon: EyeOff,
          label: "Admin nascosto",
          title: "I micro-task si accumulano",
          body: "Acquisti, fornitori e delivery diventano lavoro ricorrente.",
          impact: "Ore perse ogni mese",
        },
      ]
    : enItems;

  return (
    <section id="problem" className="relative border-t border-border">
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent"
        aria-hidden
      />

      <div className="mx-auto w-full max-w-[1240px] px-6 py-16 lg:px-10 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(320px,0.75fr)] lg:items-end">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-border-strong bg-surface/70 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
              {isItalian ? "Il costo nascosto" : "The hidden cost"}
            </span>
            <h2 className="mt-5 font-display text-[clamp(2rem,9vw,3.6rem)] font-extrabold leading-[1.02] tracking-tight text-foreground">
              <span className="block">{isItalian ? "Non manca attenzione." : "Attention is not missing."}</span>
              <span className="mt-2 block text-accent text-glow">{isItalian ? "Manca un sistema." : "The system is missing."}</span>
            </h2>
            <p className="mt-5 max-w-[56ch] text-base leading-relaxed text-muted-foreground">
              {isItalian
                ? "Qualcuno deve ricordare, scegliere, ordinare e controllare ogni volta."
                : "Someone must remember, choose, order and check every time."}
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[28px] border border-border-strong bg-card/90 p-6 shadow-soft backdrop-blur">
            <div
              className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--accent)/0.16),transparent_55%)]"
              aria-hidden
            />
            <div className="relative">
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-accent">
                {isItalian ? "Esempio: 40 persone" : "Example: 40 people"}
              </p>
              <div className="mt-6 flex max-w-full snap-x gap-4 overflow-x-auto pb-2 sm:grid sm:grid-cols-3 sm:overflow-visible sm:pb-0 lg:grid-cols-1">
                {(isItalian
                  ? [
                      ["3-5 compleanni/mese", "Da gestire ogni mese"],
                      ["1-2 onboarding", "Da preparare in tempo"],
                      ["Ore operative", "Chat, fornitori e follow-up"],
                    ]
                  : [
                      ["3-5 birthdays/month", "Handled every month"],
                      ["1-2 onboardings", "Prepared on time"],
                      ["Operating hours", "Chats, suppliers and follow-up"],
                    ]).map(([title, copy]) => (
                  <div key={title} className="min-w-[78%] snap-center rounded-2xl border border-border bg-background/35 p-4 sm:min-w-0">
                    <p className="font-display text-lg font-bold text-foreground">{title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{copy}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex max-w-full snap-x gap-5 overflow-x-auto pb-2 lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0">
          {items.map(({ icon: Icon, label, title, body, impact }) => (
            <div key={title} className="min-w-[84%] snap-center rounded-[28px] border border-border bg-card/95 p-6 shadow-soft sm:min-w-[52%] lg:min-w-0 lg:p-7">
              <div className="flex items-start justify-between gap-4">
                <div className="inline-flex size-12 items-center justify-center rounded-2xl border border-accent/25 bg-accent/10 text-accent">
                  <Icon className="size-5" strokeWidth={1.6} />
                </div>
                <span className="rounded-full border border-border-strong bg-surface/70 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  {label}
                </span>
              </div>

              <h3 className="mt-7 font-display text-2xl font-bold leading-tight text-foreground">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>

              <div className="mt-6 rounded-2xl border border-border bg-background/30 p-4">
                <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-accent">
                  {isItalian ? "Impatto" : "Impact"}
                </p>
                <p className="mt-2 text-sm font-medium text-foreground">{impact}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
