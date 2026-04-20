import { Check, X } from "lucide-react";

const rows = [
  { label: "Easy to start", values: [false, true, false, true] },
  { label: "Execution included", values: [false, "Partial", false, true] },
  { label: "Local suppliers", values: [false, false, false, true] },
  { label: "Works with your tools", values: [true, false, true, true] },
  { label: "Budget tracking", values: [false, false, true, true] },
  { label: "No IT setup required", values: [true, true, false, true] },
];

const cols = ["Manual", "Gifting Platforms", "HR Software", "Remvy"];

const Cell = ({ v, accent }: { v: boolean | string; accent?: boolean }) => {
  if (v === true)
    return (
      <Check
        className={`mx-auto size-5 ${accent ? "text-accent" : "text-emerald-400"}`}
        strokeWidth={2.5}
      />
    );
  if (v === false) return <X className="mx-auto size-5 text-muted-foreground/40" strokeWidth={2} />;
  return <span className="text-xs font-medium text-muted-foreground">{v}</span>;
};

const summary = [
  { label: "Manual", note: "Chaotic" },
  { label: "Gifting platforms", note: "Transactional" },
  { label: "HR software", note: "Complex" },
  { label: "Remvy", note: "Operational system", accent: true },
];

const WhyRemvy = () => {
  return (
    <section id="why" className="relative border-t border-border">
      <div className="mx-auto w-full max-w-[1240px] px-6 py-28 lg:px-10 lg:py-40">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-accent">
            Why Remvy
          </span>
          <h2 className="mt-3 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground lg:text-6xl">
            An operational system, not just another tool.
          </h2>
          <p className="mt-5 text-base text-muted-foreground lg:text-lg">
            Most options handle a piece of the problem. Remvy executes the entire flow — from data to
            delivery.
          </p>
        </div>

        {/* Quick scan summary */}
        <div className="mt-14 grid gap-4 md:grid-cols-4">
          {summary.map((s) => (
            <div
              key={s.label}
              className={`rounded-2xl border p-5 ${
                s.accent
                  ? "border-accent/50 bg-accent/10 shadow-glow"
                  : "border-border bg-card"
              }`}
            >
              <p className={`text-xs font-medium uppercase tracking-wider ${s.accent ? "text-accent" : "text-muted-foreground"}`}>
                {s.label}
              </p>
              <p className={`mt-2 font-display text-lg font-bold ${s.accent ? "text-foreground" : "text-foreground/70"}`}>
                {s.note}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 overflow-x-auto">
          <div className="min-w-[640px] overflow-hidden rounded-2xl border border-border bg-card">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-5 py-4 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground" />
                  {cols.map((c, i) => {
                    const isRemvy = i === cols.length - 1;
                    return (
                      <th
                        key={c}
                        className={`px-5 py-4 text-center text-xs font-semibold uppercase tracking-wider ${
                          isRemvy ? "bg-accent/10 text-accent" : "text-muted-foreground"
                        }`}
                      >
                        {c}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.label} className="border-b border-border/60 last:border-0">
                    <td className="px-5 py-4 text-left font-medium text-foreground">{r.label}</td>
                    {r.values.map((v, i) => {
                      const isRemvy = i === r.values.length - 1;
                      return (
                        <td
                          key={i}
                          className={`px-5 py-4 text-center ${isRemvy ? "bg-accent/5" : ""}`}
                        >
                          <Cell v={v} accent={isRemvy} />
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyRemvy;
