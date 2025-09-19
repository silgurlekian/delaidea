// src/components/NeoBrutalistProjectDetailPage.tsx
import React from 'react';
import { 
  ArrowLeft, ExternalLink, Github, Eye, Clock, User, Star, Zap, Target, TrendingUp 
} from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from '../contexts/LanguageContext';
import { useRoute } from '../contexts/RouteContext';
import { Project } from '../data/projects';

// Main project images
const projectImages: Record<string, string> = {
  'ecommerce-redesign': 'https://images.unsplash.com/photo-1693486145118-d963c3a6ce6a?...',
  'dashboard-analytics': 'https://images.unsplash.com/photo-1610913721979-b20ede600e63?...',
  'mobile-banking-app': 'https://images.unsplash.com/photo-1681826291722-70bd7e9e6fc3?...',
  'design-system': 'https://images.unsplash.com/photo-1737918543118-9c9e074c60b5?...',
  'saas-platform': 'https://images.unsplash.com/photo-1575388902449-6bca946ad549?...',
  'travel-booking-app': 'https://images.unsplash.com/photo-1673515336319-20a3ea59c228?...',
  'portfolio-website': 'https://images.unsplash.com/photo-1693486145118-d963c3a6ce6a?...',
  'fitness-tracker': 'https://images.unsplash.com/photo-1610913721979-b20ede600e63?...',
  'alta-tienda': 'https://images.unsplash.com/photo-1755514838747-adfd34197d39?...'
};

// Additional project images
const additionalProjectImages: Record<string, string[]> = {
  'ecommerce-redesign': [
    'https://images.unsplash.com/photo-1721864428881-dbabb9ea0017?...',
    'https://images.unsplash.com/photo-1570894808314-677b57f25e45?...'
  ],
  'dashboard-analytics': [
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?...'
  ],
  'alta-tienda': [
    'https://images.unsplash.com/photo-1681152968214-9dad026ad188?...'
  ]
};

// Category colors and labels
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
  'bg-yellow-400', 'bg-green-400', 'bg-blue-400', 'bg-red-400', 'bg-purple-500', 'bg-orange-400'
];

export function NeoBrutalistProjectDetailPage() {
  const { language } = useLanguage();
  const { selectedProject, navigateToHome } = useRoute();

  if (!selectedProject) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-black text-4xl text-black mb-4">PROYECTO NO ENCONTRADO</h1>
          <Button 
            onClick={navigateToHome} 
            className="bg-red-500 hover:bg-black text-white font-black"
          >
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
        {/* Back Button */}
        <div className="mb-12">
          <Button
            onClick={() => {
              navigateToHome();
              setTimeout(() => {
                const element = document.getElementById('projects');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
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
            <div className="aspect-video relative">
              <ImageWithFallback
                src={projectImages[project.id as keyof typeof projectImages] ?? '/placeholder.jpg'}
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
              {project.year && (
                <div className="absolute top-6 right-6">
                  <div className="bg-yellow-400 text-black px-4 py-2 font-black text-sm border-4 border-black">
                    {project.year}
                  </div>
                </div>
              )}
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
                  {project.technologies.map((tech: string, index: number) => (
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
                    <Button asChild className="bg-yellow-400 hover:bg-green-400 text-black font-black uppercase px-6 py-3 border-4 border-black">
                      <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        {language === 'es' ? 'VER DEMO' : 'VIEW DEMO'}
                      </a>
                    </Button>
                  )}
                  {project.links.github && (
                    <Button asChild className="bg-purple-500 hover:bg-blue-400 text-white hover:text-black font-black uppercase px-6 py-3 border-4 border-black">
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        {language === 'es' ? 'VER CÓDIGO' : 'VIEW CODE'}
                      </a>
                    </Button>
                  )}
                  {project.links.behance && (
                    <Button asChild className="bg-orange-400 hover:bg-red-500 text-black hover:text-white font-black uppercase px-6 py-3 border-4 border-black">
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

        {/* Challenges & Outcomes */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Challenges */}
          {project.challenges && project.challenges.length > 0 && (
            <div className="bg-white border-8 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-red-500 border-4 border-black flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h2 className="font-black text-3xl uppercase">{language === 'es' ? 'DESAFÍOS' : 'CHALLENGES'}</h2>
              </div>
              <ul className="space-y-4">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-yellow-400 border-2 border-black flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="font-black text-xs text-black">{index + 1}</span>
                    </div>
                    <p className="font-medium text-gray-700 leading-relaxed">{challenge[language]}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Outcomes */}
          {project.outcomes && project.outcomes.length > 0 && (
            <div className="bg-white border-8 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-green-500 border-4 border-black flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h2 className="font-black text-3xl uppercase">{language === 'es' ? 'RESULTADOS' : 'OUTCOMES'}</h2>
              </div>
              <ul className="space-y-4">
                {project.outcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-green-400 border-2 border-black flex items-center justify-center flex-shrink-0 mt-1">
                      <Zap className="w-4 h-4 text-black" />
                    </div>
                    <p className="font-medium text-gray-700 leading-relaxed">{outcome[language]}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Project Gallery */}
        <div className="mt-16">
          <div className="bg-white border-8 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="font-black text-3xl uppercase mb-8">
              {language === 'es' ? 'GALERÍA DEL PROYECTO' : 'PROJECT GALLERY'}
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(project.additionalImages ?? additionalProjectImages[project.id as keyof typeof additionalProjectImages])?.map((imageUrl, index) => (
                <div key={index} className="bg-gray-100 border-4 border-black overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
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

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-black text-white border-8 border-black p-8 inline-block">
            <h3 className="font-black text-2xl uppercase mb-4">{language === 'es' ? '¿TE GUSTA ESTE PROYECTO?' : 'LIKE THIS PROJECT?'}</h3>
            <p className="font-medium mb-6">{language === 'es' ? 'Hablemos sobre tu próximo proyecto' : "Let's talk about your next project"}</p>
            <Button
              onClick={() => {
                navigateToHome();
                setTimeout(() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
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