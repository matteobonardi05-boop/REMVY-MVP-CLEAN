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
  { label: "W1", planned: 6, delivered: 5 },
  { label: "W2", planned: 8, delivered: 7 },
  { label: "W3", planned: 5, delivered: 5 },
  { label: "W4", planned: 9, delivered: 8 },
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

const DashboardMock = () => {
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
            remvy dashboard - where you can personalize moments and track budget, delivery and feedback
          </span>
          <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-accent">
            Live operations
          </span>
        </div>

        <div className="grid gap-0 xl:grid-cols-[1.25fr_0.75fr]">
          <div className="border-b border-border xl:border-b-0 xl:border-r">
            <div className="grid gap-3 border-b border-border/80 bg-[linear-gradient(180deg,hsl(var(--accent)/0.08),transparent)] px-5 py-5 md:grid-cols-3">
              {[
                { value: "24", label: "Moments in motion" },
                { value: "98%", label: "On-time delivery" },
                { value: "4.8 / 5", label: "Employee sentiment" },
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
                    <th className="px-5 py-3 font-medium">Employee</th>
                    <th className="px-5 py-3 font-medium">Moment</th>
                    <th className="px-5 py-3 font-medium">Date</th>
                    <th className="hidden px-5 py-3 font-medium sm:table-cell">Gift mix</th>
                    <th className="px-5 py-3 font-medium">Status</th>
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
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Monthly visibility
              </p>
              <div className="mt-5 flex h-28 items-end gap-2">
                {plannedVsDelivered.map((bar) => (
                  <div key={bar.label} className="flex flex-1 flex-col items-center gap-2">
                    <div className="relative flex h-24 w-full items-end justify-center">
                      <div
                        className="absolute bottom-0 w-7 rounded-t-xl bg-accent/20"
                        style={{ height: `${bar.planned * 10}%` }}
                      />
                      <div
                        className="absolute bottom-0 w-7 rounded-t-xl bg-accent shadow-[0_0_14px_hsl(var(--accent)/0.45)]"
                        style={{ height: `${bar.delivered * 10}%` }}
                      />
                    </div>
                    <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                      {bar.label}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-4 text-[11px] text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <span className="size-2 rounded-sm bg-accent" />
                  Delivered
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="size-2 rounded-sm bg-accent/20" />
                  Planned
                </span>
              </div>
            </div>

            <div className="border-b border-border p-5 xl:border-b">
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Budget control
              </p>
              <div className="mt-4 flex items-end gap-2">
                <span className="font-display text-3xl font-bold text-foreground">EUR 840</span>
                <span className="pb-1 text-sm text-muted-foreground">of EUR 1,200</span>
              </div>
              <div className="mt-5 h-2.5 w-full overflow-hidden rounded-full bg-surface">
                <div
                  className="h-full rounded-full bg-accent shadow-[0_0_12px_hsl(var(--accent)/0.55)]"
                  style={{ width: "70%" }}
                />
              </div>
              <div className="mt-3 flex justify-between text-[11px] text-muted-foreground">
                <span>70% used</span>
                <span>EUR 360 remaining</span>
              </div>
              <div className="mt-5 grid grid-cols-3 gap-2">
                {["Gifts", "Logistics", "Cards"].map((label) => (
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
                Satisfaction by moment
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
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border-strong bg-card/70 px-3 py-1.5">
                  <Logo size={18} />
                  <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-foreground/88">
                    Remvy visibility
                  </span>
                </div>
                <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-accent">
                  Full visibility in one view
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Moments, budget, logistics and sentiment are visible in the same operating dashboard.
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
