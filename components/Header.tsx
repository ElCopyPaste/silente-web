export function Header() {
  return (
    <header className="mx-auto flex max-w-6xl items-center justify-between">
      <div className="h-8 w-20" aria-hidden="true" />
      <div className="text-sm tracking-[.22em] text-[var(--silente-gold)]">SILENTE</div>
      <button
        type="button"
        aria-label="Abrir menú"
        className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-[var(--silente-border)]"
      >
        <span className="h-px w-4 bg-[var(--silente-ivory)]" />
        <span className="h-px w-4 bg-[var(--silente-ivory)]" />
      </button>
    </header>
  );
}
