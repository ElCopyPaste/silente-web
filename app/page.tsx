import { Hero } from "@/components/Hero";
import { FAQSection } from "@/components/ContentSections";
import { Pricing } from "@/components/Pricing";

const questions = [
  { label: "RELACIONES", text: "¿Qué siente realmente por mí?", second: "¿Acaso me está engañando?" },
  { label: "DECISIONES", text: "¿Estoy tomando la decisión correcta?", second: "¿Por qué me va mal?" },
  { label: "AMOR Y FUTURO", text: "¿Encontraré el amor?", second: "¿Qué me pasará el próximo mes?" },
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
            Conversas con Luna, la guía digital de Silente, por WhatsApp, en privado y a tu ritmo. No es una consulta con un astrólogo en vivo: puedes hacer una pregunta, profundizar y abrir nuevos temas cuando quieras.
          </p>
        </div>

        <div className="mt-12 grid gap-6 border-y border-[var(--silente-border)] py-6 sm:grid-cols-3 sm:gap-8">
          <p className="text-sm leading-6 text-[var(--silente-muted)]"><span className="mr-3 text-xs text-[var(--silente-gold)]">01</span>Activa tu suscripción.</p>
          <p className="text-sm leading-6 text-[var(--silente-muted)]"><span className="mr-3 text-xs text-[var(--silente-gold)]">02</span>Abre WhatsApp y conversa con Luna.</p>
          <p className="text-sm leading-6 text-[var(--silente-muted)]"><span className="mr-3 text-xs text-[var(--silente-gold)]">03</span>Pregunta y profundiza a tu ritmo.</p>
        </div>

        <div className="mt-16">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[.22em] text-[var(--silente-gold)]">A veces, una pregunta es el comienzo</p>
            <h3 className="mt-4 text-3xl font-semibold leading-tight tracking-[-.025em] text-[var(--silente-ivory)] md:text-5xl">
              ¿Qué necesitas saber hoy?
            </h3>
          </div>
          <div className="mt-10 grid gap-8 border-t border-[var(--silente-border)] pt-8 md:grid-cols-3 md:gap-8">
            {questions.map(({ label, text, second }) => (
              <article key={label}>
                <p className="text-xs tracking-[.2em] text-[var(--silente-gold)]">{label}</p>
                <p className="mt-5 text-xl leading-snug text-[var(--silente-ivory)] md:text-2xl">{text}</p>
                <p className="mt-3 text-base leading-snug text-[var(--silente-muted)]">{second}</p>
              </article>
            ))}
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
