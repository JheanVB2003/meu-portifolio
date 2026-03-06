"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from 'next/image';

export function HeroImage() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Efeito 3D da foto
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  function handleMouse(event: React.MouseEvent) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <div 
      className="relative group p-8" 
      onMouseMove={handleMouse} 
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1000 }}
    >
      {/* BRILHO FIXO E PULSANTE */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-600/25 rounded-full blur-[60px] animate-pulse"
        style={{ transform: "translateZ(-1px)" }}
      />
      
      {/* CONTAINER DA FOTO */}
      <motion.div
        style={{ 
          rotateX, 
          rotateY,
          transformStyle: "preserve-3d" 
        }}
        className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-white/10 shadow-2xl z-10"
      >
        <Image 
          src="/tente .jpeg" 
          alt="Jhean Victo Barbosa Almeida" 
          fill
          className="object-cover scale-110"
          priority
        />
      </motion.div>
    </div>
  );
}