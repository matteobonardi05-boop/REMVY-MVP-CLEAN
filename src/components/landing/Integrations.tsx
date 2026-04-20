import { Users, Building2, Sheet, MessageSquare, Table2, Mail } from "lucide-react";

const tools = [
  { name: "Factorial", icon: Users },
  { name: "Personio", icon: Building2 },
  { name: "Google Sheets", icon: Sheet },
  { name: "Slack", icon: MessageSquare },
  { name: "Excel", icon: Table2 },
  { name: "Email", icon: Mail },
];

const Integrations = () => {
  return (
    <section id="integrations" className="relative border-t border-border">
      <div className="mx-auto w-full max-w-[1240px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground lg:text-5xl">
            Built to work with the tools you already use.
          </h2>
          <p className="mt-5 text-base text-muted-foreground">
            Remvy connects to HR software, payroll, spreadsheets, Slack and email — no migration, no
            disruption. It fits your existing workflow.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {tools.map(({ name, icon: Icon }) => (
            <div
              key={name}
              className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card px-4 py-6 transition-all hover:border-accent/40 hover:shadow-glow"
            >
              <div className="grid size-11 place-items-center rounded-xl border border-border bg-surface text-accent">
                <Icon className="size-5" strokeWidth={1.5} />
              </div>
              <span className="text-xs font-medium text-foreground">{name}</span>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          Don't see your tool? Remvy works with any system via CSV or manual import.
        </p>
      </div>
    </section>
  );
};

export default Integrations;
