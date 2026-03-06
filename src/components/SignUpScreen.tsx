import React, { useState } from 'react';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react';

interface SignUpScreenProps {
  onNext: () => void;
  onBack: () => void;
}

const SignUpScreen: React.FC<SignUpScreenProps> = ({ onNext, onBack }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-dark-bg font-sans max-w-md mx-auto shadow-xl transition-colors duration-200">
      {/* Top Nav */}
      <div className="flex items-center px-4 py-4 border-b border-slate-100 dark:border-slate-800">
        <button 
          onClick={onBack}
          className="p-1 rounded hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <ArrowLeft className="w-6 h-6 text-primary-text dark:text-dark-text" />
        </button>
        <h2 className="flex-1 text-center text-sm font-semibold text-primary-text dark:text-dark-text">Sign Up</h2>
        <div className="w-8" />
      </div>

      {/* Content */}
      <div className="flex-1 px-6 pt-10 w-full text-center">
        <h1 className="text-3xl font-bold tracking-tight text-primary-text dark:text-dark-text mb-2">Create your account</h1>
        {/* Updated subtitle for betting relevance */}
        <p className="text-sm text-slate-500 dark:text-dark-muted mb-8">Start trading on academic outcomes today.</p>

        <form className="space-y-5 text-left" onSubmit={(e) => { e.preventDefault(); onNext(); }}>
          <div className="space-y-2">
            <label className="text-sm font-medium text-primary-text dark:text-dark-text ml-4">Email Address</label>
            <input 
              type="email" 
              placeholder="name@example.com"
              className="w-full px-5 py-3 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-dark-surface focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all text-sm text-primary-text dark:text-dark-text"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-primary-text dark:text-dark-text ml-4">Full Name</label>
            <input 
              type="text" 
              placeholder="Jane Doe"
              className="w-full px-5 py-3 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-dark-surface focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all text-sm text-primary-text dark:text-dark-text"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-primary-text dark:text-dark-text ml-4">Password</label>
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="••••••••"
                className="w-full px-5 py-3 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-dark-surface focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all text-sm pr-12 text-primary-text dark:text-dark-text"
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-dark-muted hover:text-slate-600 dark:hover:text-dark-text"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <button 
            type="submit"
            className="w-full bg-brand-blue hover:opacity-90 text-white font-semibold py-3.5 rounded-full transition-all hover:scale-[1.02] active:scale-[0.98] text-sm shadow-lg shadow-brand-blue/20 mt-4"
          >
            Create account
          </button>
        </form>

        {/* Moved Login higher and adjusted spacing */}
        <div className="mt-8 text-center">
          <p className="text-sm text-slate-600 dark:text-dark-muted">
            Already have an account? <a href="#" className="text-brand-blue font-semibold hover:underline">Log in</a>
          </p>
        </div>

        <div className="mt-10 text-center pb-8">
          <p className="text-[11px] text-slate-400 dark:text-dark-muted leading-relaxed px-4">
            By creating an account, you agree to our <br/>
            <a href="#" className="text-brand-blue hover:underline font-medium">Terms of Service</a> and <a href="#" className="text-brand-blue hover:underline font-medium">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpScreen;