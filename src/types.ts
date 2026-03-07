import React from 'react';

export type Screen = 
  | 'home' 
  | 'signup' 
  | 'transcript_upload' 
  | 'markets' 
  | 'matchups' 
  | 'duel_wager' 
  | 'bet' 
  | 'leaderboard' 
  | 'profile' 
  | 'settings' 
  | 'courses';

export interface Market {
  id: string;
  course: string;
  targetGrade: string;
  examType: string;
  participants: number;
  timeLeft: string;
  status: 'ACTIVE' | 'CLOSING' | 'PAUSED';
  studentName: string; // Changed from odds
  icon: React.ReactNode;
}