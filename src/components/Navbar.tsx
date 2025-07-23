'use client';

import Image from 'next/image';
import { Link as ScrollLink } from 'react-scroll';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4">
        {/* ESTRUTURA ATUALIZADA PARA FLEX COM 2 BLOCOS */}
        <div className="flex justify-between items-center h-16">
          
          {/* Lado Esquerdo: Logo */}
          <div className="flex-shrink-0 pl-10">
            <ScrollLink to="home" smooth={true} duration={500} className="cursor-pointer">
              <Image 
                src="/images/logo-final.png" 
                alt="Logo Turiarte Amazônia" 
                width={80} 
                height={80}
                priority={true} 
              />
            </ScrollLink>
          </div>

          {/* Lado Direito: Grupo de Links e Botão */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Links de Navegação */}
            <div className="flex items-center space-x-8">
              <ScrollLink to="roteiro" smooth={true} duration={500} offset={-70} className={`font-medium cursor-pointer ${scrolled ? 'text-gray-600 hover:text-teal-600' : 'text-white hover:text-gray-300'}`}>
                Roteiro
              </ScrollLink>
              <ScrollLink to="galeria" smooth={true} duration={500} offset={-70} className={`font-medium cursor-pointer ${scrolled ? 'text-gray-600 hover:text-teal-600' : 'text-white hover:text-gray-300'}`}>
                Galeria
              </ScrollLink>
              <ScrollLink to="contato" smooth={true} duration={500} offset={-70} className={`font-medium cursor-pointer ${scrolled ? 'text-gray-600 hover:text-teal-600' : 'text-white hover:text-gray-300'}`}>
                Contato
              </ScrollLink>
            </div>

            {/* Botão */}
            <ScrollLink 
              to="contato" 
              smooth={true} 
              duration={500} 
              className="bg-white text-gray-900 hover:bg-gray-200 font-bold py-2 px-5 rounded-full text-sm cursor-pointer transition-colors"
            >
              Reservar Vaga
            </ScrollLink>
          </div>

        </div>
      </div>
    </nav>
  );
}