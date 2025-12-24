import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { AppState, UserProgress } from './types';

// Default State
const initialProgress: UserProgress = {
  completedResources: [],
  courseGrades: {
    'cs-2001': 3.67, // Data Structures
    'cs-1002': 4.0, // PF
  },
  studyHours: 42,
};

const AppContext = createContext<AppState | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentView, setView] = useState<AppState['currentView']>('roadmap'); // Default to Roadmap
  const [selectedSubjectId, selectSubject] = useState<string | null>(null);
  const [userProgress, setUserProgress] = useState<UserProgress>(initialProgress);

  // Persistence Mock
  useEffect(() => {
    const saved = localStorage.getItem('fast-roadmap-progress');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Safely merge to ensure all required fields exist
        if (parsed && typeof parsed === 'object') {
            setUserProgress({
                ...initialProgress,
                ...parsed,
                completedResources: Array.isArray(parsed.completedResources) ? parsed.completedResources : [],
                courseGrades: parsed.courseGrades || initialProgress.courseGrades
            });
        }
      } catch (e) {
        console.error("Failed to load progress", e);
        // If corrupt, clear it
        localStorage.removeItem('fast-roadmap-progress');
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('fast-roadmap-progress', JSON.stringify(userProgress));
  }, [userProgress]);

  const toggleResource = (resourceId: string) => {
    setUserProgress(prev => {
      const isCompleted = prev.completedResources.includes(resourceId);
      const newResources = isCompleted
        ? prev.completedResources.filter(id => id !== resourceId)
        : [...prev.completedResources, resourceId];
      
      return {
        ...prev,
        completedResources: newResources,
      };
    });
  };

  const setGrade = (subjectId: string, grade: number) => {
    setUserProgress(prev => ({
      ...prev,
      courseGrades: { ...prev.courseGrades, [subjectId]: grade }
    }));
  };

  const value: AppState = {
    currentView,
    selectedSubjectId,
    userProgress,
    toggleResource,
    setGrade,
    setView,
    selectSubject,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppStore = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useAppStore must be used within AppProvider");
  return context;
};