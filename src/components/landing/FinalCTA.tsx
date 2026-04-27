import { Linkedin, Phone } from "lucide-react";

import { useIsItalian } from "@/lib/locale";

const FinalCTA = () => {
  const isItalian = useIsItalian();

  const t = isItalian
    ? {
        title: "Parti con un pilot.",
        highlight: "Vedi il processo funzionare in 30 giorni.",
        copy: "Configuriamo workflow, logica di gifting ed execution con gli strumenti che usi già, così il tuo team può approvare i momenti invece di gestirli manualmente.",
        primary: "Parla con Matteo",
        secondary: "Rivedi il workflow",
        founderTitle: "Parla con il founder",
        founderCopy: "Un pilot seguito direttamente: obiettivi, momenti da coprire, gifting logic e operatività locale vengono definiti insieme.",
        slots: "3 slot pilot disponibili per aziende a Bologna e Milano.",
        cards: [
          ["Nessuna migrazione", "Mantieni HR stack e processo onboarding attuali."],
          ["Sourcing locale", "Usa boutique partner per qualità e freschezza superiori."],
          ["Execution visibile", "Traccia budget, delivery e feedback in un'unica vista."],
        ],
      }
    : {
        title: "Start with a pilot.",
        highlight: "See the process working in 30 days.",
        copy: "We configure the workflow, align the gifting logic and run the execution with your current tools, so your team can approve moments instead of managing them manually.",
        primary: "Talk to Matteo",
        secondary: "Review the workflow",
        founderTitle: "Talk to the founder",
        founderCopy: "A founder-led pilot setup: goals, moments to cover, gifting logic and local execution are defined together.",
        slots: "3 pilot spots available for Bologna and Milano companies.",
        cards: [
          ["No migration", "Keep your current HR stack and onboarding process."],
          ["Local sourcing", "Use boutique partners for better quality and freshness."],
          ["Visible execution", "Track budget, delivery and feedback in one view."],
        ],
      };

  return (
    <section id="cta" className="relative overflow-hidden border-t border-border">
      <div
        className="absolute left-1/2 top-1/2 -z-0 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--accent)/0.22),transparent_60%)]"
        aria-hidden
      />
      <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />

      <div className="relative mx-auto w-full max-w-[1240px] px-6 py-28 text-center lg:px-10 lg:py-36">
        <h2 className="mx-auto max-w-3xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground text-balance lg:text-6xl">
          <span className="block">{t.title}</span>
          <span className="mt-2 block text-accent text-glow">{t.highlight}</span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
          {t.copy}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="tel:+393348068487"
            className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-cta transition-all hover:-translate-y-px hover:shadow-glow"
          >
            {t.primary}
          </a>
          <a
            href="#how"
            className="inline-flex items-center justify-center rounded-full border border-border-strong bg-surface/40 px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-surface"
          >
            {t.secondary}
          </a>
        </div>

        <div className="mx-auto mt-10 max-w-2xl rounded-[2rem] border border-border-strong bg-card/80 p-5 text-left shadow-soft backdrop-blur md:p-6">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-accent">{t.founderTitle}</p>
              <p className="mt-2 font-display text-2xl font-bold tracking-tight text-foreground">Matteo</p>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">{t.founderCopy}</p>
            </div>
            <div className="flex shrink-0 flex-col gap-2">
              <a
                href="tel:+393348068487"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-accent/45 bg-accent/10 px-5 py-3 text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <Phone className="size-4" strokeWidth={1.8} />
                +39 334 806 8487
              </a>
              <a
                href="https://www.linkedin.com/in/matteo-bonardi"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border-strong bg-surface/45 px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-surface"
              >
                <Linkedin className="size-4 text-accent" strokeWidth={1.8} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-8 grid max-w-4xl gap-3 text-left sm:grid-cols-3">
          {t.cards.map(([title, copy]) => (
            <div key={title} className="rounded-2xl border border-border bg-card/75 px-4 py-4 shadow-soft">
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-accent">{title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{copy}</p>
            </div>
          ))}
        </div>

        <p className="mt-6 text-sm text-muted-foreground">{t.slots}</p>
      </div>
    </section>
  );
};

export default FinalCTA;
