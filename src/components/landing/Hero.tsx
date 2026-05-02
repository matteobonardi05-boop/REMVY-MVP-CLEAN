import { MapPin } from "lucide-react";

import { useIsItalian } from "@/lib/locale";
import DashboardMock from "./DashboardMock";

const Hero = () => {
  const isItalian = useIsItalian();
  const t = isItalian
    ? {
        moreCities: "More coming soon",
        badge: "Employee moments operating system",
        title: "I momenti del tuo team meritano di essere riconosciuti nel modo giusto.",
        subtitle: "Remvy è il sistema che porta automazione e struttura nell'employee recognition, così ogni momento diventa un pilastro della tua cultura aziendale.",
        primary: "Richiedi un Pilot",
      }
    : {
        moreCities: "More coming soon",
        badge: "Employee moments operating system",
        title: "Your team's moments deserve to be recognized the right way.",
        subtitle: "Remvy brings automation and structure to employee recognition, so every moment becomes a pillar of your company culture.",
        primary: "Start a pilot",
      };

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

      <div className="relative mx-auto w-full max-w-[1240px] px-6 pb-20 pt-20 lg:px-10 lg:pb-32 lg:pt-28">
        <div className="mx-auto max-w-4xl text-center">
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
              {t.moreCities}
            </span>
          </div>

          <span className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface/75 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground shadow-soft">
            <span className="size-1.5 rounded-full bg-accent shadow-[0_0_10px_hsl(var(--accent))]" />
            {t.badge}
          </span>

          {isItalian ? (
            <h1 className="mx-auto mt-7 max-w-5xl font-display text-[clamp(2.15rem,7.5vw,4.6rem)] font-extrabold leading-[1.02] tracking-tight text-foreground">
              I momenti del tuo team{" "}
              <span className="text-accent text-glow">meritano di essere riconosciuti nel modo giusto</span>
            </h1>
          ) : (
            <h1 className="mx-auto mt-7 max-w-5xl font-display text-[clamp(2.15rem,7.5vw,4.6rem)] font-extrabold leading-[1.02] tracking-tight text-foreground">
              Your team's moments{" "}
              <span className="text-accent text-glow">deserve to be recognized the right way</span>
            </h1>
          )}

          <p className="mx-auto mt-5 max-w-3xl text-base font-medium tracking-[0.02em] text-foreground/82 lg:text-lg">
            {t.subtitle}
          </p>

          <div className="mt-9 flex items-center justify-center">
            <a
              href="#cta"
              className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-cta transition-all hover:-translate-y-px hover:shadow-glow"
            >
              {t.primary}
            </a>
          </div>
        </div>

        <div className="mt-16 lg:mt-24">
          <DashboardMock />
        </div>
      </div>
    </section>
  );
};

export default Hero;
