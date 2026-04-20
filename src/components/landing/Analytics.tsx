import { Star } from "lucide-react";

const bars = [
  { p: 70, d: 60 },
  { p: 90, d: 80 },
  { p: 50, d: 50 },
  { p: 100, d: 85 },
  { p: 75, d: 70 },
  { p: 85, d: 80 },
];

const Analytics = () => {
  return (
    <section className="relative border-t border-border bg-surface/30">
      <div className="mx-auto w-full max-w-[1240px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground lg:text-5xl">
            Full visibility on every moment.
          </h2>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {/* Card 1 — moments */}
          <div className="rounded-2xl border border-border bg-card p-6">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Moments this month
            </p>
            <p className="mt-2 font-display text-4xl font-extrabold text-foreground">12</p>
            <div className="mt-6 flex h-24 items-end gap-2">
              {bars.map((b, i) => (
                <div key={i} className="relative flex-1">
                  <div
                    className="w-full rounded-t bg-accent/20"
                    style={{ height: `${b.p}%` }}
                  />
                  <div
                    className="absolute bottom-0 w-full rounded-t bg-accent shadow-[0_0_12px_hsl(var(--accent)/0.6)]"
                    style={{ height: `${b.d}%` }}
                  />
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-4 text-[11px] text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <span className="size-2 rounded-sm bg-accent" /> Delivered
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="size-2 rounded-sm bg-accent/20" /> Planned
              </span>
            </div>
          </div>

          {/* Card 2 — budget */}
          <div className="rounded-2xl border border-border bg-card p-6">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Budget used</p>
            <p className="mt-2 font-display text-4xl font-extrabold text-foreground">
              €840 <span className="text-base font-medium text-muted-foreground">/ €1,200</span>
            </p>
            <div className="mt-8 h-2.5 w-full overflow-hidden rounded-full bg-surface">
              <div
                className="h-full rounded-full bg-accent shadow-[0_0_12px_hsl(var(--accent)/0.6)]"
                style={{ width: "70%" }}
              />
            </div>
            <div className="mt-3 flex justify-between text-[11px] text-muted-foreground">
              <span>70% used</span>
              <span>€360 remaining</span>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-3 text-center">
              {["Gifts", "Logistics", "Cards"].map((l) => (
                <div key={l} className="rounded-lg border border-border bg-surface/40 px-2 py-2">
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{l}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Card 3 — satisfaction */}
          <div className="rounded-2xl border border-border bg-card p-6">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Employee satisfaction
            </p>
            <p className="mt-2 font-display text-4xl font-extrabold text-foreground">
              4.8 <span className="text-base font-medium text-muted-foreground">/ 5</span>
            </p>
            <div className="mt-6 flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className={`size-6 ${
                    i <= 4
                      ? "fill-accent text-accent"
                      : "fill-accent/40 text-accent/40"
                  }`}
                  strokeWidth={1.5}
                />
              ))}
            </div>
            <div className="mt-8 space-y-2">
              {[
                { l: "Birthday", v: 96 },
                { l: "Onboarding", v: 92 },
                { l: "Anniversary", v: 88 },
              ].map((b) => (
                <div key={b.l}>
                  <div className="mb-1 flex justify-between text-[11px] text-muted-foreground">
                    <span>{b.l}</span>
                    <span>{b.v}%</span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface">
                    <div className="h-full rounded-full bg-accent/70" style={{ width: `${b.v}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Analytics;
