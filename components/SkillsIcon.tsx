interface SkillProps {
    nome: string;
    nivel: string;
  }
  
  export function SkillIcon({ nome, nivel }: SkillProps) {
    return (
      <div className="group relative p-6 bg-gray-900/40 border border-gray-800 rounded-2xl hover:border-cyan-500/50 transition-all duration-300">
        {/* Efeito de brilho ao fundo (só aparece no hover) */}
        <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 blur-xl transition-opacity rounded-2xl" />
        
        <h3 className="text-white font-bold text-lg mb-1">{nome}</h3>
        <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400/70">
          {nivel}
        </span>
      </div>
    );
  }