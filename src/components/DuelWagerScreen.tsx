import React, { useState } from 'react';
import { ChevronLeft, ArrowRight, Info, CheckCircle2, Swords } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface DuelWagerScreenProps {
  onBack: () => void;
  matchup?: any;
}

const DuelWagerScreen: React.FC<DuelWagerScreenProps> = ({ onBack, matchup }) => {
  // Pull data from the selected matchup or fallback to Felix vs Elouise
  const data = matchup || {
    studentA: { name: 'Felix H.', avatar: 'https://media.licdn.com/dms/image/v2/D4D03AQGwtWIfkdI_6A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1714480211761?e=1774483200&v=beta&t=H-1TcQopRLGwQMtX5XI74lC6eYex7zaFkQPeEht5xFE' },
    studentB: { name: 'Elouise C.', avatar: 'https://media.licdn.com/dms/image/v2/D5603AQExPpM0fJiaRw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1684824595687?e=1774483200&v=beta&t=cw9r6IaZ7BI_8kxt8dPl-Fy1U_4K-ebOwyvQSr-PeNA' },
    course: 'CSSE1001',
    type: 'Final Exam',
    split: 65,
    votesA: 42,
    votesB: 23
  };

  const [wager, setWager] = useState("25.00");
  const [selectedWinner, setSelectedWinner] = useState<'A' | 'B'>('B');
  const [isConfirmed, setIsConfirmed] = useState(false);
  
  // Hardcoded Stats
  const gpaA = 6.75;
  const degreeA = "B. Computer Science";
  const gpaB = 6.80;
  const degreeB = "B. Biotechnology"; // Updated
  
  const platformFeeRate = 0.20;

  const getMultiplier = (student: 'A' | 'B') => {
    return student === 'A' ? 1.80 : 1.60;
  };

  const currentMultiplier = getMultiplier(selectedWinner);
  const numericWager = parseFloat(wager || "0");
  const feeAmount = (numericWager * platformFeeRate);
  const potentialPayout = ((numericWager * currentMultiplier) - feeAmount).toFixed(2);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-dark-bg font-sans max-w-md mx-auto shadow-xl relative transition-colors duration-200">
      
      <AnimatePresence>
        {isConfirmed && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-6">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsConfirmed(false)} className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" />
            <motion.div initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 20 }} className="relative w-full max-w-[340px] bg-white dark:bg-dark-surface rounded-[32px] p-8 shadow-2xl text-center overflow-hidden">
              <div className="flex justify-center mb-6">
                <div className="bg-green-100 dark:bg-green-500/20 p-4 rounded-full ring-8 ring-green-50 dark:ring-green-500/5">
                  <CheckCircle2 className="w-12 h-12 text-green-500" />
                </div>
              </div>
              <h2 className="text-2xl font-black text-primary-text dark:text-dark-text mb-2 tracking-tight">Duel Joined</h2>
              <p className="text-slate-500 dark:text-dark-muted text-[15px] leading-snug mb-8">
                Your <span className="font-bold text-primary-text dark:text-dark-text">${numericWager.toFixed(2)}</span> stake on <span className="font-bold text-brand-blue">{selectedWinner === 'A' ? data.studentA.name : data.studentB.name}</span> is confirmed.
              </p>
              <button onClick={() => setIsConfirmed(false)} className="w-full bg-brand-blue text-white font-bold py-5 rounded-full shadow-lg shadow-brand-blue/20 hover:opacity-90 active:scale-[0.98] transition-all">Return to Duels</button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <header className="flex items-center bg-white dark:bg-dark-surface sticky top-0 z-10 px-4 h-14 border-b border-slate-200 dark:border-slate-800 justify-between">
        <button onClick={onBack} className="text-slate-600 dark:text-dark-muted p-1.5 rounded-lg hover:bg-slate-100"><ChevronLeft className="w-6 h-6" /></button>
        <h1 className="text-primary-text dark:text-dark-text text-[15px] font-semibold tracking-tight">Duel Wager</h1>
        <div className="w-10" />
      </header>

      <main className="flex-1 overflow-y-auto">
        <div className="px-6 py-4 bg-white dark:bg-dark-surface border-b border-slate-100 dark:border-slate-800">
          <div className="flex flex-col items-center mb-3">
             <div className="inline-flex items-center gap-1.5 bg-brand-blue/10 px-2.5 py-1 rounded-full mb-1">
                <Swords className="w-3 h-3 text-brand-blue" />
                <span className="text-[10px] font-bold text-brand-blue uppercase tracking-wider">{data.course} Duel</span>
             </div>
             <p className="text-[11px] text-slate-400 font-bold uppercase tracking-tight">{data.type}</p>
          </div>

          <div className="flex items-center justify-between gap-4 relative mb-2">
            {/* Student A */}
            <div className="flex flex-col items-center flex-1 gap-1.5">
              <img src={data.studentA.avatar} className="w-12 h-12 rounded-full object-cover ring-2 ring-slate-100 dark:ring-slate-800 shadow-sm" />
              <div className="text-center">
                <p className="text-[11px] font-bold text-primary-text dark:text-dark-text leading-tight">{data.studentA.name}</p>
                <p className="text-[9px] text-slate-500 font-semibold mb-1 leading-tight">{degreeA}</p>
                <span className="inline-block text-[9px] px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-dark-muted font-bold tracking-tighter">GPA: {gpaA.toFixed(2)}</span>
              </div>
            </div>

            <div className="w-8 h-8 rounded-full bg-slate-50 dark:bg-dark-bg border border-slate-100 dark:border-slate-800 flex items-center justify-center shrink-0">
               <span className="text-[9px] font-black text-slate-300 italic">VS</span>
            </div>

            {/* Student B */}
            <div className="flex flex-col items-center flex-1 gap-1.5">
              <img src={data.studentB.avatar} className="w-12 h-12 rounded-full object-cover ring-2 ring-slate-100 dark:ring-slate-800 shadow-sm" />
              <div className="text-center">
                <p className="text-[11px] font-bold text-primary-text dark:text-dark-text leading-tight">{data.studentB.name}</p>
                <p className="text-[9px] text-slate-500 font-semibold mb-1 leading-tight">{degreeB}</p>
                <span className="inline-block text-[9px] px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-dark-muted font-bold tracking-tighter">GPA: {gpaB.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Probability Bar matching MatchupsScreen exactly */}
          <div className="mt-6 px-2">
            <div className="relative h-7 flex items-end">
              <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden flex relative">
                <div style={{ width: `${data.split}%`, backgroundColor: '#048BA8' }} className="h-full transition-all" />
                <div style={{ width: `${100 - data.split}%`, backgroundColor: '#F18F01' }} className="h-full transition-all" />
              </div>
              
              <div 
                className="absolute bottom-0 flex flex-col items-center pointer-events-none"
                style={{ left: `${data.split}%`, transform: 'translateX(-50%)' }}
              >
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span className="text-[8px] font-black text-[#048BA8]">{data.votesA}</span>
                  <span className="text-[8px] font-black text-[#F18F01]">{data.votesB}</span>
                </div>
                <div className="w-0.5 h-2.5 bg-slate-400/50 dark:bg-slate-500 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        <div className="px-6 py-6 flex flex-col gap-6">
          <section>
            <div className="flex items-center justify-between mb-3">
              <label className="text-sm font-semibold text-slate-700 dark:text-dark-text">Select Winner</label>
            </div>
            <div className="grid grid-cols-2 gap-3 p-1 bg-slate-100 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700">
              <button 
                onClick={() => setSelectedWinner('A')} 
                className={`py-2.5 rounded-xl text-xs font-bold transition-all ${selectedWinner === 'A' ? 'bg-white text-brand-blue shadow-sm' : 'text-slate-500'}`}
              >
                {data.studentA.name.split(' ')[0]}
              </button>
              <button 
                onClick={() => setSelectedWinner('B')} 
                className={`py-2.5 rounded-xl text-xs font-bold transition-all ${selectedWinner === 'B' ? 'bg-white text-brand-blue shadow-sm' : 'text-slate-500'}`}
              >
                {data.studentB.name.split(' ')[0]}
              </button>
            </div>
          </section>

          <section>
            <label className="block text-sm font-semibold text-slate-700 dark:text-dark-text mb-3">Wager Amount</label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400 pointer-events-none"><span className="text-lg font-medium">$</span></div>
              <input type="number" value={wager} onChange={(e) => setWager(e.target.value)} className="w-full bg-white dark:bg-dark-surface border border-slate-200 dark:border-slate-800 rounded-full py-3.5 pl-10 pr-6 text-2xl font-bold tracking-tight text-primary-text dark:text-dark-text focus:ring-2 focus:ring-brand-blue/20 outline-none" placeholder="0.00" />
            </div>
            <div className="flex gap-2 mt-4">
              {["10.00", "100.00", "500.00"].map((val) => (
                <button key={val} onClick={() => setWager(val)} className="flex-1 py-2 rounded-full border border-slate-200 dark:border-slate-800 text-[13px] font-medium text-slate-600 dark:text-dark-text bg-white dark:bg-dark-surface hover:bg-slate-50 transition-colors">
                  {val === "10.00" ? "Min $10" : val === "500.00" ? "Max $500" : `$${parseInt(val)}`}
                </button>
              ))}
            </div>
          </section>

          <section className="bg-brand-blue/5 dark:bg-brand-blue/10 border border-brand-blue/10 rounded-xl p-5">
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-500 dark:text-dark-muted">Platform Fee (20%)</span>
                <span className="font-semibold text-slate-700 dark:text-dark-text">-${feeAmount.toFixed(2)}</span>
              </div>
              <div className="h-px bg-slate-200 dark:bg-slate-800 my-1" />
              <div className="flex justify-between items-end">
                <div className="flex flex-col">
                  <span className="text-[12px] font-bold text-brand-blue uppercase tracking-wider">Net Potential Payout</span>
                  <span className="text-3xl font-black tracking-tight text-primary-text dark:text-dark-text leading-none mt-1">${potentialPayout}</span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-medium text-slate-400 block mb-1">Multiplier</span>
                  <span className="inline-flex items-center px-2 py-1 rounded bg-brand-blue text-white text-[12px] font-bold">{currentMultiplier.toFixed(2)}x</span>
                </div>
              </div>
            </div>
          </section>

          <section className="pb-8">
            <button onClick={() => setIsConfirmed(true)} className="w-full bg-brand-blue hover:opacity-90 active:scale-[0.98] text-white font-bold py-5 rounded-full shadow-lg shadow-brand-blue/20 transition-all flex items-center justify-center gap-2">
              <span>Confirm Duel Wager</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <div className="mt-4 flex gap-3 items-start px-1">
              <Info className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
              <p className="text-[10px] text-slate-400 leading-relaxed font-medium">Stakes are based on comparative GPA. Backing the favorite results in lower risk. If students receive the same grade, stakes are returned minus the fee.</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default DuelWagerScreen;