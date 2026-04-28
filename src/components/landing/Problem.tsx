import { ArrowRight, CalendarX, EyeOff, Scale } from "lucide-react";

import { useIsItalian } from "@/lib/locale";

const enItems = [
  {
    icon: CalendarX,
    label: "Memory dependency",
    title: "Important dates depend on whoever remembers",
    body: "Birthdays, anniversaries, onboarding and personal moments often live in calendars, spreadsheets and people's heads.",
    impact: "Moments slip or arrive late",
    points: ["No single owner", "No operational trigger", "No clear deadline before delivery"],
  },
  {
    icon: Scale,
    label: "Uneven execution",
    title: "The experience changes from team to team",
    body: "One manager sends something thoughtful, another improvises, and another team receives nothing because the process is informal.",
    impact: "Culture starts feeling inconsistent",
    points: ["Budgets vary without logic", "Messages feel rushed", "Fairness becomes harder to defend"],
  },
  {
    icon: EyeOff,
    label: "Hidden admin",
    title: "Small tasks quietly become a recurring workload",
    body: "Someone has to decide what to do, coordinate purchase, manage suppliers, check delivery and close the loop every time.",
    impact: "Hours disappear every month",
    points: ["Chats and follow-ups multiply", "No clean budget trail", "No feedback loop to improve the process"],
  },
];

const Problem = () => {
  const isItalian = useIsItalian();
  const items = isItalian
    ? [
        {
          icon: CalendarX,
          label: "Dipendenza dalla memoria",
          title: "Le date importanti dipendono da chi se ne ricorda",
          body: "Compleanni, anniversari, onboarding ed eventi personali spesso vivono tra calendari, spreadsheet e memoria delle persone.",
          impact: "I momenti saltano o arrivano tardi",
          points: ["Nessun owner unico", "Nessun trigger operativo", "Nessuna deadline chiara prima della delivery"],
        },
        {
          icon: Scale,
          label: "Execution disomogenea",
          title: "L'esperienza cambia da team a team",
          body: "Un manager invia un gesto curato, un altro improvvisa, un altro team non riceve nulla perché il processo è informale.",
          impact: "La cultura diventa incoerente",
          points: ["Budget senza logica comune", "Messaggi preparati all'ultimo", "La percezione di equità diventa fragile"],
        },
        {
          icon: EyeOff,
          label: "Admin nascosto",
          title: "Piccoli task diventano un carico ricorrente",
          body: "Qualcuno deve decidere cosa fare, coordinare l'acquisto, gestire fornitori, verificare la consegna e chiudere il loop ogni volta.",
          impact: "Ore operative si perdono ogni mese",
          points: ["Chat e follow-up aumentano", "Nessuna traccia budget pulita", "Feedback difficile da usare per migliorare"],
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
            <h2 className="mt-5 font-display text-[clamp(2rem,9vw,2.45rem)] font-extrabold leading-[1.02] tracking-tight text-foreground sm:text-4xl lg:text-6xl">
              {isItalian ? "Il problema non è il regalo. " : "The problem is not the gift. "}
              <span className="text-accent text-glow">{isItalian ? "È il processo manuale." : "It is the manual process."}</span>
            </h2>
            <p className="mt-5 max-w-[66ch] text-base leading-relaxed text-muted-foreground lg:text-lg">
              {isItalian
                ? "Il costo reale nasce quando qualcuno deve ricordare il momento, decidere cosa fare, coordinare l'acquisto, organizzare la consegna e assicurarsi che tutto sia coerente tra team."
                : "The real cost appears when someone has to remember the moment, decide what to do, coordinate purchase, organize delivery and make sure the experience is consistent across teams."}
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[28px] border border-border-strong bg-card/90 p-6 shadow-soft backdrop-blur">
            <div
              className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--accent)/0.16),transparent_55%)]"
              aria-hidden
            />
            <div className="relative">
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-accent">
                {isItalian ? "Esempio reale: 40 persone" : "Real example: 40 people"}
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                {(isItalian
                  ? [
                      ["3-5 compleanni/mese", "Da ricordare, ordinare e consegnare"],
                      ["1-2 momenti extra", "Onboarding, anniversari o milestone"],
                      ["Ore di coordinamento", "Chat, fornitori, budget e follow-up"],
                    ]
                  : [
                      ["3-5 birthdays/month", "To remember, order and deliver"],
                      ["1-2 extra moments", "Onboarding, anniversaries or milestones"],
                      ["Hours of coordination", "Chats, suppliers, budget and follow-up"],
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

        <div className="mt-10 flex max-w-full snap-x gap-5 overflow-x-auto pb-2 lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0">
          {items.map(({ icon: Icon, label, title, body, impact, points }) => (
            <div
              key={title}
              className="group relative min-w-[84%] snap-center overflow-hidden rounded-[28px] border border-border bg-card/95 p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-glow sm:min-w-[52%] lg:min-w-0 lg:p-7"
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

                <h3 className="mt-7 font-display text-2xl font-bold leading-tight text-foreground">{title}</h3>
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
                  <span>
                    {isItalian
                      ? "Remvy rimuove il micro-processo, non solo il singolo task"
                      : "Remvy removes the micro-process, not just the single task"}
                  </span>
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
