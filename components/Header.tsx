"use client";

import { useState } from "react";

const links = [
  ["Cómo funciona", "#como-funciona"],
  ["Elige tu plan", "#elige-tu-plan"],
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-30 mx-auto max-w-6xl">
      <div className="relative flex h-[68px] items-center justify-center md:h-[76px]">
        <a
          href="#"
          aria-label="Silente, inicio"
          className="flex flex-col items-center gap-1 text-[16px] font-normal tracking-[.13em] text-[var(--silente-gold-light)] md:text-lg"
        >
          <span aria-hidden="true" className="relative mb-0.5 h-[23px] w-[23px] rounded-full border-2 border-[var(--silente-gold)]">
            <span className="absolute left-1/2 top-[-8px] h-[7px] w-[7px] -translate-x-1/2 rounded-full bg-[var(--silente-gold-light)] shadow-[0_0_12px_rgba(229,196,106,.8)]" />
          </span>
          silente
        </a>

        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="menu-principal"
          onClick={() => setOpen((value) => !value)}
          className="absolute right-0 top-1/2 flex h-12 w-12 -translate-y-1/2 flex-col items-center justify-center gap-[7px] rounded-full transition-colors hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--silente-gold-light)]"
        >
          <span className="h-[2px] w-8 bg-[var(--silente-gold-light)] transition-transform" />
          <span className="h-[2px] w-8 bg-[var(--silente-gold-light)] transition-transform" />
          <span className="h-[2px] w-8 bg-[var(--silente-gold-light)] transition-transform" />
        </button>
      </div>

      <div
        id="menu-principal"
        className={
          "overflow-hidden transition-[max-height,opacity,margin] duration-300 " +
          (open ? "mt-3 max-h-40 opacity-100" : "max-h-0 opacity-0")
        }
      >
        <nav
          className="rounded-2xl border border-[rgba(213,170,75,.35)] bg-[rgba(5,14,22,.9)] p-2 backdrop-blur-xl"
          aria-label="Navegación principal"
        >
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 text-sm text-[var(--silente-ivory)] transition-colors hover:bg-[rgba(213,170,75,.12)] hover:text-[var(--silente-gold-light)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[var(--silente-gold-light)]"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
