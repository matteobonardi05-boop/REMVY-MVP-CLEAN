import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section id="cta" className="relative border-t border-border bg-background">
      <div className="mx-auto w-full max-w-[1240px] px-5 py-16 sm:px-6 lg:px-10 lg:py-28">
        <div className="relative overflow-hidden rounded-[34px] border border-border-strong bg-[linear-gradient(135deg,hsl(var(--surface)/0.94),hsl(var(--card)/0.98))] p-6 shadow-elegant sm:p-8 lg:rounded-[44px] lg:p-12">
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,hsl(var(--background)/0.18),transparent_45%)]"
            aria-hidden
          />
          <div className="relative">
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-accent">
              <span className="size-2 rounded-full bg-accent shadow-[0_0_12px_hsl(var(--accent)/0.75)]" />
              Contact us
            </div>

            <h2
              className="mt-9 max-w-none whitespace-nowrap [font-family:Georgia,'Times_New_Roman',serif] font-normal leading-[1.08] tracking-[-0.06em] text-foreground"
              style={{ fontSize: "clamp(48px, 4.5vw, 60px)" }}
            >
              <span className="sm:hidden">Get in touch!</span>
              <span className="hidden sm:inline">Get in touch con il founder Matteo!</span>
            </h2>

            <form className="mt-12 grid gap-4" action="mailto:mattobonardi05@gmail.com" method="post" encType="text/plain">
              <div className="grid gap-4 md:grid-cols-2">
                <input className={inputClassName} name="first_name" placeholder="First name" type="text" />
                <input className={inputClassName} name="last_name" placeholder="Last name" type="text" />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <input className={inputClassName} name="phone" placeholder="Phone number" type="tel" />
                <input className={inputClassName} name="email" placeholder="Email" type="email" />
              </div>

              <textarea
                className={`${inputClassName} min-h-[120px] resize-none pt-5`}
                name="message"
                placeholder="Tell us about: your company, location, number of people in the team, moments you want to manage, current internal process..."
              />

              <button
                type="submit"
                className="mt-2 inline-flex w-fit items-center justify-center rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-cta transition-all hover:-translate-y-px hover:shadow-glow"
              >
                Submit form
                <ArrowRight className="ml-2 size-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const inputClassName =
  "w-full rounded-2xl border border-border-strong bg-background/92 px-5 py-4 text-base font-medium text-black outline-none transition-all placeholder:text-muted-foreground focus:border-accent focus:ring-4 focus:ring-accent/18";

export default FinalCTA;
