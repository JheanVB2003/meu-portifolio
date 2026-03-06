"use client";

interface CardProps {
  titulo: string;
  descricao: string;
  tags: string[];
  link: string;
  destaque?: boolean;
  status?: string;
}

export function CardProjeto({ titulo, descricao, tags, link, destaque, status }: CardProps) {
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`group block p-6 rounded-2xl border transition-all duration-300 ${
        destaque 
        ? "bg-gradient-to-br from-gray-900 to-blue-900/20 border-cyan-500/50 scale-105 shadow-xl shadow-cyan-500/10" 
        : "bg-gray-900/40 border-gray-800 hover:border-gray-600"
      }`}
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className={`text-xl font-bold ${destaque ? "text-cyan-400" : "text-white"}`}>
          {titulo}
        </h3>
        {status && (
          <span className="text-[10px] bg-yellow-500/10 text-yellow-500 px-2 py-1 rounded-full border border-yellow-500/20 uppercase font-bold">
            {status}
          </span>
        )}
        {destaque && (
          <span className="text-[10px] bg-cyan-500 text-gray-950 px-2 py-1 rounded-full uppercase font-bold tracking-tighter">
            Destaque Premiado
          </span>
        )}
      </div>

      <p className="text-gray-400 text-sm leading-relaxed mb-6">
        {descricao}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto">
        {tags.map(tag => (
          <span key={tag} className="text-[10px] bg-white/5 text-gray-300 px-2 py-1 rounded-md border border-white/10">
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
}