import { Wallet, Gift, SlidersHorizontal } from "lucide-react";

const items = [
  {
    icon: Wallet,
    title: "Budgets",
    body: "Set spending caps per moment type, role or seniority. Remvy keeps every order within budget automatically.",
  },
  {
    icon: Gift,
    title: "Types of gifts",
    body: "Pick the categories that fit your culture — cakes, flowers, branded merch, welcome kits, experiences.",
  },
  {
    icon: SlidersHorizontal,
    title: "Rules per role & event",
    body: "Different gifting for managers, new hires or 5-year milestones. Define logic once — Remvy applies it forever.",
  },
];

const YouDefine = () => {
  return (
    <section className="relative border-t border-border bg-surface/30">
      <div className="mx-auto w-full max-w-[1240px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground lg:text-5xl">
            You define the moment. <span className="text-accent text-glow">We handle everything else.</span>
          </h2>
          <p className="mt-5 text-base text-muted-foreground">
            Set your budgets, gifts and rules once. Remvy executes every moment automatically — no
            manual coordination, no spreadsheets.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {items.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="group relative rounded-2xl border border-border bg-card p-7 transition-all hover:border-accent/40 hover:shadow-glow"
            >
              <div className="mb-5 inline-flex size-11 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 text-accent">
                <Icon className="size-5" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YouDefine;