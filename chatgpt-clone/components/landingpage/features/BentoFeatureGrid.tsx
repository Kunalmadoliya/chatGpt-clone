import { BENTO_FEATURES } from "../constants/landing-copy";
import { BentoInteractiveCard } from "./BentoInteractiveCard";
import { BlurRevealLayer } from "../animations/BlurRevealLayer";

export function BentoFeatureGrid() {
  return (
    <section id="capabilities" className="py-24 relative z-10 w-full max-w-7xl mx-auto px-6">
      <BlurRevealLayer>
        <div className="mb-16">
          <h2 className="font-heading text-4xl font-medium tracking-tight text-foreground md:text-5xl">
            A new standard for <br /> computational thinking.
          </h2>
        </div>
      </BlurRevealLayer>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:auto-rows-[340px]">
        {BENTO_FEATURES.map((feature, index) => (
          <BentoInteractiveCard
            key={feature.title}
            title={feature.title}
            description={feature.description}
            className={feature.span}
            visualType={feature.visualType}
            delay={index * 0.1}
          />
        ))}
      </div>
    </section>
  );
}