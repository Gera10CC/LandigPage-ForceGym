import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

type CardItem = {
  images: string[];
  title: string;
  descriptions: string[];
};

const WhyUs = () => {
  // Base URL de tu Cloudinary
  const CLOUDINARY_BASE = 'https://res.cloudinary.com/dmrcx0h4a/image/upload';

  const cardsData: CardItem[] = useMemo(
    () => [
      {
        title: 'INSTALACIONES',
        images: [
          `${CLOUDINARY_BASE}/v1781989105/forcegym_pdpn69.webp`,
          `${CLOUDINARY_BASE}/v1781989142/IMG_6978_xirzsb.webp`,
          `${CLOUDINARY_BASE}/v1781989141/IMG_6984_msg0wd.webp`,
          `${CLOUDINARY_BASE}/v1781989138/IMG_6977_apconz.webp`,
          `${CLOUDINARY_BASE}/v1781989136/IMG_6987_glk9z1.webp`,
          `${CLOUDINARY_BASE}/v1781989136/IMG_6983_tznvbd.webp`,
          `${CLOUDINARY_BASE}/v1781989135/IMG_6975_bi9xdy.webp`,
          `${CLOUDINARY_BASE}/v1781989137/IMG_6979_fv456u.webp`,
          `${CLOUDINARY_BASE}/v1781989136/IMG_6976_be3lqb.webp`,
          `${CLOUDINARY_BASE}/v1781989130/IMG_6973_ndcxph.webp`,
          `${CLOUDINARY_BASE}/v1781989130/IMG_6982_oypxic.webp`,
          `${CLOUDINARY_BASE}/v1781989100/IMG_6990_ccdsif.webp`,
          `${CLOUDINARY_BASE}/v1781989129/IMG_6986_zraali.webp`,
          `${CLOUDINARY_BASE}/v1781989128/IMG_6980_pbjtaj.webp`,
          `${CLOUDINARY_BASE}/v1781989127/IMG_6981_rqbelk.webp`,
          `${CLOUDINARY_BASE}/v1781989121/IMG_6988_j6vh0p.webp`,
          `${CLOUDINARY_BASE}/v1781989118/IMG_6989_hnxmlf.webp`,
          `${CLOUDINARY_BASE}/v1781989118/IMG_6995_f0jgdd.webp`,
        ],
        descriptions: [
          
        ]
      },
      {
        title: 'ENTRENADORAS CERTIFICADAS',
        images: [
          `${CLOUDINARY_BASE}/v1781989117/coach_m7bvjv.webp`,
          `${CLOUDINARY_BASE}/v1781989109/andrea_zql9y1.webp`,
          `${CLOUDINARY_BASE}/v1781989109/kimberly_vv1hqo.webp`,
          `${CLOUDINARY_BASE}/v1781989108/gypsy_hlr0vd.webp`
        ],
        descriptions: [
          'Equipo de entrenadoras certificadas',
          'Andrea Chacón: Especialista en entrenamiento funcional',
          'Kimberly Chacón: Experta en consultas personalizadas',
          'Gipzy López: Nutricionista y entrenadora certificada'
        ]
      },
      {
        title: 'RESULTADOS GARANTIZADOS',
        images: [
          `${CLOUDINARY_BASE}/v1781989107/resultados_o6mtz4.webp`,
        ],
        descriptions: [
         
        ]
      }
    ],
    []
  );

  const [currentIndices, setCurrentIndices] = useState(
    cardsData.map(() => 0)
  );

  // Estado para swipe
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const navigate = useCallback((cardIndex: number, direction: 'next' | 'prev') => {
    setCurrentIndices(prev => {
      const newIndices = [...prev];
      const currentMax = cardsData[cardIndex].images.length - 1;
      
      if (direction === 'next') {
        newIndices[cardIndex] = newIndices[cardIndex] === currentMax ? 0 : newIndices[cardIndex] + 1;
      } else {
        newIndices[cardIndex] = newIndices[cardIndex] === 0 ? currentMax : newIndices[cardIndex] - 1;
      }
      
      return newIndices;
    });
  }, [cardsData]);

  const goToImage = useCallback((cardIndex: number, imgIndex: number) => {
    setCurrentIndices(prev => {
      const newIndices = [...prev];
      newIndices[cardIndex] = imgIndex;
      return newIndices;
    });
  }, []);

  // Manejadores de swipe táctil
  const handleTouchStart = (cardIndex: number, e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
    setActiveCard(cardIndex);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = (cardIndex: number) => {
    if (!touchStartX || !touchEndX) return;
    
    const distance = touchStartX - touchEndX;
    const isSwipe = Math.abs(distance) > 50; // Umbral mínimo para considerar swipe
    
    if (isSwipe) {
      if (distance > 0) {
        // Swipe hacia la izquierda → siguiente imagen
        navigate(cardIndex, 'next');
      } else {
        // Swipe hacia la derecha → imagen anterior
        navigate(cardIndex, 'prev');
      }
    }
    
    setTouchStartX(null);
    setTouchEndX(null);
    setActiveCard(null);
  };

  // Quitamos el useEffect del autoplay

  return (
    <section className="py-12 md:py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-3">
            ¿POR QUÉ <span className="text-yellow-500">FORCE GYM</span>?
          </h2>
          <div className="w-14 md:w-16 h-1 bg-yellow-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {cardsData.map((card, cardIndex) => (
            <div 
              key={cardIndex} 
              className="relative h-80 sm:h-96 rounded-xl overflow-hidden bg-gray-900 shadow-lg hover:shadow-yellow-500/30 transition-shadow"
              onTouchStart={(e) => handleTouchStart(cardIndex, e)}
              onTouchMove={handleTouchMove}
              onTouchEnd={() => handleTouchEnd(cardIndex)}
            >
              <div className="relative w-full h-full overflow-hidden">
                {card.images.map((image, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={image}
                    alt={`${card.title} ${imgIndex + 1}`}
                    loading="lazy"
                    decoding="async"
                    className={`absolute w-full h-full object-cover brightness-[0.85] transition-opacity duration-700 ${
                      currentIndices[cardIndex] === imgIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ))}
              </div>

              {/* Gradiente y texto */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex flex-col justify-end pb-8 pt-4 px-4">
                <h3 className="text-xl md:text-2xl font-bold text-yellow-400 mb-1 drop-shadow-lg">
                  {card.title}
                </h3>
                <p className="text-white text-sm md:text-base mb-4 drop-shadow-lg">
                  {card.descriptions[currentIndices[cardIndex]]}
                </p>

                <div className="flex justify-center space-x-2 mt-2">
                  {card.images.map((_, imgIndex) => (
                    <button
                      key={imgIndex}
                      onClick={(e) => {
                        e.stopPropagation();
                        goToImage(cardIndex, imgIndex);
                      }}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        currentIndices[cardIndex] === imgIndex 
                          ? 'bg-yellow-500 w-6' 
                          : 'bg-white/50 hover:bg-white/70'
                      }`}
                      aria-label={`Ir a imagen ${imgIndex + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;