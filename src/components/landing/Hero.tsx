import DashboardMock from "./DashboardMock";

const Hero = () => {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-60" aria-hidden />
      <div className="relative mx-auto grid w-full max-w-[1320px] items-center gap-14 px-6 py-20 lg:grid-cols-12 lg:gap-10 lg:px-10 lg:py-28">
        <div className="lg:col-span-6">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border-strong/30 bg-surface/70 px-3 py-1.5 font-mono text-[11px] font-medium text-primary/80 backdrop-blur">
            <span className="size-1.5 animate-pulse-dot rounded-full bg-accent" />
            System v2.4 — Now in private beta
          </div>

          <h1 className="font-display text-5xl font-bold leading-[1.04] tracking-tight text-primary text-balance lg:text-7xl">
            Stop managing employee moments manually.
          </h1>

          <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-primary/70 text-pretty">
            Remvy automates birthdays, anniversaries and key employee moments — so your team
            never forgets, never wastes time, and stays consistent.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#cta"
              className="inline-flex items-center justify-center rounded-md bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-cta transition-all hover:translate-y-[-1px] hover:shadow-elegant"
            >
              Request early access
            </a>
            <a
              href="#how"
              className="inline-flex items-center justify-center rounded-md border border-border-strong/50 bg-surface/40 px-7 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-surface"
            >
              See how it works
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs font-medium uppercase tracking-wider text-primary/40">
            <span>Built for 20–150 person teams</span>
            <span className="hidden sm:inline">·</span>
            <span>SOC2-ready architecture</span>
            <span className="hidden sm:inline">·</span>
            <span>HRIS native</span>
          </div>
        </div>

        <div className="lg:col-span-6">
          <DashboardMock />
        </div>
      </div>
    </section>
  );
};

export default Hero;
