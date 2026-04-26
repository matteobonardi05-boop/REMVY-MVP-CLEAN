import { Wordmark } from "./Logo";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-start justify-between gap-6 px-6 py-10 lg:flex-row lg:items-center lg:px-10">
        <Wordmark size={52} />

        <p className="text-sm text-muted-foreground">© 2026 Remvy</p>
      </div>
    </footer>
  );
};

export default Footer;
