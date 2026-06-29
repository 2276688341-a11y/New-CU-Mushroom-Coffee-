"use client";

import { motion, useReducedMotion } from "motion/react";
import { Sparkles } from "@/components/ui/Sparkles";

export function BreathingElement() {
  const prefersReduced = useReducedMotion();

  return (
    <div className="relative w-36 h-36 md:w-48 md:h-48 flex items-center justify-center">
      {/* Dark circular backdrop */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 45%, transparent 70%)",
        }}
      />

      {/* Outer glow — wide halo */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          boxShadow:
            "0 0 60px rgba(255,255,255,0.08), 0 0 120px rgba(255,255,255,0.04)",
        }}
        animate={prefersReduced ? {} : { opacity: [0.35, 1, 0.35], scale: [0.9, 1.12, 0.9] }}
        transition={{
          duration: 3.5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Outer ring */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-white/20"
        animate={prefersReduced ? {} : { scale: [0.92, 1.1, 0.92] }}
        transition={{
          duration: 3.5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Middle ring */}
      <motion.div
        className="absolute inset-4 rounded-full border border-white/14"
        animate={prefersReduced ? {} : { scale: [0.93, 1.09, 0.93] }}
        transition={{
          duration: 3.5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
          delay: 0.4,
        }}
      />

      {/* Inner ring */}
      <motion.div
        className="absolute inset-8 rounded-full border border-white/10"
        animate={prefersReduced ? {} : { scale: [0.94, 1.08, 0.94] }}
        transition={{
          duration: 3.5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
          delay: 0.2,
        }}
      />

      {/* ---- Central glow layers — light emanates from core outward ---- */}

      {/* Layer 1 — broad diffuse halo, anchors the outer spread */}
      <motion.div
        className="absolute inset-11 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 40%, transparent 70%)",
        }}
        animate={prefersReduced ? {} : { scale: [0.92, 1.12, 0.92], opacity: [0.5, 1, 0.5] }}
        transition={{
          duration: 3.5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
          delay: 0.6,
        }}
      />

      {/* Layer 2 — mid-ring glow, bridges core to diffuse halo */}
      <motion.div
        className="absolute inset-[30%] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.04) 50%, transparent 80%)",
        }}
        animate={prefersReduced ? {} : { scale: [0.94, 1.1, 0.94], opacity: [0.6, 1, 0.6] }}
        transition={{
          duration: 3.5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
          delay: 0.3,
        }}
      />

      {/* Layer 3 — tight core halo, the brightest zone */}
      <motion.div
        className="absolute inset-[38%] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.08) 40%, transparent 70%)",
          boxShadow:
            "0 0 20px rgba(255,255,255,0.12), 0 0 50px rgba(255,255,255,0.05)",
        }}
        animate={prefersReduced ? {} : { scale: [0.96, 1.08, 0.96], opacity: [0.7, 1, 0.7] }}
        transition={{
          duration: 3.5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
          delay: 0.15,
        }}
      />

      {/* Layer 4 — pinpoint center, the very brightest spark */}
      <motion.div
        className="absolute inset-[44%] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.1) 35%, transparent 60%)",
          boxShadow:
            "0 0 10px rgba(255,255,255,0.2), 0 0 30px rgba(255,255,255,0.08)",
        }}
        animate={prefersReduced ? {} : { scale: [0.98, 1.06, 0.98], opacity: [0.8, 1, 0.8] }}
        transition={{
          duration: 3.5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
          delay: 0.0,
        }}
      />

      {/* Twinkling star particles */}
      <Sparkles />
    </div>
  );
}
