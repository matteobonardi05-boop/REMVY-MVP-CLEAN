import { Check, Gift, SlidersHorizontal, Wallet } from "lucide-react";

import { useIsItalian } from "@/lib/locale";

const enItems = [
  {
    icon: Wallet,
    label: "Budget logic",
    title: "Set the spending guardrails once",
    body: "Define how much should be spent by moment, role, seniority or market. Remvy keeps each execution aligned automatically.",
    highlights: ["Caps by event type", "Approval-friendly ranges", "Predictable budget control"],
  },
  {
    icon: Gift,
    label: "Gift strategy",
    title: "Choose the experience you want people to feel",
    body: "Build a catalogue that reflects your culture, from understated welcome kits to premium milestone gifts and local touches.",
    highlights: ["Curated gift categories", "Different tiers by moment", "Brand and culture alignment"],
  },
  {
    icon: SlidersHorizontal,
    label: "Decision rules",
    title: "Turn policy into an operating playbook",
    body: "Create rules per team, level, location or event. Once the logic is defined, Remvy applies it consistently at scale.",
    highlights: ["Role-based rules", "Location-specific variations", "Repeatable execution every time"],
  },
];

const itItems = [
  {
    icon: Wallet,
    label: "Budget logic",
    title: "Imposti una volta le regole di budget",
    body: "Definisci quanto investire per momento, ruolo, seniority o mercato. Remvy mantiene ogni execution allineata automaticamente.",
    highlights: ["Cap per tipologia di evento", "Range approvabili internamente", "Controllo prevedibile del budget"],
  },
  {
    icon: Gift,
    label: "Gift strategy",
    title: "Scegli l'esperienza che vuoi far vivere",
    body: "Costruisci un catalogo coerente con la tua cultura, dai welcome kit essenziali ai gift premium per milestone importanti.",
    highlights: ["Categorie gift curate", "Tier diversi per momento", "Allineamento a brand e cultura"],
  },
  {
    icon: SlidersHorizontal,
    label: "Decision rules",
    title: "Trasformi policy e preferenze in un playbook operativo",
    body: "Crei regole per team, livello, sede o evento. Una volta definita la logica, Remvy la applica in modo consistente.",
    highlights: ["Regole per ruolo", "Varianti per sede", "Execution ripetibile ogni volta"],
  },
];

const YouDefine = () => {
  const isItalian = useIsItalian();
  const items = isItalian ? itItems : enItems;
  const controlItems = isItalian
    ? [
        "Budget per momento e audience",
        "Categorie, tier e stile dei gift",
        "Regole per ruolo, sede o milestone",
        "Timing notifiche e finestre di approvazione",
      ]
    : [
        "Budget per moment and audience",
        "Gift categories, tiers and style",
        "Rules by role, office or milestone",
        "Notification timing and approval windows",
      ];

  return (
    <section id="playbook" className="relative border-t border-border bg-surface/30">
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/45 to-transparent"
        aria-hidden
      />

      <div className="mx-auto w-full max-w-[1240px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(320px,0.8fr)] lg:items-end">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-border-strong bg-card/60 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
              {isItalian ? "Il tuo recognition playbook" : "Your recognition playbook"}
            </span>
            <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.02] tracking-tight text-foreground lg:text-6xl">
              <span className={isItalian ? "block whitespace-nowrap" : "block"}>
                {isItalian ? "Tu personalizzi il momento." : "You define the moment."}
              </span>
              <span className="mt-2 block text-accent text-glow">
                {isItalian ? "Remvy gestisce tutto." : "We handle everything."}
              </span>
            </h2>
            <p className="mt-5 max-w-[60ch] text-base leading-relaxed text-muted-foreground lg:text-lg">
              {isItalian
                ? "Imposti standard, budget, regole e stile una volta sola. Remvy esegue ogni momento con lo stesso livello di cura, senza rincorrere spreadsheet, fornitori e follow-up. In questo modo employee experience e cultura interna diventano scalabili."
                : "Set the standards once, then let Remvy execute with the same level of care every time. No spreadsheet choreography, no follow-up chaos, no reinvention for each moment. This is how employee experience scales and internal culture becomes visible in day-to-day work life."}
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[28px] border border-border-strong bg-card/95 p-6 shadow-soft">
            <div
              className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--accent)/0.16),transparent_55%)]"
              aria-hidden
            />
            <div className="relative">
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-accent">
                {isItalian ? "Cosa controlli" : "What you control"}
              </p>
              <div className="mt-6 space-y-3">
                {controlItems.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-border bg-background/30 px-4 py-3">
                    <span className="mt-0.5 inline-flex size-5 items-center justify-center rounded-full bg-accent/15 text-accent">
                      <Check className="size-3.5" strokeWidth={2.4} />
                    </span>
                    <p className="text-sm leading-relaxed text-foreground/88">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-border bg-background/35 p-4">
                <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-accent">
                  {isItalian ? "Notifiche di approvazione" : "Approval notifications"}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {isItalian
                    ? "Remvy può inviare notifiche personalizzabili a 7, 5 e 2 giorni dalla delivery per confermare o modificare ogni ordine secondo le regole definite."
                    : "Remvy can send customizable push notifications 7, 5 and 2 days before delivery to confirm or adjust each order according to your personalization rules."}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-foreground/88">
                  {isItalian
                    ? "Due giorni prima della consegna è l'ultima finestra per modificare o annullare. Dopo, l'ordine viene confermato."
                    : "Two days before delivery is the last window to edit or cancel. After that, the order is confirmed."}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {items.map(({ icon: Icon, label, title, body, highlights }) => (
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
                    {isItalian ? "Include" : "Includes"}
                  </p>
                  <div className="mt-3 space-y-3">
                    {highlights.map((point) => (
                      <div key={point} className="flex items-start gap-3">
                        <span className="mt-0.5 inline-flex size-5 items-center justify-center rounded-full bg-accent/15 text-accent">
                          <Check className="size-3.5" strokeWidth={2.4} />
                        </span>
                        <p className="text-sm leading-relaxed text-foreground/88">{point}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YouDefine;
