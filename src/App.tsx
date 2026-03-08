import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ExclusiveContent from './components/ExclusiveContent';
import Bio from './components/Bio';
import BookingEPK from './components/BookingEPK';
import Contact from './components/Contact';
import Footer from './components/Footer';
import RevolverLogo from './components/RevolverLogo';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-bg selection:bg-brand selection:text-black">
      <AnimatePresence>
        {isLoading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-bg flex items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                className="mb-8 flex justify-center text-zinc-500"
              >
                <RevolverLogo className="w-16 h-16" />
              </motion.div>
              <div className="w-48 h-[1px] bg-white/10 mx-auto overflow-hidden">
                <motion.div
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                  className="w-full h-full bg-brand"
                />
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Navigation />
          <main>
            <Hero />
            <ExclusiveContent />
            <BookingEPK />
            <Bio />
            <Contact />
          </main>
          <Footer />
        </motion.div>
      )}
    </div>
  );
}
