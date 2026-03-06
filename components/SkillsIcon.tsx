import { ReactNode } from "react";

interface SkillProps {
  nome: string;
  nivel: string;
  icone?: ReactNode;
}

export function SkillIcon({ nome, nivel }: SkillProps) {
  return (
    <div className="group relative p-5 bg-gray-900/30 border border-gray-800 rounded-xl hover:border-cyan-500/40 transition-all duration-300">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-white font-bold text-sm">{nome}</h3>
      </div>
      <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-400/60">
        {nivel}
      </span>
      {/* Detalhe visual de progresso discreto */}
      <div className="mt-3 h-1 w-full bg-gray-800 rounded-full overflow-hidden">
        <div 
          className={`h-full bg-cyan-500/50 transition-all duration-500 ${
            nivel === "Sólido" ? "w-full" : nivel === "Prático" ? "w-2/3" : "w-1/3"
          }`}
        />
      </div>
    </div>
  );
}