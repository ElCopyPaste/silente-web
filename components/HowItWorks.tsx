export function HowItWorks() {
  const steps = [
    ["01", "Te suscribes", "Elige tu plan y activa tu acceso."],
    ["02", "Entras a WhatsApp", "Recibes el acceso para comenzar."],
    ["03", "Conversas con Silente", "Haz preguntas y profundiza en la conversación."],
  ];

  return (
    <section id="como-funciona" className="bg-[var(--silente-secondary)] px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm uppercase tracking-[.22em] text-[var(--silente-gold)]">Cómo funciona</p>
        <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight md:text-6xl">
          Una conversación para aquello que necesitas saber.
        </h2>
        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {steps.map(([number, title, description]) => (
            <article key={number} className="rounded-3xl border border-[var(--silente-border)] p-6 md:p-8">
              <span className="text-sm text-[var(--silente-gold)]">{number}</span>
              <h3 className="mt-12 text-xl font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--silente-muted)]">{description}</p>
            </article>
          ))}
        </div>
        <div className="mt-12 aspect-video overflow-hidden rounded-3xl border border-[var(--silente-border)] bg-[var(--silente-night)]">
          <div className="flex h-full items-center justify-center p-8 text-center text-sm text-[var(--silente-muted)]">
            Video demo de la conversación de WhatsApp.
          </div>
        </div>
      </div>
    </section>
  );
}
