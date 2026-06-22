import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Base URL de tu Cloudinary
  const CLOUDINARY_BASE = 'https://res.cloudinary.com/dmrcx0h4a/image/upload';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur-sm shadow-lg' : 'bg-black/80 backdrop-blur-sm'} py-3`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo con imagen de Cloudinary */}
          <Link 
            to="/" 
            className="flex items-center gap-2 group"
          >
            <img 
              src={`${CLOUDINARY_BASE}/v1781994105/fglogo_rnpbnk.png`}
              alt="Force Gym Logo"
              className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              loading="eager"
            />
          </Link>

          {/* Menú Desktop */}
          <ul className="hidden md:flex items-center space-x-8">
            <li>
              <a 
                href="#historia" 
                className="text-white hover:text-yellow-400 transition-colors font-medium uppercase text-sm tracking-wider relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-yellow-500 after:transition-all hover:after:w-full"
              >
                Historia
              </a>
            </li>
            <li>
              <a 
                href="#tarifas" 
                className="text-white hover:text-yellow-400 transition-colors font-medium uppercase text-sm tracking-wider relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-yellow-500 after:transition-all hover:after:w-full"
              >
                Tarifas
              </a>
            </li>
            <li>
              <a 
                href="#galeria" 
                className="text-white hover:text-yellow-400 transition-colors font-medium uppercase text-sm tracking-wider relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-yellow-500 after:transition-all hover:after:w-full"
              >
                Galería
              </a>
            </li>
            <li>
              <a 
                href="#contacto" 
                className="text-white hover:text-yellow-400 transition-colors font-medium uppercase text-sm tracking-wider relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-yellow-500 after:transition-all hover:after:w-full"
              >
                Contacto
              </a>
            </li>
            <li>
              <Link 
                to="/videos-ejercicios" 
                className="text-white hover:text-yellow-400 transition-colors font-medium uppercase text-sm tracking-wider relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-yellow-500 after:transition-all hover:after:w-full"
              >
                Videos
              </Link>
            </li>
            {/* Botón Área Clientes - Desktop */}
            <li>
              <a 
                href="https://forcegym.website/cliente"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-400 hover:scale-105 transition-all duration-300 text-sm uppercase tracking-wider shadow-lg hover:shadow-yellow-500/25"
              >
                Área Clientes
              </a>
            </li>
          </ul>

          {/* Botón Mobile */}
          <button 
            className="md:hidden text-white focus:outline-none p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Menú Mobile */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <ul className="pt-4 pb-6 space-y-3">
            <li>
              <a 
                href="#historia" 
                className="block text-white hover:text-yellow-400 transition-colors font-medium uppercase text-sm tracking-wider py-2 px-3 hover:bg-white/5 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                Historia
              </a>
            </li>
            <li>
              <a 
                href="#tarifas" 
                className="block text-white hover:text-yellow-400 transition-colors font-medium uppercase text-sm tracking-wider py-2 px-3 hover:bg-white/5 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                Tarifas
              </a>
            </li>
            <li>
              <a 
                href="#galeria" 
                className="block text-white hover:text-yellow-400 transition-colors font-medium uppercase text-sm tracking-wider py-2 px-3 hover:bg-white/5 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                Galería
              </a>
            </li>
            <li>
              <a 
                href="#contacto" 
                className="block text-white hover:text-yellow-400 transition-colors font-medium uppercase text-sm tracking-wider py-2 px-3 hover:bg-white/5 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                Contacto
              </a>
            </li>
            <li>
              <Link 
                to="/videos-ejercicios" 
                className="block text-white hover:text-yellow-400 transition-colors font-medium uppercase text-sm tracking-wider py-2 px-3 hover:bg-white/5 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                Videos de ejercicios
              </Link>
            </li>
            {/* Botón Área Clientes - Mobile */}
            <li>
              <a 
                href="https://forcegym.website/cliente"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center px-4 py-3 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-400 transition-all duration-300 text-sm uppercase tracking-wider"
                onClick={() => setIsOpen(false)}
              >
                Área Clientes
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;