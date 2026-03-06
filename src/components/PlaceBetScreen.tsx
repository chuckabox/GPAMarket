import React, { useState } from 'react';
import { ChevronLeft, Info, ArrowRight } from 'lucide-react';

interface PlaceBetScreenProps {
  onBack: () => void;
}

const PlaceBetScreen: React.FC<PlaceBetScreenProps> = ({ onBack }) => {
  const [wager, setWager] = useState("50.00");
  const [selectedGrade, setSelectedGrade] = useState("6");

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-dark-bg font-sans max-w-md mx-auto shadow-xl relative transition-colors duration-200">
      {/* Header */}
      <header className="flex items-center bg-white dark:bg-dark-surface sticky top-0 z-10 px-4 h-14 border-b border-slate-200 dark:border-slate-800 justify-between">
        <button 
          onClick={onBack}
          className="text-slate-600 dark:text-dark-muted flex items-center hover:bg-slate-100 dark:hover:bg-slate-800 p-1.5 rounded-lg transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="text-primary-text dark:text-dark-text text-[15px] font-semibold tracking-tight">Place Academic Bet</h1>
        <div className="w-10" />
      </header>

      <main className="flex-1 pb-24 overflow-y-auto">
        {/* Profile */}
        <div className="p-6 bg-white dark:bg-dark-surface border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 shrink-0">
              <img 
                src="https://media.licdn.com/dms/image/v2/C4E03AQEtk_sHGXqRYA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1609634162745?e=1774483200&v=beta&t=xoTTBDnSke7AQCZpPV40j_XnZLp-VXvRiBTNESuHTzI" 
                alt="Paul Vrbik"
                className="w-full h-full rounded-full object-cover ring-2 ring-blue-50 dark:ring-slate-800"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-green-500 border-2 border-white dark:border-dark-surface" />
            </div>
            <div className="flex flex-col">
              <p className="text-xl font-bold tracking-tight text-primary-text dark:text-dark-text">Paul Vrbik</p>
              <p className="text-[13px] text-slate-500 dark:text-dark-muted font-medium">Introduction to Software Engineering (CSSE1001)</p>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-brand-blue/10 dark:bg-brand-blue/20 text-brand-blue font-semibold uppercase tracking-wider">Top 5% Student</span>
              </div>
            </div>
          </div>
        </div>

        {/* Config */}
        <div className="px-6 py-8 flex flex-col gap-8">
          {/* Target Grade */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <label className="text-sm font-semibold text-slate-700 dark:text-dark-text">Target Grade</label>
              <span className="text-xs text-slate-400 dark:text-dark-muted">Pick final course outcome</span>
            </div>
            <div className="grid grid-cols-7 gap-1.5 p-1.5 bg-slate-100 dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700">
              {["1", "2", "3", "4", "5", "6", "7"].map((grade) => (
                <button
                  key={grade}
                  onClick={() => setSelectedGrade(grade)}
                  className={`flex items-center justify-center h-10 rounded-full text-sm font-bold transition-all ${
                    selectedGrade === grade 
                      ? 'bg-white dark:bg-dark-surface text-brand-blue shadow-sm' 
                      : 'text-slate-500 dark:text-dark-muted hover:text-slate-700 dark:hover:text-dark-text'
                  }`}
                >
                  {grade}
                </button>
              ))}
            </div>
          </section>

          {/* Wager */}
          <section>
            <label className="block text-sm font-semibold text-slate-700 dark:text-dark-text mb-4">Wager Amount</label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400 dark:text-dark-muted pointer-events-none">
                <span className="text-lg font-medium">$</span>
              </div>
              <input 
                type="number" 
                value={wager}
                onChange={(e) => setWager(e.target.value)}
                className="w-full bg-white dark:bg-dark-surface border border-slate-200 dark:border-slate-800 rounded-full py-4 pl-10 pr-6 text-2xl font-bold tracking-tight text-primary-text dark:text-dark-text focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue outline-none transition-all"
                placeholder="0.00"
              />
            </div>
            <div className="flex gap-2 mt-4">
              <button onClick={() => setWager("10.00")} className="flex-1 py-2 rounded-full border border-slate-200 dark:border-slate-800 text-[13px] font-medium text-slate-600 dark:text-dark-text bg-white dark:bg-dark-surface hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">Min $10</button>
              <button onClick={() => setWager("100.00")} className="flex-1 py-2 rounded-full border border-slate-200 dark:border-slate-800 text-[13px] font-medium text-slate-600 dark:text-dark-text bg-white dark:bg-dark-surface hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">$100</button>
              <button onClick={() => setWager("500.00")} className="flex-1 py-2 rounded-full border border-slate-200 dark:border-slate-800 text-[13px] font-medium text-slate-600 dark:text-dark-text bg-white dark:bg-dark-surface hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">Max $500</button>
            </div>
          </section>

          {/* Summary */}
          <section className="bg-brand-blue/5 dark:bg-brand-blue/10 border border-brand-blue/10 dark:border-brand-blue/20 rounded-xl p-5">
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-500 dark:text-dark-muted">Winning Probability</span>
                <span className="font-semibold text-slate-700 dark:text-dark-text">22.4%</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-500 dark:text-dark-muted">Platform Fee (2%)</span>
                <span className="font-semibold text-slate-700 dark:text-dark-text">-${(parseFloat(wager || "0") * 0.02).toFixed(2)}</span>
              </div>
              <div className="h-px bg-slate-200 dark:bg-slate-800 my-1" />
              <div className="flex justify-between items-end">
                <div className="flex flex-col">
                  <span className="text-[12px] font-bold text-brand-blue uppercase tracking-wider">Potential Payout</span>
                  <span className="text-3xl font-black tracking-tight text-primary-text dark:text-dark-text leading-none mt-1">
                    ${(parseFloat(wager || "0") * 4.25).toFixed(2)}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-medium text-slate-400 dark:text-dark-muted block mb-1">Return Multiplier</span>
                  <span className="inline-flex items-center px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-[12px] font-bold text-slate-700 dark:text-dark-text">4.25x</span>
                </div>
              </div>
            </div>
          </section>

          {/* Disclaimer */}
          <div className="flex gap-3 items-start px-1">
            <Info className="w-5 h-5 text-slate-400 dark:text-dark-muted shrink-0" />
            <p className="text-[12px] text-slate-500 dark:text-dark-muted leading-relaxed">
              Funds will be held in escrow until final grade publication. Payouts are subject to verification via official university portals.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-white/80 dark:bg-dark-surface/80 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800 p-4 pb-8">
        <button className="w-full bg-brand-blue hover:opacity-90 text-white font-bold py-4 rounded-full shadow-lg shadow-brand-blue/20 transition-all flex items-center justify-center gap-2">
          <span>Confirm Wager</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </footer>
    </div>
  );
};

export default PlaceBetScreen;
