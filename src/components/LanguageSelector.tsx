"use client";
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../data/translations';

const languages = [
  { code: 'en', label: 'EN', flag: '🇬🇧' }, // Shortened labels for cleaner look
  { code: 'cs', label: 'CZ', flag: '🇨🇿' },
  { code: 'pl', label: 'PL', flag: '🇵🇱' },
];

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const selected = languages.find(l => l.code === language) || languages[0];

  return (
    <div className="relative z-50">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 font-bold text-xs uppercase tracking-widest transition-opacity hover:opacity-70 px-3 py-2"
      >
        <span className="text-base">{selected.flag}</span>
        <span className="text-current">{selected.label}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-white shadow-xl border border-slate-100 py-2 animate-in fade-in slide-in-from-top-2">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code as Language);
                setIsOpen(false);
              }}
              className="w-full text-left px-4 py-2 text-xs font-bold uppercase tracking-wider hover:bg-slate-50 flex items-center gap-3 transition text-slate-600"
            >
              <span>{lang.flag}</span>
              <span className={language === lang.code ? 'text-yellow-600' : ''}>
                {lang.label}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}