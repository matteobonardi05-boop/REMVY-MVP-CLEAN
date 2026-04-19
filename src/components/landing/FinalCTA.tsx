import { ArrowRight } from "lucide-react";
import { useState } from "react";

const FinalCTA = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="cta" className="relative border-t border-border bg-surface/40">
      <div className="mx-auto w-full max-w-[1320px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="relative overflow-hidden rounded-lg border border-border-strong/40 bg-surface p-10 shadow-elegant lg:p-16">
          <div className="absolute inset-0 bg-dots opacity-50" aria-hidden />
          <div
            className="absolute -right-32 -top-32 size-[420px] rounded-full"
            style={{ background: "var(--gradient-glow)" }}
            aria-hidden
          />

          <div className="relative grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-foreground/60">
                ◆ Early access
              </span>
              <h2 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight text-primary lg:text-6xl">
                Be among the first companies running on Remvy.
              </h2>
              <p className="mt-5 max-w-[52ch] text-base leading-relaxed text-primary/60">
                Limited beta cohort. We onboard partners 1:1 to make sure the system fits
                your team's actual workflow.
              </p>
            </div>

            <div className="lg:col-span-5">
              {!submitted ? (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (email) setSubmitted(true);
                  }}
                  className="flex flex-col gap-3 rounded-md border border-border-strong/40 bg-background p-3"
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="work@company.com"
                    className="w-full rounded-md bg-transparent px-3 py-3 text-sm text-primary placeholder:text-primary/40 focus:outline-none"
                    aria-label="Work email"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-cta transition-all hover:translate-y-[-1px] hover:shadow-elegant"
                  >
                    Request early access
                    <ArrowRight className="size-4" />
                  </button>
                  <a
                    href="#"
                    className="text-center text-xs font-medium text-primary/60 underline-offset-4 hover:text-primary hover:underline"
                  >
                    or book a 20-min call →
                  </a>
                </form>
              ) : (
                <div className="rounded-md border border-accent/40 bg-accent/10 p-6">
                  <div className="font-mono text-[11px] uppercase tracking-wider text-accent-foreground/70">
                    ▸ Request received
                  </div>
                  <p className="mt-2 text-sm text-primary">
                    We'll be in touch shortly at <span className="font-semibold">{email}</span>.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
