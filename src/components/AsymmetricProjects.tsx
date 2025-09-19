import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Eye, Code, Palette } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from '../contexts/LanguageContext';
import { projects, Project } from '../data/projects';

const projectImages: Record<string, string> = {
  '1': 'https://images.unsplash.com/photo-1693486145118-d963c3a6ce6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBmYXNoaW9uJTIwbW9iaWxlfGVufDF8fHx8MTc1ODA1ODgyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  '2': 'https://images.unsplash.com/photo-1610913721979-b20ede600e63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmFseXRpY3MlMjBkYXNoYm9hcmQlMjBkYXJrfGVufDF8fHx8MTc1ODA1ODgyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  '3': 'https://images.unsplash.com/photo-1681826291722-70bd7e9e6fc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5raW5nJTIwbW9iaWxlJTIwYXBwfGVufDF8fHx8MTc1Nzk5NjEzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  '4': 'https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWFzJTIwcGxhdGZvcm0lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU4MDU4ODI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  '5': 'https://images.unsplash.com/photo-1737918543118-9c9e074c60b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzeXN0ZW0lMjBjb21wb25lbnRzfGVufDF8fHx8MTc1NzkzNzE2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  '6': 'https://images.unsplash.com/photo-1673515336319-20a3ea59c228?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBib29raW5nJTIwYXBwfGVufDF8fHx8MTc1ODA0OTUyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
};

const categoryIcons = {
  'ux-ui': Palette,
  'frontend': Code,
  'fullstack': Eye
};

const asymmetricGridPositions = [
  'col-span-12 lg:col-span-7 lg:row-span-2', // Large featured
  'col-span-12 lg:col-span-5 lg:row-span-1', // Medium
  'col-span-12 lg:col-span-4 lg:row-span-1', // Small
  'col-span-12 lg:col-span-8 lg:row-span-1', // Wide
  'col-span-12 lg:col-span-6 lg:row-span-2', // Tall
  'col-span-12 lg:col-span-6 lg:row-span-1', // Medium
];

const rotations = ['rotate-1', '-rotate-1', 'rotate-2', '-rotate-2', 'rotate-3', '-rotate-3'];

