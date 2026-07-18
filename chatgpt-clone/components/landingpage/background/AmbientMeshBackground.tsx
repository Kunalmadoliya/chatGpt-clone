"use client";

import { motion } from "framer-motion";

export function AmbientMeshBackground() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-background">
      {/* Noise Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
        style={{ backgroundImage: "url('/noise.png')", backgroundSize: "100px" }}
      />
      
      {/* Floating Orbs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] left-[-10%] h-[50vw] w-[50vw] rounded-full bg-primary/20 blur-[120px] mix-blend-screen"
      />
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-10%] right-[-10%] h-[40vw] w-[40vw] rounded-full bg-sidebar-primary/20 blur-[100px] mix-blend-screen"
      />
      
      {/* Subtle Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]" />
    </div>
  );
}