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

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-current">
      <path d="M12 2.25a9.75 9.75 0 0 0-8.42 14.53L2.3 21.7l5.04-1.25A9.75 9.75 0 1 0 12 2.25Zm0 17.75a8 8 0 0 1-4.08-1.12l-.29-.17-2.99.74.76-2.91-.19-.3A8 8 0 1 1 12 20Zm4.38-5.94c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1-.37-1.91-1.18-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.19-.46-.39-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.51.58.18 1.11.15 1.53.09.47-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}

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

        <div className="relative mx-auto mt-6 h-[430px] w-full max-w-6xl md:mt-8 md:h-[570px]">
          <div className="orbit-line absolute left-1/2 top-1/2 h-[176px] w-[min(96vw,470px)] -translate-x-1/2 -translate-y-1/2 rotate-[-17deg]" aria-hidden="true" />
          <div className="orbit-line absolute left-1/2 top-1/2 h-[242px] w-[min(112vw,630px)] -translate-x-1/2 -translate-y-1/2 rotate-[15deg]" aria-hidden="true" />
          <div className="orbit-line absolute left-1/2 top-1/2 h-[320px] w-[min(128vw,790px)] -translate-x-1/2 -translate-y-1/2 rotate-[-8deg] opacity-70" aria-hidden="true" />
          <div className="orbit-line absolute left-1/2 top-1/2 h-[415px] w-[min(142vw,980px)] -translate-x-1/2 -translate-y-1/2 rotate-[20deg] opacity-45" aria-hidden="true" />

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
                "question-capsule question-capsule-" + index + " absolute hidden max-w-[240px] rounded-full px-5 py-4 text-left text-sm leading-[1.2] text-[var(--silente-ivory)] md:block " +
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
                "question-capsule question-capsule-" + index + " absolute block min-h-11 max-w-[150px] rounded-full px-3.5 py-3 text-left text-[11px] leading-[1.18] text-[var(--silente-ivory)] md:hidden " +
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
            <WhatsAppIcon />
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
