
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#0f0f0f]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 relative">
            <div className="absolute -top-4 -left-4 w-full h-full border-4 border-[#D4AF37] -z-10"></div>
            <img 
              src="about-studio.jpg" // Local file placeholder
              alt="Photographer at work" 
              className="w-full shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 bg-gray-900 min-h-[400px] object-cover"
            />
          </div>
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-[#D4AF37] font-serif text-4xl md:text-5xl mb-4 text-left">The Studio</h2>
            <h3 className="text-2xl font-serif text-white italic">"Freezing time, one frame at a time."</h3>
            <p className="text-gray-400 leading-relaxed text-lg">
              Based in the historic town of <span className="text-[#D4AF37] font-bold">Garhbeta, Paschim Medinipur</span>, DAS STUDIO has been a trusted name in high-end photography for over a decade. We specialize in blending modern aesthetics with traditional emotions.
            </p>
            <p className="text-gray-400 leading-relaxed text-lg">
              Our team of passionate artists believes that every moment is unique. Whether it's the subtle smile of a bride, the laughter at a birthday party, or a professional studio portrait, we ensure your memories are preserved with the highest quality and artistic touch.
            </p>
            <div className="grid grid-cols-2 gap-4 py-6">
              <div className="border-l-4 border-[#D4AF37] pl-4">
                <h4 className="text-3xl font-bold text-white">10+</h4>
                <p className="text-gray-500 uppercase text-xs tracking-widest">Years Experience</p>
              </div>
              <div className="border-l-4 border-[#D4AF37] pl-4">
                <h4 className="text-3xl font-bold text-white">500+</h4>
                <p className="text-gray-500 uppercase text-xs tracking-widest">Events Covered</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
