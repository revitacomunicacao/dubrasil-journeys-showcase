import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-dubrasil-navy text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-heading text-2xl font-bold mb-4">DuBrasil</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Especialistas em controle de ponto, gestão de jornadas, controle de acesso e identificação corporativa.
            </p>
          </div>
          <div>
            <h4 className="font-heading font-bold mb-4">Soluções</h4>
            <ul className="space-y-2 text-white/60 text-sm">
              <li><a href="#solucoes" className="hover:text-secondary transition-colors">Controle de Ponto</a></li>
              <li><a href="#solucoes" className="hover:text-secondary transition-colors">Gestão de Jornadas no Agro</a></li>
              <li><a href="#solucoes" className="hover:text-secondary transition-colors">Controle de Acesso</a></li>
              <li><a href="#solucoes" className="hover:text-secondary transition-colors">Identificação Corporativa</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-bold mb-4">Contato</h4>
            <ul className="space-y-3 text-white/60 text-sm">
              <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-secondary" /> (00) 0000-0000</li>
              <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-secondary" /> contato@dubrasil.com.br</li>
              <li className="flex items-start gap-2"><MapPin className="w-4 h-4 text-secondary mt-0.5" /> São Paulo, SP</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/40 text-sm">
          © {new Date().getFullYear()} DuBrasil. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
