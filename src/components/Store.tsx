import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart, ArrowRight, Check } from 'lucide-react';
import { PRODUCTS } from '../constants';

export default function Store() {
  const [cartCount, setCartCount] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const [lastAdded, setLastAdded] = useState('');

  const addToCart = (productName: string) => {
    setCartCount(prev => prev + 1);
    setLastAdded(productName);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <section id="store" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl md:text-6xl font-serif italic font-bold mb-4">Atelier</h2>
            <p className="text-white/50 font-mono text-sm tracking-widest uppercase">Official Merchandise & Vinyl</p>
          </div>
          <div className="flex items-center gap-8">
            <div className="hidden md:flex items-center gap-2 text-brand font-mono text-xs tracking-widest group cursor-pointer">
              VIEW ALL PRODUCTS
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </div>
            <div className="relative p-2 text-white/80">
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-brand text-black text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-surface rounded-sm mb-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-black/80 backdrop-blur-md text-[10px] font-mono tracking-widest border border-white/10">
                    {product.category.toUpperCase()}
                  </span>
                </div>
                <button 
                  onClick={() => addToCart(product.name)}
                  className="absolute bottom-0 left-0 w-full py-4 bg-brand text-black font-bold text-sm translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center gap-2"
                >
                  <ShoppingCart size={18} />
                  ADD TO CART
                </button>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-bold tracking-tight mb-1">{product.name}</h3>
                  <p className="text-white/40 text-xs font-mono">${product.price}.00 USD</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Mobile View All */}
        <div className="mt-12 md:hidden">
          <button className="w-full py-4 border border-white/10 text-xs font-mono tracking-widest">
            VIEW ALL PRODUCTS
          </button>
        </div>
      </div>

      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 20, x: '-50%' }}
            className="fixed bottom-8 left-1/2 z-50 bg-white text-black px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 min-w-[300px]"
          >
            <div className="bg-green-500 text-white p-1 rounded-full">
              <Check size={16} />
            </div>
            <div className="flex-1">
              <p className="text-xs font-bold leading-none mb-1">ADDED TO CART</p>
              <p className="text-[10px] opacity-60 uppercase tracking-wider">{lastAdded}</p>
            </div>
            <button className="text-[10px] font-bold text-brand uppercase tracking-widest hover:underline">
              CHECKOUT
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
