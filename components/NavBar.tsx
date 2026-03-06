export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-gray-950/80 backdrop-blur-md px-6 md:px-16 py-4 flex justify-between items-center">
      {/* Nome Completo como Logo */}
      <div className="flex flex-col">
        <span className="text-white font-bold text-lg tracking-tight leading-none">
          Jhean Victo Barbosa Almeida 
        </span>
        <span className="text-cyan-400 text-[10px] uppercase tracking-[0.3em] font-medium mt-1">
          Engenheiro de Software 
        </span>
      </div>
      
      {/* Links de Navegação */}
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
        <a href="#" className="hover:text-cyan-400 transition-colors">Início</a>
        <a href="#projetos" className="hover:text-cyan-400 transition-colors">Projetos</a>
        <a href="#skills" className="hover:text-cyan-400 transition-colors">Habilidades</a>
        <a 
          href="#contato" 
          className="bg-cyan-500 text-gray-950 px-5 py-2 rounded-full font-bold hover:bg-cyan-400 hover:scale-105 transition-all shadow-lg shadow-cyan-500/20"
        >
          Contato
        </a>
      </div>
    </nav>
  );
}