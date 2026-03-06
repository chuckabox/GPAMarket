import React from 'react';
import { Search, ChevronDown, Plus, BarChart3, Trophy, User, Swords } from 'lucide-react';
import { MOCK_MARKETS } from '../constants';

interface MarketsScreenProps {
  onSelectMarket: () => void;
  onNavigate: (screen: 'markets' | 'matchups' | 'profile' | 'leaderboard') => void;
}

const MarketsScreen: React.FC<MarketsScreenProps> = ({ onSelectMarket, onNavigate }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-dark-bg font-sans max-w-md mx-auto shadow-xl relative transition-colors duration-200">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white/80 dark:bg-dark-surface/80 backdrop-blur-md border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-brand-blue flex items-center justify-center text-white">
              <BarChart3 className="w-5 h-5" />
            </div>
            <h1 className="text-lg font-semibold tracking-tight text-primary-text dark:text-dark-text">Available Markets</h1>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              <Search className="w-5 h-5 text-slate-600 dark:text-dark-muted" />
            </button>
            {/* Profile icon removed from here */}
          </div>
        </div>

        {/* Tabs */}
        <div className="px-4 flex gap-6 overflow-x-auto no-scrollbar">
          <a href="#" className="border-b-2 border-brand-blue py-2 text-sm font-medium text-brand-blue whitespace-nowrap">All Markets</a>
        </div>
      </header>

      {/* Filters */}
      <div className="flex gap-2 p-4 overflow-x-auto no-scrollbar bg-slate-50 dark:bg-dark-bg">
        <button className="flex h-8 shrink-0 items-center gap-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-dark-surface px-3 text-xs font-medium text-slate-700 dark:text-dark-text">
          Status: Open <ChevronDown className="w-3 h-3" />
        </button>
        <button className="flex h-8 shrink-0 items-center gap-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-dark-surface px-3 text-xs font-medium text-slate-700 dark:text-dark-text">
          Department <ChevronDown className="w-3 h-3" />
        </button>
        {/* Volatility dropdown removed from here */}
      </div>

      {/* List */}
      <main className="flex-1 divide-y divide-slate-100 dark:divide-slate-800">
        {MOCK_MARKETS.map((market) => (
          <div 
            key={market.id} 
            onClick={onSelectMarket}
            className="p-4 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <div className="flex justify-between items-start mb-1">
              <div className="flex items-center gap-2">
                {market.icon}
                <h3 className="font-medium text-sm text-primary-text dark:text-dark-text">{market.course}</h3>
              </div>
              <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded border ${
                market.status === 'ACTIVE' 
                  ? 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 border-green-100 dark:border-green-900/30' 
                  : 'bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-dark-muted border-slate-200 dark:border-slate-700'
              }`}>
                {market.status}
              </span>
            </div>
            <div className="flex justify-between items-end">
              <div className="space-y-1">
                <p className="text-xs text-slate-500 dark:text-dark-muted">Target Grade: {market.targetGrade} • {market.examType}</p>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1 text-[11px] font-medium text-slate-600 dark:text-dark-text bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
                    <User className="w-3 h-3" /> {market.participants} Participants
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-medium text-slate-600 dark:text-dark-text bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
                    <Plus className="w-3 h-3" /> {market.timeLeft}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[10px] uppercase tracking-wider font-bold text-slate-400 dark:text-dark-muted mb-0.5">Current Odds</p>
                <p className="text-lg font-bold text-primary-text dark:text-dark-text leading-none">{market.odds}</p>
              </div>
            </div>
          </div>
        ))}
      </main>

      {/* FAB */}
      <button className="fixed bottom-24 right-6 w-12 h-12 rounded-full bg-brand-blue text-white shadow-xl flex items-center justify-center hover:scale-105 active:scale-95 transition-transform z-20">
        <Plus className="w-6 h-6" />
      </button>

      {/* Bottom Nav */}
      <nav className="sticky bottom-0 bg-white/95 dark:bg-dark-surface/95 backdrop-blur-md border-t border-slate-100 dark:border-slate-800 py-5">
        <div className="flex justify-around items-center px-4">
          <button 
            onClick={() => onNavigate('leaderboard')}
            className="flex flex-col items-center gap-1 text-slate-400 dark:text-dark-muted hover:text-slate-600 dark:hover:text-dark-text transition-colors"
          >
            <Trophy className="w-6 h-6" />
            <span className="text-[10px] font-semibold">Leaderboard</span>
          </button>
          <button 
            onClick={() => onNavigate('matchups')}
            className="flex flex-col items-center gap-1 text-slate-400 dark:text-dark-muted hover:text-slate-600 dark:hover:text-dark-text transition-colors"
          >
            <Swords className="w-6 h-6" />
            <span className="text-[10px] font-semibold">1v1s</span>
          </button>
          <button 
            onClick={() => onNavigate('markets')}
            className="flex flex-col items-center gap-1 text-brand-blue"
          >
            <BarChart3 className="w-6 h-6 fill-current" />
            <span className="text-[10px] font-semibold">Markets</span>
          </button>
          <button 
            onClick={() => onNavigate('profile')}
            className="flex flex-col items-center gap-1 text-slate-400 dark:text-dark-muted hover:text-slate-600 dark:hover:text-dark-text transition-colors"
          >
            <User className="w-6 h-6" />
            <span className="text-[10px] font-semibold">Profile</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default MarketsScreen;