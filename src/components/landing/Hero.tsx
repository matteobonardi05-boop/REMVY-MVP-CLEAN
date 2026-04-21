import DashboardMock from "./DashboardMock";

const Hero = () => {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-25" aria-hidden />
      <div
        className="absolute left-1/2 top-0 -z-0 h-[520px] w-[900px] -translate-x-1/2 bg-[radial-gradient(circle_at_50%_0%,hsl(var(--accent)/0.28),transparent_60%)]"
        aria-hidden
      />
      <div
        className="absolute -left-24 top-24 -z-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,hsl(var(--accent)/0.18),transparent_70%)] blur-3xl"
        aria-hidden
      />
      <div
        className="absolute -right-28 top-40 -z-0 h-80 w-80 rounded-full bg-[radial-gradient(circle,hsl(12_70%_72%/0.14),transparent_72%)] blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-[1240px] px-6 pb-24 pt-24 lg:px-10 lg:pb-36 lg:pt-32">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface/75 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground shadow-soft">
            <span className="size-1.5 rounded-full bg-accent shadow-[0_0_10px_hsl(var(--accent))]" />
            Recognition operations for modern HR teams
          </span>

          <h1 className="mt-7 font-display text-5xl font-extrabold leading-[0.98] tracking-tight text-foreground text-balance lg:text-[5.35rem]">
            Recognition for every <span className="text-accent text-glow">moment that matters</span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base font-medium tracking-[0.02em] text-foreground/82 lg:text-xl">
            Remvy automates without changing your HR stack.
          </p>

          <p className="mx-auto mt-6 max-w-[58ch] text-lg leading-relaxed text-muted-foreground text-pretty lg:text-[1.15rem]">
            Remvy plans, manages and executes employee moments end-to-end, handling gifts, logistics
            and tracking with a polished experience your team actually feels.
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

          <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            {["Onboarding", "Birthdays", "Anniversaries", "Milestones"].map((item) => (
              <span
                key={item}
                className="rounded-full border border-border bg-surface/60 px-3 py-1.5"
              >
                {item}
              </span>
            ))}
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
