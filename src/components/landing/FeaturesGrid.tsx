import { BarChart3, Boxes, Database, Gift, Headphones, SlidersHorizontal } from "lucide-react";

import { useIsItalian } from "@/lib/locale";

const FeaturesGrid = () => {
  const isItalian = useIsItalian();
  const features = isItalian
    ? [
        {
          icon: Gift,
          title: "Gifting fisico",
          body: "Crediamo nei gift fisici: creano momenti condivisi, convivialità in ufficio e celebrazioni reali per successi e ricorrenze.",
        },
        {
          icon: Database,
          title: "Set-up rapido",
          body: "Importiamo anagrafiche team o contatti via CSV o HRIS, senza lavoro manuale ricorrente per il responsabile.",
        },
        {
          icon: SlidersHorizontal,
          title: "Personalizzazione momenti",
          body: "Scegli i pacchetti migliori tramite fornitori locali. Puoi modificarli da dashboard o crearli con noi.",
        },
        {
          icon: Boxes,
          title: "Scalabilità illimitata",
          body: "Gestiamo fornitori, ordini, ritardi, delivery, budget mensile, reminder e comunicazioni operative end-to-end.",
        },
        {
          icon: Headphones,
          title: "Supporto continuo",
          body: "Supporto real time via telefono e chat Slack dedicata per modifiche, problemi o miglioramenti dei pacchetti.",
        },
        {
          icon: BarChart3,
          title: "Strategia dati",
          body: "Report mensili su momenti gestiti, budget reale, feedback raccolti e piano operativo del mese successivo.",
        },
      ]
    : [
        {
          icon: Gift,
          title: "Physical gifting",
          body: "We believe physical gifts create shared moments, office conviviality and real celebrations for milestones and wins.",
        },
        {
          icon: Database,
          title: "Fast set-up",
          body: "We import team or contact records via CSV or HRIS, with no recurring manual work for the owner.",
        },
        {
          icon: SlidersHorizontal,
          title: "Moment personalization",
          body: "Choose the right packages through local suppliers. Edit them from the dashboard or build them with us.",
        },
        {
          icon: Boxes,
          title: "Unlimited scalability",
          body: "We manage suppliers, orders, delays, delivery, monthly budgets, reminders and operating communications end-to-end.",
        },
        {
          icon: Headphones,
          title: "Ongoing support",
          body: "Real-time support by phone and dedicated Slack chat for issues, changes or package improvements.",
        },
        {
          icon: BarChart3,
          title: "Data strategist",
          body: "Monthly reports on managed moments, real spend, collected feedback and next-month operating plans.",
        },
      ];

  return (
    <section id="features" className="relative border-t border-border bg-background">
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/45 to-transparent"
        aria-hidden
      />
      <div className="mx-auto w-full max-w-[1240px] px-5 py-16 sm:px-6 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-accent">
            <span className="size-2 rounded-full bg-accent shadow-[0_0_12px_hsl(var(--accent)/0.75)]" />
            Features
          </div>
          <h2 className="mx-auto mt-7 max-w-4xl [font-family:Georgia,'Times_New_Roman',serif] text-[clamp(2.15rem,5vw,4.25rem)] font-normal leading-[1.08] tracking-[-0.055em] text-foreground">
            <span className="block">{isItalian ? "I pilastri fondamentali" : "The fundamental pillars"}</span>
            <span className="block">{isItalian ? "che ci rendono unici" : "that make us unique"}</span>
          </h2>
        </div>

        <div className="mt-12 flex snap-x gap-4 overflow-x-auto pb-4 md:mx-auto md:mt-16 md:grid md:max-w-6xl md:snap-none md:grid-cols-2 md:gap-x-12 md:gap-y-14 md:overflow-visible md:pb-0 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, body }) => (
            <div key={title} className="min-w-[82%] snap-center rounded-[28px] border border-border bg-card/55 p-6 text-center shadow-soft md:min-w-0 md:rounded-none md:border-0 md:bg-transparent md:p-0 md:shadow-none">
              <div className="mx-auto grid size-16 place-items-center rounded-2xl border border-accent/35 bg-accent text-accent-foreground shadow-[0_0_28px_hsl(var(--accent)/0.32)]">
                <Icon className="size-7" strokeWidth={1.9} />
              </div>
              <h3 className="mt-7 font-display text-2xl font-extrabold tracking-[-0.04em] text-foreground">{title}</h3>
              <p className="mx-auto mt-4 max-w-[31ch] text-base font-medium leading-relaxed text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
