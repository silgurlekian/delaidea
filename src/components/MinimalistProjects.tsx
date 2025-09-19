import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Eye, Filter, X, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from '../contexts/LanguageContext';
import { useRoute } from '../contexts/RouteContext';
import { projects, Project } from '../data/projects';

const projectImages: Record<string, string> = {
  '1': 'https://images.unsplash.com/photo-1693486145118-d963c3a6ce6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBmYXNoaW9uJTIwbW9iaWxlfGVufDF8fHx8MTc1ODA1ODgyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  '2': 'https://images.unsplash.com/photo-1610913721979-b20ede600e63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmFseXRpY3MlMjBkYXNoYm9hcmQlMjBkYXJrfGVufDF8fHx8MTc1ODA1ODgyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  '3': 'https://images.unsplash.com/photo-1681826291722-70bd7e9e6fc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5raW5nJTIwbW9iaWxlJTIwYXBwfGVufDF8fHx8MTc1Nzk5NjEzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  '4': 'https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWFzJTIwcGxhdGZvcm0lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU4MDU4ODI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  '5': 'https://images.unsplash.com/photo-1737918543118-9c9e074c60b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzeXN0ZW0lMjBjb21wb25lbnRzfGVufDF8fHx8MTc1NzkzNzE2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  '6': 'https://images.unsplash.com/photo-1673515336319-20a3ea59c228?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBib29raW5nJTIwYXBwfGVufDF8fHx8MTc1ODA0OTUyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  '7': 'https://images.unsplash.com/photo-1737918543118-9c9e074c60b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzeXN0ZW0lMjBjb21wb25lbnRzfGVufDF8fHx8MTc1NzkzNzE2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
};

type ProjectCategory = 'all' | 'ux-ui' | 'frontend' | 'fullstack';

interface FilterOption {
  value: ProjectCategory;
  label: string;
  count: number;
}

export function MinimalistProjects(): JSX.Element {
  const { t } = useLanguage();
  const { navigateToProject } = useRoute();
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [visibleProjects, setVisibleProjects] = useState<boolean[]>(new Array(projects.length).fill(false));

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  // Create filter options with project counts
  const filterOptions: FilterOption[] = [
    { 
      value: 'all', 
      label: t('projects.filter.all'), 
      count: projects.length 
    },
    { 
      value: 'ux-ui', 
      label: 'UX/UI', 
      count: projects.filter(p => p.category === 'ux-ui').length 
    },
    { 
      value: 'frontend', 
      label: 'Frontend', 
      count: projects.filter(p => p.category === 'frontend').length 
    },
    { 
      value: 'fullstack', 
      label: 'Full Stack', 
      count: projects.filter(p => p.category === 'fullstack').length 
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-project-index') || '0');
            setVisibleProjects(prev => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    const projectElements = document.querySelectorAll('[data-project-index]');
    projectElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [filteredProjects]);

  const handleProjectClick = (project: Project): void => {
    navigateToProject(project);
  };

  const handleFilterChange = (category: ProjectCategory): void => {
    setSelectedCategory(category);
    setVisibleProjects(new Array(filteredProjects.length).fill(false)); // Reset animations
  };

  return (
    <section id="projects" className="py-24 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Clean section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
            {t('projects.title')}
          </h2>
          <div className="w-16 h-px bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </div>

        {/* Clean filter system */}
        <div className="mb-12">
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-1 bg-muted/50 rounded-lg p-1">
              {filterOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleFilterChange(option.value)}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                    selectedCategory === option.value
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-foreground hover:bg-background/50'
                  }`}
                >
                  <span>{option.label}</span>
                  <span className="ml-2 text-xs opacity-70">({option.count})</span>
                </button>
              ))}
            </div>
          </div>
          
          {/* Active filter indicator */}
          {selectedCategory !== 'all' && (
            <div className="flex items-center justify-center mt-4">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Filter className="h-4 w-4" />
                <span>
                  {t('projects.filter.showing')} {filteredProjects.length} {t('projects.filter.projectsIn')} {filterOptions.find(f => f.value === selectedCategory)?.label}
                </span>
                <button
                  onClick={() => handleFilterChange('all')}
                  className="ml-2 p-1 hover:bg-muted rounded-full transition-colors"
                  aria-label={t('projects.filter.clear')}
                >
                  <X className="h-3 w-3" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Clean grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project: Project, index: number) => {
            const isVisible = visibleProjects[index];
            
            return (
              <div 
                key={project.id}
                data-project-index={index}
                className={`transition-all duration-700 delay-${index * 100} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <Card 
                  className="group cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-md border-border/50"
                  onClick={() => handleProjectClick(project)}
                >
                  {/* Clean image container */}
                  <div className="relative aspect-video overflow-hidden">
                    <ImageWithFallback
                      src={projectImages[project.id]}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors duration-300" />
                    
                    {/* Project details overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-center text-white space-y-2">
                        <Eye className="h-6 w-6 mx-auto" />
                        <p className="text-sm font-medium">
                          {t('projects.viewDetails')}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Clean content */}
                  <div className="p-6 space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-start justify-between">
                        <h3 className="font-medium text-lg text-foreground group-hover:text-primary transition-colors duration-200 line-clamp-2">
                          {project.title}
                        </h3>
                        <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-all duration-200 flex-shrink-0 ml-2" />
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                        {project.description}
                      </p>
                    </div>

                    {/* Clean category and links */}
                    <div className="flex items-center justify-between">
                      <Badge 
                        variant="outline" 
                        className="text-xs font-normal border-primary/20 text-primary bg-primary/5"
                      >
                        {project.category.replace('-', '/')}
                      </Badge>
                      
                      {/* Simple links */}
                      <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {project.links?.demo && (
                          <Button
                            size="sm"
                            variant="ghost"
                            className="h-8 w-8 p-0"
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(project.links!.demo, '_blank');
                            }}
                            aria-label="View demo"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        )}
                        {project.links?.github && (
                          <Button
                            size="sm"
                            variant="ghost"
                            className="h-8 w-8 p-0"
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(project.links!.github, '_blank');
                            }}
                            aria-label="View code"
                          >
                            <Github className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Empty state for filtered results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <Filter className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-medium text-foreground mb-2">
                {t('projects.empty.title')}
              </h3>
              <p className="text-muted-foreground mb-6">
                {t('projects.empty.description')}
              </p>
              <Button
                onClick={() => handleFilterChange('all')}
                variant="outline"
              >
                {t('projects.empty.viewAll')}
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}