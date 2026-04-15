import React from 'react';
import { 
  Code2,      // For Functional/Logic Programming
  Terminal,   // For Software Engineering/Intro
  Cpu,        // For Computer Systems (Hardware/Assembly)
  Layers,     // For Systems Principles (OS/Kernel)
  HardHat,    // For Professional Engineering
  User,
  Plus 
} from 'lucide-react';
import { Market } from './types';

export const MOCK_MARKETS: Market[] = [
  {
    id: '1',
    course: 'COMP3400 (Functional and Logic Programming)',
    targetGrade: '7.0',
    examType: 'Final Exam',
    participants: 128,
    timeLeft: '2d left',
    status: 'ACTIVE',
    studentName: 'Felix K.',
    icon: <Code2 className="w-4 h-4 text-brand-blue" />
  },
  {
    id: '2',
    course: 'CSSE1001 (Introduction to Software Engineering)',
    targetGrade: '6.5',
    examType: 'Lab Component',
    participants: 84,
    timeLeft: '1h left',
    status: 'CLOSING',
    studentName: 'Paul V.',
    icon: <Terminal className="w-4 h-4 text-brand-blue" />
  },
  {
    id: '3',
    course: 'CSSE2010 (Introduction to Computer Systems)',
    targetGrade: '7.0',
    examType: 'Essay Submission',
    participants: 42,
    timeLeft: '5d left',
    status: 'ACTIVE',
    studentName: 'Elouise C.',
    icon: <Cpu className="w-4 h-4 text-brand-blue" />
  },
  {
    id: '4',
    course: 'CSSE2310 (Computer Systems Principles)',
    targetGrade: '6.0',
    examType: 'Final Project',
    participants: 215,
    timeLeft: '3d left',
    status: 'ACTIVE',
    studentName: 'Adin S.',
    icon: <Layers className="w-4 h-4 text-brand-blue" />
  },
  {
    id: '5',
    course: 'ENGG1100 (Professional Engineering)',
    targetGrade: '7.0',
    examType: 'Midterm 2',
    participants: 312,
    timeLeft: '5h left',
    status: 'CLOSING',
    studentName: 'Brendan C.',
    icon: <HardHat className="w-4 h-4 text-brand-blue" />
  }
];