import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Star, ArrowRight } from 'lucide-react';
import { StepProps } from '../types';

const quotes = [
  "The wound is the place where the Light enters you.",
  "Respond to every call that excites your spirit.",
  "You are not a drop in the ocean. You are the entire ocean in a drop.",
  "Let the waters settle and you will see the moon and the stars mirrored in your own being."
];

const Step2Moonlit: React.FC<StepProps> = ({ onNext }) => {
  const [quoteIndex, setQuoteIndex] = useState(0);

  const nextQuote = () => {
    setQuoteIndex((prev) => (prev + 1) % quotes.length);
  };

  return (
    <motion.div 
      className="flex flex-col items-center justify-center h-full text-center px-6 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Moon Element */}
      <motion.div 
        className="relative cursor-pointer mb-10"
        whileHover={{ scale: 1.1 }}
        onClick={nextQuote}
      >
        <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-yellow-50 shadow-[0_0_60px_rgba(255,255,200,0.3)] flex items-center justify-center relative overflow-hidden">
             <div className="absolute w-full h-full bg-slate-200 opacity-20 rounded-full" style={{ left: '-15%', top: '-10%'}}></div>
             <div className="absolute w-10 h-10 bg-slate-300 opacity-30 rounded-full top-10 right-8"></div>
        </div>
        <motion.div 
          className="absolute -top-4 -right-4"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <Star className="w-8 h-8 text-yellow-200 fill-current" />
        </motion.div>
        <p className="mt-4 text-xs text-white/50 uppercase tracking-widest">Tap the moon</p>
      </motion.div>

      <div className="h-32 flex items-center justify-center max-w-2xl">
        <AnimatePresence mode='wait'>
          <motion.p
            key={quoteIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-xl md:text-3xl text-white font-serif italic leading-relaxed"
          >
            "{quotes[quoteIndex]}"
          </motion.p>
        </AnimatePresence>
      </div>

      <motion.div
        className="mt-16 w-full h-32 absolute bottom-0 bg-gradient-to-t from-blue-900/50 to-transparent"
      />
      
      {/* Reflection effect (simple CSS) */}
      <div className="absolute bottom-10 w-full flex justify-center opacity-30 blur-sm transform scale-y-[-1] pointer-events-none">
          <p className="text-xl md:text-3xl text-white font-serif italic leading-relaxed max-w-2xl px-6">
            "{quotes[quoteIndex]}"
          </p>
      </div>

      <motion.button
        onClick={onNext}
        className="absolute bottom-8 right-8 text-white/70 hover:text-white flex items-center gap-2 z-10"
        whileHover={{ x: 5 }}
      >
        Walk into nature <ArrowRight className="w-5 h-5" />
      </motion.button>
    </motion.div>
  );
};

export default Step2Moonlit;