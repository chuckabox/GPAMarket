import React, { useState, useRef } from 'react';
import { ArrowLeft, Upload, FileText, CheckCircle2, Loader2 } from 'lucide-react';

interface TranscriptUploadScreenProps {
  onNext: () => void;
  onBack: () => void;
}

const TranscriptUploadScreen: React.FC<TranscriptUploadScreenProps> = ({ onNext, onBack }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && droppedFile.type === 'application/pdf') {
      setFile(droppedFile);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleUpload = () => {
    if (!file) return;
    setIsUploading(true);
    
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setUploadProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          onNext();
        }, 800);
      }
    }, 200);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-dark-bg font-sans max-w-md mx-auto shadow-xl transition-colors duration-200">
      {/* Top Nav */}
      <div className="flex items-center px-4 py-4 border-b border-slate-100 dark:border-slate-800">
        <button 
          onClick={onBack}
          className="p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <ArrowLeft className="w-6 h-6 text-primary-text dark:text-dark-text" />
        </button>
        <h2 className="flex-1 text-center text-sm font-semibold text-primary-text dark:text-dark-text">Verification</h2>
        <div className="w-8" />
      </div>

      {/* Content */}
      <div className="flex-1 px-6 pt-6 w-full text-center"> {/* Reduced pt-10 to pt-6 */}
        <h1 className="text-3xl font-bold tracking-tight text-primary-text dark:text-dark-text mb-2">Upload Transcript</h1>
        <p className="text-sm text-slate-500 dark:text-dark-muted mb-8">Let's get your academic profile ready. Upload your official PDF transcript to continue.</p>

        <div 
          className={`relative border-2 border-dashed rounded-3xl p-8 transition-all duration-200 flex flex-col items-center justify-center gap-4 mb-6 ${
            isDragging 
              ? 'border-brand-blue bg-brand-blue/5 scale-[1.02]' 
              : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-dark-surface'
          } ${file ? 'border-emerald-500 bg-emerald-50/30 dark:bg-emerald-900/10' : ''}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
        >
          <input 
            type="file" 
            ref={fileInputRef}
            onChange={handleFileSelect}
            className="hidden" 
            accept=".pdf"
          />
          
          {file ? (
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="text-center">
                <p className="text-sm font-bold text-primary-text dark:text-dark-text truncate max-w-[200px]">{file.name}</p>
                <p className="text-xs text-slate-500 dark:text-dark-muted">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
              </div>
            </div>
          ) : (
            <>
              <div className="w-16 h-16 rounded-full bg-brand-blue/10 dark:bg-brand-blue/20 flex items-center justify-center text-brand-blue">
                <Upload className="w-8 h-8" />
              </div>
              <div className="text-center">
                <p className="text-sm font-bold text-primary-text dark:text-dark-text">Click or drag transcript</p>
                <p className="text-xs text-slate-500 dark:text-dark-muted mt-1">Supports PDF only</p>
              </div>
            </>
          )}
        </div>

        {isUploading && (
          <div className="mt-4 mb-6 space-y-3">
            <div className="flex justify-between items-center text-xs font-bold text-brand-blue uppercase tracking-wider">
              <span>Extracting Academic Data...</span>
              <span>{uploadProgress}%</span>
            </div>
            <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-brand-blue transition-all duration-300" 
                style={{ width: `${uploadProgress}%` }}
              />
            </div>
          </div>
        )}

        {!isUploading && (
          <div className="space-y-4 text-left"> {/* Reduced space-y-6 to space-y-4 */}
            <div className="pt-2 space-y-3">
              <button 
                onClick={handleUpload}
                disabled={!file}
                className={`w-full font-bold py-4 rounded-full transition-all flex items-center justify-center gap-2 shadow-lg ${
                  file 
                    ? 'bg-brand-blue text-white hover:opacity-90 shadow-brand-blue/20 hover:scale-[1.02] active:scale-[0.98]' 
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-400 cursor-not-allowed'
                }`}
              >
                {isUploading ? <Loader2 className="w-5 h-5 animate-spin" /> : <span>Verify & Continue</span>}
              </button>
              <button 
                onClick={onNext}
                className="w-full text-sm font-semibold text-slate-400 hover:text-slate-600 dark:hover:text-dark-text transition-colors text-center"
              >
                Skip for now
              </button>
            </div>
          </div>
        )}

        {/* Data Privacy Section - Moved up from mt-12 to mt-6 */}
        <div className="mt-6 p-5 bg-slate-50 dark:bg-dark-surface rounded-2xl border border-slate-100 dark:border-slate-800 text-left">
          <div className="flex items-center gap-3 mb-2">
            <FileText className="w-4 h-4 text-brand-blue" />
            <span className="text-[10px] font-bold text-primary-text dark:text-dark-text uppercase tracking-widest">Data Privacy</span>
          </div>
          <p className="text-[11px] text-slate-500 dark:text-dark-muted leading-relaxed">
            Your transcript is used solely for verification. We extract GPA and course history to build your profile. Files are encrypted and never shared.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TranscriptUploadScreen;