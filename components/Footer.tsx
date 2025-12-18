
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-500 bg-clip-text text-transparent">
              Premchand.
            </span>
            <p className="text-gray-500 dark:text-gray-500 mt-2 text-sm">Building the future, one pixel at a time.</p>
          </div>
          
          <div className="flex gap-8">
            <a href={PERSONAL_INFO.socials.github} className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-colors">GitHub</a>
            <a href={PERSONAL_INFO.socials.twitter} className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-colors">Twitter</a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-100 dark:border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 dark:text-gray-600 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Premchand. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-blue-600 dark:hover:text-gray-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-600 dark:hover:text-gray-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
