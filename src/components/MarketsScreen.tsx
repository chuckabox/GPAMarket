import React from 'react';
import { Search, UserCircle, ChevronDown, Plus, BarChart3, Wallet, History, User } from 'lucide-react';
import { MOCK_MARKETS } from '../constants';

interface MarketsScreenProps {
  onSelectMarket: () => void;
}

const MarketsScreen: React.FC<MarketsScreenProps> = ({ onSelectMarket }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans max-w-md mx-auto shadow-xl relative">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
              <BarChart3 className="w-5 h-5" />
            </div>
            <h1 className="text-lg font-semibold tracking-tight text-slate-900">Available Markets</h1>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-lg hover:bg-slate-100 transition-colors">
              <Search className="w-5 h-5 text-slate-600" />
            </button>
            <button className="p-2 rounded-lg hover:bg-slate-100 transition-colors">
              <UserCircle className="w-5 h-5 text-slate-600" />
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="px-4 flex gap-6 overflow-x-auto no-scrollbar">
          <a href="#" className="border-b-2 border-blue-600 py-2 text-sm font-medium text-blue-600 whitespace-nowrap">All Markets</a>
          <a href="#" className="border-b-2 border-transparent py-2 text-sm font-medium text-slate-500 hover:text-slate-900 whitespace-nowrap">My Courses</a>
          <a href="#" className="border-b-2 border-transparent py-2 text-sm font-medium text-slate-500 hover:text-slate-900 whitespace-nowrap">Watchlist</a>
          <a href="#" className="border-b-2 border-transparent py-2 text-sm font-medium text-slate-500 hover:text-slate-900 whitespace-nowrap">History</a>
        </div>
      </header>

      {/* Filters */}
      <div className="flex gap-2 p-4 overflow-x-auto no-scrollbar bg-slate-50">
        <button className="flex h-8 shrink-0 items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 text-xs font-medium text-slate-700">
          Status: Open <ChevronDown className="w-3 h-3" />
        </button>
        <button className="flex h-8 shrink-0 items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 text-xs font-medium text-slate-700">
          Department <ChevronDown className="w-3 h-3" />
        </button>
        <button className="flex h-8 shrink-0 items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 text-xs font-medium text-slate-700">
          Volatility <ChevronDown className="w-3 h-3" />
        </button>
      </div>

      {/* List */}
      <main className="flex-1 divide-y divide-slate-100">
        {MOCK_MARKETS.map((market) => (
          <div 
            key={market.id} 
            onClick={onSelectMarket}
            className="p-4 hover:bg-slate-50 transition-colors cursor-pointer"
          >
            <div className="flex justify-between items-start mb-1">
              <div className="flex items-center gap-2">
                {market.icon}
                <h3 className="font-medium text-sm text-slate-900">{market.course}</h3>
              </div>
              <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded border ${
                market.status === 'ACTIVE' 
                  ? 'bg-green-50 text-green-600 border-green-100' 
                  : 'bg-slate-50 text-slate-500 border-slate-200'
              }`}>
                {market.status}
              </span>
            </div>
            <div className="flex justify-between items-end">
              <div className="space-y-1">
                <p className="text-xs text-slate-500">Target Grade: {market.targetGrade} • {market.examType}</p>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1 text-[11px] font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                    <User className="w-3 h-3" /> {market.participants} Participants
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                    <History className="w-3 h-3" /> {market.timeLeft}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[10px] uppercase tracking-wider font-bold text-slate-400 mb-0.5">Current Odds</p>
                <p className="text-lg font-bold text-slate-900 leading-none">{market.odds}</p>
              </div>
            </div>
          </div>
        ))}
      </main>

      {/* FAB */}
      <button className="fixed bottom-24 right-6 w-12 h-12 rounded-full bg-blue-600 text-white shadow-xl flex items-center justify-center hover:scale-105 active:scale-95 transition-transform z-20">
        <Plus className="w-6 h-6" />
      </button>

      {/* Bottom Nav */}
      <nav className="sticky bottom-0 bg-white/95 backdrop-blur-md border-t border-slate-100 pb-8 pt-2">
        <div className="flex justify-around items-center px-4">
          <a href="#" className="flex flex-col items-center gap-1 text-blue-600">
            <BarChart3 className="w-6 h-6" />
            <span className="text-[10px] font-semibold">Markets</span>
          </a>
          <a href="#" className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-600">
            <Wallet className="w-6 h-6" />
            <span className="text-[10px] font-semibold">Portfolio</span>
          </a>
          <a href="#" className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-600">
            <History className="w-6 h-6" />
            <span className="text-[10px] font-semibold">Activity</span>
          </a>
          <a href="#" className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-600">
            <User className="w-6 h-6" />
            <span className="text-[10px] font-semibold">Profile</span>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default MarketsScreen;