export function AsymmetricProjects(): JSX.Element {
  const { language, t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [visibleProjects, setVisibleProjects] = useState<boolean[]>(new Array(projects.length).fill(false));

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
      { threshold: 0.1 }
    );

    const projectElements = document.querySelectorAll('[data-project-index]');
    projectElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleProjectClick = (project: Project): void => {
    setSelectedProject(selectedProject?.id === project.id ? null : project);
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Asymmetric section header */}
        <div className="mb-20 relative">
          <div className="grid grid-cols-12 gap-6 items-end">
            <div className="col-span-12 lg:col-span-8">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[var(--vibrant-purple)] via-[var(--vibrant-blue)] to-[var(--vibrant-green)] bg-clip-text text-transparent transform -skew-x-6">
                {t('projects.title')}
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-4">
              <Card className="p-4 bg-gradient-to-br from-[var(--vibrant-orange)]/5 to-[var(--vibrant-pink)]/5 border-[var(--vibrant-orange)]/20 transform rotate-2">
                <p className="text-muted-foreground transform -rotate-2">
                  {t('projects.subtitle')}
                </p>
              </Card>
            </div>
          </div>
        </div>

        {/* Broken grid layout */}
        <div className="grid grid-cols-12 gap-6 auto-rows-min">
          {projects.map((project: Project, index: number) => {
            const Icon = categoryIcons[project.category];
            const isVisible = visibleProjects[index];
            const gridClass = asymmetricGridPositions[index % asymmetricGridPositions.length];
            const rotation = rotations[index % rotations.length];
            const isSelected = selectedProject?.id === project.id;
            
            return (
              <div 
                key={project.id}
                data-project-index={index}
                className={`${gridClass} transition-all duration-700 delay-${index * 100} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <Card 
                  className={`group cursor-pointer h-full overflow-hidden transition-all duration-500 hover:shadow-2xl ${
                    isSelected 
                      ? 'scale-105 shadow-2xl border-[var(--vibrant-purple)] ring-2 ring-[var(--vibrant-purple)]/20' 
                      : `hover:scale-105 transform ${rotation} hover:rotate-0 border-border/50`
                  }`}
                  onClick={() => handleProjectClick(project)}
                >
                  {/* Asymmetric image container */}
                  <div className={`relative overflow-hidden ${
                    index % 2 === 0 ? 'aspect-video' : 'aspect-square'
                  }`}>
                    <ImageWithFallback
                      src={projectImages[project.id]}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Overlay with category icon */}
                    <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/40" />
                    <div className="absolute top-4 left-4">
                      <div className="bg-background/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                        <Icon className="h-5 w-5 text-[var(--vibrant-purple)]" />
                      </div>
                    </div>
                    
                    {/* Project number */}
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-[var(--vibrant-purple)] to-[var(--vibrant-pink)] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>

                    {/* Quick actions on hover */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                      {project.links?.demo && (
                        <Button
                          size="sm"
                          variant="secondary"
                          className="bg-white/90 hover:bg-white"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.links!.demo, '_blank');
                          }}
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo
                        </Button>
                      )}
                      {project.links?.github && (
                        <Button
                          size="sm"
                          variant="secondary"
                          className="bg-white/90 hover:bg-white"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.links!.github, '_blank');
                          }}
                        >
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Asymmetric content */}
                  <div className={`p-6 space-y-4 ${
                    index % 3 === 0 ? 'transform skew-y-1' : 
                    index % 3 === 1 ? 'transform -skew-y-1' : ''
                  }`}>
                    <div className="space-y-2">
                      <h3 className={`font-bold text-lg group-hover:text-[var(--vibrant-purple)] transition-colors ${
                        index % 3 === 0 ? 'transform -skew-y-1' : 
                        index % 3 === 1 ? 'transform skew-y-1' : ''
                      }`}>
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm line-clamp-2">
                        {project.description}
                      </p>
                    </div>

                    {/* Technologies with asymmetric layout */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech: string, techIndex: number) => (
                        <Badge 
                          key={tech}
                          variant="outline"
                          className={`text-xs ${
                            techIndex % 2 === 0 ? 'transform rotate-1' : 'transform -rotate-1'
                          } hover:rotate-0 transition-transform duration-200`}
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Asymmetric project detail */}
        {selectedProject && (
          <div className="mt-16 relative">
            <Card className="overflow-hidden border-2 border-[var(--vibrant-purple)]/20 bg-gradient-to-br from-background to-muted/30 transform -skew-y-1">
              <div className="p-8 transform skew-y-1">
                <div className="grid grid-cols-12 gap-8">
                  
                  {/* Title and description */}
                  <div className="col-span-12 lg:col-span-7 space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[var(--vibrant-purple)] to-[var(--vibrant-blue)] bg-clip-text text-transparent">
                        {selectedProject.title}
                      </h3>
                      <p className="text-lg text-muted-foreground">
                        {selectedProject.description}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold text-[var(--vibrant-purple)]">
                        {t('projects.challenge')}
                      </h4>
                      <p className="text-muted-foreground">
                        {selectedProject.challenge[language]}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold text-[var(--vibrant-blue)]">
                        {t('projects.solution')}
                      </h4>
                      <p className="text-muted-foreground">
                        {selectedProject.solution[language]}
                      </p>
                    </div>
                  </div>

                  {/* Side info */}
                  <div className="col-span-12 lg:col-span-5 space-y-6">
                    
                    {/* Project info cards */}
                    <div className="space-y-4">
                      <Card className="p-4 bg-gradient-to-br from-[var(--vibrant-purple)]/5 to-[var(--vibrant-pink)]/5 border-[var(--vibrant-purple)]/20 transform rotate-1">
                        <h5 className="font-semibold text-[var(--vibrant-purple)] mb-2">
                          {t('projects.role')}
                        </h5>
                        <p className="text-sm text-muted-foreground">
                          {selectedProject.role[language]}
                        </p>
                      </Card>

                      <Card className="p-4 bg-gradient-to-br from-[var(--vibrant-blue)]/5 to-[var(--vibrant-green)]/5 border-[var(--vibrant-blue)]/20 transform -rotate-1">
                        <h5 className="font-semibold text-[var(--vibrant-blue)] mb-2">
                          {t('projects.duration')}
                        </h5>
                        <p className="text-sm text-muted-foreground">
                          {selectedProject.duration[language]}
                        </p>
                      </Card>
                    </div>

                    {/* Technologies */}
                    <div className="space-y-3">
                      <h5 className="font-semibold text-[var(--vibrant-green)]">
                        {t('projects.technologies')}
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech: string, index: number) => (
                          <Badge 
                            key={tech}
                            variant="secondary"
                            className={`text-xs transform ${
                              index % 2 === 0 ? 'rotate-1' : '-rotate-1'
                            } hover:rotate-0 transition-transform duration-200`}
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    {selectedProject.links && (
                      <div className="flex flex-wrap gap-3">
                        {selectedProject.links.demo && (
                          <Button
                            asChild
                            size="sm"
                            className="bg-gradient-to-r from-[var(--vibrant-blue)] to-[var(--vibrant-green)] hover:from-[var(--vibrant-green)] hover:to-[var(--vibrant-blue)] text-white"
                          >
                            <a href={selectedProject.links.demo} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Demo
                            </a>
                          </Button>
                        )}
                        {selectedProject.links.github && (
                          <Button
                            asChild
                            size="sm"
                            variant="outline"
                            className="border-[var(--vibrant-purple)] text-[var(--vibrant-purple)] hover:bg-[var(--vibrant-purple)] hover:text-white"
                          >
                            <a href={selectedProject.links.github} target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4 mr-2" />
                              GitHub
                            </a>
                          </Button>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
}