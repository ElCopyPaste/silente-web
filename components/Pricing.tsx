export function Pricing() {
  return (
    <section id="elige-tu-plan" className="relative overflow-hidden px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[.22em] text-[var(--silente-gold)]">Elige tu plan</p>
          <h2 className="mt-4 text-4xl font-semibold leading-[1.02] tracking-[-.03em] text-[var(--silente-ivory)] md:text-6xl">
            Un espacio para conversar cuando lo necesitas.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[var(--silente-muted)]">
            Acceso a una experiencia de astrología conversada, en privado y desde WhatsApp.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-lg">
          <article className="relative overflow-hidden rounded-[2rem] border border-[rgba(213,170,75,.45)] bg-[var(--silente-secondary)] p-7 shadow-[0_0_70px_rgba(213,170,75,.06)] md:p-10">
            <div className="absolute inset-x-0 top-0 h-px bg-[var(--silente-gold)]" />
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-[.2em] text-[var(--silente-gold)]">Plan Silente</p>
                <h3 className="mt-3 text-2xl font-semibold text-[var(--silente-ivory)]">Conversación privada</h3>
              </div>
              <span className="rounded-full border border-[var(--silente-border)] px-3 py-1 text-xs text-[var(--silente-muted)]">
                Mensual
              </span>
            </div>

            <div className="mt-10 border-y border-[var(--silente-border)] py-7">
              <p className="text-xs uppercase tracking-[.18em] text-[var(--silente-muted)]">Suscripción mensual</p>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-[var(--silente-ivory)] md:text-5xl">
                $3.000 <span className="text-lg font-normal text-[var(--silente-muted)]">CLP / mes</span>
              </p>
            </div>

            <ul className="mt-7 space-y-4 text-sm text-[var(--silente-ivory)]">
              <li className="flex gap-3"><span className="text-[var(--silente-gold)]">∞</span><span>Conversación ilimitada por WhatsApp</span></li>
              <li className="flex gap-3"><span className="text-[var(--silente-gold)]">24/7</span><span>Disponible a cualquier hora</span></li>
              <li className="flex gap-3"><span className="text-[var(--silente-gold)]">◈</span><span>Carta natal personalizada</span></li>
              <li className="flex gap-3"><span className="text-[var(--silente-gold)]">◌</span><span>Conversaciones privadas</span></li>
            </ul>

            <a
              href="https://www.silente.cl/checkout"
              className="mt-9 flex items-center justify-between rounded-full bg-[var(--silente-gold)] px-6 py-4 font-semibold text-[var(--silente-night)] transition-transform hover:scale-[1.01] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--silente-gold-light)]"
            >
              <span>Suscribirme</span>
              <span aria-hidden="true">→</span>
            </a>

            <p className="mt-4 text-xs leading-5 text-[var(--silente-muted)]">
              Cobro mensual recurrente mediante Reveniu. Puedes cancelar cuando quieras, sin permanencia.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
