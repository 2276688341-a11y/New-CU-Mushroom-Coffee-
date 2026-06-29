"use client";

import Image from "next/image";
import { BRAND } from "@/lib/constants";
import { BreathingElement } from "@/components/ui/BreathingElement";
import { CTAButton } from "@/components/ui/CTAButton";
import { NoiseTexture } from "@/components/atmosphere/NoiseTexture";
import { motion, useReducedMotion } from "motion/react";

export function Hero() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      <NoiseTexture opacity={0.04} />

      {/* Logo — quiet, restrained, shifted down slightly */}
      <div className="relative z-10 mt-6 mb-12 md:mb-16">
        <Image
          src="/logo.png"
          alt="CLUB UNDEFINED"
          width={140}
          height={46}
          className="h-auto w-32 md:w-40 opacity-80"
          priority
        />
      </div>

      {/* Breathing circle */}
      <div className="relative z-10 mb-14 md:mb-18">
        <BreathingElement />
      </div>

      <h1 className="relative z-10 text-5xl md:text-7xl lg:text-8xl font-light tracking-[0.3em] uppercase text-text-primary leading-tight">
        CLUB
        <br />
        UNDEFINED
      </h1>

      <p className="relative z-10 mt-10 md:mt-12 text-base md:text-xl font-light text-text-secondary max-w-md tracking-wider leading-relaxed">
        {BRAND.tagline}
      </p>

      <p className="relative z-10 mt-4 text-sm font-light text-text-secondary tracking-[0.15em]">
        {BRAND.subTagline}
      </p>

      <div className="relative z-10 mt-14 md:mt-16">
        <CTAButton href="#waitlist" label="Join the waitlist" />
      </div>

      {!prefersReduced && (
        <motion.div
          className="absolute bottom-12 z-10"
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <div className="w-px h-8 bg-text-tertiary/40" />
        </motion.div>
      )}
    </section>
  );
}
