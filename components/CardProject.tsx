"use client";

import { useState } from "react";

interface CardProps {
  titulo: string;
  descricao: string;
}

export function CardProjeto({ titulo, descricao }: CardProps) {
  // [valorAtual, funçãoParaMudarOValor] = valorInicial
  const [likes, setLikes] = useState(0);

  return (
    <div className="border border-gray-800 p-6 rounded-xl bg-gray-900/50 hover:border-cyan-500 transition-all">
      <h3 className="text-xl font-semibold text-white">{titulo}</h3>
      <p className="text-gray-400 mt-2 mb-4">{descricao}</p>
      
      <button 
        onClick={() => setLikes(likes + 1)}
        className="text-xs font-bold uppercase tracking-widest text-cyan-400 hover:text-cyan-300"
      >
        ❤️ Curtir: {likes}
      </button>
    </div>
  );
}