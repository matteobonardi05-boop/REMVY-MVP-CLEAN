import { Wordmark } from "./Logo";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-start justify-between gap-6 px-6 py-10 lg:flex-row lg:items-center lg:px-10">
        <Wordmark />

        <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
          <a href="#how" className="hover:text-foreground">How it works</a>
          <a href="#moments" className="hover:text-foreground">Moments</a>
          <a href="#cta" className="hover:text-foreground">Pilot</a>
          <a href="#" className="hover:text-foreground">Privacy</a>
        </div>

        <p className="text-sm text-muted-foreground">© 2025 Remvy. Built for Italian SMEs.</p>
      </div>
    </footer>
  );
};

export default Footer;
