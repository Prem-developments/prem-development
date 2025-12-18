
import React from 'react';
import { SKILLS } from '../constants';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from 'recharts';

const Skills: React.FC = () => {
  const categories = {
    frontend: SKILLS.filter(s => s.category === 'frontend'),
    backend: SKILLS.filter(s => s.category === 'backend'),
  };

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 rounded shadow-xl">
          <p className="text-sm font-bold text-slate-900 dark:text-white">{`${payload[0].payload.name}`}</p>
          <p className="text-xs text-blue-600 dark:text-blue-400">{`Proficiency: ${payload[0].value}%`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full">
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-2 text-slate-900 dark:text-white">Technical Proficiency</h2>
        <div className="h-1.5 w-20 bg-blue-600 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            I specialize in the Javascript ecosystem with deep expertise in modern frontend frameworks and robust backend services. My approach combines aesthetic precision with technical scalability.
          </p>
          
          <div className="space-y-6">
            {Object.entries(categories).map(([cat, skills]) => (
              skills.length > 0 && (
                <div key={cat} className="space-y-3">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">{cat}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.map(s => (
                      <span key={s.name} className="px-4 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg text-sm text-gray-700 dark:text-gray-300 shadow-sm transition-colors">
                        {s.name}
                      </span>
                    ))}
                  </div>
                </div>
              )
            ))}
          </div>
        </div>

        <div className="h-[400px] bg-white dark:bg-gray-900/50 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-lg shadow-gray-200/50 dark:shadow-none">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={SKILLS} layout="vertical" margin={{ left: 20 }}>
              <XAxis type="number" hide domain={[0, 100]} />
              <YAxis 
                dataKey="name" 
                type="category" 
                tick={{ fill: 'currentColor', fontSize: 12 }} 
                className="text-gray-500 dark:text-gray-400"
                width={120}
              />
              <Tooltip content={<CustomTooltip />} cursor={{ fill: 'transparent' }} />
              <Bar dataKey="level" radius={[0, 4, 4, 0]} barSize={20}>
                {SKILLS.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={entry.category === 'frontend' ? '#2563eb' : '#7c3aed'} 
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Skills;
