import React from 'react';
import { BarChart3, GraduationCap, Landmark, School, LibraryBig } from 'lucide-react';
import { motion } from 'motion/react';

interface HomeScreenProps {
  onGetStarted: () => void;
}

const FloatingIcon = ({ 
  children, 
  delay = 0, 
  x = 0, 
  y = 0, 
  scale = 1 
}: { 
  children: React.ReactNode, 
  delay?: number, 
  x?: number, 
  y?: number, 
  scale?: number 
}) => (
  <motion.div
    initial={{ x, y, opacity: 0, scale: 0, rotate: 0 }}
    animate={{ 
      x: [x - 15, x + 15, x],
      y: [y - 20, y + 20, y],
      opacity: [0.35, 0.65, 0.5, 0.65, 0.35],
      scale: [scale, scale * 1.1, scale],
      rotate: [0, 12, -8, 0]
    }}
    transition={{ 
      duration: 10 + Math.random() * 5, 
      repeat: Infinity, 
      delay,
      ease: "easeInOut"
    }}
    className="absolute pointer-events-none text-brand-blue/40 dark:text-brand-blue/50 drop-shadow-md"
  >
    {children}
  </motion.div>
);

const HomeScreen: React.FC<HomeScreenProps> = ({ onGetStarted }) => {
  return (
    <div className="relative flex h-screen w-full flex-col overflow-hidden bg-white dark:bg-dark-bg font-sans max-w-md mx-auto shadow-2xl transition-colors duration-200">
      
      {/* Background Glows */}
      <div className="absolute inset-0 z-0 opacity-40 dark:opacity-20 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[70%] h-[50%] bg-brand-blue/15 rounded-full blur-[120px]" />
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <FloatingIcon x={40} y={80} scale={1.2} delay={0}><GraduationCap size={48} strokeWidth={1.5} /></FloatingIcon>
        <FloatingIcon x={320} y={120} scale={0.9} delay={1}><Landmark size={36} strokeWidth={1.5} /></FloatingIcon>
        <FloatingIcon x={280} y={350} scale={1.4} delay={2}><LibraryBig size={44} strokeWidth={1.5} /></FloatingIcon>
        <FloatingIcon x={40} y={550} scale={1.1} delay={0.5}><School size={52} strokeWidth={1.5} /></FloatingIcon>
        <FloatingIcon x={330} y={650} scale={1.3} delay={1.5}><GraduationCap size={40} strokeWidth={1.5} /></FloatingIcon>
        <FloatingIcon x={60} y={800} scale={1} delay={3}><Landmark size={40} strokeWidth={1.5} /></FloatingIcon>
        <FloatingIcon x={300} y={850} scale={1.2} delay={2.5}><LibraryBig size={48} strokeWidth={1.5} /></FloatingIcon>
      </div>

      {/* Main Content Area */}
      <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 text-center">
        
        {/* Large Centered Title */}
        <div className="space-y-6 mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="bg-brand-blue p-4 rounded-3xl shadow-2xl shadow-brand-blue/40 mb-2">
              <BarChart3 className="text-white w-12 h-12" />
            </div>
            <h1 className="text-6xl font-black tracking-tighter text-primary-text dark:text-dark-text italic">
              GPA<span className="text-brand-blue">Market</span>
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 dark:text-dark-muted text-lg font-medium max-w-[280px] mx-auto leading-tight"
          >
            Predict performance. Guess GPA. Lead the leaderboard.
          </motion.p>
        </div>

        {/* Action Button */}
        <div className="w-full max-w-[240px]">
          <button 
            onClick={onGetStarted}
            className="group relative flex h-16 w-full items-center justify-center bg-brand-blue text-lg font-bold text-white transition-all hover:brightness-110 active:scale-95 rounded-2xl shadow-2xl shadow-brand-blue/30"
          >
            Get Started
          </button>
        </div>
      </main>
    </div>
  );
};

export default HomeScreen;