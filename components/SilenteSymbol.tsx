import Image from "next/image";

export function SilenteSymbol() {
  return (
    <div
      role="img"
      aria-label="Aro dorado de luz en el centro del sistema orbital"
      className="silente-symbol relative aspect-square w-[min(30vw,180px)] lg:w-72"
    >
      <Image
        src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/central-symbol.webp`}
        alt=""
        fill
        unoptimized
        sizes="(min-width: 1024px) 288px, (min-width: 600px) 180px, 30vw"
        className="object-contain opacity-80 mix-blend-screen"
      />
    </div>
  );
}
