import { BlurRevealLayer } from "../animations/BlurRevealLayer";
import { InteractiveChatMockup } from "./InteractiveChatMockup";
import { MagneticElement } from "../animations/MagneticElement";

export function CinematicHeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center pt-32 pb-16 overflow-hidden">
      <div className="z-10 flex w-full max-w-7xl flex-col items-center gap-8 px-6 text-center">
        
        <BlurRevealLayer delay={0.1}>
          <div className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-secondary/30 px-3 py-1 backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-primary" />
            <span className="text-xs font-medium tracking-wide text-foreground">Model v4.5 Deployed</span>
          </div>
        </BlurRevealLayer>

        <BlurRevealLayer delay={0.2} className="max-w-4xl">
          <h1 className="font-heading text-6xl font-medium tracking-tighter sm:text-7xl md:text-8xl">
            Intelligence, <br />
            <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Engineered for Flow.
            </span>
          </h1>
        </BlurRevealLayer>

        <BlurRevealLayer delay={0.3} className="max-w-2xl">
          <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Experience a conversational AI that does not just process text, but understands context, executes logic, and renders solutions in real-time.
          </p>
        </BlurRevealLayer>

        <BlurRevealLayer delay={0.4} className="flex items-center gap-4 pt-4">
          <MagneticElement>
            <button className="rounded-full bg-foreground px-8 py-4 text-sm font-semibold text-background shadow-[0_0_40px_rgba(255,255,255,0.1)] transition-all hover:shadow-[0_0_60px_rgba(255,255,255,0.2)]">
              Start Building Free
            </button>
          </MagneticElement>
          <MagneticElement>
            <button className="rounded-full border border-border/50 bg-background/50 px-8 py-4 text-sm font-semibold text-foreground backdrop-blur-md transition-colors hover:bg-secondary/50">
              Read the Paper
            </button>
          </MagneticElement>
        </BlurRevealLayer>
      </div>

      <BlurRevealLayer delay={0.6} yOffset={60} className="mt-20 w-full max-w-5xl px-6">
        <InteractiveChatMockup />
      </BlurRevealLayer>
    </section>
  );
}