const DashboardMock = () => {
  const rows = [
    {
      time: "08:42:11",
      target: "EMP-204",
      who: "A. Chen",
      payload: "5yr_Milestone_Grant",
      status: "COMPLETED",
      tone: "done" as const,
    },
    {
      time: "09:15:00",
      target: "COHORT-42",
      who: "Group",
      payload: "Day_1_Onboarding_Kit",
      status: "DELIVERING",
      tone: "active" as const,
    },
    {
      time: "14:00:00",
      target: "EMP-892",
      who: "M. Reyes",
      payload: "Parental_Leave_Transition",
      status: "SCHEDULED",
      tone: "queued" as const,
    },
    {
      time: "+1d 09:00",
      target: "EMP-114",
      who: "J. Vance",
      payload: "Q3_Performance_Review",
      status: "QUEUED",
      tone: "faded" as const,
    },
  ];

  return (
    <div className="relative w-full">
      <div className="absolute inset-0 -z-10 blur-3xl" style={{ background: "var(--gradient-glow)" }} />

      <div className="relative overflow-hidden rounded-md border border-border-strong/40 bg-surface shadow-elegant">
        {/* Top bar */}
        <div className="flex items-center justify-between border-b border-border bg-surface px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="size-2.5 rounded-full bg-primary/15" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary/60">
              Global Execution Matrix
            </span>
          </div>
          <span className="font-mono text-[10px] text-primary/60">RUNTIME · 44.92s</span>
        </div>

        {/* Header row */}
        <div className="grid grid-cols-12 gap-4 border-b border-border bg-background/60 px-6 py-3 text-xs font-medium text-primary/60">
          <div className="col-span-3 font-mono">TIMESTAMP</div>
          <div className="col-span-3">TARGET</div>
          <div className="col-span-4">PAYLOAD</div>
          <div className="col-span-2 text-right">STATUS</div>
        </div>

        {/* Rows */}
        <div className="text-sm tabular-nums">
          {rows.map((r, i) => {
            const isActive = r.tone === "active";
            const opacity =
              r.tone === "faded" ? "opacity-50" : r.tone === "queued" ? "opacity-75" : "";
            return (
              <div
                key={i}
                className={`relative grid grid-cols-12 items-center gap-4 border-b border-border/60 px-6 py-4 ${
                  isActive ? "bg-accent/5" : ""
                } ${opacity}`}
              >
                {isActive && (
                  <span className="absolute inset-y-0 left-0 w-[2px] bg-accent" aria-hidden />
                )}
                <div
                  className={`col-span-3 font-mono text-xs ${
                    isActive ? "font-medium text-accent" : "text-primary/60"
                  }`}
                >
                  {r.time}
                </div>
                <div className="col-span-3 truncate font-medium text-primary">
                  {r.target}
                  <span className="ml-2 font-normal text-primary/50">[{r.who}]</span>
                </div>
                <div className={`col-span-4 truncate ${isActive ? "text-primary" : "text-primary/60"}`}>
                  {r.payload}
                </div>
                <div className="col-span-2 flex items-center justify-end gap-2 font-mono text-xs">
                  <span className={isActive ? "font-medium" : ""}>{r.status}</span>
                  <span
                    className={`inline-block size-1.5 rounded-full ${
                      r.tone === "done"
                        ? "bg-primary"
                        : isActive
                        ? "animate-pulse-dot bg-accent"
                        : "bg-primary/25"
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Status bar */}
        <div className="flex items-center justify-between bg-primary px-6 py-2.5 font-mono text-[10px] uppercase tracking-wider text-primary-foreground/90">
          <div className="flex items-center gap-6">
            <span>
              SYS.OPS: <span className="text-accent">NOMINAL</span>
            </span>
            <span className="hidden sm:inline">LATENCY: 12ms</span>
          </div>
          <span>
            IN FLIGHT: <span className="text-primary-foreground">3,492</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default DashboardMock;
