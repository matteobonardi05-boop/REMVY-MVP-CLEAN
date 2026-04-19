const Footer = () => {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col items-start justify-between gap-6 px-6 py-10 lg:flex-row lg:items-center lg:px-10">
        <div className="flex items-center gap-2.5">
          <div className="relative size-4 overflow-hidden rounded-sm bg-primary">
            <div className="absolute bottom-0 right-0 size-2 bg-accent" />
          </div>
          <span className="font-display text-sm font-bold uppercase tracking-[0.18em] text-primary">
            Remvy
          </span>
          <span className="ml-3 font-mono text-[11px] uppercase tracking-wider text-primary/40">
            Employee Moments Infrastructure
          </span>
        </div>
        <div className="flex items-center gap-6 font-mono text-xs uppercase tracking-wider text-primary/50">
          <a href="#" className="hover:text-primary">Privacy</a>
          <a href="#" className="hover:text-primary">Terms</a>
          <a href="#" className="hover:text-primary">Security</a>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
