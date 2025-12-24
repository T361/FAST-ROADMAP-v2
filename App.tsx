import React from 'react';
import { AppProvider, useAppStore } from './store';
import { Layout } from './components/Layout';
import { SkillTree } from './components/SkillTree';
import { SUBJECTS } from './constants';
import { ArrowRight, Book } from 'lucide-react';

const RoadmapView: React.FC = () => {
    const { selectSubject, setView } = useAppStore();

    return (
        <div className="animate-fade-in max-w-7xl mx-auto">
            <header className="mb-12">
                <h2 className="text-4xl font-bold text-white mb-4">Academic Roadmap</h2>
                <p className="text-slate-400 text-lg">Select a subject to access the detailed Skill Tree and curated resources.</p>
            </header>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {SUBJECTS.map(sub => (
                    <div 
                        key={sub.id}
                        onClick={() => { selectSubject(sub.id); setView('skillTree'); }}
                        className="bg-obsidian-900 border border-obsidian-800 rounded-2xl p-6 hover:border-brand-primary/50 hover:shadow-lg hover:shadow-brand-primary/5 transition-all cursor-pointer group flex flex-col h-full"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div className="w-12 h-12 bg-obsidian-950 rounded-xl flex items-center justify-center text-brand-primary border border-obsidian-800 group-hover:scale-110 transition-transform">
                                <Book size={24} />
                            </div>
                            <span className="text-xs font-mono text-obsidian-600 bg-obsidian-950 px-2 py-1 rounded border border-obsidian-800 group-hover:border-brand-primary/30 transition-colors">{sub.code}</span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-200 mb-2 group-hover:text-white transition-colors">{sub.title}</h3>
                        <p className="text-sm text-slate-500 mb-6 line-clamp-3 flex-1">{sub.description}</p>
                        <div className="flex items-center text-brand-primary text-sm font-medium mt-auto">
                            <span>Explore Skill Tree</span>
                            <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

const AppContent: React.FC = () => {
  const { currentView } = useAppStore();

  return (
    <Layout>
      {currentView === 'roadmap' && <RoadmapView />}
      {currentView === 'skillTree' && <SkillTree />}
    </Layout>
  );
};

const App: React.FC = () => {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
};

export default App;