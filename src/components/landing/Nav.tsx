import { Wordmark } from "./Logo";
import { useLocation } from "react-router-dom";

const Nav = () => {
  const { pathname } = useLocation();
  const isItalian = pathname.startsWith("/it");
  const homeHref = isItalian ? "/it#top" : "/#top";
  const links = isItalian
    ? [
        ["Why choose us", "#why-choose-us"],
        ["Features", "#features"],
        ["How it works", "#how"],
        ["Services", "#services"],
        ["Contact", "#cta"],
      ]
    : [
        ["Why choose us", "#why-choose-us"],
        ["Features", "#features"],
        ["How it works", "#how"],
        ["Services", "#services"],
        ["Contact", "#cta"],
      ];

  return (
    <header className="sticky top-0 z-30 w-full border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <nav className="mx-auto flex w-full max-w-[1240px] flex-wrap items-center justify-between gap-3 px-5 py-4 sm:px-6 lg:px-10">
        <a href={homeHref} aria-label="Remvy home">
          <Wordmark size={46} />
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden rounded-full border border-border-strong bg-surface/45 p-1 text-xs font-semibold md:flex">
            <a
              href="/"
              className={`rounded-full px-2.5 py-1 transition-colors ${!isItalian ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:text-foreground"}`}
            >
              EN
            </a>
            <a
              href="/it"
              className={`rounded-full px-2.5 py-1 transition-colors ${isItalian ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:text-foreground"}`}
            >
              IT
            </a>
          </div>
          <a
            href="#cta"
            className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-cta transition-all hover:shadow-glow hover:-translate-y-px"
          >
            Book a pilot
          </a>
        </div>

        <div className="flex w-full justify-center md:hidden">
          <div className="rounded-full border border-border-strong bg-surface/55 p-1 text-xs font-semibold shadow-soft">
            <a
              href="/"
              className={`rounded-full px-3 py-1 transition-colors ${!isItalian ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:text-foreground"}`}
            >
              EN
            </a>
            <a
              href="/it"
              className={`rounded-full px-3 py-1 transition-colors ${isItalian ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:text-foreground"}`}
            >
              IT
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
