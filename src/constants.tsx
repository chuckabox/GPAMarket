import React from 'react';
import { Terminal, FlaskConical, History, Calculator, Brain } from 'lucide-react';
import { Market } from './types';

export const MOCK_MARKETS: Market[] = [
  {
    id: '1',
    course: 'CSSE1001 - Intro to Software Engineering',
    targetGrade: '7.0',
    examType: 'Final Exam',
    participants: 128,
    timeLeft: '2d left',
    status: 'ACTIVE',
    odds: '1.25x',
    icon: <Terminal className="w-4 h-4 text-brand-blue" />
  },
  {
    id: '2',
    course: 'CHEM 1001 - Principles of Chemistry',
    targetGrade: '6.5',
    examType: 'Lab Component',
    participants: 84,
    timeLeft: 'High Vol',
    status: 'CLOSING',
    odds: '3.40x',
    icon: <FlaskConical className="w-4 h-4 text-brand-blue" />
  },
  {
    id: '3',
    course: 'HIST 210 - Modern Civilizations',
    targetGrade: '7.0',
    examType: 'Essay Submission',
    participants: 42,
    timeLeft: '5d left',
    status: 'ACTIVE',
    odds: '1.95x',
    icon: <History className="w-4 h-4 text-brand-blue" />
  },
  {
    id: '4',
    course: 'MATH 302 - Abstract Algebra',
    targetGrade: '6.0',
    examType: 'Final Project',
    participants: 215,
    timeLeft: '12h left',
    status: 'ACTIVE',
    odds: '2.10x',
    icon: <Calculator className="w-4 h-4 text-brand-blue" />
  },
  {
    id: '5',
    course: 'PSYC 101 - Intro to Psychology',
    targetGrade: '7.0',
    examType: 'Midterm 2',
    participants: 312,
    timeLeft: 'Locked',
    status: 'PAUSED',
    odds: '1.15x',
    icon: <Brain className="w-4 h-4 text-brand-blue" />
  }
];
