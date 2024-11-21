import Link from 'next/link';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-6 py-8 sm:px-4 lg:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">SOS CAR&apos;s</h3>
            <p className="text-gray-300">
              Sua oficina mecânica de confiança desde 1995.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">Contato</h3>
            <p className="text-gray-300">
              Telefone: (11) 1234-5678<br />
              Email: contato@autocenter.com.br<br />
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">Horário</h3>
            <p className="text-gray-300">
              Segunda a Sexta: 8h às 18h<br />
              Sábado: 8h às 12h
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">Localização</h3>
            <p className="text-gray-300 mb-8">
                R. Dr. José Machado Coelho de Castro nº 65 - Centro, Lorena, SP.
            </p>
            <p className="text-gray-300">
              <Link href="/sobre#localizacao" className="text-primary hover:underline">
                Veja no mapa
              </Link>
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 text-center">
          <div className="flex justify-center space-x-6 mb-8">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook className="h-6 w-6 text-gray-400 hover:text-primary transition-colors" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram className="h-6 w-6 text-gray-400 hover:text-primary transition-colors" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Twitter className="h-6 w-6 text-gray-400 hover:text-primary transition-colors" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6 text-gray-400 hover:text-primary transition-colors" />
            </a>
          </div>
          <p className="text-gray-400">
            © {new Date().getFullYear()} SOS CAR&apos;s. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}