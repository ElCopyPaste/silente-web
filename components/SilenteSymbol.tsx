import Image from "next/image";

export function SilenteSymbol() {
  return (
    <div
      role="img"
      aria-label="Aro dorado de luz en el centro del sistema orbital"
      className="silente-symbol relative aspect-square w-[min(36vw,280px)] md:w-72"
    >
      <Image
        src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/central-symbol.webp`}
        alt=""
        fill
        unoptimized
        sizes="(max-width: 768px) 36vw, 288px"
        className="object-contain opacity-80 mix-blend-screen"
      />
    </div>
  );
}
