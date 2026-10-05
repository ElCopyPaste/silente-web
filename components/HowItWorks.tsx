const steps = [
  ["01", "Te suscribes", "Elige tu plan y activa tu acceso."],
  ["02", "Entras a WhatsApp", "Recibes el acceso para comenzar."],
  ["03", "Conversas con Silente", "Haz preguntas y profundiza en la conversación."],
] as const;

export function HowItWorks() {
  return (
    <section id="como-funciona" className="relative overflow-hidden bg-[var(--silente-secondary)] px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[.22em] text-[var(--silente-gold)]">Cómo funciona</p>
          <h2 className="mt-4 text-4xl font-semibold leading-[1.02] tracking-[-.03em] md:text-6xl">
            Una conversación para aquello que necesitas saber.
          </h2>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-[var(--silente-border)] bg-[var(--silente-border)] md:grid-cols-3">
          {steps.map(([number, title, description]) => (
            <article key={number} className="bg-[var(--silente-secondary)] p-6 md:min-h-64 md:p-8">
              <span className="text-sm text-[var(--silente-gold)]">{number}</span>
              <div className="mt-14">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-3 max-w-sm text-sm leading-6 text-[var(--silente-muted)]">{description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16">
          <div className="mb-5 flex items-end justify-between gap-6">
            <div>
              <p className="text-sm uppercase tracking-[.22em] text-[var(--silente-gold)]">Video demo</p>
              <h3 className="mt-2 text-2xl font-semibold md:text-3xl">Así es una conversación con Silente.</h3>
            </div>
            <span className="hidden text-xs text-[var(--silente-muted)] md:block">Demo · WhatsApp</span>
          </div>

          <div className="relative aspect-video overflow-hidden rounded-3xl border border-[var(--silente-border)] bg-[var(--silente-night)] shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(213,170,75,.12),transparent_55%)]" />
            <div className="relative flex h-full flex-col items-center justify-center p-8 text-center">
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-[var(--silente-gold)] text-[var(--silente-gold)]">
                <span className="ml-1 text-xl">▶</span>
              </div>
              <p className="text-base font-semibold text-[var(--silente-ivory)]">Video demo de Silente</p>
              <p className="mt-2 max-w-md text-sm leading-6 text-[var(--silente-muted)]">
                Este espacio queda preparado para incorporar el video definitivo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
