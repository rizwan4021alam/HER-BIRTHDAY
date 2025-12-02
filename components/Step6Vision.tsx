import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Star, Sparkles, ArrowRight, Loader2 } from 'lucide-react';
import { StepProps } from '../types';
import { generateBlessing } from '../services/geminiService';

const Step6Vision: React.FC<StepProps> = ({ onNext }) => {
  const [intention, setIntention] = useState('');
  const [blessing, setBlessing] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerateBlessing = async () => {
    if (!intention.trim()) return;
    setLoading(true);
    const result = await generateBlessing(intention);
    setBlessing(result);
    setLoading(false);
  };

  return (
    <motion.div 
      className="flex flex-col items-center justify-center h-full text-center px-6 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="max-w-2xl w-full">
        <h2 className="text-2xl md:text-3xl text-blue-100 font-serif mb-2">A Vision for the New Year</h2>
        <p className="text-blue-200/70 mb-8 font-light text-sm">May Allah guide your steps and protect your heart.</p>

        {!blessing ? (
          <motion.div 
            className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/10"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <label className="block text-left text-blue-100 mb-2 font-serif">Write your intention or prayer:</label>
            <textarea 
              value={intention}
              onChange={(e) => setIntention(e.target.value)}
              className="w-full h-32 bg-blue-950/50 border border-blue-400/30 rounded-lg p-4 text-white placeholder-blue-300/30 focus:outline-none focus:border-blue-400/70 transition-colors resize-none mb-4"
              placeholder="In this new year, I hope to..."
            />
            
            <button
              onClick={handleGenerateBlessing}
              disabled={!intention.trim() || loading}
              className="w-full bg-blue-600/80 hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed text-white py-3 rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg"
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Sparkles className="w-5 h-5" />}
              {loading ? "Receiving Blessing..." : "Seal Intention & Receive Blessing"}
            </button>
          </motion.div>
        ) : (
          <motion.div 
            className="bg-gradient-to-br from-blue-900/80 to-indigo-900/80 backdrop-blur-md rounded-xl p-8 border border-amber-200/20 shadow-2xl relative overflow-hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-200 to-transparent opacity-50"></div>
            <Star className="w-8 h-8 text-amber-200 mx-auto mb-4" />
            <h3 className="text-amber-100 font-serif text-lg mb-4 uppercase tracking-widest">A Blessing for You</h3>
            <p className="text-xl md:text-2xl text-white font-serif italic leading-relaxed mb-8">
              "{blessing}"
            </p>
            <p className="text-sm text-blue-200">Your intention: "{intention}"</p>
          </motion.div>
        )}
      </div>

      {blessing && (
        <motion.button
          onClick={onNext}
          className="mt-12 text-blue-200 hover:text-white flex items-center gap-2 transition-colors"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          Closing Gratitude <ArrowRight className="w-4 h-4" />
        </motion.button>
      )}
    </motion.div>
  );
};

export default Step6Vision;