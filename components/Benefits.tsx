export function Benefits() {
  const items = [
    { icon: "infinity", label: "Conversación ilimitada*" },
    { icon: "clock", label: "Disponible 24/7" },
    { icon: "lock", label: "Totalmente privada" },
  ];

  return (
    <ul className="mx-auto mt-8 grid w-full max-w-[780px] gap-2 sm:mt-10 sm:grid-cols-3 sm:gap-3">
      {items.map(({ icon, label }) => (
        <li
          key={label}
          className="flex min-h-12 items-center justify-center gap-2 rounded-full border border-[var(--silente-border)] bg-[rgba(23,35,49,.56)] px-3 py-2 text-center text-sm text-[var(--silente-muted)]"
        >
          <span aria-hidden="true" className="inline-flex h-5 w-5 shrink-0 items-center justify-center text-[var(--silente-gold)]">
            {icon === "infinity" && <span className="text-lg leading-none">∞</span>}
            {icon === "clock" && (
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth="1.7">
                <circle cx="12" cy="12" r="8.5" />
                <path d="M12 7v5l3.2 2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
            {icon === "lock" && (
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth="1.7">
                <rect x="5" y="10" width="14" height="11" rx="2" />
                <path d="M8 10V7a4 4 0 0 1 8 0v3" strokeLinecap="round" />
              </svg>
            )}
          </span>
          <span>{label}</span>
        </li>
      ))}
    </ul>
  );
}
