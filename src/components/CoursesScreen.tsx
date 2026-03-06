import React from 'react';
import { ArrowLeft, BookOpen, Search, Filter } from 'lucide-react';

interface Course {
  id: string;
  code: string;
  name: string;
  gpa: string;
  semester: string;
}

const MOCK_COURSES: Course[] = [
  { id: '1', code: 'COMP3400', name: 'Functional and Logic Programming', gpa: '7.00', semester: 'Sem 2, 2023' },
  { id: '2', code: 'CSSE1001', name: 'Introduction to Software Engineering', gpa: '7.00', semester: 'Sem 1, 2023' },
  { id: '3', code: 'CSSE2010', name: 'Introduction to Computer Systems', gpa: '6.00', semester: 'Sem 1, 2024' },
  { id: '4', code: 'CSSE2310', name: 'Computer Systems', gpa: '6.00', semester: 'Sem 2, 2023' },
  { id: '5', code: 'ENGG1100', name: 'Professional Engineering', gpa: '7.00', semester: 'Sem 1, 2023' },
  { id: '6', code: 'MATH1051', name: 'Calculus & Linear Algebra', gpa: '6.00', semester: 'Sem 1, 2023' },
  { id: '7', code: 'MATH1052', name: 'Multivariate Calculus & ODEs', gpa: '6.00', semester: 'Sem 1, 2024' },
  { id: '8', code: 'MATH2001', name: 'Calculus & Linear Algebra II', gpa: '5.00', semester: 'Sem 2, 2023' },
];

interface CoursesScreenProps {
  onBack: () => void;
}

const CoursesScreen: React.FC<CoursesScreenProps> = ({ onBack }) => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-dark-bg font-sans max-w-md mx-auto shadow-xl transition-colors duration-200">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white/80 dark:bg-dark-surface/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center justify-between px-4 py-4">
          <button 
            onClick={onBack}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-primary-text dark:text-dark-text" />
          </button>
          <h1 className="text-lg font-semibold tracking-tight text-primary-text dark:text-dark-text">Completed Courses</h1>
          <div className="w-10" />
        </div>

        {/* Search & Filter */}
        <div className="px-4 pb-4 flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search courses..."
              className="w-full pl-9 pr-4 py-2 bg-slate-100 dark:bg-slate-800 border-none rounded-full text-xs focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
            />
          </div>
          <button className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500">
            <Filter className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Course List */}
      <main className="flex-1 p-4 space-y-3">
        {MOCK_COURSES.map((course) => (
          <div 
            key={course.id}
            className="bg-white dark:bg-dark-surface p-4 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm flex items-center justify-between group hover:border-brand-blue/30 transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-brand-blue/10 dark:bg-brand-blue/20 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors">
                <BookOpen className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold text-brand-blue uppercase tracking-wider">{course.code}</span>
                  <span className="text-[10px] font-medium text-slate-400 dark:text-dark-muted">• {course.semester}</span>
                </div>
                <h3 className="text-sm font-bold text-primary-text dark:text-dark-text leading-tight mt-0.5">{course.name}</h3>
              </div>
            </div>
            <div className="text-right">
              <span className="text-[10px] font-bold text-slate-400 dark:text-dark-muted uppercase tracking-wider block mb-0.5">GPA</span>
              <span className="text-lg font-black text-primary-text dark:text-dark-text leading-none">{course.gpa}</span>
            </div>
          </div>
        ))}
      </main>

      {/* Footer Stats */}
      <footer className="sticky bottom-0 bg-white/95 dark:bg-dark-surface/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 p-6">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-slate-400 dark:text-dark-muted uppercase tracking-wider">Cumulative GPA</span>
            <span className="text-2xl font-black text-brand-blue">6.25</span>
          </div>
          <div className="text-right">
            <span className="text-[10px] font-bold text-slate-400 dark:text-dark-muted uppercase tracking-wider block mb-1">Total Credits</span>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-700 dark:text-dark-text">64 Units</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CoursesScreen;
