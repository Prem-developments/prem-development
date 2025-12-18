
import React from 'react';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <div className="w-full">
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-2 text-slate-900 dark:text-white">Professional Journey</h2>
        <div className="h-1.5 w-20 bg-blue-600 rounded-full"></div>
      </div>

      <div className="relative border-l border-gray-200 dark:border-gray-800 ml-3 md:ml-6 space-y-12">
        {EXPERIENCES.map((exp) => (
          <div key={exp.id} className="relative pl-8 group">
            <div className="absolute -left-[11px] top-0 w-5 h-5 bg-white dark:bg-gray-900 border-2 border-blue-600 rounded-full group-hover:scale-125 transition-transform"></div>
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{exp.role}</h3>
                <p className="text-lg font-medium text-gray-500 dark:text-gray-400">{exp.company}</p>
              </div>
              <span className="px-4 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm text-gray-600 dark:text-gray-300 font-mono">
                {exp.duration}
              </span>
            </div>
            
            <ul className="space-y-3">
              {exp.description.map((item, i) => (
                <li key={i} className="flex items-start text-gray-600 dark:text-gray-400">
                  <span className="text-blue-600 mr-3 mt-1.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
