const values = [
  {
    metric: "−92%",
    label: "Time saved",
    body: "On the operational side of employee moments. Hours per week back to HR and managers.",
  },
  {
    metric: "1×",
    label: "Operational clarity",
    body: "One source of truth. Every event, every status, every owner — visible in a single timeline.",
  },
  {
    metric: "100%",
    label: "Internal consistency",
    body: "Same standard across every team and office. No more depending on who happens to remember.",
  },
  {
    metric: "+",
    label: "Better employee experience",
    body: "A predictable, reliable signal that the company actually shows up — without anyone scrambling behind the scenes.",
  },
];

const Value = () => {
  return (
    <section className="relative border-t border-border">
      <div className="mx-auto w-full max-w-[1320px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-foreground/60">
              ◆ Outcomes
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold leading-[1.1] tracking-tight text-primary lg:text-5xl">
              What you actually get.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-primary/60">
              Remvy is measured in operational outcomes — not in feelings.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2">
              {values.map((v, i) => (
                <div key={i} className="bg-surface p-7">
                  <div className="font-display text-4xl font-bold text-primary">
                    {v.metric}
                  </div>
                  <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-accent-foreground/70">
                    {v.label}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-primary/60">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Value;
