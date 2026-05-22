import { ArrowRight } from "lucide-react";

import { useIsItalian } from "@/lib/locale";

const SUPPLIER_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScVkiGSDwBf6z2Bxv2GlCU0Au5u8ddeIJfGCLAOhlA09PFjxQ/viewform?usp=publish-editor";

const SupplierNetworkCTA = () => {
  const isItalian = useIsItalian();
  const content = isItalian
    ? {
        badge: "Supplier network",
        title: "Unisciti al network locale Remvy",
        body:
          "L'iscrizione è gratuita. Ti contatteremo quando aziende vicine alla tua attività attiveranno Remvy e avranno bisogno di fornitori locali affidabili.",
        button: "Join supplier network",
      }
    : {
        badge: "Supplier network",
        title: "Join Remvy's local supplier network",
        body:
          "Joining is free. We will contact you when companies near your location activate Remvy and need trusted local suppliers.",
        button: "Join supplier network",
      };

  return (
    <section id="suppliers" className="relative border-t border-border bg-background">
      <div className="mx-auto w-full max-w-[1240px] px-5 pb-16 sm:px-6 lg:px-10 lg:pb-28">
        <div className="rounded-[34px] border border-border-strong bg-[linear-gradient(135deg,hsl(var(--card)/0.98),hsl(var(--surface)/0.88))] p-6 shadow-elegant sm:p-8 lg:rounded-[44px] lg:p-12">
          <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
            <div>
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-accent">
                <span className="size-2 rounded-full bg-accent shadow-[0_0_12px_hsl(var(--accent)/0.75)]" />
                {content.badge}
              </div>

              <h2 className="mx-auto mt-8 max-w-[13ch] [font-family:Georgia,'Times_New_Roman',serif] text-[clamp(2.6rem,5vw,4.25rem)] font-normal leading-[1.02] tracking-[-0.06em] text-foreground">
                {content.title}
              </h2>

              <p className="mx-auto mt-6 max-w-[62ch] text-base font-medium leading-relaxed text-muted-foreground lg:text-lg">
                {content.body}
              </p>
            </div>

            <a
              href={SUPPLIER_FORM_URL}
              className="mt-9 inline-flex w-fit items-center justify-center rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-cta transition-all hover:-translate-y-px hover:shadow-glow"
            >
              {content.button}
              <ArrowRight className="ml-2 size-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupplierNetworkCTA;
