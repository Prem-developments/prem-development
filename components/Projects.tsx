
import React from 'react';
import { PROJECTS } from '../constants';

interface ProjectsProps {
  onShowDemo: (projectId: string) => void;
}

const Projects: React.FC<ProjectsProps> = ({ onShowDemo }) => {
  return (
    <div className="w-full">
      <div className="mb-12 flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold mb-2 text-slate-900 dark:text-white">Featured Projects</h2>
          <div className="h-1.5 w-20 bg-blue-600 rounded-full"></div>
        </div>
        <p className="text-gray-500 hidden md:block">Hover to explore details</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project) => (
          <div 
            key={project.id} 
            className="group relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all hover:shadow-2xl hover:shadow-blue-500/10"
          >
            <div className="h-48 overflow-hidden">
              <img 
                src={project.imageUrl} 
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-2">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span key={t} className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
                    {t}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <button 
                  onClick={() => onShowDemo(project.id)}
                  className="flex-1 text-center py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition-colors shadow-md shadow-blue-500/20"
                >
                  Live Demo
                </button>
               
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
