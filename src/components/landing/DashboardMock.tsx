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

  return (
    <div className="relative">
      <div
        className="absolute -inset-10 -z-10 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--accent)/0.22),transparent_60%)] blur-2xl"
        aria-hidden
      />

      <div className="overflow-hidden rounded-[30px] border border-border-strong/90 bg-card/95 shadow-elegant backdrop-blur">
        <div
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent"
          aria-hidden
        />

        <div className="flex items-center justify-between border-b border-border bg-surface/70 px-5 py-3">
          <div className="flex items-center gap-1.5">
            <span className="size-2.5 rounded-full bg-muted-foreground/30" />
            <span className="size-2.5 rounded-full bg-muted-foreground/30" />
            <span className="size-2.5 rounded-full bg-muted-foreground/30" />
          </div>
          <span className="text-xs font-medium text-muted-foreground">
            {isItalian
              ? "remvy dashboard - personalizzi i momenti e monitori budget, delivery e feedback"
              : "remvy dashboard - where you can personalize moments and track budget, delivery and feedback"}
          </span>
          <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-accent">
            {isItalian ? "Live operations" : "Live operations"}
          </span>
        </div>

        <div className="grid gap-0 xl:grid-cols-[1.25fr_0.75fr]">
          <div className="border-b border-border xl:border-b-0 xl:border-r">
            <div className="grid gap-3 border-b border-border/80 bg-[linear-gradient(180deg,hsl(var(--accent)/0.08),transparent)] px-5 py-5 md:grid-cols-3">
              {[
                { value: "9", label: isItalian ? "Momenti attivi" : "Active moments" },
                { value: "98%", label: isItalian ? "Delivery puntuali" : "On-time delivery" },
                { value: "4.8 / 5", label: isItalian ? "Livello di gradimento" : "Employee sentiment" },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-border bg-background/35 px-4 py-4">
                  <div className="font-display text-3xl font-bold leading-none text-foreground">{item.value}</div>
                  <div className="mt-2 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
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
                  {rows.map((row) => (
                    <tr key={`${row.name}-${row.date}`} className="border-b border-border/60 last:border-0 hover:bg-surface/30">
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          <span className="grid size-8 place-items-center rounded-full border border-accent/20 bg-accent/10 text-xs font-semibold text-accent">
                            {row.name.split(" ").map((part) => part[0]).join("")}
                          </span>
                          <span className="font-medium text-foreground">{row.name}</span>
                        </div>
                      </td>
                      <td className="px-5 py-4 text-muted-foreground">{row.moment}</td>
                      <td className="whitespace-nowrap px-5 py-4 text-muted-foreground">{row.date}</td>
                      <td className="hidden px-5 py-4 text-muted-foreground sm:table-cell">{row.gift}</td>
                      <td className="px-5 py-4">
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
            <div className="border-b border-border p-5 sm:border-r xl:border-r-0">
              <div className="flex items-center justify-between gap-3">
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  {isItalian ? "Calendario aprile" : "April calendar"}
                </p>
                <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-accent">
                  {isItalian ? "Event view" : "Event view"}
                </span>
              </div>
              <div className="mt-4 grid grid-cols-7 gap-1.5 text-center">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                  <span key={day} className="text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                    {day}
                  </span>
                ))}
                {calendarDays.map((day, index) => {
                  if (!day) {
                    return <div key={`empty-${index}`} className="h-12 rounded-xl bg-transparent" />;
                  }

                  const event = eventByDay[day as number];
                  const style = event ? eventStyle[event.eventKey] : null;
                  const EventIcon = style?.icon;

                  return (
                    <div
                      key={day}
                      className={`relative flex h-12 flex-col justify-between rounded-xl border px-1.5 py-1 ${
                        event ? "border-accent/25 bg-background/45 shadow-soft" : "border-border/70 bg-background/20"
                      }`}
                    >
                      <span className="text-[10px] font-medium text-foreground/90">{day}</span>
                      {event && EventIcon ? (
                        <div className="flex items-end justify-between gap-1">
                          <span className="text-[8px] font-medium uppercase tracking-[0.12em] text-muted-foreground">
                            {event.name.split(" ").map((part: string) => part[0]).join("")}
                          </span>
                          <span className={`inline-flex size-5 items-center justify-center rounded-full border ${style.badgeClass}`}>
                            <EventIcon className={`size-3 ${style.iconClass}`} strokeWidth={1.8} />
                          </span>
                        </div>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="border-b border-border p-5 xl:border-b">
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  {isItalian ? "Budget control" : "Budget control"}
              </p>
              <div className="mt-4 flex items-end gap-2">
                <span className="font-display text-3xl font-bold text-foreground">EUR 840</span>
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

            <div className="p-5 sm:col-span-2 xl:col-span-1">
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
