"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BentoInteractiveCardProps {
  title: string;
  description: string;
  className?: string;
  visualType: string;
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.7 } 
  },
};

export function BentoInteractiveCard({
  title,
  description,
  className,
  visualType,
}: BentoInteractiveCardProps) {
  return (
    <motion.div variants={cardVariants} className={cn("group h-full w-full", className)}>
      <motion.div 
        whileHover={{ scale: 0.98 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative h-full w-full overflow-hidden rounded-3xl border border-border/40 bg-card/20 p-8 md:p-10 backdrop-blur-md transition-all group-hover:bg-card/40 group-hover:border-border/80 group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:group-hover:shadow-[0_8px_30px_rgb(255,255,255,0.04)]"
      >
        <div className="absolute inset-0 -z-10 opacity-30 transition-opacity duration-500 group-hover:opacity-70">
          {visualType === "code-stream" && (
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-sidebar-primary/10 to-sidebar-primary/40" />
          )}
          {visualType === "latency-graph" && (
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,var(--primary)_0%,transparent_60%)] opacity-30" />
          )}
          {visualType === "grid" && (
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)]" />
          )}
        </div>

        <div className="flex h-full flex-col justify-end relative z-10">
          <h3 className="mb-3 font-heading text-2xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary">
            {title}
          </h3>
          <p className="max-w-md text-base leading-relaxed text-muted-foreground">
            {description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}