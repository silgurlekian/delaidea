import React from 'react';
import { ArrowLeft, ExternalLink, Github, Eye, Clock, User, Star, Zap, Target, TrendingUp } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from '../contexts/LanguageContext';
import { useRoute } from '../contexts/RouteContext';
import { Project } from '../data/projects';

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

// Additional project images mapping
const additionalProjectImages: Record<string, string[]> = {
  'ecommerce-redesign': [
    'https://images.unsplash.com/photo-1721864428881-dbabb9ea0017?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBtb2JpbGUlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzU4MjQ3Mjk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1570894808314-677b57f25e45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBzY3JlZW5zfGVufDF8fHx8MTc1ODI0NzI5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  ],
  'dashboard-analytics': [
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmFseXRpY3MlMjBjaGFydHMlMjBkYXRhJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3NTgyMTU5ODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  ],
  'alta-tienda': [
    'https://images.unsplash.com/photo-1681152968214-9dad026ad188?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwcm9kdWN0JTIwc2hvd2Nhc2V8ZW58MXx8fHwxNzU4MjQ3Mjk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  ]
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

export function NeoBrutalistProjectDetailPage(): JSX.Element {
  const { language } = useLanguage();
  const { selectedProject, navigateToHome } = useRoute();

  if (!selectedProject) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-black text-4xl text-black mb-4">PROYECTO NO ENCONTRADO</h1>
          <Button onClick={navigateToHome} className="bg-red-500 hover:bg-black text-white font-black">
            VOLVER AL INICIO
          </Button>
        </div>
      </div>
    );
  }

  const project: Project = selectedProject;
  const categoryStyle = categoryColors[project.category];

  return (
    <div className="min-h-screen bg-gray-100 pt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        
        {/* Back button */}
        <div className="mb-12">
          <Button
            onClick={() => {
              navigateToHome();
              setTimeout(() => {
                const element = document.getElementById('projects');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }, 100);
            }}
            className="bg-black hover:bg-red-500 text-white font-black uppercase px-6 py-3 border-4 border-black hover:border-red-500 transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            {language === 'es' ? 'VOLVER A PROYECTOS' : 'BACK TO PROJECTS'}
          </Button>
        </div>

        {/* Project Hero */}
        <div className="mb-16">
          <div className="bg-white border-8 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
            {/* Hero Image */}
            <div className="aspect-video relative">
              <ImageWithFallback
                src={projectImages[project.id]}
                alt={typeof project.title === 'string' ? project.title : project.title[language]}
                className="w-full h-full object-cover"
              />
              
              {/* Category Badge */}
              <div className="absolute top-6 left-6">
                <div className={`${categoryStyle.bg} ${categoryStyle.text} px-4 py-2 font-black text-sm uppercase border-4 border-black`}>
                  {categoryLabels[project.category]}
                </div>
              </div>

              {/* Year Badge */}
              <div className="absolute top-6 right-6">
                <div className="bg-yellow-400 text-black px-4 py-2 font-black text-sm border-4 border-black">
                  {project.year}
                </div>
              </div>
            </div>

            {/* Project Info */}
            <div className="p-8 md:p-12">
              <h1 className="font-black text-4xl md:text-6xl lg:text-7xl uppercase mb-6 leading-none">
                {typeof project.title === 'string' ? project.title : project.title[language]}
              </h1>
              
              <p className="text-xl text-gray-700 font-medium leading-relaxed mb-8 max-w-4xl">
                {typeof project.description === 'string' ? project.description : project.description[language]}
              </p>

              {/* Meta Info */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-blue-400 border-4 border-black p-4">
                  <div className="flex items-center gap-3">
                    <User className="w-6 h-6 text-black" />
                    <div>
                      <div className="font-black text-xs uppercase text-black opacity-70">ROL</div>
                      <div className="font-black text-black">
                        {project.role && typeof project.role === 'object' ? project.role[language] : project.role || 'N/A'}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-green-400 border-4 border-black p-4">
                  <div className="flex items-center gap-3">
                    <Clock className="w-6 h-6 text-black" />
                    <div>
                      <div className="font-black text-xs uppercase text-black opacity-70">DURACIÓN</div>
                      <div className="font-black text-black">
                        {project.duration && typeof project.duration === 'object' ? project.duration[language] : project.duration || 'N/A'}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-red-400 border-4 border-black p-4">
                  <div className="flex items-center gap-3">
                    <Star className="w-6 h-6 text-black" />
                    <div>
                      <div className="font-black text-xs uppercase text-black opacity-70">CLIENTE</div>
                      <div className="font-black text-black">
                        {project.client && typeof project.client === 'object' ? project.client[language] : project.client || 'N/A'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h3 className="font-black text-lg uppercase mb-4">TECNOLOGÍAS</h3>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, index) => (
                    <div key={tech} className={`${cardColors[index % cardColors.length]} text-black px-3 py-2 text-sm font-black uppercase border-4 border-black`}>
                      {tech}
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              {project.links && (
                <div className="flex flex-wrap gap-4">
                  {project.links.demo && (
                    <Button
                      asChild
                      className="bg-yellow-400 hover:bg-green-400 text-black font-black uppercase px-6 py-3 border-4 border-black transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                    >
                      <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        {language === 'es' ? 'VER DEMO' : 'VIEW DEMO'}
                      </a>
                    </Button>
                  )}
                  {project.links.github && (
                    <Button
                      asChild
                      className="bg-purple-500 hover:bg-blue-400 text-white hover:text-black font-black uppercase px-6 py-3 border-4 border-black transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                    >
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        {language === 'es' ? 'VER CÓDIGO' : 'VIEW CODE'}
                      </a>
                    </Button>
                  )}
                  {project.links.behance && (
                    <Button
                      asChild
                      className="bg-orange-400 hover:bg-red-500 text-black hover:text-white font-black uppercase px-6 py-3 border-4 border-black transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                    >
                      <a href={project.links.behance} target="_blank" rel="noopener noreferrer">
                        <Eye className="h-4 w-4 mr-2" />
                        BEHANCE
                      </a>
                    </Button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Project Details */}
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Challenges */}
          {project.challenges && project.challenges[language] && (
            <div className="bg-white border-8 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-red-500 border-4 border-black flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h2 className="font-black text-3xl uppercase">
                  {language === 'es' ? 'DESAFÍOS' : 'CHALLENGES'}
                </h2>
              </div>
              
              <ul className="space-y-4">
                {project.challenges[language].map((challenge, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-yellow-400 border-2 border-black flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="font-black text-xs text-black">{index + 1}</span>
                    </div>
                    <p className="font-medium text-gray-700 leading-relaxed">{challenge}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Outcomes */}
          {project.outcomes && project.outcomes[language] && (
            <div className="bg-white border-8 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-green-500 border-4 border-black flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h2 className="font-black text-3xl uppercase">
                  {language === 'es' ? 'RESULTADOS' : 'OUTCOMES'}
                </h2>
              </div>
              
              <ul className="space-y-4">
                {project.outcomes[language].map((outcome, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-green-400 border-2 border-black flex items-center justify-center flex-shrink-0 mt-1">
                      <Zap className="w-4 h-4 text-black" />
                    </div>
                    <p className="font-medium text-gray-700 leading-relaxed">{outcome}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Additional Images */}
        {(project.additionalImages && project.additionalImages.length > 0) && (
          <div className="mt-16">
            <div className="bg-white border-8 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="font-black text-3xl uppercase mb-8">
                {language === 'es' ? 'GALERÍA DEL PROYECTO' : 'PROJECT GALLERY'}
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.additionalImages.map((imageUrl, index) => (
                  <div 
                    key={index} 
                    className="bg-gray-100 border-4 border-black overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-300"
                  >
                    <div className="aspect-square relative">
                      <ImageWithFallback
                        src={imageUrl}
                        alt={`${typeof project.title === 'string' ? project.title : project.title[language]} - ${language === 'es' ? 'Imagen' : 'Image'} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Use static additional images as fallback */}
        {!project.additionalImages && additionalProjectImages[project.id] && (
          <div className="mt-16">
            <div className="bg-white border-8 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="font-black text-3xl uppercase mb-8">
                {language === 'es' ? 'GALERÍA DEL PROYECTO' : 'PROJECT GALLERY'}
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {additionalProjectImages[project.id].map((imageUrl, index) => (
                  <div 
                    key={index} 
                    className="bg-gray-100 border-4 border-black overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-300"
                  >
                    <div className="aspect-square relative">
                      <ImageWithFallback
                        src={imageUrl}
                        alt={`${typeof project.title === 'string' ? project.title : project.title[language]} - ${language === 'es' ? 'Imagen' : 'Image'} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-black text-white border-8 border-black p-8 inline-block">
            <h3 className="font-black text-2xl uppercase mb-4">
              {language === 'es' ? '¿TE GUSTA ESTE PROYECTO?' : 'LIKE THIS PROJECT?'}
            </h3>
            <p className="font-medium mb-6">
              {language === 'es' ? 'Hablemos sobre tu próximo proyecto' : "Let's talk about your next project"}
            </p>
            <Button
              onClick={() => {
                navigateToHome();
                setTimeout(() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }, 100);
              }}
              className="bg-yellow-400 hover:bg-green-400 text-black font-black uppercase px-8 py-4 border-4 border-yellow-400 hover:border-green-400 transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]"
            >
              <Zap className="w-5 h-5 mr-2" />
              {language === 'es' ? 'TRABAJEMOS JUNTOS' : "LET'S WORK TOGETHER"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}