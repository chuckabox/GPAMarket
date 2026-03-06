import React from 'react';
import { BarChart3, Banknote, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';

interface HomeScreenProps {
  onGetStarted: () => void;
}

const FloatingIcon = ({ children, delay = 0, x = 0, y = 0, scale = 1 }: { children: React.ReactNode, delay?: number, x?: number, y?: number, scale?: number }) => (
  <motion.div
    initial={{ x, y, opacity: 0, scale: 0 }}
    animate={{ 
      x: [x - 10, x + 10, x - 5, x + 5, x],
      y: [y - 15, y + 15, y - 10, y + 10, y],
      opacity: [0.1, 0.2, 0.15, 0.2, 0.1],
      scale: [scale, scale * 1.1, scale]
    }}
    transition={{ 
      duration: 8 + Math.random() * 4, 
      repeat: Infinity, 
      delay,
      ease: "easeInOut"
    }}
    className="absolute pointer-events-none text-brand-blue/20 dark:text-brand-blue/30"
  >
    {children}
  </motion.div>
);

const HomeScreen: React.FC<HomeScreenProps> = ({ onGetStarted }) => {
  return (
    <div className="relative flex h-screen w-full flex-col overflow-hidden bg-white dark:bg-dark-bg font-sans max-w-md mx-auto shadow-2xl transition-colors duration-200">
      {/* Background Floating Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingIcon x={40} y={120} scale={1.2} delay={0}><Banknote size={48} /></FloatingIcon>
        <FloatingIcon x={300} y={80} scale={0.8} delay={1}><BookOpen size={32} /></FloatingIcon>
        <FloatingIcon x={240} y={250} scale={1.5} delay={2}><Banknote size={40} /></FloatingIcon>
        <FloatingIcon x={60} y={400} scale={1} delay={0.5}><BookOpen size={56} /></FloatingIcon>
        <FloatingIcon x={320} y={500} scale={1.3} delay={1.5}><Banknote size={44} /></FloatingIcon>
        <FloatingIcon x={100} y={650} scale={0.9} delay={3}><BookOpen size={36} /></FloatingIcon>
        <FloatingIcon x={280} y={720} scale={1.1} delay={2.5}><Banknote size={52} /></FloatingIcon>
      </div>

      {/* Header / Logo */}
      <header className="relative z-10 flex items-center justify-between px-6 py-8">
        <div className="flex items-center gap-2">
          <div className="bg-brand-blue flex size-8 items-center justify-center rounded">
            <BarChart3 className="text-white w-5 h-5" />
          </div>
          <span className="text-xl font-bold tracking-tight text-primary-text dark:text-dark-text">GPAMarket</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-8 text-center">
        {/* Hero Text */}
        <div className="max-w-[320px] space-y-4">
          <h1 className="text-3xl font-bold tracking-tight text-primary-text dark:text-dark-text leading-[1.15]">
            The academic prediction platform for students.
          </h1>
          <p className="text-slate-500 dark:text-dark-muted text-sm leading-relaxed">
            A professional tool for peer-to-peer performance tracking and forecasting.
          </p>
        </div>

        {/* Action Button */}
        <div className="mt-12 flex w-full max-w-[300px] flex-col gap-3">
          <button 
            onClick={onGetStarted}
            className="flex h-12 w-full items-center justify-center bg-brand-blue text-sm font-semibold text-white transition-all hover:scale-[1.02] active:scale-[0.98] rounded-full shadow-lg shadow-brand-blue/20"
          >
            Get Betting
          </button>
        </div>
      </main>
    </div>
  );
};

export default HomeScreen;
