import React, { useState, useEffect } from 'react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Eye, ExternalLink, Github, ArrowUpRight, Star, Zap } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from '../contexts/LanguageContext';
import { useRoute } from '../contexts/RouteContext';
import { Project, projects } from '../data/projects';

const projectImages: Record<string, string> = {
  'ecommerce-redesign': 'https://images.unsplash.com/photo-1693486145118-d963c3a6ce6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBmYXNoaW9uJTIwbW9iaWxlfGVufDF8fHx8MTc1ODA1ODgyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  'dashboard-analytics': 'https://images.unsplash.com/photo-1610913721979-b20ede600e63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmFseXRpY3MlMjBkYXNoYm9hcmQlMjBkYXJrfGVufDF8fHx8MTc1ODA1ODgyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  'mobile-banking-app': 'https://images.unsplash.com/photo-1681826291722-70bd7e9e6fc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5raW5nJTIwbW9iaWxlJTIwYXBwfGVufDF8fHx8MTc1Nzk5NjEzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  'design-system': 'https://images.unsplash.com/photo-1737918543118-9c9e074c60b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzeXN0ZW0lMjBjb21wb25lbnRzfGVufDF8fHx8MTc1NzkzNzE2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  'saas-platform': 'https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWFzJTIwcGxhdGZvcm0lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU4MDU4ODI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  'travel-booking-app': 'https://images.unsplash.com/photo-1673515336319-20a3ea59c228?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBib29raW5nJTIwYXBwfGVufDF8fHx8MTc1ODA0OTUyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  'portfolio-website': 'https://images.unsplash.com/photo-1693486145118-d963c3a6ce6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBmYXNoaW9uJTIwbW9iaWxlfGVufDF8fHx8MTc1ODA1ODgyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  'fitness-tracker': 'https://images.unsplash.com/photo-1610913721979-b20ede600e63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmFseXRpY3MlMjBkYXNoYm9hcmQlMjBkYXJrfGVufDF8fHx8MTc1ODA1ODgyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  'alta-tienda': 'https://images.unsplash.com/photo-1755514838747-adfd34197d39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzdG9yZSUyMGVjb21tZXJjZSUyMGRlc2lnbnxlbnwxfHx8fDE3NTgyNDY5OTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
};

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  'ux-ui': { bg: 'bg-purple-500', text: 'text-white', border: 'border-purple-500' },
  'frontend': { bg: 'bg-blue-500', text: 'text-white', border: 'border-blue-500' },
  'fullstack': { bg: 'bg-green-500', text: 'text-white', border: 'border-green-500' }
};

const categoryLabels: Record<string, string> = {
  'ux-ui': 'UX/UI',
  'frontend': 'FRONTEND',
  'fullstack': 'FULLSTACK'
};

const cardColors = [
  'bg-yellow-400',
  'bg-green-400',
  'bg-blue-400',
  'bg-red-400',
  'bg-purple-500',
  'bg-orange-400'
];

