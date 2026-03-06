import React from 'react';
import { Trophy, BarChart3, User, Swords, Medal, TrendingUp, TrendingDown } from 'lucide-react';

interface LeaderboardScreenProps {
  onNavigate: (screen: 'markets' | 'matchups' | 'profile' | 'leaderboard') => void;
}

const MOCK_LEADERBOARD = [
  {
    id: '1',
    name: 'Felix W.',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=100&h=100',
    wins: 42,
    losses: 8,
    rank: 1
  },
  {
    id: '2',
    name: 'Sarah J.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100',
    wins: 38,
    losses: 12,
    rank: 2
  },
  {
    id: '3',
    name: 'Marcus T.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100',
    wins: 35,
    losses: 15,
    rank: 3
  },
  {
    id: '4',
    name: 'Chloe L.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100',
    wins: 28,
    losses: 14,
    rank: 4
  },
  {
    id: '5',
    name: 'Alex B.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100&h=100',
    wins: 22,
    losses: 18,
    rank: 5
  },
  {
    id: '6',
    name: 'Jordan K.',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=100&h=100',
    wins: 15,
    losses: 25,
    rank: 6
  }
];

const LeaderboardScreen: React.FC<LeaderboardScreenProps> = ({ onNavigate }) => {
  // Sort by win rate: wins / (wins + losses)
  const sortedLeaderboard = [...MOCK_LEADERBOARD].sort((a, b) => {
    const winRateA = a.wins / (a.wins + a.losses);
    const winRateB = b.wins / (b.wins + b.losses);
    return winRateB - winRateA;
  });

  return (
    <div className="flex flex-col min-h-screen bg-[#f6f6f8] dark:bg-dark-bg font-sans max-w-md mx-auto shadow-xl relative overflow-x-hidden transition-colors duration-200">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white/80 dark:bg-dark-surface/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-brand-blue flex items-center justify-center text-white">
              <Trophy className="w-5 h-5" />
            </div>
            <h1 className="text-lg font-semibold tracking-tight text-primary-text dark:text-dark-text">Global Leaderboard</h1>
          </div>
        </div>

        {/* Stats Summary */}
        <div className="px-4 pb-4">
          <div className="bg-brand-blue/5 dark:bg-brand-blue/10 rounded-xl p-4 flex justify-between items-center border border-brand-blue/10 dark:border-brand-blue/20">
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-brand-blue uppercase tracking-wider">Your Rank</span>
              <span className="text-2xl font-black text-primary-text dark:text-dark-text">#124</span>
            </div>
            <div className="h-8 w-px bg-brand-blue/20" />
            <div className="flex flex-col text-right">
              <span className="text-[10px] font-bold text-brand-blue uppercase tracking-wider">Win Rate</span>
              <span className="text-2xl font-black text-primary-text dark:text-dark-text">64%</span>
            </div>
          </div>
        </div>
      </header>

      {/* List */}
      <main className="flex-1 flex flex-col divide-y divide-slate-100 dark:divide-slate-800 bg-white dark:bg-dark-surface">
        <div className="px-4 py-2 bg-slate-50 dark:bg-dark-bg flex justify-between items-center">
          <span className="text-[10px] font-bold text-slate-400 dark:text-dark-muted uppercase tracking-wider">Student</span>
          <span className="text-[10px] font-bold text-slate-400 dark:text-dark-muted uppercase tracking-wider">Win Rate / Record</span>
        </div>
        {sortedLeaderboard.map((user, index) => {
          const winRate = Math.round((user.wins / (user.wins + user.losses)) * 100);
          return (
            <div key={user.id} className="p-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-8 flex justify-center">
                  {index === 0 ? (
                    <Medal className="w-6 h-6 text-yellow-500" />
                  ) : index === 1 ? (
                    <Medal className="w-6 h-6 text-slate-400 dark:text-dark-muted" />
                  ) : index === 2 ? (
                    <Medal className="w-6 h-6 text-amber-600" />
                  ) : (
                    <span className="text-sm font-bold text-slate-400 dark:text-dark-muted">#{index + 1}</span>
                  )}
                </div>
                <div className="relative">
                  <img 
                    src={user.avatar} 
                    alt={user.name} 
                    className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700 object-cover"
                    referrerPolicy="no-referrer"
                  />
                  {winRate > 70 && (
                    <div className="absolute -top-1 -right-1 bg-green-500 w-3 h-3 rounded-full border-2 border-white dark:border-dark-surface" />
                  )}
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-primary-text dark:text-dark-text">{user.name}</span>
                  <span className="text-[10px] text-slate-500 dark:text-dark-muted font-medium">Level {Math.floor(user.wins / 5) + 1} Scholar</span>
                </div>
              </div>

              <div className="text-right">
                <div className="flex items-center justify-end gap-1">
                  <span className={`text-sm font-black ${winRate > 60 ? 'text-green-600 dark:text-green-400' : 'text-slate-600 dark:text-dark-muted'}`}>
                    {winRate}%
                  </span>
                  {winRate > 60 ? <TrendingUp className="w-3 h-3 text-green-600 dark:text-green-400" /> : <TrendingDown className="w-3 h-3 text-slate-400 dark:text-dark-muted" />}
                </div>
                <p className="text-[10px] text-slate-400 dark:text-dark-muted font-bold uppercase tracking-tighter">
                  {user.wins}W - {user.losses}L
                </p>
              </div>
            </div>
          );
        })}
      </main>

      {/* Bottom Nav */}
      <nav className="sticky bottom-0 bg-white/95 dark:bg-dark-surface/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 py-5">
        <div className="flex justify-around items-center px-4">
          <button 
            onClick={() => onNavigate('leaderboard')}
            className="flex flex-col items-center gap-1 text-brand-blue"
          >
            <Trophy className="w-6 h-6 fill-current" />
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

export default LeaderboardScreen;
