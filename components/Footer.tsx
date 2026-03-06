import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export function Footer() {
  return (
    <footer id="contato" className="border-t border-white/10 bg-gray-950 py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        
        {/* Lado Esquerdo: Call to Action */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold text-white mb-4">Vamos conversar?</h2>
          <p className="text-gray-400 max-w-sm">
            Estou sempre aberto a novos projetos e oportunidades na área de Engenharia de Software e Desenvolvimento Fullstack.
          </p>
        </div>

        {/* Lado Direito: Links Sociais */}
        <div className="flex flex-col items-center md:items-end gap-6">
          <div className="flex gap-6 text-2xl text-gray-400">
            <a href="https://github.com/seu-usuario" target="_blank" className="hover:text-cyan-400 transition-colors">
              <FaGithub title="GitHub" />
            </a>
            <a href="https://linkedin.com/in/seu-perfil" target="_blank" className="hover:text-cyan-400 transition-colors">
              <FaLinkedin title="LinkedIn" />
            </a>
            <a href="mailto:seuemail@exemplo.com" className="hover:text-cyan-400 transition-colors">
              <FaEnvelope title="Email" />
            </a>
          </div>
          
          <p className="text-sm text-gray-500 font-mono">
            &copy; {new Date().getFullYear()} • Desenvolvido com Next.js e React
          </p>
        </div>

      </div>
    </footer>
  );
}