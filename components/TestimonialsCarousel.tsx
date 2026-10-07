"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const testimonials = [
  {
    label: "Carlos, 30 años",
    image: "/testimonials/portrait-01.jpg",
    quote: "La lectura me ayudó a poner en perspectiva una decisión que venía postergando. Me sentí acompañado y pude ordenar mis ideas.",
  },
  {
    label: "Verónica, 40 años",
    image: "/testimonials/portrait-02.jpg",
    quote: "Me sorprendió lo clara y cercana que fue la conversación. Pude preguntar a mi ritmo y volver sobre lo que necesitaba.",
  },
  {
    label: "Martina, 22 años",
    image: "/testimonials/portrait-03.jpg",
    quote: "Llegué con muchas dudas sobre mi relación y la lectura me ayudó a mirar lo que estaba sintiendo con más calma.",
  },
  {
    label: "Elena, 63 años",
    image: "/testimonials/portrait-04.jpg",
    quote: "Me gustó poder conversar en privado y sin apuro. Cada respuesta me dio una nueva perspectiva para reflexionar.",
  },
] as const;

export function TestimonialsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setReducedMotion(mediaQuery.matches);
    updateMotionPreference();
    mediaQuery.addEventListener("change", updateMotionPreference);
    return () => mediaQuery.removeEventListener("change", updateMotionPreference);
  }, []);

  useEffect(() => {
    if (paused || reducedMotion) return;
    const interval = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % testimonials.length);
    }, 5000);
    return () => window.clearInterval(interval);
  }, [paused, reducedMotion]);

  const active = testimonials[activeIndex];

  return (
    <section id="testimonios" aria-labelledby="testimonios-title" className="bg-[var(--silente-night)] px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[.22em] text-[var(--silente-gold)]">Una experiencia para compartir</p>
          <h2 id="testimonios-title" className="mt-4 text-3xl font-semibold leading-tight tracking-[-.025em] text-[var(--silente-ivory)] md:text-5xl">
            Lo que podría contarte alguien como tú.
          </h2>
        </div>

        <div className="mx-auto mt-10 max-w-5xl">
          <article
            key={activeIndex}
            role="group"
            aria-roledescription="diapositiva"
            aria-label={`Testimonio ${activeIndex + 1} de ${testimonials.length}`}
            className="testimonial-slide grid min-h-[280px] items-center gap-7 rounded-3xl border border-[rgba(213,170,75,.3)] bg-[rgba(23,35,49,.78)] p-7 shadow-[0_24px_80px_rgba(0,0,0,.2)] md:grid-cols-[180px_1fr] md:gap-10 md:p-12"
          >
            <div className="flex justify-center">
              <Image
                src={basePath + active.image}
                alt={active.label}
                width={160}
                height={160}
                unoptimized
                className="h-32 w-32 rounded-full border border-[rgba(229,196,106,.5)] object-cover shadow-[0_0_32px_rgba(213,170,75,.12)] md:h-40 md:w-40"
              />
            </div>
            <div>
              <span aria-hidden="true" className="text-4xl leading-none text-[var(--silente-gold)]">“</span>
              <blockquote className="mt-2 text-xl leading-relaxed text-[var(--silente-ivory)] md:text-2xl">
                {active.quote}
              </blockquote>
              <p className="mt-6 text-xs uppercase tracking-[.18em] text-[var(--silente-gold-light)]">{active.label}</p>
            </div>
          </article>

          <div className="mt-6 flex flex-col items-center justify-between gap-5 sm:flex-row">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setActiveIndex((index) => (index - 1 + testimonials.length) % testimonials.length)}
                aria-label="Ver testimonio anterior"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--silente-border)] text-lg text-[var(--silente-ivory)] transition-colors hover:border-[var(--silente-gold)] hover:text-[var(--silente-gold-light)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--silente-gold-light)]"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => setPaused((value) => !value)}
                aria-pressed={paused}
                aria-label={paused ? "Reanudar cambio automático" : "Pausar cambio automático"}
                className="rounded-full border border-[var(--silente-border)] px-4 py-2 text-xs text-[var(--silente-muted)] transition-colors hover:border-[var(--silente-gold)] hover:text-[var(--silente-ivory)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--silente-gold-light)]"
              >
                {paused ? "Reanudar" : "Pausar"}
              </button>
              <button
                type="button"
                onClick={() => setActiveIndex((index) => (index + 1) % testimonials.length)}
                aria-label="Ver siguiente testimonio"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--silente-border)] text-lg text-[var(--silente-ivory)] transition-colors hover:border-[var(--silente-gold)] hover:text-[var(--silente-gold-light)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--silente-gold-light)]"
              >
                →
              </button>
            </div>

            <div className="flex items-center gap-2" role="group" aria-label="Elegir testimonio">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.image}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Mostrar testimonio ${index + 1}`}
                  aria-current={index === activeIndex ? "true" : undefined}
                  className={`h-2.5 rounded-full transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--silente-gold-light)] ${index === activeIndex ? "w-7 bg-[var(--silente-gold)]" : "w-2.5 bg-[var(--silente-border)] hover:bg-[var(--silente-gold-light)]"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
