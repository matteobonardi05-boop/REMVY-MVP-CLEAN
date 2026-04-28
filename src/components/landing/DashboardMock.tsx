import {
  BriefcaseBusiness,
  CakeSlice,
  Flower2,
  Gift,
  Sparkles,
} from "lucide-react";

import { useIsItalian } from "@/lib/locale";
import Logo from "./Logo";

const rows = [
  { name: "Alessandro Conti", moment: "Onboarding", date: "Apr 20", gift: "First Day Essentials", status: "Delivered" },
  { name: "Marco Rossi", moment: "Birthday", date: "Apr 21", gift: "Birthday Signature", status: "Delivered" },
  { name: "Giulia Bianchi", moment: "Work anniversary - 3y", date: "Apr 22", gift: "Culture Gesture", status: "In delivery" },
  { name: "Elena Villa", moment: "Promotion", date: "Apr 23", gift: "Leadership Marker", status: "In delivery" },
  { name: "Davide Serra", moment: "Birthday", date: "Apr 24", gift: "Premium Spotlight", status: "In delivery" },
  { name: "Sara Greco", moment: "Milestone - 5y", date: "Apr 25", gift: "Milestone Signature", status: "Scheduled" },
  { name: "Luca Ferri", moment: "New baby", date: "Apr 26", gift: "Boutique Recognition", status: "Scheduled" },
  { name: "Marta Riva", moment: "Onboarding", date: "Apr 28", gift: "Executive Arrival", status: "Scheduled" },
  { name: "Chiara Neri", moment: "Work anniversary - 1y", date: "Apr 30", gift: "Tenure Tribute", status: "Scheduled" },
];

const plannedVsDelivered = [
  { label: "W1", planned: 4, delivered: 3 },
  { label: "W2", planned: 5, delivered: 4 },
  { label: "W3", planned: 6, delivered: 5 },
  { label: "W4", planned: 7, delivered: 6 },
];

const satisfaction = [
  { label: "Birthdays", value: 96 },
  { label: "Onboarding", value: 93 },
  { label: "Anniversaries", value: 89 },
];

const statusStyle: Record<string, string> = {
  Scheduled: "border border-accent/30 bg-accent/12 text-accent",
  "In delivery": "border border-amber-500/30 bg-amber-500/15 text-amber-300",
  Delivered: "border border-emerald-500/25 bg-emerald-500/12 text-emerald-300",
};

const eventStyle: Record<
  string,
  { icon: typeof CakeSlice; iconClass: string; badgeClass: string }
> = {
  Birthday: {
    icon: CakeSlice,
    iconClass: "text-rose-500",
    badgeClass: "bg-rose-100/80 border-rose-200/80",
  },
  Onboarding: {
    icon: BriefcaseBusiness,
    iconClass: "text-sky-600",
    badgeClass: "bg-sky-100/80 border-sky-200/80",
  },
  "Work anniversary": {
    icon: Sparkles,
    iconClass: "text-amber-500",
    badgeClass: "bg-amber-100/80 border-amber-200/80",
  },
  Promotion: {
    icon: Gift,
    iconClass: "text-violet-600",
    badgeClass: "bg-violet-100/80 border-violet-200/80",
  },
  Milestone: {
    icon: Sparkles,
    iconClass: "text-orange-500",
    badgeClass: "bg-orange-100/80 border-orange-200/80",
  },
  "New baby": {
    icon: Flower2,
    iconClass: "text-emerald-600",
    badgeClass: "bg-emerald-100/80 border-emerald-200/80",
  },
};

const calendarDays = [
  null,
  null,
  ...Array.from({ length: 30 }, (_, index) => index + 1),
];

const eventByDay = Object.fromEntries(
  rows.map((row) => {
    const day = Number(row.date.split(" ")[1]);
    const eventKey =
      row.moment.startsWith("Work anniversary")
        ? "Work anniversary"
        : row.moment.startsWith("Milestone")
          ? "Milestone"
          : row.moment;

    return [day, { ...row, eventKey }];
  }),
);

