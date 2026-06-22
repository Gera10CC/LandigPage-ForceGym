import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaFacebookF, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contacto" className="py-16 md:py-20 bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            <span className="text-yellow-500">CONTÁCTANOS</span>
          </h2>
          <div className="w-16 h-0.5 bg-yellow-500 mx-auto"></div>
        </div>

        {/* Contenido */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Información de contacto */}
          <div className="space-y-6">
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              ¿Tienes alguna duda? Escríbenos o visítanos. Estamos aquí para ayudarte.
            </p>

            <div className="space-y-5">
              {/* Email */}
              <div className="flex items-center gap-4 group">
                <div className="text-yellow-500 group-hover:scale-110 transition-transform">
                  <FaEnvelope className="text-lg" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Correo</p>
                  <a 
                    href="mailto:forcegymfullfitness@gmail.com" 
                    className="text-white hover:text-yellow-500 transition-colors text-sm"
                  >
                    forcegymfullfitness@gmail.com
                  </a>
                </div>
              </div>

              {/* Dirección */}
              <div className="flex items-center gap-4 group">
                <div className="text-yellow-500 group-hover:scale-110 transition-transform">
                  <FaMapMarkerAlt className="text-lg" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Dirección</p>
                  <a
                    href="https://www.google.com/maps/place/83CP%2B452,+Heredia,+La+Victoria/@10.3202,-83.9144,17z/data=!4m5!3m4!1s0x8fa0bd9a713f6e0d:0xa206b90f4a24b947!8m2!3d10.3202625!4d-83.9146094?hl=es&entry=ttu&g_ep=EgoyMDI1MDQyMy4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-yellow-500 transition-colors text-sm"
                  >
                    Heredia, La Victoria
                  </a>
                </div>
              </div>

              {/* Teléfono */}
              <div className="flex items-center gap-4 group">
                <div className="text-yellow-500 group-hover:scale-110 transition-transform">
                  <FaPhoneAlt className="text-lg" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Teléfono</p>
                  <a
                    href="tel:+50688437359"
                    className="text-white hover:text-yellow-500 transition-colors text-sm"
                  >
                    +506 8843 7359
                  </a>
                </div>
              </div>

              {/* Redes sociales */}
              <div className="pt-4">
                <p className="text-sm text-gray-400 mb-3">Síguenos</p>
                <div className="flex gap-3">
                  <a
                    href="https://www.facebook.com/profile.php?id=100083292401041"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 text-white p-2.5 rounded-full hover:bg-yellow-500 hover:text-black transition-all duration-300"
                    aria-label="Facebook"
                  >
                    <FaFacebookF className="text-sm" />
                  </a>
                  <a
                    href="https://www.instagram.com/forcegym_fullfitness?igsh=aWR3bTVxbXhvOGln"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 text-white p-2.5 rounded-full hover:bg-yellow-500 hover:text-black transition-all duration-300"
                    aria-label="Instagram"
                  >
                    <FaInstagram className="text-sm" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Mapa */}
          <div className="w-full">
            <div className="rounded-lg overflow-hidden border border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.4323445760934!2d-83.9146094!3d10.3202625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0bd9a713f6e0d%3A0xa206b90f4a24b947!2s83CP%2B452%2C%20Heredia%2C%20La%20Victoria!5e0!3m2!1ses!2scr!4v1682588905686!5m2!1ses!2scr"
                width="100%"
                height="350"
                className="border-0"
                allowFullScreen
                loading="lazy"
                aria-label="Mapa de ubicación de Force Gym"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;