import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

export function Footer() {
  return (
    <footer id="contato" className="border-t border-white/10 bg-gray-950 py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        
        {/* Lado Esquerdo: Texto de Chamada */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold text-white mb-4">Vamos conversar?</h2>
          <p className="text-gray-400 max-w-sm">
            Estou sempre aberto a novos projetos e oportunidades na área de Engenharia de Software e Desenvolvimento Fullstack.
          </p>
        </div>

        {/* Lado Direito: Links e Contatos */}
        <div className="flex flex-col items-center md:items-end gap-6">
          <div className="flex gap-6 text-2xl text-gray-400">
            {/* GitHub */}
            <a 
              href="https://github.com/JheanVB2003" 
              target="_blank" 
              className="hover:text-white transition-colors"
              title="GitHub"
            >
              <FaGithub />
            </a>
            
            {/* LinkedIn */}
            <a 
              href="http://linkedin.com/in/jhean-barbosa" 
              target="_blank" 
              className="hover:text-cyan-400 transition-colors"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
            
            {/* Email */}
            <a 
              href="mailto:jheanbarbosa1233@gmail.com" 
              className="hover:text-red-400 transition-colors"
              title="Email"
            >
              <FaEnvelope />
            </a>

            {/* WhatsApp/Telefone */}
            <a 
              href="https://wa.me/5561986171954" 
              target="_blank" 
              className="hover:text-green-400 transition-colors"
              title="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>
          
          {/* Telefone e Localização */}
          <div className="text-right text-gray-500 text-xs font-mono space-y-1">
            <p>(61) 98617-1954 </p>
            <p>Brasília - DF </p>
          </div>

          <p className="text-[10px] text-gray-600 font-mono uppercase tracking-widest">
            © 2026 • Desenvolvido com Next.js e React
          </p>
        </div>

      </div>
    </footer>
  );
}