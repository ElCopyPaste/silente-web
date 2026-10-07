type BenefitIconName = "messages" | "clock" | "history" | "cancel" | "chart" | "lock";

function BenefitIcon({ name }: { name: BenefitIconName }) {
  const shared = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
    className: "mt-0.5 h-5 w-5 shrink-0 text-[var(--silente-gold)]",
  };

  const drawings: Record<BenefitIconName, React.ReactNode> = {
    messages: <><path d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5H6l-3 2v-6.5A7.5 7.5 0 1 1 20 11.5Z" /><path d="M8 10h8M8 14h5" /></>,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    history: <><path d="M3 11a9 9 0 1 1 2.6 6.4" /><path d="M3 4v7h7M12 7v5l3 2" /></>,
    cancel: <><circle cx="12" cy="12" r="9" /><path d="M8 12h8" /></>,
    chart: <><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9 7 7m10 10 2.1 2.1m0-14.2L17 7M7 17l-2.1 2.1" /></>,
    lock: <><rect x="4" y="10" width="16" height="11" rx="2" /><path d="M8 10V7a4 4 0 1 1 8 0v3M12 14v3" /></>,
  };

  return <svg {...shared}>{drawings[name]}</svg>;
}

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
                $6.000 <span className="text-lg font-normal text-[var(--silente-muted)]">CLP / mes</span>
              </p>
            </div>

            <ul className="mt-7 space-y-4 text-sm text-[var(--silente-ivory)]">
              <li className="flex items-start gap-3"><BenefitIcon name="messages" /><span>25 mensajes al día por WhatsApp</span></li>
              <li className="flex items-start gap-3"><BenefitIcon name="clock" /><span>Disponible 24 horas al día</span></li>
              <li className="flex items-start gap-3"><BenefitIcon name="history" /><span>Historial de conversaciones guardado</span></li>
              <li className="flex items-start gap-3"><BenefitIcon name="cancel" /><span>Cancela cuando quieras</span></li>
              <li className="flex items-start gap-3"><BenefitIcon name="chart" /><span>Carta natal personalizada</span></li>
              <li className="flex items-start gap-3"><BenefitIcon name="lock" /><span>Conversaciones privadas</span></li>
            </ul>

            <a
              href="https://www.silente.cl/checkout"
              className="mt-9 flex items-center justify-between rounded-full bg-[var(--silente-gold)] px-6 py-4 font-semibold text-[var(--silente-night)] transition-transform hover:scale-[1.01] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--silente-gold-light)]"
            >
              <span>Suscribirme</span>
              <span aria-hidden="true">→</span>
            </a>

            <p className="mt-4 text-xs leading-5 text-[var(--silente-muted)]">
              Cobro mensual recurrente mediante Reveniu.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
