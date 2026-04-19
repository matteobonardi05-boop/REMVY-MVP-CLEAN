const steps = [
  {
    n: "01",
    title: "Import your team data",
    body: "Connect your HRIS or upload a CSV. Remvy builds a live registry of every employee and the moments that matter to them.",
    code: "POST /sync\n  source: workday\n  members: 84",
  },
  {
    n: "02",
    title: "Set your rules",
    body: "Define events, budgets, owners and actions. Rules are versioned, auditable, and apply uniformly across teams.",
    code: "rule: anniversary_5y\n  budget: €120\n  action: gift_box.v2",
  },
  {
    n: "03",
    title: "Remvy handles everything",
    body: "Detection, scheduling, execution, delivery, reporting. You see the timeline; you don't do the work.",
    code: "queue:  3,492 moments\nstate:  AUTONOMOUS",
  },
];

const HowItWorks = () => {
  return (
    <section id="how" className="relative border-t border-border bg-surface/40">
      <div className="mx-auto w-full max-w-[1320px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-foreground/60">
            ◆ How it works
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold leading-[1.1] tracking-tight text-primary lg:text-5xl">
            Three steps. Then it runs itself.
          </h2>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {steps.map((s) => (
            <div
              key={s.n}
              className="relative flex flex-col rounded-md border border-border bg-surface p-7 shadow-soft"
            >
              <span className="font-mono text-xs font-semibold tracking-[0.2em] text-accent-foreground/60">
                STEP {s.n}
              </span>
              <h3 className="mt-3 font-display text-xl font-semibold text-primary">
                {s.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-primary/60">{s.body}</p>
              <pre className="mt-6 overflow-hidden rounded border border-border bg-background px-4 py-3 font-mono text-[11px] leading-relaxed text-primary/70">
                {s.code}
              </pre>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center font-mono text-sm uppercase tracking-wider text-primary/50">
          <span className="text-accent">▸</span> No reminders. No spreadsheets. No manual coordination.
        </p>
      </div>
    </section>
  );
};

export default HowItWorks;
