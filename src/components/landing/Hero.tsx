import DashboardMock from "./DashboardMock";

const Hero = () => {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
      <div className="absolute left-1/2 top-0 -z-0 h-[520px] w-[900px] -translate-x-1/2 bg-[radial-gradient(circle_at_50%_0%,hsl(var(--accent)/0.25),transparent_60%)]" aria-hidden />

      <div className="relative mx-auto w-full max-w-[1240px] px-6 pb-24 pt-24 lg:px-10 lg:pb-36 lg:pt-32">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface/60 px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
            <span className="size-1.5 rounded-full bg-accent shadow-[0_0_8px_hsl(var(--accent))]" />
            Operational execution system
          </span>
          <h1 className="mt-7 font-display text-5xl font-extrabold leading-[1.02] tracking-tight text-foreground text-balance lg:text-[5.25rem]">
            Never miss a moment <span className="text-accent text-glow">that matters</span> — without changing your HR stack.
          </h1>
          <p className="mx-auto mt-7 max-w-[56ch] text-lg leading-relaxed text-muted-foreground text-pretty lg:text-xl">
            Remvy plans, manages and executes employee moments end-to-end — handling gifts, logistics
            and tracking for you.
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
            Works with your existing HR tools, spreadsheets and workflows.
          </p>
        </div>

        <div className="mt-20 lg:mt-28">
          <DashboardMock />
        </div>
      </div>
    </section>
  );
};

export default Hero;
