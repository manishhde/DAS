
import React from 'react';

const Hero: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=2070)' }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in">
        <h2 className="text-[#D4AF37] uppercase tracking-[0.3em] text-sm md:text-base mb-4 font-semibold">
          Garhbeta's Premier Photography
        </h2>
        <h1 className="text-4xl md:text-7xl font-serif font-bold mb-6 text-white leading-tight">
          Capturing Your <br /> <span className="text-[#D4AF37]">Precious Moments</span>
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg md:text-xl mb-10 font-light">
          Wedding, Pre-Wedding, Portrait & Event Photography. 
          Crafting visual stories that last a lifetime.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <a 
            href="#contact" 
            onClick={(e) => scrollToSection(e, 'contact')}
            className="px-8 py-4 bg-[#D4AF37] text-black font-bold uppercase tracking-widest hover:bg-white transition-all duration-300 transform hover:scale-105"
          >
            Book Now
          </a>
          <a 
            href="#gallery" 
            onClick={(e) => scrollToSection(e, 'gallery')}
            className="px-8 py-4 border-2 border-[#D4AF37] text-[#D4AF37] font-bold uppercase tracking-widest hover:bg-[#D4AF37] hover:text-black transition-all duration-300"
          >
            View Gallery
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer" onClick={(e: any) => scrollToSection(e, 'services')}>
        <svg className="w-6 h-6 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
