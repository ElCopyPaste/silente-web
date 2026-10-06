"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
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
  "left-[5%] top-[13%]",
  "right-[5%] top-[14%]",
  "left-[1%] top-[45%]",
  "right-[1%] top-[50%]",
  "left-[6%] bottom-[8%]",
  "right-[6%] bottom-[8%]",
];

const mobilePositions = [
  "left-[3%] top-[9%]",
  "right-[3%] top-[10%]",
  "left-[0%] top-[44%]",
  "right-[0%] top-[47%]",
  "left-[4%] bottom-[8%]",
  "right-[4%] bottom-[8%]",
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
    }, 4000);
    return () => window.clearInterval(timer);
  }, [reduceMotion]);

  const goToHow = () => {
    document.getElementById("como-funciona")?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  const activeWord = state === "saber" ? "Saber." : "Hablar.";

  return (
    <section className="silente-stars relative isolate min-h-[100svh] overflow-hidden bg-[#07111d] px-4 pb-10 pt-3 md:px-8 md:pb-14 md:pt-5">
      <motion.div
        aria-hidden="true"
        className="absolute inset-[-2%] z-0"
        animate={reduceMotion ? undefined : { scale: [1.02, 1.06, 1.02], x: [0, -7, 0], y: [0, 5, 0] }}
        transition={reduceMotion ? undefined : { duration: 48, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/fondo.webp`}
          alt=""
          fill
          priority
          unoptimized
          sizes="100vw"
          className="pointer-events-none object-cover object-center"
        />
      </motion.div>
      <Header />

      <div className="relative z-10 mx-auto mt-6 max-w-6xl text-center md:mt-10">
        <h1 className="text-[clamp(2rem,9vw,5.75rem)] font-normal leading-[1.02] tracking-[-.055em] text-[var(--silente-ivory)]">
          <span className="block whitespace-nowrap">Hay cosas que</span>
          <span className="mt-1 block whitespace-nowrap">
            necesitas{" "}
            <span className="relative inline-grid w-[4.35em] justify-items-start align-baseline text-left">
              <motion.span
                key={state}
                initial={reduceMotion ? false : { opacity: 0, y: state === "saber" ? 8 : -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={reduceMotion ? { duration: 0 } : { duration: 0.8, ease: "easeInOut" }}
              >
                {activeWord}
              </motion.span>
            </span>
          </span>
        </h1>

        <motion.p
          key={state + "-phrase"}
          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.8, ease: "easeInOut" }}
          className="mt-3 min-h-[1.4em] text-[clamp(1.25rem,4.1vw,2.1rem)] font-normal tracking-[-.025em] text-[var(--silente-gold-light)] md:mt-4"
        >
          {state === "saber" ? "Silente te espera." : "Silente te escucha."}
        </motion.p>

        <div className="relative mx-auto mt-4 h-[430px] w-full max-w-6xl md:mt-7 md:h-[570px]">
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            animate={reduceMotion ? undefined : { scale: [1, 1.018, 1] }}
            transition={reduceMotion ? undefined : { duration: 8, repeat: Infinity, ease: "easeInOut" }}
          >
            <SilenteSymbol />
          </motion.div>

          {questions.map((question, index) => (
            <motion.button
              key={question}
              type="button"
              onClick={goToHow}
              className={
                "question-capsule question-capsule-" + index + " absolute hidden max-w-[240px] rounded-full px-5 py-5 text-left text-sm leading-[1.25] text-[var(--silente-ivory)] md:block " +
                desktopPositions[index]
              }
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={reduceMotion ? { duration: 0 } : { delay: 0.25 + index * 0.12, duration: 0.9, ease: "easeOut" }}
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
                "question-capsule question-capsule-" + index + " absolute block min-h-12 w-[min(40vw,220px)] rounded-full px-3.5 py-4 text-left text-[clamp(12px,2vw,15px)] leading-[1.25] text-[var(--silente-ivory)] md:hidden " +
                mobilePositions[index]
              }
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={reduceMotion ? { duration: 0 } : { delay: 0.25 + index * 0.12, duration: 0.9, ease: "easeOut" }}
            >
              {question}
            </motion.button>
          ))}
        </div>

        <a
          href="#como-funciona"
          className="hero-cta relative z-20 mx-auto flex min-h-16 w-full max-w-[590px] items-center justify-between rounded-full px-6 py-4 text-left font-medium text-[var(--silente-night)] transition-transform hover:scale-[1.01] active:scale-[.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--silente-gold-light)]"
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
