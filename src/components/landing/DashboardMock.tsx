import { BriefcaseBusiness, CakeSlice, Gift, Sparkles, Truck } from "lucide-react";

import { useIsItalian } from "@/lib/locale";
import Logo from "./Logo";

const rows = [
  { initials: "MR", name: "Marco Rossi", moment: "Birthday", date: "Apr 21", gift: "Birthday Signature", status: "Consegnato", feedback: "5/5" },
  { initials: "AC", name: "Alessandro Conti", moment: "Onboarding", date: "Apr 22", gift: "Branded Welcome", status: "Consegnato", feedback: "5/5" },
  { initials: "GB", name: "Giulia Bianchi", moment: "Birthday", date: "Apr 24", gift: "Floral Birthday", status: "In consegna", feedback: "-" },
  { initials: "MR", name: "Marta Riva", moment: "Onboarding", date: "Apr 28", gift: "Work Essentials", status: "Pianificato", feedback: "-" },
];

const calendarDays = [null, null, ...Array.from({ length: 30 }, (_, index) => index + 1)];
const eventByDay = Object.fromEntries(rows.map((row) => [Number(row.date.split(" ")[1]), row]));

const DashboardMock = () => {
  const isItalian = useIsItalian();

  return (
    <div className="relative max-w-full">
      <div
        className="absolute -inset-10 -z-10 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--accent)/0.22),transparent_60%)] blur-2xl"
        aria-hidden
      />

      <DesktopDashboard isItalian={isItalian} />
      <MobileDashboard isItalian={isItalian} />
    </div>
  );
};

const DesktopDashboard = ({ isItalian }: { isItalian: boolean }) => (
  <div className="hidden overflow-hidden rounded-[30px] border border-border-strong/90 bg-card/95 shadow-elegant backdrop-blur md:block">
    <DashboardHeader />

    <div className="grid grid-cols-[1.05fr_0.95fr]">
      <div className="min-w-0 border-r border-border">
        <div className="grid grid-cols-[0.9fr_1.1fr] gap-3 border-b border-border/80 bg-[linear-gradient(180deg,hsl(var(--accent)/0.08),transparent)] p-5">
          <MomentKpi isItalian={isItalian} />
          <SpendKpi />
        </div>

        <CalendarGrid />
      </div>

      <div className="grid min-w-0 grid-cols-1">
        <div className="grid grid-cols-2 gap-3 border-b border-border p-5">
          {rows.slice(0, 2).map((row) => (
            <MomentMiniCard key={row.name} row={row} isItalian={isItalian} />
          ))}
        </div>

        <BudgetBlock isItalian={isItalian} />
        <VisibilityBlock isItalian={isItalian} />
      </div>
    </div>
  </div>
);

const MobileDashboard = ({ isItalian }: { isItalian: boolean }) => (
  <div className="overflow-hidden rounded-[28px] border border-border-strong/90 bg-card/95 shadow-elegant backdrop-blur md:hidden">
    <DashboardHeader compact />

    <div className="space-y-3 p-4">
      <div className="grid grid-cols-[0.82fr_1.18fr] gap-3">
        <MomentKpi isItalian={isItalian} compact />
        <SpendKpi compact />
      </div>

      <div className="rounded-[22px] border border-border bg-background/30 p-3">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
            {isItalian ? "Calendario aprile" : "April calendar"}
          </span>
          <span className="rounded-full border border-accent/25 bg-accent/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-accent">
            4 eventi
          </span>
        </div>
        <CalendarGrid compact />
      </div>

      <div className="grid grid-cols-2 gap-3">
        {rows.slice(0, 2).map((row) => (
          <MomentMiniCard key={row.name} row={row} isItalian={isItalian} compact />
        ))}
      </div>

      <div className="grid grid-cols-[1fr_auto] gap-3">
        <BudgetBlock isItalian={isItalian} compact />
        <div className="grid min-w-[78px] place-items-center rounded-[22px] border border-border bg-background/30 p-3 text-center">
          <Truck className="mb-2 size-5 text-accent" strokeWidth={1.7} />
          <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-muted-foreground">Delivery</span>
          <strong className="mt-1 font-display text-lg text-foreground">2</strong>
        </div>
      </div>
    </div>
  </div>
);

const DashboardHeader = ({ compact = false }: { compact?: boolean }) => (
  <div className={`flex items-center justify-between gap-3 border-b border-border bg-surface/70 ${compact ? "px-4 py-3" : "px-5 py-4"}`}>
    <div className="inline-flex min-w-0 items-center gap-3">
      <Logo size={compact ? 28 : 36} />
      <div>
        <span className={`block font-display font-bold uppercase text-foreground ${compact ? "text-[11px] tracking-[0.22em]" : "text-sm tracking-[0.26em]"}`}>
          Remvy dashboard
        </span>
        <span className="text-[9px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Recognition operations
        </span>
      </div>
    </div>
    <span className="shrink-0 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-accent">
      Live
    </span>
  </div>
);

