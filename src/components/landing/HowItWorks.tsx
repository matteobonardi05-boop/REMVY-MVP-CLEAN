const steps = [
  {
    n: 1,
    title: "Import employee data",
    body: "Connect your HR software, upload a CSV or work from a spreadsheet. Remvy maps birthdays, anniversaries and key dates automatically.",
  },
  {
    n: 2,
    title: "Set budgets, gifts and rules",
    body: "Define how each moment should work by role, seniority, office or event type. Remvy keeps the logic consistent.",
  },
  {
    n: 3,
    title: "Remvy executes the flow",
    body: "Gift sourcing, delivery, tracking and visibility are handled in one operational system instead of being spread across teams.",
  },
];

const HowItWorks = () => {
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
              Set it once
            </span>
            <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.02] tracking-tight text-foreground lg:text-6xl">
              <span className="block">Set it once.</span>
              <span className="mt-2 block text-accent text-glow">Remvy handles the rest.</span>
            </h2>
            <p className="mt-5 max-w-[62ch] text-base leading-relaxed text-muted-foreground lg:text-lg">
              From planning to delivery, the process becomes repeatable, visible and much easier to
              manage across every employee moment.
            </p>
          </div>

          <div className="rounded-[28px] border border-border-strong bg-card/90 p-6 shadow-soft">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-accent">
              Execution outcome
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {[
                ["Less coordination", "No more spreadsheet chasing and last-minute follow-up."],
                ["Better consistency", "The same rules apply across moments and teams."],
                ["Clearer visibility", "Budget, delivery and quality live in one workflow."],
              ].map(([title, copy]) => (
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

          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.n}
                className="relative rounded-[28px] border border-border-strong bg-card/95 p-7 shadow-soft"
              >
                <div className="inline-flex size-14 items-center justify-center rounded-full border border-accent/40 bg-accent/10 shadow-glow">
                  <span className="font-display text-lg font-extrabold text-accent">{step.n}</span>
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold leading-tight text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
