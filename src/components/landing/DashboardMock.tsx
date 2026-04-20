const rows = [
  { name: "Marco Rossi", moment: "Birthday", date: "Apr 22", kit: "Artisan Cake", status: "Scheduled" },
  { name: "Giulia Bianchi", moment: "Work Anniversary · 3y", date: "Apr 24", kit: "Branded Bundle", status: "Scheduled" },
  { name: "Alessandro Conti", moment: "Onboarding", date: "Apr 18", kit: "Welcome Kit", status: "Delivered" },
  { name: "Sara Greco", moment: "Milestone · 5y", date: "Apr 28", kit: "Premium Experience", status: "Pending" },
  { name: "Luca Ferrari", moment: "Birthday", date: "Apr 19", kit: "Artisan Cake", status: "Delivered" },
];

const statusStyle: Record<string, string> = {
  Scheduled: "bg-accent/15 text-accent border border-accent/30",
  Delivered: "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30",
  Pending: "bg-amber-500/15 text-amber-400 border border-amber-500/30",
};

const DashboardMock = () => {
  return (
    <div className="relative">
      {/* Glow halo */}
      <div className="absolute -inset-10 -z-10 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--accent)/0.25),transparent_60%)] blur-2xl" aria-hidden />

      <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-elegant">
        {/* Window chrome */}
        <div className="flex items-center justify-between border-b border-border bg-surface/60 px-5 py-3">
          <div className="flex items-center gap-1.5">
            <span className="size-2.5 rounded-full bg-muted-foreground/30" />
            <span className="size-2.5 rounded-full bg-muted-foreground/30" />
            <span className="size-2.5 rounded-full bg-muted-foreground/30" />
          </div>
          <span className="text-xs font-medium text-muted-foreground">remvy.app · upcoming moments</span>
          <span className="text-[11px] font-medium text-accent">● Live</span>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border text-[11px] uppercase tracking-wider text-muted-foreground">
                <th className="px-5 py-3 font-medium">Employee</th>
                <th className="px-5 py-3 font-medium">Moment</th>
                <th className="px-5 py-3 font-medium">Date</th>
                <th className="hidden px-5 py-3 font-medium sm:table-cell">Kit</th>
                <th className="px-5 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} className="border-b border-border/60 last:border-0 hover:bg-surface/40">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <span className="grid size-8 place-items-center rounded-full bg-accent/10 text-xs font-semibold text-accent">
                        {r.name.split(" ").map((n) => n[0]).join("")}
                      </span>
                      <span className="font-medium text-foreground">{r.name}</span>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-muted-foreground">{r.moment}</td>
                  <td className="px-5 py-4 text-muted-foreground">{r.date}</td>
                  <td className="hidden px-5 py-4 text-muted-foreground sm:table-cell">{r.kit}</td>
                  <td className="px-5 py-4">
                    <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-medium ${statusStyle[r.status]}`}>
                      {r.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardMock;
