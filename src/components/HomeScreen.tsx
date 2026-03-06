import React from 'react';
import { BarChart3, TrendingUp, Home, Search, UserCircle } from 'lucide-react';

interface HomeScreenProps {
  onSignUp: () => void;
  onLogIn: () => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ onSignUp, onLogIn }) => {
  return (
    <div className="relative flex h-screen w-full flex-col overflow-hidden bg-slate-50 font-sans">
      {/* Header / Logo */}
      <header className="flex items-center justify-between px-6 py-8">
        <div className="flex items-center gap-2">
          <div className="bg-slate-900 flex size-8 items-center justify-center rounded">
            <BarChart3 className="text-white w-5 h-5" />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">GradeMarket</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-1 flex-col items-center justify-center px-8 text-center">
        {/* Hero Text */}
        <div className="max-w-[320px] space-y-4">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 leading-[1.15]">
            The academic prediction platform for students.
          </h1>
          <p className="text-slate-500 text-sm leading-relaxed">
            A professional tool for peer-to-peer performance tracking and forecasting.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-12 flex w-full max-w-[300px] flex-col gap-3">
          <button 
            onClick={onSignUp}
            className="flex h-11 w-full items-center justify-center bg-slate-900 text-sm font-semibold text-white transition-opacity active:opacity-90 rounded"
          >
            Sign Up
          </button>
          <button 
            onClick={onLogIn}
            className="flex h-11 w-full items-center justify-center border border-slate-200 bg-white text-sm font-semibold text-slate-900 transition-colors active:bg-slate-50 rounded"
          >
            Log In
          </button>
        </div>
      </main>

      {/* Product Preview Hint */}
      <div className="mt-auto px-6 pb-8">
        <div className="flex flex-col items-center gap-6">
          <div className="w-full max-w-[340px] rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3">
              <div className="flex items-center gap-2">
                <TrendingUp className="text-slate-400 w-4 h-4" />
                <span className="text-[11px] font-medium uppercase tracking-wider text-slate-400">Market Trend</span>
              </div>
              <span className="text-[11px] font-medium text-emerald-500">+12.5%</span>
            </div>
            <div className="space-y-2">
              <div className="h-2 w-full rounded-full bg-slate-100">
                <div className="h-full w-2/3 rounded-full bg-blue-600/40"></div>
              </div>
              <div className="h-2 w-3/4 rounded-full bg-slate-100"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="flex h-20 items-center justify-around border-t border-slate-200 bg-white/80 backdrop-blur-md px-4 pb-4">
        <a className="flex flex-col items-center gap-1 text-blue-600" href="#">
          <Home className="w-5 h-5" />
          <span className="text-[10px] font-medium">Home</span>
        </a>
        <a className="flex flex-col items-center gap-1 text-slate-400" href="#">
          <TrendingUp className="w-5 h-5" />
          <span className="text-[10px] font-medium">Markets</span>
        </a>
        <a className="flex flex-col items-center gap-1 text-slate-400" href="#">
          <UserCircle className="w-5 h-5" />
          <span className="text-[10px] font-medium">Profile</span>
        </a>
      </nav>
    </div>
  );
};

export default HomeScreen;
