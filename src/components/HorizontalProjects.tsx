import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from '../contexts/LanguageContext';
import { projects, Project } from '../data/projects';

interface HorizontalProjectsProps {
  isActive: boolean;
  onNext: () => void;
  onPrev: () => void;
}

const projectImages: Record<string, string> = {
  '1': 'https://images.unsplash.com/photo-1693486145118-d963c3a6ce6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBmYXNoaW9uJTIwbW9iaWxlfGVufDF8fHx8MTc1ODA1ODgyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  '2': 'https://images.unsplash.com/photo-1610913721979-b20ede600e63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmFseXRpY3MlMjBkYXNoYm9hcmQlMjBkYXJrfGVufDF8fHx8MTc1ODA1ODgyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  '3': 'https://images.unsplash.com/photo-1681826291722-70bd7e9e6fc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5raW5nJTIwbW9iaWxlJTIwYXBwfGVufDF8fHx8MTc1Nzk5NjEzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  '4': 'https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWFzJTIwcGxhdGZvcm0lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU4MDU4ODI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  '5': 'https://images.unsplash.com/photo-1737918543118-9c9e074c60b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzeXN0ZW0lMjBjb21wb25lbnRzfGVufDF8fHx8MTc1NzkzNzE2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  '6': 'https://images.unsplash.com/photo-1673515336319-20a3ea59c228?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBib29raW5nJTIwYXBwfGVufDF8fHx8MTc1ODA0OTUyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
};

const categoryGradients: Record<string, string> = {
  'ux-ui': 'from-purple-500 to-pink-500',
  'frontend': 'from-blue-500 to-cyan-500',
  'fullstack': 'from-green-500 to-teal-500'
};

export function HorizontalProjects({ isActive, onNext, onPrev }: HorizontalProjectsProps): JSX.Element {
  const { language, t } = useLanguage();
  const [currentProject, setCurrentProject] = useState<number>(0);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    if (isActive) {
      setMounted(true);
    }
  }, [isActive]);

  const project = projects[currentProject];

  const nextProject = (): void => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = (): void => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleKeyDown = (e: React.KeyboardEvent): void => {
    if (e.key === 'ArrowUp') {
      e.stopPropagation();
      prevProject();
    } else if (e.key === 'ArrowDown') {
      e.stopPropagation();
      nextProject();
    }
  };

  return (
    <div 
      className="h-full flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background to-muted/30"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-r ${categoryGradients[project.category]} opacity-5 transition-all duration-1000`} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      </div>

      {/* Navigation arrows */}
      <Button
        variant="ghost"
        size="sm"
        onClick={onPrev}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 z-20 bg-background/80 backdrop-blur-lg hover:bg-background border border-border/50 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300"
        aria-label="Previous section"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="ghost"
        size="sm"
        onClick={onNext}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 bg-background/80 backdrop-blur-lg hover:bg-background border border-border/50 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300"
        aria-label="Next section"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          
          {/* Project Image */}
          <div className={`order-2 lg:order-1 transition-all duration-1000 ${
            isActive && mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <Card className="relative overflow-hidden shadow-2xl border-0 bg-gradient-to-br from-card to-card/80 backdrop-blur-lg">
              <div className="aspect-video relative">
                <ImageWithFallback
                  src={projectImages[project.id]}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/20 to-transparent`} />
              </div>
              
              {/* Project counter */}
              <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-lg rounded-full px-3 py-1 text-sm font-medium shadow-lg">
                {currentProject + 1} / {projects.length}
              </div>
            </Card>
          </div>

          {/* Project Details */}
          <div className={`order-1 lg:order-2 space-y-8 transition-all duration-1000 delay-300 ${
            isActive && mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            
            {/* Header */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Badge className={`bg-gradient-to-r ${categoryGradients[project.category]} text-white border-0 shadow-lg font-medium px-4 py-1`}>
                  {project.category.replace('-', '/')}
                </Badge>
                <div className="flex space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={prevProject}
                    className="rounded-full p-2 hover:bg-muted/50"
                    aria-label="Previous project"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={nextProject}
                    className="rounded-full p-2 hover:bg-muted/50"
                    aria-label="Next project"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[var(--vibrant-purple)] to-[var(--vibrant-blue)] bg-clip-text text-transparent">
                {project.title}
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Technologies */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-[var(--vibrant-purple)] uppercase tracking-wide">
                {t('projects.technologies')}
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech: string, index: number) => (
                  <Badge 
                    key={tech} 
                    variant="outline" 
                    className={`text-xs font-medium border-2 ${
                      index % 3 === 0 ? 'border-purple-300 text-purple-700 hover:bg-purple-50 dark:border-purple-700 dark:text-purple-300' :
                      index % 3 === 1 ? 'border-blue-300 text-blue-700 hover:bg-blue-50 dark:border-blue-700 dark:text-blue-300' :
                      'border-green-300 text-green-700 hover:bg-green-50 dark:border-green-700 dark:text-green-300'
                    }`}
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Project Info */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-[var(--vibrant-blue)] uppercase tracking-wide">
                  {t('projects.role')}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {project.role[language]}
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-[var(--vibrant-green)] uppercase tracking-wide">
                  {t('projects.duration')}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {project.duration[language]}
                </p>
              </div>
            </div>

            {/* Challenge & Solution */}
            <div className="space-y-4">
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-[var(--vibrant-orange)] uppercase tracking-wide">
                  {t('projects.challenge')}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.challenge[language]}
                </p>
              </div>
            </div>

            {/* Links */}
            {project.links && (
              <div className="flex flex-wrap gap-3 pt-4">
                {project.links.demo && (
                  <Button 
                    variant="default"
                    size="sm" 
                    asChild
                    className="bg-gradient-to-r from-[var(--vibrant-blue)] to-[var(--vibrant-green)] hover:from-[var(--vibrant-green)] hover:to-[var(--vibrant-blue)] text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <a 
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Demo</span>
                    </a>
                  </Button>
                )}
                {project.links.github && (
                  <Button 
                    variant="outline"
                    size="sm" 
                    asChild
                    className="border-[var(--vibrant-purple)] text-[var(--vibrant-purple)] hover:bg-[var(--vibrant-purple)] hover:text-white transition-all duration-300"
                  >
                    <a 
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2"
                    >
                      <Github className="h-4 w-4" />
                      <span>GitHub</span>
                    </a>
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Project navigation dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-2 bg-background/80 backdrop-blur-lg rounded-full px-4 py-2 shadow-lg border border-border/50">
          {projects.map((_, index: number) => (
            <button
              key={index}
              onClick={() => setCurrentProject(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentProject
                  ? `bg-gradient-to-r ${categoryGradients[project.category]} w-6`
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/60'
              }`}
              aria-label={`View project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}