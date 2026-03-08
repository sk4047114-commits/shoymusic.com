import React from 'react';
import { Instagram, Facebook, Youtube, Music2, ArrowUp, Phone } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-24 px-6 border-t border-white/5 bg-bg">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold tracking-tighter font-mono text-brand mb-6">SHOY</h2>
            <p className="text-white/40 text-sm leading-relaxed mb-8">
              Defining the future of the dance floor through raw energy and unfiltered electronic soundscapes.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href={SOCIAL_LINKS.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 hover:text-brand transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.facebook.com/share/17vm5GUD7D/?mibextid=wwXIfr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 hover:text-brand transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.youtube.com/@shoebkhan7947" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 hover:text-brand transition-colors"
              >
                <Youtube size={20} />
              </a>
              <a 
                href="tel:2269665552" 
                className="p-2 hover:text-brand transition-colors"
              >
                <Phone size={20} />
              </a>
              <a 
                href={SOCIAL_LINKS.spotify} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 hover:text-brand transition-colors"
              >
                <Music2 size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-mono tracking-widest text-white/40 uppercase mb-6">Navigation</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#music" className="hover:text-brand transition-colors">Music Vault</a></li>
              <li><a href="#bio" className="hover:text-brand transition-colors">Artist Bio</a></li>
              <li><a href="#contact" className="hover:text-brand transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono tracking-widest text-white/40 uppercase mb-6">Legal</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-brand transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Shipping Info</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono tracking-widest text-white/40 uppercase mb-6">Newsletter</h4>
            <p className="text-white/40 text-sm mb-6">Join for early access to vinyl drops and secret show announcements.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="flex-1 bg-white/5 border border-white/10 rounded-sm p-3 text-[10px] font-mono focus:border-brand outline-none"
              />
              <button className="px-4 bg-white text-black font-bold text-[10px] rounded-sm hover:bg-brand transition-colors">
                JOIN
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-8">
          <p className="text-[10px] font-mono text-white/20 tracking-widest">
            © 2026 SHOY MUSIC GROUP. ALL RIGHTS RESERVED.
          </p>
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-[10px] font-mono text-white/40 hover:text-white transition-colors"
          >
            BACK TO TOP
            <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
