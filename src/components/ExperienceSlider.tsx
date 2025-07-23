'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

// Importando os estilos do Swiper
import 'swiper/css';

// Dados para os nossos slides (usando os nomes de arquivo que já definimos)
const experiences = [
  { title: 'Natureza', image: '/images/galeria-final-05.jpeg' },
  { title: 'Cultura', image: '/images/galeria-final-03.jpeg' },
  { title: 'Gastronomia', image: '/images/galeria-final-04.jpeg' },
  { title: 'Aventura', image: '/images/galeria-final-01.jpeg' },
  { title: 'Paisagens', image: '/images/galeria-final-06.jpeg' },
];

export default function ExperienceSlider() {
  return (
    // Este div posiciona o slider para "flutuar" sobre o banner
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl z-20 mb-8">
      <Swiper
        slidesPerView={'auto'}
        centeredSlides={true}
        spaceBetween={20}
        grabCursor={true}
        className="mySwiper !px-8" // Adiciona padding para as slides não cortarem nas bordas
      >
        {experiences.map((exp, index) => (
          <SwiperSlide key={index} className="!w-[220px] !h-[280px]">
            <div className="relative w-full h-full rounded-2xl overflow-hidden group">
              <Image
                src={exp.image}
                alt={exp.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <p className="absolute bottom-5 left-5 text-white text-xl font-bold">
                {exp.title}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}