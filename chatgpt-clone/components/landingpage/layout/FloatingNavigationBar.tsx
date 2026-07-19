"use client";

import { NAVIGATION_LINKS } from "../constants/landing-copy";
import { MagneticElement } from "../animations/MagneticElement";
import { motion, useScroll, useTransform } from "framer-motion";
import { useAuth, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Sparkles } from "lucide-react";

export function FloatingNavigationBar() {
  const { scrollY } = useScroll();
  const width = useTransform(scrollY, [0, 100], ["100%", "70%"]);
  const y = useTransform(scrollY, [0, 100], [0, 16]);
  const bgOpacity = useTransform(scrollY, [0, 100], ["rgba(255,255,255,0)", "rgba(10,10,10,0.6)"]);
  const { isSignedIn } = useAuth();

  return (
    <motion.header
      style={{ width, y, backgroundColor: bgOpacity }}
      className="fixed top-0 left-0 right-0 z-50 mx-auto flex h-16 max-w-7xl items-center justify-between rounded-full border border-transparent px-6 backdrop-blur-xl transition-all duration-300 data-[scrolled=true]:border-border/50 data-[scrolled=true]:shadow-2xl"
    >
      <div className="flex items-center gap-2">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-foreground">
          <Sparkles className="h-4 w-4 text-background" />
        </div>
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

      <div className="flex items-center gap-4">
        {isSignedIn ? (
          <>
            <MagneticElement>
              <Link 
                href="/c/onBoard" 
                className="hidden md:inline-flex rounded-full border border-border/50 bg-background/50 px-4 py-1.5 text-sm font-medium text-foreground backdrop-blur-md transition-colors hover:bg-secondary/50"
              >
                Dashboard
              </Link>
            </MagneticElement>
            <UserButton 
              appearance={{
                elements: {
                  avatarBox: "h-9 w-9 ring-2 ring-background",
                }
              }} 
            />
          </>
        ) : (
          <MagneticElement>
            <Link 
              href="/sign-in"
              className="inline-flex rounded-full bg-foreground px-5 py-2 text-sm font-medium text-background transition-transform hover:scale-105"
            >
              Login
            </Link>
          </MagneticElement>
        )}
      </div>
    </motion.header>
  );
}