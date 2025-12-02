import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Background from './components/Background';
import Step1Awakening from './components/Step1Awakening';
import Step2Moonlit from './components/Step2Moonlit';
import Step3Nature from './components/Step3Nature';
import Step4Wisdom from './components/Step4Wisdom';
import Step5Birthday from './components/Step5Birthday';
import Step6Vision from './components/Step6Vision';
import Step7Closing from './components/Step7Closing';
import { AppStep } from './types';
import { Volume2, VolumeX } from 'lucide-react';

export default function App() {
  const [step, setStep] = useState<AppStep>(AppStep.Awakening);
  const [muted, setMuted] = useState(false);

  // In a real app, we would have a hidden audio element here playing ambient sound
  // For this demo, we simulate the UI control

  const handleNext = () => {
    if (step < AppStep.Closing) {
      setStep(step + 1);
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden text-white">
      {/* Background Layer */}
      <Background step={step} />

      {/* Audio Control (Visual only for demo) */}
      <div className="absolute top-6 right-6 z-50">
        <button 
            onClick={() => setMuted(!muted)}
            className="p-2 rounded-full bg-black/10 backdrop-blur-sm hover:bg-black/20 transition-colors text-white/70 hover:text-white"
        >
            {muted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
        </button>
      </div>

      {/* Main Content Area */}
      <main className="relative z-10 w-full h-full">
        <AnimatePresence mode='wait'>
          {step === AppStep.Awakening && (
            <Step1Awakening key="step1" isActive={step === AppStep.Awakening} onNext={handleNext} />
          )}
          {step === AppStep.Reflections && (
            <Step2Moonlit key="step2" isActive={step === AppStep.Reflections} onNext={handleNext} />
          )}
          {step === AppStep.Nature && (
            <Step3Nature key="step3" isActive={step === AppStep.Nature} onNext={handleNext} />
          )}
          {step === AppStep.Wisdom && (
            <Step4Wisdom key="step4" isActive={step === AppStep.Wisdom} onNext={handleNext} />
          )}
          {step === AppStep.Birthday && (
            <Step5Birthday key="step5" isActive={step === AppStep.Birthday} onNext={handleNext} />
          )}
          {step === AppStep.NewYear && (
            <Step6Vision key="step6" isActive={step === AppStep.NewYear} onNext={handleNext} />
          )}
          {step === AppStep.Closing && (
            <Step7Closing key="step7" />
          )}
        </AnimatePresence>
      </main>
      
      {/* Progress Indicator */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10 z-50">
        <motion.div 
            className="h-full bg-white/50"
            initial={{ width: '0%' }}
            animate={{ width: `${(step / 7) * 100}%` }}
            transition={{ duration: 0.5 }}
        />
      </div>
    </div>
  );
}