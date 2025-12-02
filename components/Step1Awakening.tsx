import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, ArrowRight } from 'lucide-react';
import { StepProps } from '../types';

const Step1Awakening: React.FC<StepProps> = ({ onNext }) => {
  return (
    <motion.div 
      className="flex flex-col items-center justify-center h-full text-center px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.5 }}
        className="mb-8"
      >
        <Sun className="w-24 h-24 text-yellow-100 drop-shadow-lg opacity-90" />
      </motion.div>

      <motion.h1 
        className="text-3xl md:text-5xl text-white font-serif mb-6 drop-shadow-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        Every sunrise is a poem for your spirit...
      </motion.h1>

      <motion.p 
        className="text-lg md:text-xl text-white/90 max-w-lg font-light mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        A reminder of the beauty you carry within. Pause, breathe, and begin your journey.
      </motion.p>

      <motion.button
        onClick={onNext}
        className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-8 py-3 rounded-full flex items-center gap-2 transition-all border border-white/40"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ delay: 3.5 }}
      >
        Begin Journey <ArrowRight className="w-4 h-4" />
      </motion.button>
    </motion.div>
  );
};

export default Step1Awakening;