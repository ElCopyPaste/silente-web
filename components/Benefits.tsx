export function Benefits() {
  const items = [
    { icon: "infinity", label: "Conversación ilimitada*" },
    { icon: "clock", label: "Disponible 24/7" },
    { icon: "lock", label: "Totalmente privada" },
  ];

  return (
    <ul className="mx-auto mt-3 grid w-full max-w-[780px] grid-cols-3 md:mt-10">
      {items.map(({ icon, label }, index) => (
        <li
          key={label}
          className={"flex min-h-[68px] flex-col items-center justify-center gap-1.5 px-1 md:min-h-28 md:gap-2 md:px-2 text-center text-[clamp(11px,2vw,16px)] leading-snug text-[var(--silente-muted)] " + (index > 0 ? "border-l border-[rgba(174,181,188,.4)]" : "")}
        >
          <span aria-hidden="true" className="inline-flex h-7 w-7 shrink-0 items-center justify-center text-[var(--silente-gold)] md:h-9 md:w-9">
            {icon === "infinity" && <span className="text-4xl leading-none">∞</span>}
            {icon === "clock" && (
              <svg viewBox="0 0 24 24" className="h-8 w-8 fill-none stroke-current" strokeWidth="1.5">
                <circle cx="12" cy="12" r="8.5" />
                <path d="M12 7v5l3.2 2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
            {icon === "lock" && (
              <svg viewBox="0 0 24 24" className="h-8 w-8 fill-none stroke-current" strokeWidth="1.5">
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
