import { Metadata } from "next";
import Image from "next/image";
import { Shield, Users, Timer, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Sobre Nós - SOS CAR&apos;s",
  description:
    "Conheça nossa história, valores e compromisso com a excelência em serviços automotivos.",
};

const team = [
  {
    name: "Carlos Silva",
    role: "Diretor Técnico",
    image: "/images/team/director.jpg",
    description: "25 anos de experiência em mecânica automotiva",
  },
  {
    name: "Ana Santos",
    role: "Gerente de Atendimento",
    image: "/images/team/manager.jpg",
    description: "Especialista em experiência do cliente",
  },
  {
    name: "Roberto Oliveira",
    role: "Chefe de Mecânicos",
    image: "/images/team/mechanic.jpg",
    description: "Certificado em tecnologias automotivas avançadas",
  },
];

export default function AboutPage() {
  const PROD =
    process.env.NODE_ENV === "production"
      ? ""
      : "https://soscar-lorena.vercel.app";

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px]">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <Image
          src={`${PROD}/images/workshop-team.jpg`}
          alt="Equipe SOS CAR's"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 h-full flex items-center justify-center text-center">
          <div className="max-w-3xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Nossa História
            </h1>
            <p className="text-xl text-gray-200">
              25 anos de excelência em serviços automotivos
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <ValueCard
              icon={<Shield className="h-8 w-8 text-primary" />}
              title="Confiança"
              description="Transparência e honestidade em cada serviço"
            />
            <ValueCard
              icon={<Users className="h-8 w-8 text-primary" />}
              title="Equipe Qualificada"
              description="Profissionais certificados e em constante atualização"
            />
            <ValueCard
              icon={<Timer className="h-8 w-8 text-primary" />}
              title="Agilidade"
              description="Serviços realizados no prazo combinado"
            />
            <ValueCard
              icon={<Award className="h-8 w-8 text-primary" />}
              title="Qualidade"
              description="Excelência em cada detalhe do serviço"
            />
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-6">
                Nossa Trajetória
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Fundada em 1995, a SOS CAR&apos;s nasceu do sonho de oferecer
                  serviços automotivos de excelência, combinando expertise
                  técnica com atendimento personalizado.
                </p>
                <p>
                  Ao longo de mais de duas décadas, investimos constantemente em
                  tecnologia e capacitação profissional, mantendo-nos sempre
                  atualizados com as últimas inovações do setor automotivo.
                </p>
                <p>
                  Hoje, somos referência em manutenção automotiva, atendendo
                  milhares de clientes satisfeitos e mantendo o mesmo
                  compromisso com a qualidade que nos trouxe até aqui.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src={`${PROD}/images/workshop-history.jpg`}
                alt="História da SOS CAR's"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-secondary text-center mb-12">
            Nossa Equipe
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={`${PROD}${member.image}`}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-2">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-2">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-secondary mb-6">
            Onde Estamos
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Nossa oficina está localizada no coração da cidade, com fácil acesso
            e estacionamento. Visite-nos para uma experiência automotiva de
            qualidade.
          </p>
          {/* Google Maps Embed */}
          <div className="relative w-full h-[400px] mb-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!4v1732218028245!6m8!1m7!1slwcGP7rGfGadcIfFhVMDzQ!2m2!1d-22.73081577722377!2d-45.11964627136503!3f13.062855615604102!4f1.7364140398224066!5f0.7820865974627469"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <p className="text-sm text-gray-500">
            Endereço: Rua Exemplo, 123, Centro - Cidade, Estado.
          </p>
        </div>
      </section>
    </div>
  );
}

function ValueCard({ icon, title, description }: any) {
  return (
    <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:border-primary transition-colors">
      <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-secondary mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
