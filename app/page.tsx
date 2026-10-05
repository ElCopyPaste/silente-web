import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Pricing } from "@/components/Pricing";

export default function Home() {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <Pricing />
      <footer className="border-t border-[var(--silente-border)] px-5 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 text-center text-xs text-[var(--silente-muted)] md:flex-row md:items-center md:justify-between md:text-left">
          <span className="tracking-[.18em] text-[var(--silente-gold)]">SILENTE</span>
          <span>Hay cosas que necesitas saber. Hay cosas que necesitas hablar.</span>
        </div>
      </footer>
    </main>
  );
}
