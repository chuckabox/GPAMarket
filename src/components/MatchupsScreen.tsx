import React from 'react';
import { Search, Filter, Swords, Trophy, BarChart3, User, Plus, ShieldAlert } from 'lucide-react';

interface MatchupsScreenProps {
  onNavigate: (screen: 'markets' | 'matchups' | 'profile' | 'leaderboard') => void;
}

const MOCK_MATCHUPS = [
  {
    id: '1',
    studentA: { name: 'Paul V.', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=100&h=100' },
    studentB: { name: 'Elouise C.', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100' },
    course: 'CSSE1001',
    type: 'Final Exam',
    timeLeft: '2d 14h',
    stake: '$50.00'
  },
  {
    id: '2',
    studentA: { name: 'Felix H.', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100' },
    studentB: { name: 'Harper M.', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100' },
    course: 'MATH1051',
    type: 'Final Exam',
    timeLeft: '5h 12m',
    stake: '$25.00'
  },
  {
    id: '3',
    studentA: { name: 'Brendan C.', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100&h=100' },
    studentB: { name: 'Peter M.', avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=100&h=100' },
    course: 'ENGG1100',
    type: 'Mid-semester Exam',
    timeLeft: '1d 08h',
    stake: '$100.00'
  },
  {
    id: '4',
    studentA: { name: 'Annie H.', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100&h=100' },
    studentB: { name: 'Jeff B.', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100&h=100' },
    course: 'COMP3400',
    type: 'Final Exam',
    timeLeft: '12h 45m',
    stake: '$15.00'
  }
];

const MatchupsScreen: React.FC<MatchupsScreenProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col h-screen bg-[#f6f6f8] dark:bg-dark-bg font-sans max-w-md mx-auto shadow-xl relative overflow-hidden transition-colors duration-200">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white/80 dark:bg-dark-surface/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-brand-blue flex items-center justify-center text-white">
              <Swords className="w-5 h-5" />
            </div>
            <h1 className="text-lg font-semibold tracking-tight text-primary-text dark:text-dark-text">1v1 Matchups</h1>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              <Search className="w-5 h-5 text-slate-600 dark:text-dark-muted" />
            </button>
            <button className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              <Filter className="w-5 h-5 text-slate-600 dark:text-dark-muted" />
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="px-4">
          <div className="flex gap-6 overflow-x-auto no-scrollbar">
            <a className="border-b-2 border-brand-blue py-2 text-sm font-medium text-brand-blue whitespace-nowrap" href="#">Active Challenges</a>
            <a className="border-b-2 border-transparent py-2 text-sm font-medium text-slate-500 dark:text-dark-muted hover:text-primary-text dark:hover:text-dark-text whitespace-nowrap" href="#">My Duels</a>
            <a className="border-b-2 border-transparent py-2 text-sm font-medium text-slate-500 dark:text-dark-muted hover:text-primary-text dark:hover:text-dark-text whitespace-nowrap" href="#">Invites</a>
          </div>
        </div>
      </header>

      {/* List */}
      <main className="flex-1 flex flex-col divide-y divide-slate-100 dark:divide-slate-800 bg-white dark:bg-dark-surface overflow-y-auto no-scrollbar">
        {MOCK_MATCHUPS.map((matchup) => (
          <div key={matchup.id} className="p-4 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer">
            <div className="flex items-center justify-between">
              {/* Student A */}
              <div className="flex flex-col items-center w-20">
                <img 
                  alt={matchup.studentA.name} 
                  className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 mb-1 object-cover" 
                  src={matchup.studentA.avatar}
                  referrerPolicy="no-referrer"
                />
                <span className="text-[10px] text-slate-500 dark:text-dark-muted font-medium truncate w-full text-center">{matchup.studentA.name}</span>
              </div>

              {/* Match Info */}
              <div className="flex-1 text-center px-2">
                <h3 className="font-bold text-sm text-primary-text dark:text-dark-text">{matchup.course}</h3>
                <p className="text-[11px] text-slate-500 dark:text-dark-muted mt-1 uppercase tracking-tight font-medium">{matchup.type}</p>
                <div className="mt-2 flex flex-col gap-0.5">
                  <span className="text-[10px] text-slate-400 dark:text-dark-muted">Time Left: <span className="text-slate-600 dark:text-dark-text font-medium">{matchup.timeLeft}</span></span>
                  <span className="text-[10px] text-slate-400 dark:text-dark-muted">Stake: <span className="text-brand-blue font-semibold">{matchup.stake}</span></span>
                </div>
              </div>

              {/* Student B */}
              <div className="flex flex-col items-center w-20">
                <img 
                  alt={matchup.studentB.name} 
                  className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 mb-1 object-cover" 
                  src={matchup.studentB.avatar}
                  referrerPolicy="no-referrer"
                />
                <span className="text-[10px] text-slate-500 dark:text-dark-muted font-medium truncate w-full text-center">{matchup.studentB.name}</span>
              </div>
            </div>

            {/* Emoji Reactions */}
            <div className="mt-4 flex items-center gap-2 overflow-x-auto no-scrollbar">
              <button className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-brand-blue transition-colors group">
                <span className="text-xs">🔥</span>
                <span className="text-[10px] font-bold text-slate-600 dark:text-dark-muted group-hover:text-brand-blue">12</span>
              </button>
              <button className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-brand-blue transition-colors group">
                <span className="text-xs">😮</span>
                <span className="text-[10px] font-bold text-slate-600 dark:text-dark-muted group-hover:text-brand-blue">5</span>
              </button>
              <button className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-brand-blue transition-colors group">
                <span className="text-xs">🚀</span>
                <span className="text-[10px] font-bold text-slate-600 dark:text-dark-muted group-hover:text-brand-blue">8</span>
              </button>
              <button className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-brand-blue transition-colors group">
                <span className="text-xs">👏</span>
                <span className="text-[10px] font-bold text-slate-600 dark:text-dark-muted group-hover:text-brand-blue">3</span>
              </button>
              <button className="flex items-center justify-center w-7 h-7 rounded-full bg-slate-50 dark:bg-slate-900 border border-dashed border-slate-300 dark:border-slate-700 text-slate-400 hover:text-brand-blue hover:border-brand-blue transition-colors">
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </main>

      {/* FAB */}
      <button className="fixed bottom-24 right-6 w-12 h-12 rounded-full bg-brand-blue text-white shadow-xl flex items-center justify-center hover:scale-105 active:scale-95 transition-transform z-20">
        <ShieldAlert className="w-6 h-6" />
      </button>

      {/* Bottom Nav */}
      <nav className="sticky bottom-0 bg-white/95 dark:bg-dark-surface/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 py-5">
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
            className="flex flex-col items-center gap-1 text-brand-blue"
          >
            <Swords className="w-6 h-6 fill-current" />
            <span className="text-[10px] font-semibold">1v1s</span>
          </button>
          <button 
            onClick={() => onNavigate('markets')}
            className="flex flex-col items-center gap-1 text-slate-400 dark:text-dark-muted hover:text-slate-600 dark:hover:text-dark-text transition-colors"
          >
            <BarChart3 className="w-6 h-6" />
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

export default MatchupsScreen;
