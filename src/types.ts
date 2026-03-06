import React from 'react';

export type Screen = 'home' | 'signup' | 'markets' | 'bet' | 'matchups';

export interface Market {
  id: string;
  course: string;
  targetGrade: string;
  examType: string;
  participants: number;
  timeLeft: string;
  status: 'ACTIVE' | 'CLOSING' | 'PAUSED';
  odds: string;
  icon: React.ReactNode;
}
