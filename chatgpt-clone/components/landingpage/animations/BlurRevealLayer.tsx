"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
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
  yOffset = 30,
}: BlurRevealLayerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: yOffset, filter: "blur(12px)" }}
      animate={
        isInView
          ? { opacity: 1, y: 0, filter: "blur(0px)" }
          : { opacity: 0, y: yOffset, filter: "blur(12px)" }
      }
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // Custom cinematic easing
        delay,
      }}
      className={cn("will-change-[opacity,transform,filter]", className)}
    >
      {children}
    </motion.div>
  );
}