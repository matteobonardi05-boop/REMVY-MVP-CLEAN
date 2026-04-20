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

const WhyRemvy = () => {
  return (
    <section className="relative border-t border-border bg-surface/30">
      <div className="mx-auto w-full max-w-[1240px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground lg:text-5xl">
            Built for companies that move fast.
          </h2>
        </div>

        <div className="mt-14 overflow-x-auto">
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
