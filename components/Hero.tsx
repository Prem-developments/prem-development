import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
      <div className="space-y-6">
        <div className="inline-block px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-medium animate-pulse">
          Open for collaborations
        </div>
        <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight text-slate-900 dark:text-white">
          Hi, I'm <br />
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-500 bg-clip-text text-transparent">
            {PERSONAL_INFO.name}
          </span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed">
          {PERSONAL_INFO.role}. <br />
          <span className="text-gray-500 italic font-light">{PERSONAL_INFO.tagline}</span>
        </p>
        <div className="flex flex-wrap gap-4 pt-4">
          <a
            href="#projects"
            onClick={(e) => handleScroll(e, 'projects')}
            className="px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all shadow-lg shadow-blue-500/20 active:scale-95"
          >
            View Projects
          </a>
          <a
            href="#contact"
            onClick={(e) => handleScroll(e, 'contact')}
            className="px-8 py-3 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 font-semibold transition-all active:scale-95"
          >
            Let's Talk
          </a>
        </div>
        
        {/* Simplified Socials - Removed LinkedIn, Added Email as requested */}
        <div className="flex flex-wrap items-center gap-6 pt-8">
           <a 
             href={PERSONAL_INFO.socials.github} 
             target="_blank" 
             rel="noopener noreferrer" 
             className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
           >
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
             <span className="text-sm font-medium">GitHub</span>
           </a>
           <a 
             href={`mailto:${PERSONAL_INFO.email}`}
             className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
           >
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
             <span className="text-sm font-medium">{PERSONAL_INFO.email}</span>
           </a>
        </div>
      </div>
      
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
        <div className="relative aspect-[4/5] max-w-sm mx-auto overflow-hidden rounded-3xl border-4 border-white dark:border-gray-900 shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
          <img
            src="http://localhost:3000/assets/profile.png"
            alt="Premchand Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute -bottom-6 -right-6 p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-xl hidden sm:block">
           <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">3+</p>
           <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-widest">Years Experience</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;