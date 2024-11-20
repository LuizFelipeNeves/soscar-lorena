"use client"

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const img = true;

  return (
    <nav className="bg-secondary shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary mb-5 mt-5">
              {img ? (<Image
                src="/images/logo.png"
                alt="SOS CAR's"
                width={150}
                height={40}
              />) : "SOS CAR's"}
              
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/sobre" className="text-gray-200 hover:text-primary transition-colors">
              Sobre
            </Link>
            <Link href="/agendar">
              <Button variant="default" className="bg-primary hover:bg-primary-hover text-white">
                Agendar Serviço
              </Button>
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-200 hover:text-primary transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      <div className={`md:hidden transition-transform duration-300 ${isOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/sobre" className="block text-gray-200 transition-colors" tabIndex={isOpen ? 0 : -1}>   
            <Button variant="outline" className="w-full bg-white text-black">
              Sobre
            </Button>
          </Link>
          <Link href="/agendar" className="block" tabIndex={isOpen ? 0 : -1}>
            <Button variant="default" className="w-full bg-primary hover:bg-primary-hover text-white">
              Agendar Serviço
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}