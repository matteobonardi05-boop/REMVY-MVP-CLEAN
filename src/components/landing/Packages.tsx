import { ArrowRight, BriefcaseBusiness, CakeSlice, Flower2, Lock, Sparkles, type LucideIcon } from "lucide-react";

import { useIsItalian } from "@/lib/locale";

type Moment = {
  labelIt: string;
  labelEn: string;
  copyIt: string;
  copyEn: string;
  icon: LucideIcon;
  isComingSoon?: boolean;
};

type Package = {
  momentIt: string;
  momentEn: string;
  name: string;
  copyIt: string;
  copyEn: string;
  isComingSoon?: boolean;
};

const moments: Moment[] = [
  {
    labelIt: "Compleanni",
    labelEn: "Birthdays",
    copyIt: "Il compleanno è il momento più semplice da riconoscere bene, ma il primo che salta quando il team cresce.",
    copyEn: "Birthdays are the easiest moment to recognize well, and the first to break as teams grow.",
    icon: CakeSlice,
  },
  {
    labelIt: "Onboarding",
    labelEn: "Onboarding",
    copyIt: "Il primo giorno crea appartenenza: automatizzarlo assicura uno standard curato per ogni nuovo ingresso.",
    copyEn: "Day one builds belonging: automating it gives every new hire the same thoughtful standard.",
    icon: BriefcaseBusiness,
  },
  {
    labelIt: "Work anniversary",
    labelEn: "Work anniversary",
    copyIt: "Roadmap",
    copyEn: "Roadmap",
    icon: Sparkles,
    isComingSoon: true,
  },
  {
    labelIt: "Milestone",
    labelEn: "Milestone",
    copyIt: "Roadmap",
    copyEn: "Roadmap",
    icon: Sparkles,
    isComingSoon: true,
  },
  {
    labelIt: "Team moment",
    labelEn: "Team moment",
    copyIt: "Roadmap",
    copyEn: "Roadmap",
    icon: Flower2,
    isComingSoon: true,
  },
  {
    labelIt: "Obiettivi",
    labelEn: "Objectives",
    copyIt: "Roadmap",
    copyEn: "Roadmap",
    icon: Lock,
    isComingSoon: true,
  },
];

const packages: Package[] = [
  {
    momentIt: "Compleanno",
    momentEn: "Birthday",
    name: "Birthday Signature",
    copyIt: "Torta + card personalizzata.",
    copyEn: "Cake + personalized card.",
  },
  {
    momentIt: "Compleanno",
    momentEn: "Birthday",
    name: "Floral Birthday",
    copyIt: "Fiori + card personalizzata.",
    copyEn: "Flowers + personalized card.",
  },
  {
    momentIt: "Onboarding",
    momentEn: "Onboarding",
    name: "Branded Welcome",
    copyIt: "Merch + card personalizzata.",
    copyEn: "Merch + personalized card.",
  },
  {
    momentIt: "Onboarding",
    momentEn: "Onboarding",
    name: "Work Essentials",
    copyIt: "Gadget aziendali + card personalizzata.",
    copyEn: "Company gadgets + personalized card.",
  },
  {
    momentIt: "Milestone",
    momentEn: "Milestone",
    name: "Milestone Signature",
    copyIt: "Prossimamente",
    copyEn: "Coming soon",
    isComingSoon: true,
  },
  {
    momentIt: "Anniversary",
    momentEn: "Anniversary",
    name: "Tenure Tribute",
    copyIt: "Prossimamente",
    copyEn: "Coming soon",
    isComingSoon: true,
  },
  {
    momentIt: "Onboarding",
    momentEn: "Onboarding",
    name: "Executive Arrival",
    copyIt: "Prossimamente",
    copyEn: "Coming soon",
    isComingSoon: true,
  },
];

