const questions = [
  {
    label: "RELACIONES",
    text: "¿Qué siente realmente por mí?",
    second: "¿Acaso me está engañando?",
  },
  {
    label: "DECISIONES",
    text: "¿Estoy tomando la decisión correcta?",
    second: "¿Por qué me va mal?",
  },
  {
    label: "AMOR Y FUTURO",
    text: "¿Encontraré el amor?",
    second: "¿Qué me pasará el próximo mes?",
  },
] as const;

export function QuestionsSection() {
  return (
    <section className="flex min-h-[100svh] items-center bg-[var(--silente-night)] px-5 py-8 md:block md:min-h-0 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[.22em] text-[var(--silente-gold)]">Lo que te inquieta</p>
          <h2 className="mt-4 text-4xl font-semibold leading-[1.02] tracking-[-.03em] text-[var(--silente-ivory)] md:text-6xl">
            A veces, una pregunta es el comienzo.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--silente-muted)] md:text-lg">
            Relaciones, decisiones y lo que viene: puedes poner en palabras eso que hoy necesitas mirar con más calma.
          </p>
        </div>

        <div className="mt-14 grid gap-10 border-t border-[var(--silente-border)] pt-8 md:grid-cols-3 md:gap-8">
          {questions.map(({ label, text, second }) => (
            <article key={label}>
              <p className="text-xs tracking-[.2em] text-[var(--silente-gold)]">{label}</p>
              <p className="mt-5 text-xl leading-snug text-[var(--silente-ivory)] md:text-2xl">{text}</p>
              <p className="mt-3 text-base leading-snug text-[var(--silente-muted)]">{second}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AstrologySection() {
  return (
    <section className="relative overflow-hidden bg-[var(--silente-secondary)] px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.1fr_.9fr] md:items-center md:gap-20">
        <div>
          <p className="text-sm uppercase tracking-[.22em] text-[var(--silente-gold)]">La mirada de Silente</p>
          <h2 className="mt-4 text-4xl font-semibold leading-[1.02] tracking-[-.03em] text-[var(--silente-ivory)] md:text-6xl">
            Astrología para conversar sobre tu vida.
          </h2>
          <p className="mt-6 text-base leading-7 text-[var(--silente-muted)] md:text-lg">
            Silente es una experiencia interactiva por WhatsApp, inspirada en el conocimiento y las obras de astrólogos. Sus lecturas toman como referencia la carta natal y los tránsitos planetarios para abrir una conversación sobre lo que estás viviendo.
          </p>
          <p className="mt-5 text-base leading-7 text-[var(--silente-muted)] md:text-lg">
            No hay una persona respondiendo en tiempo real: conversas con Silente, una guía digital que recoge esas miradas astrológicas.
          </p>
        </div>

        <div className="border-y border-[var(--silente-border)] py-8 md:py-10">
          <p className="text-xs uppercase tracking-[.2em] text-[var(--silente-gold)]">Una guía disponible</p>
          <h3 className="mt-5 text-3xl font-semibold text-[var(--silente-ivory)] md:text-4xl">Luna</h3>
          <p className="mt-2 text-sm uppercase tracking-[.16em] text-[var(--silente-muted)]">Astrología simbólica</p>
          <p className="mt-6 max-w-md text-lg leading-7 text-[var(--silente-ivory)]">
            Una mirada cálida y perceptiva, que escucha antes de responder.
          </p>
        </div>
      </div>
    </section>
  );
}

const faqs = [
  {
    question: "¿Me responde una persona?",
    answer: "No es un chat con un astrólogo en vivo. Silente es una experiencia interactiva construida a partir del conocimiento de astrólogos y de su forma de interpretar.",
  },
  {
    question: "¿Cómo funciona la conversación?",
    answer: "Después de activar tu suscripción, conversas con Silente por WhatsApp. Puedes plantear tus preguntas y continuar el diálogo cuando quieras.",
  },
  {
    question: "¿Qué pasa con mis conversaciones?",
    answer: "Silente.cl informa que las conversaciones son privadas y confidenciales, que no comparte tus lecturas ni datos personales con terceros y que puedes solicitar el borrado de tu historial.",
  },
  {
    question: "¿Cómo se cobra y puedo cancelar?",
    answer: "El plan publicado es mensual y el pago recurrente se realiza mediante Reveniu. Puedes cancelar cuando quieras, sin permanencia.",
  },
] as const;

export function FAQSection() {
  return (
    <section id="preguntas-frecuentes" className="bg-[var(--silente-night)] px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[.8fr_1.2fr] md:gap-20">
        <div>
          <p className="text-sm uppercase tracking-[.22em] text-[var(--silente-gold)]">Antes de empezar</p>
          <h2 className="mt-4 text-4xl font-semibold leading-[1.02] tracking-[-.03em] text-[var(--silente-ivory)] md:text-6xl">
            Pregunta lo que necesites.
          </h2>
          <p className="mt-5 text-base leading-7 text-[var(--silente-muted)]">
            Queremos que sepas qué experiencia te espera antes de conversar con Silente.
          </p>
        </div>

        <div className="divide-y divide-[var(--silente-border)] border-y border-[var(--silente-border)]">
          {faqs.map(({ question, answer }) => (
            <details key={question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg text-[var(--silente-ivory)] marker:hidden">
                <span>{question}</span>
                <span aria-hidden="true" className="text-xl text-[var(--silente-gold)] transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="max-w-2xl pt-4 pr-8 text-sm leading-6 text-[var(--silente-muted)]">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
