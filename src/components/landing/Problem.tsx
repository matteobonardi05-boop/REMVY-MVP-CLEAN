import { CalendarX, Scale, EyeOff } from "lucide-react";

const items = [
  {
    icon: CalendarX,
    title: "Moments get forgotten",
    body: "Without a system, key dates slip through. No one orders the gift. No one signs the card.",
  },
  {
    icon: Scale,
    title: "Inconsistent execution",
    body: "Some employees get a curated gift, others get nothing. The difference shows — and people notice.",
  },
  {
    icon: EyeOff,
    title: "Zero coordination",
    body: "Last-minute orders, scattered budgets, no delivery tracking. Hours wasted every month on logistics.",
  },
];

const Problem = () => {
  return (
    <section id="problem" className="relative border-t border-border">
      <div className="mx-auto w-full max-w-[1240px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground lg:text-5xl">
            The hidden cost of doing it manually
          </h2>
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

export default Problem;
