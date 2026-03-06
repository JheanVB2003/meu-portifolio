"use client";
import { Navbar } from "@/components/NavBar";
import { CardProjeto } from "@/components/CardProject";
import { SkillIcon } from "@/components/SkillsIcon";
import { HeroImage } from "@/components/HeroImage";
import { Footer } from "@/components/Footer";

export default function Home() {
  const meusProjetos = [
    {
      id: 1,
      titulo: "Prisma VI",
      desc: "Solução completa de auxílio visual para daltônicos, vencedora de competição acadêmica. Desenvolvi a API em Java/Spring Boot e o app Android nativo em Kotlin.",
      tags: ["Java", "Kotlin", "Spring Boot", "PostgreSQL"],
      link: "https://github.com/PrismaVision",
      destaque: true
    },
    {
      id: 2,
      titulo: "Monitor Pike",
      desc: "Observatório geopolítico para monitoramento de conflitos e dados globais em tempo real.",
      tags: ["Java", "Spring Boot", "Next.js", "Oracle Cloud"],
      link: "https://github.com/SamuelSoaresSilva/pike-engine-api",
      status: "Em desenvolvimento"
    },
    {
      id: 3,
      titulo: "Audit Flow",
      desc: "Sistema inteligente para automação e gestão de fluxos de auditoria técnica.",
      tags: ["Java", "Spring Boot", "TypeScript"],
      link: "https://github.com/JheanVB2003/audit_flow",
      status: "Em desenvolvimento"
    }
  ];

  return (
    <div className="bg-gray-950 min-h-screen">
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 pt-32">

        {/* Seção Hero - O "Apresentar-se" */}
        <section className="flex flex-col md:flex-row items-center justify-between py-20 gap-12">

          {/* Lado Esquerdo: Seu Texto */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-cyan-400 uppercase bg-cyan-400/10 border border-cyan-400/20 rounded-full">
              Disponível para novos desafios
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              Jhean Victo <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Engenheiro de Sofware
              </span>
            </h1>

            <p className="text-gray-400 text-lg max-w-xl leading-relaxed mb-8">
              Desenvolvedor de Software com experiência em sistemas críticos no <span className="text-white font-semibold">Ministério da Defesa</span>.
              Especializado em APIs <span className="text-cyan-400 font-mono">Java/Spring Boot</span>.
              Focado em construir sistemas robustos e interfaces modernas.
            </p>


            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a href="#contato" className="bg-cyan-500 text-gray-950 px-8 py-3 rounded-full font-bold hover:bg-cyan-400 transition-all">
                Fale Comigo
              </a>
            </div>
          </div>

          {/* LADO DIREITO: A FOTO COM O EFEITO */}
          <div className="flex justify-center">
            <HeroImage />
          </div>

        </section>

        <section className="mt-32 space-y-20">
          {/* Seção Sobre Mim */}
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-cyan-500"></span>
              Sobre Mim
            </h2>
            <p className="text-gray-400 leading-relaxed text-lg">
              Desenvolvedor de Software com forte base em <span className="text-white font-medium">Java e Orientação a Objetos </span>.
              Possuo conhecimentos práticos em construção de <span className="text-white font-medium">APIs RESTful, SQL</span> e versionamento com <span className="text-white font-medium">Git </span>.
              Foco em boas práticas como <span className="text-cyan-400 font-medium">Clean Code e SOLID </span>, buscando sempre unir a robustez do backend com interfaces modernas e eficientes.
            </p>
          </div>

          {/* Grid de Formação e Experiência */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

            {/* Coluna: Formação */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                <span className="w-8 h-[2px] bg-cyan-500"></span>
                Formação
              </h2>
              <div className="relative pl-8 border-l border-gray-800 space-y-10">
                <div className="relative">
                  {/* Indicador de linha do tempo */}
                  <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]" />

                  <h3 className="text-xl font-bold text-white">Bacharel em Engenharia de Software </h3>
                  <p className="text-cyan-400 font-medium text-sm mb-2">UNICEPLAC </p>
                  <p className="text-gray-500 text-xs font-mono uppercase tracking-widest">Mar 2022 — Dez 2025 </p>
                </div>
              </div>
            </div>

            {/* Coluna: Experiência Profissional */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                <span className="w-8 h-[2px] bg-blue-500"></span>
                Experiência Profissional
              </h2>
              <div className="relative pl-8 border-l border-gray-800 space-y-10">
                <div className="relative">
                  {/* Indicador de linha do tempo */}
                  <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />

                  <h3 className="text-xl font-bold text-white">Estagiário de Desenvolvimento Fullstack </h3>
                  <p className="text-blue-400 font-medium text-sm mb-2">Ministério da Defesa </p>
                  <p className="text-gray-500 text-xs font-mono uppercase tracking-widest mb-4">Mar 2024 — Dez 2025 </p>

                  <ul className="text-sm text-gray-400 space-y-2 list-disc list-inside">
                    <li>Desenvolvimento de APIs RESTful com Java e Spring Boot no sistema SisGePS.</li>
                    <li>Criação de interfaces dinâmicas utilizando Angular.</li>
                    <li>Migração e gestão de dados críticos com PostgreSQL e SQL avançado.</li>
                    <li>Aplicação diária de Clean Code, SOLID e metodologias ágeis (Scrum).</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </section>
        {/* Seção de Projetos */}
        <section id="projetos" className="mb-24">
          <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-cyan-500"></span> Projetos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {meusProjetos.map((p) => (
              <CardProjeto key={p.id} titulo={p.titulo} descricao={p.desc} tags={p.tags} link={p.link} destaque={p.destaque} status={p.status} />
            ))}
          </div>
        </section>

        <section id="skills" className="mb-32">
          <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-cyan-500"></span> Skills & Toolbox
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Backend - Sua Força Principal */}
            <div className="space-y-4">
              <h3 className="text-cyan-400 font-mono text-xs uppercase tracking-[0.2em]">Backend Development</h3>
              <div className="grid grid-cols-1 gap-3">
                <SkillIcon nome="Java / Spring Boot" nivel="Sólido" />
                <SkillIcon nome="Kotlin / JetPack" nivel="Sólido" />
                <SkillIcon nome="PostgreSQL / MySQL" nivel="Sólido" />
                <SkillIcon nome="APIs RESTful" nivel="Sólido" />
              </div>
            </div>

            {/* Frontend - Experiência e Evolução */}
            <div className="space-y-4">
              <h3 className="text-blue-400 font-mono text-xs uppercase tracking-[0.2em]">Frontend Development</h3>
              <div className="grid grid-cols-1 gap-3">
                <SkillIcon nome="Angular" nivel="Prático" />
                <SkillIcon nome="React / Next.js" nivel="Prático" />
                <SkillIcon nome="TypeScript" nivel="Prático" />
                <SkillIcon nome="Tailwind CSS" nivel="Prático" />
              </div>
            </div>

            {/* Ferramentas e Boas Práticas */}
            <div className="space-y-4">
              <h3 className="text-purple-400 font-mono text-xs uppercase tracking-[0.2em]">DevOps & Patterns</h3>
              <div className="grid grid-cols-1 gap-3">
                <SkillIcon nome="Git / GitLab CI" nivel="Sólido" />
                <SkillIcon nome="Docker" nivel="Prático" />
                <SkillIcon nome="Clean Code / SOLID" nivel="Sólido" />
                <SkillIcon nome="Scrum / Kanban" nivel="Sólido" />
              </div>
            </div>

          </div>
        </section>
        <Footer />

      </main>
    </div>

  );


}