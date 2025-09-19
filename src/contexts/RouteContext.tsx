import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Project } from '../data/projects';

export type Route = 'home' | 'project-detail';

interface RouteContextType {
  currentRoute: Route;
  selectedProject: Project | null;
  navigateToHome: () => void;
  navigateToProjects: () => void;
  navigateToProject: (project: Project) => void;
}

const RouteContext = createContext<RouteContextType | undefined>(undefined);

interface RouteProviderProps {
  children: ReactNode;
}

export function RouteProvider({ children }: RouteProviderProps): JSX.Element {
  const [currentRoute, setCurrentRoute] = useState<Route>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const navigateToHome = (): void => {
    setCurrentRoute('home');
    setSelectedProject(null);
    window.scrollTo(0, 0);
  };

  const navigateToProjects = (): void => {
    setCurrentRoute('home');
    setSelectedProject(null);
    // Wait for route change, then scroll to projects section
    setTimeout(() => {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const navigateToProject = (project: Project): void => {
    setSelectedProject(project);
    setCurrentRoute('project-detail');
    window.scrollTo(0, 0);
  };

  return (
    <RouteContext.Provider value={{
      currentRoute,
      selectedProject,
      navigateToHome,
      navigateToProjects,
      navigateToProject
    }}>
      {children}
    </RouteContext.Provider>
  );
}

export function useRoute(): RouteContextType {
  const context = useContext(RouteContext);
  if (context === undefined) {
    throw new Error('useRoute must be used within a RouteProvider');
  }
  return context;
}