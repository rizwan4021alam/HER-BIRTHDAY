import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Flower, Wind, ArrowRight } from 'lucide-react';
import { StepProps } from '../types';

const affirmations = [
  "Peace is within you, always.",
  "Your heart’s light is eternal.",
  "Every moment is a blessing.",
  "You bloom in your own time.",
  "Kindness is your strength."
];

const Step3Nature: React.FC<StepProps> = ({ onNext }) => {
  const [visibleAffirmations, setVisibleAffirmations] = useState<number[]>([]);

  const toggleAffirmation = (index: number) => {
    if (!visibleAffirmations.includes(index)) {
      setVisibleAffirmations([...visibleAffirmations, index]);
    }
  };

  return (
    <motion.div 
      className="flex flex-col items-center justify-center h-full text-center px-4 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {/* Falling Petals Animation */}
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-pink-200/60"
            initial={{ y: -50, x: Math.random() * window.innerWidth }}
            animate={{ 
              y: window.innerHeight + 50, 
              x: Math.random() * window.innerWidth,
              rotate: 360
            }}
            transition={{ 
              duration: Math.random() * 5 + 5, 
              repeat: Infinity, 
              ease: "linear",
              delay: Math.random() * 5
            }}
          >
            <div className="w-3 h-3 bg-pink-300 rounded-full rounded-tr-none shadow-sm" />
          </motion.div>
        ))}
      </motion.div>

      <h2 className="text-3xl md:text-4xl text-emerald-900 font-serif mb-8 z-10 drop-shadow-sm">
        Nature's Embrace
      </h2>
      <p className="text-emerald-800 mb-12 max-w-md z-10">
        Tap the flowers to reveal the whispers of the river.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 z-10 max-w-4xl">
        {affirmations.map((text, index) => (
          <div key={index} className="flex flex-col items-center h-24 justify-end">
            <motion.button
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => toggleAffirmation(index)}
              className={`${visibleAffirmations.includes(index) ? 'text-pink-500' : 'text-emerald-600'} transition-colors duration-500`}
            >
              <Flower className="w-10 h-10 md:w-14 md:h-14" strokeWidth={1.5} />
            </motion.button>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ 
                opacity: visibleAffirmations.includes(index) ? 1 : 0,
                y: visibleAffirmations.includes(index) ? 0 : 10
              }}
              className="mt-2 text-sm md:text-base text-emerald-900 font-medium font-serif bg-white/60 backdrop-blur-sm px-2 py-1 rounded"
            >
              {text}
            </motion.div>
          </div>
        ))}
      </div>

      <motion.button
        onClick={onNext}
        className="absolute bottom-8 right-8 bg-emerald-800/80 hover:bg-emerald-900 text-white px-6 py-2 rounded-full flex items-center gap-2 z-20 transition-colors"
      >
        Enter Sacred Space <ArrowRight className="w-4 h-4" />
      </motion.button>
    </motion.div>
  );
};

export default Step3Nature;