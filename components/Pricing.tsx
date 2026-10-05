export function Pricing() {
  return (
    <section id="elige-tu-plan" className="px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm uppercase tracking-[.22em] text-[var(--silente-gold)]">Elige tu plan</p>
        <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">Elige tu plan.</h2>
        <div className="mx-auto mt-12 max-w-md rounded-[2rem] border border-[var(--silente-border)] bg-[var(--silente-secondary)] p-8 text-left">
          <p className="text-sm text-[var(--silente-muted)]">Precio mensual</p>
          <div className="mt-3 text-5xl font-semibold">POR DEFINIR</div>
          <ul className="mt-8 space-y-4 text-sm text-[var(--silente-muted)]">
            <li>Conversación ilimitada*</li>
            <li>Disponible 24/7</li>
            <li>Acceso por WhatsApp</li>
            <li>Totalmente privada</li>
          </ul>
          <a href="#" className="mt-8 block rounded-full bg-[var(--silente-gold)] px-6 py-4 text-center font-semibold text-[var(--silente-night)]">
            Suscribirme
          </a>
        </div>
      </div>
    </section>
  );
}
