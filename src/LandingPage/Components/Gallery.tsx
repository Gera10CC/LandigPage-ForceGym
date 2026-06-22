import { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

type SliderType = {
  slickGoTo: (slide: number) => void;
};

const Gallery = () => {
  const sliderRef = useRef<SliderType | null>(null);
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  // Base URL de tu Cloudinary
  const CLOUDINARY_BASE = 'https://res.cloudinary.com/dmrcx0h4a/image/upload';

  const galleryPhotos = [
    { img: `${CLOUDINARY_BASE}/v1781989107/grupo-5_dksea4.webp` },
    { img: `${CLOUDINARY_BASE}/v1781989107/grupo-3_o1zbjl.webp` },
    { img: `${CLOUDINARY_BASE}/v1781989107/grupo-4_yr8q5r.webp` },
    { img: `${CLOUDINARY_BASE}/v1781989104/grupo-1_e3dx8h.webp` },
    { img: `${CLOUDINARY_BASE}/v1781989101/grupo-2_cjximf.webp` },
    { img: `${CLOUDINARY_BASE}/v1781989099/grupo-7_syhmgh.webp` },
    { img: `${CLOUDINARY_BASE}/v1781989099/grupo-6_lkmdjp.webp` },
    { img: `${CLOUDINARY_BASE}/v1781989099/grupo-9_x06vxf.webp` },
    { img: `${CLOUDINARY_BASE}/v1781989098/grupo-8_cbfho8.webp` },
    { img: `${CLOUDINARY_BASE}/v1781989097/grupo-10_e2yumz.webp` },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    adaptiveHeight: false,
    beforeChange: (_current: number, next: number) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: false
        }
      }
    ]
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentSlide(index);
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };

  return (
    <section id='galeria' className="py-20 md:py-15 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            <span className="text-yellow-500">NUESTRA</span> COMUNIDAD
          </h2>
          <div className="w-16 h-0.5 bg-yellow-500 mx-auto"></div>
        </div>

        {/* Carrusel principal */}
        <div className="mx-auto max-w-4xl">
          <Slider 
            {...settings} 
            ref={(slider) => {
              if (slider) {
                sliderRef.current = {
                  slickGoTo: slider.slickGoTo,
                };
              }
            }}
          >
            {galleryPhotos.map((photo, index) => (
              <div key={index} className="px-1 focus:outline-none">
                <div className="relative">
                  <img 
                    src={photo.img} 
                    alt={`Grupo Force Gym ${index + 1}`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto max-h-[70vh] object-contain mx-auto rounded-lg"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Miniaturas */}
        <div className="hidden md:grid grid-cols-5 gap-2 mt-4">
          {galleryPhotos.map((photo, index) => (
            <div 
              key={index} 
              className={`rounded overflow-hidden border-2 transition-all ${currentSlide === index ? 'border-yellow-500' : 'border-transparent hover:border-yellow-400'}`}
              onClick={() => handleThumbnailClick(index)}
            >
              <img 
                src={photo.img} 
                alt={`Miniatura ${index + 1}`}
                loading="lazy"
                decoding="async"
                className="w-full h-24 object-cover cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;