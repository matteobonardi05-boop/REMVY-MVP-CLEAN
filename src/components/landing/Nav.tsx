import { ArrowRight } from "lucide-react";

const Nav = () => {
  return (
    <header className="relative z-20 w-full border-b border-border/60 bg-background/70 backdrop-blur-md">
      <nav className="mx-auto flex w-full max-w-[1320px] items-center justify-between px-6 py-5 lg:px-10">
        <a href="#top" className="flex items-center gap-2.5">
          <div className="relative size-5 overflow-hidden rounded-sm bg-primary">
            <div className="absolute bottom-0 right-0 size-2 bg-accent" />
          </div>
          <span className="font-display text-lg font-bold uppercase tracking-[0.18em] text-primary">
            Remvy
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          <a href="#problem" className="text-sm font-medium text-primary/70 transition-colors hover:text-primary">
            Problem
          </a>
          <a href="#solution" className="text-sm font-medium text-primary/70 transition-colors hover:text-primary">
            Platform
          </a>
          <a href="#how" className="text-sm font-medium text-primary/70 transition-colors hover:text-primary">
            How it works
          </a>
          <a href="#positioning" className="text-sm font-medium text-primary/70 transition-colors hover:text-primary">
            Why Remvy
          </a>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#cta"
            className="hidden text-sm font-medium text-primary transition-colors hover:text-primary/70 sm:inline-block"
          >
            Sign in
          </a>
          <a
            href="#cta"
            className="inline-flex items-center gap-1.5 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground shadow-cta transition-all hover:translate-y-[-1px] hover:shadow-elegant"
          >
            Request access
            <ArrowRight className="size-3.5" />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
