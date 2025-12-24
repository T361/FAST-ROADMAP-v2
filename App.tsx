import React, { Component, ReactNode } from 'react';
import { AppProvider, useAppStore } from './store.tsx';
import { Layout } from './components/Layout.tsx';
import { SkillTree } from './components/SkillTree.tsx';
import { SUBJECTS } from './constants.ts';
import { ArrowRight, Book, AlertTriangle } from 'lucide-react';

interface ErrorBoundaryProps {
  children?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: any;
}

// Error Boundary Component
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = {
    hasError: false,
    error: null
  };

  static getDerivedStateFromError(error: any): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-8 text-white bg-obsidian-950 min-h-screen flex flex-col items-center justify-center font-sans">
          <div className="bg-brand-danger/10 p-4 rounded-full mb-4">
            <AlertTriangle className="w-12 h-12 text-brand-danger" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Something went wrong</h1>
          <p className="text-slate-400 mb-6 text-center max-w-md">
            The application encountered a critical error. This usually happens due to corrupted local data or a connection issue.
          </p>
          <pre className="bg-obsidian-900 p-4 rounded text-xs font-mono text-slate-400 max-w-2xl overflow-auto w-full mb-6 border border-obsidian-800">
            {this.state.error?.toString()}
          </pre>
          <button 
            onClick={() => { localStorage.clear(); window.location.reload(); }}
            className="px-6 py-3 bg-brand-primary text-white font-semibold rounded-lg hover:bg-indigo-600 transition-colors shadow-lg shadow-brand-primary/20"
          >
            Clear Data & Reload
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

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
    <ErrorBoundary>
        <AppProvider>
          <AppContent />
        </AppProvider>
    </ErrorBoundary>
  );
};

export default App;