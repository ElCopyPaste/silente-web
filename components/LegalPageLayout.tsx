import type { ReactNode } from "react";
import Image from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function LegalPageLayout({
  title,
  version,
  intro,
  children,
}: {
  title: string;
  version: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <main className="min-h-screen bg-[var(--silente-night)] text-[var(--silente-ivory)]">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 md:px-8 md:py-7">
        <a href={`${basePath}/`} aria-label="Silente, inicio" className="inline-flex items-center rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--silente-gold-light)]">
          <Image
            src={`${basePath}/logo-silente.webp`}
            alt="Silente"
            width={640}
            height={692}
            priority
            unoptimized
            className="h-16 w-auto object-contain md:h-20"
          />
        </a>
        <a href={`${basePath}/`} className="rounded-full border border-[rgba(213,170,75,.4)] px-4 py-2 text-sm text-[var(--silente-gold-light)] transition-colors hover:border-[var(--silente-gold-light)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--silente-gold-light)]">
          Volver a Silente
        </a>
      </header>

      <article className="mx-auto max-w-4xl px-5 pb-20 pt-8 md:px-8 md:pt-12">
        <header className="mb-12 border-b border-[var(--silente-border)] pb-8">
          <p className="text-xs uppercase tracking-[.22em] text-[var(--silente-gold)]">Información legal</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-[-.03em] md:text-6xl">{title}</h1>
          <p className="mt-4 text-sm text-[var(--silente-muted)]">Versión {version}</p>
          <p className="mt-7 text-base leading-7 text-[var(--silente-ivory)]/90 md:text-lg md:leading-8">{intro}</p>
        </header>
        <div className="space-y-10">{children}</div>
      </article>

      <footer className="border-t border-[var(--silente-border)] px-5 py-8">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-5 text-center text-xs text-[var(--silente-muted)] sm:flex-row sm:text-left">
          <span className="tracking-[.18em] text-[var(--silente-gold)]">SILENTE</span>
          <nav aria-label="Información legal" className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            <a className="transition-colors hover:text-[var(--silente-ivory)]" href={`${basePath}/terminos/`}>Términos</a>
            <a className="transition-colors hover:text-[var(--silente-ivory)]" href={`${basePath}/privacidad/`}>Privacidad</a>
            <a className="transition-colors hover:text-[var(--silente-ivory)]" href={`${basePath}/reembolsos/`}>Reembolsos</a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
