import React from 'react';
import { ArrowLeft, ExternalLink, Github, Eye, Clock, User, Calendar } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { Separator } from './ui/separator';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from '../contexts/LanguageContext';
import { useRoute } from '../contexts/RouteContext';
import { Project } from '../data/projects';

const projectImages: Record<string, string> = {
  '1': 'https://images.unsplash.com/photo-1693486145118-d963c3a6ce6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBmYXNoaW9uJTIwbW9iaWxlfGVufDF8fHx8MTc1ODA1ODgyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  '2': 'https://images.unsplash.com/photo-1610913721979-b20ede600e63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmFseXRpY3MlMjBkYXNoYm9hcmQlMjBkYXJrfGVufDF8fHx8MTc1ODA1ODgyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  '3': 'https://images.unsplash.com/photo-1681826291722-70bd7e9e6fc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5raW5nJTIwbW9iaWxlJTIwYXBwfGVufDF8fHx8MTc1Nzk5NjEzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  '4': 'https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWFzJTIwcGxhdGZvcm0lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU4MDU4ODI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  '5': 'https://images.unsplash.com/photo-1737918543118-9c9e074c60b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzeXN0ZW0lMjBjb21wb25lbnRzfGVufDF8fHx8MTc1NzkzNzE2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  '6': 'https://images.unsplash.com/photo-1673515336319-20a3ea59c228?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBib29raW5nJTIwYXBwfGVufDF8fHx8MTc1ODA0OTUyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  '7': 'https://images.unsplash.com/photo-1737918543118-9c9e074c60b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzeXN0ZW0lMjBjb21wb25lbnRzfGVufDF8fHx8MTc1NzkzNzE2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
};

export function ProjectDetailPage(): JSX.Element {
  const { language, t } = useLanguage();
  const { selectedProject, navigateToProjects } = useRoute();

  if (!selectedProject) {
    return <div>Project not found</div>;
  }

  const project: Project = selectedProject;

  return (
    <div className="min-h-screen bg-background pt-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
        
        {/* Back button */}
        <div className="mb-8">
          <Button
            onClick={navigateToProjects}
            variant="ghost"
            className="mb-6 -ml-2"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            {language === 'es' ? 'Volver a proyectos' : 'Back to projects'}
          </Button>
        </div>

        {/* Project header with hero image */}
        <div className="mb-12">
          <div className="aspect-video w-full max-w-4xl mx-auto rounded-lg overflow-hidden mb-8">
            <ImageWithFallback
              src={projectImages[project.id]}
              alt={t('title', project.title)}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="text-center max-w-4xl mx-auto">
            <Badge 
              variant="outline" 
              className="mb-4 border-primary/20 text-primary bg-primary/5"
            >
              {project.category.replace('-', '/')}
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-6">
              {t('title', project.title)}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              {t('description', project.description)}
            </p>

            {/* Project links */}
            {project.links && (
              <div className="flex items-center justify-center gap-4 mb-8">
                {project.links.demo && (
                  <Button asChild size="lg">
                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      {language === 'es' ? 'Ver Demo' : 'View Demo'}
                    </a>
                  </Button>
                )}
                {project.links.github && (
                  <Button asChild size="lg" variant="outline">
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      {language === 'es' ? 'Ver Código' : 'View Code'}
                    </a>
                  </Button>
                )}
                {project.links.behance && (
                  <Button asChild size="lg" variant="outline">
                    <a href={project.links.behance} target="_blank" rel="noopener noreferrer">
                      <Eye className="h-4 w-4 mr-2" />
                      Behance
                    </a>
                  </Button>
                )}
              </div>
            )}

            {/* Project meta info */}
            <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{t('role', project.role)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{t('duration', project.duration)}</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="mb-12" />

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          
          {/* Main content column */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Challenge section */}
            <section className="space-y-4">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-primary font-bold">01</span>
                </div>
                <h2 className="text-2xl font-medium text-foreground">
                  {t('projects.challenge')}
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {t('challenge', project.challenge)}
              </p>
            </section>

            {/* Solution section */}
            <section className="space-y-4">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-primary font-bold">02</span>
                </div>
                <h2 className="text-2xl font-medium text-foreground">
                  {t('projects.solution')}
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {t('solution', project.solution)}
              </p>
            </section>

            {/* Results section */}
            <section className="space-y-4">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-primary font-bold">03</span>
                </div>
                <h2 className="text-2xl font-medium text-foreground">
                  {t('projects.results')}
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {t('results', project.results)}
              </p>
            </section>

            {/* Project Gallery */}
            {project.images && project.images.length > 0 && (
              <section className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-primary font-bold">04</span>
                  </div>
                  <h2 className="text-2xl font-medium text-foreground">
                    {language === 'es' ? 'Galería del Proyecto' : 'Project Gallery'}
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.images.map((image, index) => (
                    <div key={index} className="space-y-3">
                      <div className="aspect-video overflow-hidden rounded-lg border border-border/50">
                        <ImageWithFallback
                          src={image.url}
                          alt={t('alt', image.alt)}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {t('caption', image.caption)}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              
              {/* Project Info Card */}
              <Card className="p-6 bg-muted/30 border-border/50">
                <h3 className="font-medium text-foreground mb-6 text-sm uppercase tracking-wide">
                  {language === 'es' ? 'Información del Proyecto' : 'Project Information'}
                </h3>
                
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h4 className="font-medium text-foreground text-sm text-primary">
                      {t('projects.role')}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {t('role', project.role)}
                    </p>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <h4 className="font-medium text-foreground text-sm text-primary">
                      {t('projects.duration')}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {t('duration', project.duration)}
                    </p>
                  </div>

                  <Separator />

                  <div className="space-y-3">
                    <h4 className="font-medium text-foreground text-sm text-primary">
                      {t('projects.technologies')}
                    </h4>
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
                </div>
              </Card>

              {/* Quick Actions */}
              {project.links && (
                <Card className="p-6 bg-muted/30 border-border/50">
                  <h3 className="font-medium text-foreground mb-4 text-sm uppercase tracking-wide">
                    {language === 'es' ? 'Enlaces Rápidos' : 'Quick Links'}
                  </h3>
                  
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
                </Card>
              )}

              {/* Back to projects */}
              <Button
                onClick={navigateToProjects}
                variant="outline"
                className="w-full"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                {language === 'es' ? 'Ver más proyectos' : 'View more projects'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}