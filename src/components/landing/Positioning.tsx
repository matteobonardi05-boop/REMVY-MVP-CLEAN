const Positioning = () => {
  return (
    <section id="positioning" className="relative border-t border-border bg-primary text-primary-foreground">
      <div className="absolute inset-0 bg-grid opacity-[0.07]" aria-hidden />
      <div className="relative mx-auto w-full max-w-[1320px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              ◆ Positioning
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold leading-[1.1] tracking-tight lg:text-6xl">
              Not another HR tool.
              <br />
              <span className="text-accent">Not a gifting service.</span>
            </h2>
            <p className="mt-6 max-w-[58ch] text-lg leading-relaxed text-primary-foreground/70">
              Remvy is an{" "}
              <span className="font-semibold text-primary-foreground">
                Employee Moments Infrastructure
              </span>{" "}
              — a system designed to remove a fragmented, manual process from your company.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="grid gap-3 font-mono text-sm">
              {[
                ["NOT", "Engagement platform"],
                ["NOT", "Recognition app"],
                ["NOT", "Gifting marketplace"],
                ["IS", "Operational infrastructure"],
              ].map(([k, v], i) => {
                const isPos = k === "IS";
                return (
                  <div
                    key={i}
                    className={`flex items-center gap-4 rounded-md border px-4 py-3 ${
                      isPos
                        ? "border-accent/40 bg-accent/10"
                        : "border-primary-foreground/10 bg-primary-foreground/[0.03]"
                    }`}
                  >
                    <span
                      className={`w-10 text-[11px] font-bold tracking-wider ${
                        isPos ? "text-accent" : "text-primary-foreground/40"
                      }`}
                    >
                      {k}
                    </span>
                    <span
                      className={`flex-1 ${
                        isPos
                          ? "font-semibold text-primary-foreground"
                          : "text-primary-foreground/50 line-through"
                      }`}
                    >
                      {v}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Positioning;
