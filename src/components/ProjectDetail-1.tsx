import { X, ExternalLink, Github } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from '../contexts/LanguageContext';
import { Project } from '../data/projects';

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

const projectImages: Record<string, string> = {
  '1': 'https://images.unsplash.com/photo-1693486145118-d963c3a6ce6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBmYXNoaW9uJTIwbW9iaWxlfGVufDF8fHx8MTc1ODA1ODgyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  '2': 'https://images.unsplash.com/photo-1610913721979-b20ede600e63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmFseXRpY3MlMjBkYXNoYm9hcmQlMjBkYXJrfGVufDF8fHx8MTc1ODA1ODgyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  '3': 'https://images.unsplash.com/photo-1681826291722-70bd7e9e6fc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5raW5nJTIwbW9iaWxlJTIwYXBwfGVufDF8fHx8MTc1Nzk5NjEzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  '4': 'https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWFzJTIwcGxhdGZvcm0lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU4MDU4ODI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  '5': 'https://images.unsplash.com/photo-1737918543118-9c9e074c60b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzeXN0ZW0lMjBjb21wb25lbnRzfGVufDF8fHx8MTc1NzkzNzE2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  '6': 'https://images.unsplash.com/photo-1673515336319-20a3ea59c228?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBib29raW5nJTIwYXBwfGVufDF8fHx8MTc1ODA0OTUyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
};

const gradientMap: Record<string, string> = {
  '1': 'from-purple-500 to-pink-500',
  '2': 'from-blue-500 to-cyan-500',
  '3': 'from-green-500 to-teal-500',
  '4': 'from-orange-500 to-red-500',
  '5': 'from-violet-500 to-purple-500',
  '6': 'from-pink-500 to-rose-500'
};

export function ProjectDetail({ project, onClose }: ProjectDetailProps): JSX.Element {
  const { language, t } = useLanguage();

  return (
    <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[var(--vibrant-purple)] to-[var(--vibrant-pink)] bg-clip-text text-transparent">
            {project.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl">
            {project.description}
          </p>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={onClose}
          className="ml-4 hover:bg-muted rounded-full p-2"
          aria-label={t('aria.closeModal')}
        >
          <X className="h-5 w-5" />
        </Button>
      </div>

      {/* Project Image */}
      <Card className="overflow-hidden border-0 shadow-xl">
        <div className="relative">
          <ImageWithFallback
            src={projectImages[project.id]}
            alt={project.title}
            className="w-full h-64 sm:h-80 lg:h-96 object-cover"
          />
          <div className={`absolute inset-0 bg-gradient-to-r ${gradientMap[project.id]} opacity-20`}></div>
        </div>
      </Card>

      {/* Project Info Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="p-6 border-l-4 border-l-[var(--vibrant-purple)] bg-gradient-to-br from-background to-muted/30">
          <h3 className="font-semibold text-[var(--vibrant-purple)] mb-2">
            {t('projects.role')}
          </h3>
          <p className="text-foreground">{project.role[language]}</p>
        </Card>
        
        <Card className="p-6 border-l-4 border-l-[var(--vibrant-blue)] bg-gradient-to-br from-background to-muted/30">
          <h3 className="font-semibold text-[var(--vibrant-blue)] mb-2">
            {t('projects.duration')}
          </h3>
          <p className="text-foreground">{project.duration[language]}</p>
        </Card>
        
        <Card className="p-6 border-l-4 border-l-[var(--vibrant-green)] bg-gradient-to-br from-background to-muted/30 sm:col-span-2 lg:col-span-1">
          <h3 className="font-semibold text-[var(--vibrant-green)] mb-3">
            {t('projects.technologies')}
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech: string, index: number) => (
              <Badge 
                key={tech} 
                variant="secondary" 
                className={`text-xs font-medium ${
                  index % 3 === 0 ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300' :
                  index % 3 === 1 ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300' :
                  'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                }`}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </Card>
      </div>

      {/* Project Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="p-8 bg-gradient-to-br from-background to-muted/20 border-2 border-[var(--vibrant-purple)]/20">
          <h3 className="font-bold text-xl text-[var(--vibrant-purple)] mb-4 flex items-center">
            <div className="w-2 h-2 bg-[var(--vibrant-purple)] rounded-full mr-3"></div>
            {t('projects.challenge')}
          </h3>
          <p className="text-muted-foreground leading-relaxed text-base">
            {project.challenge[language]}
          </p>
        </Card>

        <Card className="p-8 bg-gradient-to-br from-background to-muted/20 border-2 border-[var(--vibrant-blue)]/20">
          <h3 className="font-bold text-xl text-[var(--vibrant-blue)] mb-4 flex items-center">
            <div className="w-2 h-2 bg-[var(--vibrant-blue)] rounded-full mr-3"></div>
            {t('projects.solution')}
          </h3>
          <p className="text-muted-foreground leading-relaxed text-base">
            {project.solution[language]}
          </p>
        </Card>
      </div>

      <Card className="p-8 bg-gradient-to-r from-[var(--vibrant-green)]/5 to-[var(--vibrant-orange)]/5 border-2 border-[var(--vibrant-green)]/20">
        <h3 className="font-bold text-xl text-[var(--vibrant-green)] mb-4 flex items-center">
          <div className="w-2 h-2 bg-[var(--vibrant-green)] rounded-full mr-3"></div>
          {t('projects.results')}
        </h3>
        <p className="text-muted-foreground leading-relaxed text-base">
          {project.results[language]}
        </p>
      </Card>

      {/* Links */}
      {project.links && (
        <Card className="p-6 bg-gradient-to-r from-muted/30 to-muted/10">
          <div className="flex flex-wrap gap-3">
            {project.links.demo && (
              <Button 
                variant="outline" 
                size="sm" 
                asChild
                className="border-[var(--vibrant-blue)] text-[var(--vibrant-blue)] hover:bg-[var(--vibrant-blue)] hover:text-white transition-all duration-200"
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
                className="border-[var(--vibrant-purple)] text-[var(--vibrant-purple)] hover:bg-[var(--vibrant-purple)] hover:text-white transition-all duration-200"
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
            {project.links.behance && (
              <Button 
                variant="outline" 
                size="sm" 
                asChild
                className="border-[var(--vibrant-pink)] text-[var(--vibrant-pink)] hover:bg-[var(--vibrant-pink)] hover:text-white transition-all duration-200"
              >
                <a 
                  href={project.links.behance}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>Behance</span>
                </a>
              </Button>
            )}
          </div>
        </Card>
      )}
    </div>
  );
}