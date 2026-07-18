"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { PRICING_TIERS } from "../constants/landing-copy";
import { BlurRevealLayer } from "../animations/BlurRevealLayer";
import { cn } from "@/lib/utils";

export function PricingSection() {
  return (
    <section id="pricing" className="relative z-10 w-full max-w-5xl mx-auto px-6 py-32">
      <BlurRevealLayer className="mb-20 text-center max-w-2xl mx-auto">
        <h2 className="font-heading text-4xl font-medium tracking-tight text-foreground md:text-5xl mb-4">
          Simple, transparent pricing.
        </h2>
        <p className="text-lg text-muted-foreground">
          Start for free, upgrade when you need uncompromising performance and unlimited context.
        </p>
      </BlurRevealLayer>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PRICING_TIERS.map((tier, index) => (
          <BlurRevealLayer key={tier.name} delay={0.1 * (index + 1)} yOffset={30}>
            <div
              className={cn(
                "relative flex h-full flex-col justify-between rounded-3xl border p-8 md:p-10 backdrop-blur-md transition-all duration-300",
                tier.highlight 
                  ? "border-primary/50 bg-primary/5 shadow-[0_8px_40px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_40px_rgb(255,255,255,0.05)] scale-[1.02]" 
                  : "border-border/40 bg-card/20 hover:bg-card/40"
              )}
            >
              <div>
                <div className="mb-4 inline-flex items-center rounded-full border border-border/50 bg-secondary/50 px-3 py-1 text-xs font-medium">
                  {tier.name}
                </div>
                <div className="mb-6 flex items-baseline text-5xl font-bold tracking-tight text-foreground">
                  {tier.price}
                  {tier.interval && (
                    <span className="ml-1 text-xl font-medium text-muted-foreground">
                      {tier.interval}
                    </span>
                  )}
                </div>
                <p className="mb-8 text-base text-muted-foreground">
                  {tier.description}
                </p>
                <ul className="mb-8 flex flex-col gap-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-foreground">
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/20 text-primary">
                        <Check className="h-3 w-3" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <button
                className={cn(
                  "w-full rounded-full py-4 text-sm font-semibold transition-transform hover:scale-[1.02]",
                  tier.highlight
                    ? "bg-foreground text-background shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                    : "border border-border/50 bg-background/50 text-foreground hover:bg-secondary/50"
                )}
              >
                {tier.buttonLabel}
              </button>
            </div>
          </BlurRevealLayer>
        ))}
      </div>
    </section>
  );
}
