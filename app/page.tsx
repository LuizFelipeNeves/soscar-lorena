import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  const PROD = process.env.NODE_ENV === 'production' ? '' : 'https://soscar-lorena.vercel.app';

  return (
    <>
      <section className="relative h-[600px]">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <Image
          src={`${PROD}/images/workshop.jpg`}
          alt="Oficina mecânica moderna"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">
              Cuidamos do seu carro como se fosse nosso
            </h1>
            <p className="text-xl mb-8 text-gray-100">
              Mecânicos especializados e tecnologia de ponta para o melhor diagnóstico
            </p>
            <Link href="/agendar">
              <Button size="lg" className="bg-primary hover:bg-primary-hover text-white text-lg">
                Agende uma Avaliação
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-secondary">Nossos Serviços</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="p-6 border border-gray-200 rounded-lg shadow-sm hover:border-primary transition-colors">
                <h3 className="text-xl font-semibold mb-3 text-secondary">{service.title}</h3>
                <p className="text-muted">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-accent">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-secondary">Por que nos escolher?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-secondary">{feature.title}</h3>
                <p className="text-muted">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

const services = [
  {
    title: "Manutenção Preventiva",
    description: "Evite problemas futuros com nossa manutenção preventiva completa."
  },
  {
    title: "Diagnóstico Computadorizado",
    description: "Tecnologia avançada para identificar problemas com precisão."
  },
  {
    title: "Reparo de Motor",
    description: "Especialistas em reparos complexos de motor e transmissão."
  }
];

const features = [
  {
    title: "Experiência",
    description: "Mais de 25 anos no mercado",
    icon: "🏆"
  },
  {
    title: "Garantia",
    description: "Garantia em todos os serviços",
    icon: "✓"
  },
  {
    title: "Equipe Qualificada",
    description: "Profissionais certificados",
    icon: "👨‍🔧"
  },
  {
    title: "Preço Justo",
    description: "Orçamento transparente",
    icon: "💰"
  }
];