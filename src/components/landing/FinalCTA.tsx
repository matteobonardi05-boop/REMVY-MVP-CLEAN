const FinalCTA = () => {
  return (
    <section id="cta" className="relative overflow-hidden border-t border-border">
      <div className="absolute left-1/2 top-1/2 -z-0 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--accent)/0.22),transparent_60%)]" aria-hidden />
      <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />

      <div className="relative mx-auto w-full max-w-[1240px] px-6 py-28 text-center lg:px-10 lg:py-36">
        <h2 className="mx-auto max-w-3xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground text-balance lg:text-6xl">
          Start with a pilot. <span className="text-accent text-glow">See results in 30 days.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground">
          We set everything up for you. You just approve the moments.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-cta transition-all hover:-translate-y-px hover:shadow-glow"
          >
            Book a pilot
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-full border border-border-strong bg-surface/40 px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-surface"
          >
            Talk to a founder
          </a>
        </div>

        <p className="mt-6 text-sm text-muted-foreground">
          3 pilot spots available for Bologna and Milan companies.
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;
