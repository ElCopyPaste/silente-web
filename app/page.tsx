import { Hero } from "@/components/Hero";
import { FAQSection } from "@/components/ContentSections";
import { Pricing } from "@/components/Pricing";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";

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
      <footer className="border-t border-[var(--silente-border)] px-5 py-10">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 text-center text-xs text-[var(--silente-muted)] md:grid-cols-[1fr_auto_auto] md:text-left">
          <div>
            <span className="tracking-[.18em] text-[var(--silente-gold)]">SILENTE</span>
            <p className="mt-2">Visítanos en Redes Sociales</p>
            <div role="group" aria-label="Redes sociales" className="mt-3 flex justify-center gap-4 md:justify-start">
              <span role="img" aria-label="TikTok" className="flex h-9 w-9 items-center justify-center text-[var(--silente-gold)]">
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                  <path d="M19.6 8.1a7.2 7.2 0 0 1-4.3-1.4v8.1a6.2 6.2 0 1 1-5.4-6.1v3.3a2.9 2.9 0 1 0 2.1 2.8V2.8h3.3c.2 2.1 1.6 3.7 4.3 4.1v1.2Z" />
                </svg>
              </span>
              <span role="img" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center text-[var(--silente-gold)]">
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current" strokeWidth="1.8">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.6" cy="6.6" r="1" className="fill-current stroke-none" />
                </svg>
              </span>
              <span role="img" aria-label="Facebook" className="flex h-9 w-9 items-center justify-center text-[var(--silente-gold)]">
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                  <path d="M13.5 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.3V13h2.8v8h3.4Z" />
                </svg>
              </span>
            </div>
          </div>
          <a href="mailto:comercial@silente.cl" aria-label="Contacto por correo" title="Contacto por correo" className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(213,170,75,.4)] text-[var(--silente-gold)] transition-colors hover:border-[var(--silente-gold-light)] hover:text-[var(--silente-gold-light)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--silente-gold-light)] md:mx-0">
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="1.7">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m4 7 8 6 8-6" />
            </svg>
          </a>
          <nav aria-label="Información legal" className="flex flex-wrap justify-center gap-x-5 gap-y-2 md:justify-end">
            <a className="transition-colors hover:text-[var(--silente-ivory)]" href="https://www.silente.cl/terminos">Términos</a>
            <a className="transition-colors hover:text-[var(--silente-ivory)]" href="https://www.silente.cl/privacidad">Privacidad</a>
            <a className="transition-colors hover:text-[var(--silente-ivory)]" href="https://www.silente.cl/reembolsos">Reembolsos</a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
