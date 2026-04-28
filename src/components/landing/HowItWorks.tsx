import { Bell, DatabaseZap, LayoutDashboard, SlidersHorizontal, Truck, UserPlus } from "lucide-react";

import { useIsItalian } from "@/lib/locale";

const enSteps = [
  {
    n: 1,
    icon: UserPlus,
    title: "Upload the employee list once",
    body: "Start with a CSV containing people, locations and relevant dates. HRIS sync is coming soon for daily workforce changes.",
  },
  {
    n: 2,
    icon: SlidersHorizontal,
    title: "Define rules for each moment",
    body: "Set what happens for birthdays, onboarding, anniversaries, milestones and personal events: budget, kit, timing and approval logic.",
  },
  {
    n: 3,
    icon: DatabaseZap,
    title: "Remvy tracks upcoming moments",
    body: "The system monitors dates, applies your rules and surfaces only what needs confirmation before the final lock window.",
  },
  {
    n: 4,
    icon: Truck,
    title: "We execute and close the loop",
    body: "Remvy sources locally, prepares the kit, manages physical delivery, supports the personal message and collects feedback.",
  },
];

const HowItWorks = () => {
  const isItalian = useIsItalian();
  const steps = isItalian
    ? [
        {
          n: 1,
          icon: UserPlus,
          title: "Carichi una volta la lista employee",
          body: "Parti con un CSV con persone, sedi e date rilevanti. La sync HRIS è in arrivo per aggiornare giorno dopo giorno cambiamenti e ingressi.",
        },
        {
          n: 2,
          icon: SlidersHorizontal,
          title: "Definisci le regole per ogni momento",
          body: "Stabilisci cosa succede per compleanni, onboarding, anniversari, milestone ed eventi personali: budget, kit, timing e approvazioni.",
        },
        {
          n: 3,
          icon: DatabaseZap,
          title: "Remvy traccia i momenti in arrivo",
          body: "Il sistema monitora le date, applica le regole e mostra solo ciò che va confermato prima della finestra finale.",
        },
        {
          n: 4,
          icon: Truck,
          title: "Eseguiamo e chiudiamo il loop",
          body: "Remvy seleziona fornitori locali, prepara il kit, gestisce delivery fisica, supporta il messaggio personalizzato e raccoglie feedback.",
        },
      ]
    : enSteps;

  return (
    <section id="how" className="relative border-t border-border bg-surface/30">
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/45 to-transparent"
        aria-hidden
      />

      <div className="mx-auto w-full max-w-[1240px] px-6 py-16 lg:px-10 lg:py-40">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] lg:items-end xl:gap-16">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-border-strong bg-card/60 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
              {isItalian ? "Set it once" : "Set it once"}
            </span>
            <h2 className="mt-5 font-display text-[clamp(2rem,9vw,2.45rem)] font-extrabold leading-[1.02] tracking-tight text-foreground sm:text-4xl lg:text-6xl">
              <span className="block">{isItalian ? "Lo imposti una volta." : "Set it once."}</span>
              <span className="mt-2 block text-accent text-glow sm:whitespace-nowrap">
                {isItalian ? "Remvy lo esegue ogni volta." : "Remvy executes every time."}
              </span>
            </h2>
            <p className="mt-5 max-w-[66ch] text-base leading-relaxed text-muted-foreground lg:text-lg">
              {isItalian
                ? "Il team non deve più ricordare date, scegliere fornitori, ordinare gift o rincorrere conferme. Remvy diventa il layer operativo sopra i processi che già usi."
                : "Your team no longer has to remember dates, choose suppliers, order gifts or chase confirmations. Remvy becomes the operating layer on top of the processes you already use."}
            </p>
          </div>

          <div className="rounded-[28px] border border-border-strong bg-card/90 p-6 shadow-soft lg:translate-x-6 xl:translate-x-8">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-accent">
              {isItalian ? "Cosa sparisce" : "What disappears"}
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {(isItalian
                ? [
                    ["Reminder manuali", "Le date vengono tracciate dal sistema."],
                    ["Coordinamento interno", "Regole, budget e approval sono già definiti."],
                    ["Follow-up fornitori", "Sourcing, kit e delivery sono gestiti da Remvy."],
                  ]
                : [
                    ["Manual reminders", "Dates are tracked by the system."],
                    ["Internal coordination", "Rules, budgets and approvals are already defined."],
                    ["Supplier chasing", "Sourcing, kits and delivery are handled by Remvy."],
                  ]).map(([title, copy]) => (
                <div key={title} className="rounded-2xl border border-border bg-background/35 p-4">
                  <p className="font-display text-lg font-bold text-foreground">{title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative mt-16 lg:mt-20">
          <div
            className="pointer-events-none absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent md:block"
            aria-hidden
          />

          <div className="flex max-w-full snap-x gap-5 overflow-x-auto pb-2 md:grid md:grid-cols-2 md:overflow-visible md:pb-0 lg:grid-cols-4">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.n}
                  className="relative min-w-[82%] snap-center rounded-[28px] border border-border-strong bg-card/95 p-6 shadow-soft sm:min-w-[48%] md:min-w-0 lg:p-7"
                >
                  <div className="flex items-center gap-4">
                    <div className="inline-flex size-14 items-center justify-center rounded-full border border-accent/40 bg-accent/10 shadow-glow">
                      <Icon className="size-6 text-accent" strokeWidth={1.6} />
                    </div>
                    <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                      Step {step.n}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-bold leading-tight text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="rounded-[28px] border border-border-strong bg-card/95 p-7 shadow-soft">
            <div className="inline-flex size-12 items-center justify-center rounded-2xl border border-accent/25 bg-accent/10 text-accent">
              <Bell className="size-5" strokeWidth={1.6} />
            </div>
            <h3 className="mt-6 font-display text-2xl font-bold leading-tight text-foreground">
              {isItalian
                ? "Solo le conferme utili arrivano al team."
                : "Only useful confirmations reach the team."}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {isItalian
                ? "Le notifiche personalizzabili possono partire 7, 5 e 2 giorni prima della delivery. Due giorni prima è l'ultima finestra per modificare o annullare; poi l'ordine viene confermato."
                : "Customizable notifications can be sent 7, 5 and 2 days before delivery. Two days before is the last edit or cancellation window; after that, the order is confirmed."}
            </p>
          </div>

          <div className="rounded-[28px] border border-border-strong bg-card/95 p-7 shadow-soft">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-accent">
              {isItalian ? "Dashboard operativa" : "Operational dashboard"}
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {(isItalian
                ? [
                    "Momenti employee in arrivo",
                    "Regole, kit e personalizzazione",
                    "Delivery e stato fornitori",
                    "Budget usato e livello di gradimento",
                  ]
                : [
                    "Upcoming employee moments",
                    "Rules, kits and personalization",
                    "Delivery and supplier status",
                    "Budget use and feedback level",
                  ]).map((item) => (
                <div key={item} className="rounded-2xl border border-border bg-background/35 px-4 py-3">
                  <p className="text-sm font-medium leading-relaxed text-foreground/90">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
