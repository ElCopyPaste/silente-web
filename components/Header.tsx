"use client";

import Image from "next/image";
import { useState } from "react";

const links = [
  ["Qué es Silente", "#como-funciona"],
  ["Elige tu plan", "#elige-tu-plan"],
  ["Preguntas frecuentes", "#preguntas-frecuentes"],
  ["Testimonios", "#testimonios"],
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-30 mx-auto max-w-6xl">
      <div className="relative flex h-[96px] items-center justify-center md:h-[116px]">
        <a href="#" aria-label="Silente, inicio" className="flex items-center justify-center focus-visible:rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--silente-gold-light)]">
          <Image src={(process.env.NEXT_PUBLIC_BASE_PATH ?? "") + "/logo-silente.webp"} alt="Silente" width={640} height={692} priority unoptimized className="h-[90px] w-auto object-contain md:h-[110px]" />
        </a>
        <button type="button" aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open} aria-controls="menu-principal" onClick={() => setOpen((value) => !value)} className="absolute right-0 top-1/2 flex h-12 w-12 -translate-y-1/2 flex-col items-center justify-center gap-[7px] rounded-full transition-colors hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--silente-gold-light)]">
          <span className="h-[2px] w-8 bg-[var(--silente-gold-light)] transition-transform" />
          <span className="h-[2px] w-8 bg-[var(--silente-gold-light)] transition-transform" />
          <span className="h-[2px] w-8 bg-[var(--silente-gold-light)] transition-transform" />
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
