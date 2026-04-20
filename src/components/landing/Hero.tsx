import DashboardMock from "./DashboardMock";

const Hero = () => {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
      <div className="absolute left-1/2 top-0 -z-0 h-[520px] w-[900px] -translate-x-1/2 bg-[radial-gradient(circle_at_50%_0%,hsl(var(--accent)/0.25),transparent_60%)]" aria-hidden />

      <div className="relative mx-auto w-full max-w-[1240px] px-6 pb-20 pt-20 lg:px-10 lg:pb-28 lg:pt-28">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-foreground text-balance lg:text-7xl">
            Never miss a moment <span className="text-accent text-glow">that matters.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-[58ch] text-lg leading-relaxed text-muted-foreground text-pretty">
            Remvy automatically plans, executes and tracks every important employee moment — without
            adding complexity to your stack.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#cta"
              className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-cta transition-all hover:-translate-y-px hover:shadow-glow"
            >
              Book a pilot
            </a>
            <a
              href="#how"
              className="inline-flex items-center justify-center rounded-full border border-border-strong bg-surface/40 px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-surface"
            >
              See how it works
            </a>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            Works with your existing HRIS, spreadsheets and Slack. No migration required.
          </p>
        </div>

        <div className="mt-16 lg:mt-20">
          <DashboardMock />
        </div>
      </div>
    </section>
  );
};

export default Hero;
