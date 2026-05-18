import type { ReactNode } from "react";
import { CalendarDays, CakeSlice, Gift, Star, TrendingUp, Truck } from "lucide-react";

import { useIsItalian } from "@/lib/locale";
import Logo from "./Logo";

const Hero = () => {
  const isItalian = useIsItalian();
  const t = isItalian
    ? {
        title: "Automatizza e celebra i momenti del tuo team nel modo migliore",
        subtitle:
          "Remvy coordina i momenti del tuo team: personalizzazione, reminder, fornitori locali, delivery, budget e feedback in un unico operating system.",
        primary: "Book a pilot",
        operatingView: "Vista operativa",
        nextMoment: "Prossimo momento",
        trend: "Recognition trend",
      }
    : {
        title: "Automate and celebrate your team's moments in the best possible way",
        subtitle:
          "Remvy coordinates the moments of your team: personalization, reminders, local suppliers, delivery, budget and feedback in one operating system.",
        primary: "Book a pilot",
        operatingView: "Operating view",
        nextMoment: "Next moment",
        trend: "Recognition trend",
      };
  const titleLines = isItalian
    ? ["Automatizza e celebra", "i momenti del tuo team", "nel modo migliore"]
    : ["Automate and celebrate", "your team's moments", "in the best possible way"];

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

      <div className="relative mx-auto w-full max-w-[1240px] px-5 pb-16 pt-10 sm:px-6 lg:px-10 lg:pb-24 lg:pt-16">
        <div className="overflow-hidden rounded-[34px] border border-border-strong/80 bg-[linear-gradient(135deg,hsl(var(--surface)/0.92),hsl(var(--card)/0.98))] p-6 shadow-elegant sm:p-8 lg:min-h-[620px] lg:rounded-[44px] lg:p-12">
          <div className="grid h-full items-center gap-10 lg:min-h-[508px] lg:grid-cols-[0.98fr_1.02fr]">
            <div className="flex min-w-0 items-center lg:pl-5">
              <div className="w-full max-w-[650px]">
              <h1
                aria-label={t.title}
                className="[font-family:Georgia,'Times_New_Roman',serif] text-[clamp(2rem,3.25vw,3.75rem)] font-normal leading-[1.1] tracking-[-0.055em] text-foreground"
              >
                {titleLines.map((line) => (
                  <span
                    key={line}
                    className={line === "Automate and celebrate" || line === "Automatizza e celebra" ? "block whitespace-nowrap" : "block"}
                  >
                    {line}
                  </span>
                ))}
              </h1>

              <p className="mt-7 max-w-[560px] text-base font-medium leading-[1.45] tracking-[-0.01em] text-foreground/76 lg:text-[1.08rem]">
                {t.subtitle}
              </p>

              <div className="mt-9 flex items-center">
                <a
                  href="#cta"
                  className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-cta transition-all hover:-translate-y-px hover:shadow-glow"
                >
                  {t.primary}
                </a>
              </div>
              </div>
            </div>

            <HeroDashboardInsights
              isItalian={isItalian}
              operatingView={t.operatingView}
              nextMoment={t.nextMoment}
              trend={t.trend}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const HeroDashboardInsights = ({
  isItalian,
  operatingView,
  nextMoment,
  trend,
}: {
  isItalian: boolean;
  operatingView: string;
  nextMoment: string;
  trend: string;
}) => {
  const kpis = [
    { label: isItalian ? "Momenti gestiti" : "Managed moments", value: "7", note: "4 birthday · 3 onboarding" },
    { label: isItalian ? "Budget mensile" : "Monthly budget", value: "€1.200", note: isItalian ? "€840 già allocati" : "€840 already allocated" },
    { label: isItalian ? "Feedback medio" : "Average feedback", value: "5/5", note: isItalian ? "+18% vs mese scorso" : "+18% vs last month" },
  ];

  return (
    <>
    <div className="rounded-[28px] border border-border bg-card/95 p-4 shadow-elegant backdrop-blur lg:hidden">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">Remvy dashboard</p>
          <h3 className="mt-1 font-display text-2xl font-extrabold text-foreground">{operatingView}</h3>
        </div>
        <Logo size={32} />
      </div>

      <div className="grid grid-cols-3 gap-2">
        {kpis.map((item) => (
          <div key={item.label} className="rounded-2xl border border-border bg-background/45 p-3">
            <p className="truncate text-[8px] font-bold uppercase tracking-[0.1em] text-muted-foreground">{item.label}</p>
            <strong className="mt-2 block font-display text-xl font-extrabold text-foreground">{item.value}</strong>
            <span className="mt-1 block truncate text-[9px] font-semibold text-accent">{item.note}</span>
          </div>
        ))}
      </div>

      <div className="mt-3 rounded-2xl border border-border bg-background/45 p-3">
        <div className="mb-3 flex items-center justify-between">
          <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-muted-foreground">{nextMoment}</p>
          <span className="rounded-full border border-accent/25 bg-accent/10 px-2.5 py-1 text-[10px] font-bold text-accent">
            48h
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="grid size-11 shrink-0 place-items-center rounded-2xl border border-accent/20 bg-accent/10 text-accent">
            <CakeSlice className="size-5" strokeWidth={1.8} />
          </span>
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between gap-3">
              <h4 className="truncate font-display text-xl font-extrabold text-foreground">Luca Rossi</h4>
              <span className="shrink-0 font-display text-xl font-extrabold text-foreground">€48</span>
            </div>
            <p className="truncate text-xs font-medium text-muted-foreground">Birthday · Birthday Signature</p>
          </div>
        </div>
      </div>

      <div className="mt-3 rounded-2xl border border-border bg-background/45 p-3">
        <div className="mb-2 flex items-center justify-between text-[10px] font-semibold text-muted-foreground">
          <span>{isItalian ? "Budget e momenti" : "Budget and moments"}</span>
          <TrendingUp className="size-4 text-accent" />
        </div>
        <div className="flex h-16 items-end gap-1.5">
          {[34, 48, 42, 64, 72, 86].map((height) => (
            <span key={height} className="flex-1 rounded-t-full bg-accent/70" style={{ height: `${height}%` }} />
          ))}
        </div>
      </div>
    </div>

    <div className="relative hidden min-h-[560px] lg:block">
      <div className="absolute inset-x-8 top-3 h-[438px] rounded-[34px] border border-border-strong bg-background/35 shadow-elegant backdrop-blur md:inset-x-12 lg:left-24 lg:right-10 lg:top-2 lg:h-[506px]" />

      <div className="absolute left-0 top-14 w-[94%] rounded-[24px] border border-border bg-card/95 p-3.5 shadow-elegant backdrop-blur sm:w-[82%] lg:left-0 lg:top-24">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-muted-foreground">Remvy dashboard</p>
            <h3 className="mt-1 font-display text-lg font-extrabold text-foreground">{operatingView}</h3>
          </div>
          <Logo size={30} />
        </div>
        <div className="grid grid-cols-3 gap-2">
          {kpis.map((item) => (
            <div key={item.label} className="rounded-2xl border border-border bg-background/45 p-3 shadow-soft">
              <div className="flex items-start justify-between gap-2">
                <p className="truncate text-[8.5px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                  {item.label}
                </p>
                <span className="size-1.5 rounded-full bg-accent shadow-[0_0_10px_hsl(var(--accent)/0.55)]" />
              </div>
              <strong className="mt-2 block font-display text-xl font-extrabold text-foreground lg:text-2xl">
                {item.value}
              </strong>
              <span className="mt-1 block truncate text-[9px] font-semibold text-accent">{item.note}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute right-0 top-[235px] w-[76%] rounded-[24px] border border-border bg-card/95 p-4 shadow-elegant backdrop-blur sm:w-[64%] lg:right-0 lg:top-[260px]">
        <div className="mb-4 flex items-center justify-between">
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
            {isItalian ? "Budget e momenti" : "Budget and moments"}
          </p>
          <TrendingUp className="size-4 text-accent" />
        </div>
        <svg viewBox="0 0 420 160" className="h-32 w-full overflow-visible" aria-label={trend}>
          <defs>
            <linearGradient id="heroChartFill" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.44" />
              <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.02" />
            </linearGradient>
          </defs>
          <path d="M 0 118 H 420" stroke="hsl(var(--border))" strokeWidth="1" strokeDasharray="4 7" />
          <path d="M 0 88 C 42 102 62 76 96 78 C 144 80 150 112 196 104 C 244 96 238 56 288 52 C 336 48 362 38 420 20" fill="none" stroke="hsl(var(--accent))" strokeWidth="3" />
          <path d="M 0 88 C 42 102 62 76 96 78 C 144 80 150 112 196 104 C 244 96 238 56 288 52 C 336 48 362 38 420 20 L 420 160 L 0 160 Z" fill="url(#heroChartFill)" />
          {["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map((month, index) => (
            <text key={month} x={index * 76 + 8} y="150" fill="hsl(var(--muted-foreground))" fontSize="10">
              {month}
            </text>
          ))}
        </svg>
        <div className="mt-1 flex items-center justify-between text-[10px] font-semibold text-muted-foreground">
          <span>{isItalian ? "Budget allocato" : "Allocated budget"}</span>
          <span className="text-accent">{isItalian ? "Momenti completati" : "Completed moments"}</span>
        </div>
      </div>

      <div className="absolute bottom-0 left-5 w-[70%] rounded-[22px] border border-border bg-card/95 p-4 shadow-elegant backdrop-blur sm:left-12 sm:w-[50%] lg:bottom-8 lg:left-12">
        <div className="mb-3 flex items-center justify-between">
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground">{nextMoment}</p>
          <span className="rounded-full border border-accent/25 bg-accent/10 px-2.5 py-1 text-[10px] font-bold text-accent">
            48h
          </span>
        </div>
        <div className="rounded-2xl border border-border bg-background/45 p-3">
          <div className="flex items-start gap-3">
            <span className="grid size-10 shrink-0 place-items-center rounded-2xl border border-accent/20 bg-accent/10 text-accent">
              <CakeSlice className="size-4" strokeWidth={1.8} />
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h4 className="font-display text-lg font-extrabold leading-tight text-foreground">Luca Rossi</h4>
                  <p className="mt-0.5 text-xs font-medium text-muted-foreground">Birthday · Birthday Signature</p>
                </div>
                <span className="shrink-0 font-display text-lg font-extrabold text-foreground">€48</span>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                <SmallInsight icon={<Gift className="size-3.5" />} label="Cake + card" />
                <SmallInsight icon={<Truck className="size-3.5" />} label="Bologna HQ" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 hidden rounded-2xl border border-border bg-background/45 p-3 shadow-soft sm:block">
        <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
          <Star className="size-4 text-accent" fill="currentColor" />
          5/5
        </div>
        <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-muted-foreground">Feedback</p>
      </div>

      <div className="absolute right-10 top-10 hidden rounded-full border border-border bg-background/45 p-2 shadow-soft lg:block">
        <CalendarDays className="size-5 text-accent" />
      </div>
    </div>
    </>
  );
};

const SmallInsight = ({ icon, label }: { icon: ReactNode; label: string }) => (
  <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/35 px-2.5 py-1 text-[11px] font-semibold text-foreground/80">
    <span className="text-accent">{icon}</span>
    {label}
  </span>
);

export default Hero;
