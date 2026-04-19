const features = [
  {
    label: "TRACK",
    title: "Track all employee moments automatically",
    body: "Sync your HRIS or upload your team. Remvy maintains a live registry of every relevant event — no more lookups.",
  },
  {
    label: "RULE",
    title: "Set rules once. Apply them everywhere.",
    body: "Define what happens, when, and for whom. Birthdays, work anniversaries, onboarding, parental leave — encoded as policy.",
  },
  {
    label: "EXECUTE",
    title: "Consistent execution across every team",
    body: "Same standard for Engineering, Sales, Ops. No team-by-team improvisation, no individual managers carrying the load.",
  },
  {
    label: "OFFLOAD",
    title: "Remove operational workload from HR",
    body: "People-ops stops being the reminder service. Remvy handles the orchestration end-to-end.",
  },
];

const Solution = () => {
  return (
    <section id="solution" className="relative border-t border-border">
      <div className="mx-auto w-full max-w-[1320px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-foreground/60">
            ◆ The Solution
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold leading-[1.1] tracking-tight text-primary lg:text-5xl">
            One system. Zero manual work.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-primary/60">
            Remvy lets you define rules once and automates everything — from tracking events
            to execution.
          </p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-md border border-border bg-border lg:grid-cols-2">
          {features.map((f, i) => (
            <div key={i} className="group relative bg-surface p-8 transition-colors hover:bg-background">
              <div className="mb-5 flex items-center gap-3">
                <span className="font-mono text-[10px] font-semibold tracking-[0.2em] text-accent-foreground/70">
                  {String(i + 1).padStart(2, "0")} · {f.label}
                </span>
                <div className="h-px flex-1 bg-border" />
              </div>
              <h3 className="font-display text-xl font-semibold leading-snug text-primary">
                {f.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-primary/60">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
