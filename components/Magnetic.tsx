"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";
import { motion, useSpring } from "framer-motion";

type MagneticProps = {
  children: ReactNode;
};

const springConfig = {
  type: "spring" as const,
  stiffness: 150,
  damping: 15,
  mass: 0.1,
};

export function Magnetic({ children }: MagneticProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const element = elementRef.current;
    if (!element) return;

    const bounds = element.getBoundingClientRect();
    const offsetX = event.clientX - (bounds.left + bounds.width / 2);
    const offsetY = event.clientY - (bounds.top + bounds.height / 2);

    x.set(offsetX * 0.2);
    y.set(offsetY * 0.2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={elementRef}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  );
}
