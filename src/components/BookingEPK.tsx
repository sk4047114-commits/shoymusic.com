import React from 'react';
import { motion } from 'motion/react';
import { Download, Play, Send, FileText, Music } from 'lucide-react';

export default function BookingEPK() {
  const [formStatus, setFormStatus] = React.useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    // Simulate API call
    setTimeout(() => setFormStatus('sent'), 1500);
  };

  return (
    <section id="booking" className="py-24 bg-bg border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column: Press Kit & Demo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div>
              <span className="text-brand font-mono text-xs tracking-[0.5em] uppercase mb-4 block">
                Industry Resources
              </span>
              <h2 className="text-5xl md:text-7xl font-serif italic font-bold tracking-tighter mb-8">
                Press Kit<span className="text-brand">.</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed max-w-md mb-8">
                Everything you need for promotion, including high-res photos, technical rider, and bio.
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-brand transition-all duration-300"
              >
                <Download size={20} />
                DOWNLOAD FULL EPK (PDF)
              </motion.button>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-3 text-white/40 font-mono text-xs tracking-widest uppercase">
                <Music size={14} />
                Latest Demo Mix
              </div>
              {/* SoundCloud Embed Placeholder */}
              <div className="w-full aspect-[16/9] bg-surface rounded-2xl overflow-hidden border border-white/5 relative group">
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-colors">
                  <Play size={48} className="text-brand fill-current" />
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=1000" 
                  alt="Mix Cover"
                  className="w-full h-full object-cover opacity-50"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent">
                  <p className="text-white font-bold">Global Rhythmic Fusion Vol. 4</p>
                  <p className="text-white/40 text-xs font-mono">32:45 • 128 BPM</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-surface p-8 md:p-12 rounded-3xl border border-white/5"
          >
            <div className="mb-10">
              <h3 className="text-3xl font-serif italic font-bold mb-2">Secure a Date</h3>
              <p className="text-white/40 text-sm font-mono uppercase tracking-widest">Booking Inquiries</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest ml-1">Name</label>
                  <input 
                    required
                    type="text" 
                    className="w-full bg-bg border border-white/10 rounded-xl px-4 py-3 text-white focus:border-brand outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest ml-1">Email</label>
                  <input 
                    required
                    type="email" 
                    className="w-full bg-bg border border-white/10 rounded-xl px-4 py-3 text-white focus:border-brand outline-none transition-colors"
                    placeholder="john@venue.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest ml-1">Event Type / Venue</label>
                <input 
                  required
                  type="text" 
                  className="w-full bg-bg border border-white/10 rounded-xl px-4 py-3 text-white focus:border-brand outline-none transition-colors"
                  placeholder="Amigos Cantina - Club Night"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest ml-1">Message</label>
                <textarea 
                  required
                  rows={4}
                  className="w-full bg-bg border border-white/10 rounded-xl px-4 py-3 text-white focus:border-brand outline-none transition-colors resize-none"
                  placeholder="Tell me about your event..."
                />
              </div>

              <motion.button
                disabled={formStatus !== 'idle'}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 ${
                  formStatus === 'sent' 
                    ? 'bg-emerald-500 text-white' 
                    : 'bg-brand text-black hover:shadow-[0_0_20px_rgba(242,125,38,0.3)]'
                }`}
              >
                {formStatus === 'idle' && (
                  <>
                    <Send size={18} />
                    SEND INQUIRY
                  </>
                )}
                {formStatus === 'sending' && (
                  <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                )}
                {formStatus === 'sent' && (
                  <>
                    <FileText size={18} />
                    MESSAGE SENT
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
