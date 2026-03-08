import React from 'react';
import { motion } from 'motion/react';

export default function Bio() {
  return (
    <section id="bio" className="py-24 px-6 bg-bg">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/5] overflow-hidden rounded-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=1000"
              alt="SHOY Artist Profile"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/80 to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand font-mono text-xs tracking-[0.5em] uppercase mb-4 block">The Artist</span>
            <h2 className="text-5xl md:text-7xl font-serif italic font-bold mb-8">SHOY<span className="text-brand">.</span></h2>
            
            <div className="space-y-6 text-white/60 leading-relaxed text-lg">
              <p>
                Emerging from the underground electronic scene, SHOY has quickly established a reputation for high-octane performances and a signature sound that blends raw energy with technical precision.
              </p>
              <p>
                With a focus on pushing the boundaries of the dance floor, SHOY's sets are an immersive journey through sonic velocity and unfiltered electronic soundscapes. Every performance is a testament to the power of sound to connect and transform.
              </p>
              <p>
                Based in the heart of the global club circuit, SHOY continues to evolve, bringing a fresh perspective to the electronic music landscape and defining the future of the dance floor one beat at a time.
              </p>
            </div>

            <div className="mt-12 flex gap-8">
              <div>
                <p className="text-brand font-mono text-2xl font-bold">150+</p>
                <p className="text-white/40 text-[10px] font-mono uppercase tracking-widest">Performances</p>
              </div>
              <div>
                <p className="text-brand font-mono text-2xl font-bold">12</p>
                <p className="text-white/40 text-[10px] font-mono uppercase tracking-widest">Original Tracks</p>
              </div>
              <div>
                <p className="text-brand font-mono text-2xl font-bold">5M+</p>
                <p className="text-white/40 text-[10px] font-mono uppercase tracking-widest">Global Streams</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
