const moments = [
  { emoji: "🎂", title: "Cakes", body: "Artisan birthday cakes from local bakers, delivered to office or home.", tag: "Local partners" },
  { emoji: "💐", title: "Flowers", body: "Curated bouquets for births, condolences and special occasions.", tag: "Same-day delivery" },
  { emoji: "👕", title: "Branded Merch", body: "Quality apparel and accessories for anniversaries and milestones.", tag: "Custom branded" },
  { emoji: "📦", title: "Welcome Kits", body: "Onboarding boxes delivered day one — from laptop sleeves to local treats.", tag: "Day-one delivery" },
  { emoji: "🎟️", title: "Experience Gifts", body: "Dinners, spa days, weekend getaways for retention milestones.", tag: "Premium vendors" },
];

const Moments = () => {
  return (
    <section id="moments" className="relative border-t border-border">
      <div className="mx-auto w-full max-w-[1240px] px-6 py-28 lg:px-10 lg:py-40">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-accent">Gifting catalogue</span>
          <h2 className="mt-3 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground lg:text-6xl">
            Every moment, handled.
          </h2>
          <p className="mt-5 text-base text-muted-foreground lg:text-lg">
            From simple gestures to fully customized experiences. We handle the logistics.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-5 md:grid-cols-5 lg:mt-20">
          {moments.map((m) => (
            <div
              key={m.title}
              className="group relative flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:border-accent/40 hover:shadow-glow"
            >
              <div className="text-4xl">{m.emoji}</div>
              <h3 className="mt-5 font-display text-base font-bold text-foreground">{m.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{m.body}</p>
              <span className="mt-5 inline-flex w-fit items-center rounded-full border border-border bg-surface/60 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                {m.tag}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-muted-foreground">
          Physical, digital or hybrid — Remvy sources, ships and tracks every gift end-to-end.
        </p>
      </div>
    </section>
  );
};

export default Moments;
