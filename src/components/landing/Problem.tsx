const items = [
  {
    title: "Manual handling",
    body: "Managers track moments in their head, in spreadsheets, in DMs. Coverage is whoever-remembers.",
  },
  {
    title: "Forgotten or delayed",
    body: "Things slip through. Birthdays land late. Onboarding kits arrive on day 12. Anniversaries get missed entirely.",
  },
  {
    title: "Inconsistent across teams",
    body: "Engineering does one thing, Sales does another. Same company, completely different employee experience.",
  },
  {
    title: "Operational drag on HR",
    body: "People-ops time goes into reminders and chasing approvals — instead of strategic work.",
  },
];

const Problem = () => {
  return (
    <section id="problem" className="relative border-t border-border bg-surface/40">
      <div className="mx-auto w-full max-w-[1320px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-foreground/60">
              ◆ The Problem
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold leading-[1.1] tracking-tight text-primary lg:text-5xl">
              Employee moments are not the problem. Managing them is.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-primary/60">
              Every growing team eventually hits the same wall: a fragmented, manual,
              human-dependent process that quietly breaks under scale.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2">
              {items.map((it, i) => (
                <div key={i} className="bg-surface p-6 lg:p-7">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="font-mono text-[10px] text-primary/40">
                      0{i + 1}
                    </span>
                    <div className="h-px flex-1 bg-border" />
                  </div>
                  <h3 className="font-display text-base font-semibold text-primary">
                    {it.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-primary/60">{it.body}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 font-mono text-sm uppercase tracking-wider text-primary/50">
              <span className="text-accent">▸</span> It works… until it doesn't.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
