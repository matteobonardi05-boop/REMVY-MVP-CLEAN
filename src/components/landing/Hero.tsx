import { MapPin } from "lucide-react";

import { useIsItalian } from "@/lib/locale";
import DashboardMock from "./DashboardMock";

const Hero = () => {
  const isItalian = useIsItalian();
  const t = isItalian
    ? {
        moreCities: "Altre citta in arrivo",
        badge: "Recognition operations per team moderni",
        line1: "Riconosci e celebra",
        line2: "i tuoi employee",
        line3: "rendendo memorabili i momenti che contano",
        subtitle: "Personalizzi una volta e Remvy gestisce sourcing, delivery, tracking e feedback.",
        body: "Pensato per aziende che vogliono far crescere employee experience, cultura interna e qualita della vita lavorativa.",
        primary: "Prenota un pilot",
        secondary: "Guarda il workflow",
        proof: [
          ["Nessun rollout software", "Funziona con HR tools, spreadsheet e workflow gia in uso."],
          ["Sourcing locale boutique", "Torte, fiori e gift selezionati per qualita, freschezza e cura."],
          ["Visibilita operativa", "Budget, delivery e feedback tracciati in una dashboard unica."],
        ],
        note: "Copre onboarding, compleanni, anniversari, milestone e altri momenti chiave del percorso employee.",
      }
    : {
        moreCities: "More coming soon",
        badge: "Recognition operations for modern teams",
        line1: "Recognize and celebrate",
        line2: "your employees",
        line3: "by making their moments unforgettable",
        subtitle: "Personalize once and Remvy handles sourcing, delivery, tracking, and feedback.",
        body: "Built for teams that care about employee experience, internal culture, and the day-to-day life of their people at work.",
        primary: "Book a pilot",
        secondary: "View the workflow",
        proof: [
          ["No new software rollout", "Works with your HR tools, spreadsheets and existing workflow."],
          ["Local boutique sourcing", "Cakes, flowers and gifts selected for quality, freshness and craft."],
          ["Full operational visibility", "Budget, delivery and feedback tracked in one dashboard."],
        ],
        note: "Covers onboarding, birthdays, anniversaries, milestones and other key employee moments.",
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
              {t.moreCities}
            </span>
          </div>

          <span className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface/75 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground shadow-soft">
            <span className="size-1.5 rounded-full bg-accent shadow-[0_0_10px_hsl(var(--accent))]" />
            {t.badge}
          </span>

          <h1 className="mt-7 font-display text-[2.8rem] font-extrabold leading-[0.98] tracking-tight text-foreground text-balance sm:text-5xl lg:text-[5.35rem]">
            <span className="inline-block whitespace-nowrap">{t.line1}</span>
            <span className="mt-2 block">{t.line2}</span>
            <span className="mt-2 block text-accent text-glow">{t.line3}</span>
          </h1>

          <p className="mx-auto mt-4 max-w-4xl text-base font-medium tracking-[0.02em] text-foreground/82 lg:text-lg">
            {t.subtitle}
          </p>

          <p className="mx-auto mt-6 max-w-[58ch] text-lg leading-relaxed text-muted-foreground text-pretty lg:text-[1.15rem]">
            {t.body}
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#cta"
              className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-cta transition-all hover:-translate-y-px hover:shadow-glow"
            >
              {t.primary}
            </a>
            <a
              href="#how"
              className="inline-flex items-center justify-center rounded-full border border-border-strong bg-surface/40 px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-surface"
            >
              {t.secondary}
            </a>
          </div>

          <div className="mt-8 grid gap-3 text-sm sm:grid-cols-3">
            {t.proof.map(([title, copy]) => (
              <div key={title} className="rounded-2xl border border-border bg-card/80 px-4 py-4 text-left shadow-soft">
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-accent">{title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{copy}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            {t.note}
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
