import { X, ExternalLink, Github } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from '../contexts/LanguageContext';
import { Project } from '../data/projects';
import { useEffect } from 'react';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const projectImages = {
  '1': 'https://images.unsplash.com/photo-1693486145118-d963c3a6ce6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBmYXNoaW9uJTIwbW9iaWxlfGVufDF8fHx8MTc1ODA1ODgyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  '2': 'https://images.unsplash.com/photo-1610913721979-b20ede600e63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmFseXRpY3MlMjBkYXNoYm9hcmQlMjBkYXJrfGVufDF8fHx8MTc1ODA1ODgyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  '3': 'https://images.unsplash.com/photo-1681826291722-70bd7e9e6fc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5raW5nJTIwbW9iaWxlJTIwYXBwfGVufDF8fHx8MTc1Nzk5NjEzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  '4': 'https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWFzJTIwcGxhdGZvcm0lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU4MDU4ODI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  '5': 'https://images.unsplash.com/photo-1737918543118-9c9e074c60b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzeXN0ZW0lMjBjb21wb25lbnRzfGVufDF8fHx8MTc1NzkzNzE2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  '6': 'https://images.unsplash.com/photo-1673515336319-20a3ea59c228?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBib29raW5nJTIwYXBwfGVufDF8fHx8MTc1ODA0OTUyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
};

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const { language, t } = useLanguage();

  // Handle escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) {
    return null;
  }

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="bg-background rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 id="modal-title" className="text-2xl font-medium">
            {project.title}
          </h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            aria-label={t('aria.closeModal')}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Project Image */}
          <div className="aspect-video rounded-lg overflow-hidden">
            <ImageWithFallback
              src={projectImages[project.id as keyof typeof projectImages]}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Project Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h3 className="font-medium text-muted-foreground">
                {t('projects.role')}
              </h3>
              <p>{project.role[language]}</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium text-muted-foreground">
                {t('projects.duration')}
              </h3>
              <p>{project.duration[language]}</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium text-muted-foreground">
                {t('projects.technologies')}
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-6">
            <div>
              <h3 className="font-medium mb-3">{t('projects.challenge')}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {project.challenge[language]}
              </p>
            </div>

            <div>
              <h3 className="font-medium mb-3">{t('projects.solution')}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {project.solution[language]}
              </p>
            </div>

            <div>
              <h3 className="font-medium mb-3">{t('projects.results')}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {project.results[language]}
              </p>
            </div>
          </div>

          {/* Links */}
          {project.links && (
            <div className="flex flex-wrap gap-3 pt-4 border-t border-border">
              {project.links.demo && (
                <Button variant="outline" size="sm" asChild>
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
                <Button variant="outline" size="sm" asChild>
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
                <Button variant="outline" size="sm" asChild>
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
          )}
        </div>
      </div>
    </div>
  );
}