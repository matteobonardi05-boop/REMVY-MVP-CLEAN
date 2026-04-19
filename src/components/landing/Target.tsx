const Target = () => {
  const tags = [
    "20–150 employees",
    "Startups & SMEs",
    "Scaling people-ops",
    "Distributed teams",
    "Series A → C",
    "First HR hire in place",
  ];

  return (
    <section className="relative border-t border-border">
      <div className="mx-auto w-full max-w-[1320px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-foreground/60">
            ◆ Built for
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold leading-[1.1] tracking-tight text-primary lg:text-5xl">
            Teams that have outgrown the spreadsheet.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-primary/60">
            Remvy is designed for growing companies where employee moments still depend on
            who-remembers — and that's no longer scalable.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-2.5">
          {tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border-strong/40 bg-surface px-4 py-2 font-mono text-xs uppercase tracking-wider text-primary/70"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Target;
