import React from 'react';
import { BarChart3, TrendingUp, Home, Search, UserCircle } from 'lucide-react';

interface HomeScreenProps {
  onGetStarted: () => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ onGetStarted }) => {
  return (
    <div className="relative flex h-screen w-full flex-col overflow-hidden bg-white dark:bg-dark-bg font-sans max-w-md mx-auto shadow-2xl transition-colors duration-200">
      {/* Header / Logo */}
      <header className="flex items-center justify-between px-6 py-8">
        <div className="flex items-center gap-2">
          <div className="bg-brand-blue flex size-8 items-center justify-center rounded">
            <BarChart3 className="text-white w-5 h-5" />
          </div>
          <span className="text-xl font-bold tracking-tight text-primary-text dark:text-dark-text">GPAMarket</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-1 flex-col items-center justify-center px-8 text-center">
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
            className="flex h-12 w-full items-center justify-center bg-brand-blue text-sm font-semibold text-white transition-opacity active:opacity-90 rounded"
          >
            Get Started
          </button>
        </div>
      </main>
    </div>
  );
};

export default HomeScreen;
