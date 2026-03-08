import React from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, Music, Calendar, User, Menu, X } from 'lucide-react';
import RevolverLogo from './RevolverLogo';

export default function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    { name: 'MUSIC', href: '#music', icon: Music },
    { name: 'BOOKING', href: '#booking', icon: Music },
    { name: 'BIO', href: '#bio', icon: User },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center space-x-2 text-2xl font-bold tracking-tighter font-mono text-brand"
        >
          <RevolverLogo className="w-6 h-6 text-zinc-500" />
          <span>SHOY</span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, i) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-xs font-mono tracking-widest hover:text-brand transition-colors duration-300"
            >
              {item.name}
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-brand text-black text-xs font-bold font-mono rounded-sm"
          >
            CONTACT
          </motion.a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Horizontal Line */}
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="max-w-7xl mx-auto h-[1px] bg-brand/20 mt-4 origin-left"
      />

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-bg border-b border-border p-6 md:hidden"
        >
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-mono tracking-widest hover:text-brand"
              >
                {item.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
