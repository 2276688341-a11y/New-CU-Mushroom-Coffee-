"use client";

import { motion, useReducedMotion } from "motion/react";

interface Sparkle {
  id: number;
  x: number; // 0-100% relative to center
  y: number;
  size: number;
  delay: number;
  duration: number;
}

const SPARKLES: Sparkle[] = [
  { id: 1, x: 10, y: 22, size: 1.5, delay: 0, duration: 2.8 },
  { id: 2, x: 85, y: 15, size: 1, delay: 0.7, duration: 3.2 },
  { id: 3, x: 18, y: 80, size: 1.2, delay: 1.4, duration: 2.5 },
  { id: 4, x: 78, y: 75, size: 1.8, delay: 0.3, duration: 3.6 },
  { id: 5, x: 50, y: 8, size: 1, delay: 2.1, duration: 2.9 },
  { id: 6, x: 45, y: 92, size: 1.3, delay: 1.0, duration: 3.1 },
  { id: 7, x: 5, y: 52, size: 1, delay: 1.8, duration: 2.7 },
  { id: 8, x: 92, y: 48, size: 1.4, delay: 0.5, duration: 3.4 },
];

export function Sparkles() {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) return null;

  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      {SPARKLES.map((s) => (
        <motion.div
          key={s.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
          }}
          animate={{
            opacity: [0, 0.7, 0],
            scale: [0.6, 1.2, 0.6],
          }}
          transition={{
            duration: s.duration,
            delay: s.delay,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
          }}
        />
      ))}
    </div>
  );
}
