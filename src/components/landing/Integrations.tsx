import { Users, Building2, Sheet, MessageSquare, Table2, Mail, Wallet, ArrowRight, Truck, Gift, BarChart3 } from "lucide-react";
import Logo from "./Logo";

const tools = [
  { name: "Factorial", icon: Users, group: "HR" },
  { name: "Personio", icon: Building2, group: "HR" },
  { name: "Payroll", icon: Wallet, group: "Payroll" },
  { name: "Google Sheets", icon: Sheet, group: "Data" },
  { name: "Excel", icon: Table2, group: "Data" },
  { name: "Slack", icon: MessageSquare, group: "Comms" },
  { name: "Email", icon: Mail, group: "Comms" },
];

const outputs = [
  { name: "Gift sourcing", icon: Gift },
  { name: "Delivery", icon: Truck },
  { name: "Tracking", icon: BarChart3 },
];

const Integrations = () => {
  return (
    <section id="integrations" className="relative border-t border-border bg-surface/30">
      <div className="mx-auto w-full max-w-[1240px] px-6 py-28 lg:px-10 lg:py-40">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-accent">
            Integrations
          </span>
          <h2 className="mt-3 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground lg:text-6xl">
            Built to work with the tools you already use.
          </h2>
          <p className="mt-5 text-base text-muted-foreground lg:text-lg">
            Remvy connects to HR software, payroll, spreadsheets, Slack and email. No migration. No
            disruption. Remvy fits your existing workflow.
          </p>
        </div>

        {/* Ecosystem diagram */}
        <div className="mx-auto mt-16 max-w-5xl lg:mt-20">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto_1fr_auto_1fr]">
            {/* Inputs */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                Your stack
              </p>
              <div className="grid grid-cols-2 gap-2.5">
                {tools.slice(0, 6).map(({ name, icon: Icon }) => (
                  <div
                    key={name}
                    className="flex items-center gap-2 rounded-lg border border-border bg-surface/60 px-3 py-2.5"
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

            {/* Remvy core */}
            <div className="relative rounded-2xl border border-accent/40 bg-card p-8 text-center shadow-glow">
              <div className="absolute inset-0 -z-10 rounded-2xl bg-[radial-gradient(circle_at_50%_50%,hsl(var(--accent)/0.18),transparent_70%)]" aria-hidden />
              <div className="mx-auto flex size-14 items-center justify-center rounded-2xl border border-accent/40 bg-accent/10">
                <Logo size={28} />
              </div>
              <p className="mt-4 font-display text-lg font-extrabold text-foreground">Remvy</p>
              <p className="mt-1 text-xs text-muted-foreground">Execution engine</p>
            </div>

            <div className="hidden justify-center lg:flex">
              <ArrowRight className="size-5 text-accent/60" strokeWidth={1.5} />
            </div>

            {/* Outputs */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                Real-world execution
              </p>
              <div className="space-y-2.5">
                {outputs.map(({ name, icon: Icon }) => (
                  <div
                    key={name}
                    className="flex items-center gap-3 rounded-lg border border-border bg-surface/60 px-3 py-2.5"
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
          Don't see your tool? Remvy works with any system via CSV or manual import.
        </p>
      </div>
    </section>
  );
};

export default Integrations;
