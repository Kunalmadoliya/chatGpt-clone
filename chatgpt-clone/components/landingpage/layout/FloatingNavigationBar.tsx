"use client";

import { NAVIGATION_LINKS } from "../constants/landing-copy";
import { MagneticElement } from "../animations/MagneticElement";
import { motion, useScroll, useTransform } from "framer-motion";

export function FloatingNavigationBar() {
  const { scrollY } = useScroll();
  const width = useTransform(scrollY, [0, 100], ["100%", "70%"]);
  const y = useTransform(scrollY, [0, 100], [0, 16]);
  const bgOpacity = useTransform(scrollY, [0, 100], ["rgba(255,255,255,0)", "rgba(25,25,25,0.4)"]);

  return (
    <motion.header
      style={{ width, y, backgroundColor: bgOpacity }}
      className="fixed top-0 left-0 right-0 z-50 mx-auto flex h-16 max-w-7xl items-center justify-between rounded-full border border-transparent px-6 backdrop-blur-md transition-all duration-300 data-[scrolled=true]:border-border/50 data-[scrolled=true]:shadow-2xl"
    >
      <div className="flex items-center gap-2">
        <div className="h-6 w-6 rounded-full bg-foreground" />
        <span className="font-heading text-sm font-semibold tracking-tight text-foreground">
          Nexus AI
        </span>
      </div>

      <nav className="hidden items-center gap-8 md:flex">
        {NAVIGATION_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="flex items-center">
        <MagneticElement>
          <button className="rounded-full bg-foreground px-5 py-2 text-sm font-medium text-background transition-transform hover:scale-105">
            Initialize Concept
          </button>
        </MagneticElement>
      </div>
    </motion.header>
  );
}