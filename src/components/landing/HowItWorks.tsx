import type { ReactNode } from "react";
import { BellRing, CalendarDays, CakeSlice, Check, Gift, Handshake, LayoutDashboard, Rocket, Settings2, Store, Truck } from "lucide-react";

import { useIsItalian } from "@/lib/locale";
import Logo from "./Logo";

const HowItWorks = () => {
  const isItalian = useIsItalian();
  const steps = isItalian
    ? [
        {
          number: "01",
          title: "Scelta dei momenti e personalizzazione",
          body: "Decidiamo insieme quali momenti celebrare nel modo giusto dalla nostra lista: compleanni, onboarding, target di team, meeting con clienti... Remvy lavora solo su gift fisici e propone pre-built kits basati sul network di fornitori locali disponibili.",
          visual: <PersonalizationVisual isItalian={isItalian} />,
        },
        {
          number: "02",
          title: "Automazione Remvy",
          body: "Dopo la configurazione Remvy automatizza reminder, conferme, fornitori, budget, tracking delivery e raccolta feedback. Il team non rincorre più date, chat o ordini.",
          visual: <AutomationVisual isItalian={isItalian} />,
        },
        {
          number: "03",
          title: "Overview dashboard",
          body: "Il centro operativo dove vedere, tracciare e modificare momenti, team, budget, ordini, report di spesa e feedback. È la piattaforma per scalare in modo reale recognition e retention senza aumentare il lavoro interno.",
          visual: <DashboardPreviewV3 isItalian={isItalian} />,
        },
      ]
    : [
        {
          number: "01",
          title: "Moments decision and personalization",
          body: "We decide the moments you want to celebrate in the right way from our list: birthdays, onboarding, team targets, client meetings... Remvy works only with physical gifts and proposes pre-built kits based on the available local supplier network.",
          visual: <PersonalizationVisual isItalian={isItalian} />,
        },
        {
          number: "02",
          title: "Remvy automation",
          body: "After setup, Remvy automates reminders, approvals, suppliers, budget control, delivery tracking and feedback collection. Your team stops chasing dates, chats and orders.",
          visual: <AutomationVisual isItalian={isItalian} />,
        },
        {
          number: "03",
          title: "Dashboard overview",
          body: "The operating center to view, track and edit moments, team coverage, budgets, orders, spend reports and feedback. It is the platform to scale recognition and retention in a real, operational way without adding internal work.",
          visual: <DashboardPreviewV3 isItalian={isItalian} />,
        },
      ];

  return (
    <section id="how" className="relative border-t border-border bg-background">
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/45 to-transparent"
        aria-hidden
      />

      <div className="mx-auto w-full max-w-[1240px] px-5 py-16 sm:px-6 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-accent">
            <span className="size-2 rounded-full bg-accent shadow-[0_0_12px_hsl(var(--accent)/0.75)]" />
            How it works
          </div>
          <h2 className="mx-auto mt-7 max-w-4xl [font-family:Georgia,'Times_New_Roman',serif] text-[clamp(2.15rem,5vw,4.2rem)] font-normal leading-[1.08] tracking-[-0.055em] text-foreground">
            {isItalian ? (
              <>
                <span className="block">Un processo operativo</span>
                <span className="block">che rende scalabili i momenti</span>
              </>
            ) : (
              <>
                <span className="block">An operating process</span>
                <span className="block">that makes moments scalable</span>
              </>
            )}
          </h2>
          <a
            href="#cta"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-cta transition-all hover:-translate-y-px hover:shadow-glow"
          >
            Book a pilot
          </a>
        </div>

        <div className="relative mt-14 flex snap-x gap-5 overflow-x-auto pb-4 lg:mt-28 lg:block lg:space-y-28 lg:overflow-visible lg:pb-0">
          <div
            className="pointer-events-none absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-accent/35 to-transparent lg:block lg:left-1/2"
            aria-hidden
          />

          {steps.map((step, index) => {
            const visualFirst = index % 2 === 0;
            return (
              <article key={step.number} className="relative grid min-w-[88%] snap-center items-center gap-7 rounded-[30px] border border-border bg-card/45 p-5 shadow-soft sm:min-w-[72%] lg:min-w-0 lg:snap-align-none lg:grid-cols-2 lg:gap-20 lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none">
                <TimelineDot number={step.number} />

                <div className={`${visualFirst ? "lg:order-1" : "lg:order-2"}`}>{step.visual}</div>

                <div className={`${visualFirst ? "lg:order-2" : "lg:order-1"} max-w-xl`}>
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent">Step {step.number}</p>
                  <h3 className="mt-4 font-display text-[clamp(2rem,4vw,3.1rem)] font-extrabold leading-[1.02] tracking-[-0.045em] text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-5 text-base leading-relaxed text-muted-foreground lg:text-lg">{step.body}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const TimelineDot = ({ number }: { number: string }) => (
  <div className="absolute left-0 top-4 z-10 hidden size-12 place-items-center rounded-full border border-accent/40 bg-accent text-sm font-extrabold text-accent-foreground shadow-[0_0_28px_hsl(var(--accent)/0.52)] lg:left-1/2 lg:grid lg:-translate-x-1/2">
    {number}
  </div>
);

const VisualShell = ({ children }: { children: ReactNode }) => (
  <div className="relative overflow-hidden rounded-[34px] border border-border-strong bg-[linear-gradient(135deg,hsl(var(--surface)/0.94),hsl(var(--card)/0.98))] p-5 shadow-elegant">
    <div
      className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsl(var(--accent)/0.13),transparent_55%)]"
      aria-hidden
    />
    <div className="absolute inset-0 bg-grid opacity-25" aria-hidden />
    <div className="relative min-h-[320px]">{children}</div>
  </div>
);

const PersonalizationVisual = ({ isItalian }: { isItalian: boolean }) => {
  const moments = isItalian
    ? [
        ["Birthday"],
        ["Onboarding"],
        ["Team target"],
        ["Client meeting"],
        ["Other moments of your team"],
      ]
    : [
        ["Birthday"],
        ["Onboarding"],
        ["Team target"],
        ["Client meeting"],
        ["Other moments of your team"],
      ];

  return (
    <VisualShell>
      <div className="grid grid-cols-2 gap-4">
        {moments.map(([title], index) => (
          <div
            key={title}
            className={`min-h-[132px] rounded-[24px] border border-border bg-background/58 p-4 shadow-soft backdrop-blur ${
              index === 4 ? "col-span-2 mx-auto w-[58%] min-h-[104px]" : ""
            }`}
          >
            <div className="mb-5 flex items-center justify-between">
              <span className="grid size-10 place-items-center rounded-2xl border border-accent/20 bg-accent/10 text-accent">
                {index === 0 ? (
                  <Gift className="size-5" />
                ) : index === 1 ? (
                  <Rocket className="size-5" />
                ) : index === 3 ? (
                  <Handshake className="size-5" />
                ) : index === 4 ? (
                  <CalendarDays className="size-5" />
                ) : (
                  <Store className="size-5" />
                )}
              </span>
              <span className="rounded-full border border-border bg-card/60 px-2.5 py-1 text-[10px] font-bold text-muted-foreground">
                {index + 1 < 10 ? `0${index + 1}` : index + 1}
              </span>
            </div>
            <p className="font-display text-lg font-extrabold text-foreground">{title}</p>
          </div>
        ))}
      </div>

      <div className="mt-5 grid grid-cols-3 gap-2 text-center text-[10px] font-bold uppercase tracking-[0.12em] text-muted-foreground">
        <span className="rounded-full border border-border bg-card/60 px-3 py-2">{isItalian ? "Boutique" : "Boutiques"}</span>
        <span className="rounded-full border border-border bg-card/60 px-3 py-2">{isItalian ? "Fornitori" : "Suppliers"}</span>
        <span className="rounded-full border border-border bg-card/60 px-3 py-2">{isItalian ? "Regole" : "Rules"}</span>
      </div>
    </VisualShell>
  );
};

const AutomationVisual = ({ isItalian }: { isItalian: boolean }) => {
  const automation = isItalian
    ? [
        ["Reminder al responsabile", "7d · 5d · 48h"],
        ["Comunicazione fornitore locale", "Brief, timing e conferma"],
        ["Budget controllato", "Dentro cap mensile"],
        ["Delivery tracking", "Luogo e ora concordati"],
        ["Feedback form", "Breve form di soddisfazione per migliorare ogni momento"],
      ]
    : [
        ["Responsible reminder", "7d · 5d · 48h"],
        ["Local supplier communication", "Brief, timing and confirmation"],
        ["Budget checked", "Inside monthly cap"],
        ["Delivery tracking", "Agreed place and time"],
        ["Feedback form", "Short satisfaction form to improve every moment"],
      ];

  return (
    <VisualShell>
      <div className="mx-auto max-w-md rounded-[28px] border border-border bg-card/92 p-5 shadow-elegant">
        <div className="mb-6 flex items-center gap-3">
          <span className="grid size-12 place-items-center rounded-2xl border border-accent/25 bg-accent/10 text-accent">
            <Settings2 className="size-6" />
          </span>
          <div>
            <p className="font-display text-xl font-extrabold text-foreground">Remvy automation</p>
            <p className="text-sm text-muted-foreground">{isItalian ? "Ogni momento segue il workflow" : "Every moment follows the workflow"}</p>
          </div>
        </div>

        <div className="relative space-y-4">
          <div className="absolute left-5 top-4 h-[calc(100%-2rem)] w-px bg-accent/25" aria-hidden />
          {automation.map(([title, detail], index) => (
            <div key={title} className="relative flex gap-4">
              <span className="z-10 grid size-10 shrink-0 place-items-center rounded-full border border-accent/35 bg-background text-accent shadow-[0_0_18px_hsl(var(--accent)/0.32)]">
                {index === 0 ? <BellRing className="size-4" /> : index === 3 ? <Truck className="size-4" /> : <Check className="size-4" />}
              </span>
              <div className="flex-1 rounded-2xl border border-border bg-background/42 px-4 py-3">
                <p className="font-semibold text-foreground">{title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </VisualShell>
  );
};

const DashboardPreviewV3 = ({ isItalian }: { isItalian: boolean }) => {
  const navItems = [
    { label: "Dashboard", icon: LayoutDashboard },
    { label: "Team", icon: Store },
    { label: isItalian ? "Momenti" : "Moments", icon: Gift },
    { label: isItalian ? "Ordini" : "Orders", icon: Truck },
    { label: "Report", icon: Check },
  ];

  return (
    <VisualShell>
      <div className="overflow-hidden rounded-[28px] border border-border bg-card/95 shadow-elegant">
        <div className="grid min-h-[360px] lg:grid-cols-[0.34fr_0.66fr]">
          <aside className="border-b border-border bg-background/62 p-4 lg:border-b-0 lg:border-r">
            <div className="flex items-center gap-3">
              <Logo size={34} />
              <div>
                <p className="font-display text-xl font-extrabold tracking-[0.22em] text-foreground">REMVY</p>
                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-muted-foreground">Team moments</p>
              </div>
            </div>

            <div className="mt-7 space-y-2">
              {navItems.map(({ label, icon: Icon }, index) => (
                <div
                  key={label}
                  className={`flex items-center gap-3 rounded-2xl border px-3 py-2.5 text-sm font-bold ${
                    index === 0
                      ? "border-accent/50 bg-accent/12 text-foreground shadow-glow"
                      : "border-transparent text-muted-foreground"
                  }`}
                >
                  <Icon className="size-4 text-accent" />
                  {label}
                </div>
              ))}
            </div>
          </aside>

          <div className="space-y-4 p-4">
            <div className="rounded-[24px] border border-border bg-background/42 p-4">
              <div className="mb-4 flex items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                    {isItalian ? "Maggio 2026" : "May 2026"}
                  </p>
                  <p className="font-display text-2xl font-extrabold text-foreground">
                    {isItalian ? "Calendario momenti" : "Moments calendar"}
                  </p>
                </div>
                <span className="shrink-0 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-[10px] font-bold text-accent">
                  {isItalian ? "Oggi · 10 Mag" : "Today · May 10"}
                </span>
              </div>

              <div className="grid grid-cols-7 gap-1.5 text-center text-[9px] font-bold uppercase tracking-[0.12em] text-muted-foreground">
                {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => (
                  <span key={`${day}-${index}`}>{day}</span>
                ))}
              </div>
              <div className="mt-2 grid grid-cols-7 gap-1.5">
                {Array.from({ length: 28 }, (_, i) => i + 1).map((day) => {
                  const hasMoment = [4, 7, 10, 12, 15, 22, 28].includes(day);
                  const isToday = day === 10;
                  return (
                    <div
                      key={day}
                      className={`relative aspect-square rounded-xl border p-1.5 text-left text-xs font-bold ${
                        isToday
                          ? "border-accent/60 bg-accent/12 text-foreground shadow-[0_0_20px_hsl(var(--accent)/0.35)]"
                          : hasMoment
                            ? "border-accent/30 bg-background/55 text-foreground"
                            : "border-border bg-card/50 text-muted-foreground"
                      }`}
                    >
                      {day}
                      {hasMoment && <span className="absolute bottom-1.5 left-1.5 size-1.5 rounded-full bg-accent" />}
                      {isToday && <span className="absolute right-2 top-2 size-5 rounded-full bg-accent/45 blur-md" />}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <MomentLine name="Luca Rossi" detail={isItalian ? "Compleanno · 12 Mag · €48" : "Birthday · May 12 · €48"} />
              <MomentLine name="Sara Bianchi" detail={isItalian ? "Onboarding · 15 Mag · €65" : "Onboarding · May 15 · €65"} />
            </div>
          </div>
        </div>
      </div>
    </VisualShell>
  );
};

const DashboardPreviewV2 = ({ isItalian }: { isItalian: boolean }) => {
  const navItems = [
    { label: "Dashboard", icon: LayoutDashboard },
    { label: "Team", icon: Store },
    { label: isItalian ? "Momenti" : "Moments", icon: Gift },
    { label: isItalian ? "Ordini" : "Orders", icon: Truck },
  ];

  return (
    <VisualShell>
      <div className="overflow-hidden rounded-[28px] border border-border bg-card/95 shadow-elegant">
        <div className="grid min-h-[360px] lg:grid-cols-[0.34fr_0.66fr]">
          <aside className="border-b border-border bg-background/62 p-4 lg:border-b-0 lg:border-r">
            <div className="flex items-center gap-3">
              <Logo size={34} />
              <div>
                <p className="font-display text-xl font-extrabold tracking-[0.22em] text-foreground">REMVY</p>
                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                  Team moments
                </p>
              </div>
            </div>

            <div className="mt-7 space-y-2">
              {navItems.map(({ label, icon: Icon }, index) => (
                <div
                  key={label}
                  className={`flex items-center gap-3 rounded-2xl border px-3 py-2.5 text-sm font-bold ${
                    index === 0
                      ? "border-accent/50 bg-accent/12 text-foreground shadow-glow"
                      : "border-transparent text-muted-foreground"
                  }`}
                >
                  <Icon className="size-4 text-accent" />
                  {label}
                </div>
              ))}
            </div>
          </aside>

          <div className="space-y-4 p-4">
            <div className="grid gap-3">
              <div className="rounded-[24px] border border-border bg-background/42 p-4">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                      {isItalian ? "Maggio 2026" : "May 2026"}
                    </p>
                    <p className="font-display text-2xl font-extrabold text-foreground">
                      {isItalian ? "Calendario momenti" : "Moments calendar"}
                    </p>
                  </div>
                  <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-[10px] font-bold text-accent">
                    {isItalian ? "Oggi · 10 Mag" : "Today · May 10"}
                  </span>
                </div>

                <div className="grid grid-cols-7 gap-1.5 text-center text-[9px] font-bold uppercase tracking-[0.12em] text-muted-foreground">
                  {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => (
                    <span key={`${day}-${index}`}>{day}</span>
                  ))}
                </div>
                <div className="mt-2 grid grid-cols-7 gap-1.5">
                  {Array.from({ length: 28 }, (_, i) => i + 1).map((day) => {
                    const hasMoment = [4, 7, 10, 12, 15, 22, 28].includes(day);
                    const isToday = day === 10;
                    return (
                      <div
                        key={day}
                        className={`relative aspect-square rounded-xl border p-1.5 text-left text-xs font-bold ${
                          isToday
                            ? "border-accent/60 bg-accent/12 text-foreground shadow-[0_0_20px_hsl(var(--accent)/0.35)]"
                            : hasMoment
                              ? "border-accent/30 bg-background/55 text-foreground"
                              : "border-border bg-card/50 text-muted-foreground"
                        }`}
                      >
                        {day}
                        {hasMoment && <span className="absolute bottom-1.5 left-1.5 size-1.5 rounded-full bg-accent" />}
                        {isToday && <span className="absolute right-2 top-2 size-5 rounded-full bg-accent/45 blur-md" />}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="rounded-[24px] border border-border bg-background/42 p-4">
                <div className="mb-4 flex items-start justify-between gap-3">
                  <span className="grid size-10 shrink-0 place-items-center rounded-2xl border border-accent/25 bg-accent/10 text-accent">
                    <Gift className="size-5" />
                  </span>
                  <span className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 text-[10px] font-bold text-accent">
                    2d · 04h
                  </span>
                </div>
                <p className="text-xs font-bold text-muted-foreground">{isItalian ? "Compleanno" : "Birthday"}</p>
                <p className="font-display text-2xl font-extrabold text-foreground">Luca Rossi</p>

                <div className="mt-4 grid grid-cols-2 gap-2">
                  {[
                    [isItalian ? "Kit selezionato" : "Selected kit", "Birthday Sign..."],
                    [isItalian ? "Fornitore" : "Supplier", "Pasticceria G..."],
                    [isItalian ? "Consegna" : "Delivery", isItalian ? "12 Mag · 10:30" : "May 12 · 10:30"],
                    [isItalian ? "Costo" : "Cost", "€48"],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-2xl border border-border bg-card/62 p-3">
                      <p className="text-[8px] font-bold uppercase tracking-[0.14em] text-muted-foreground">{label}</p>
                      <p className="mt-1 truncate text-sm font-extrabold text-foreground">{value}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex gap-2">
                  <span className="rounded-full bg-accent px-4 py-2 text-xs font-bold text-accent-foreground">
                    {isItalian ? "Conferma" : "Confirm"}
                  </span>
                  <span className="rounded-full border border-border px-4 py-2 text-xs font-bold text-foreground">
                    {isItalian ? "Modifica" : "Modify"}
                  </span>
                </div>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <MomentLine name="Sara Bianchi" detail={isItalian ? "Onboarding · 15 Mag" : "Onboarding · May 15"} />
              <MomentLine name="Davide Serra" detail={isItalian ? "Compleanno · 22 Mag" : "Birthday · May 22"} />
            </div>
          </div>
        </div>
      </div>
    </VisualShell>
  );
};

const DashboardPreview = ({ isItalian }: { isItalian: boolean }) => (
  <VisualShell>
    <div className="overflow-hidden rounded-[28px] border border-border bg-card/95 shadow-elegant">
      <div className="flex items-center gap-2 border-b border-border bg-background/55 px-4 py-3">
        <Logo size={28} />
        <span className="font-display text-lg font-extrabold tracking-[0.16em] text-foreground">REMVY</span>
        <span className="ml-auto rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-[10px] font-bold text-accent">
          {isItalian ? "Live overview" : "Live overview"}
        </span>
      </div>

      <div className="grid gap-4 p-4 lg:grid-cols-[0.68fr_1.32fr]">
        <aside className="hidden rounded-2xl border border-border bg-background/35 p-3 lg:block">
          {["Dashboard", "Moments", "Orders", "Reports"].map((item, index) => (
            <div
              key={item}
              className={`mb-2 rounded-xl px-3 py-2 text-xs font-bold ${index === 0 ? "bg-accent text-accent-foreground" : "text-muted-foreground"}`}
            >
              {item}
            </div>
          ))}
        </aside>

        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-2">
            {[
              ["7", isItalian ? "Momenti" : "Moments"],
              ["€840", isItalian ? "Allocati" : "Allocated"],
              ["5/5", "Feedback"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-2xl border border-border bg-background/42 p-3">
                <p className="font-display text-xl font-extrabold text-foreground">{value}</p>
                <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-border bg-background/42 p-4">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                {isItalian ? "Budget e momenti" : "Budget and moments"}
              </p>
              <LayoutDashboard className="size-4 text-accent" />
            </div>
            <div className="flex h-24 items-end gap-2">
              {[32, 46, 40, 58, 70, 84].map((height, index) => (
                <span key={index} className="flex-1 rounded-t-full bg-accent/75" style={{ height: `${height}%` }} />
              ))}
            </div>
          </div>

          <div className="grid gap-2 sm:grid-cols-2">
            <MomentLine name="Luca Rossi" detail="Birthday Signature · 12 May" />
            <MomentLine name="Sara Bianchi" detail="First Day Essentials · 15 May" />
          </div>
        </div>
      </div>
    </div>
  </VisualShell>
);

const MomentLine = ({ name, detail }: { name: string; detail: string }) => (
  <div className="rounded-2xl border border-border bg-background/42 p-3">
    <div className="flex items-center gap-3">
      <span className="grid size-9 place-items-center rounded-full border border-accent/25 bg-accent/10 text-xs font-extrabold text-accent">
        {name
          .split(" ")
          .map((part) => part[0])
          .join("")}
      </span>
      <div className="min-w-0">
        <p className="truncate font-semibold text-foreground">{name}</p>
        <p className="truncate text-xs text-muted-foreground">{detail}</p>
      </div>
    </div>
  </div>
);

export default HowItWorks;
