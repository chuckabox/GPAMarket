import React, { useState } from 'react';
import { ChevronLeft, Info, ArrowRight } from 'lucide-react';

interface PlaceBetScreenProps {
  onBack: () => void;
}

const PlaceBetScreen: React.FC<PlaceBetScreenProps> = ({ onBack }) => {
  const [wager, setWager] = useState("50.00");
  const [selectedGrade, setSelectedGrade] = useState("6");

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans max-w-md mx-auto shadow-xl relative">
      {/* Header */}
      <header className="flex items-center bg-white sticky top-0 z-10 px-4 h-14 border-b border-slate-200 justify-between">
        <button 
          onClick={onBack}
          className="text-slate-600 flex items-center hover:bg-slate-100 p-1.5 rounded-lg transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="text-primary-text text-[15px] font-semibold tracking-tight">Place Academic Bet</h1>
        <div className="w-10" />
      </header>

      <main className="flex-1 pb-24 overflow-y-auto">
        {/* Profile */}
        <div className="p-6 bg-white border-b border-slate-100">
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 shrink-0">
              <img 
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100&h=100" 
                alt="Alex Rivers"
                className="w-full h-full rounded-full object-cover ring-2 ring-blue-50"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-green-500 border-2 border-white" />
            </div>
            <div className="flex flex-col">
              <p className="text-xl font-bold tracking-tight text-primary-text">Alex Rivers</p>
              <p className="text-[13px] text-slate-500 font-medium">Advanced Mathematics (MATH301)</p>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-brand-blue/10 text-brand-blue font-semibold uppercase tracking-wider">Top 5% Student</span>
              </div>
            </div>
          </div>
        </div>

        {/* Config */}
        <div className="px-6 py-8 flex flex-col gap-8">
          {/* Target Grade */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <label className="text-sm font-semibold text-slate-700">Target Grade</label>
              <span className="text-xs text-slate-400">Pick final course outcome</span>
            </div>
            <div className="grid grid-cols-7 gap-1.5 p-1 bg-slate-100 rounded-xl">
              {["1", "2", "3", "4", "5", "6", "7"].map((grade) => (
                <button
                  key={grade}
                  onClick={() => setSelectedGrade(grade)}
                  className={`flex items-center justify-center h-11 rounded-lg text-sm font-bold transition-all ${
                    selectedGrade === grade 
                      ? 'bg-white text-brand-blue shadow-sm' 
                      : 'text-slate-500 hover:text-slate-700'
                  }`}
                >
                  {grade}
                </button>
              ))}
            </div>
          </section>

          {/* Wager */}
          <section>
            <label className="block text-sm font-semibold text-slate-700 mb-4">Wager Amount</label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400 pointer-events-none">
                <span className="text-lg font-medium">$</span>
              </div>
              <input 
                type="number" 
                value={wager}
                onChange={(e) => setWager(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-xl py-4 pl-10 pr-4 text-2xl font-bold tracking-tight text-primary-text focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue outline-none transition-all"
                placeholder="0.00"
              />
            </div>
            <div className="flex gap-2 mt-4">
              <button onClick={() => setWager("10.00")} className="flex-1 py-2 rounded-lg border border-slate-200 text-[13px] font-medium text-slate-600 bg-white hover:bg-slate-50 transition-colors">Min $10</button>
              <button onClick={() => setWager("100.00")} className="flex-1 py-2 rounded-lg border border-slate-200 text-[13px] font-medium text-slate-600 bg-white hover:bg-slate-50 transition-colors">$100</button>
              <button onClick={() => setWager("500.00")} className="flex-1 py-2 rounded-lg border border-slate-200 text-[13px] font-medium text-slate-600 bg-white hover:bg-slate-50 transition-colors">Max $500</button>
            </div>
          </section>

          {/* Summary */}
          <section className="bg-brand-blue/5 border border-brand-blue/10 rounded-xl p-5">
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-500">Winning Probability</span>
                <span className="font-semibold text-slate-700">22.4%</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-500">Platform Fee (2%)</span>
                <span className="font-semibold text-slate-700">-${(parseFloat(wager || "0") * 0.02).toFixed(2)}</span>
              </div>
              <div className="h-px bg-slate-200 my-1" />
              <div className="flex justify-between items-end">
                <div className="flex flex-col">
                  <span className="text-[12px] font-bold text-brand-blue uppercase tracking-wider">Potential Payout</span>
                  <span className="text-3xl font-black tracking-tight text-primary-text leading-none mt-1">
                    ${(parseFloat(wager || "0") * 4.25).toFixed(2)}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-medium text-slate-400 block mb-1">Return Multiplier</span>
                  <span className="inline-flex items-center px-2 py-1 rounded bg-slate-100 text-[12px] font-bold text-slate-700">4.25x</span>
                </div>
              </div>
            </div>
          </section>

          {/* Disclaimer */}
          <div className="flex gap-3 items-start px-1">
            <Info className="w-5 h-5 text-slate-400 shrink-0" />
            <p className="text-[12px] text-slate-500 leading-relaxed">
              Funds will be held in escrow until final grade publication. Payouts are subject to verification via official university portals.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-white/80 backdrop-blur-xl border-t border-slate-200 p-4 pb-8">
        <button className="w-full bg-brand-blue hover:opacity-90 text-white font-bold py-4 rounded-xl shadow-lg shadow-brand-blue/20 transition-all flex items-center justify-center gap-2">
          <span>Confirm Wager</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </footer>
    </div>
  );
};

export default PlaceBetScreen;