const DashboardMock = () => {
  const isItalian = useIsItalian();
  const mobileRows = rows.slice(0, 4);

  return (
    <div className="relative">
      <div
        className="absolute -inset-10 -z-10 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--accent)/0.22),transparent_60%)] blur-2xl"
        aria-hidden
      />

      <div className="overflow-hidden rounded-[24px] border border-border-strong/90 bg-card/95 shadow-elegant backdrop-blur md:hidden">
        <div className="border-b border-border bg-surface/70 px-3 py-2">
          <div className="flex items-center justify-between gap-3">
            <Logo size={30} />
            <span className="truncate text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
              Remvy dashboard
            </span>
            <span className="rounded-full border border-accent/30 bg-accent/10 px-2 py-1 text-[9px] font-medium uppercase tracking-[0.12em] text-accent">
              Live
            </span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 border-b border-border/80 bg-[linear-gradient(180deg,hsl(var(--accent)/0.08),transparent)] p-3">
          {[
            { value: "9", label: isItalian ? "Momenti" : "Moments" },
            { value: "98%", label: "Delivery" },
            { value: "4.8", label: isItalian ? "Gradimento" : "Feedback" },
          ].map((item) => (
            <div key={item.label} className="rounded-xl border border-border bg-background/35 px-2 py-2 text-center">
              <div className="font-display text-xl font-bold leading-none text-foreground">{item.value}</div>
              <div className="mt-1 text-[8px] font-medium uppercase tracking-[0.1em] text-muted-foreground">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-[1.15fr_0.85fr] border-b border-border">
          <div className="border-r border-border">
            <div className="grid grid-cols-[1fr_auto] border-b border-border px-3 py-2 text-[8px] font-medium uppercase tracking-[0.12em] text-muted-foreground">
              <span>{isItalian ? "Employee" : "Employee"}</span>
              <span>{isItalian ? "Stato" : "Status"}</span>
            </div>
            {mobileRows.map((row) => (
              <div key={`${row.name}-${row.date}-mobile`} className="grid grid-cols-[1fr_auto] items-center gap-2 border-b border-border/60 px-3 py-2 last:border-0">
                <div className="min-w-0">
                  <p className="truncate text-[11px] font-semibold text-foreground">{row.name}</p>
                  <p className="truncate text-[9px] text-muted-foreground">{row.moment} · {row.date}</p>
                </div>
                <span className={`rounded-full px-2 py-0.5 text-[8px] font-medium ${statusStyle[row.status]}`}>
                  {row.status === "In delivery" ? "Delivery" : row.status}
                </span>
              </div>
            ))}
          </div>

          <div className="p-3">
            <p className="text-[8px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
              {isItalian ? "Aprile" : "April"}
            </p>
            <div className="mt-2 grid grid-cols-7 gap-1">
              {Array.from({ length: 30 }, (_, index) => index + 1).map((day) => {
                const event = eventByDay[day];
                const style = event ? eventStyle[event.eventKey] : null;
                const EventIcon = style?.icon;

                return (
                  <div
                    key={`mobile-day-${day}`}
                    className={`grid h-5 place-items-center rounded-md border text-[8px] ${
                      event ? "border-accent/30 bg-background/50 text-accent" : "border-border/50 bg-background/20 text-muted-foreground"
                    }`}
                  >
                    {event && EventIcon ? <EventIcon className={`size-2.5 ${style.iconClass}`} strokeWidth={2} /> : day}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-[0.9fr_1.1fr]">
          <div className="border-r border-border p-3">
            <p className="text-[8px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
              Budget
            </p>
            <div className="mt-2 font-display text-2xl font-bold text-foreground">EUR 840</div>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-surface">
              <div className="h-full w-[70%] rounded-full bg-accent" />
            </div>
            <p className="mt-2 text-[9px] text-muted-foreground">70% {isItalian ? "utilizzato" : "used"}</p>
          </div>
          <div className="p-3">
            <p className="text-[8px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
              {isItalian ? "Gradimento" : "Satisfaction"}
            </p>
            <div className="mt-3 space-y-2">
              {satisfaction.map((item) => (
                <div key={`${item.label}-mobile`}>
                  <div className="mb-1 flex justify-between text-[9px] text-muted-foreground">
                    <span>{item.label}</span>
                    <span>{item.value}%</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-surface">
                    <div className="h-full rounded-full bg-accent/80" style={{ width: `${item.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="hidden overflow-hidden rounded-[30px] border border-border-strong/90 bg-card/95 shadow-elegant backdrop-blur md:block">
        <div
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent"
          aria-hidden
        />

        <div className="flex items-center justify-between gap-3 border-b border-border bg-surface/70 px-3 py-2.5 sm:px-5 sm:py-3">
          <div className="flex items-center gap-1.5">
            <span className="size-2.5 rounded-full bg-muted-foreground/30" />
            <span className="size-2.5 rounded-full bg-muted-foreground/30" />
            <span className="size-2.5 rounded-full bg-muted-foreground/30" />
          </div>
          <span className="min-w-0 flex-1 truncate text-center text-[10px] font-medium text-muted-foreground sm:text-xs">
            {isItalian
              ? "remvy dashboard - personalizzi i momenti e monitori budget, delivery e feedback"
              : "remvy dashboard - where you can personalize moments and track budget, delivery and feedback"}
          </span>
          <span className="hidden text-[11px] font-medium uppercase tracking-[0.18em] text-accent sm:inline">
            {isItalian ? "Live operations" : "Live operations"}
          </span>
        </div>

        <div className="grid gap-0 xl:grid-cols-[1.25fr_0.75fr]">
          <div className="border-b border-border xl:border-b-0 xl:border-r">
            <div className="grid auto-cols-[72%] grid-flow-col gap-3 overflow-x-auto border-b border-border/80 bg-[linear-gradient(180deg,hsl(var(--accent)/0.08),transparent)] px-3 py-3 md:grid-flow-row md:grid-cols-3 md:overflow-visible md:px-5 md:py-5">
              {[
                { value: "9", label: isItalian ? "Momenti attivi" : "Active moments" },
                { value: "98%", label: isItalian ? "Delivery puntuali" : "On-time delivery" },
                { value: "4.8 / 5", label: isItalian ? "Livello di gradimento" : "Employee sentiment" },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-border bg-background/35 px-3 py-3 md:px-4 md:py-4">
                  <div className="font-display text-2xl font-bold leading-none text-foreground md:text-3xl">{item.value}</div>
                  <div className="mt-2 text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground md:text-xs md:tracking-[0.16em]">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-border text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                    <th className="px-5 py-3 font-medium">{isItalian ? "Employee" : "Employee"}</th>
                    <th className="px-5 py-3 font-medium">{isItalian ? "Momento" : "Moment"}</th>
                    <th className="px-5 py-3 font-medium">{isItalian ? "Data" : "Date"}</th>
                    <th className="hidden px-5 py-3 font-medium sm:table-cell">{isItalian ? "Gift mix" : "Gift mix"}</th>
                    <th className="px-5 py-3 font-medium">{isItalian ? "Status" : "Status"}</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, index) => (
                    <tr key={`${row.name}-${row.date}`} className={`border-b border-border/60 last:border-0 hover:bg-surface/30 ${index > 4 ? "hidden md:table-row" : ""}`}>
                      <td className="px-4 py-3 md:px-5 md:py-4">
                        <div className="flex items-center gap-3">
                          <span className="grid size-8 place-items-center rounded-full border border-accent/20 bg-accent/10 text-xs font-semibold text-accent">
                            {row.name.split(" ").map((part) => part[0]).join("")}
                          </span>
                          <span className="font-medium text-foreground">{row.name}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-muted-foreground md:px-5 md:py-4">{row.moment}</td>
                      <td className="whitespace-nowrap px-4 py-3 text-muted-foreground md:px-5 md:py-4">{row.date}</td>
                      <td className="hidden px-5 py-4 text-muted-foreground sm:table-cell">{row.gift}</td>
                      <td className="px-4 py-3 md:px-5 md:py-4">
                        <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-medium ${statusStyle[row.status]}`}>
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid gap-0 sm:grid-cols-2 xl:grid-cols-1">
            <div className="border-b border-border p-3 sm:border-r sm:p-5 xl:border-r-0">
              <div className="flex items-center justify-between gap-3">
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  {isItalian ? "Calendario aprile" : "April calendar"}
                </p>
                <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-accent">
                  {isItalian ? "Event view" : "Event view"}
                </span>
              </div>
              <div className="mt-3 grid grid-cols-7 gap-1 text-center sm:mt-4 sm:gap-1.5">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                  <span key={day} className="text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                    {day}
                  </span>
                ))}
                {calendarDays.map((day, index) => {
                  if (!day) {
                    return <div key={`empty-${index}`} className="h-8 rounded-xl bg-transparent sm:h-12" />;
                  }

                  const event = eventByDay[day as number];
                  const style = event ? eventStyle[event.eventKey] : null;
                  const EventIcon = style?.icon;

                  return (
                    <div
                      key={day}
                      className={`relative flex h-8 flex-col justify-between rounded-lg border px-1 py-0.5 sm:h-12 sm:rounded-xl sm:px-1.5 sm:py-1 ${
                        event ? "border-accent/25 bg-background/45 shadow-soft" : "border-border/70 bg-background/20"
                      }`}
                    >
                      <span className="text-[9px] font-medium text-foreground/90 sm:text-[10px]">{day}</span>
                      {event && EventIcon ? (
                        <div className="flex items-end justify-between gap-1">
                          <span className="hidden text-[8px] font-medium uppercase tracking-[0.12em] text-muted-foreground sm:inline">
                            {event.name.split(" ").map((part: string) => part[0]).join("")}
                          </span>
                          <span className={`inline-flex size-4 items-center justify-center rounded-full border sm:size-5 ${style.badgeClass}`}>
                            <EventIcon className={`size-2.5 sm:size-3 ${style.iconClass}`} strokeWidth={1.8} />
                          </span>
                        </div>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="border-b border-border p-3 sm:p-5 xl:border-b">
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  {isItalian ? "Budget control" : "Budget control"}
              </p>
              <div className="mt-4 flex items-end gap-2">
                <span className="font-display text-2xl font-bold text-foreground sm:text-3xl">EUR 840</span>
                <span className="pb-1 text-sm text-muted-foreground">{isItalian ? "su EUR 1,200" : "of EUR 1,200"}</span>
              </div>
              <div className="mt-5 h-2.5 w-full overflow-hidden rounded-full bg-surface">
                <div
                  className="h-full rounded-full bg-accent shadow-[0_0_12px_hsl(var(--accent)/0.55)]"
                  style={{ width: "70%" }}
                />
              </div>
              <div className="mt-3 flex justify-between text-[11px] text-muted-foreground">
                <span>{isItalian ? "70% utilizzato" : "70% used"}</span>
                <span>{isItalian ? "EUR 360 disponibili" : "EUR 360 remaining"}</span>
              </div>
              <div className="mt-5 grid grid-cols-3 gap-2">
                {(isItalian ? ["Gift", "Logistica", "Card"] : ["Gifts", "Logistics", "Cards"]).map((label) => (
                  <div key={label} className="rounded-xl border border-border bg-background/30 px-3 py-3 text-center">
                    <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3 sm:col-span-2 sm:p-5 xl:col-span-1">
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                {isItalian ? "Livello di gradimento per momento" : "Satisfaction by moment"}
              </p>
              <div className="mt-4 space-y-4">
                {satisfaction.map((item) => (
                  <div key={item.label}>
                    <div className="mb-1.5 flex justify-between text-[11px] text-muted-foreground">
                      <span>{item.label}</span>
                      <span>{item.value}%</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-surface">
                      <div
                        className="h-full rounded-full bg-accent/80"
                        style={{ width: `${item.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-2xl border border-border bg-background/30 p-4">
                <div className="mb-3 inline-flex items-center gap-2.5 rounded-full border border-border-strong bg-card/70 px-3.5 py-2">
                  <Logo size={28} />
                  <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-foreground/88">
                    {isItalian ? "Remvy visibility" : "Remvy visibility"}
                  </span>
                </div>
                <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-accent">
                  {isItalian ? "Visibilità completa in una vista" : "Full visibility in one view"}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {isItalian
                    ? "Momenti, budget, logistica e sentiment sono visibili nella stessa dashboard operativa."
                    : "Moments, budget, logistics and sentiment are visible in the same operating dashboard."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMock;
