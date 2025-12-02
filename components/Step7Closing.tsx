import React from 'react';
import { motion } from 'framer-motion';
import { Moon } from 'lucide-react';

const Step7Closing: React.FC = () => {
  return (
    <motion.div 
      className="flex flex-col items-center justify-center h-full text-center px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        animate={{ 
            opacity: [0.5, 1, 0.5], 
            scale: [1, 1.05, 1] 
        }}
        transition={{ duration: 5, repeat: Infinity }}
        className="mb-12"
      >
        <Moon className="w-20 h-20 text-blue-100 drop-shadow-[0_0_30px_rgba(255,255,255,0.4)]" />
      </motion.div>

      <div className="max-w-2xl">
        <motion.p 
          className="text-xl md:text-3xl text-white font-serif leading-relaxed mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.5 }}
        >
          "You are cherished, you are loved, and your soul is a gift to this world."
        </motion.p>

        <motion.p 
          className="text-lg md:text-xl text-blue-200 font-light mb-12"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2.5, duration: 1.5 }}
        >
          Keep shining, keep growing, and never forget the magic within you. <br/>
          <span className="text-amber-100 font-serif mt-4 block">Happy Birthday, dear one.</span>
        </motion.p>
      </div>

      <motion.div
        className="absolute bottom-10 text-xs text-blue-300/40 uppercase tracking-[0.3em]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5 }}
      >
        May Allah make your life endlessly beautiful
      </motion.div>
    </motion.div>
  );
};

export default Step7Closing;