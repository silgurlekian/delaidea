import React, { useState } from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ProjectCard } from './ProjectCard';
import { Project } from '../types/portfolio';
import { useLanguage } from '../context/LanguageContext';

interface ProjectsGridProps {
  projects: Project[];
  onViewDetails: (project: Project) => void;
}

export const ProjectsGrid: React.FC<ProjectsGridProps> = ({ projects, onViewDetails }) => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<'all' | 'ux-ui' | 'frontend' | 'fullstack'>('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const filterOptions = [
    { key: 'all', label: { es: 'TODOS', en: 'ALL' } },
    { key: 'ux-ui', label: { es: 'UX/UI', en: 'UX/UI' } },
    { key: 'frontend', label: { es: 'FRONTEND', en: 'FRONTEND' } },
    { key: 'fullstack', label: { es: 'FULLSTACK', en: 'FULLSTACK' } }
  ];

  const categoryStats = {
    all: projects.length,
    'ux-ui': projects.filter(p => p.category === 'ux-ui').length,
    'frontend': projects.filter(p => p.category === 'frontend').length,
    'fullstack': projects.filter(p => p.category === 'fullstack').length
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900" id="proyectos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <div className="space-y-2">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black">
                <span className="bg-yellow-400 text-black px-8 py-4 inline-block hover:scale-105 transition-transform duration-300 cursor-default">
                  {t('projects-title', { es: 'PROYECTOS', en: 'PROJECTS' })}
                </span>
              </h2>
              <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black">
                <span className="bg-black text-white px-8 py-4 inline-block transform rotate-1 hover:rotate-0 transition-transform duration-300 cursor-default">
                  {t('recent-title', { es: 'RECIENTES', en: 'RECENT' })}
                </span>
              </h3>
            </div>
          </div>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filterOptions.map((option) => (
            <button
              key={option.key}
              onClick={() => setFilter(option.key as 'all' | 'ux-ui' | 'frontend' | 'fullstack')}
              className={`px-6 py-3 font-black text-sm border-2 transition-colors ${
                filter === option.key
                  ? 'bg-black text-white border-black'
                  : 'bg-white text-black border-black hover:bg-black hover:text-white'
              }`}
            >
              {t(`filter-${option.key}`, option.label)}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onViewDetails={onViewDetails}
            />
          ))}
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">🔍</span>
            </div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              {t('no-projects', { es: 'No hay proyectos', en: 'No projects found' })}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {t('no-projects-message', {
                es: 'No se encontraron proyectos para el filtro seleccionado.',
                en: 'No projects found for the selected filter.'
              })}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};