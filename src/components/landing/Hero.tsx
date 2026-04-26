import { MapPin } from "lucide-react";

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
          <div className="mb-5 flex flex-wrap items-center justify-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.18em]">
            {["Bologna", "Milano"].map((city) => (
              <span
                key={city}
                className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-card/65 px-4 py-1.5 text-foreground/88 shadow-soft"
              >
                <MapPin className="size-3.5 text-accent" strokeWidth={1.8} />
                {city}
              </span>
            ))}
            <span className="rounded-full border border-border-strong bg-surface/65 px-4 py-1.5 text-muted-foreground shadow-soft">
              More coming soon
            </span>
          </div>

          <span className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface/75 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground shadow-soft">
            <span className="size-1.5 rounded-full bg-accent shadow-[0_0_10px_hsl(var(--accent))]" />
            Recognition operations for modern teams
          </span>

          <h1 className="mt-7 font-display text-[2.8rem] font-extrabold leading-[0.98] tracking-tight text-foreground text-balance sm:text-5xl lg:text-[5.35rem]">
            <span className="inline-block whitespace-nowrap">Recognize and celebrate</span>
            <span className="mt-2 block">your employees</span>
            <span className="mt-2 block text-accent text-glow">by making their moments unforgettable</span>
          </h1>

          <p className="mx-auto mt-4 max-w-4xl text-base font-medium tracking-[0.02em] text-foreground/82 lg:text-lg">
            Personalize once and Remvy handles sourcing, delivery, tracking, and feedback.
          </p>

          <p className="mx-auto mt-6 max-w-[58ch] text-lg leading-relaxed text-muted-foreground text-pretty lg:text-[1.15rem]">
            Built for teams that care about employee experience, internal culture, and the day-to-day
            life of their people at work.
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
              View the workflow
            </a>
          </div>

          <div className="mt-8 grid gap-3 text-sm sm:grid-cols-3">
            {[
              ["No new software rollout", "Works with your HR tools, spreadsheets and existing workflow."],
              ["Local boutique sourcing", "Cakes, flowers and gifts selected for quality, freshness and craft."],
              ["Full operational visibility", "Budget, delivery and feedback tracked in one dashboard."],
            ].map(([title, copy]) => (
              <div key={title} className="rounded-2xl border border-border bg-card/80 px-4 py-4 text-left shadow-soft">
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-accent">{title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{copy}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            Covers onboarding, birthdays, anniversaries, milestones and other key employee moments.
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
