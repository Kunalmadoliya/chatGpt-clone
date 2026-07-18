"use client";

import { FAQS } from "../constants/landing-copy";
import { BlurRevealLayer } from "../animations/BlurRevealLayer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQSection() {
  return (
    <section id="faq" className="relative z-10 w-full max-w-3xl mx-auto px-6 py-32">
      <BlurRevealLayer className="mb-16 text-center">
        <h2 className="font-heading text-4xl font-medium tracking-tight text-foreground md:text-5xl mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-muted-foreground">
          Everything you need to know about the product and billing.
        </p>
      </BlurRevealLayer>

      <BlurRevealLayer delay={0.2} yOffset={20}>
        <Accordion className="w-full">
          {FAQS.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-border/50 px-2">
              <AccordionTrigger className="text-left font-medium hover:text-primary hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </BlurRevealLayer>
    </section>
  );
}
