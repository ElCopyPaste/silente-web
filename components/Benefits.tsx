export function Benefits() {
  const items = [
    ["∞", "Conversación ilimitada*"],
    ["24/7", "Disponible 24/7"],
    ["◈", "Totalmente privada"],
  ];

  return (
    <div className="mt-10 grid gap-3 text-sm text-[var(--silente-muted)] sm:grid-cols-3">
      {items.map(([mark, label]) => (
        <div key={label} className="flex items-center justify-center gap-2">
          <span className="text-[var(--silente-gold)]">{mark}</span>
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}
