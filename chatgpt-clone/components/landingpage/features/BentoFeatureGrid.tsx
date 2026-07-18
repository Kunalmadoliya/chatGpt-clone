"use client";

import { motion } from "framer-motion";
import { BENTO_FEATURES } from "../constants/landing-copy";
import { BentoInteractiveCard } from "./BentoInteractiveCard";
import { BlurRevealLayer } from "../animations/BlurRevealLayer";

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export function BentoFeatureGrid() {
  return (
    <section id="features" className="py-32 relative z-10 w-full max-w-7xl mx-auto px-6">
      <BlurRevealLayer className="mb-20 text-center max-w-2xl mx-auto">
        <h2 className="font-heading text-4xl font-medium tracking-tight text-foreground md:text-5xl mb-4">
          A new standard for <br /> computational thinking.
        </h2>
        <p className="text-lg text-muted-foreground">
          Built from the ground up to offer unprecedented speed, seamless memory, and robust reasoning capabilities.
        </p>
      </BlurRevealLayer>

      <motion.div 
        variants={gridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 gap-6 md:grid-cols-4 md:auto-rows-[360px]"
      >
        {BENTO_FEATURES.map((feature) => (
          <BentoInteractiveCard
            key={feature.title}
            title={feature.title}
            description={feature.description}
            className={feature.span}
            visualType={feature.visualType}
          />
        ))}
      </motion.div>
    </section>
  );
}