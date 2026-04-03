import React, { useState } from 'react';
import { Search, Filter, Swords, Trophy, BarChart3, User, Plus, ShieldAlert } from 'lucide-react';

interface MatchupsScreenProps {
  onNavigate: (screen: 'markets' | 'matchups' | 'profile' | 'leaderboard') => void;
  onSelectMatchup: (matchup: any) => void;
}

const MOCK_MATCHUPS = [
  {
    id: '1',
    studentA: { name: 'Felix H.', avatar: 'https://media.licdn.com/dms/image/v2/D4D03AQGwtWIfkdI_6A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1714480211760?e=1776902400&v=beta&t=-nTnPCrfx_KoYwh-MCqmhED53i6fG8SaQtkjM170IiU', gpa: '6.75' },
    studentB: { name: 'Elouise C.', avatar: 'https://media.licdn.com/dms/image/v2/D5603AQExPpM0fJiaRw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1684824595687?e=1776902400&v=beta&t=F8Cf_7WvhCbiS9iAe1z4KWj9L5ly9OX5jaHzd7xJgEI', gpa: '6.80' },
    course: 'CSSE1001',
    type: 'Final Exam',
    timeLeft: '5h 12m',
    stake: '$25.00',
    reactions: { fire: 4, rocket: 15, laugh: 8, skull: 2 },
    split: 65,
    votesA: 42,
    votesB: 23
  },
  {
    id: '2',
    studentA: { name: 'Paul V.', avatar: 'https://media.licdn.com/dms/image/v2/C4E03AQEtk_sHGXqRYA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1609634162745?e=1774483200&v=beta&t=xoTTBDnSke7AQCZpPV40j_XnZLp-VXvRiBTNESuHTzI', gpa: '6.67' },
    studentB: { name: 'Adin S.', avatar: 'https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', gpa: '6.12' },
    course: 'MATH1051',
    type: 'Assignment 2',
    timeLeft: '2d 14h',
    stake: '$50.00',
    reactions: { fire: 12, rocket: 8, laugh: 5, skull: 12 },
    split: 42,
    votesA: 18,
    votesB: 25
  },
  {
    id: '3',
    studentA: { name: 'Brendan C.', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100&h=100', gpa: '6.45' },
    studentB: { name: 'Peter M.', avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=100&h=100', gpa: '6.75' },
    course: 'ENGG1100',
    type: 'Mid-semester',
    timeLeft: '1d 08h',
    stake: '$100.00',
    reactions: { fire: 22, rocket: 3, laugh: 14, skull: 1 },
    split: 50,
    votesA: 10,
    votesB: 10
  },
  {
    id: '4',
    studentA: { name: 'Annie H.', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100&h=100', gpa: '6.92' },
    studentB: { name: 'Harper M.', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100&h=100', gpa: '6.88' },
    course: 'COMP3400',
    type: 'Final Exam',
    timeLeft: '12h 45m',
    stake: '$15.00',
    reactions: { fire: 7, rocket: 2, laugh: 1, skull: 0 },
    split: 78,
    votesA: 31,
    votesB: 9
  }
];

const ReactionButton = ({ emoji, initialCount }: { emoji: string; initialCount: number }) => {
  const [count, setCount] = useState(initialCount);
  const [isActive, setIsActive] = useState(false);

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsActive(!isActive);
    setCount(prev => isActive ? prev - 1 : prev + 1);
  };

  return (
    <button
      onClick={handleToggle}
      className={`flex items-center gap-1 px-1.5 py-0.5 rounded-full border transition-all ${isActive ? 'bg-brand-blue/10 border-brand-blue text-brand-blue' : 'bg-slate-100 dark:bg-slate-800 border-transparent'
        }`}
    >
      <span className="text-[10px]">{emoji}</span>
      <span className="text-[9px] font-bold">{count}</span>
    </button>
  );
};

const MatchupsScreen: React.FC<MatchupsScreenProps> = ({ onNavigate, onSelectMatchup }) => {
  const [activeTab, setActiveTab] = useState<'active' | 'my_duels' | 'invites'>('active');

  return (
    <div className="flex flex-col h-screen bg-[#f6f6f8] dark:bg-dark-bg font-sans max-w-md mx-auto shadow-xl overflow-hidden transition-colors duration-200">
      <header className="sticky top-0 z-10 bg-white/80 dark:bg-dark-surface/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center justify-between px-4 pt-3 pb-1">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-brand-blue flex items-center justify-center text-white">
              <Swords className="w-4 h-4" />
            </div>
            <h1 className="text-md font-semibold tracking-tight text-primary-text dark:text-dark-text">Duels</h1>
          </div>
          <div className="flex items-center gap-1">
            <button className="p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"><Search className="w-4 h-4 text-slate-400" /></button>
            <button className="p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"><Filter className="w-4 h-4 text-slate-400" /></button>
          </div>
        </div>

        <div className="px-4">
          <div className="flex gap-5 overflow-x-auto no-scrollbar">
            {[{ id: 'active', label: 'Active' }, { id: 'my_duels', label: 'My Duels' }, { id: 'invites', label: 'Invites' }].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-1.5 text-xs font-bold whitespace-nowrap border-b-2 transition-all ${activeTab === tab.id ? 'border-brand-blue text-brand-blue' : 'border-transparent text-slate-500 dark:text-dark-muted hover:text-slate-700'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto bg-white dark:bg-dark-surface divide-y divide-slate-50 dark:divide-slate-800 no-scrollbar">
        {activeTab === 'active' ? (
          MOCK_MATCHUPS.map((matchup) => (
            <div
              key={matchup.id}
              onClick={() => onSelectMatchup(matchup)}
              className="p-3 py-4 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-3">
                {/* Student A */}
                <div className="flex flex-col items-center w-20">
                  <img src={matchup.studentA.avatar} className="w-10 h-10 rounded-full border border-slate-100 dark:border-slate-700 object-cover group-hover:border-brand-blue transition-all" />
                  <span className="text-[9px] text-slate-500 dark:text-dark-muted mt-0.5 font-medium text-center truncate w-full">{matchup.studentA.name.split(' ')[0]}</span>
                  <span className="text-[8px] px-1 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 font-bold mt-1 tracking-tighter">GPA: {matchup.studentA.gpa}</span>
                </div>

                {/* Match Info */}
                <div className="flex-1 text-center px-1">
                  <h3 className="font-bold text-xs text-primary-text dark:text-dark-text">{matchup.course}</h3>
                  <div className="inline-flex px-1.5 py-0.5 bg-slate-50 dark:bg-slate-800 rounded text-[8px] font-bold text-slate-400 uppercase leading-none">{matchup.type}</div>
                  <div className="mt-1 flex flex-col leading-none">
                    <span className="text-[9px] text-brand-blue font-bold">Stake: {matchup.stake}</span>
                  </div>
                </div>

                {/* Student B */}
                <div className="flex flex-col items-center w-20">
                  <img src={matchup.studentB.avatar} className="w-10 h-10 rounded-full border border-slate-100 dark:border-slate-700 object-cover group-hover:border-brand-blue transition-all" />
                  <span className="text-[9px] text-slate-500 dark:text-dark-muted mt-0.5 font-medium text-center truncate w-full">{matchup.studentB.name.split(' ')[0]}</span>
                  <span className="text-[8px] px-1 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 font-bold mt-1 tracking-tighter">GPA: {matchup.studentB.gpa}</span>
                </div>
              </div>

              {/* Perfectly Aligned Split Bar */}
              <div className="mb-4 px-2">
                <div className="relative h-7 flex items-end">
                  <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden flex relative">
                    <div style={{ width: `${matchup.split}%`, backgroundColor: '#048BA8' }} className="h-full transition-all" />
                    <div style={{ width: `${100 - matchup.split}%`, backgroundColor: '#F18F01' }} className="h-full transition-all" />
                  </div>

                  <div
                    className="absolute bottom-0 flex flex-col items-center pointer-events-none"
                    style={{ left: `${matchup.split}%`, transform: 'translateX(-50%)' }}
                  >
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className="text-[8px] font-black text-[#048BA8]">{matchup.votesA}</span>
                      <span className="text-[8px] font-black text-[#F18F01]">{matchup.votesB}</span>
                    </div>
                    <div className="w-0.5 h-2.5 bg-slate-400/50 dark:bg-slate-500 rounded-full" />
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                <ReactionButton emoji="🔥" initialCount={matchup.reactions.fire} />
                <ReactionButton emoji="🚀" initialCount={matchup.reactions.rocket} />
                <ReactionButton emoji="😂" initialCount={matchup.reactions.laugh} />
                <ReactionButton emoji="💀" initialCount={matchup.reactions.skull} />
                <div className="flex items-center justify-center w-5 h-5 rounded-full border border-dashed border-slate-200 dark:border-slate-700 text-slate-300">
                  <Plus className="w-3 h-3" />
                </div>
                <span className="ml-auto text-[8px] text-slate-400 italic">{matchup.timeLeft} left</span>
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-slate-300 py-10">
            <p className="text-xs">No records found.</p>
          </div>
        )}
      </main>

      <button className="fixed bottom-20 right-4 w-10 h-10 rounded-full bg-brand-blue text-white shadow-lg flex items-center justify-center active:scale-95 transition-transform z-20">
        <ShieldAlert className="w-5 h-5" />
      </button>

      <nav className="sticky bottom-0 bg-white/95 dark:bg-dark-surface/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 py-3">
        <div className="flex justify-around items-center px-4">
          <button onClick={() => onNavigate('leaderboard')} className="flex flex-col items-center gap-0.5 text-slate-400"><Trophy className="w-5 h-5" /><span className="text-[9px] font-semibold">Rank</span></button>
          <button className="flex flex-col items-center gap-0.5 text-brand-blue"><Swords className="w-5 h-5 fill-current" /><span className="text-[9px] font-semibold">Duels</span></button>
          <button onClick={() => onNavigate('markets')} className="flex flex-col items-center gap-0.5 text-slate-400"><BarChart3 className="w-5 h-5" /><span className="text-[9px] font-semibold">Markets</span></button>
          <button onClick={() => onNavigate('profile')} className="flex flex-col items-center gap-0.5 text-slate-400"><User className="w-5 h-5" /><span className="text-[9px] font-semibold">Profile</span></button>
        </div>
      </nav>
    </div>
  );
};

export default MatchupsScreen;