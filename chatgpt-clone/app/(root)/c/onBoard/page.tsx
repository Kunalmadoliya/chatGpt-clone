import React from "react";
import { SendHorizontal } from "lucide-react";

const OnBoardPage = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground transition-colors duration-300">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.08),transparent_32%),radial-gradient(circle_at_center,rgba(0,0,0,0.04),transparent_45%)] dark:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_32%),radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_45%)]" />

      <div className="relative flex min-h-screen flex-col px-5 py-4 sm:px-7">


        <section className="flex flex-1 items-center justify-center pb-8 pt-16 sm:pt-10">
          <div className="flex w-full max-w-3xl flex-col items-center">
            <h1 className="text-center text-[clamp(1.75rem,4vw,2.5rem)] font-medium tracking-[-0.03em] text-foreground">
              What&apos;s on the agenda today?
            </h1>

            <div className="mt-8 w-full max-w-190 rounded-[1.5rem] border border-border bg-card px-3 py-2.5 shadow-[0_18px_80px_rgba(0,0,0,0.12)] backdrop-blur-sm transition-colors sm:px-4 dark:shadow-[0_18px_80px_rgba(0,0,0,0.35)]">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <input
                  aria-label="Ask anything"
                  className="min-w-0 flex-1 bg-transparent text-base text-foreground placeholder:text-muted-foreground/70 focus:outline-none"
                  defaultValue=""
                  placeholder="Ask anything"
                />

                <button
                  aria-label="Send message"
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-foreground text-background shadow-[0_10px_30px_rgba(0,0,0,0.12)] transition-transform hover:scale-[1.03] dark:shadow-[0_10px_30px_rgba(255,255,255,0.12)]"
                  type="button"
                >
                  <SendHorizontal className="h-4.5 w-4.5" strokeWidth={2.4} />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default OnBoardPage;
