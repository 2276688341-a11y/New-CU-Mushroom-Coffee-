"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { useRef, type ReactNode } from "react";

interface ParallaxSlowProps {
  children: ReactNode;
  speed?: number;
}

export function ParallaxSlow({ children, speed = 0.03 }: ParallaxSlowProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [speed * 100, speed * -100]);

  if (prefersReduced) {
    return <div ref={ref}>{children}</div>;
  }

  return (
    <div ref={ref}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}
