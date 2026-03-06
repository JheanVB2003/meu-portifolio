export function Navbar() {
    return (
      <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-gray-950/80 backdrop-blur-md px-10 py-4 flex justify-between items-center">
        <div className="text-cyan-400 font-bold text-xl tracking-tighter">
          JA<span className="text-white">.dev</span>
        </div>
        
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
          <a href="#" className="hover:text-cyan-400 transition-colors">Início</a>
          <a href="#projetos" className="hover:text-cyan-400 transition-colors">Projetos</a>
          <a href="#skills" className="hover:text-cyan-400 transition-colors">Habilidades</a>
          <a href="#contato" className="bg-cyan-500 text-gray-950 px-4 py-2 rounded-full hover:bg-cyan-400 transition-all">
            Contato
          </a>
        </div>
      </nav>
    );
  }