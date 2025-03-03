
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollAnimationProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
  delay?: number;
  duration?: number;
}

export default function ScrollAnimation({
  children,
  direction = "up",
  className = "",
  delay = 0,
  duration = 0.8,
}: ScrollAnimationProps) {
  const directionVariants = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 },
  };

  return (
    <motion.div
      initial={{ 
        opacity: 0,
        ...directionVariants[direction]
      }}
      whileInView={{ 
        opacity: 1,
        x: 0,
        y: 0
      }}
      transition={{ 
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1.0]
      }}
      viewport={{ 
        once: true,
        margin: "-100px"
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
