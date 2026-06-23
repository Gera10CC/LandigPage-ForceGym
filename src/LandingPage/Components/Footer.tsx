import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          
          {/* Logo */}
          <div>
            <h3 className="text-xl font-bold text-yellow-500 mb-2">FORCE GYM</h3>
            <p className="text-sm text-gray-500">Transformando cuerpos desde 2022</p>
          </div>

          {/* Enlaces */}
          <div>
            <h4 className="text-white text-sm font-medium mb-3">Enlaces</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#galeria" className="hover:text-yellow-500 transition-colors">Galería</a></li>
              <li><a href="#tarifas" className="hover:text-yellow-500 transition-colors">Tarifas</a></li>
              <li><a href="#contacto" className="hover:text-yellow-500 transition-colors">Contacto</a></li>
              <li><Link to="/videos-ejercicios" className="hover:text-yellow-500 transition-colors">Videos</Link></li>
              {/* Área Clientes en Footer */}
              <li>
                <a 
                  href="https://forcegym.website/cliente"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-500 hover:text-yellow-400 transition-colors font-medium"
                >
                  Área Clientes
                </a>
              </li>
            </ul>
          </div>

          {/* Horarios */}
          <div>
            <h4 className="text-white text-sm font-medium mb-3">Horarios</h4>
            <div className="space-y-1 text-sm">
              <p>Lun-Vie: 5:00 AM a 12:00 PM - 2:00 PM a 9:00 PM</p>
              <p>Sáb: 7:00 AM - 1:00 PM</p>
              <p className="text-gray-500">Dom: Cerrado</p>
            </div>
          </div>

          {/* Redes */}
          <div>
            <h4 className="text-white text-sm font-medium mb-3">Redes</h4>
            <div className="flex gap-4 mb-4">
              <a 
                href="https://www.instagram.com/forcegym_fullfitness?igsh=aWR3bTVxbXhvOGln" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-500 transition-colors"
              >
                <FaInstagram className="h-5 w-5" />
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=100083292401041"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-500 transition-colors"
              >
                <FaFacebook className="h-5 w-5" />
              </a>
            </div>
            <p className="text-xs text-gray-500">Desarrollado por:</p>
            <div className="text-xs text-gray-400 space-y-1 mt-1">
              <a 
                href="https://geraldcalderon.site/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-500 transition-colors block"
              >
                Gerald Calderón
              </a>
              <a 
                href="https://www.linkedin.com/in/kevin-venegas-bermúdez-22b314239/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-500 transition-colors block"
              >
                Kevin Venegas
              </a>
              <a 
                href="https://www.linkedin.com/in/jamyr-gonzález-garcía-96ba18309/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-500 transition-colors block"
              >
                Jamyr González
              </a>
              <a 
                href="https://www.linkedin.com/in/jordi-francisco-rivas-beita/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-500 transition-colors block"
              >
                Jordi Rivas
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-8 pt-6 text-center text-xs text-gray-500">
          <p>© {currentYear} Force Gym. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;