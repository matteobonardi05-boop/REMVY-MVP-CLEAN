const moments = [
  { emoji: "🎂", title: "Cakes", body: "Artisan birthday cakes from local bakers, delivered to office or home." },
  { emoji: "💐", title: "Flowers", body: "Curated bouquets for births, condolences and special occasions." },
  { emoji: "👕", title: "Branded Merch", body: "Quality apparel and accessories for anniversaries and milestones." },
  { emoji: "📦", title: "Welcome Kits", body: "Onboarding boxes delivered day one — from laptop sleeves to local treats." },
  { emoji: "🎟️", title: "Experience Gifts", body: "Dinners, spa days, weekend getaways for retention milestones." },
];

const Moments = () => {
  return (
    <section id="moments" className="relative border-t border-border">
      <div className="mx-auto w-full max-w-[1240px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground lg:text-5xl">
            Every moment, handled.
          </h2>
          <p className="mt-5 text-base text-muted-foreground">
            From simple gestures to fully customized experiences.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-5">
          {moments.map((m) => (
            <div
              key={m.title}
              className="rounded-2xl border border-border bg-card p-6 transition-all hover:border-accent/40 hover:shadow-glow"
            >
              <div className="text-3xl">{m.emoji}</div>
              <h3 className="mt-4 font-display text-base font-bold text-foreground">{m.title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{m.body}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          Physical, digital or hybrid — Remvy sources, ships and tracks every gift end-to-end.
        </p>
      </div>
    </section>
  );
};

export default Moments;