export function Projects() {
  const { t, language } = useLanguage();
  const { navigateToProject } = useRoute();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [filter, setFilter] = useState<string>('all');
  const [visibleProjects, setVisibleProjects] = useState<number>(6);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('projects');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  const displayedProjects = filteredProjects.slice(0, visibleProjects);
  const hasMoreProjects = filteredProjects.length > visibleProjects;

  const loadMoreProjects = () => {
    setVisibleProjects(prev => prev + 6);
  };

  // Reset visible projects when filter changes
  useEffect(() => {
    setVisibleProjects(6);
  }, [filter]);

  return (
    <section id="projects" className="pt-16 pt-32 pb-20 px-6 lg:px-8 relative bg-gray-100">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>

          {/* Title Section */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-8 bg-black flex items-center justify-center transform rotate-45">
                  <Star className="w-4 h-4 text-white transform -rotate-45" />
                </div>
                <span className="font-black uppercase tracking-[0.2em] text-sm">{t('projects.sectionSubtitle')}</span>
              </div>

              <h2 className="space-y-2">
                <div className="text-6xl md:text-8xl font-black leading-none">
                  <span className="text-black bg-yellow-400 px-4 py-2 transform -rotate-1 inline-block">
                    {t('projects.mainTitle.part1')}
                  </span>
                </div>
                <div className="text-6xl md:text-8xl font-black leading-none ml-8">
                  <span className="text-white bg-black px-4 py-2 transform rotate-2 inline-block">
                    {t('projects.mainTitle.part2')}
                  </span>
                </div>
              </h2>
            </div>

            <div className="bg-black text-white p-6 transform rotate-1 max-w-md">
              <p className="font-bold">
                {t('projects.description')}
              </p>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className={`mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
          <div className="flex flex-wrap gap-4">
            {[
              { key: 'all', label: t('projects.filter.all'), color: 'bg-black text-white' },
              { key: 'ux-ui', label: t('projects.filter.uxui'), color: 'bg-purple-500 text-white' },
              { key: 'frontend', label: t('projects.filter.frontend'), color: 'bg-blue-500 text-white' },
              { key: 'fullstack', label: t('projects.filter.fullstack'), color: 'bg-green-500 text-white' }
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setFilter(tab.key)}
                className={`px-6 py-3 font-black uppercase text-sm border-4 border-black transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ${filter === tab.key
                  ? tab.color
                  : 'bg-white text-black hover:bg-gray-200'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => {
            const cardColor = cardColors[index % cardColors.length];
            const categoryStyle = categoryColors[project.category];

            return (
              <div
                key={project.id}
                className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                <article
                  className="bg-white border-8 border-black p-0 transition-all duration-300 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] group cursor-pointer"
                  onClick={() => navigateToProject(project)}
                >
                  {/* Image Container */}
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={projectImages[project.id]}
                      alt={t('title', project.title)}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <div className={`${categoryStyle.bg} ${categoryStyle.text} px-3 py-1 font-black text-xs uppercase border-2 border-black`}>
                        {categoryLabels[project.category]}
                      </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 flex gap-2">
                      <Button
                        size="sm"
                        className="w-8 h-8 p-0 bg-yellow-400 hover:bg-green-400 text-black border-2 border-black"
                        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                          e.stopPropagation();
                          navigateToProject(project);
                        }}
                      >
                        <Eye className="w-3 h-3" />
                      </Button>
                      <Button
                        size="sm"
                        className="w-8 h-8 p-0 bg-red-400 hover:bg-blue-400 text-black border-2 border-black"
                        onClick={(e: React.MouseEvent<HTMLButtonElement>) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="font-black text-xl mb-2 group-hover:text-red-500 transition-colors duration-300 uppercase">
                        {t('title', project.title)}
                      </h3>
                      <p className="text-gray-700 font-medium leading-relaxed">
                        {t('description', project.description)}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech, techIndex) => (
                        <div key={tech} className={`${cardColors[techIndex % cardColors.length]} text-black px-2 py-1 text-xs font-black uppercase border-2 border-black`}>
                          {tech}
                        </div>
                      ))}
                      {project.technologies.length > 4 && (
                        <div className="bg-gray-800 text-white px-2 py-1 text-xs font-black uppercase border-2 border-black">
                          +{project.technologies.length - 4}
                        </div>
                      )}
                    </div>

                    {/* Action Button */}
                    <Button
                      onClick={() => navigateToProject(project)}
                      className="w-full bg-black hover:bg-red-500 text-white font-black uppercase py-3 border-4 border-black hover:border-red-500 transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                    >
                      {t('projects.viewProject')}
                      <ArrowUpRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </article>
              </div>
            );
          })}
        </div>

        {/* Load More Section */}
        {hasMoreProjects && (
          <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
            <div className="flex items-center justify-center gap-8">
              <div className="w-16 h-1 bg-black" />
              <Button
                onClick={loadMoreProjects}
                className="bg-green-400 hover:bg-yellow-400 text-black font-black uppercase px-8 py-4 border-4 border-black transition-all duration-300 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                {t('projects.loadMore')}
                <Zap className="w-5 h-5 ml-2" />
              </Button>
              <div className="w-16 h-1 bg-black" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}