const MomentKpi = ({ isItalian, compact = false }: { isItalian: boolean; compact?: boolean }) => (
  <div className={`rounded-2xl border border-border bg-background/35 ${compact ? "px-3 py-3" : "px-4 py-4"}`}>
    <div className="text-[9px] font-medium uppercase tracking-[0.13em] text-muted-foreground">
      {isItalian ? "Momenti mese" : "Moments month"}
    </div>
    <div className={`mt-2 font-display font-bold leading-none text-foreground ${compact ? "text-3xl" : "text-4xl"}`}>7</div>
    <div className="mt-3 flex items-center gap-2 text-sm font-bold text-accent">
      <span className="inline-flex items-center gap-1"><CakeSlice className="size-4" />4</span>
      <span className="size-1.5 rounded-full bg-accent shadow-[0_0_14px_hsl(var(--accent)/0.8)]" />
      <span className="inline-flex items-center gap-1"><BriefcaseBusiness className="size-4" />3</span>
    </div>
  </div>
);

const SpendKpi = ({ compact = false }: { compact?: boolean }) => (
  <div className={`grid grid-cols-3 gap-2 rounded-2xl border border-border bg-background/35 ${compact ? "px-3 py-3" : "px-4 py-4"}`}>
    {[
      ["EXP", "700"],
      ["SUST", "261"],
      ["REM", "439"],
    ].map(([label, value]) => (
      <div key={label} className="text-center">
        <div className="text-[9px] font-medium uppercase tracking-[0.12em] text-muted-foreground">{label}</div>
        <div className={`mt-2 font-display font-bold text-foreground ${compact ? "text-lg" : "text-xl"}`}>{value}</div>
      </div>
    ))}
  </div>
);

const CalendarGrid = ({ compact = false }: { compact?: boolean }) => (
  <div className={`grid grid-cols-7 text-center ${compact ? "gap-1 p-0" : "gap-1.5 p-5"}`}>
    {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
      <span key={day} className="text-[9px] font-medium uppercase tracking-[0.11em] text-muted-foreground">
        {compact ? day.slice(0, 1) : day}
      </span>
    ))}
    {calendarDays.map((day, index) => {
      if (!day) return <div key={`empty-${index}`} className={compact ? "h-8 rounded-lg bg-transparent" : "h-12 rounded-xl bg-transparent"} />;

      const event = eventByDay[day as number];
      const Icon = event?.moment === "Onboarding" ? BriefcaseBusiness : event?.moment === "Birthday" ? CakeSlice : Sparkles;

      return (
        <div
          key={day}
          className={`relative flex flex-col justify-between border ${
            compact ? "h-8 rounded-lg px-1 py-0.5" : "h-12 rounded-xl px-1.5 py-1"
          } ${event ? "border-accent/25 bg-background/45 shadow-soft" : "border-border/70 bg-background/20"}`}
        >
          <span className="text-[9px] font-medium text-foreground/90">{day}</span>
          {event ? (
            <span className="inline-flex size-4 items-center justify-center rounded-full border border-accent/30 bg-accent/10">
              <Icon className="size-2.5 text-accent" strokeWidth={1.8} />
            </span>
          ) : null}
        </div>
      );
    })}
  </div>
);

const MomentMiniCard = ({
  row,
  isItalian,
  compact = false,
}: {
  row: (typeof rows)[number];
  isItalian: boolean;
  compact?: boolean;
}) => (
  <div className={`rounded-2xl border border-border bg-background/30 ${compact ? "p-3" : "p-4"}`}>
    <div className="mb-3 flex items-center justify-between gap-2">
      <span className="grid size-8 place-items-center rounded-full border border-accent/20 bg-accent/10 text-[10px] font-semibold text-accent">
        {row.initials}
      </span>
      <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-accent">{row.date}</span>
    </div>
    <div className={`font-display font-bold leading-tight text-foreground ${compact ? "text-base" : "text-xl"}`}>{row.name}</div>
    <div className="mt-1 text-xs text-muted-foreground">
      {isItalian ? (row.moment === "Birthday" ? "Compleanno" : "Onboarding") : row.moment}
    </div>
    <div className="mt-3 truncate rounded-full border border-border bg-card/70 px-3 py-2 text-[11px] font-medium text-foreground/90">
      {row.gift}
    </div>
  </div>
);

const BudgetBlock = ({ isItalian, compact = false }: { isItalian: boolean; compact?: boolean }) => (
  <div className={`border-border ${compact ? "rounded-[22px] border bg-background/30 p-3" : "border-b p-5"}`}>
    <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-muted-foreground">Budget control</p>
    <div className="mt-3 flex items-end gap-2">
      <span className={`font-display font-bold text-foreground ${compact ? "text-2xl" : "text-3xl"}`}>EUR 840</span>
      <span className="pb-1 text-xs text-muted-foreground">{isItalian ? "su EUR 1,200" : "of EUR 1,200"}</span>
    </div>
    <div className="mt-4 h-2.5 w-full overflow-hidden rounded-full bg-surface">
      <div className="h-full rounded-full bg-accent shadow-[0_0_12px_hsl(var(--accent)/0.55)]" style={{ width: "70%" }} />
    </div>
  </div>
);

const VisibilityBlock = ({ isItalian }: { isItalian: boolean }) => (
  <div className="p-5">
    <div className="mb-3 inline-flex items-center gap-2.5 rounded-full border border-border-strong bg-card/70 px-3.5 py-2">
      <Gift className="size-4 text-accent" strokeWidth={1.7} />
      <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-foreground/88">
        {isItalian ? "Visibilita operativa" : "Operating visibility"}
      </span>
    </div>
    <p className="text-sm leading-relaxed text-muted-foreground">
      {isItalian ? "Momenti, budget, delivery e feedback in una vista unica." : "Moments, budget, delivery and feedback in one view."}
    </p>
  </div>
);

export default DashboardMock;
