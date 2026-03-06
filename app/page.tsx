import { Navbar } from "@/components/NavBar";
import { CardProjeto } from "@/components/CardProject";
import { SkillIcon } from "@/components/SkillsIcon";
import { Footer } from "@/components/Footer";

export default function Home() {
  const meusProjetos = [
    { id: 1, titulo: "Al-Pike Monitor", desc: "Observatório geopolítico em tempo real com Java." },
    { id: 2, titulo: "Backend Pro", desc: "API robusta escalável com Spring Boot." },
    { id: 3, titulo: "Interface Next.js", desc: "Dashboard interativo e responsivo." }
  ];

  return (
    <div className="bg-gray-950 min-h-screen">
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 pt-32">
        {/* Seção Hero - O "Apresentar-se" */}
        <section className="flex flex-col items-center text-center mb-24 py-20">
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-cyan-400 uppercase bg-cyan-400/10 rounded-full">
            Disponível para novos desafios
          </div>
          <h1 className="text-6xl md:text-7xl font-extrabold text-white mb-6">
            Construindo sistemas <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              robustos e modernos.
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mb-10 leading-relaxed">
            Engenheiro de Software com base sólida em Java, atualmente 
            explorando o potencial do Next.js para criar experiências web completas.
          </p>
        </section>

        {/* Seção de Projetos */}
        <section id="projetos" className="mb-24">
          <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-cyan-500"></span> Projetos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {meusProjetos.map((p) => (
              <CardProjeto key={p.id} titulo={p.titulo} descricao={p.desc} />
            ))}
          </div>
        </section>

        <section id="skills" className="mb-32">
  <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
    <span className="w-8 h-[2px] bg-cyan-500"></span> Conhecimento Técnico
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
    {/* Coluna Backend */}
    <div>
      <h3 className="text-gray-400 mb-6 font-medium uppercase tracking-widest text-sm">Backend & Core</h3>
      <div className="grid grid-cols-2 gap-4">
        <SkillIcon nome="Java" nivel="Avançado" />
        <SkillIcon nome="Spring Boot" nivel="Sólido" />
        <SkillIcon nome="SQL / Oracle" nivel="Sólido" />
        <SkillIcon nome="Arquitetura" nivel="Sólido" />
      </div>
    </div>

    {/* Coluna Frontend */}
    <div>
      <h3 className="text-gray-400 mb-6 font-medium uppercase tracking-widest text-sm">Frontend & Modern Web</h3>
      <div className="grid grid-cols-2 gap-4">
        <SkillIcon nome="React" nivel="Em Transição" />
        <SkillIcon nome="Next.js" nivel="Em Transição" />
        <SkillIcon nome="Tailwind CSS" nivel="Estudando" />
        <SkillIcon nome="TypeScript" nivel="Sólido" />
      </div>
    </div>
  </div>
</section>
<Footer />

      </main>
    </div>
    
  );
  

}