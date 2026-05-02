import { Check, Gift, SlidersHorizontal, Wallet } from "lucide-react";

import { useIsItalian } from "@/lib/locale";

const enItems = [
  {
    icon: Wallet,
    label: "Budget logic",
    title: "Set budget rules once",
    body: "Define spend by moment, role and location. Remvy applies it automatically.",
    highlights: ["Caps by event type", "Approval-friendly ranges", "Predictable budget control"],
  },
  {
    icon: Gift,
    label: "Gift strategy",
    title: "Choose the right experience",
    body: "Pick categories and style. Remvy uses only what fits the moment.",
    highlights: ["Curated gift categories", "Different tiers by moment", "Brand and culture alignment"],
  },
  {
    icon: SlidersHorizontal,
    label: "Decision rules",
    title: "Turn policy into rules",
    body: "Create rules by team, level or office. Remvy applies them every time.",
    highlights: ["Role-based rules", "Location variations", "Repeatable execution"],
  },
];

const itItems = [
  {
    icon: Wallet,
    label: "Budget logic",
    title: "Imposti il budget una volta",
    body: "Definisci budget per momento, ruolo e sede. Remvy lo applica automaticamente.",
    highlights: ["Cap per evento", "Range approvabili", "Budget prevedibile"],
  },
  {
    icon: Gift,
    label: "Gift strategy",
    title: "Scegli l'esperienza giusta",
    body: "Scegli categorie e stile. Remvy usa solo ciò che serve al momento.",
    highlights: ["Categorie curate", "Tier per momento", "Coerenza con il brand"],
  },
  {
    icon: SlidersHorizontal,
    label: "Decision rules",
    title: "Trasformi policy in regole",
    body: "Definisci regole per team, ruolo e sede. Remvy le applica sempre.",
    highlights: ["Regole per ruolo", "Varianti per sede", "Execution ripetibile"],
  },
];

const YouDefine = () => {
  const isItalian = useIsItalian();
  const items = isItalian ? itItems : enItems;
  const controlItems = isItalian
    ? ["Budget per momento", "Categorie e stile", "Regole per ruolo", "Timing notifiche"]
    : ["Budget by moment", "Categories and style", "Rules by role", "Notification timing"];

  return (
    <section id="playbook" className="relative border-t border-border bg-surface/30">
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/45 to-transparent"
        aria-hidden
      />

      <div className="mx-auto w-full max-w-[1240px] px-6 py-16 lg:px-10 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(320px,0.8fr)] lg:items-end">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-border-strong bg-card/60 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
              {isItalian ? "Il tuo playbook" : "Your playbook"}
            </span>
            <h2 className="mt-5 font-display text-[clamp(2rem,9vw,3.6rem)] font-extrabold leading-[1.02] tracking-tight text-foreground">
              <span className="block">{isItalian ? "Personalizzi il momento." : "Define the moment."}</span>
              <span className="mt-2 block text-accent text-glow">
                {isItalian ? "Remvy gestisce tutto." : "Remvy handles it."}
              </span>
            </h2>
            <p className="mt-5 max-w-[56ch] text-base leading-relaxed text-muted-foreground">
              {isItalian
                ? "Imposti regole e budget una volta. Remvy esegue ogni momento senza follow-up interno."
                : "Set rules and budgets once. Remvy executes every moment without internal follow-up."}
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
              <div className="mt-6 flex max-w-full snap-x gap-3 overflow-x-auto pb-2 sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:grid-cols-1">
                {controlItems.map((item) => (
                  <div key={item} className="flex min-w-[78%] snap-center items-start gap-3 rounded-2xl border border-border bg-background/30 px-4 py-3 sm:min-w-0">
                    <span className="mt-0.5 inline-flex size-5 items-center justify-center rounded-full bg-accent/15 text-accent">
                      <Check className="size-3.5" strokeWidth={2.4} />
                    </span>
                    <p className="text-sm leading-relaxed text-foreground/88">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-border bg-background/35 p-4">
                <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-accent">
                  {isItalian ? "Notifiche" : "Notifications"}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {isItalian
                    ? "Reminder a 7, 5 e 2 giorni. Ultime modifiche due giorni prima."
                    : "Reminders at 7, 5 and 2 days. Last edits two days before."}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex max-w-full snap-x gap-5 overflow-x-auto pb-2 lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0">
          {items.map(({ icon: Icon, label, title, body, highlights }) => (
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default YouDefine;
