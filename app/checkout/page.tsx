import Image from "next/image";
import { SiteFooter } from "@/components/SiteFooter";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const inputClass = "mt-2 w-full rounded-xl border border-[var(--silente-border)] bg-[rgba(5,14,22,.72)] px-4 py-3 text-sm text-[var(--silente-ivory)] outline-none placeholder:text-[var(--silente-muted)] focus:border-[var(--silente-gold)] focus:ring-2 focus:ring-[rgba(213,170,75,.16)]";

function Check() {
  return <svg aria-hidden="true" viewBox="0 0 20 20" className="mt-0.5 h-4 w-4 shrink-0 text-[var(--silente-gold)]" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="m4 10 4 4 8-8" /></svg>;
}

export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-[var(--silente-night)] text-[var(--silente-ivory)]">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 md:px-8 md:py-7">
        <a href={`${basePath}/`} aria-label="Silente, inicio" className="inline-flex items-center rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--silente-gold-light)]">
          <Image src={`${basePath}/logo-silente.webp`} alt="Silente" width={640} height={692} priority unoptimized className="h-14 w-auto object-contain md:h-16" />
        </a>
        <a href="https://www.silente.cl/ingresar" className="rounded-full border border-[rgba(213,170,75,.4)] px-4 py-2 text-sm text-[var(--silente-gold-light)] transition-colors hover:border-[var(--silente-gold-light)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--silente-gold-light)]">Iniciar sesión</a>
      </header>

      <section className="px-5 pb-20 pt-7 md:px-8 md:pt-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <p className="text-xs uppercase tracking-[.22em] text-[var(--silente-gold)]">Plan Silente</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-[-.03em] md:text-5xl">Finalizar suscripción</h1>
            <p className="mt-3 text-sm text-[var(--silente-muted)] md:text-base">Estás a un paso de conversar con Luna.</p>
          </div>

          <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(19rem,.8fr)] lg:gap-8">
            <section className="rounded-3xl border border-[var(--silente-border)] bg-[var(--silente-secondary)] p-6 md:p-9">
              <div className="mb-8 flex items-center gap-4">
                <span aria-hidden="true" className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--silente-gold)] text-sm text-[var(--silente-gold-light)]">1</span>
                <h2 className="text-xl font-semibold md:text-2xl">Datos de registro</h2>
              </div>

              <form className="space-y-5">
                <label className="block text-xs font-medium uppercase tracking-[.12em] text-[var(--silente-muted)]">
                  Nombre completo
                  <input className={inputClass} name="name" autoComplete="name" placeholder="Tu nombre" required />
                </label>
                <label className="block text-xs font-medium uppercase tracking-[.12em] text-[var(--silente-muted)]">
                  Correo electrónico
                  <input className={inputClass} name="email" type="email" autoComplete="email" placeholder="tu@correo.cl" required />
                </label>
                <label className="block text-xs font-medium uppercase tracking-[.12em] text-[var(--silente-muted)]">
                  Tu WhatsApp
                  <input className={inputClass} name="whatsapp" type="tel" autoComplete="tel" placeholder="+56 9 1234 5678" required />
                </label>
                <p className="-mt-3 text-xs leading-5 text-[var(--silente-muted)]">Es el número desde el que conversarás con Luna: tu suscripción se conecta cuando le escribes desde ahí.</p>
                <label className="block text-xs font-medium uppercase tracking-[.12em] text-[var(--silente-muted)]">
                  Contraseña
                  <input className={inputClass} name="password" type="password" autoComplete="new-password" required />
                </label>
                <ul aria-label="Requisitos de contraseña" className="grid gap-2 text-xs text-[var(--silente-muted)] sm:grid-cols-2">
                  <li className="flex items-center gap-2"><Check />Al menos 10 caracteres</li>
                  <li className="flex items-center gap-2"><Check />Mayúsculas y minúsculas</li>
                  <li className="flex items-center gap-2"><Check />Al menos un número</li>
                  <li className="flex items-center gap-2"><Check />Que no contenga tu correo</li>
                </ul>
                <label className="block text-xs font-medium uppercase tracking-[.12em] text-[var(--silente-muted)]">
                  Repite la contraseña
                  <input className={inputClass} name="password-confirm" type="password" autoComplete="new-password" required />
                </label>

                <a href="https://www.silente.cl/checkout" className="flex w-full items-center justify-between rounded-full bg-[var(--silente-gold)] px-6 py-4 font-semibold text-[var(--silente-night)] transition-transform hover:scale-[1.01] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--silente-gold-light)]">
                  <span>Activar mi suscripción</span><span aria-hidden="true">→</span>
                </a>
                <p className="text-center text-xs leading-5 text-[var(--silente-muted)]">Serás redirigido a Webpay de Transbank para completar el pago de forma segura.</p>
              </form>

              <p className="mt-7 text-xs leading-6 text-[var(--silente-muted)]">
                Al crear tu cuenta aceptas los <a className="text-[var(--silente-gold-light)] underline underline-offset-4" href={`${basePath}/terminos/`}>Términos y Condiciones</a> y la <a className="text-[var(--silente-gold-light)] underline underline-offset-4" href={`${basePath}/privacidad/`}>Política de Privacidad</a>. El consentimiento para procesar tus conversaciones se pide aparte, en el chat, antes de la primera lectura.
              </p>
              <p className="mt-4 text-center text-sm text-[var(--silente-muted)]">¿Ya tienes cuenta? <a className="text-[var(--silente-gold-light)] underline underline-offset-4" href="https://www.silente.cl/ingresar">Inicia sesión</a>.</p>
            </section>

            <aside className="rounded-3xl border border-[rgba(213,170,75,.38)] bg-[rgba(23,35,49,.72)] p-6 md:p-8">
              <p className="text-xs uppercase tracking-[.18em] text-[var(--silente-gold)]">Resumen del plan</p>
              <h2 className="mt-4 text-2xl font-semibold">Acceso a Silente</h2>
              <div className="mt-7 border-y border-[var(--silente-border)] py-6">
                <p className="text-sm text-[var(--silente-muted)]">Suscripción mensual</p>
                <p className="mt-2 text-3xl font-semibold">$6.000 <span className="text-base font-normal text-[var(--silente-muted)]">CLP / mes</span></p>
              </div>
              <ul className="mt-6 space-y-4 text-sm">
                <li className="flex items-start gap-3"><Check />25 mensajes al día por WhatsApp</li>
                <li className="flex items-start gap-3"><Check />Disponible 24 horas al día</li>
                <li className="flex items-start gap-3"><Check />Historial de conversaciones guardado</li>
                <li className="flex items-start gap-3"><Check />Cancela cuando quieras</li>
                <li className="flex items-start gap-3"><Check />Carta natal personalizada</li>
                <li className="flex items-start gap-3"><Check />Conversaciones privadas</li>
              </ul>
              <div className="mt-8 flex items-center justify-between border-t border-[var(--silente-border)] pt-6 text-sm">
                <span>Total mensual · IVA incluido</span><strong className="text-base text-[var(--silente-ivory)]">$6.000 CLP</strong>
              </div>
              <div className="mt-5 flex justify-center gap-5 text-[10px] font-semibold tracking-[.12em] text-[var(--silente-muted)]">
                <span>🔒 PAGO SEGURO</span><span>🛡️ CIFRADO SSL</span>
              </div>
            </aside>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
