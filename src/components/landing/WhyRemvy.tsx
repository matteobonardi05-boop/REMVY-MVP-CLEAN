import { Check, X } from "lucide-react";

import { useIsItalian } from "@/lib/locale";

const enRows = [
  { label: "Removes manual coordination", values: [false, false, false, true] },
  { label: "Execution included", values: [false, "Partial", false, true] },
  { label: "Local physical delivery", values: [false, false, false, true] },
  { label: "Works with existing tools", values: [true, false, true, true] },
  { label: "Budget and feedback visibility", values: [false, false, true, true] },
];

const Cell = ({ value, accent }: { value: boolean | string; accent?: boolean }) => {
  if (value === true) {
    return <Check className={`mx-auto size-5 ${accent ? "text-accent" : "text-emerald-400"}`} strokeWidth={2.5} />;
  }

  if (value === false) {
    return <X className="mx-auto size-5 text-muted-foreground/40" strokeWidth={2} />;
  }

  return <span className="text-xs font-medium text-muted-foreground">{value}</span>;
};

const WhyRemvy = () => {
  const isItalian = useIsItalian();
  const rows = isItalian
    ? [
        { label: "Rimuove coordinamento manuale", values: [false, false, false, true] },
        { label: "Execution inclusa", values: [false, "Parziale", false, true] },
        { label: "Delivery fisica locale", values: [false, false, false, true] },
        { label: "Lavora con i tool esistenti", values: [true, false, true, true] },
        { label: "Visibilità budget e feedback", values: [false, false, true, true] },
      ]
    : enRows;
  const columns = isItalian ? ["Manuale", "Servizio gift", "HR software", "Remvy"] : ["Manual", "Gifting service", "HR software", "Remvy"];
  const summary = isItalian
    ? [
        { label: "Manuale", note: "Dipende dalla memoria" },
        { label: "Servizio gift", note: "Risolve solo l'oggetto" },
        { label: "HR software", note: "Archivia dati" },
        { label: "Remvy", note: "Rimuove il lavoro operativo", accent: true },
      ]
    : [
        { label: "Manual", note: "Depends on memory" },
        { label: "Gifting service", note: "Solves only the object" },
        { label: "HR software", note: "Stores data" },
        { label: "Remvy", note: "Removes operating work", accent: true },
      ];

  return (
    <section id="why" className="relative border-t border-border">
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/45 to-transparent"
        aria-hidden
      />

      <div className="mx-auto w-full max-w-[1240px] px-6 py-16 lg:px-10 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] lg:items-end">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-border-strong bg-surface/70 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
              {isItalian ? "Sistema operativo" : "Operating system"}
            </span>
            <h2 className="mt-5 font-display text-[clamp(2rem,9vw,3.6rem)] font-extrabold leading-[1.02] tracking-tight text-foreground">
              <span className="block text-accent text-glow">{isItalian ? "Non un tool HR." : "Not an HR tool."}</span>
              <span className="mt-2 block">{isItalian ? "Non un servizio gift." : "Not a gifting service."}</span>
              <span className="mt-2 block text-accent text-glow">
                {isItalian ? "Un layer operativo." : "An operating layer."}
              </span>
            </h2>
            <p className="mt-5 max-w-[56ch] text-base leading-relaxed text-muted-foreground">
              {isItalian
                ? "Remvy trasforma un processo frammentato in regole, execution e visibilità."
                : "Remvy turns a fragmented process into rules, execution and visibility."}
            </p>
          </div>

          <div className="rounded-[28px] border border-border-strong bg-card/90 p-6 shadow-soft">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-accent">
              {isItalian ? "Perché conta" : "Why this matters"}
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {(isItalian
                ? [
                    ["Meno lavoro non core", "Il team evita task ricorrenti."],
                    ["Experience coerente", "Ogni employee riceve lo stesso standard."],
                    ["Cultura scalabile", "La cura non dipende dalla memoria."],
                  ]
                : [
                    ["Less non-core work", "The team avoids recurring admin."],
                    ["Consistent experience", "Every employee receives one standard."],
                    ["Scalable culture", "Care no longer depends on memory."],
                  ]).map(([title, copy]) => (
                <div key={title} className="rounded-2xl border border-border bg-background/35 p-4">
                  <p className="font-display text-lg font-bold text-foreground">{title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-4">
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
