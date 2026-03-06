import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Screen } from './types';
import HomeScreen from './components/HomeScreen';
import SignUpScreen from './components/SignUpScreen';
import MarketsScreen from './components/MarketsScreen';
import PlaceBetScreen from './components/PlaceBetScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');

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
              onSignUp={() => setCurrentScreen('signup')} 
              onLogIn={() => setCurrentScreen('markets')} 
            />
          )}
          {currentScreen === 'signup' && (
            <SignUpScreen 
              onNext={() => setCurrentScreen('markets')} 
              onBack={() => setCurrentScreen('home')}
            />
          )}
          {currentScreen === 'markets' && (
            <MarketsScreen onSelectMarket={() => setCurrentScreen('bet')} />
          )}
          {currentScreen === 'bet' && (
            <PlaceBetScreen onBack={() => setCurrentScreen('markets')} />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
