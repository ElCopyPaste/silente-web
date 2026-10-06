"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Benefits } from "./Benefits";
import { Header } from "./Header";
import { SilenteSymbol } from "./SilenteSymbol";

const questions = [
  "¿Qué siente realmente por mí?",
  "¿Estoy tomando la decisión correcta?",
  "¿Acaso me está engañando?",
  "¿Qué me pasará el próximo mes?",
  "¿Encontraré el amor?",
  "¿Por qué me va mal?",
];

const desktopPositions = [
  "left-1/2 top-[2%] -translate-x-1/2",
  "right-[3%] top-[23%]",
  "right-[5%] bottom-[15%]",
  "left-1/2 bottom-[2%] -translate-x-1/2",
  "left-[5%] bottom-[15%]",
  "left-[3%] top-[23%]",
];

const mobilePositions = [
  "left-1/2 top-[1%] -translate-x-1/2",
  "right-[0%] top-[25%]",
  "right-[1%] bottom-[17%]",
  "left-[1%] bottom-[17%]",
  "left-[0%] top-[25%]",
  "left-1/2 bottom-[1%] -translate-x-1/2",
];

export function Hero() {
  const [state, setState] = useState<"saber" | "hablar">("saber");
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const timer = window.setInterval(() => {
      setState((current) => (current === "saber" ? "hablar" : "saber"));
    }, 3200);
    return () => window.clearInterval(timer);
  }, [reduceMotion]);

  const goToHow = () => {
    document.getElementById("como-funciona")?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <section className="silente-stars relative min-h-screen overflow-hidden px-4 pb-12 pt-3 md:px-8 md:pb-16 md:pt-5">
      <Header />

      <div className="relative z-10 mx-auto mt-9 max-w-6xl text-center md:mt-14">
        <h1 className="text-[clamp(2.35rem,7vw,5.5rem)] font-semibold leading-[.92] tracking-[-.055em] text-[var(--silente-ivory)]">
          <span className="block">Hay cosas que necesitas</span>
          <span className="mt-1 block">
            <span className="relative inline-grid w-[4.1em] justify-items-center">
              <motion.span
                key={state}
                initial={reduceMotion ? false : { opacity: 0, y: state === "saber" ? 8 : -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={reduceMotion ? { duration: 0 } : { duration: 0.8, ease: "easeInOut" }}
              >
                {state.toUpperCase()}.
              </motion.span>
            </span>
          </span>
        </h1>

        <motion.p
          key={state + "-phrase"}
          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.8, ease: "easeInOut" }}
          className="mt-3 text-[1.65rem] font-medium tracking-[-.025em] text-[var(--silente-gold)] md:mt-4 md:text-3xl"
        >
          {state === "saber" ? "Silente te espera." : "Silente te escucha."}
        </motion.p>

        <div className="relative mx-auto mt-5 h-[455px] w-full max-w-6xl md:mt-8 md:h-[610px]">
          <div className="orbit-line absolute left-1/2 top-1/2 h-[190px] w-[min(100vw,500px)] -translate-x-1/2 -translate-y-1/2 rotate-[-17deg]" aria-hidden="true" />
          <div className="orbit-line absolute left-1/2 top-1/2 h-[265px] w-[min(116vw,680px)] -translate-x-1/2 -translate-y-1/2 rotate-[15deg]" aria-hidden="true" />
          <div className="orbit-line absolute left-1/2 top-1/2 h-[360px] w-[min(132vw,850px)] -translate-x-1/2 -translate-y-1/2 rotate-[-8deg] opacity-70" aria-hidden="true" />
          <div className="orbit-line absolute left-1/2 top-1/2 h-[470px] w-[min(148vw,1080px)] -translate-x-1/2 -translate-y-1/2 rotate-[20deg] opacity-45" aria-hidden="true" />

          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            animate={reduceMotion ? undefined : { rotate: [0, 3, 0, -3, 0] }}
            transition={reduceMotion ? undefined : { duration: 14, repeat: Infinity, ease: "easeInOut" }}
          >
            <SilenteSymbol />
          </motion.div>

          {questions.map((question, index) => (
            <motion.button
              key={question}
              type="button"
              onClick={goToHow}
              className={
                "question-capsule absolute hidden max-w-[240px] rounded-full px-5 py-4 text-left text-sm leading-[1.2] text-[var(--silente-ivory)] md:block " +
                desktopPositions[index]
              }
              animate={reduceMotion ? undefined : { y: [0, index % 2 === 0 ? -6 : 6, 0] }}
              transition={reduceMotion ? undefined : { duration: 5 + index * 0.35, repeat: Infinity, ease: "easeInOut" }}
            >
              {question}
            </motion.button>
          ))}

          {questions.map((question, index) => (
            <motion.button
              key={"mobile-" + question}
              type="button"
              onClick={goToHow}
              className={
                "question-capsule absolute block min-h-11 max-w-[150px] rounded-full px-3.5 py-3 text-left text-[11px] leading-[1.18] text-[var(--silente-ivory)] md:hidden " +
                mobilePositions[index]
              }
              animate={reduceMotion ? undefined : { y: [0, index % 2 === 0 ? -4 : 4, 0] }}
              transition={reduceMotion ? undefined : { duration: 5.5 + index * 0.3, repeat: Infinity, ease: "easeInOut" }}
            >
              {question}
            </motion.button>
          ))}
        </div>

        <a
          href="#como-funciona"
          className="relative z-20 mx-auto flex min-h-14 w-full max-w-[590px] items-center justify-between rounded-full bg-[var(--silente-gold)] px-6 py-4 text-left font-semibold text-[var(--silente-night)] shadow-[0_0_34px_rgba(213,170,75,.18)] transition-transform hover:scale-[1.01] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--silente-gold-light)]"
        >
          <span className="flex items-center gap-3">
            <span className="text-2xl" aria-hidden="true">◔</span>
            <span>Chatear con Silente</span>
          </span>
          <span className="text-2xl" aria-hidden="true">→</span>
        </a>
        <p className="mt-3 text-sm text-[var(--silente-muted)]">Conversación privada por WhatsApp</p>
        <Benefits />
      </div>
    </section>
  );
}
