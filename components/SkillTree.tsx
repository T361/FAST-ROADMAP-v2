import React from 'react';
import { useAppStore } from '../store.tsx';
import { SUBJECTS } from '../constants.ts';
import { CheckCircle2, Circle, PlayCircle, FileText, ChevronLeft, BookOpen, Monitor } from 'lucide-react';
import { Subject, Module, Topic, Resource } from '../types.ts';

export const SkillTree: React.FC = () => {
  const { selectedSubjectId, setView, toggleResource, userProgress } = useAppStore();
  
  const subject = SUBJECTS.find(s => s.id === selectedSubjectId);

  if (!subject) {
    return (
        <div className="flex flex-col items-center justify-center h-full text-center p-4">
            <h2 className="text-xl md:text-2xl font-bold text-slate-300">No Subject Selected</h2>
            <p className="text-slate-500 mb-6">Select a subject from the Roadmap to view its Skill Tree.</p>
            <button onClick={() => setView('roadmap')} className="px-6 py-2 bg-brand-primary text-white rounded-lg hover:bg-indigo-600 transition-colors">Go to Roadmap</button>
        </div>
    )
  }

  // Calculate Progress
  const totalResources = subject.modules.flatMap(m => m.topics.flatMap(t => t.resources)).length;
  const completedCount = subject.modules.flatMap(m => m.topics.flatMap(t => t.resources))
    .filter(r => userProgress.completedResources.includes(r.id)).length;
  const progressPercent = totalResources > 0 ? Math.round((completedCount / totalResources) * 100) : 0;

  return (
    <div className="animate-fade-in pb-20 max-w-4xl mx-auto">
      <button 
        onClick={() => setView('roadmap')}
        className="flex items-center text-slate-500 hover:text-white mb-6 transition-colors"
      >
        <ChevronLeft className="w-4 h-4 mr-1" /> Back to Roadmap
      </button>

      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 border-b border-obsidian-800 pb-6 gap-4">
        <div>
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-2">{subject.title}</h1>
            <div className="flex items-center space-x-2">
                <span className="text-xs font-mono bg-obsidian-900 border border-obsidian-800 px-2 py-1 rounded text-brand-primary">{subject.code}</span>
                <p className="text-slate-400 text-sm md:text-base hidden md:block">{subject.description}</p>
            </div>
             <p className="text-slate-400 text-xs md:hidden mt-2">{subject.description}</p>
        </div>
        <div className="flex items-center justify-between md:block md:text-right bg-obsidian-900 md:bg-transparent p-3 md:p-0 rounded-lg">
            <span className="text-slate-400 text-sm md:hidden">Progress</span>
            <div>
                <div className="text-2xl md:text-4xl font-mono font-bold text-brand-accent">{progressPercent}%</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider hidden md:block">Completion</div>
            </div>
        </div>
      </div>

      <div className="relative border-l-2 border-obsidian-800 ml-4 md:ml-6 space-y-12">
        {subject.modules.map((module, mIdx) => (
          <ModuleNode 
            key={module.id} 
            module={module} 
            index={mIdx} 
            userProgress={userProgress}
            toggleResource={toggleResource}
          />
        ))}
      </div>
    </div>
  );
};

const ModuleNode: React.FC<{ 
    module: Module, 
    index: number, 
    userProgress: any,
    toggleResource: any
}> = ({ module, index, userProgress, toggleResource }) => {
    return (
        <div className="relative pl-6 md:pl-8">
            {/* Connector Dot */}
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-obsidian-950 border-2 border-brand-primary z-10 shadow-[0_0_15px_rgba(99,102,241,0.4)]"></div>
            
            <h3 className="text-lg md:text-xl font-bold text-slate-200 mb-6 flex items-center">
                <span className="text-brand-primary opacity-50 mr-3 text-base md:text-lg font-mono">0{index + 1}</span>
                {module.title}
            </h3>

            <div className="grid grid-cols-1 gap-4 md:gap-6">
                {module.topics.map((topic) => (
                    <TopicCard 
                        key={topic.id} 
                        topic={topic} 
                        userProgress={userProgress}
                        toggleResource={toggleResource}
                    />
                ))}
            </div>
        </div>
    )
}

const TopicCard: React.FC<{ 
    topic: Topic, 
    userProgress: any, 
    toggleResource: any 
}> = ({ topic, userProgress, toggleResource }) => {
    return (
        <div className="bg-obsidian-900 border border-obsidian-800 rounded-xl p-4 md:p-5 hover:border-brand-primary/30 transition-all duration-300 group">
            <h4 className="font-semibold text-slate-200 mb-3 pb-2 border-b border-obsidian-800 flex items-center text-sm md:text-base">
                {topic.title}
            </h4>
            <div className="space-y-2">
                {topic.resources.map(resource => {
                    const isCompleted = userProgress.completedResources.includes(resource.id);
                    
                    const getIcon = (type: string) => {
                        switch(type) {
                            case 'video': return <PlayCircle size={14} />;
                            case 'article': return <FileText size={14} />;
                            case 'book': return <BookOpen size={14} />;
                            case 'practice': return <Monitor size={14} />;
                            default: return <Circle size={14} />;
                        }
                    }

                    return (
                        <div 
                            key={resource.id} 
                            className={`flex items-center space-x-3 p-2 md:p-3 rounded-lg transition-all border border-transparent ${
                                isCompleted 
                                    ? 'bg-emerald-500/5 border-emerald-500/10' 
                                    : 'hover:bg-obsidian-800 hover:border-obsidian-700 hover:shadow-lg hover:shadow-black/20'
                            }`}
                        >
                            <button 
                                onClick={() => toggleResource(resource.id)}
                                className={`flex-shrink-0 transition-colors ${isCompleted ? 'text-emerald-500' : 'text-slate-600 hover:text-slate-400'}`}
                            >
                                {isCompleted ? <CheckCircle2 size={18} /> : <Circle size={18} />}
                            </button>
                            
                            <a href={resource.url} target="_blank" rel="noopener noreferrer" className="flex-1 group/link overflow-hidden">
                                <div className="flex items-center justify-between">
                                    <span className={`text-sm font-medium truncate pr-2 ${isCompleted ? 'text-slate-400 line-through decoration-slate-600' : 'text-slate-300 group-hover/link:text-brand-primary transition-colors'}`}>
                                        {resource.title}
                                    </span>
                                    {resource.badge && (
                                        <span className={`flex-shrink-0 text-[10px] px-2 py-0.5 rounded-full border ${
                                            resource.badge === 'Critical' || resource.badge === 'Essential' ? 'border-red-500/30 text-red-400 bg-red-500/5' : 
                                            resource.badge === 'Legendary' || resource.badge === 'Best Source' ? 'border-yellow-500/30 text-yellow-400 bg-yellow-500/5' :
                                            'border-slate-700 text-slate-500'
                                        }`}>
                                            {resource.badge}
                                        </span>
                                    )}
                                </div>
                                <div className="flex items-center mt-1 space-x-3 text-xs text-slate-600">
                                    <span className="flex items-center space-x-1 uppercase tracking-wider font-bold">
                                        {getIcon(resource.type)}
                                        <span>{resource.type}</span>
                                    </span>
                                    {resource.duration && (
                                        <span>• {resource.duration}</span>
                                    )}
                                </div>
                            </a>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}