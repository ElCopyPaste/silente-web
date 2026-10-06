export function SilenteSymbol() {
  return (
    <div
      role="img"
      aria-label="Símbolo provisional de Silente"
      className="silente-symbol relative flex h-28 w-28 items-center justify-center md:h-40 md:w-40"
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-full border border-[rgba(229,196,106,.16)] bg-[radial-gradient(circle,rgba(229,196,106,.13),rgba(229,196,106,.035)_42%,transparent_70%)] shadow-[0_0_28px_rgba(229,196,106,.12),0_0_90px_rgba(213,170,75,.12)]"
      />
      <span
        aria-hidden="true"
        className="absolute inset-[9px] rounded-full border-[1.5px] border-[var(--silente-gold-light)] shadow-[inset_0_0_18px_rgba(229,196,106,.08),0_0_18px_rgba(229,196,106,.16)] md:inset-[12px]"
      />
      <span
        aria-hidden="true"
        className="absolute inset-[22px] rounded-full border border-[rgba(213,170,75,.45)] md:inset-[31px]"
      />
      <span
        aria-hidden="true"
        className="absolute left-1/2 top-[-2px] h-4 w-4 -translate-x-1/2 rounded-full bg-[var(--silente-gold-light)] shadow-[0_0_18px_rgba(229,196,106,.85),0_0_34px_rgba(213,170,75,.35)] md:top-[-3px] md:h-5 md:w-5"
      />
      <span
        aria-hidden="true"
        className="relative h-2.5 w-2.5 rounded-full bg-[var(--silente-gold-light)] shadow-[0_0_14px_rgba(229,196,106,.95),0_0_30px_rgba(213,170,75,.45)] md:h-3 md:w-3"
      />
    </div>
  );
}
