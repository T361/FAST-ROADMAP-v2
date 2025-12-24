import React, { useState } from 'react';
import { useAppStore } from '../store.tsx';
import { 
  Map, 
  Network, 
  GraduationCap,
  Menu,
  X
} from 'lucide-react';

export const Sidebar: React.FC<{ isOpen: boolean, setIsOpen: (v: boolean) => void }> = ({ isOpen, setIsOpen }) => {
  const { currentView, setView } = useAppStore();

  const handleNav = (view: string) => {
    setView(view as any);
    setIsOpen(false); // Close on mobile after click
  };

  const NavItem = ({ view, icon: Icon, label }: { view: string, icon: any, label: string }) => (
    <button
      onClick={() => handleNav(view)}
      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
        currentView === view 
          ? 'bg-brand-primary/10 text-brand-primary shadow-lg shadow-brand-primary/5' 
          : 'text-obsidian-700 hover:bg-obsidian-900 hover:text-slate-200'
      }`}
    >
      <Icon className={`w-5 h-5 ${currentView === view ? 'text-brand-primary' : 'text-obsidian-700 group-hover:text-slate-200'}`} />
      <span className="font-medium text-sm">{label}</span>
    </button>
  );

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-40 md:hidden backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <div className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-obsidian-950 border-r border-obsidian-800 
        transform transition-transform duration-300 ease-in-out flex flex-col p-4
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0
      `}>
        <div className="flex items-center justify-between px-4 py-4 mb-8">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-brand-primary to-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-brand-primary/20">
              <GraduationCap className="text-white w-6 h-6" />
            </div>
            <div>
              <h1 className="text-slate-100 font-bold text-lg tracking-tight">FAST Roadmap</h1>
              <p className="text-obsidian-700 text-xs font-mono">Zen Obsidian v2.1</p>
            </div>
          </div>
          {/* Close Button Mobile */}
          <button 
            onClick={() => setIsOpen(false)}
            className="md:hidden text-slate-400 hover:text-white"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex-1 space-y-1">
          <div className="px-4 pb-2">
            <p className="text-xs font-semibold text-obsidian-700 uppercase tracking-wider">Academics</p>
          </div>
          <NavItem view="roadmap" icon={Map} label="Roadmap" />
          <NavItem view="skillTree" icon={Network} label="Skill Trees" />
        </nav>
      </div>
    </>
  );
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-obsidian-950 flex font-sans">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      
      <main className="flex-1 md:ml-64 transition-all duration-300 flex flex-col min-h-screen">
        {/* Mobile Header */}
        <div className="md:hidden flex items-center p-4 border-b border-obsidian-800 bg-obsidian-950/80 backdrop-blur sticky top-0 z-30">
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="text-slate-200 p-2 hover:bg-obsidian-900 rounded-lg"
          >
            <Menu size={24} />
          </button>
          <span className="ml-3 font-bold text-slate-200">Menu</span>
        </div>

        <div className="p-4 md:p-8 flex-1">
          {children}
        </div>
      </main>
    </div>
  );
};