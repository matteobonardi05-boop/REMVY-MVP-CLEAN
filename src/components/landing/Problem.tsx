import { ArrowRight, CalendarX, EyeOff, Scale } from "lucide-react";

import { useIsItalian } from "@/lib/locale";

const enItems = [
  {
    icon: CalendarX,
    label: "Missed moments",
    title: "Important dates slip quietly",
    body: "Without a dedicated system, birthdays, anniversaries and onboarding moments rely on memory and good intentions.",
    impact: "Culture feels inconsistent",
    points: ["No reminder with clear ownership", "No gift ordered on time", "No message prepared for the team"],
  },
  {
    icon: Scale,
    label: "Uneven experience",
    title: "Recognition becomes visibly inconsistent",
    body: "One team receives a thoughtful gesture, another gets something rushed, and someone else gets nothing at all.",
    impact: "People compare the experience",
    points: ["Managers improvise on the spot", "Budgets vary without logic", "Perceived fairness starts to erode"],
  },
  {
    icon: EyeOff,
    label: "Operational blind spots",
    title: "Execution happens with no real visibility",
    body: "Orders, approvals, suppliers and deliveries live across chats, spreadsheets and last-minute follow-ups.",
    impact: "Hours disappear into admin",
    points: ["No clean budget trail", "No delivery status in one place", "No way to improve the process over time"],
  },
];

const Problem = () => {
  const isItalian = useIsItalian();
  const items = isItalian
    ? [
        {
          icon: CalendarX,
          label: "Momenti persi",
          title: "Le date importanti scivolano via",
          body: "Senza un sistema dedicato, compleanni, anniversari e onboarding dipendono da memoria, calendario e buona volontà.",
          impact: "La cultura risulta incoerente",
          points: ["Nessun reminder con ownership chiara", "Gift non ordinato in tempo", "Messaggio per il team preparato all'ultimo"],
        },
        {
          icon: Scale,
          label: "Experience diseguale",
          title: "La recognition diventa visibilmente incoerente",
          body: "Un team riceve un gesto curato, un altro qualcosa di improvvisato, qualcun altro nulla.",
          impact: "Le persone confrontano l'esperienza",
          points: ["Manager costretti a improvvisare", "Budget diversi senza logica", "La percezione di equità si indebolisce"],
        },
        {
          icon: EyeOff,
          label: "Blind spot operativi",
          title: "L'execution avviene senza vera visibilità",
          body: "Ordini, approvazioni, fornitori e consegne restano sparsi tra chat, spreadsheet e follow-up.",
          impact: "Ore perse in admin",
          points: ["Nessuna traccia budget pulita", "Delivery status non centralizzato", "Feedback difficile da usare per migliorare"],
        },
      ]
    : enItems;

  return (
    <section id="problem" className="relative border-t border-border">
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent"
        aria-hidden
      />

      <div className="mx-auto w-full max-w-[1240px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(320px,0.75fr)] lg:items-end">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-border-strong bg-surface/70 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
              {isItalian ? "Il costo nascosto" : "The hidden cost"}
            </span>
            <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.02] tracking-tight text-foreground lg:text-6xl">
              {isItalian ? "La recognition manuale crea " : "Manual recognition creates "}
              <span className="text-accent text-glow">{isItalian ? "attrito silenzioso" : "quiet friction"}</span>
              {isItalian ? " ovunque." : " everywhere."}
            </h2>
            <p className="mt-5 max-w-[62ch] text-base leading-relaxed text-muted-foreground lg:text-lg">
              {isItalian
                ? "Il problema raramente è l'intenzione. Il punto è il gap operativo tra voler mostrare attenzione e riuscire a consegnare ogni momento con la stessa cura."
                : "The problem is rarely the intention. It is the operational gap between wanting to show appreciation and actually delivering every moment with the same care."}
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[28px] border border-border-strong bg-card/90 p-6 shadow-soft backdrop-blur">
            <div
              className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--accent)/0.16),transparent_55%)]"
              aria-hidden
            />
            <div className="relative">
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-accent">
                {isItalian ? "Quello che i team finiscono per pagare" : "What teams end up paying for"}
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                {(isItalian
                  ? [
                      ["Timing perso", "I momenti arrivano tardi o non arrivano"],
                      ["Qualita diseguale", "La recognition dipende da chi se ne ricorda"],
                      ["Overhead operativo", "Ore perse tra sourcing e follow-up"],
                    ]
                  : [
                      ["Missed timing", "Moments arrive late or not at all"],
                      ["Uneven quality", "Recognition depends on who remembers"],
                      ["Admin overhead", "Hours lost to sourcing and chasing"],
                    ]).map(([title, copy]) => (
                  <div key={title} className="rounded-2xl border border-border bg-background/35 p-4">
                    <p className="font-display text-lg font-bold text-foreground">{title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{copy}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {items.map(({ icon: Icon, label, title, body, impact, points }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-[28px] border border-border bg-card/95 p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-glow"
            >
              <div
                className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,hsl(var(--accent)/0.14),transparent_55%)]"
                aria-hidden
              />
              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <div className="inline-flex size-12 items-center justify-center rounded-2xl border border-accent/25 bg-accent/10 text-accent">
                    <Icon className="size-5" strokeWidth={1.6} />
                  </div>
                  <span className="rounded-full border border-border-strong bg-surface/70 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                    {label}
                  </span>
                </div>

                <h3 className="mt-7 font-display text-2xl font-bold leading-tight text-foreground">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>

                <div className="mt-6 rounded-2xl border border-border bg-background/30 p-4">
                  <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-accent">
                    {isItalian ? "Impatto" : "Impact"}
                  </p>
                  <p className="mt-2 text-sm font-medium text-foreground">{impact}</p>
                </div>

                <div className="mt-6 space-y-3">
                  {points.map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <span className="mt-1.5 size-1.5 rounded-full bg-accent" />
                      <p className="text-sm leading-relaxed text-muted-foreground">{point}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-7 flex items-center gap-2 text-sm font-medium text-foreground/80">
                  <span>{isItalian ? "Piccole mancanze diventano un problema visibile di cultura" : "Small misses become a visible culture issue"}</span>
                  <ArrowRight className="size-4 text-accent" strokeWidth={1.6} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
