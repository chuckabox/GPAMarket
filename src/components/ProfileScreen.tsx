import React from 'react';
import { Trophy, BarChart3, User, Swords, Settings, LogOut, ChevronRight, BookOpen, Bell } from 'lucide-react';

interface ProfileScreenProps {
  onNavigate: (screen: 'markets' | 'matchups' | 'profile' | 'leaderboard' | 'settings' | 'courses') => void;
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col min-h-screen bg-[#f6f6f8] dark:bg-dark-bg font-sans max-w-md mx-auto shadow-xl relative overflow-x-hidden transition-colors duration-200">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white/80 dark:bg-dark-surface/80 backdrop-blur-md border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-brand-blue flex items-center justify-center text-white">
              <User className="w-5 h-5" />
            </div>
            <h1 className="text-lg font-semibold tracking-tight text-primary-text dark:text-dark-text">My Profile</h1>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              <Bell className="w-5 h-5 text-slate-600 dark:text-dark-muted" />
            </button>
            <button 
              onClick={() => onNavigate('settings')}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <Settings className="w-5 h-5 text-slate-600 dark:text-dark-muted" />
            </button>
          </div>
        </div>
      </header>

      <div className="bg-white dark:bg-dark-surface px-6 py-8 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 rounded-full border-4 border-brand-blue/10 p-1">
            <img 
              src="https://media.licdn.com/dms/image/v2/C5603AQGUrXhzYpFNPA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1653416381156?e=1774483200&v=beta&t=T29FYX5SPPetCRrSwCewDTe1VEgou2PtJiHKf6oMBnM" 
              alt="Profile" 
              className="w-full h-full rounded-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-col">
            <h2 className="text-xl font-bold text-primary-text dark:text-dark-text">Andrej Karpathy</h2>
            <p className="text-sm text-slate-500 dark:text-dark-muted font-medium">B. Computer Science</p>
            <div className="mt-2 flex items-center gap-2">
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-brand-blue text-white uppercase tracking-wider">GPA 6.25</span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-dark-muted uppercase tracking-wider">2nd Year</span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">Verified</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-3 p-4">
        <div className="bg-white dark:bg-dark-surface p-4 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
          <span className="text-[10px] font-bold text-slate-400 dark:text-dark-muted uppercase tracking-wider">Total Winnings</span>
          <p className="text-xl font-black text-primary-text dark:text-dark-text mt-1">$3,400.67</p>
        </div>
        <div className="bg-white dark:bg-dark-surface p-4 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
          <span className="text-[10px] font-bold text-slate-400 dark:text-dark-muted uppercase tracking-wider">Total Games</span>
          <p className="text-xl font-black text-primary-text dark:text-dark-text mt-1">56</p>
        </div>
      </div>

      {/* Menu */}
      <main className="flex-1 px-4 pb-24">
        <div className="bg-white dark:bg-dark-surface rounded-2xl border border-slate-100 dark:border-slate-800 divide-y divide-slate-50 dark:divide-slate-800 overflow-hidden shadow-sm">
          <button 
            onClick={() => onNavigate('courses')}
            className="w-full flex items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-brand-blue/10 dark:bg-brand-blue/20 flex items-center justify-center text-brand-blue">
                <BookOpen className="w-4 h-4" />
              </div>
              <span className="text-sm font-bold text-primary-text dark:text-dark-text">Courses Completed</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold text-slate-400 dark:text-dark-muted uppercase tracking-wider">8 Courses</span>
              <ChevronRight className="w-4 h-4 text-slate-300 dark:text-slate-600" />
            </div>
          </button>
          <button className="w-full flex items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-brand-blue/10 dark:bg-brand-blue/20 flex items-center justify-center text-brand-blue">
                <BarChart3 className="w-4 h-4" />
              </div>
              <span className="text-sm font-bold text-primary-text dark:text-dark-text">Betting History</span>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-300 dark:text-slate-600" />
          </button>
          <button className="w-full flex items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-brand-blue/10 dark:bg-brand-blue/20 flex items-center justify-center text-brand-blue">
                <Swords className="w-4 h-4" />
              </div>
              <span className="text-sm font-bold text-primary-text dark:text-dark-text">Duel Statistics</span>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-300 dark:text-slate-600" />
          </button>
          <button className="w-full flex items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-red-500">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-red-50 dark:bg-red-900/20 flex items-center justify-center">
                <LogOut className="w-4 h-4" />
              </div>
              <span className="text-sm font-bold">Log Out</span>
            </div>
          </button>
        </div>
      </main>

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
            className="flex flex-col items-center gap-1 text-slate-400 dark:text-dark-muted hover:text-slate-600 dark:hover:text-dark-text transition-colors"
          >
            <Swords className="w-6 h-6" />
            <span className="text-[10px] font-semibold">Duels</span>
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
            className="flex flex-col items-center gap-1 text-brand-blue"
          >
            <User className="w-6 h-6 fill-current" />
            <span className="text-[10px] font-semibold">Profile</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default ProfileScreen;
