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
      <div className="flex items-center justify-between">
        <a href="#" aria-label="Silente, inicio" className="text-sm font-semibold tracking-[.22em] text-[var(--silente-gold)]">
          SILENTE
        </a>

        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="menu-principal"
          onClick={() => setOpen((value) => !value)}
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-[var(--silente-border)] transition-colors hover:border-[var(--silente-gold)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--silente-gold-light)]"
        >
          <span className={"h-px w-4 bg-[var(--silente-ivory)] transition-transform " + (open ? "translate-y-[3px] rotate-45" : "")} />
          <span className={"h-px w-4 bg-[var(--silente-ivory)] transition-transform " + (open ? "-translate-y-[3px] -rotate-45" : "")} />
        </button>
      </div>

      <div
        id="menu-principal"
        className={
          "overflow-hidden transition-[max-height,opacity,margin] duration-300 " +
          (open ? "mt-3 max-h-40 opacity-100" : "max-h-0 opacity-0")
        }
      >
        <nav className="rounded-2xl border border-[var(--silente-border)] bg-[rgba(18,27,38,.94)] p-2 backdrop-blur-md" aria-label="Navegación principal">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 text-sm text-[var(--silente-ivory)] transition-colors hover:bg-[var(--silente-secondary)] hover:text-[var(--silente-gold-light)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[var(--silente-gold-light)]"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
