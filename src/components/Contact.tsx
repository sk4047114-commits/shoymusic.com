import React from 'react';
import { motion } from 'motion/react';
import { Mail, Instagram, Facebook, Youtube, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-surface">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-serif italic font-bold mb-6 text-white">Get In Touch</h2>
          <p className="text-white/60 mb-12 text-lg">
            For bookings, collaborations, or just to say hello, feel free to reach out.
          </p>

          <div className="flex flex-col items-center gap-8">
            <a 
              href="mailto:mgmt@shoy-music.com" 
              className="group flex items-center gap-4 text-2xl md:text-4xl font-mono font-bold hover:text-brand transition-colors"
            >
              <Mail className="w-8 h-8 md:w-12 md:h-12" />
              mgmt@shoy-music.com
            </a>

            <div className="flex flex-wrap justify-center gap-6 mt-8">
              <a 
                href="https://www.instagram.com/Shoy_khan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 bg-white/5 rounded-full hover:bg-brand hover:text-black transition-all"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="https://www.facebook.com/share/17vm5GUD7D/?mibextid=wwXIfr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 bg-white/5 rounded-full hover:bg-brand hover:text-black transition-all"
              >
                <Facebook size={24} />
              </a>
              <a 
                href="https://www.youtube.com/@shoebkhan7947" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 bg-white/5 rounded-full hover:bg-brand hover:text-black transition-all"
              >
                <Youtube size={24} />
              </a>
              <a 
                href="tel:2269665552" 
                className="p-4 bg-white/5 rounded-full hover:bg-brand hover:text-black transition-all"
              >
                <Phone size={24} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
