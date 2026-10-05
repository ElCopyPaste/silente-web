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
  "left-1/2 top-[1%] -translate-x-1/2",
  "right-[1%] top-[22%]",
  "right-[3%] bottom-[13%]",
  "left-1/2 bottom-[1%] -translate-x-1/2",
  "left-[3%] bottom-[13%]",
  "left-[1%] top-[22%]",
];

const mobilePositions = [
  "left-1/2 top-[2%] -translate-x-1/2",
  "right-[0%] top-[23%]",
  "right-[0%] bottom-[16%]",
  "left-[0%] bottom-[16%]",
  "left-[0%] top-[23%]",
  "left-1/2 bottom-[2%] -translate-x-1/2",
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
    document.getElementById("como-funciona")?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <section className="silente-stars relative overflow-hidden px-4 pb-14 pt-4 md:min-h-screen md:px-8 md:pb-16 md:pt-5">
      <Header />

      <div className="mx-auto mt-12 max-w-6xl text-center md:mt-20">
        <h1 className="text-[clamp(2.2rem,7vw,5.5rem)] font-semibold leading-[.94] tracking-[-.045em] text-[var(--silente-ivory)]">
          <span className="block">Hay cosas que necesitas</span>
          <span className="mt-1 block">
            <span className="relative inline-grid w-[4.1em] justify-items-center">
              <motion.span
                key={state}
                initial={reduceMotion ? false : { opacity: 0, y: state === "saber" ? 8 : -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={reduceMotion ? { duration: 0 } : { duration: .8, ease: "easeInOut" }}
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
          transition={reduceMotion ? { duration: 0 } : { duration: .8, ease: "easeInOut" }}
          className="reckless mt-4 text-2xl text-[var(--silente-gold)] md:mt-5 md:text-3xl"
        >
          {state === "saber" ? "Silente te espera." : "Silente te escucha."}
        </motion.p>

        <div className="relative mx-auto mt-10 h-[390px] w-full max-w-5xl md:mt-14 md:h-[500px]">
          <div className="orbit-line absolute left-1/2 top-1/2 h-48 w-[min(104vw,520px)] -translate-x-1/2 -translate-y-1/2 rotate-[-12deg] md:h-72 md:w-[min(88vw,560px)]" aria-hidden="true" />
          <div className="orbit-line absolute left-1/2 top-1/2 h-[290px] w-[min(118vw,700px)] -translate-x-1/2 -translate-y-1/2 rotate-[17deg] md:h-[430px] md:w-[min(98vw,760px)]" aria-hidden="true" />

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
                "question-capsule absolute hidden max-w-[230px] rounded-full px-5 py-3.5 text-left text-sm leading-tight text-[var(--silente-ivory)] md:block " +
                desktopPositions[index]
              }
              animate={reduceMotion ? undefined : { y: [0, index % 2 === 0 ? -6 : 6, 0] }}
              transition={reduceMotion ? undefined : { duration: 5 + index * .35, repeat: Infinity, ease: "easeInOut" }}
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
                "question-capsule absolute block min-h-11 max-w-[145px] rounded-full px-3 py-3 text-left text-[11px] leading-[1.15] text-[var(--silente-ivory)] md:hidden " +
                mobilePositions[index]
              }
              animate={reduceMotion ? undefined : { y: [0, index % 2 === 0 ? -4 : 4, 0] }}
              transition={reduceMotion ? undefined : { duration: 5.5 + index * .3, repeat: Infinity, ease: "easeInOut" }}
            >
              {question}
            </motion.button>
          ))}
        </div>

        <a
          href="#como-funciona"
          className="mx-auto flex min-h-14 w-full max-w-sm items-center justify-between rounded-full bg-[var(--silente-gold)] px-6 py-4 text-left font-semibold text-[var(--silente-night)] transition-transform hover:scale-[1.01] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--silente-gold-light)]"
        >
          <span>Chatear con Silente</span>
          <span aria-hidden="true">→</span>
        </a>
        <p className="mt-3 text-sm text-[var(--silente-muted)]">Conversación privada por WhatsApp</p>
        <Benefits />
      </div>
    </section>
  );
}
