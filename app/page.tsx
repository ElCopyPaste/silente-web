import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Pricing } from "@/components/Pricing";

export default function Home() {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <Pricing />
      <footer className="border-t border-[var(--silente-border)] px-5 py-8 text-center text-xs text-[var(--silente-muted)]">
        Silente
      </footer>
    </main>
  );
}
