import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Eye, ExternalLink } from 'lucide-react';
import { Project } from '../types/portfolio';
import { useLanguage } from '../context/LanguageContext';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProjectCardProps {
  project: Project;
  onViewDetails: (project: Project) => void;
}

const getProjectImage = (imageName: string): string => {
  const imageMap: { [key: string]: string } = {
    'modern workspace design': 'https://images.unsplash.com/photo-1705909773420-8d7af2a343f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzU4MTY5NDg1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    'data visualization dashboard': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NTgxNzM0ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'mobile banking interface': 'https://images.unsplash.com/photo-1642055509518-adafcad1d22e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBiYW5raW5nJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc1ODI0MzQ0Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    'design system components': 'https://images.unsplash.com/photo-1737918543118-9c9e074c60b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzeXN0ZW0lMjBjb21wb25lbnRzfGVufDF8fHx8MTc1ODE5MDcyNnww&ixlib=rb-4.1.0&q=80&w=1080',
    'project management interface': 'https://images.unsplash.com/photo-1676276374782-39159bc5e7b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9qZWN0JTIwbWFuYWdlbWVudCUyMGludGVyZmFjZXxlbnwxfHx8fDE3NTgyMjY0MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080'
  };
  return imageMap[imageName] || '';
};

const getTechBadgeColor = (tech: string, index: number): string => {
  const colors = [
    'bg-yellow-400 text-black',  // FIGMA
    'bg-green-500 text-white',   // ADOBE XD, REACT
    'bg-blue-500 text-white',    // PRINCIPLE, D3.JS  
    'bg-red-500 text-white',     // ZEROHEIGHT, TAILWIND CSS, +1
    'bg-purple-500 text-white',  // TYPESCRIPT
    'bg-orange-500 text-white'   // additional colors
  ];
  
  // Map specific technologies to specific colors to match the image
  const techColorMap: { [key: string]: string } = {
    'FIGMA': 'bg-yellow-400 text-black',
    'ADOBE XD': 'bg-green-500 text-white',
    'REACT': 'bg-green-500 text-white',
    'TYPESCRIPT': 'bg-purple-500 text-white',
    'D3.JS': 'bg-blue-500 text-white',
    'TAILWIND CSS': 'bg-red-500 text-white',
    'PRINCIPLE': 'bg-blue-500 text-white',
    'ZEROHEIGHT': 'bg-red-500 text-white'
  };
  
  return techColorMap[tech.toUpperCase()] || colors[index % colors.length];
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onViewDetails }) => {
  const { t } = useLanguage();

  const categoryColors = {
    'ux-ui': 'bg-purple-500 text-white',
    'frontend': 'bg-blue-500 text-white',
    'fullstack': 'bg-green-500 text-white'
  };

  const categoryLabels = {
    'ux-ui': { es: 'UX/UI', en: 'UX/UI' },
    'frontend': { es: 'FRONTEND', en: 'FRONTEND' },
    'fullstack': { es: 'FULLSTACK', en: 'FULLSTACK' }
  };

  return (
    <Card className="group overflow-hidden border-8 border-black dark:border-white bg-white dark:bg-gray-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-none">
      <div className="relative overflow-hidden">
        <ImageWithFallback
          src={getProjectImage(project.image)}
          alt={t('project-image', project.title)}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <Badge className={`${categoryColors[project.category]} font-bold rounded-none`}>
            {t('category', categoryLabels[project.category])}
          </Badge>
        </div>
        <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 text-sm font-medium">
          {project.year}
        </div>
      </div>
      
      <CardContent className="p-6">
        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-lg text-gray-900 dark:text-white group-hover:text-orange-500 transition-colors">
              {t('title', project.title)}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mt-2 line-clamp-2">
              {t('description', project.description)}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech, index) => (
              <Badge 
                key={tech} 
                className={`text-xs font-bold border-2 border-black rounded-none ${getTechBadgeColor(tech, index)}`}
              >
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 4 && (
              <Badge className="text-xs font-bold border-2 border-black bg-gray-200 text-black rounded-none">
                +{project.technologies.length - 4}
              </Badge>
            )}
          </div>

          <div className="flex gap-2 pt-2">
            <Button
              onClick={() => onViewDetails(project)}
              className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-none"
              aria-label={`${t('view-details', { es: 'Ver detalles', en: 'View details' })} ${t('title', project.title)}`}
            >
              <Eye className="w-4 h-4 mr-2" />
              {t('view-details', { es: 'Ver detalles', en: 'View details' })}
            </Button>
            {project.liveUrl && (
              <Button
                variant="outline"
                size="sm"
                className="px-3 rounded-none"
                onClick={() => window.open(project.liveUrl, '_blank')}
                aria-label={`${t('open-project', { es: 'Abrir proyecto', en: 'Open project' })} ${t('title', project.title)}`}
              >
                <ExternalLink className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};