import React from 'react';
import { motion } from 'motion/react';
import { Play, ArrowRight } from 'lucide-react';
import RevolverLogo from './RevolverLogo';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image/Video Placeholder */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1571266028243-3716f02d2d2e?auto=format&fit=crop&q=80&w=2000"
          alt="DJ Performance"
          className="w-full h-full object-cover opacity-40 grayscale"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <span className="text-brand font-mono text-xs tracking-[0.5em] uppercase mb-4 block">
            Unfiltered Bass & Global Rhythmic Fusion
          </span>
          <h1 className="flex items-center justify-center gap-4 text-7xl md:text-9xl font-serif italic font-bold tracking-tighter leading-none mb-8">
            <RevolverLogo className="w-16 h-16 md:w-24 md:h-24 text-zinc-500" />
            <span>SHOY<span className="text-brand">.</span></span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-lg md:text-xl text-white/60 font-light max-w-2xl mx-auto mb-12"
        >
          Breaking boundaries with every bassline.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <button className="group flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-brand transition-all duration-300">
            LATEST RELEASE
            <Play size={18} className="fill-current" />
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/20"
      >
        <div className="w-[1px] h-12 bg-white/20 mx-auto" />
      </motion.div>
    </section>
  );
}
