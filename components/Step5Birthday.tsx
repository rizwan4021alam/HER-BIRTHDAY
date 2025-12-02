import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { ArrowRight, Heart } from 'lucide-react';
import { StepProps } from '../types';

const Step5Birthday: React.FC<StepProps> = ({ onNext }) => {
  useEffect(() => {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      className="flex flex-col items-center justify-center h-full text-center px-4 relative z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", damping: 12 }}
        className="mb-8 p-4 bg-gradient-to-br from-yellow-200 to-amber-500 rounded-full shadow-[0_0_50px_rgba(251,191,36,0.5)]"
      >
        <Heart className="w-16 h-16 text-white fill-current" />
      </motion.div>

      <motion.h1 
        className="text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-amber-100 to-yellow-200 font-serif mb-8 drop-shadow-sm cinzel font-bold"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Happy Birthday!
      </motion.h1>

      <motion.div 
        className="max-w-xl bg-black/40 backdrop-blur-md p-8 rounded-xl border border-white/20 shadow-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <p className="text-lg md:text-xl text-white/95 leading-relaxed font-light mb-6">
          "To the girl with the most radiant soul! May Allah bless your path, illuminate your heart, 
          and make your life as beautiful as the moonlit sky. May every dream, every hope, 
          and every wish find its way to you."
        </p>
        <p className="text-amber-200 font-serif italic">
          Your presence makes the world more gentle, peaceful, and magical.
        </p>
      </motion.div>

      <motion.button
        onClick={onNext}
        className="mt-12 bg-white text-black px-8 py-3 rounded-full font-serif text-lg hover:bg-yellow-50 transition-colors shadow-lg flex items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
      >
        Make a Wish for the Year <ArrowRight className="w-4 h-4" />
      </motion.button>
    </motion.div>
  );
};

export default Step5Birthday;