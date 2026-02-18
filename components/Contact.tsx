
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    mail: '',
    dateTime: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct the WhatsApp message
    const phoneNumber = "917432084308";
    const text = `*New Booking Request from DAS STUDIO Website*%0A%0A` +
                 `*Name:* ${formData.name}%0A` +
                 `*Phone:* ${formData.number}%0A` +
                 `*Email:* ${formData.mail}%0A` +
                 `*Date & Time:* ${formData.dateTime}%0A` +
                 `*Requirements:* ${formData.message}`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-black relative">
      <div className="container mx-auto px-4">
        
        {/* Booking Form Section - Now Submitting via WhatsApp */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-[#D4AF37] font-serif text-4xl mb-4">Book Your Session</h2>
            <div className="w-20 h-0.5 bg-[#D4AF37] mx-auto opacity-50 mb-8"></div>
          </div>
          
          <form 
            onSubmit={handleSubmit}
            className="bg-[#0a0a0a] p-8 md:p-12 border border-gray-900 rounded-xl shadow-2xl"
          >
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-2">
                <label className="text-[#D4AF37] uppercase text-[10px] tracking-[0.2em] font-bold">Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Full Name" 
                  className="w-full bg-black border border-gray-800 focus:border-[#D4AF37] p-5 text-white outline-none transition-all rounded-md" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-[#D4AF37] uppercase text-[10px] tracking-[0.2em] font-bold">Number</label>
                <input 
                  type="tel" 
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                  required
                  placeholder="Phone Number" 
                  className="w-full bg-black border border-gray-800 focus:border-[#D4AF37] p-5 text-white outline-none transition-all rounded-md" 
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-2">
                <label className="text-[#D4AF37] uppercase text-[10px] tracking-[0.2em] font-bold">Mail</label>
                <input 
                  type="email" 
                  name="mail"
                  value={formData.mail}
                  onChange={handleChange}
                  required
                  placeholder="Email Address" 
                  className="w-full bg-black border border-gray-800 focus:border-[#D4AF37] p-5 text-white outline-none transition-all rounded-md" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-[#D4AF37] uppercase text-[10px] tracking-[0.2em] font-bold">Date and Time</label>
                <input 
                  type="datetime-local" 
                  name="dateTime"
                  value={formData.dateTime}
                  onChange={handleChange}
                  required
                  className="w-full bg-black border border-gray-800 focus:border-[#D4AF37] p-5 text-white outline-none transition-all rounded-md [color-scheme:dark]" 
                />
              </div>
            </div>

            <div className="space-y-2 mb-8">
              <label className="text-[#D4AF37] uppercase text-[10px] tracking-[0.2em] font-bold">Message / Requirements</label>
              <textarea 
                rows={4} 
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell us about your requirements..." 
                className="w-full bg-black border border-gray-800 focus:border-[#D4AF37] p-5 text-white outline-none transition-all resize-none rounded-md"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full bg-[#D4AF37] text-black py-5 font-bold uppercase tracking-[0.3em] hover:bg-white transition-all transform hover:translate-y-[-2px] shadow-lg rounded-md flex items-center justify-center gap-3"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.483 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.308 1.656zm6.757-4.242c1.472.873 3.12 1.336 4.795 1.338 5.439 0 9.865-4.425 9.868-9.87 0-2.637-1.027-5.115-2.891-6.982-1.864-1.868-4.341-2.894-6.977-2.894-5.439 0-9.865 4.425-9.868 9.87-.001 1.748.459 3.456 1.331 4.973l-1.028 3.756 3.868-1.015zm10.963-7.58c-.347-.174-2.054-1.014-2.371-1.129-.317-.116-.549-.174-.78.174-.231.348-.894 1.129-1.096 1.36-.202.231-.404.261-.751.087-.348-.174-1.468-.541-2.797-1.728-1.034-.922-1.731-2.06-1.933-2.408-.202-.347-.021-.535.152-.708.156-.155.348-.405.521-.608.174-.202.231-.347.348-.579.116-.231.058-.435-.029-.608-.087-.174-.78-1.884-1.069-2.58-.282-.677-.568-.584-.78-.595l-.666-.01c-.231 0-.608.087-.925.435-.317.347-1.215 1.188-1.215 2.898 0 1.71 1.244 3.361 1.417 3.593.174.231 2.45 3.741 5.935 5.247.828.358 1.474.571 1.978.731.833.264 1.591.227 2.19.137.669-.101 2.054-.84 2.343-1.652.289-.811.289-1.507.202-1.652-.087-.145-.317-.231-.664-.405z"/>
              </svg>
              Submit via WhatsApp
            </button>
          </form>
        </div>

        {/* Visit Us Section */}
        <div id="visit-us-section" className="text-center animate-fade-in pt-16 max-w-7xl mx-auto">
          <h3 className="text-[#D4AF37] uppercase tracking-[0.5em] text-xs mb-4 font-bold">Get in Touch</h3>
          <h2 className="text-white font-serif text-5xl md:text-7xl mb-20">Visit Our Studio</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Location */}
            <div className="bg-[#0c0c0c] border border-gray-900 rounded-xl p-12 flex flex-col items-center justify-center transition-all duration-300 hover:border-[#D4AF37]/40 shadow-2xl">
              <div className="w-16 h-16 rounded-full bg-[#0a0a0a] border border-[#D4AF37]/30 flex items-center justify-center mb-8">
                <svg className="w-8 h-8 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="text-white font-serif text-2xl mb-4">Our Location</h4>
              <p className="text-gray-500 text-sm leading-relaxed text-center">
                Moyrakata, Garhbeta,<br />
                Paschim Medinipur, 721127
              </p>
            </div>

            {/* Card 2: Contact Info */}
            <div className="bg-[#0c0c0c] border border-gray-900 rounded-xl p-12 flex flex-col items-center justify-center transition-all duration-300 hover:border-[#D4AF37]/40 shadow-2xl">
              <div className="w-16 h-16 rounded-full bg-[#0a0a0a] border border-[#D4AF37]/30 flex items-center justify-center mb-8">
                <svg className="w-8 h-8 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h4 className="text-white font-serif text-2xl mb-4">Contact Info</h4>
              <div className="text-center">
                <p className="text-gray-600 text-[10px] uppercase mb-1">Phone:</p>
                <p className="text-gray-400 text-base mb-4">+91 7432084308</p>
                <p className="text-gray-600 text-[10px] uppercase mb-1">Email:</p>
                <p className="text-gray-400 text-base">themanishde@gmail.com</p>
              </div>
            </div>

            {/* Card 3: Opening Hours */}
            <div className="bg-[#0c0c0c] border border-gray-900 rounded-xl p-12 flex flex-col items-center justify-center transition-all duration-300 hover:border-[#D4AF37]/40 shadow-2xl">
              <div className="w-16 h-16 rounded-full bg-[#0a0a0a] border border-[#D4AF37]/30 flex items-center justify-center mb-8">
                <svg className="w-8 h-8 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-white font-serif text-2xl mb-4">Opening Hours</h4>
              <div className="text-center">
                <p className="text-gray-400 text-base mb-2">Mon - Sat: 9:00 AM - 8:00 PM</p>
                <p className="text-gray-400 text-base">Sunday: 10:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/917432084308" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[70] w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl transition-transform hover:scale-110 active:scale-95"
        title="Chat on WhatsApp"
      >
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.483 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.308 1.656zm6.757-4.242c1.472.873 3.12 1.336 4.795 1.338 5.439 0 9.865-4.425 9.868-9.87 0-2.637-1.027-5.115-2.891-6.982-1.864-1.868-4.341-2.894-6.977-2.894-5.439 0-9.865 4.425-9.868 9.87-.001 1.748.459 3.456 1.331 4.973l-1.028 3.756 3.868-1.015zm10.963-7.58c-.347-.174-2.054-1.014-2.371-1.129-.317-.116-.549-.174-.78.174-.231.348-.894 1.129-1.096 1.36-.202.231-.404.261-.751.087-.348-.174-1.468-.541-2.797-1.728-1.034-.922-1.731-2.06-1.933-2.408-.202-.347-.021-.535.152-.708.156-.155.348-.405.521-.608.174-.202.231-.347.348-.579.116-.231.058-.435-.029-.608-.087-.174-.78-1.884-1.069-2.58-.282-.677-.568-.584-.78-.595l-.666-.01c-.231 0-.608.087-.925.435-.317.347-1.215 1.188-1.215 2.898 0 1.71 1.244 3.361 1.417 3.593.174.231 2.45 3.741 5.935 5.247.828.358 1.474.571 1.978.731.833.264 1.591.227 2.19.137.669-.101 2.054-.84 2.343-1.652.289-.811.289-1.507.202-1.652-.087-.145-.317-.231-.664-.405z"/>
        </svg>
      </a>
    </section>
  );
};

export default Contact;
