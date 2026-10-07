"use client";

import { useEffect, useRef, useState } from "react";

type Preferences = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
};

const defaultPreferences: Preferences = { necessary: true, analytics: false, marketing: false };
const storageKey = "silente-cookie-preferences";

function loadPreferences(): Preferences {
  if (typeof window === "undefined") return defaultPreferences;
  try {
    const saved = window.localStorage.getItem(storageKey);
    if (!saved) return defaultPreferences;
    const parsed = JSON.parse(saved) as Partial<Preferences>;
    return {
      necessary: true,
      analytics: parsed.analytics === true,
      marketing: parsed.marketing === true,
    };
  } catch {
    return defaultPreferences;
  }
}

function PreferenceSwitch({ checked, disabled, label, onChange }: {
  checked: boolean;
  disabled?: boolean;
  label: string;
  onChange?: () => void;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-label={label}
      aria-checked={checked}
      disabled={disabled}
      onClick={onChange}
      className={`relative h-7 w-12 shrink-0 rounded-full transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--silente-gold-light)] ${checked ? "bg-[var(--silente-gold)]" : "bg-[rgba(255,255,255,.2)]"} ${disabled ? "cursor-not-allowed opacity-80" : ""}`}
    >
      <span className={`absolute top-1 h-5 w-5 rounded-full bg-[var(--silente-night)] transition-transform ${checked ? "translate-x-6" : "translate-x-1"}`} />
    </button>
  );
}

export function CookiePreferences() {
  const [open, setOpen] = useState(false);
  const [preferences, setPreferences] = useState<Preferences>(loadPreferences);
  const dialogRef = useRef<HTMLDivElement>(null);

  function closeWithoutSaving() {
    setPreferences(loadPreferences());
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const dialog = dialogRef.current;
    const focusable = () => Array.from(dialog?.querySelectorAll<HTMLElement>('button:not(:disabled)') ?? []);
    focusable()[0]?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }
      if (event.key !== "Tab") return;
      const items = focusable();
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  function savePreferences() {
    try {
      window.localStorage.setItem(storageKey, JSON.stringify({
        ...preferences,
        updatedAt: new Date().toISOString(),
      }));
    } catch {
      // Keep the dialog usable when browser storage is unavailable.
    }
    setOpen(false);
  }

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setPreferences(loadPreferences());
          setOpen(true);
        }}
        className="mt-4 text-sm text-[var(--silente-muted)] underline decoration-[rgba(213,170,75,.45)] underline-offset-4 transition-colors hover:text-[var(--silente-gold-light)]"
      >
        Preferencias de cookies
      </button>

      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/60 p-4 backdrop-blur-sm">
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-preferences-title"
            aria-describedby="cookie-preferences-description"
            tabIndex={-1}
            className="relative my-auto w-full max-w-2xl rounded-3xl border border-[var(--silente-border)] bg-[var(--silente-night)] p-6 text-[var(--silente-ivory)] shadow-2xl md:p-8"
          >
            <h2 id="cookie-preferences-title" className="text-2xl font-semibold">Preferencias de cookies</h2>
            <p id="cookie-preferences-description" className="mt-2 text-sm leading-6 text-[var(--silente-muted)]">Elige qué categorías permites. Puedes cambiarlas cuando quieras.</p>

            <div className="mt-6 space-y-4">
              <PreferenceRow
                title="Necesarias"
                description="Imprescindibles para el funcionamiento del sitio y para guardar esta preferencia. Siempre activas."
                checked
                disabled
              />
              <PreferenceRow
                title="Analítica"
                description="Nos ayudan a entender cómo se usa el sitio de forma agregada."
                checked={preferences.analytics}
                onChange={() => setPreferences((current) => ({ ...current, analytics: !current.analytics }))}
              />
              <PreferenceRow
                title="Marketing"
                description="Permiten medir campañas y mostrar anuncios relevantes."
                checked={preferences.marketing}
                onChange={() => setPreferences((current) => ({ ...current, marketing: !current.marketing }))}
              />
            </div>

            <div className="mt-7 flex flex-col-reverse justify-end gap-3 sm:flex-row">
              <button type="button" onClick={closeWithoutSaving} className="rounded-full border border-[var(--silente-border)] px-5 py-3 text-sm font-medium text-[var(--silente-ivory)] transition-colors hover:border-[var(--silente-gold)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--silente-gold-light)]">Cancelar</button>
              <button type="button" onClick={savePreferences} className="rounded-full bg-[var(--silente-gold)] px-5 py-3 text-sm font-semibold text-[var(--silente-night)] transition-colors hover:bg-[var(--silente-gold-light)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--silente-gold-light)]">Guardar preferencias</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function PreferenceRow({ title, description, checked, disabled, onChange }: {
  title: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: () => void;
}) {
  return (
    <section className="flex items-start justify-between gap-5 rounded-2xl border border-[var(--silente-border)] bg-[rgba(23,35,49,.55)] p-4">
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="mt-1 text-sm leading-6 text-[var(--silente-muted)]">{description}</p>
      </div>
      <PreferenceSwitch checked={checked} disabled={disabled} label={`${title}: ${checked ? "activadas" : "desactivadas"}`} onChange={onChange} />
    </section>
  );
}
