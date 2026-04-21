import { Check, X } from "lucide-react";

const rows = [
  { label: "Easy to start", values: [false, true, false, true] },
  { label: "Execution included", values: [false, "Partial", false, true] },
  { label: "Local suppliers", values: [false, false, false, true] },
  { label: "Works with your tools", values: [true, false, true, true] },
  { label: "Budget tracking", values: [false, false, true, true] },
  { label: "No IT setup required", values: [true, true, false, true] },
];

const columns = ["Manual", "Gifting platforms", "HR software", "Remvy"];

const Cell = ({ value, accent }: { value: boolean | string; accent?: boolean }) => {
  if (value === true) {
    return <Check className={`mx-auto size-5 ${accent ? "text-accent" : "text-emerald-400"}`} strokeWidth={2.5} />;
  }

  if (value === false) {
    return <X className="mx-auto size-5 text-muted-foreground/40" strokeWidth={2} />;
  }

  return <span className="text-xs font-medium text-muted-foreground">{value}</span>;
};

const summary = [
  { label: "Manual", note: "Chaotic" },
  { label: "Platforms", note: "Transactional" },
  { label: "HR software", note: "Complex" },
  { label: "Remvy", note: "Operational system", accent: true },
];

const WhyRemvy = () => {
  return (
    <section id="why" className="relative border-t border-border">
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/45 to-transparent"
        aria-hidden
      />

      <div className="mx-auto w-full max-w-[1240px] px-6 py-28 lg:px-10 lg:py-40">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] lg:items-end">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-border-strong bg-surface/70 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Operational system
            </span>
            <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.02] tracking-tight text-foreground lg:text-6xl">
              More than another tool. <span className="text-accent text-glow">An operating system for recognition.</span>
            </h2>
            <p className="mt-5 max-w-[62ch] text-base leading-relaxed text-muted-foreground lg:text-lg">
              Most alternatives cover one slice of the process. Remvy connects the data, applies the
              rules, sources the gifts and handles the execution in the real world.
            </p>
          </div>

          <div className="rounded-[28px] border border-border-strong bg-card/90 p-6 shadow-soft">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-accent">
              Why this matters
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {[
                ["One workflow", "Rules, sourcing and delivery live in one system."],
                ["Less admin", "No more manual coordination across teams."],
                ["Better consistency", "Every moment follows the same quality standard."],
              ].map(([title, copy]) => (
                <div key={title} className="rounded-2xl border border-border bg-background/35 p-4">
                  <p className="font-display text-lg font-bold text-foreground">{title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-4">
          {summary.map((item) => (
            <div
              key={item.label}
              className={`rounded-[24px] border p-5 ${
                item.accent ? "border-accent/50 bg-accent/10 shadow-glow" : "border-border bg-card/90 shadow-soft"
              }`}
            >
              <p className={`text-xs font-medium uppercase tracking-[0.18em] ${item.accent ? "text-accent" : "text-muted-foreground"}`}>
                {item.label}
              </p>
              <p className={`mt-2 font-display text-lg font-bold ${item.accent ? "text-foreground" : "text-foreground/72"}`}>
                {item.note}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 overflow-x-auto">
          <div className="min-w-[700px] overflow-hidden rounded-[28px] border border-border-strong bg-card/95 shadow-soft">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-5 py-4 text-left text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground" />
                  {columns.map((column, index) => {
                    const isRemvy = index === columns.length - 1;
                    return (
                      <th
                        key={column}
                        className={`px-5 py-4 text-center text-xs font-semibold uppercase tracking-[0.18em] ${
                          isRemvy ? "bg-accent/10 text-accent" : "text-muted-foreground"
                        }`}
                      >
                        {column}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.label} className="border-b border-border/60 last:border-0">
                    <td className="px-5 py-4 text-left font-medium text-foreground">{row.label}</td>
                    {row.values.map((value, index) => {
                      const isRemvy = index === row.values.length - 1;
                      return (
                        <td key={`${row.label}-${index}`} className={`px-5 py-4 text-center ${isRemvy ? "bg-accent/5" : ""}`}>
                          <Cell value={value} accent={isRemvy} />
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
