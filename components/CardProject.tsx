"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface CardProps {
  titulo: string;
  descricao: string;
  tags: string[];
  link: string;
  destaque?: boolean;
  status?: string;
}

export function CardProjeto({ titulo, descricao, tags, link, destaque, status }: CardProps) {

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMouseMove}
      className={`group relative p-8 rounded-3xl border transition-all duration-500 overflow-hidden flex flex-col h-full ${destaque
          ? "bg-gray-900/60 border-cyan-500/50 shadow-2xl shadow-cyan-500/10"
          : "bg-gray-900/40 border-gray-800 hover:border-gray-600"
        }`}
    >
      {/* Efeito de Brilho (Aura) que segue o mouse */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition duration-300"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(6, 182, 212, 0.15),
              transparent 80%
            )
          `,
        }}
      />

      {/* Cabeçalho do Card: Nome e Status alinhados */}
      <div className="relative z-10 flex flex-wrap items-center gap-3 mb-4">
        <h3 className={`text-2xl font-bold tracking-tight ${destaque ? "text-cyan-400" : "text-white"}`}>
          {titulo}
        </h3>

        {/* Badge de Projeto Premiado (ex: Prisma Vi) */}
        {destaque && (
          <span className="text-[10px] bg-cyan-500 text-gray-950 px-2 py-1 rounded-full uppercase font-black tracking-widest shadow-[0_0_15px_rgba(6,182,212,0.4)] whitespace-nowrap">
            🏆 Projeto Premiado
          </span>
        )}

        {/* Badge de Status (ex: Em desenvolvimento) */}
        {status && (
          <span className="text-[10px] bg-yellow-500/10 text-yellow-500 px-2 py-1 rounded-full border border-yellow-500/20 uppercase font-bold whitespace-nowrap">
            {status}
          </span>
        )}
      </div>

      {/* Descrição técnica baseada no seu currículo */}
      <p className="relative z-10 text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
        {descricao}
      </p>

      {/* Rodapé do Card: Tags e Ícone */}
      <div className="relative z-10 flex items-end justify-between mt-auto">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-mono bg-white/5 text-gray-300 px-2 py-1 rounded-md border border-white/10"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="text-gray-500 group-hover:text-white transition-colors">
          <FaGithub size={20} />
        </div>
      </div>
    </motion.a>
  );
}