"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { SilenteSymbol } from "./SilenteSymbol";

const questions = [
  "¿Qué siente realmente por mí?",
  "¿Estoy tomando la decisión correcta?",
  "¿Acaso me está engañando?",
  "¿Qué me pasará el próximo mes?",
  "¿Encontraré el amor?",
  "¿Por qué me va mal?",
];

const positions = [
  "left-1/2 top-[2%] -translate-x-1/2",
  "right-[2%] top-[19%]",
  "right-[1%] bottom-[11%]",
  "left-1/2 bottom-[0%] -translate-x-1/2",
  "left-[1%] bottom-[11%]",
  "left-[2%] top-[19%]",
];

export function Hero() {
  const [state, setState] = useState<"saber" | "hablar">("saber");

  useEffect(() => {
    const timer = window.setInterval(() => {
      setState((current) => (current === "saber" ? "hablar" : "saber"));
    }, 3200);

    return () => window.clearInterval(timer);
  }, []);

  const goToHow = () => {
    document.getElementById("como-funciona")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="silente-stars relative min-h-screen overflow-hidden px-5 pb-16 pt-5 md:px-8">
      <header className="mx-auto flex max-w-6xl items-center justify-between">
        <div className="h-8 w-20" aria-hidden="true" />
        <div className="text-sm tracking-[.22em] text-[var(--silente-gold)]">SILENTE</div>
        <button
          type="button"
          aria-label="Abrir menú"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-[var(--silente-border)]"
        >
          <span className="h-px w-4 bg-[var(--silente-ivory)]" />
          <span className="h-px w-4 bg-[var(--silente-ivory)]" />
        </button>
      </header>

      <div className="mx-auto mt-16 max-w-6xl text-center md:mt-20">
        <h1 className="text-[clamp(2.25rem,7vw,5.5rem)] font-semibold leading-[.95] tracking-[-.045em] text-[var(--silente-ivory)]">
          Hay cosas que necesitas
          <span className="relative ml-2 inline-grid min-w-[3.8em] justify-items-start text-left align-baseline">
            <motion.span
              key={state}
              initial={{ opacity: 0, y: state === "saber" ? 10 : -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: .8, ease: "easeInOut" }}
            >
              {state.toUpperCase()}.
            </motion.span>
          </span>
        </h1>

        <motion.p
          key={state + "-phrase"}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8, ease: "easeInOut" }}
          className="reckless mt-5 text-2xl text-[var(--silente-gold)] md:text-3xl"
        >
          {state === "saber" ? "Silente te espera." : "Silente te escucha."}
        </motion.p>

        <div className="relative mx-auto mt-14 h-[430px] max-w-5xl md:h-[500px]">
          <div className="orbit-line absolute left-1/2 top-1/2 h-56 w-[min(88vw,560px)] -translate-x-1/2 -translate-y-1/2 rotate-[-12deg] md:h-72" />
          <div className="orbit-line absolute left-1/2 top-1/2 h-[330px] w-[min(98vw,760px)] -translate-x-1/2 -translate-y-1/2 rotate-[17deg] md:h-[430px]" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <SilenteSymbol />
          </div>

          {questions.map((question, index) => (
            <motion.button
              key={question}
              type="button"
              onClick={goToHow}
              className={"question-capsule absolute max-w-[180px] rounded-full px-4 py-3 text-left text-xs leading-tight text-[var(--silente-ivory)] md:max-w-[230px] md:px-5 md:py-3.5 md:text-sm " + positions[index]}
              animate={{ y: [0, index % 2 === 0 ? -6 : 6, 0], scale: [1, 1.015, 1] }}
              transition={{ duration: 5 + index * .35, repeat: Infinity, ease: "easeInOut" }}
            >
              {question}
            </motion.button>
          ))}
        </div>

        <a
          href="#como-funciona"
          className="mx-auto flex w-full max-w-sm items-center justify-between rounded-full bg-[var(--silente-gold)] px-6 py-4 text-left font-semibold text-[var(--silente-night)]"
        >
          <span>Chatear con Silente</span>
          <span aria-hidden="true">→</span>
        </a>
        <p className="mt-3 text-sm text-[var(--silente-muted)]">Conversación privada por WhatsApp</p>
      </div>
    </section>
  );
}
