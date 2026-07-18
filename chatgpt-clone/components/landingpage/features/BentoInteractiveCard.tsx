"use client";

import { motion } from "framer-motion";
import { BlurRevealLayer } from "../animations/BlurRevealLayer";
import { cn } from "@/lib/utils";

interface BentoInteractiveCardProps {
  title: string;
  description: string;
  className?: string;
  visualType: string;
  delay?: number;
}

export function BentoInteractiveCard({
  title,
  description,
  className,
  visualType,
  delay = 0,
}: BentoInteractiveCardProps) {
  return (
    <BlurRevealLayer delay={delay} className={cn("group h-full w-full", className)}>
      <motion.div 
        whileHover={{ scale: 0.99 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative h-full w-full overflow-hidden rounded-3xl border border-border/40 bg-card/20 p-8 backdrop-blur-sm transition-colors group-hover:bg-card/40 group-hover:border-border/60"
      >
        {/* Abstract Background Visuals Based on Type */}
        <div className="absolute inset-0 -z-10 opacity-20 transition-opacity duration-500 group-hover:opacity-40">
          {visualType === "code-stream" && (
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,var(--sidebar-primary)_100%)] opacity-30" />
          )}
          {visualType === "latency-graph" && (
            <div className="absolute right-0 bottom-0 h-32 w-full bg-[radial-gradient(ellipse_at_bottom_right,var(--primary)_0%,transparent_70%)]" />
          )}
        </div>

        <div className="flex h-full flex-col justify-end">
          <h3 className="mb-2 font-heading text-xl font-semibold tracking-tight text-foreground">
            {title}
          </h3>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>
        </div>
      </motion.div>
    </BlurRevealLayer>
  );
}