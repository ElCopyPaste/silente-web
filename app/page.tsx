import { Hero } from "@/components/Hero";
import { FAQSection } from "@/components/ContentSections";
import { Pricing } from "@/components/Pricing";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { SiteFooter } from "@/components/SiteFooter";

function WhatIsSilenteSection() {
  return (
    <section id="como-funciona" className="bg-[var(--silente-secondary)] px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-4xl">
          <p className="text-sm uppercase tracking-[.22em] text-[var(--silente-gold)]">Qué es Silente</p>
          <h2 className="mt-4 text-4xl font-semibold leading-[1.02] tracking-[-.03em] text-[var(--silente-ivory)] md:text-6xl">
            Una conversación para encontrar claridad.
          </h2>
          <p className="mt-6 text-base leading-7 text-[var(--silente-muted)] md:text-lg">
            Silente te ofrece un espacio para explorar tus preguntas sobre amor, relaciones, decisiones y futuro. Sus lecturas se inspiran en la videncia, la astrología y distintas mancias, y consideran tu carta natal y los tránsitos planetarios.
          </p>
          <p className="mt-5 text-base leading-7 text-[var(--silente-muted)] md:text-lg">
            Luna es la guía digital de Silente. Conversa con ella por WhatsApp, en privado y a tu ritmo. Haz una pregunta, profundiza en su respuesta y abre nuevos temas cuando quieras.
          </p>
        </div>

        <div className="mt-16">
          <p className="mb-5 text-sm uppercase tracking-[.22em] text-[var(--silente-gold)]">Una conversación por WhatsApp</p>
          <div role="img" aria-label="Espacio reservado para el demo en video de una conversación por WhatsApp" className="flex aspect-video w-full items-center justify-center overflow-hidden rounded-3xl border border-[rgba(213,170,75,.24)] bg-[radial-gradient(ellipse_at_center,rgba(213,170,75,.12),transparent_58%),rgba(5,14,22,.72)] px-6 text-center">
            <div>
              <span aria-hidden="true" className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[rgba(213,170,75,.5)] text-2xl text-[var(--silente-gold-light)]">▶</span>
              <p className="mt-5 text-lg text-[var(--silente-ivory)] md:text-xl">Demo de conversación por WhatsApp</p>
              <p className="mt-2 text-sm text-[var(--silente-muted)]">Espacio reservado para el video</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <Hero />
      <WhatIsSilenteSection />
      <Pricing />
      <FAQSection />
      <TestimonialsCarousel />
      <SiteFooter />
    </main>
  );
}
