import React from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { X, ExternalLink, Calendar, User, Clock, Target, TrendingUp } from 'lucide-react';
import { Project } from '../types/portfolio';
import { useLanguage } from '../context/LanguageContext';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
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
    'bg-red-500 text-white',     // ZEROHEIGHT, TAILWIND CSS
    'bg-purple-500 text-white',  // TYPESCRIPT
    'bg-orange-500 text-white'   // additional colors
  ];
  
  // Map specific technologies to specific colors
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

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onClose }) => {
  const { t } = useLanguage();

  const categoryColors = {
    'ux-ui': 'from-purple-500 to-pink-500',
    'frontend': 'from-cyan-500 to-blue-500'
  };

  const categoryLabels = {
    'ux-ui': { es: 'UX/UI Design', en: 'UX/UI Design' },
    'frontend': { es: 'Frontend Development', en: 'Frontend Development' }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="bg-white dark:bg-gray-800 shadow-lg border-8 border-black dark:border-white p-6 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className={`w-12 h-12 bg-gradient-to-r ${categoryColors[project.category]} flex items-center justify-center text-white font-bold text-lg`}>
                {project.category === 'ux-ui' ? 'UI' : 'FE'}
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                  {t('title', project.title)}
                </h1>
                <Badge className={`bg-gradient-to-r ${categoryColors[project.category]} text-white border-0 mt-2 rounded-none`}>
                  {t('category', categoryLabels[project.category])}
                </Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* Hero image */}
          <div className="relative overflow-hidden shadow-lg border-8 border-black dark:border-white">
            <ImageWithFallback
              src={getProjectImage(project.image)}
              alt={t('title', project.title)}
              className="w-full h-64 sm:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <div className="text-sm font-medium opacity-90">{project.year}</div>
              {project.client && (
                <div className="text-lg font-bold">{t('client', project.client)}</div>
              )}
            </div>
          </div>

          {/* Project info grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {project.duration && (
              <Card className="border-4 border-black dark:border-white rounded-none">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-orange-500" />
                    <span>{t('duration', { es: 'Duración', en: 'Duration' })}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-medium">{t('duration-value', project.duration)}</p>
                </CardContent>
              </Card>
            )}

            {project.role && (
              <Card className="border-4 border-black dark:border-white rounded-none">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm flex items-center space-x-2">
                    <User className="w-4 h-4 text-purple-500" />
                    <span>{t('role', { es: 'Rol', en: 'Role' })}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-medium">{t('role-value', project.role)}</p>
                </CardContent>
              </Card>
            )}

            <Card className="border-4 border-black dark:border-white rounded-none">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-cyan-500" />
                  <span>{t('year', { es: 'Año', en: 'Year' })}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-medium">{project.year}</p>
              </CardContent>
            </Card>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              {t('about-project', { es: 'Sobre el proyecto', en: 'About the project' })}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
              {t('description', project.description)}
            </p>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              {t('technologies', { es: 'Tecnologías utilizadas', en: 'Technologies used' })}
            </h3>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <Badge
                  key={tech}
                  className={`px-3 py-1 text-sm font-bold border-2 border-black rounded-none ${getTechBadgeColor(tech, index)}`}
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Challenges */}
          {project.challenges && (
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center space-x-2">
                <Target className="w-5 h-5 text-red-500" />
                <span>{t('challenges', { es: 'Desafíos', en: 'Challenges' })}</span>
              </h3>
              <ul className="space-y-3">
                {t('challenges-list', project.challenges).map((challenge: string, index: number) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 dark:text-gray-300">{challenge}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Outcomes */}
          {project.outcomes && (
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-green-500" />
                <span>{t('outcomes', { es: 'Resultados', en: 'Outcomes' })}</span>
              </h3>
              <ul className="space-y-3">
                {t('outcomes-list', project.outcomes).map((outcome: string, index: number) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 dark:text-gray-300 font-medium">{outcome}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Action buttons */}
          <div className="flex gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
            {project.liveUrl && (
              <Button
                onClick={() => window.open(project.liveUrl, '_blank')}
                className="flex-1 bg-orange-500 hover:bg-orange-600 text-white rounded-none"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                {t('view-live', { es: 'Ver proyecto', en: 'View live' })}
              </Button>
            )}
            {project.caseStudyUrl && (
              <Button
                variant="outline"
                onClick={() => window.open(project.caseStudyUrl, '_blank')}
                className="flex-1 border-2 border-orange-500 text-orange-500 hover:bg-orange-50 dark:hover:bg-orange-900/20 rounded-none"
              >
                {t('case-study', { es: 'Caso de estudio', en: 'Case study' })}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};