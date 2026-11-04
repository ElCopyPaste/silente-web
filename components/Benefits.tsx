export function Benefits() {
  const items = [
    { icon: "infinity", label: "Conversación ilimitada*" },
    { icon: "clock", label: "Disponible 24/7" },
    { icon: "lock", label: "Totalmente privada" },
  ];

  return (
    <ul className="mx-auto mt-8 grid w-full max-w-[780px] grid-cols-3 sm:mt-10">
      {items.map(({ icon, label }, index) => (
        <li
          key={label}
          className={"flex min-h-28 flex-col items-center justify-center gap-2 px-1.5 text-center text-xs leading-[1.4] text-[var(--silente-muted)] sm:text-sm lg:text-base " + (index > 0 ? "border-l border-[rgba(174,181,188,.4)]" : "")}
        >
          <span aria-hidden="true" className="inline-flex h-7 w-7 shrink-0 items-center justify-center text-[var(--silente-gold)] lg:h-9 lg:w-9">
            {icon === "infinity" && <svg viewBox="0 0 24 24" className="h-7 w-7 fill-none stroke-current" strokeWidth="1.5"><path d="M12 12c-2-3-3.5-5-6-5a5 5 0 0 0 0 10c2.5 0 4-2 6-5Zm0 0c2-3 3.5-5 6-5a5 5 0 0 1 0 10c-2.5 0-4-2-6-5Z" /></svg>}
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