const Packages = () => {
  const isItalian = useIsItalian();
  const activeMoments = moments.filter((moment) => !moment.isComingSoon);
  const comingSoonMoments = moments.filter((moment) => moment.isComingSoon);
  const activePackages = packages.filter((item) => !item.isComingSoon);
  const comingSoonPackages = packages.filter((item) => item.isComingSoon);

  return (
    <section id="packages" className="relative overflow-hidden border-t border-border bg-surface/20">
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/45 to-transparent"
        aria-hidden
      />

      <div className="mx-auto w-full max-w-[1240px] px-6 py-16 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-border-strong bg-card/60 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
            {isItalian ? "Momenti attivi" : "Active moments"}
          </span>
          <h2 className="mt-5 font-display text-[clamp(2rem,9vw,3.6rem)] font-extrabold leading-[1.02] tracking-tight text-foreground">
            <span className="block">{isItalian ? "Partiamo dai momenti" : "We start with the"}</span>
            <span className="mt-2 block text-accent text-glow">{isItalian ? "che contano di più." : "moments that matter most."}</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[56ch] text-base leading-relaxed text-muted-foreground">
            {isItalian
              ? "Il pilot parte dai momenti più frequenti e visibili nella vita del team."
              : "The pilot starts with the most frequent and visible team moments."}
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {activeMoments.map((moment) => {
            const Icon = moment.icon;

            return (
              <div key={moment.labelEn} className="rounded-[28px] border border-border-strong bg-card/92 p-6 shadow-soft">
                <div className="inline-flex size-12 items-center justify-center rounded-2xl border border-accent/30 bg-accent/10">
                  <Icon className="size-5 text-accent" strokeWidth={1.7} />
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold text-foreground">
                  {isItalian ? moment.labelIt : moment.labelEn}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {isItalian ? moment.copyIt : moment.copyEn}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-5 rounded-[24px] border border-border bg-card/45 p-4 opacity-45">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface/70 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
              <Lock className="size-3" strokeWidth={1.8} />
              {isItalian ? "Prossimamente" : "Coming soon"}
            </span>
            {comingSoonMoments.map((moment) => (
              <span key={moment.labelEn} className="rounded-full border border-border-strong bg-background/35 px-3 py-1.5 text-xs text-muted-foreground">
                {isItalian ? moment.labelIt : moment.labelEn}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-14 rounded-[32px] border border-border-strong bg-card/88 p-5 shadow-elegant backdrop-blur lg:mt-20 lg:p-8">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-accent">
                {isItalian ? "Pacchetti attivi" : "Active packages"}
              </p>
              <h3 className="mt-3 font-display text-[clamp(1.9rem,8vw,3rem)] font-bold leading-tight text-foreground">
                <span className="block">{isItalian ? "Pacchetti chiari," : "Clear packages,"}</span>
                <span className="block text-accent text-glow">{isItalian ? "senza cataloghi inutili." : "without catalogue noise."}</span>
              </h3>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              {isItalian
                ? "Ogni combinazione resta personalizzabile per team, sede e tono aziendale."
                : "Each combination stays customizable by team, location and company tone."}
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {activePackages.map((item) => (
              <div key={item.name} className="rounded-[26px] border border-border bg-background/25 p-5 shadow-soft">
                <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-accent">
                  {isItalian ? item.momentIt : item.momentEn}
                </span>
                <h4 className="mt-5 font-display text-2xl font-bold leading-tight text-foreground">{item.name}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{isItalian ? item.copyIt : item.copyEn}</p>
                <div className="mt-6 flex items-center justify-end">
                  <a
                    href="#cta"
                    className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface/60 px-4 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-surface"
                  >
                    {isItalian ? "Configura" : "Configure"}
                    <ArrowRight className="size-3.5 text-accent" strokeWidth={1.8} />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-[24px] border border-border bg-background/20 p-4 opacity-45">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface/70 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
                <Lock className="size-3" strokeWidth={1.8} />
                {isItalian ? "Prossimamente" : "Coming soon"}
              </span>
              {comingSoonPackages.map((item) => (
                <span key={item.name} className="rounded-full border border-border-strong bg-card/50 px-3 py-1.5 text-xs text-muted-foreground">
                  {item.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
