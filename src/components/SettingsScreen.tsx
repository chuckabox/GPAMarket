import React from 'react';
import { ChevronLeft, Moon, Sun, Bell, Shield, HelpCircle, Info, User } from 'lucide-react';

interface SettingsScreenProps {
  onBack: () => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

const SettingsScreen: React.FC<SettingsScreenProps> = ({ onBack, isDarkMode, onToggleDarkMode }) => {
  return (
    <div className="flex flex-col min-h-screen bg-[#f6f6f8] dark:bg-dark-bg font-sans max-w-md mx-auto shadow-xl relative overflow-x-hidden transition-colors duration-200">
      {/* Header */}
      <header className="bg-white dark:bg-dark-surface px-4 py-5 border-b border-slate-200 dark:border-slate-800 flex items-center sticky top-0 z-10">
        <button 
          onClick={onBack}
          className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-dark-muted"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="flex-1 text-center text-[15px] font-bold text-primary-text dark:text-dark-text pr-10">Settings</h1>
      </header>

      <main className="flex-1 p-4 space-y-6">
        {/* Appearance */}
        <section>
          <h2 className="text-[10px] font-bold text-slate-400 dark:text-dark-muted uppercase tracking-wider mb-2 px-2">Appearance</h2>
          <div className="bg-white dark:bg-dark-surface rounded-2xl border border-slate-100 dark:border-slate-800 overflow-hidden shadow-sm">
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-brand-blue/10 dark:bg-brand-blue/20 flex items-center justify-center text-brand-blue">
                  {isDarkMode ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
                </div>
                <span className="text-sm font-bold text-primary-text dark:text-dark-text">Dark Mode</span>
              </div>
              <button 
                onClick={onToggleDarkMode}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
                  isDarkMode ? 'bg-brand-blue' : 'bg-slate-200 dark:bg-slate-700'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    isDarkMode ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>
        </section>

        {/* Notifications */}
        <section>
          <h2 className="text-[10px] font-bold text-slate-400 dark:text-dark-muted uppercase tracking-wider mb-2 px-2">General</h2>
          <div className="bg-white dark:bg-dark-surface rounded-2xl border border-slate-100 dark:border-slate-800 divide-y divide-slate-50 dark:divide-slate-800 overflow-hidden shadow-sm">
            <button className="w-full flex items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center text-orange-500">
                  <Bell className="w-4 h-4" />
                </div>
                <span className="text-sm font-bold text-primary-text dark:text-dark-text">Notifications</span>
              </div>
              <span className="text-xs text-slate-400">On</span>
            </button>
            <button className="w-full flex items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-green-50 dark:bg-green-900/20 flex items-center justify-center text-green-500">
                  <Shield className="w-4 h-4" />
                </div>
                <span className="text-sm font-bold text-primary-text dark:text-dark-text">Privacy & Security</span>
              </div>
            </button>
            <button className="w-full flex items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center text-purple-500">
                  <User className="w-4 h-4" />
                </div>
                <span className="text-sm font-bold text-primary-text dark:text-dark-text">Account Preferences</span>
              </div>
            </button>
          </div>
        </section>

        {/* Support */}
        <section>
          <h2 className="text-[10px] font-bold text-slate-400 dark:text-dark-muted uppercase tracking-wider mb-2 px-2">Support</h2>
          <div className="bg-white dark:bg-dark-surface rounded-2xl border border-slate-100 dark:border-slate-800 divide-y divide-slate-50 dark:divide-slate-800 overflow-hidden shadow-sm">
            <button className="w-full flex items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-500">
                  <HelpCircle className="w-4 h-4" />
                </div>
                <span className="text-sm font-bold text-primary-text dark:text-dark-text">Help Center</span>
              </div>
            </button>
            <button className="w-full flex items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500">
                  <Info className="w-4 h-4" />
                </div>
                <span className="text-sm font-bold text-primary-text dark:text-dark-text">About GPAMarket</span>
              </div>
            </button>
          </div>
        </section>

        <div className="text-center pt-4">
          <p className="text-[10px] text-slate-400 dark:text-dark-muted font-bold uppercase tracking-widest">Version 1.0.4 (Beta)</p>
        </div>
      </main>
    </div>
  );
};

export default SettingsScreen;
