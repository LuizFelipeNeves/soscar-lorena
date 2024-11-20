import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "SOS CAR&apos;s - Oficina Mecânica Especializada",
  description: 'Serviços automotivos de qualidade, manutenção preventiva e corretiva, diagnóstico computadorizado e mecânicos especializados.',
  keywords: 'oficina mecânica, reparo automotivo, manutenção de carros, mecânico especializado',
  openGraph: {
    title: "SOS CAR&apos;s - Oficina Mecânica Especializada",
    description: 'Serviços automotivos de qualidade com os melhores profissionais',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}