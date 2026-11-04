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
  "left-[5%] top-[8%]",
  "right-[5%] top-[8%]",
  "left-[1%] top-[42%]",
  "right-[1%] top-[42%]",
  "left-[6%] bottom-[8%]",
  "right-[6%] bottom-[8%]",
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

  const activeWord = state === "saber" ? "saber." : "hablar.";

  return (
    <section className="silente-hero silente-stars relative isolate min-h-[100svh] overflow-hidden bg-[#07111d] px-4 pb-10 pt-3 md:px-8 md:pb-14 md:pt-5">
      <picture
        className="hero-background absolute inset-[-2%] z-0"
      >
        <source media="(min-width: 1024px)" srcSet={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/fondo-desktop.webp`} />
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/fondo-centrado.webp`}
          alt=""
          fill
          priority
          unoptimized
          sizes="100vw"
          className="pointer-events-none object-cover object-center"
        />
      </picture>
      <Header />

      <div className="hero-content relative z-10 mx-auto mt-6 max-w-6xl text-center md:mt-7">
        <h1 className="w-full text-center text-[clamp(1.75rem,8.4vw,2.5rem)] font-normal leading-[1.08] md:text-[clamp(2.75rem,5vw,4.5rem)] tracking-[-.035em] text-[var(--silente-ivory)]">
          <span className="block whitespace-nowrap">Hay cosas que</span>{" "}
          <span className="mt-1 block whitespace-nowrap">
            necesitas{" "}
            <span className="relative inline-block align-baseline">
              <span aria-hidden="true" className="invisible">hablar.</span>
              <motion.span
                key={state}
                initial={reduceMotion ? false : { opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={reduceMotion ? { duration: 0 } : { duration: 0.8, ease: "easeInOut" }}
                className="absolute left-0 top-0 whitespace-nowrap"
              >
                {activeWord}
              </motion.span>
            </span>
          </span>
        </h1>

        <motion.p
          key={state + "-phrase"}
          initial={reduceMotion ? false : { opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.8, ease: "easeInOut" }}
          className="mt-3 min-h-[1.4em] w-full text-center text-[clamp(1.25rem,4.1vw,2.1rem)] font-normal tracking-[-.025em] text-[var(--silente-gold-light)] md:mt-4"
        >
          {state === "saber" ? "Silente te espera." : "Silente te escucha."}
        </motion.p>
        <p className="hero-intro mx-auto mt-3 max-w-[700px] text-base leading-6 text-[var(--silente-ivory)]/90">
          Conversa con Luna por WhatsApp. Pregúntale por tu horóscopo y por lo que quieras saber sobre amor, dinero, trabajo y suerte.
        </p>

        <div className="hero-orbit relative mx-auto mt-4 h-[440px] w-full max-w-6xl md:mt-5 md:h-[480px] lg:h-[clamp(400px,46vh,460px)]">
          <div className="hero-symbol-anchor">
            <SilenteSymbol />
          </div>

          {questions.map((question, index) => (
            <button
              key={question}
              type="button"
              onClick={goToHow}
              className={
                "question-capsule question-capsule-" + index + " absolute hidden max-w-[240px] px-5 py-4 text-center text-sm leading-[1.35] text-[var(--silente-ivory)] lg:block " +
                desktopPositions[index]
              }
            >
              <span className="relative z-10">{question}</span>
            </button>
          ))}

          {questions.map((question, index) => (
            <button
              key={"mobile-" + question}
              type="button"
              onClick={goToHow}
              className={
                "question-capsule question-mobile question-capsule-" + index + " min-h-14 px-3 py-3 text-center text-base leading-[1.35] text-[var(--silente-ivory)] lg:hidden"
              }
            >
              <span className="relative z-10">{question}</span>
            </button>
          ))}
        </div>

        <a
          href="#como-funciona"
          className="hero-cta relative z-20 mx-auto lg:-mt-8 flex min-h-14 w-full max-w-[590px] items-center justify-between rounded-full px-6 py-3 text-left font-medium text-[var(--silente-night)] transition-transform hover:scale-[1.01] active:scale-[.99] lg:min-h-16 lg:py-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--silente-gold-light)]"
        >
          <span className="flex items-center gap-3">
            <WhatsAppIcon />
            <span>Chatear con Silente</span>
          </span>
          <span className="text-2xl" aria-hidden="true">→</span>
        </a>
        <Benefits />
      </div>
    </section>
  );
}
