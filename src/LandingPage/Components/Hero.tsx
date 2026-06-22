import { useState, useEffect } from "react";

const Hero = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [showInitialText, setShowInitialText] = useState(true);

  useEffect(() => {
    const checkIfDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    checkIfDesktop();
    window.addEventListener('resize', checkIfDesktop);

    return () => window.removeEventListener('resize', checkIfDesktop);
  }, []);

  // Ocultar el texto inicial después de 10 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowInitialText(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  // Videos en Cloudinary
  const VIDEO_HORIZONTAL = 'https://res.cloudinary.com/dmrcx0h4a/video/upload/v1782158614/comprimidoHori_mptgzn.mp4';
  const VIDEO_VERTICAL = 'https://res.cloudinary.com/dmrcx0h4a/video/upload/v1782158215/Comprimido_mq9min.mp4';
  const FALLBACK_IMAGE = 'https://res.cloudinary.com/dmrcx0h4a/image/upload/v1781989121/IMG_6988_j6vh0p.webp';

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('historia') || document.querySelector('section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Video Desktop (horizontal) */}
      {isDesktop && (
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            poster={FALLBACK_IMAGE}
            onError={() => setVideoError(true)}
          >
            <source src={VIDEO_HORIZONTAL} type="video/mp4" />
            <img src={FALLBACK_IMAGE} alt="Force Gym" className="w-full h-full object-cover" />
          </video>
        </div>
      )}

      {/* Video Mobile (vertical) */}
      {!isDesktop && (
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            poster={FALLBACK_IMAGE}
            onError={() => setVideoError(true)}
          >
            <source src={VIDEO_VERTICAL} type="video/mp4" />
            <img src={FALLBACK_IMAGE} alt="Force Gym" className="w-full h-full object-cover" />
          </video>
        </div>
      )}

      {/* Gradiente sutil arriba y abajo */}
      <div className="absolute inset-0 z-1 pointer-events-none bg-gradient-to-b from-black/30 via-transparent to-black/60"></div>

      {/* Texto inicial - desaparece después de 10 segundos */}
      <div className={`absolute inset-0 z-10 flex items-center justify-center transition-all duration-1000 ${showInitialText ? 'opacity-100' : 'opacity-0'}`}>
        <div className="text-center px-6 max-w-4xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4 drop-shadow-lg">
            DESAFÍA TU <span className="text-yellow-500">CUERPO</span>,<br />
            CONQUISTA TU <span className="text-yellow-500">MENTE</span>
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-200 mb-8 max-w-2xl mx-auto drop-shadow-md">
            Bienvenido a <span className="font-bold text-yellow-500">Force Gym</span>: donde la fuerza física y mental se forjan juntas.
          </p>
          <a
            href="#tarifas"
            className="inline-block px-8 py-3 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-400 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-yellow-500/25"
          >
            COMENZAR AHORA
          </a>
        </div>
      </div>

      {/* Indicador de Scroll - siempre visible */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-bounce cursor-pointer" onClick={scrollToNextSection}>
        <span className="text-white/70 text-xs uppercase tracking-wider font-medium">Desliza</span>
        <svg 
          className="w-6 h-6 text-white/70" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3" 
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;