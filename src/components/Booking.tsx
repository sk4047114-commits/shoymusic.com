import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Ticket, Mail, Globe, CheckCircle2 } from 'lucide-react';
import { TOUR_DATES } from '../constants';

export default function Booking() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <section id="tour" className="py-24 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          
          {/* Tour Dates */}
          <div className="lg:col-span-7">
            <h2 className="text-4xl md:text-6xl font-serif italic font-bold mb-12">Tour</h2>
            <div className="space-y-2">
              {TOUR_DATES.map((tour, i) => (
                <motion.div
                  key={tour.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group flex flex-col md:flex-row md:items-center justify-between p-6 border-b border-white/5 hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-center gap-8 mb-4 md:mb-0">
                    <div className="text-center min-w-[60px]">
                      <span className="block text-brand font-mono text-xl font-bold">{tour.date.split(' ')[1]}</span>
                      <span className="block text-white/40 font-mono text-[10px]">{tour.date.split(' ')[0]}</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold group-hover:text-brand transition-colors">{tour.venue}</h4>
                      <div className="flex items-center gap-1 text-white/40 text-xs font-mono">
                        <MapPin size={12} />
                        {tour.location}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    {tour.status === 'sold-out' ? (
                      <span className="px-4 py-2 bg-white/5 text-white/20 text-xs font-mono rounded-sm cursor-not-allowed">
                        SOLD OUT
                      </span>
                    ) : tour.status === 'exclusive' ? (
                      <button className="px-4 py-2 border border-brand text-brand text-xs font-mono rounded-sm hover:bg-brand hover:text-black transition-all">
                        FAN ACCESS
                      </button>
                    ) : (
                      <button className="flex items-center gap-2 px-4 py-2 bg-white text-black text-xs font-bold rounded-sm hover:bg-brand transition-colors">
                        <Ticket size={14} />
                        TICKETS
                      </button>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Booking Integration */}
          <div id="booking" className="lg:col-span-5">
            <div className="p-10 glass rounded-3xl sticky top-32">
              <h3 className="text-3xl font-serif italic font-bold mb-6">Professional Booking</h3>
              <p className="text-white/60 text-sm mb-8 leading-relaxed">
                For worldwide bookings, festival inquiries, and corporate partnerships, please contact our official representation.
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/5 rounded-full text-brand"><Mail size={20} /></div>
                  <div>
                    <p className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Management</p>
                    <p className="text-sm font-bold">mgmt@shoy-music.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/5 rounded-full text-brand"><Globe size={20} /></div>
                  <div>
                    <p className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Press & Media</p>
                    <p className="text-sm font-bold">press@shoy-music.com</p>
                  </div>
                </div>
              </div>

              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form 
                    key="booking-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit} 
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-2 gap-4">
                      <input 
                        required
                        type="text" 
                        placeholder="NAME" 
                        className="w-full bg-white/5 border border-white/10 rounded-sm p-3 text-xs font-mono focus:border-brand outline-none transition-colors"
                      />
                      <input 
                        required
                        type="email" 
                        placeholder="EMAIL" 
                        className="w-full bg-white/5 border border-white/10 rounded-sm p-3 text-xs font-mono focus:border-brand outline-none transition-colors"
                      />
                    </div>
                    <select className="w-full bg-white/5 border border-white/10 rounded-sm p-3 text-xs font-mono focus:border-brand outline-none transition-colors appearance-none">
                      <option>INQUIRY TYPE</option>
                      <option>FESTIVAL BOOKING</option>
                      <option>CLUB PERFORMANCE</option>
                      <option>REMIX REQUEST</option>
                      <option>OTHER</option>
                    </select>
                    <textarea 
                      required
                      placeholder="MESSAGE" 
                      rows={4}
                      className="w-full bg-white/5 border border-white/10 rounded-sm p-3 text-xs font-mono focus:border-brand outline-none transition-colors resize-none"
                    ></textarea>
                    <button 
                      disabled={isSubmitting}
                      className="w-full py-4 bg-brand text-black font-bold text-xs tracking-[0.2em] rounded-sm hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'SENDING...' : 'SEND INQUIRY'}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success-message"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="inline-flex p-4 bg-brand/10 text-brand rounded-full mb-6">
                      <CheckCircle2 size={48} />
                    </div>
                    <h4 className="text-2xl font-bold mb-2">Inquiry Received</h4>
                    <p className="text-white/60 text-sm">Our management team will review your request and get back to you within 48 hours.</p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="mt-8 text-brand font-mono text-xs uppercase tracking-widest hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
