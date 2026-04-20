import { Wordmark } from "./Logo";

const Nav = () => {
  return (
    <header className="sticky top-0 z-30 w-full border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <nav className="mx-auto flex w-full max-w-[1240px] items-center justify-between px-6 py-4 lg:px-10">
        <a href="#top" aria-label="Remvy home">
          <Wordmark />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {[
            ["How it works", "#how"],
            ["Moments", "#moments"],
            ["Integrations", "#integrations"],
            ["Pilot", "#cta"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {label}
            </a>
          ))}
        </div>

        <a
          href="#cta"
          className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-cta transition-all hover:shadow-glow hover:-translate-y-px"
        >
          Book a pilot
        </a>
      </nav>
    </header>
  );
};

export default Nav;
