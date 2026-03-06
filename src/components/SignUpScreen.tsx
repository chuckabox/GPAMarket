import React, { useState } from 'react';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react';

interface SignUpScreenProps {
  onNext: () => void;
  onBack: () => void;
}

const SignUpScreen: React.FC<SignUpScreenProps> = ({ onNext, onBack }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans max-w-md mx-auto shadow-xl">
      {/* Top Nav */}
      <div className="flex items-center px-4 py-4 border-b border-slate-100">
        <button 
          onClick={onBack}
          className="p-1 rounded hover:bg-slate-100 transition-colors"
        >
          <ArrowLeft className="w-6 h-6 text-slate-900" />
        </button>
        <h2 className="flex-1 text-center text-sm font-semibold text-slate-900">Sign Up</h2>
        <div className="w-8" />
      </div>

      {/* Content */}
      <div className="flex-1 px-6 pt-10 w-full">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 mb-2">Create your account</h1>
        <p className="text-sm text-slate-500 mb-10">Join the academic performance marketplace.</p>

        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onNext(); }}>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-900">University Email</label>
            <input 
              type="email" 
              placeholder="name@university.edu"
              className="w-full px-3 py-3 rounded border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all text-sm"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-900">Full Name</label>
            <input 
              type="text" 
              placeholder="Jane Doe"
              className="w-full px-3 py-3 rounded border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all text-sm"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-900">Password</label>
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="••••••••"
                className="w-full px-3 py-3 rounded border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all text-sm pr-10"
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <button 
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 rounded transition-colors text-sm shadow-sm mt-4"
          >
            Create account
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-xs text-slate-500 leading-relaxed">
            By creating an account, you agree to our <br/>
            <a href="#" className="text-blue-600 hover:underline font-medium">Terms of Service</a> and <a href="#" className="text-blue-600 hover:underline font-medium">Privacy Policy</a>.
          </p>
        </div>

        <div className="mt-12 text-center pb-8">
          <p className="text-sm text-slate-600">
            Already have an account? <a href="#" className="text-blue-600 font-semibold hover:underline">Log in</a>
          </p>
        </div>
      </div>

      {/* Progress */}
      <div className="px-6 pb-6 mt-auto">
        <div className="flex gap-1">
          <div className="h-1 flex-1 bg-blue-600 rounded-full" />
          <div className="h-1 flex-1 bg-slate-100 rounded-full" />
          <div className="h-1 flex-1 bg-slate-100 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default SignUpScreen;
