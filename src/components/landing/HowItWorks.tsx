const steps = [
  {
    n: 1,
    title: "Import your people",
    body: "Connect your HRIS, upload a CSV or paste a spreadsheet. Remvy maps birthdays, anniversaries and key dates automatically.",
  },
  {
    n: 2,
    title: "Configure your moments",
    body: "Define what happens for each moment type: which kit, what budget, what message. Set it once, apply to everyone.",
  },
  {
    n: 3,
    title: "Remvy executes",
    body: "From ordering the gift to delivery tracking and employee feedback — fully automated, fully documented.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how" className="relative border-t border-border bg-surface/30">
      <div className="mx-auto w-full max-w-[1240px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground lg:text-5xl">
            Set it once. Remvy handles the rest.
          </h2>
        </div>

        <div className="relative mt-16">
          {/* Connecting line */}
          <div
            className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent md:block"
            aria-hidden
          />

          <div className="grid gap-8 md:grid-cols-3 md:gap-6">
            {steps.map((s) => (
              <div key={s.n} className="relative flex flex-col items-start">
                <div className="relative grid size-12 place-items-center rounded-full border border-accent/40 bg-card shadow-glow">
                  <span className="font-display text-base font-extrabold text-accent">{s.n}</span>
                </div>
                <h3 className="mt-6 font-display text-xl font-bold text-foreground">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
