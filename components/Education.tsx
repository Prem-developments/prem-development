
import React from 'react';
import { EDUCATION } from '../constants';

const Education: React.FC = () => {
  return (
    <div className="w-full">
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-2 text-slate-900 dark:text-white">Education & Learning</h2>
        <div className="h-1.5 w-20 bg-blue-600 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {EDUCATION.map((edu, idx) => (
          <div 
            key={idx} 
            className="p-8 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl hover:border-blue-500/50 transition-all shadow-md dark:shadow-none"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{edu.degree}</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium">{edu.institution}</p>
              </div>
              <span className="text-gray-500 dark:text-gray-500 font-mono text-sm">{edu.year}</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
              {edu.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
