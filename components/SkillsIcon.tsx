"use client";

import { motion } from "framer-motion";
import { IconType } from "react-icons";

interface SkillProps {
  nome: string;
  nivel: string;
}

export function SkillIcon({ nome, nivel }: SkillProps) {
  return (
    <div className="group relative p-6 bg-gray-900/30 border border-gray-800 rounded-2xl hover:border-cyan-500/40 transition-all duration-500 overflow-hidden flex flex-col gap-4">
      
      {/* Brilho Interno (Aura) - O overflow-hidden do pai impede que vaze */}
      <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/5 blur-3xl transition-all duration-500 pointer-events-none" />
      
      {/* Cabeçalho da Skill: Ícone + Nome */}
      <div className="relative z-10 flex items-center justify-between">
        <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-400/60">
          {nivel}
        </span>
      </div>

      <div className="relative z-10">
        <h3 className="text-white font-bold text-base tracking-wide mb-3">{nome}</h3>
        
        {/* Barra de progresso baseada no seu nível real */}
        <div className="h-1.5 w-full bg-gray-800/50 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ 
              width: nivel === "Sólido" ? "100%" : nivel === "Prático" ? "66%" : "33%" 
            }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="h-full bg-gradient-to-r from-cyan-600 to-cyan-400 group-hover:shadow-[0_0_12px_rgba(6,182,212,0.5)] transition-all duration-500"
          />
        </div>
      </div>
    </div>
  );
}