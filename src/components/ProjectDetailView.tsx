import React from 'react';
import { ExternalLink, Github, Eye, X } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { Separator } from './ui/separator';
import { useLanguage } from '../contexts/LanguageContext';
import { Project } from '../data/projects';

interface ProjectDetailViewProps {
  project: Project;
  onClose: () => void;
}

export function ProjectDetailView({ project, onClose }: ProjectDetailViewProps): JSX.Element {
  const { language, t } = useLanguage();

  return (
    <div className="max-w-5xl mx-auto">
      <Card className="overflow-hidden border-primary/20 bg-muted/30">
        <div className="p-8 md:p-12">
          
          {/* Project header */}
          <div className="mb-8">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-3xl lg:text-4xl font-light text-foreground mb-2">
                  {typeof project.title === 'string' ? project.title : project.title[language]}
                </h3>
                <Badge 
                  variant="outline" 
                  className="border-primary/20 text-primary bg-primary/5"
                >
                  {project.category.replace('-', '/')}
                </Badge>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="flex-shrink-0 ml-4"
                aria-label={language === 'es' ? 'Cerrar detalles' : 'Close details'}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {typeof project.description === 'string' ? project.description : project.description[language]}
            </p>
          </div>

          <Separator className="mb-8" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Main content */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Challenges */}
              <div className="space-y-3">
                <h4 className="text-xl font-medium text-foreground flex items-center">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-primary font-bold text-sm">01</span>
                  </div>
                  {language === 'es' ? 'Desafíos' : 'Challenges'}
                </h4>
                <div className="ml-11">
                  {project.challenges && project.challenges[language] && (
                    <ul className="space-y-2 text-muted-foreground leading-relaxed">
                      {project.challenges[language].map((challenge, index) => (
                        <li key={index} className="flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              {/* Outcomes */}
              <div className="space-y-3">
                <h4 className="text-xl font-medium text-foreground flex items-center">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-primary font-bold text-sm">02</span>
                  </div>
                  {language === 'es' ? 'Resultados' : 'Outcomes'}
                </h4>
                <div className="ml-11">
                  {project.outcomes && project.outcomes[language] && (
                    <ul className="space-y-2 text-muted-foreground leading-relaxed">
                      {project.outcomes[language].map((outcome, index) => (
                        <li key={index} className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>

            {/* Side info */}
            <div className="space-y-8">
              
              {/* Project meta */}
              <div className="space-y-6">
                <div className="space-y-3">
                  <h5 className="font-medium text-foreground text-sm uppercase tracking-wide text-primary">
                    {t('projects.role')}
                  </h5>
                  <p className="text-muted-foreground">
                    {project.role && typeof project.role === 'object' ? project.role[language] : project.role || 'N/A'}
                  </p>
                </div>

                <Separator />

                <div className="space-y-3">
                  <h5 className="font-medium text-foreground text-sm uppercase tracking-wide text-primary">
                    {t('projects.duration')}
                  </h5>
                  <p className="text-muted-foreground">
                    {project.duration && typeof project.duration === 'object' ? project.duration[language] : project.duration || 'N/A'}
                  </p>
                </div>
              </div>

              <Separator />

              {/* Technologies */}
              <div className="space-y-4">
                <h5 className="font-medium text-foreground text-sm uppercase tracking-wide text-primary">
                  {t('projects.technologies')}
                </h5>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech: string) => (
                    <Badge 
                      key={tech}
                      variant="secondary"
                      className="text-xs font-normal"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Links */}
              {project.links && (
                <div className="space-y-4">
                  <h5 className="font-medium text-foreground text-sm uppercase tracking-wide text-primary">
                    Links
                  </h5>
                  <div className="space-y-3">
                    {project.links.demo && (
                      <Button
                        asChild
                        size="sm"
                        className="w-full justify-start"
                      >
                        <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          {language === 'es' ? 'Ver Demo' : 'View Demo'}
                        </a>
                      </Button>
                    )}
                    {project.links.github && (
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="w-full justify-start"
                      >
                        <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          {language === 'es' ? 'Ver Código' : 'View Code'}
                        </a>
                      </Button>
                    )}
                    {project.links.behance && (
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="w-full justify-start"
                      >
                        <a href={project.links.behance} target="_blank" rel="noopener noreferrer">
                          <Eye className="h-4 w-4 mr-2" />
                          Behance
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}