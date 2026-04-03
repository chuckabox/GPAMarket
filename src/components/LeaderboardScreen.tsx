import React from 'react';
import { Trophy, BarChart3, User, Swords, Medal } from 'lucide-react';

interface LeaderboardScreenProps {
  onNavigate: (screen: 'markets' | 'matchups' | 'profile' | 'leaderboard') => void;
}

const MOCK_LEADERBOARD = [
  {
    id: '1',
    name: 'Elouise C.',
    avatar: 'https://media.licdn.com/dms/image/v2/D5603AQExPpM0fJiaRw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1684824595687?e=1776902400&v=beta&t=F8Cf_7WvhCbiS9iAe1z4KWj9L5ly9OX5jaHzd7xJgEI',
    wins: 52,
    losses: 4,
  },
  {
    id: '2',
    name: 'Paul V.',
    avatar: 'https://media.licdn.com/dms/image/v2/C4E03AQEtk_sHGXqRYA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1609634162745?e=1776902400&v=beta&t=cZGCd1FwFfONyE8LnHjOoUfyM9HKM4deuqSxLcr4xbc',
    wins: 52,
    losses: 4,
  },
  {
    id: '3',
    name: 'Felix H.',
    avatar: 'https://media.licdn.com/dms/image/v2/D4D03AQGwtWIfkdI_6A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1714480211760?e=1776902400&v=beta&t=-nTnPCrfx_KoYwh-MCqmhED53i6fG8SaQtkjM170IiU',
    wins: 52,
    losses: 4,
  },
  {
    id: '4',
    name: 'Andrej K.',
    avatar: 'https://media.licdn.com/dms/image/v2/C5603AQGUrXhzYpFNPA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1653416381156?e=1774483200&v=beta&t=T29FYX5SPPetCRrSwCewDTe1VEgou2PtJiHKf6oMBnM',
    wins: 52,
    losses: 4,
  },
  {
    id: '5',
    name: 'Adin S.',
    avatar: 'https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1170&auto=format&fit=crop',
    wins: 41,
    losses: 12,
  },
  {
    id: '6',
    name: 'Harper M.', // Added Harper back in
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100&h=100',
    wins: 38,
    losses: 14,
  },
  {
    id: '7',
    name: 'Peter M.',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=100&h=100',
    wins: 35,
    losses: 15,
  },
  {
    id: '8',
    name: 'Brendan C.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100&h=100',
    wins: 31,
    losses: 14,
  },
  {
    id: '9',
    name: 'Annie H.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100&h=100',
    wins: 28,
    losses: 19,
  }
];

const LeaderboardScreen: React.FC<LeaderboardScreenProps> = ({ onNavigate }) => {
  const sortedLeaderboard = [...MOCK_LEADERBOARD].sort((a, b) => {
    const winRateA = a.wins / (a.wins + a.losses);
    const winRateB = b.wins / (b.wins + b.losses);
    if (winRateB === winRateA) return parseInt(a.id) - parseInt(b.id);
    return winRateB - winRateA;
  });

  return (
    <div className="flex flex-col h-screen bg-[#f6f6f8] dark:bg-dark-bg font-sans max-w-md mx-auto shadow-xl relative overflow-hidden transition-colors duration-200">
      <header className="shrink-0 z-10 bg-white/80 dark:bg-dark-surface/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-brand-blue flex items-center justify-center text-white">
              <Trophy className="w-5 h-5" />
            </div>
            <h1 className="text-lg font-semibold tracking-tight text-primary-text dark:text-dark-text">Global Leaderboard</h1>
          </div>
        </div>

        <div className="px-4 pb-4">
          <div className="bg-brand-blue/5 dark:bg-brand-blue/10 rounded-2xl p-4 flex justify-between items-center border border-brand-blue/10 dark:border-brand-blue/20">
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-brand-blue uppercase tracking-wider">Your Rank</span>
              <span className="text-2xl font-black text-primary-text dark:text-dark-text">#4</span>
            </div>
            <div className="h-8 w-px bg-brand-blue/20" />
            <div className="flex flex-col text-right">
              <span className="text-[10px] font-bold text-brand-blue uppercase tracking-wider">Total Games</span>
              <span className="text-2xl font-black text-primary-text dark:text-dark-text">40</span>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto no-scrollbar divide-y divide-slate-100 dark:divide-slate-800 bg-white dark:bg-dark-surface">
        <div className="sticky top-0 z-20 px-4 py-2 bg-slate-50 dark:bg-dark-bg flex justify-between items-center border-b border-slate-100 dark:border-slate-800">
          <span className="text-[10px] font-bold text-slate-400 dark:text-dark-muted uppercase tracking-wider">Student</span>
          <span className="text-[10px] font-bold text-slate-400 dark:text-dark-muted uppercase tracking-wider">Total Games / Record</span>
        </div>

        {sortedLeaderboard.map((user, index) => (
          <div key={user.id} className="p-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-8 flex justify-center">
                {index === 0 ? <Medal className="w-6 h-6 text-yellow-500" /> :
                  index === 1 ? <Medal className="w-6 h-6 text-slate-300" /> :
                    index === 2 ? <Medal className="w-6 h-6 text-amber-600" /> :
                      <span className="text-sm font-bold text-slate-400">#{index + 1}</span>}
              </div>
              <img
                src={user.avatar}
                alt={user.name}
                className="w-10 h-10 rounded-full border border-slate-200 object-cover"
                referrerPolicy="no-referrer"
              />
              <span className="text-sm font-bold text-primary-text dark:text-dark-text">{user.name}</span>
            </div>
            <div className="text-right">
              <span className="text-sm font-black text-primary-text dark:text-dark-text">{user.wins + user.losses}</span>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">{user.wins}W - {user.losses}L</p>
            </div>
          </div>
        ))}
      </main>

      <nav className="shrink-0 bg-white/95 dark:bg-dark-surface/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 py-5">
        <div className="flex justify-around items-center px-4">
          <button onClick={() => onNavigate('leaderboard')} className="flex flex-col items-center gap-1 text-brand-blue">
            <Trophy className="w-6 h-6 fill-current" />
            <span className="text-[10px] font-semibold">Leaderboard</span>
          </button>
          <button onClick={() => onNavigate('matchups')} className="flex flex-col items-center gap-1 text-slate-400 dark:text-dark-muted hover:text-slate-600 dark:hover:text-dark-text transition-colors">
            <Swords className="w-6 h-6" />
            <span className="text-[10px] font-semibold">Duels</span>
          </button>
          <button onClick={() => onNavigate('markets')} className="flex flex-col items-center gap-1 text-slate-400 dark:text-dark-muted hover:text-slate-600 dark:hover:text-dark-text transition-colors">
            <BarChart3 className="w-6 h-6" />
            <span className="text-[10px] font-semibold">Markets</span>
          </button>
          <button onClick={() => onNavigate('profile')} className="flex flex-col items-center gap-1 text-slate-400 dark:text-dark-muted hover:text-slate-600 dark:hover:text-dark-text transition-colors">
            <User className="w-6 h-6" />
            <span className="text-[10px] font-semibold">Profile</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default LeaderboardScreen;