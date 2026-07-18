"use client";

import { motion } from "framer-motion";
import { Terminal, Code2, Sparkles } from "lucide-react";

export function InteractiveChatMockup() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card/40 shadow-2xl backdrop-blur-xl">
      {/* Mac OS Style Header */}
      <div className="flex items-center border-b border-border/50 px-4 py-3">
        <div className="flex gap-2">
          <div className="h-3 w-3 rounded-full bg-border/50" />
          <div className="h-3 w-3 rounded-full bg-border/50" />
          <div className="h-3 w-3 rounded-full bg-border/50" />
        </div>
        <div className="mx-auto flex items-center gap-2 rounded-md bg-secondary/50 px-3 py-1">
          <Sparkles className="h-3 w-3 text-primary" />
          <span className="text-xs font-medium text-muted-foreground">Nexus Omni-Model</span>
        </div>
      </div>

      {/* Chat Body */}
      <div className="flex flex-col gap-6 p-6 md:p-8">
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
          className="self-end rounded-2xl rounded-tr-sm bg-secondary px-5 py-3 max-w-[80%]"
        >
          <p className="text-sm text-foreground">Write a Python script to analyze our server latency logs and render a chart.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5 }}
          className="self-start w-full max-w-[90%]"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground text-background">
              <Terminal className="h-4 w-4" />
            </div>
            <span className="text-sm font-semibold">Nexus AI</span>
          </div>
          
          <div className="ml-11 rounded-xl border border-border/50 bg-[#0a0a0a] overflow-hidden">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 bg-white/5">
              <span className="text-xs text-muted-foreground font-mono">analysis.py</span>
              <Code2 className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="p-4 overflow-x-auto">
              <motion.pre 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="text-sm font-mono text-muted-foreground"
              >
                <code className="text-primary-foreground">import</code> pandas <code className="text-primary-foreground">as</code> pd{'\n'}
                <code className="text-primary-foreground">import</code> matplotlib.pyplot <code className="text-primary-foreground">as</code> plt{'\n\n'}
                df = pd.read_csv(<code className="text-chart-1">`logs.csv`</code>){'\n'}
                df[<code className="text-chart-1">`latency`</code>].plot(kind=<code className="text-chart-1">`line`</code>, smooth=<code className="text-primary-foreground">True</code>){'\n'}
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="inline-block w-2 h-4 bg-foreground align-middle ml-1" 
                />
              </motion.pre>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}