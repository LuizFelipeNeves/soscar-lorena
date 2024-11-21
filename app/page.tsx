"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState, useEffect } from "react";

const features = [
  {
    title: "Experiência",
    description: "Mais de 25 anos no mercado",
    icon: "🏆",
  },
  {
    title: "Garantia",
    description: "Garantia em todos os serviços",
    icon: "✓",
  },
  {
    title: "Equipe Qualificada",
    description: "Profissionais certificados",
    icon: "👨‍🔧",
  },
  {
    title: "Preço Justo",
    description: "Orçamento transparente",
    icon: "💰",
  },
];

const testimonials = [
  {
    name: "João Silva",
    comment: "Excelente serviço! Rápido, eficiente e preço justo.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
  },
  {
    name: "Maria Oliveira",
    comment: "Ótimo atendimento e profissionais muito competentes.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
  },
  {
    name: "Pedro Santos",
    comment: "Resolveram o problema do meu carro rapidamente. Recomendo!",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
  },
];

const services = [
  {
    title: "Troca de Óleo",
    description:
      "Troca de óleo rápida e eficiente para manter seu motor funcionando perfeitamente.",
    icon: "🛢️",
  },
  {
    title: "Alinhamento 3D",
    description:
      "Alinhamento preciso com tecnologia 3D para maior segurança e economia de combustível.",
    icon: "🔧",
  },
  {
    title: "Troca de Pneus e Balanceamento",
    description:
      "Serviço completo de troca de pneus e balanceamento para uma condução suave.",
    icon: "🚗",
  },
  {
    title: "Manutenção de Câmbio",
    description:
      "Cuidados especializados para manter seu câmbio funcionando sem problemas.",
    icon: "⚙️",
  },
  {
    title: "Diagnóstico Eletrônico",
    description:
      "Diagnóstico preciso com equipamentos de última geração.",
    icon: "💻",
  },
  {
    title: "Ar Condicionado",
    description:
      "Manutenção e recarga do sistema de ar condicionado para seu conforto.",
    icon: "❄️",
  },
];

const promos = [
  {
    text: "50% de desconto na troca de óleo!",
    image:
      "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    cta: "Aproveite Agora",
  },
  {
    text: "Alinhamento 3D grátis na compra de 4 pneus!",
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    cta: "Saiba Mais",
  },
  {
    text: "Revisão completa com 30% de desconto!",
    image:
      "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    cta: "Agende Já",
  },
];

// Hero Section
const HeroSection = () => (
  <section className="relative h-screen flex items-center justify-center overflow-hidden">
    <Image
      src="/images/workshop.jpg"
      alt="Imagem de uma oficina automotiva moderna"
      fill
      className="object-cover"
      priority
    />
    <div className="absolute inset-0 bg-black/60" />
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative z-10 text-center text-white max-w-4xl mx-auto px-4"
    >
      <h1 className="text-6xl font-bold mb-6">Sua oficina automotiva de confiança</h1>
      <p className="text-xl mb-8">Tecnologia de ponta e expertise para cuidar do seu veículo</p>
      <Link href="/agendar">
        <Button
          size="lg"
          className="bg-primary hover:bg-primary-dark text-white text-lg px-8 py-3 rounded-full transition duration-300"
        >
          Agende seu serviço
        </Button>
      </Link>
    </motion.div>
  </section>
);

// Features Section
const FeaturesSection = () => (
  <section className="py-16 bg-accent">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12 text-secondary">
        Por que nos escolher?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </div>
  </section>
);

const FeatureCard = ({ title, description, icon }) => (
  <div className="text-center p-6 bg-white rounded-lg shadow-sm">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2 text-secondary">{title}</h3>
    <p className="text-muted">{description}</p>
  </div>
);

// Promo Section
const PromoSection = () => (
  <section className="py-16">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12 text-primary">
        Promoções Especiais
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {promos.map((promo, idx) => (
          <PromoCard key={idx} {...promo} />
        ))}
      </div>
    </div>
  </section>
);

const PromoCard = ({ text, image, cta }) => (
  <div className="relative rounded-lg overflow-hidden">
    <Image src={image} alt={text} width={500} height={300} className="object-cover w-full h-full" />
    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
      <div className="text-center text-white px-6 py-8">
        <h3 className="text-2xl font-semibold mb-4">{text}</h3>
        <Button
          className="bg-primary hover:bg-primary-dark text-white text-lg px-10 py-4 rounded-full shadow-lg transition duration-300 transform hover:scale-105"
        >
          {cta}
        </Button>
      </div>
    </div>
  </div>
);

// Testimonials Section
const TestimonialsSection = () => (
  <section className="bg-light py-16">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12 text-primary">
        O que nossos clientes dizem
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {testimonials.map((testimonial, idx) => (
          <TestimonialCard key={idx} {...testimonial} />
        ))}
      </div>
    </div>
  </section>
);

const TestimonialCard = ({ name, comment, image }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
    <div className="flex items-center mb-6">
      <Image
        src={image}
        alt={name}
        width={50}
        height={50}
        className="rounded-full object-cover mr-4"
      />
      <h3 className="text-xl font-semibold text-secondary">{name}</h3>
    </div>
    <p className="text-muted">{comment}</p>
  </div>
);

const ServicesSection = () => (
  <section className="py-16">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12 text-primary">
        Nossos Serviços
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </div>
  </section>
);

const ServiceCard = ({ title, description, icon }) => (
  <div className="text-center p-6 bg-white rounded-lg shadow-sm">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2 text-secondary">{title}</h3>
    <p className="text-muted">{description}</p>
  </div>
);

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <PromoSection />
      <ServicesSection />
      <TestimonialsSection />
    </main>
  );
}
