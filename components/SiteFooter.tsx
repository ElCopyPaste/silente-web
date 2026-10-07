const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
import { CookiePreferences } from "@/components/CookiePreferences";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--silente-border)] px-5 py-10 md:px-8">
      <div className="mx-auto max-w-6xl rounded-3xl border border-[rgba(213,170,75,.3)] bg-[rgba(23,35,49,.72)] p-6 md:p-9">
        <a href={`${basePath}/`} className="block text-center tracking-[.18em] text-[var(--silente-gold)]">SILENTE</a>
        <div className="mt-8 grid gap-8 text-center sm:grid-cols-3 sm:text-left">
          <section>
            <h2 className="text-xs font-semibold uppercase tracking-[.18em] text-[var(--silente-gold)]">Compañía</h2>
            <a className="mt-4 block text-sm text-[var(--silente-ivory)] transition-colors hover:text-[var(--silente-gold-light)]" href="mailto:contacto@logika.cl">Contacto</a>
            <CookiePreferences />
          </section>
          <section>
            <h2 className="text-xs font-semibold uppercase tracking-[.18em] text-[var(--silente-gold)]">Legal</h2>
            <nav aria-label="Información legal" className="mt-4 flex flex-col items-center gap-3 text-sm text-[var(--silente-muted)] sm:items-start">
              <a className="transition-colors hover:text-[var(--silente-ivory)]" href={`${basePath}/terminos/`}>Términos</a>
              <a className="transition-colors hover:text-[var(--silente-ivory)]" href={`${basePath}/privacidad/`}>Privacidad</a>
              <a className="transition-colors hover:text-[var(--silente-ivory)]" href={`${basePath}/reembolsos/`}>Reembolsos</a>
            </nav>
          </section>
          <section>
            <h2 className="text-xs font-semibold uppercase tracking-[.18em] text-[var(--silente-gold)]">Redes sociales</h2>
            <nav aria-label="Redes sociales" className="mt-4 flex flex-col items-center gap-3 text-sm text-[var(--silente-muted)] sm:items-start">
              <a className="transition-colors hover:text-[var(--silente-ivory)]" href="#">Instagram</a>
              <a className="transition-colors hover:text-[var(--silente-ivory)]" href="#">TikTok</a>
              <a className="transition-colors hover:text-[var(--silente-ivory)]" href="#">Facebook</a>
            </nav>
          </section>
        </div>
      </div>
    </footer>
  );
}
