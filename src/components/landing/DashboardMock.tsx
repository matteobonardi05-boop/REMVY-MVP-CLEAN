import { BriefcaseBusiness, CakeSlice, Gift, Sparkles } from "lucide-react";

import { useIsItalian } from "@/lib/locale";
import Logo from "./Logo";

const rows = [
  { name: "Marco Rossi", moment: "Birthday", date: "Apr 21", gift: "Birthday Signature", status: "Consegnato", feedback: "★ 5/5" },
  { name: "Alessandro Conti", moment: "Onboarding", date: "Apr 22", gift: "Branded Welcome", status: "Consegnato", feedback: "★ 5/5" },
  { name: "Giulia Bianchi", moment: "Birthday", date: "Apr 24", gift: "Floral Birthday", status: "In consegna", feedback: "—" },
  { name: "Marta Riva", moment: "Onboarding", date: "Apr 28", gift: "Work Essentials", status: "Pianificato", feedback: "—" },
];

const statusStyle: Record<string, string> = {
  Consegnato: "text-[#6DAF7A]",
  "In consegna": "text-foreground",
  Pianificato: "text-foreground",
};

const calendarDays = [null, null, ...Array.from({ length: 30 }, (_, index) => index + 1)];
const eventByDay = Object.fromEntries(rows.map((row) => [Number(row.date.split(" ")[1]), row]));

const getStatusLabel = (status: string, isItalian: boolean) => {
  if (isItalian) return status;
  if (status === "Consegnato") return "Delivered";
  if (status === "In consegna") return "In delivery";
  return "Scheduled";
};

