"use client";

import { motion } from "framer-motion";

export function AmbientMeshBackground() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-background">
      {/* 
        Optimized Noise: Dropped mix-blend-overlay. Standard opacity is much lighter on the GPU. 
      */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{ backgroundImage: "url('/noise.png')", backgroundSize: "100px" }}
      />
      
      {/* 
        Hardware Accelerated Mesh: Replaced JS motion with CSS static blurs.
      */}
      <div className="absolute -top-[20%] -left-[10%] h-[60vw] w-[60vw] rounded-full bg-[radial-gradient(circle,var(--primary)_0%,transparent_60%)] opacity-10 blur-[60px]" />
      
      <div className="absolute -bottom-[20%] -right-[10%] h-[50vw] w-[50vw] rounded-full bg-[radial-gradient(circle,var(--sidebar-primary)_0%,transparent_60%)] opacity-10 blur-[60px]" />
      
      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]" />
    </div>
  );
}