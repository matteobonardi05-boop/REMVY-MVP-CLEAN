import { useIsItalian } from "@/lib/locale";

const FinalCTA = () => {
  const isItalian = useIsItalian();

  return (
    <section id="cta" className="relative overflow-hidden border-t border-border">
      <div className="absolute left-1/2 top-1/2 -z-0 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--accent)/0.22),transparent_60%)]" aria-hidden />
      <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />

      <div className="relative mx-auto w-full max-w-[1240px] px-6 py-28 text-center lg:px-10 lg:py-36">
        <h2 className="mx-auto max-w-3xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground text-balance lg:text-6xl">
          <span className="block">{isItalian ? "Parti con un pilot." : "Start with a pilot."}</span>
          <span className="mt-2 block text-accent text-glow">
            {isItalian ? "Vedi il processo funzionare in 30 giorni." : "See the process working in 30 days."}
          </span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
          {isItalian
            ? "Configuriamo workflow, logica di gifting ed execution con gli strumenti che usi gia, cosi il tuo team puo approvare i momenti invece di gestirli manualmente."
            : "We configure the workflow, align the gifting logic and run the execution with your current tools, so your team can approve moments instead of managing them manually."}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#top"
            className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-cta transition-all hover:-translate-y-px hover:shadow-glow"
          >
            {isItalian ? "Prenota un pilot" : "Book a pilot"}
          </a>
          <a
            href="#how"
            className="inline-flex items-center justify-center rounded-full border border-border-strong bg-surface/40 px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-surface"
          >
            {isItalian ? "Rivedi il workflow" : "Review the workflow"}
          </a>
        </div>

        <div className="mx-auto mt-8 grid max-w-4xl gap-3 text-left sm:grid-cols-3">
          {[
            ...(isItalian
              ? [
                  ["Nessuna migrazione", "Mantieni HR stack e processo onboarding attuali."],
                  ["Sourcing locale", "Usa boutique partner per qualita e freschezza superiori."],
                  ["Execution visibile", "Traccia budget, delivery e feedback in un'unica vista."],
                ]
              : [
                  ["No migration", "Keep your current HR stack and onboarding process."],
                  ["Local sourcing", "Use boutique partners for better quality and freshness."],
                  ["Visible execution", "Track budget, delivery and feedback in one view."],
                ]),
          ].map(([title, copy]) => (
            <div key={title} className="rounded-2xl border border-border bg-card/75 px-4 py-4 shadow-soft">
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-accent">{title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{copy}</p>
            </div>
          ))}
        </div>

        <p className="mt-6 text-sm text-muted-foreground">
          {isItalian
            ? "3 slot pilot disponibili per aziende a Bologna e Milano."
            : "3 pilot spots available for Bologna and Milano companies."}
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;
