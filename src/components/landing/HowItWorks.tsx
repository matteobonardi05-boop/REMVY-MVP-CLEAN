import { Bell, DatabaseZap, LayoutDashboard, SlidersHorizontal, UserPlus } from "lucide-react";

import { useIsItalian } from "@/lib/locale";

const enSteps = [
  {
    n: 1,
    icon: UserPlus,
    title: "Create your company workspace",
    body: "Log in or register your company, then set the people, locations and approval owners who should manage recognition moments.",
  },
  {
    n: 2,
    icon: DatabaseZap,
    title: "Upload CSV or connect HRIS",
    body: "Start with a CSV upload today. HRIS connections are coming soon, so Remvy can check workforce changes day by day and keep moments current.",
  },
  {
    n: 3,
    icon: SlidersHorizontal,
    title: "Personalize moments and gifting",
    body: "Define birthdays, onboarding, anniversaries and milestones with budgets, gift tiers, notification windows and local delivery rules.",
  },
  {
    n: 4,
    icon: LayoutDashboard,
    title: "Track everything in the dashboard",
    body: "See upcoming moments, delivery status, budget use, supplier execution and employee feedback in one operational view.",
  },
];

const HowItWorks = () => {
  const isItalian = useIsItalian();
  const steps = isItalian
    ? [
        {
          n: 1,
          icon: UserPlus,
          title: "Crea il workspace aziendale",
          body: "Login o registrazione azienda, con sedi, referenti e owner delle approvazioni per gestire i momenti di recognition.",
        },
        {
          n: 2,
          icon: DatabaseZap,
          title: "Carica CSV o collega l'HRIS",
          body: "Parti subito con CSV. Le connessioni HRIS sono in arrivo per controllare giorno dopo giorno cambiamenti, ingressi e date importanti.",
        },
        {
          n: 3,
          icon: SlidersHorizontal,
          title: "Personalizza momenti e gifting",
          body: "Definisci compleanni, onboarding, anniversari e milestone con budget, gift tier, notifiche e regole locali di delivery.",
        },
        {
          n: 4,
          icon: LayoutDashboard,
          title: "Monitora tutto dalla dashboard",
          body: "Vedi momenti futuri, delivery status, budget, supplier execution e feedback employee in un'unica vista operativa.",
        },
      ]
    : enSteps;

  return (
    <section id="how" className="relative border-t border-border bg-surface/30">
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/45 to-transparent"
        aria-hidden
      />

      <div className="mx-auto w-full max-w-[1240px] px-6 py-28 lg:px-10 lg:py-40">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] lg:items-end">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-border-strong bg-card/60 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
              {isItalian ? "Set it once" : "Set it once"}
            </span>
            <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.02] tracking-tight text-foreground lg:text-6xl">
              <span className="block">{isItalian ? "Lo imposti una volta." : "Set it once."}</span>
              <span className="mt-2 block text-accent text-glow">
                {isItalian ? "Remvy gestisce il resto." : "Remvy handles the rest."}
              </span>
            </h2>
            <p className="mt-5 max-w-[62ch] text-base leading-relaxed text-muted-foreground lg:text-lg">
              {isItalian
                ? "Dal setup aziendale alla raccolta feedback, Remvy trasforma task di recognition frammentati in un workflow ripetibile e controllabile dal People team."
                : "From company setup to feedback collection, Remvy turns scattered recognition tasks into a repeatable workflow your People team can actually control."}
            </p>
          </div>

          <div className="rounded-[28px] border border-border-strong bg-card/90 p-6 shadow-soft">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-accent">
              {isItalian ? "Operating layer" : "Operating layer"}
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {(isItalian
                ? [
                    ["Sempre aggiornato", "CSV oggi, HRIS sync in arrivo, con cambiamenti del personale riflessi nel tempo."],
                    ["Execution basata su regole", "Budget, gift e approvazioni seguono il playbook definito."],
                    ["Outcome visibili", "Budget, delivery, qualita fornitori e feedback vivono nello stesso workflow."],
                  ]
                : [
                    ["Always current", "CSV today, HRIS sync soon, with employee changes reflected over time."],
                    ["Rule-based execution", "Budgets, gifts and approval timing follow the playbook you define."],
                    ["Visible outcomes", "Budget, delivery, supplier quality and feedback live in one workflow."],
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

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
              <div
                key={step.n}
                className="relative rounded-[28px] border border-border-strong bg-card/95 p-7 shadow-soft"
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
                ? "Remvy tiene il workflow attivo prima che ogni ordine venga confermato."
                : "Remvy keeps the workflow moving before each order is locked."}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {isItalian
                ? "Reminder personalizzabili possono partire 7, 5 e 2 giorni prima della delivery, cosi ogni ordine puo essere confermato, modificato o annullato prima della finestra finale."
                : "Customizable reminders can be sent 7, 5 and 2 days before delivery, so each order can be confirmed, adjusted or cancelled before the final lock window."}
            </p>
          </div>

          <div className="rounded-[28px] border border-border-strong bg-card/95 p-7 shadow-soft">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-accent">
              {isItalian ? "Dashboard visibility" : "Dashboard visibility"}
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {(isItalian
                ? [
                    "Momenti employee in arrivo",
                    "Pacchetti gift e regole di personalizzazione",
                    "Delivery e supplier status",
                    "Budget utilizzato e feedback employee",
                  ]
                : [
                    "Upcoming employee moments",
                    "Gift package and personalization rules",
                    "Delivery and supplier status",
                    "Budget use and employee feedback",
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
