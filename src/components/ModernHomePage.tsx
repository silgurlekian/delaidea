import React, { useState } from 'react';
import { ModernHero } from './ModernHero';
import { ModernProjects } from './ModernProjects';
import { ModernContact } from './ModernContact';
import { ProjectDetailView } from './ProjectDetailView';
import { Project } from '../data/projects';

export function ModernHomePage(): JSX.Element {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleProjectSelect = (project: Project): void => {
    setSelectedProject(selectedProject?.id === project.id ? null : project);
  };

  const handleCloseProject = (): void => {
    setSelectedProject(null);
  };

  return (
    <main className="relative">
      {/* Hero Section */}
      <ModernHero />
      
      {/* Projects Section */}
      <ModernProjects 
        onProjectSelect={handleProjectSelect}
        selectedProject={selectedProject}
      />
      
      {/* Project Detail View - Inline */}
      {selectedProject && (
        <div className="px-6 lg:px-8 pb-20">
          <div className="max-w-6xl mx-auto">
            <ProjectDetailView 
              project={selectedProject} 
              onClose={handleCloseProject}
            />
          </div>
        </div>
      )}
      
      {/* Contact Section */}
      <ModernContact />
    </main>
  );
}