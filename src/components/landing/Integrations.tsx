import { ArrowRight, BarChart3, Gift, Truck } from "lucide-react";

import { useIsItalian } from "@/lib/locale";
import Logo from "./Logo";

const tools = [
  { name: "Factorial", mark: "f", brandClass: "text-[#7C5CFF]", tileClass: "bg-[#F4F0FF] border-[#DDD1FF]" },
  { name: "Zucchetti", mark: "Z", brandClass: "text-[#E53935]", tileClass: "bg-[#FFF1F0] border-[#FFD2D0]" },
  { name: "Peoplelink", mark: "P", brandClass: "text-[#0EA5E9]", tileClass: "bg-[#EEF9FF] border-[#CAEFFF]" },
  { name: "Bizneo HR", mark: "B", brandClass: "text-[#1D4ED8]", tileClass: "bg-[#EEF4FF] border-[#D3E1FF]" },
  { name: "TeamSystem", mark: "T", brandClass: "text-[#00A85A]", tileClass: "bg-[#ECFFF5] border-[#C9F3DD]" },
  { name: "SAP", mark: "SAP", brandClass: "text-[#0F6CBD]", tileClass: "bg-[#EFF8FF] border-[#CBE9FF]" },
];

const outputs = [
  { name: "Gift sourcing", icon: Gift },
  { name: "Delivery", icon: Truck },
  { name: "Tracking", icon: BarChart3 },
];

const Integrations = () => {
  const isItalian = useIsItalian();

  return (
    <section id="integrations" className="relative border-t border-border bg-surface/30">
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/45 to-transparent"
        aria-hidden
      />

      <div className="mx-auto w-full max-w-[1240px] px-6 py-28 lg:px-10 lg:py-40">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] lg:items-end">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-border-strong bg-card/60 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
              {isItalian ? "Integrazioni" : "Integrations"}
            </span>
            <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.02] tracking-tight text-foreground lg:text-6xl">
              <span className="text-accent text-glow">{isItalian ? "Built to work" : "Built to work"}</span>{" "}
              {isItalian ? "con gli strumenti che usi già." : "with the tools you already use."}
            </h2>
            <p className="mt-5 max-w-[62ch] text-base leading-relaxed text-muted-foreground lg:text-lg">
              {isItalian
                ? "Remvy si integra con gli HR tools che l'azienda usa già, così la recognition entra nel workflow invece di diventare un altro sistema da gestire."
                : "Remvy fits into the HR tools companies already rely on, so recognition can become part of the workflow instead of another separate system to manage."}
            </p>
          </div>

          <div className="rounded-[28px] border border-border-strong bg-card/90 p-6 shadow-soft">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-accent">
              {isItalian ? "Principio di integrazione" : "Integration principle"}
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {(isItalian
                ? [
                    ["Nessun nuovo stack", "Funziona con sistemi attuali, file manuali e CSV."],
                    ["Input flessibile", "HRIS, payroll, spreadsheet o import CSV."],
                    ["Output reale", "Dal dato a sourcing, delivery e tracking."],
                  ]
                : [
                    ["No new stack", "Works with your current systems and manual files."],
                    ["Flexible input", "HRIS, payroll, spreadsheets or CSV import."],
                    ["Real-world output", "From data to sourcing, delivery and tracking."],
                  ]).map(([title, copy]) => (
                <div key={title} className="rounded-2xl border border-border bg-background/35 p-4">
                  <p className="font-display text-lg font-bold text-foreground">{title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-5xl lg:mt-20">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto_1fr_auto_1fr]">
            <div className="rounded-[28px] border border-border-strong bg-card/95 p-6 shadow-soft">
              <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                {isItalian ? "Il tuo stack" : "Your stack"}
              </p>
              <div className="grid grid-cols-2 gap-2.5">
                {tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="flex items-center gap-3 rounded-xl border border-border bg-surface/60 px-3 py-3"
                  >
                    <span
                      className={`inline-flex h-9 min-w-9 items-center justify-center rounded-lg border px-2 font-display text-xs font-extrabold uppercase tracking-[0.12em] ${tool.brandClass} ${tool.tileClass}`}
                    >
                      {tool.mark}
                    </span>
                    <span className="text-xs font-semibold text-foreground">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden justify-center lg:flex">
              <ArrowRight className="size-5 text-accent/60" strokeWidth={1.5} />
            </div>

            <div className="relative rounded-[28px] border border-accent/40 bg-card/95 p-8 text-center shadow-glow">
              <div
                className="absolute inset-0 -z-10 rounded-[28px] bg-[radial-gradient(circle_at_50%_50%,hsl(var(--accent)/0.18),transparent_70%)]"
                aria-hidden
              />
              <div className="mx-auto flex size-20 items-center justify-center rounded-2xl border border-accent/40 bg-accent/10">
                <Logo size={46} />
              </div>
              <p className="mt-4 font-display text-xl font-extrabold text-foreground">Remvy</p>
              <p className="mt-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                {isItalian ? "Recognition execution engine" : "Recognition execution engine"}
              </p>
            </div>

            <div className="hidden justify-center lg:flex">
              <ArrowRight className="size-5 text-accent/60" strokeWidth={1.5} />
            </div>

            <div className="rounded-[28px] border border-border-strong bg-card/95 p-6 shadow-soft">
              <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                {isItalian ? "Execution nel mondo reale" : "Real-world execution"}
              </p>
              <div className="space-y-2.5">
                {outputs.map(({ name, icon: Icon }) => (
                  <div
                    key={name}
                    className="flex items-center gap-3 rounded-xl border border-border bg-surface/60 px-3 py-3"
                  >
                    <Icon className="size-4 text-accent" strokeWidth={1.5} />
                    <span className="text-xs font-medium text-foreground">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <p className="mt-12 text-center text-sm text-muted-foreground">
          {isItalian
            ? "Se non vedi il tuo tool, Remvy funziona anche con CSV upload o import manuale."
            : "If you do not see your tool here, Remvy also works with CSV upload or manual import."}
        </p>
      </div>
    </section>
  );
};

export default Integrations;
