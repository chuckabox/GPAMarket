import React from 'react';
import { Search, Filter, Swords, Trophy, BarChart3, User, Plus, ShieldAlert } from 'lucide-react';

interface MatchupsScreenProps {
  onNavigate: (screen: 'markets' | 'matchups' | 'profile' | 'leaderboard') => void;
}

const MOCK_MATCHUPS = [
  {
    id: '1',
    studentA: { name: 'Felix W.', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=100&h=100' },
    studentB: { name: 'Sarah J.', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100' },
    course: 'ECON 101',
    type: 'Final Exam Duel',
    timeLeft: '2d 14h',
    stake: '$50.00'
  },
  {
    id: '2',
    studentA: { name: 'Marcus T.', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100' },
    studentB: { name: 'Chloe L.', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100' },
    course: 'CS 50',
    type: 'Lab Submission',
    timeLeft: '5h 12m',
    stake: '$25.00'
  },
  {
    id: '3',
    studentA: { name: 'Alex B.', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100&h=100' },
    studentB: { name: 'Jordan K.', avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=100&h=100' },
    course: 'PHYS 201',
    type: 'Midterm Performance',
    timeLeft: '1d 08h',
    stake: '$100.00'
  },
  {
    id: '4',
    studentA: { name: 'Emma S.', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100&h=100' },
    studentB: { name: 'Ryan G.', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100&h=100' },
    course: 'MATH 302',
    type: 'Abstract Algebra Quiz',
    timeLeft: '12h 45m',
    stake: '$15.00'
  }
];

const MatchupsScreen: React.FC<MatchupsScreenProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col min-h-screen bg-[#f6f6f8] font-sans max-w-md mx-auto shadow-xl relative overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-brand-blue flex items-center justify-center text-white">
              <Swords className="w-5 h-5" />
            </div>
            <h1 className="text-lg font-semibold tracking-tight text-primary-text">1v1 Matchups</h1>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-lg hover:bg-slate-100 transition-colors">
              <Search className="w-5 h-5 text-slate-600" />
            </button>
            <button className="p-2 rounded-lg hover:bg-slate-100 transition-colors">
              <Filter className="w-5 h-5 text-slate-600" />
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="px-4">
          <div className="flex gap-6 overflow-x-auto no-scrollbar">
            <a className="border-b-2 border-brand-blue py-2 text-sm font-medium text-brand-blue whitespace-nowrap" href="#">Active Challenges</a>
            <a className="border-b-2 border-transparent py-2 text-sm font-medium text-slate-500 hover:text-primary-text whitespace-nowrap" href="#">My Duels</a>
            <a className="border-b-2 border-transparent py-2 text-sm font-medium text-slate-500 hover:text-primary-text whitespace-nowrap" href="#">Invites</a>
            <a className="border-b-2 border-transparent py-2 text-sm font-medium text-slate-500 hover:text-primary-text whitespace-nowrap" href="#">Leaderboard</a>
          </div>
        </div>
      </header>

      {/* List */}
      <main className="flex-1 flex flex-col divide-y divide-slate-100 bg-white">
        {MOCK_MATCHUPS.map((matchup) => (
          <div key={matchup.id} className="p-4 hover:bg-slate-50 transition-colors cursor-pointer">
            <div className="flex items-center justify-between">
              {/* Student A */}
              <div className="flex flex-col items-center w-20">
                <img 
                  alt={matchup.studentA.name} 
                  className="w-10 h-10 rounded-full border border-slate-200 bg-slate-100 mb-1 object-cover" 
                  src={matchup.studentA.avatar}
                  referrerPolicy="no-referrer"
                />
                <span className="text-[10px] text-slate-500 font-medium truncate w-full text-center">{matchup.studentA.name}</span>
              </div>

              {/* Match Info */}
              <div className="flex-1 text-center px-2">
                <h3 className="font-bold text-sm text-primary-text">{matchup.course}</h3>
                <p className="text-[11px] text-slate-500 mt-1 uppercase tracking-tight font-medium">{matchup.type}</p>
                <div className="mt-2 flex flex-col gap-0.5">
                  <span className="text-[10px] text-slate-400">Time Left: <span className="text-slate-600 font-medium">{matchup.timeLeft}</span></span>
                  <span className="text-[10px] text-slate-400">Stake: <span className="text-brand-blue font-semibold">{matchup.stake}</span></span>
                </div>
              </div>

              {/* Student B */}
              <div className="flex flex-col items-center w-20">
                <img 
                  alt={matchup.studentB.name} 
                  className="w-10 h-10 rounded-full border border-slate-200 bg-slate-100 mb-1 object-cover" 
                  src={matchup.studentB.avatar}
                  referrerPolicy="no-referrer"
                />
                <span className="text-[10px] text-slate-500 font-medium truncate w-full text-center">{matchup.studentB.name}</span>
              </div>
            </div>
          </div>
        ))}
      </main>

      {/* FAB */}
      <button className="fixed bottom-24 right-6 w-12 h-12 rounded-full bg-brand-blue text-white shadow-xl flex items-center justify-center hover:scale-105 active:scale-95 transition-transform z-20">
        <ShieldAlert className="w-6 h-6" />
      </button>

      {/* Bottom Nav */}
      <nav className="sticky bottom-0 bg-white/95 backdrop-blur-md border-t border-slate-200 pb-8 pt-2">
        <div className="flex justify-around items-center px-4">
          <button 
            onClick={() => onNavigate('leaderboard')}
            className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-600 transition-colors"
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
            className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-600 transition-colors"
          >
            <BarChart3 className="w-6 h-6" />
            <span className="text-[10px] font-semibold">Markets</span>
          </button>
          <button 
            onClick={() => onNavigate('profile')}
            className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-600 transition-colors"
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
