"use client";

import { BlurRevealLayer } from "../animations/BlurRevealLayer";

const TESTIMONIALS = [
  {
    quote: "Nexus AI completely transformed our operational speed. The context memory means I never have to repeat myself. It feels like magic.",
    author: "Elena Rodriguez",
    role: "Lead Engineer",
    company: "Vercel",
  },
  {
    quote: "The multi-modal logic allows us to process datasets in seconds that used to take our analysts hours. Unprecedented efficiency.",
    author: "Marcus Chen",
    role: "Data Scientist",
    company: "Stripe",
  },
  {
    quote: "Finally, an AI interface that feels meticulously designed. The latency is practically non-existent. It’s a joy to use daily.",
    author: "Sarah Jenkins",
    role: "Product Designer",
    company: "Linear",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative z-10 w-full max-w-7xl mx-auto px-6 py-32 overflow-hidden">
      <BlurRevealLayer className="mb-20 text-center max-w-2xl mx-auto">
        <h2 className="font-heading text-4xl font-medium tracking-tight text-foreground md:text-5xl mb-4">
          Trusted by top engineers.
        </h2>
        <p className="text-lg text-muted-foreground">
          See how leading teams are using Nexus AI to accelerate their workflows.
        </p>
      </BlurRevealLayer>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((testimonial, index) => (
          <BlurRevealLayer key={testimonial.author} delay={0.1 * (index + 1)} yOffset={20}>
            <div className="flex h-full flex-col justify-between rounded-3xl border border-border/40 bg-card/20 p-8 backdrop-blur-sm transition-colors hover:bg-card/40">
              <p className="mb-8 text-base leading-relaxed text-foreground">
                &quot;{testimonial.quote}&quot;
              </p>
              <div>
                <p className="font-semibold text-sm text-foreground">{testimonial.author}</p>
                <p className="text-xs text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
              </div>
            </div>
          </BlurRevealLayer>
        ))}
      </div>
    </section>
  );
}
