import React, { useState, useEffect } from 'react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Eye, ExternalLink, Github, ArrowUpRight, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from '../contexts/LanguageContext';
import { Project, projects } from '../data/projects';

interface ModernProjectsProps {
  onProjectSelect: (project: Project) => void;
  selectedProject?: Project | null;
}

const projectImages: Record<string, string> = {
  '1': 'https://images.unsplash.com/photo-1693486145118-d963c3a6ce6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBmYXNoaW9uJTIwbW9iaWxlfGVufDF8fHx8MTc1ODA1ODgyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  '2': 'https://images.unsplash.com/photo-1610913721979-b20ede600e63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmFseXRpY3MlMjBkYXNoYm9hcmQlMjBkYXJrfGVufDF8fHx8MTc1ODA1ODgyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  '3': 'https://images.unsplash.com/photo-1681826291722-70bd7e9e6fc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5raW5nJTIwbW9iaWxlJTIwYXBwfGVufDF8fHx8MTc1Nzk5NjEzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  '4': 'https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWFzJTIwcGxhdGZvcm0lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU4MDU4ODI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  '5': 'https://images.unsplash.com/photo-1737918543118-9c9e074c60b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzeXN0ZW0lMjBjb21wb25lbnRzfGVufDF8fHx8MTc1NzkzNzE2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  '6': 'https://images.unsplash.com/photo-1673515336319-20a3ea59c228?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBib29raW5nJTIwYXBwfGVufDF8fHx8MTc1ODA0OTUyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
};

const categoryColors: Record<string, string> = {
  'ux-ui': 'from-purple-500 to-pink-500',
  'frontend': 'from-blue-500 to-cyan-500',
  'fullstack': 'from-green-500 to-teal-500'
};

const categoryLabels: Record<string, string> = {
  'ux-ui': 'UX/UI',
  'frontend': 'Frontend',
  'fullstack': 'Full Stack'
};

export function ModernProjects({ onProjectSelect, selectedProject }: ModernProjectsProps): JSX.Element {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [filter, setFilter] = useState<string>('all');

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

  const getCardHeight = (index: number): string => {
    const heights = ['h-80', 'h-96', 'h-72', 'h-88', 'h-80', 'h-92'];
    return heights[index % heights.length];
  };

  return (
    <section id="projects" className="py-20 px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-primary" />
            <Badge className="bg-primary/10 text-primary border-primary/20">
              {t('projects.title')}
            </Badge>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-6">
            Proyectos
            <span className="text-primary">.</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Una selección de trabajos recientes que muestran mi enfoque en diseño y desarrollo.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className={`flex flex-wrap justify-center gap-2 mb-12 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="glass-card rounded-2xl p-2">
            {[
              { key: 'all', label: 'Todos' },
              { key: 'ux-ui', label: 'UX/UI' },
              { key: 'frontend', label: 'Frontend' },
              { key: 'fullstack', label: 'Full Stack' }
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setFilter(tab.key)}
                className={`px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 interactive-elem ${
                  filter === tab.key
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'text-muted-foreground hover:text-foreground hover:bg-background/50'
                }`}
                data-cursor-text={`Filtrar ${tab.label}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`break-inside-avoid transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <article 
                className={`glass-card rounded-2xl overflow-hidden hover-lift interactive-elem group relative ${getCardHeight(index)} transition-all duration-500 ${
                  selectedProject?.id === project.id ? 'ring-2 ring-primary shadow-2xl scale-[1.02]' : ''
                }`}
                data-cursor-text="Ver proyecto"
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={projectImages[project.id]}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <Badge className={`bg-gradient-to-r ${categoryColors[project.category]} text-white border-0 shadow-lg`}>
                      {categoryLabels[project.category]}
                    </Badge>
                  </div>

                  {/* Quick Actions */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 flex gap-2">
                    <Button
                      size="sm"
                      variant="secondary"
                      className="w-8 h-8 p-0 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40"
                      onClick={(e) => {
                        e.stopPropagation();
                        onProjectSelect(project);
                      }}
                    >
                      <Eye className="w-3 h-3" />
                    </Button>
                    <Button
                      size="sm"
                      variant="secondary"
                      className="w-8 h-8 p-0 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-3 h-3" />
                    </Button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <Badge 
                        key={tech} 
                        variant="outline" 
                        className={`text-xs border-muted-foreground/20 ${
                          techIndex % 3 === 0 ? 'text-purple-600' :
                          techIndex % 3 === 1 ? 'text-blue-600' : 'text-green-600'
                        }`}
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="outline" className="text-xs text-muted-foreground">
                        +{project.technologies.length - 4}
                      </Badge>
                    )}
                  </div>

                  {/* Action Button */}
                  <Button
                    onClick={() => onProjectSelect(project)}
                    className="w-full btn-interactive bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 group/btn"
                  >
                    <span className="group-hover/btn:scale-105 transition-transform duration-300 flex items-center gap-2">
                      {t('projects.viewDetails')}
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </Button>
                </div>

                {/* Hover Overlay Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </article>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <Button 
            variant="outline" 
            size="lg"
            className="btn-interactive px-8 py-3 hover-lift interactive-elem group"
            data-cursor-text="Ver más proyectos"
          >
            <span className="group-hover:scale-105 transition-transform duration-300">
              Ver más proyectos
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
}