const DashboardMock = () => {
  const isItalian = useIsItalian();
  const kpis = [
    {
      value: "6",
      label: isItalian ? "Momenti gestiti questo mese" : "Managed moments this month",
    },
    {
      value: "4h",
      label: isItalian ? "Ore risparmiate" : "Hours saved",
      note: isItalian ? "dal coordinamento manuale" : "from manual coordination",
    },
    {
      value: "5/5",
      label: isItalian ? "Feedback medio" : "Average feedback",
    },
  ];

  return (
    <div className="relative max-w-full">
      <div
        className="absolute -inset-10 -z-10 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--accent)/0.22),transparent_60%)] blur-2xl"
        aria-hidden
      />

      <div className="max-w-full overflow-hidden rounded-[30px] border border-border-strong/90 bg-card/95 shadow-elegant backdrop-blur">
        <div className="flex items-center justify-between gap-3 border-b border-border bg-surface/70 px-4 py-3 sm:px-5">
          <div className="inline-flex min-w-0 items-center gap-3">
            <Logo size={34} />
            <span className="truncate font-display text-sm font-bold uppercase tracking-[0.26em] text-foreground">
              Remvy dashboard
            </span>
          </div>
          <span className="shrink-0 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-accent">
            Live
          </span>
        </div>

        <div className="grid gap-0 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="min-w-0 border-b border-border xl:border-b-0 xl:border-r">
            <div className="grid gap-3 border-b border-border/80 bg-[linear-gradient(180deg,hsl(var(--accent)/0.08),transparent)] p-4 sm:grid-cols-3 sm:p-5">
              {kpis.map((item) => (
                <div key={item.label} className="rounded-2xl border border-border bg-background/35 px-4 py-4">
                  <div className="font-display text-3xl font-bold leading-none text-foreground">{item.value}</div>
                  <div className="mt-2 text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                    {item.label}
                  </div>
                  {item.note ? <div className="mt-1 text-xs text-muted-foreground">{item.note}</div> : null}
                </div>
              ))}
            </div>

            <div className="overflow-x-hidden">
              <table className="w-full table-fixed text-left text-[10px] sm:text-sm">
                <thead>
                  <tr className="border-b border-border text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                    <th className="w-[26%] px-2 py-3 font-medium sm:px-5">{isItalian ? "Dipendente" : "Employee"}</th>
                    <th className="w-[18%] px-2 py-3 font-medium sm:px-5">{isItalian ? "Momento" : "Moment"}</th>
                    <th className="w-[24%] px-2 py-3 font-medium sm:px-5">{isItalian ? "Pacchetto" : "Package"}</th>
                    <th className="w-[18%] px-2 py-3 font-medium sm:px-5">{isItalian ? "Stato" : "Status"}</th>
                    <th className="w-[14%] px-2 py-3 font-medium sm:px-5">Feedback</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row) => (
                    <tr key={`${row.name}-${row.date}`} className="border-b border-border/60 last:border-0 hover:bg-surface/30">
                      <td className="px-2 py-4 sm:px-5">
                        <div className="flex items-center gap-3">
                          <span className="hidden size-8 place-items-center rounded-full border border-accent/20 bg-accent/10 text-xs font-semibold text-accent sm:grid">
                            {row.name
                              .split(" ")
                              .map((part) => part[0])
                              .join("")}
                          </span>
                          <span className="truncate font-medium text-foreground">{row.name}</span>
                        </div>
                      </td>
                      <td className="px-2 py-4 text-muted-foreground sm:px-5">
                        {isItalian ? (row.moment === "Birthday" ? "Compleanno" : "Onboarding") : row.moment}
                      </td>
                      <td className="truncate px-2 py-4 text-muted-foreground sm:px-5">{row.gift}</td>
                      <td className="px-2 py-4 sm:px-5">
                        <span className={`font-medium ${statusStyle[row.status]}`}>{getStatusLabel(row.status, isItalian)}</span>
                      </td>
                      <td className="px-2 py-4 text-muted-foreground sm:px-5">{row.feedback}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid min-w-0 gap-0 sm:grid-cols-2 xl:grid-cols-1">
            <div className="border-b border-border p-4 sm:border-r sm:p-5 xl:border-r-0">
              <div className="flex items-center justify-between gap-3">
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  {isItalian ? "Calendario aprile" : "April calendar"}
                </p>
                <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-accent">Event view</span>
              </div>

              <div className="mt-4 grid grid-cols-7 gap-1 text-center sm:gap-1.5">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                  <span key={day} className="text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                    {day}
                  </span>
                ))}
                {calendarDays.map((day, index) => {
                  if (!day) return <div key={`empty-${index}`} className="h-8 rounded-xl bg-transparent sm:h-11" />;

                  const event = eventByDay[day as number];
                  const Icon = event?.moment === "Onboarding" ? BriefcaseBusiness : event?.moment === "Birthday" ? CakeSlice : Sparkles;

                  return (
                    <div
                      key={day}
                      className={`relative flex h-8 flex-col justify-between rounded-lg border px-1 py-0.5 sm:h-11 sm:rounded-xl sm:px-1.5 sm:py-1 ${
                        event ? "border-accent/25 bg-background/45 shadow-soft" : "border-border/70 bg-background/20"
                      }`}
                    >
                      <span className="text-[9px] font-medium text-foreground/90 sm:text-[10px]">{day}</span>
                      {event ? (
                        <span className="inline-flex size-4 items-center justify-center rounded-full border border-accent/30 bg-accent/10 sm:size-5">
                          <Icon className="size-2.5 text-accent sm:size-3" strokeWidth={1.8} />
                        </span>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="border-b border-border p-4 sm:p-5">
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">Budget control</p>
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
            </div>

            <div className="p-4 sm:col-span-2 sm:p-5 xl:col-span-1">
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                {isItalian ? "Feedback per momento" : "Feedback by moment"}
              </p>
              <div className="mt-4 space-y-4">
                {(isItalian ? ["Compleanni", "Onboarding"] : ["Birthdays", "Onboarding"]).map((label) => (
                  <div key={label}>
                    <div className="mb-1.5 flex justify-between text-[11px] text-muted-foreground">
                      <span>{label}</span>
                      <span>★ 5/5</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-surface">
                      <div className="h-full rounded-full bg-accent/80" style={{ width: "100%" }} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl border border-border bg-background/30 p-4">
                <div className="mb-3 inline-flex items-center gap-2.5 rounded-full border border-border-strong bg-card/70 px-3.5 py-2">
                  <Gift className="size-4 text-accent" strokeWidth={1.7} />
                  <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-foreground/88">
                    {isItalian ? "Visibilità operativa" : "Operating visibility"}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {isItalian ? "Momenti, budget, delivery e feedback in una vista unica." : "Moments, budget, delivery and feedback in one view."}
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
