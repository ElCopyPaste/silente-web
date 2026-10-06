import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { AstrologySection, FAQSection, QuestionsSection } from "@/components/ContentSections";
import { Pricing } from "@/components/Pricing";

export default function Home() {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <QuestionsSection />
      <AstrologySection />
      <Pricing />
      <FAQSection />
      <footer className="border-t border-[var(--silente-border)] px-5 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 text-center text-xs text-[var(--silente-muted)] md:flex-row md:items-center md:justify-between md:text-left">
          <div>
            <span className="tracking-[.18em] text-[var(--silente-gold)]">SILENTE</span>
            <p className="mt-2">Una conversación astrológica privada por WhatsApp.</p>
          </div>
          <nav aria-label="Información legal" className="flex flex-wrap justify-center gap-x-5 gap-y-2 md:justify-end">
            <a className="transition-colors hover:text-[var(--silente-ivory)]" href="https://www.silente.cl/terminos">Términos</a>
            <a className="transition-colors hover:text-[var(--silente-ivory)]" href="https://www.silente.cl/privacidad">Privacidad</a>
            <a className="transition-colors hover:text-[var(--silente-ivory)]" href="https://www.silente.cl/reembolsos">Reembolsos</a>
          </nav>
        </div>
        <p className="mx-auto mt-8 max-w-6xl text-center text-xs text-[var(--silente-muted)] md:text-left">
          Hay cosas que necesitas saber. Hay cosas que necesitas hablar.
        </p>
      </footer>
    </main>
  );
}
