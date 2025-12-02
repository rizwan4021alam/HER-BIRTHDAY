import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Play, Pause, ArrowRight } from 'lucide-react';
import { StepProps } from '../types';

const Step4Wisdom: React.FC<StepProps> = ({ onNext }) => {
  const [meditating, setMeditating] = useState(false);
  const [timer, setTimer] = useState(60); // 1 minute
  
  useEffect(() => {
    let interval: any;
    if (meditating && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      setMeditating(false);
    }
    return () => clearInterval(interval);
  }, [meditating, timer]);

  const toggleMeditation = () => {
    if (timer === 0) setTimer(60);
    setMeditating(!meditating);
  };

  return (
    <motion.div 
      className="flex flex-col items-center justify-center h-full text-center px-6 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        animate={{ 
          y: [0, -10, 0],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-1/4 left-1/4"
      >
        <Sparkles className="w-6 h-6 text-amber-200" />
      </motion.div>

      <motion.div
        className="max-w-2xl bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-2xl mb-12"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-amber-100 font-serif text-2xl mb-6">Wisdom of the Heart</h3>
        <p className="text-xl md:text-3xl text-white font-light italic leading-relaxed mb-6">
          "Let yourself be silently drawn by the strange pull of what you really love."
        </p>
        <p className="text-white/60 text-sm tracking-widest uppercase">— Rumi</p>
      </motion.div>

      <div className="flex flex-col items-center">
        <p className="text-white/80 mb-4 font-light">
          Take a moment of silence. Breathe.
        </p>
        
        <div className="relative flex items-center justify-center w-24 h-24">
          <svg className="w-full h-full transform -rotate-90">
             <circle
                cx="48"
                cy="48"
                r="40"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="4"
                fill="transparent"
             />
             <motion.circle
                cx="48"
                cy="48"
                r="40"
                stroke="#fbbf24"
                strokeWidth="4"
                fill="transparent"
                strokeDasharray="251.2"
                strokeDashoffset={251.2 - (251.2 * (60 - timer)) / 60}
                initial={{ strokeDashoffset: 251.2 }}
                animate={{ strokeDashoffset: 251.2 - (251.2 * (60 - timer)) / 60 }}
             />
          </svg>
          <button 
            onClick={toggleMeditation}
            className="absolute text-white hover:text-amber-200 transition-colors"
          >
            {meditating ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 ml-1" />}
          </button>
        </div>
        
        <p className="mt-2 text-amber-100/70 font-mono text-sm">
           {timer === 60 ? "1:00" : `0:${timer.toString().padStart(2, '0')}`}
        </p>
      </div>

      <motion.button
        onClick={onNext}
        className="absolute bottom-8 right-8 text-white/50 hover:text-white transition-colors flex items-center gap-2"
      >
        Celebrate <ArrowRight className="w-5 h-5" />
      </motion.button>
    </motion.div>
  );
};

export default Step4Wisdom;