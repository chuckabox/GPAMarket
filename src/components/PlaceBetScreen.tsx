import React, { useState } from 'react';
import { ChevronLeft, ArrowRight, History, Info } from 'lucide-react';

interface PlaceBetScreenProps {
  onBack: () => void;
}

const PlaceBetScreen: React.FC<PlaceBetScreenProps> = ({ onBack }) => {
  const [wager, setWager] = useState("50.00");
  const [selectedGrade, setSelectedGrade] = useState("7");
  
  const currentGPA = 6.67;
  const platformFeeRate = 0.20; // 20% Fee

  const calculateStats = (target: string) => {
    const targetNum = parseInt(target);
    const distance = Math.abs(currentGPA - targetNum);
    
    let multiplier = 1.05; 
    let probability = 85.0;

    if (distance <= 1.5) {
      multiplier = 1.05 + (distance * 0.5);
      probability = 85 - (distance * 20);
    } else {
      const minStretchMult = 1.8;
      const maxStretchMult = 5.0;
      const maxPossibleDist = currentGPA - 1; 
      
      const weight = (distance - 1.5) / (maxPossibleDist - 1.5);
      multiplier = minStretchMult + weight * (maxStretchMult - minStretchMult);
      
      probability = Math.max(2.5, 40 - (distance * 6.5));
    }
    
    return {
      multiplier: multiplier.toFixed(2),
      probability: probability.toFixed(1)
    };
  };

  const { multiplier, probability } = calculateStats(selectedGrade);
  const numericWager = parseFloat(wager || "0");
  const feeAmount = (numericWager * platformFeeRate);
  const potentialPayout = ((numericWager * parseFloat(multiplier)) - feeAmount).toFixed(2);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-dark-bg font-sans max-w-md mx-auto shadow-xl relative transition-colors duration-200">
      {/* Header - Remains Sticky */}
      <header className="flex items-center bg-white dark:bg-dark-surface sticky top-0 z-10 px-4 h-14 border-b border-slate-200 dark:border-slate-800 justify-between">
        <button 
          onClick={onBack}
          className="text-slate-600 dark:text-dark-muted flex items-center hover:bg-slate-100 dark:hover:bg-slate-800 p-1.5 rounded-lg transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="text-primary-text dark:text-dark-text text-[15px] font-semibold tracking-tight">Guess GPA</h1>
        <div className="w-10" />
      </header>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto">
        {/* Profile Section */}
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
            <div className="flex flex-col flex-1">
              <p className="text-xl font-bold tracking-tight text-primary-text dark:text-dark-text">Paul Vrbik</p>
              <p className="text-[13px] text-slate-500 dark:text-dark-muted font-medium mb-2">CSSE1001 (Software Engineering)</p>
              
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-brand-blue/10 dark:bg-brand-blue/20 text-brand-blue font-bold uppercase tracking-wider">GPA: {currentGPA}</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-dark-muted font-bold uppercase tracking-wider">3rd Year B. Comp Sci</span>
              </div>

              <button className="flex items-center gap-1.5 text-[11px] font-bold text-slate-500 dark:text-dark-muted hover:text-brand-blue transition-colors w-fit">
                <History className="w-3.5 h-3.5" />
                <span className="uppercase tracking-wide border-b border-slate-300 dark:border-slate-700">View Course History</span>
              </button>
            </div>
          </div>
        </div>

        <div className="px-6 py-8 flex flex-col gap-8">
          {/* Target Grade Selection */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <label className="text-sm font-semibold text-slate-700 dark:text-dark-text">Predict GPA</label>
              <span className="text-xs text-slate-400 dark:text-dark-muted">Volatile odds determined by overall GPA</span>
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

          {/* Wager Input Section */}
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

          {/* Summary Section */}
          <section className="bg-brand-blue/5 dark:bg-brand-blue/10 border border-brand-blue/10 dark:border-brand-blue/20 rounded-xl p-5">
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-500 dark:text-dark-muted">Winning Probability</span>
                <span className={`font-semibold ${parseFloat(probability) < 15 ? 'text-orange-500' : 'text-slate-700 dark:text-dark-text'}`}>
                  {probability}%
                </span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-500 dark:text-dark-muted">Platform Fee ({Math.round(platformFeeRate * 100)}%)</span>
                <span className="font-semibold text-slate-700 dark:text-dark-text">-${feeAmount.toFixed(2)}</span>
              </div>
              <div className="h-px bg-slate-200 dark:bg-slate-800 my-1" />
              <div className="flex justify-between items-end">
                <div className="flex flex-col">
                  <span className="text-[12px] font-bold text-brand-blue uppercase tracking-wider">Net Potential Payout</span>
                  <span className="text-3xl font-black tracking-tight text-primary-text dark:text-dark-text leading-none mt-1">
                    ${potentialPayout}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-medium text-slate-400 dark:text-dark-muted block mb-1">Multiplier</span>
                  <span className="inline-flex items-center px-2 py-1 rounded bg-brand-blue text-white text-[12px] font-bold">
                    {multiplier}x
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* New Confirm Wager Position - Now Inline at bottom of scroll */}
          <section className="pt-4 pb-12">
            <button className="w-full bg-brand-blue hover:opacity-90 active:scale-[0.98] text-white font-bold py-5 rounded-full shadow-lg shadow-brand-blue/20 transition-all flex items-center justify-center gap-2">
              <span>Confirm Wager</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <div className="mt-6 flex gap-3 items-start px-2">
              <Info className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
              <p className="text-[11px] text-slate-400 leading-relaxed">
                By confirming, you agree to the escrow terms. Funds are locked until official results are published via the university portal.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default PlaceBetScreen;