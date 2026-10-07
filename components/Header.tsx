"use client";

import Image from "next/image";
import { useState, type ReactNode } from "react";

const links = [
  ["Qué es Silente", "#como-funciona"],
  ["Elige tu plan", "#elige-tu-plan"],
  ["Preguntas frecuentes", "#preguntas-frecuentes"],
  ["Testimonios", "#testimonios"],
] as const;

export function Header({ mobileHeroContent }: { mobileHeroContent: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-30 mx-auto max-w-6xl">
      <div className="relative grid h-[100px] grid-cols-[52px_minmax(0,1fr)_52px] items-center gap-1 md:block md:h-[116px]">
        <a href="#" aria-label="Silente, inicio" className="relative col-start-1 flex items-center justify-start focus-visible:rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--silente-gold-light)] md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
          <Image src={(process.env.NEXT_PUBLIC_BASE_PATH ?? "") + "/logo-silente.webp"} alt="Silente" width={640} height={692} priority unoptimized className="h-[64px] w-auto object-contain md:h-[110px]" />
        </a>
        <div className="col-start-2 flex min-w-0 items-center justify-center text-center md:hidden">
          {mobileHeroContent}
        </div>
        <button type="button" aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open} aria-controls="menu-principal" onClick={() => setOpen((value) => !value)} className="relative col-start-3 flex h-12 w-12 flex-col items-center justify-center justify-self-end gap-[7px] rounded-full transition-colors hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--silente-gold-light)] md:absolute md:right-0 md:top-1/2 md:h-12 md:w-12 md:-translate-y-1/2 md:gap-[7px]">
          <span className="h-[2px] w-8 bg-[var(--silente-gold-light)] transition-transform md:w-8" />
          <span className="h-[2px] w-8 bg-[var(--silente-gold-light)] transition-transform md:w-8" />
          <span className="h-[2px] w-7 bg-[var(--silente-gold-light)] transition-transform md:w-8" />
        </button>
      </div>
      <div id="menu-principal" className={"overflow-hidden transition-[max-height,opacity,margin] duration-300 " + (open ? "mt-3 max-h-56 opacity-100" : "max-h-0 opacity-0")}>
        <nav className="rounded-2xl border border-[rgba(213,170,75,.35)] bg-[rgba(5,14,22,.9)] p-2 backdrop-blur-xl" aria-label="Navegación principal">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 text-sm text-[var(--silente-ivory)] transition-colors hover:bg-[rgba(213,170,75,.12)] hover:text-[var(--silente-gold-light)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[var(--silente-gold-light)]">
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
