'use client';

import Image from 'next/image';
import { 
  FaWhatsapp, FaInstagram, FaUsers, FaLeaf, FaFish, 
  FaShip, FaMusic, FaMoon, FaMugHot, FaSwimmer, FaEnvelope
} from 'react-icons/fa';
import { motion, Variants } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import Navbar from '@/components/Navbar';

export default function Home() {
  const sectionAnimation: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: "easeOut" 
      }
    }
  };

  return (
    <main 
      className="font-sans bg-[#0d5e59]" // Cor de fundo base para o degradê não aparecer mais
    >
      <Navbar />

      {/* ===== NOVA SEÇÃO DO BANNER ===== */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center text-left"
      >
        <div 
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/images/galeria-02.jpeg')" }}
        ></div>
        <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>
        
        <motion.div
          className="relative z-10 text-white max-w-4xl px-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
            Experiência Amazônica:
          </h1>
          <h2 className="text-4xl md:text-6xl font-light leading-tight tracking-tight mb-6">
            Cultura e Natureza no Rio Arapiuns
          </h2>
          <p className="max-w-xl text-lg text-gray-200 mb-8">
            Dois dias de imersão completa em um dos cenários mais espetaculares do Pará. Uma jornada inesquecível de tradição e paisagens deslumbrantes.
          </p>
          <div className="flex flex-wrap gap-4">
            <ScrollLink 
              to="roteiro" 
              smooth={true} 
              duration={500} 
              offset={-70} 
              className="px-8 py-3 font-semibold text-white border-2 border-white rounded-full hover:bg-white hover:text-black transition-colors duration-300 cursor-pointer"
            >
              Ver Roteiro
            </ScrollLink>
            <ScrollLink 
              to="contato" 
              smooth={true} 
              duration={500} 
              offset={-70} 
              className="px-8 py-3 font-semibold text-black bg-white rounded-full hover:bg-gray-200 transition-colors duration-300 cursor-pointer"
            >
              Fale Conosco
            </ScrollLink>
          </div>
        </motion.div>
      </section>

      {/* As outras seções continuam iguais */}
      <motion.section
        id="destaques"
        className="bg-white py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionAnimation}
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-serif">Uma Viagem Inesquecível</h2>
          <p className="text-lg text-gray-600 mb-12">Três pilares que tornam esta experiência única.</p>
          <div className="flex flex-col md:flex-row justify-center gap-12">
            <div className="flex flex-col items-center p-6 transition-transform duration-300 hover:-translate-y-2">
              <div className="bg-teal-100 rounded-full p-5 mb-4">
                <FaUsers className="text-4xl text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 font-serif">Imersão Cultural</h3>
              <p className="text-gray-600 max-w-xs">Participe de oficinas e vivências com as comunidades tradicionais da floresta.</p>
            </div>
            <div className="flex flex-col items-center p-6 transition-transform duration-300 hover:-translate-y-2">
              <div className="bg-teal-100 rounded-full p-5 mb-4">
                <FaLeaf className="text-4xl text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 font-serif">Natureza Exuberante</h3>
              <p className="text-gray-600 max-w-xs">Durma a bordo e navegue por praias de rio e cenários paradisíacos.</p>
            </div>
            <div className="flex flex-col items-center p-6 transition-transform duration-300 hover:-translate-y-2">
              <div className="bg-teal-100 rounded-full p-5 mb-4">
                <FaFish className="text-4xl text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 font-serif">Sabores da Amazônia</h3>
              <p className="text-gray-600 max-w-xs">Desfrute da culinária local, com piracaia na praia e almoço típico regional.</p>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section id="roteiro" className="bg-gray-50 py-20 px-6 md:px-12" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionAnimation}>
        <div className="pt-16">
          <div className="max-w-5xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-serif">Roteiro da Viagem</h2>
            <p className="text-lg text-gray-600 mt-2">Dois dias de imersão completa na cultura e natureza amazônica.</p>
          </div>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white rounded-lg p-8 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 font-serif">DIA 1 - Sábado</h3>
              <div className="space-y-6 text-gray-700">
                <div className="flex items-start gap-4"><FaShip className="text-teal-600 text-2xl mt-1 flex-shrink-0" /><p><strong className="text-gray-900">12:00:</strong> Saída de Santarém rumo à Praia de Caracaraí com lanche a bordo.</p></div>
                <div className="flex items-start gap-4"><FaMusic className="text-teal-600 text-2xl mt-1 flex-shrink-0" /><p><strong className="text-gray-900">Noite:</strong> Piracaia (peixe na brasa) ao som de carimbó e música regional.</p></div>
                <div className="flex items-start gap-4"><FaMoon className="text-teal-600 text-2xl mt-1 flex-shrink-0" /><p><strong className="text-gray-900">Pernoite:</strong> Dormida a bordo para viver a Amazônia intensamente.</p></div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 font-serif">DIA 2 - Domingo</h3>
              <div className="space-y-6 text-gray-700">
                <div className="flex items-start gap-4"><FaMugHot className="text-teal-600 text-2xl mt-1 flex-shrink-0" /><p><strong className="text-gray-900">Manhã:</strong> Café da manhã comunitário, oficina de farinha e visita à loja de artesanato.</p></div>
                <div className="flex items-start gap-4"><FaSwimmer className="text-teal-600 text-2xl mt-1 flex-shrink-0" /><p><strong className="text-gray-900">Almoço:</strong> Almoço típico regional, banho de rio e parada na Praia da Ponta Grande.</p></div>
                <div className="flex items-start gap-4"><FaShip className="text-teal-600 text-2xl mt-1 flex-shrink-0" /><p><strong className="text-gray-900">Fim de tarde:</strong> Início do retorno para Santarém, com lanche a bordo.</p></div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section id="galeria" className="bg-white py-20 px-6 md:px-12" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionAnimation}>
        <div className="pt-16">
          <div className="max-w-5xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-serif">Um Pouco do Paraíso</h2>
            <p className="text-lg text-gray-600 mt-2">Veja com seus próprios olhos a beleza que te espera.</p>
          </div>
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="relative overflow-hidden rounded-lg shadow-md aspect-square"><Image src="/images/galeria-01.jpeg" alt="Cabana vista de dentro" fill className="object-cover hover:scale-105 transition-transform duration-300"/></div>
            <div className="relative overflow-hidden rounded-lg shadow-md aspect-square"><Image src="/images/galeria-02.jpeg" alt="Estrutura do evento na praia" fill className="object-cover hover:scale-105 transition-transform duration-300"/></div>
            <div className="relative overflow-hidden rounded-lg shadow-md aspect-square"><Image src="/images/galeria-03.jpeg" alt="Produção de farinha" fill className="object-cover hover:scale-105 transition-transform duration-300"/></div>
            <div className="relative overflow-hidden rounded-lg shadow-md aspect-square"><Image src="/images/galeria-04.jpeg" alt="Decoração na areia" fill className="object-cover hover:scale-105 transition-transform duration-300"/></div>
            <div className="relative overflow-hidden rounded-lg shadow-md aspect-square"><Image src="/images/galeria-05.jpeg" alt="Praia com rede" fill className="object-cover hover:scale-105 transition-transform duration-300"/></div>
            <div className="relative overflow-hidden rounded-lg shadow-md aspect-square"><Image src="/images/galeria-06.jpeg" alt="Praia ensolarada com cabanas" fill className="object-cover hover:scale-105 transition-transform duration-300"/></div>
          </div>
        </div>
      </motion.section>

      <motion.section id="contato" className="bg-gray-900/90 backdrop-blur-sm text-white py-20 px-6" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionAnimation}>
        <div className="pt-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-serif">Pronto para Viver essa Experiência?</h2>
            <p className="text-lg text-gray-300 mt-4 mb-8">Vagas limitadas. Entre em contato e garanta seu lugar nessa jornada inesquecível.</p>
            <a href="https://wa.me/5593992214782?text=Olá!%20Tenho%20interesse%20na%20Experiência%20Amazônica%20no%20Rio%20Arapiuns." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform duration-300 hover:scale-105">
              <FaWhatsapp className="mr-3 text-2xl" />
              Fale Conosco pelo WhatsApp
            </a>
          </div>
        </div>
      </motion.section>

      <footer className="bg-gray-800 text-gray-300">
        <div className="max-w-6xl mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold text-white mb-4 font-serif">TURIARTE</h3>
            <p className="text-sm">Promovendo o turismo de base comunitária e o artesanato autêntico da Floresta Amazônica.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-4 font-serif">Navegue</h3>
            <ul className="space-y-2 text-sm">
              <li><ScrollLink to="destaques" smooth={true} duration={500} offset={-70} className="hover:text-white cursor-pointer">Destaques</ScrollLink></li>
              <li><ScrollLink to="roteiro" smooth={true} duration={500} offset={-70} className="hover:text-white cursor-pointer">Roteiro</ScrollLink></li>
              <li><ScrollLink to="galeria" smooth={true} duration={500} offset={-70} className="hover:text-white cursor-pointer">Galeria</ScrollLink></li>
              <li><ScrollLink to="contato" smooth={true} duration={500} offset={-70} className="hover:text-white cursor-pointer">Contato</ScrollLink></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-4 font-serif">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <FaWhatsapp />
                <a href="https://wa.me/5593992214782" target="_blank" rel="noopener noreferrer" className="hover:text-white">(93) 99221-4782</a>
              </li>
              <li className="flex items-center gap-3">
                <FaInstagram />
                <a href="https://instagram.com/turiarte_amazonia" target="_blank" rel="noopener noreferrer" className="hover:text-white">@turiarte_amazonia</a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope />
                <a href="mailto:contato@turiarte.com" className="hover:text-white">contato@turiarte.com</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-black py-4">
          <p className="text-center text-xs text-gray-400">&copy; 2025 Cooperativa de Turismo e Artesanato da Floresta - TURIARTE. Todos os direitos reservados.</p>
        </div>
      </footer>
    </main>
  );
}