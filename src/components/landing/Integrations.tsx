import { PlugZap } from "lucide-react";

const Integrations = () => {
  return (
    <section id="integrations" className="relative border-t border-border bg-surface/30">
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/45 to-transparent"
        aria-hidden
      />

      <div className="mx-auto w-full max-w-[1240px] px-6 py-14 lg:px-10 lg:py-20">
        <div className="rounded-full border border-border-strong bg-card/55 px-5 py-4 shadow-soft">
          <div className="flex flex-col items-center justify-center gap-3 text-center text-sm font-medium text-muted-foreground sm:flex-row">
            <PlugZap className="size-4 text-accent" strokeWidth={1.7} />
            <span>
              Integrazioni HRIS in arrivo — Zucchetti · Factorial · Personio · BambooHR · TeamSystem · SAP
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
