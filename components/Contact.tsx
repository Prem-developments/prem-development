import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="w-full">
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-2 text-slate-900 dark:text-white">Get In Touch</h2>
        <div className="h-1.5 w-20 bg-blue-600 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Have a project in mind?</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              I'm always interested in hearing about new opportunities, innovative projects, or just chatting about technology. Feel free to reach out!
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600/10 border border-blue-600/30 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400 dark:text-gray-500 uppercase font-bold tracking-widest">Email Me</p>
                  <p className="text-slate-900 dark:text-gray-200 font-medium">{PERSONAL_INFO.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-600/10 border border-purple-600/30 rounded-xl flex items-center justify-center text-purple-600 dark:text-purple-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400 dark:text-gray-500 uppercase font-bold tracking-widest">GitHub</p>
                  <a href={PERSONAL_INFO.socials.github} target="_blank" rel="noopener noreferrer" className="text-slate-900 dark:text-gray-200 font-medium hover:text-blue-600 transition-colors">
                    {PERSONAL_INFO.socials.github.replace('https://', '')}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 bg-blue-50 dark:bg-gray-900 rounded-3xl border border-blue-100 dark:border-gray-800 flex flex-col items-center text-center justify-center">
             <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
             </div>
             <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Let's Build Together</h4>
             <p className="text-gray-500 dark:text-gray-400 text-sm">Open for freelance and full-time opportunities.</p>
          </div>
        </div>

        <div className="lg:col-span-3">
          <form 
            className="space-y-6 bg-white dark:bg-gray-900/40 p-8 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-xl dark:shadow-none" 
            onSubmit={(e) => {
              e.preventDefault();
              alert(`Message intended for: ${PERSONAL_INFO.email}`);
            }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 text-slate-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 text-slate-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Subject</label>
              <input 
                type="text" 
                placeholder="Project Inquiry"
                className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 text-slate-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Message</label>
              <textarea 
                rows={5}
                placeholder="Tell me more about your project..."
                className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 text-slate-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none"
              ></textarea>
            </div>
            <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-600/20 active:scale-[0.98]">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;