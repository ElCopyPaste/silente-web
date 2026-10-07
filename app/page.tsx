import { Hero } from "@/components/Hero";
import { FAQSection } from "@/components/ContentSections";
import { Pricing } from "@/components/Pricing";

const questions = [
  { label: "Relaciones", text: "¿Qué siente realmente por mí?", second: "¿Acaso me está engañando?" },
  { label: "Decisiones", text: "¿Estoy tomando la decisión correcta?", second: "¿Qué camino me conviene seguir?" },
  { label: "Amor", text: "¿Encontraré el amor?", second: "¿Qué viene para mí en el amor?" },
  { label: "Dinero", text: "¿Cómo se ve mi futuro económico?", second: "¿Se abrirá una nueva oportunidad?" },
] as const;

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
            Silente es una experiencia interactiva inspirada en el conocimiento esotérico, la videncia y distintas mancias. Sus lecturas consideran tu carta natal y los tránsitos planetarios para ayudarte a explorar tus inquietudes y encontrar claridad sobre lo que necesitas saber.
          </p>
          <p className="mt-5 text-base leading-7 text-[var(--silente-muted)] md:text-lg">
            Conversas con Luna, la guía digital de Silente, por WhatsApp, en privado y a tu ritmo: puedes hacer una pregunta, profundizar y abrir nuevos temas cuando quieras.
          </p>
        </div>

        <div className="mt-20">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[.22em] text-[var(--silente-gold)]">A veces, una pregunta es el comienzo</p>
            <h3 className="mt-4 text-3xl font-semibold leading-tight tracking-[-.025em] text-[var(--silente-ivory)] md:text-5xl">
              ¿Qué necesitas saber hoy?
            </h3>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {questions.map(({ label, text, second }) => (
              <article key={label} className="rounded-2xl border border-[var(--silente-border)] bg-[rgba(5,14,22,.44)] p-6 md:p-8">
                <h4 className="text-sm font-medium uppercase tracking-[.2em] text-[var(--silente-gold)]">{label}</h4>
                <p className="mt-8 text-2xl leading-snug text-[var(--silente-ivory)] md:text-3xl">{text}</p>
                <p className="mt-4 text-base leading-relaxed text-[var(--silente-muted)]">{second}</p>
              </article>
            ))}
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
      <footer className="border-t border-[var(--silente-border)] px-5 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 text-center text-xs text-[var(--silente-muted)] md:flex-row md:items-center md:justify-between md:text-left">
          <div>
            <span className="tracking-[.18em] text-[var(--silente-gold)]">SILENTE</span>
            <p className="mt-2">Una conversación astrológica privada por WhatsApp.</p>
          </div>
          <nav aria-label="Información legal" className="flex flex-wrap justify-center gap-x-5 gap-y-2 md:justify-end">
            <a className="transition-colors hover:text-[var(--silente-ivory)]" href="https://www.silente.cl/terminos">Términos</a>
            <a className="transition-colors hover:text-[var(--silente-ivory)]" href="https://www.silente.cl/privacidad">Privacidad</a>
            <a className="transition-colors hover:text-[var(--silente-ivory)]" href="https://www.silente.cl/reembolsos">Reembolsos</a>
          </nav>
        </div>
        <p className="mx-auto mt-8 max-w-6xl text-center text-xs text-[var(--silente-muted)] md:text-left">
          Hay cosas que necesitas saber. Hay cosas que necesitas hablar.
        </p>
      </footer>
    </main>
  );
}
