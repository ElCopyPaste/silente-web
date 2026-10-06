export function SilenteSymbol() {
  return (
    <div
      role="img"
      aria-label="Símbolo de Silente"
      className="silente-symbol relative flex h-28 w-28 items-center justify-center rounded-full border-[2px] border-[var(--silente-gold-light)] bg-[radial-gradient(circle,rgba(229,196,106,.08),transparent_58%)] shadow-[0_0_24px_rgba(229,196,106,.25),0_0_70px_rgba(213,170,75,.12)] md:h-40 md:w-40"
    >
      <span className="absolute -top-2 h-4 w-4 rounded-full bg-[var(--silente-gold-light)] shadow-[0_0_18px_rgba(229,196,106,.75)]" />
      <span className="absolute inset-[10px] rounded-full border border-[var(--silente-gold)] opacity-25" />
      <span className="h-2 w-2 rounded-full bg-[var(--silente-gold-light)] shadow-[0_0_12px_rgba(229,196,106,.8)]" />
    </div>
  );
}
