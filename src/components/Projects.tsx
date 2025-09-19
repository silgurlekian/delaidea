import React, { useState } from 'react';
import { Button } from './ui/button';
import { ProjectCard } from './ProjectCard';
import { ProjectDetail } from './ProjectDetail';
import { useLanguage } from '../contexts/LanguageContext';
import { projects, Project } from '../data/projects';

const categories = ['all', 'ux-ui', 'frontend', 'fullstack'] as const;
type Category = typeof categories[number];

export function Projects(): JSX.Element {
  const { t, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter((project: Project) => project.category === selectedCategory);

  const handleViewDetails = (project: Project): void => {
    if (selectedProject?.id === project.id) {
      setSelectedProject(null); // Close if same project
    } else {
      setSelectedProject(project); // Open new project
      // Scroll to project detail section
      setTimeout(() => {
        const detailElement = document.getElementById('project-detail');
        if (detailElement) {
          detailElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  const handleCloseDetail = (): void => {
    setSelectedProject(null);
  };

  const categoryLabels: Record<Category, string> = {
    all: 'Todos',
    'ux-ui': 'UX/UI',
    frontend: 'Frontend',
    fullstack: 'Full Stack'
  };

  const categoryLabelsEn: Record<Category, string> = {
    all: 'All',
    'ux-ui': 'UX/UI',
    frontend: 'Frontend',
    fullstack: 'Full Stack'
  };

  const labels = language === 'es' ? categoryLabels : categoryLabelsEn;

  const categoryGradients: Record<Category, string> = {
    all: 'from-[var(--vibrant-purple)] to-[var(--vibrant-pink)]',
    'ux-ui': 'from-purple-500 to-pink-500',
    frontend: 'from-blue-500 to-cyan-500',
    fullstack: 'from-green-500 to-teal-500'
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[var(--vibrant-purple)] via-[var(--vibrant-blue)] to-[var(--vibrant-green)] bg-clip-text text-transparent">
            {t('projects.title')}
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('projects.subtitle')}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category: Category) => (
            <Button
              key={category}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? `bg-gradient-to-r ${categoryGradients[category]} text-white shadow-lg hover:shadow-xl transform hover:scale-105`
                  : 'bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground'
              }`}
            >
              {labels[category]}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProjects.map((project: Project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onViewDetails={handleViewDetails}
              isSelected={selectedProject?.id === project.id}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              {language === 'es' 
                ? 'No hay proyectos en esta categoría.' 
                : 'No projects in this category.'}
            </p>
          </div>
        )}

        {/* Project Detail Section */}
        {selectedProject && (
          <div id="project-detail" className="mt-16 scroll-mt-24">
            <div className="max-w-6xl mx-auto">
              <ProjectDetail
                project={selectedProject}
                onClose={handleCloseDetail}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}