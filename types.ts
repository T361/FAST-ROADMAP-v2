export type ResourceType = 'video' | 'article' | 'book' | 'interactive' | 'practice';

export interface Resource {
  id: string;
  title: string;
  type: ResourceType;
  url: string;
  duration?: string; 
  badge?: string; // e.g. "Essential", "Advanced"
}

export interface Topic {
  id: string;
  title: string;
  resources: Resource[];
}

export interface Module {
  id: string;
  title: string;
  topics: Topic[];
}

export interface Subject {
  id: string;
  code: string;
  title: string;
  credits: number;
  modules: Module[];
  description?: string;
}

export interface UserProgress {
  completedResources: string[]; // IDs
  courseGrades: Record<string, number>; 
  studyHours: number;
}

export interface AppState {
  currentView: 'roadmap' | 'skillTree';
  selectedSubjectId: string | null;
  userProgress: UserProgress;
  toggleResource: (resourceId: string) => void;
  setGrade: (subjectId: string, grade: number) => void;
  setView: (view: AppState['currentView']) => void;
  selectSubject: (subjectId: string) => void;
}