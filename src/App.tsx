import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Screen } from './types';
import HomeScreen from './components/HomeScreen';
import SignUpScreen from './components/SignUpScreen';
import MarketsScreen from './components/MarketsScreen';
import PlaceBetScreen from './components/PlaceBetScreen';
import MatchupsScreen from './components/MatchupsScreen';
import LeaderboardScreen from './components/LeaderboardScreen';
import ProfileScreen from './components/ProfileScreen';
import SettingsScreen from './components/SettingsScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  const [isDarkMode, setIsDarkMode] = useState(false);

  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const handleNavigate = (screen: 'markets' | 'matchups' | 'profile' | 'leaderboard' | 'settings') => {
    setCurrentScreen(screen);
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentScreen}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.2 }}
        >
          {currentScreen === 'home' && (
            <HomeScreen 
              onGetStarted={() => setCurrentScreen('signup')} 
            />
          )}
          {currentScreen === 'signup' && (
            <SignUpScreen 
              onNext={() => setCurrentScreen('markets')} 
              onBack={() => setCurrentScreen('home')}
            />
          )}
          {currentScreen === 'markets' && (
            <MarketsScreen 
              onSelectMarket={() => setCurrentScreen('bet')} 
              onNavigate={handleNavigate}
            />
          )}
          {currentScreen === 'matchups' && (
            <MatchupsScreen 
              onNavigate={handleNavigate}
            />
          )}
          {currentScreen === 'leaderboard' && (
            <LeaderboardScreen 
              onNavigate={handleNavigate}
            />
          )}
          {currentScreen === 'profile' && (
            <ProfileScreen 
              onNavigate={handleNavigate}
            />
          )}
          {currentScreen === 'settings' && (
            <SettingsScreen 
              onBack={() => setCurrentScreen('profile')}
              isDarkMode={isDarkMode}
              onToggleDarkMode={() => setIsDarkMode(!isDarkMode)}
            />
          )}
          {currentScreen === 'bet' && (
            <PlaceBetScreen onBack={() => setCurrentScreen('markets')} />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
