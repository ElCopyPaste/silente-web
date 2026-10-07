const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function SocialIcon({ name }: { name: "TikTok" | "Instagram" | "Facebook" }) {
  if (name === "TikTok") {
    return <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M19.6 8.1a7.2 7.2 0 0 1-4.3-1.4v8.1a6.2 6.2 0 1 1-5.4-6.1v3.3a2.9 2.9 0 1 0 2.1 2.8V2.8h3.3c.2 2.1 1.6 3.7 4.3 4.1v1.2Z" /></svg>;
  }
  if (name === "Instagram") {
    return <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.6" cy="6.6" r="1" className="fill-current stroke-none" /></svg>;
  }
  return <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M13.5 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.3V13h2.8v8h3.4Z" /></svg>;
}

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--silente-border)] px-5 py-10 md:px-8">
      <div className="mx-auto max-w-6xl rounded-3xl border border-[rgba(213,170,75,.3)] bg-[rgba(23,35,49,.72)] p-6 md:p-9">
        <a href={`${basePath}/`} className="block text-center tracking-[.18em] text-[var(--silente-gold)]">SILENTE</a>
        <div className="mt-8 grid gap-8 text-center sm:grid-cols-3 sm:text-left">
          <section>
            <h2 className="text-xs font-semibold uppercase tracking-[.18em] text-[var(--silente-gold)]">Compañía</h2>
            <a className="mt-4 inline-block text-sm text-[var(--silente-ivory)] transition-colors hover:text-[var(--silente-gold-light)]" href={`${basePath}/`}>Silente</a>
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
            <h2 className="text-xs font-semibold uppercase tracking-[.18em] text-[var(--silente-gold)]">Contacto</h2>
            <a href="mailto:comercial@silente.cl" aria-label="Escríbenos por correo" title="Escríbenos por correo" className="mt-4 inline-flex items-center gap-2 text-sm text-[var(--silente-ivory)] transition-colors hover:text-[var(--silente-gold-light)]">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="1.7"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></svg>
              Escríbenos
            </a>
            <div aria-label="Redes sociales" className="mt-4 flex justify-center gap-4 sm:justify-start">
              {(["TikTok", "Instagram", "Facebook"] as const).map((name) => (
                <a key={name} href="#" aria-label={name} title={name} className="text-[var(--silente-gold)] transition-colors hover:text-[var(--silente-gold-light)]">
                  <SocialIcon name={name} />
                </a>
              ))}
            </div>
          </section>
        </div>
      </div>
    </footer>
  );
}
