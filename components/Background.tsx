import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AppStep } from '../types';

interface BackgroundProps {
  step: AppStep;
}

const Background: React.FC<BackgroundProps> = ({ step }) => {
  const getGradient = () => {
    switch (step) {
      case AppStep.Awakening:
        return 'linear-gradient(to bottom, #FF9A9E, #FECFEF, #F6D365)'; // Sunrise
      case AppStep.Reflections:
        return 'linear-gradient(to bottom, #0F2027, #203A43, #2C5364)'; // Night Lake
      case AppStep.Nature:
        return 'linear-gradient(to bottom, #d9f2d0, #a1c4fd)'; // Soft Garden
      case AppStep.Wisdom:
        return 'linear-gradient(to bottom, #141E30, #243B55)'; // Deep Night
      case AppStep.Birthday:
        return 'linear-gradient(to bottom, #000000, #434343)'; // Celebration Dark
      case AppStep.NewYear:
        return 'linear-gradient(to bottom, #1e3c72, #2a5298)'; // Constellation Blue
      case AppStep.Closing:
        return 'linear-gradient(to bottom, #000428, #004e92)'; // Serene Midnight
      default:
        return 'bg-white';
    }
  };

  return (
    <motion.div
      className="absolute inset-0 -z-10 w-full h-full transition-colors duration-1000"
      initial={false}
      animate={{ background: getGradient() }}
      transition={{ duration: 2, ease: "easeInOut" }}
    >
      {/* Dynamic particles based on step can be added here if needed, 
          but individual steps will handle their specific animations */}
      {(step === AppStep.Reflections || step === AppStep.Wisdom || step === AppStep.NewYear || step === AppStep.Closing || step === AppStep.Birthday) && (
         <div className="absolute inset-0 opacity-40">
           {Array.from({ length: 50 }).map((_, i) => (
             <motion.div
               key={i}
               className="absolute bg-white rounded-full"
               style={{
                 width: Math.random() * 2 + 1,
                 height: Math.random() * 2 + 1,
                 top: `${Math.random() * 100}%`,
                 left: `${Math.random() * 100}%`,
               }}
               animate={{ opacity: [0.2, 1, 0.2] }}
               transition={{ duration: Math.random() * 3 + 2, repeat: Infinity }}
             />
           ))}
         </div>
      )}
    </motion.div>
  );
};

export default Background;