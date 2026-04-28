import { MapPin } from "lucide-react";

import { useIsItalian } from "@/lib/locale";
import DashboardMock from "./DashboardMock";

const Hero = () => {
  const isItalian = useIsItalian();
  const t = isItalian
    ? {
        moreCities: "More coming soon",
        badge: "Employee moments operating system",
        line1: "Tutti gli employee moments",
        line2: "gestiti automaticamente",
        line3: "senza perdite di tempo interne",
        subtitle: "Carichi il team una volta, definisci le regole e Remvy gestisce reminder, tracking, sourcing, delivery e feedback.",
        body: "Costruito per team attenti alla cultura interna che vogliono automatizzare l'intero processo e trasformare ogni employee moment in un experience costante, memorabile. Compleanni, onboarding, anniversari lavorativi e milestone funzionano in modo coerente senza dipendere da memoria, spreadsheet, chat o follow-up\u00A0interni.",
        primary: "Attiva un pilot",
        secondary: "Guarda il workflow",
        proof: [
          ["Non è un tool HR", "Si appoggia ai flussi esistenti e rimuove un processo operativo, invece di crearne uno nuovo."],
          ["Non è solo gifting", "Il gift è l'output fisico. Il valore è coordinare regole, timing, fornitori e delivery."],
          ["Sistema operativo", "Ogni momento viene tracciato, preparato, consegnato e misurato con lo stesso standard."],
        ],
        note: "Ideale per team con più di 20 dipendenti, dove la gestione informale inizia a rompersi con la crescita.",
      }
    : {
        moreCities: "More coming soon",
        badge: "Employee moments operating system",
        line1: "Every employee moments",
        line2: "handled automatically",
        line3: "without internal time-waste",
        subtitle: "Upload the team once, define the rules and Remvy handles reminders, tracking, sourcing, delivery and feedback.",
        body: "Built for culture-oriented teams that want to automate the entire process and turn every employee moment into a consistent, memorable experience. Birthdays, onboarding, work anniversaries and milestones run consistently without relying on memory, spreadsheets, chats or internal follow-up.",
        primary: "Start a pilot",
        secondary: "View the workflow",
        proof: [
          ["Not an HR tool", "It sits on top of your current flow and removes an operational process instead of adding one."],
          ["Not just gifting", "The gift is the physical output. The value is coordinating rules, timing, suppliers and delivery."],
          ["Operating system", "Every moment is tracked, prepared, delivered and measured with the same standard."],
        ],
        note: "Ideal for teams with more than 20 employees, where informal coordination starts breaking as the company grows.",
      };

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-25" aria-hidden />
      <div
        className="absolute left-1/2 top-0 -z-0 h-[520px] w-[900px] -translate-x-1/2 bg-[radial-gradient(circle_at_50%_0%,hsl(var(--accent)/0.28),transparent_60%)]"
        aria-hidden
      />
      <div
        className="absolute -left-24 top-24 -z-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,hsl(var(--accent)/0.18),transparent_70%)] blur-3xl"
        aria-hidden
      />
      <div
        className="absolute -right-28 top-40 -z-0 h-80 w-80 rounded-full bg-[radial-gradient(circle,hsl(12_70%_72%/0.14),transparent_72%)] blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-[1240px] px-6 pb-24 pt-24 lg:px-10 lg:pb-36 lg:pt-32">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-5 flex flex-wrap items-center justify-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.18em]">
            {["Bologna", "Milano"].map((city) => (
              <span
                key={city}
                className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-card/65 px-4 py-1.5 text-foreground/88 shadow-soft"
              >
                <MapPin className="size-3.5 text-accent" strokeWidth={1.8} />
                {city}
              </span>
            ))}
            <span className="rounded-full border border-border-strong bg-surface/65 px-4 py-1.5 text-muted-foreground shadow-soft">
              {t.moreCities}
            </span>
          </div>

          <span className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface/75 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground shadow-soft">
            <span className="size-1.5 rounded-full bg-accent shadow-[0_0_10px_hsl(var(--accent))]" />
            {t.badge}
          </span>

          <h1 className="mt-7 font-display text-[1.82rem] font-extrabold leading-[1] tracking-tight text-foreground min-[390px]:text-[2.05rem] sm:text-5xl lg:text-[5.05rem]">
            <span className="block whitespace-nowrap">{t.line1}</span>
            <span className="mt-2 block whitespace-nowrap">{t.line2}</span>
            <span className="-translate-x-3 mt-2 block whitespace-nowrap text-accent text-glow sm:-translate-x-5 lg:-translate-x-8">{t.line3}</span>
          </h1>

          <p className="mx-auto mt-5 max-w-[84rem] text-base font-medium tracking-[0.02em] text-foreground/82 lg:whitespace-nowrap lg:text-lg">
            {t.subtitle}
          </p>

          <p className="mx-auto mt-6 max-w-[112ch] text-lg leading-relaxed text-muted-foreground text-pretty lg:text-[1.05rem] xl:text-[1.12rem]">
            {t.body}
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#cta"
              className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-cta transition-all hover:-translate-y-px hover:shadow-glow"
            >
              {t.primary}
            </a>
            <a
              href="#how"
              className="inline-flex items-center justify-center rounded-full border border-border-strong bg-surface/40 px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-surface"
            >
              {t.secondary}
            </a>
          </div>

          <div className="mt-8 grid gap-3 text-sm sm:grid-cols-3">
            {t.proof.map(([title, copy]) => (
              <div key={title} className="rounded-2xl border border-border bg-card/80 px-4 py-4 text-left shadow-soft">
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-accent">{title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{copy}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm text-muted-foreground">{t.note}</p>
        </div>

        <div className="mt-20 lg:mt-28">
          <DashboardMock />
        </div>
      </div>
    </section>
  );
};

export default Hero;
