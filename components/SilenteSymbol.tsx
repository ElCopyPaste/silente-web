export function SilenteSymbol() {
  return (
    <div
      role="img"
      aria-label="Símbolo provisional de Silente"
      className="relative flex h-24 w-24 items-center justify-center rounded-full border border-[var(--silente-gold)] shadow-[0_0_40px_rgba(213,170,75,.2)] md:h-28 md:w-28"
    >
      <span className="absolute -top-1 h-2.5 w-2.5 rounded-full bg-[var(--silente-gold-light)]" />
      <span className="h-1.5 w-1.5 rounded-full bg-[var(--silente-gold-light)]" />
    </div>
  );
}
