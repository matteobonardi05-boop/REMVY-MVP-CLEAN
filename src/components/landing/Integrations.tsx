import {
  ArrowRight,
  BarChart3,
  Building2,
  Gift,
  Mail,
  MessageSquare,
  Sheet,
  Table2,
  Truck,
  Users,
  Wallet,
} from "lucide-react";

import Logo from "./Logo";

const tools = [
  { name: "Factorial", icon: Users },
  { name: "Personio", icon: Building2 },
  { name: "Payroll", icon: Wallet },
  { name: "Google Sheets", icon: Sheet },
  { name: "Excel", icon: Table2 },
  { name: "Slack", icon: MessageSquare },
  { name: "Email", icon: Mail },
];

const outputs = [
  { name: "Gift sourcing", icon: Gift },
  { name: "Delivery", icon: Truck },
  { name: "Tracking", icon: BarChart3 },
];

const Integrations = () => {
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
              Integrations
            </span>
            <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.02] tracking-tight text-foreground lg:text-6xl">
              Built to work with the tools you already use.
            </h2>
            <p className="mt-5 max-w-[62ch] text-base leading-relaxed text-muted-foreground lg:text-lg">
              Remvy connects with HR software, payroll, spreadsheets, Slack and email. No migration.
              No disruption. Just a smoother way to operationalize recognition.
            </p>
          </div>

          <div className="rounded-[28px] border border-border-strong bg-card/90 p-6 shadow-soft">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-accent">
              Integration principle
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {[
                ["No new stack", "Works with your current systems and manual files."],
                ["Flexible input", "HRIS, payroll, spreadsheets or CSV import."],
                ["Real-world output", "From data to sourcing, delivery and tracking."],
              ].map(([title, copy]) => (
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
                Your stack
              </p>
              <div className="grid grid-cols-2 gap-2.5">
                {tools.map(({ name, icon: Icon }) => (
                  <div
                    key={name}
                    className="flex items-center gap-2 rounded-xl border border-border bg-surface/60 px-3 py-3"
                  >
                    <Icon className="size-4 text-accent" strokeWidth={1.5} />
                    <span className="text-xs font-medium text-foreground">{name}</span>
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
              <div className="mx-auto flex size-16 items-center justify-center rounded-2xl border border-accent/40 bg-accent/10">
                <Logo size={30} />
              </div>
              <p className="mt-4 font-display text-xl font-extrabold text-foreground">Remvy</p>
              <p className="mt-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                Recognition execution engine
              </p>
            </div>

            <div className="hidden justify-center lg:flex">
              <ArrowRight className="size-5 text-accent/60" strokeWidth={1.5} />
            </div>

            <div className="rounded-[28px] border border-border-strong bg-card/95 p-6 shadow-soft">
              <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Real-world execution
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
          Do not see your tool? Remvy also works with CSV upload or manual import.
        </p>
      </div>
    </section>
  );
};

export default Integrations;
