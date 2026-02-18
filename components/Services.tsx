
import React from 'react';

const services = [
  {
    title: 'Wedding Photography',
    description: 'Capturing the essence of your big day with timeless cinematic shots.',
    image: 'service-wedding.jpg' // Local file placeholder
  },
  {
    title: 'Pre-Wedding Shoot',
    description: 'Romantic and creative outdoor sessions at scenic locations.',
    image: 'service-prewedding.jpg' // Local file placeholder
  },
  {
    title: 'Birthday & Events',
    description: 'Vibrant coverage of parties, anniversaries, and corporate events.',
    image: 'service-events.jpg' // Local file placeholder
  },
  {
    title: 'Portrait & Studio',
    description: 'Professional headshots and artistic studio portraits.',
    image: 'service-portrait.jpg' // Local file placeholder
  },
  {
    title: 'Photo Editing',
    description: 'High-end post-processing and custom album design services.',
    image: 'service-editing.jpg' // Local file placeholder
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-[#D4AF37] font-serif text-4xl md:text-5xl mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-xl mx-auto">We offer a wide range of professional photography services tailored to your specific needs.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative h-96 overflow-hidden rounded-lg bg-black border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all duration-500"
            >
              <img 
                src={service.image} 
                alt={service.title} 
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-700 bg-gray-900"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black via-black/60 to-transparent">
                <h3 className="text-2xl font-serif text-[#D4AF37] mb-3 transform transition-transform duration-500 group-hover:-translate-y-2">{service.title}</h3>
                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 leading-relaxed">
                  {service.description}
                </p>
                <div className="w-0 group-hover:w-full h-0.5 bg-[#D4AF37] mt-4 transition-all duration-700"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
