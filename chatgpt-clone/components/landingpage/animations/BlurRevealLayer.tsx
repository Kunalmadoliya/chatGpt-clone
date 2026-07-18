"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BlurRevealLayerProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  yOffset?: number;
}

export function BlurRevealLayer({
  children,
  className,
  delay = 0,
  yOffset = 20,
}: BlurRevealLayerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "0px 0px -50px 0px" }}
      transition={{
        duration: 0.6,
        ease: [0.21, 0.47, 0.32, 0.98], // Optimized cubic-bezier easing
        delay,
      }}
      className={cn("will-change-[transform,opacity]", className)}
    >
      {children}
    </motion.div>
  );
}