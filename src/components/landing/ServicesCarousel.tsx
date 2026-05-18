import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { useIsItalian } from "@/lib/locale";

const ServicesCarousel = () => {
  const isItalian = useIsItalian();
  const [activeIndex, setActiveIndex] = useState(0);

  const cards = isItalian
    ? [
        {
          title: "Set-up guidato",
          body: "Configuriamo insieme i dati del team e le regole dei momenti, costruendo una roadmap operativa per gestire ogni ricorrenza senza frizione.",
          image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Efficienza operativa",
          body: "Fin dai primi ordini Remvy mostra efficienza operativa: chiarezza, puntualità e trasparenza su fornitori, consegne e budget.",
          image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Analytics avanzati",
          body: "Mese dopo mese rendiamo visibile la gestione: budget utilizzato, feedback raccolti, momenti eseguiti e forecast operativo del mese successivo.",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "AI leverage",
          body: "Modernizzi la struttura con contatti, ordini e feedback supportati dall'AI, celebrando ogni team moment con standard coerenti.",
          image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
        },
      ]
    : [
        {
          title: "Guided set-up",
          body: "We set up your team data and moment rules together, building a clear roadmap to manage every recurring moment without friction.",
          image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Operational efficiency",
          body: "From the first orders, Remvy shows efficient operations: clarity, punctuality and transparency across suppliers, delivery and budget.",
          image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Advanced analytics",
          body: "Month after month, you see how moments were managed: budget, feedback, executed moments and the operating forecast for next month.",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "AI leverage",
          body: "Modernize your structure with AI-supported contacts, orders and feedback, celebrating every team moment with consistent standards.",
          image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
        },
      ];

  const previous = (activeIndex + cards.length - 1) % cards.length;
  const next = (activeIndex + 1) % cards.length;

  const move = (direction: "previous" | "next") => {
    setActiveIndex((current) =>
      direction === "next" ? (current + 1) % cards.length : (current + cards.length - 1) % cards.length,
    );
  };

  return (
    <section id="services" className="relative border-t border-border bg-surface/25">
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/45 to-transparent"
        aria-hidden
      />
      <div className="mx-auto w-full max-w-[1240px] px-5 py-16 sm:px-6 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-accent">
            <span className="size-2 rounded-full bg-accent shadow-[0_0_12px_hsl(var(--accent)/0.75)]" />
            Services
          </div>
          <h2 className="mx-auto mt-7 max-w-4xl [font-family:Georgia,'Times_New_Roman',serif] text-[clamp(2.15rem,5vw,4.25rem)] font-normal leading-[1.08] tracking-[-0.055em] text-foreground">
            <span className="block">{isItalian ? "Un team operativo autonomo" : "A fully autonomous team"}</span>
            <span className="block">{isItalian ? "che migliora la working life" : "that improves working life"}</span>
          </h2>
        </div>

        <div className="relative mt-16 hidden min-h-[410px] items-center justify-center lg:flex">
          <ServiceCard card={cards[previous]} variant="side" className="absolute left-0 w-[31%] -rotate-2 opacity-45" />
          <ServiceCard card={cards[next]} variant="side" className="absolute right-0 w-[31%] rotate-2 opacity-45" />

          <button
            type="button"
            onClick={() => move("previous")}
            className="absolute left-[28%] z-20 grid size-12 place-items-center rounded-full bg-accent text-accent-foreground shadow-cta transition-all hover:-translate-x-1 hover:shadow-glow"
            aria-label="Previous service"
          >
            <ArrowLeft className="size-5" />
          </button>
          <ServiceCard card={cards[activeIndex]} variant="active" className="relative z-10 w-[52%]" />
          <button
            type="button"
            onClick={() => move("next")}
            className="absolute right-[28%] z-20 grid size-12 place-items-center rounded-full bg-accent text-accent-foreground shadow-cta transition-all hover:translate-x-1 hover:shadow-glow"
            aria-label="Next service"
          >
            <ArrowRight className="size-5" />
          </button>
        </div>

        <div className="mt-10 flex snap-x gap-4 overflow-x-auto pb-3 lg:hidden">
          {cards.map((card) => (
            <ServiceCard key={card.title} card={card} variant="mobile" className="min-w-[82%] snap-center sm:min-w-[54%]" />
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {cards.map((card, index) => (
            <button
              key={card.title}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all ${index === activeIndex ? "w-8 bg-accent" : "w-2 bg-muted-foreground/30"}`}
              aria-label={`Show ${card.title}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

type ServiceCardData = {
  title: string;
  body: string;
  image: string;
};

const ServiceCard = ({
  card,
  variant,
  className = "",
}: {
  card: ServiceCardData;
  variant: "active" | "side" | "mobile";
  className?: string;
}) => (
  <article
    className={`group relative overflow-hidden rounded-[30px] border border-border-strong bg-card shadow-elegant ${className}`}
  >
    <img
      src={card.image}
      alt=""
      className={`h-full min-h-[320px] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] ${
        variant === "active" ? "lg:min-h-[380px]" : "lg:min-h-[250px]"
      }`}
      loading="lazy"
    />
    <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_28%,hsl(var(--background)/0.84)_100%)]" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_8%,transparent,hsl(var(--background)/0.15)_58%)]" />
    <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-7">
      <h3 className={`font-display font-extrabold tracking-[-0.04em] text-foreground ${variant === "active" ? "text-3xl" : "text-xl"}`}>
        {card.title}
      </h3>
      <p className={`mt-3 max-w-[48ch] font-medium leading-relaxed text-foreground/82 ${variant === "active" ? "text-base" : "text-sm"}`}>
        {card.body}
      </p>
    </div>
  </article>
);

export default ServicesCarousel;
