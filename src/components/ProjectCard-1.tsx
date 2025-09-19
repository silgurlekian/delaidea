import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from '../contexts/LanguageContext';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  onViewDetails: (project: Project) => void;
  isSelected: boolean;
}

const projectImages: Record<string, string> = {
  '1': 'https://images.unsplash.com/photo-1693486145118-d963c3a6ce6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBmYXNoaW9uJTIwbW9iaWxlfGVufDF8fHx8MTc1ODA1ODgyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  '2': 'https://images.unsplash.com/photo-1610913721979-b20ede600e63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmFseXRpY3MlMjBkYXNoYm9hcmQlMjBkYXJrfGVufDF8fHx8MTc1ODA1ODgyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  '3': 'https://images.unsplash.com/photo-1681826291722-70bd7e9e6fc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5raW5nJTIwbW9iaWxlJTIwYXBwfGVufDF8fHx8MTc1Nzk5NjEzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  '4': 'https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWFzJTIwcGxhdGZvcm0lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU4MDU4ODI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  '5': 'https://images.unsplash.com/photo-1737918543118-9c9e074c60b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzeXN0ZW0lMjBjb21wb25lbnRzfGVufDF8fHx8MTc1NzkzNzE2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  '6': 'https://images.unsplash.com/photo-1673515336319-20a3ea59c228?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBib29raW5nJTIwYXBwfGVufDF8fHx8MTc1ODA0OTUyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
};

type CategoryColors = {
  [key: string]: string;
};

const categoryColors: CategoryColors = {
  'ux-ui': 'bg-gradient-to-r from-purple-500 to-pink-500 text-white',
  'frontend': 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white',
  'fullstack': 'bg-gradient-to-r from-green-500 to-teal-500 text-white'
};

type CategoryLabels = {
  [key: string]: string;
};

const categoryLabels: CategoryLabels = {
  'ux-ui': 'UX/UI',
  'frontend': 'Frontend',
  'fullstack': 'Full Stack'
};

const gradientBorders: CategoryColors = {
  'ux-ui': 'border-purple-200 hover:border-purple-400 dark:border-purple-800 dark:hover:border-purple-600',
  'frontend': 'border-blue-200 hover:border-blue-400 dark:border-blue-800 dark:hover:border-blue-600',
  'fullstack': 'border-green-200 hover:border-green-400 dark:border-green-800 dark:hover:border-green-600'
};

export function ProjectCard({ project, onViewDetails, isSelected }: ProjectCardProps): JSX.Element {
  const { t } = useLanguage();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>): void => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onViewDetails(project);
    }
  };

  const handleClick = (): void => {
    onViewDetails(project);
  };

  return (
    <article 
      className={`group glass-card rounded-xl border-2 overflow-hidden transition-all duration-500 transform hover-lift interactive-elem ${
        isSelected 
          ? 'border-[var(--vibrant-purple)] shadow-lg shadow-[var(--vibrant-purple)]/20 scale-105 animate-interactive-glow' 
          : `${gradientBorders[project.category]} hover:shadow-2xl hover:scale-105`
      }`}
      data-cursor-text="Ver proyecto"
    >
      <div className="relative aspect-video overflow-hidden">
        <ImageWithFallback
          src={projectImages[project.id]}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 group-hover:brightness-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
        <div className="absolute top-4 left-4">
          <Badge 
            className={`${categoryColors[project.category]} border-0 shadow-lg font-medium`}
          >
            {categoryLabels[project.category]}
          </Badge>
        </div>
        {isSelected && (
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--vibrant-purple)]/20 to-transparent"></div>
        )}
      </div>

      <div className="p-6 space-y-4">
        <div className="space-y-3">
          <h3 className={`font-bold text-lg transition-colors duration-200 ${
            isSelected 
              ? 'text-[var(--vibrant-purple)]' 
              : 'group-hover:text-[var(--vibrant-purple)]'
          }`}>
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech: string, index: number) => (
            <Badge 
              key={tech} 
              variant="outline" 
              className={`text-xs font-medium transition-colors duration-200 ${
                index % 3 === 0 ? 'border-purple-300 text-purple-700 hover:bg-purple-50 dark:border-purple-700 dark:text-purple-300' :
                index % 3 === 1 ? 'border-blue-300 text-blue-700 hover:bg-blue-50 dark:border-blue-700 dark:text-blue-300' :
                'border-green-300 text-green-700 hover:bg-green-50 dark:border-green-700 dark:text-green-300'
              }`}
            >
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 3 && (
            <Badge variant="outline" className="text-xs text-muted-foreground">
              +{project.technologies.length - 3}
            </Badge>
          )}
        </div>

        <div className="pt-2">
          <Button
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            size="sm"
            className={`btn-interactive w-full transition-all duration-500 hover-lift relative overflow-hidden group/btn ${
              isSelected
                ? 'bg-gradient-to-r from-[var(--vibrant-purple)] to-[var(--vibrant-pink)] text-white shadow-lg animate-interactive-glow'
                : 'bg-gradient-to-r from-muted to-muted hover:from-[var(--vibrant-purple)] hover:to-[var(--vibrant-pink)] hover:text-white hover:shadow-lg'
            }`}
            aria-label={`${t('aria.openProjectDetails')}: ${project.title}`}
            aria-pressed={isSelected}
          >
            <span className="relative z-10 group-hover/btn:scale-105 transition-transform duration-300">
              {isSelected ? t('projects.close') : t('projects.viewDetails')}
            </span>
          </Button>
        </div>
      </div>
    </article>
  );
}