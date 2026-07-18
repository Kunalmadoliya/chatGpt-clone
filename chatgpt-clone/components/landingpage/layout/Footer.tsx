"use client";

import Link from "next/link";
import { Sparkles } from "lucide-react";
import { NAVIGATION_LINKS } from "../constants/landing-copy";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-border/50 bg-background/50 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 w-fit">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-foreground">
                <Sparkles className="h-4 w-4 text-background" />
              </div>
              <span className="font-heading text-lg font-semibold tracking-tight text-foreground">
                Nexus AI
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              Intelligence engineered for flow. The standard for computational thinking.
            </p>
          </div>

          <div className="md:col-span-1">
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <ul className="flex flex-col gap-3">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-1">
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h4 className="font-semibold text-foreground mb-4">Social</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Twitter (X)</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">GitHub</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Discord</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Nexus AI Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-primary" />
            <span className="text-xs font-medium text-muted-foreground">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
