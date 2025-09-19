import React from 'react';
import { Badge } from './ui/badge';
import { useLanguage } from '../context/LanguageContext';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  const techStack = ['REACT', 'TYPESCRIPT', 'NODE', 'FIGMA'];

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Geometric decorations */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Yellow rectangle */}
        <div className="absolute top-32 left-4 w-64 h-20 bg-yellow-400 transform -rotate-3 opacity-90"></div>
        
        {/* Blue triangle */}
        <div className="absolute top-72 left-0 w-0 h-0 border-l-[100px] border-l-transparent border-r-[100px] border-r-transparent border-b-[120px] border-b-cyan-400 opacity-80"></div>
        
        {/* Orange shape */}
        <div className="absolute top-20 right-0 w-72 h-96 bg-gradient-to-bl from-orange-400 to-red-500 transform rotate-12 opacity-70"></div>
        
        {/* Purple rectangle */}
        <div className="absolute bottom-20 right-20 w-48 h-32 bg-purple-500 transform -rotate-6 opacity-80"></div>
        
        {/* Green circle */}
        <div className="absolute bottom-32 left-1/3 w-24 h-24 bg-green-400 rounded-full opacity-90"></div>
        
        {/* Small decorative elements */}
        <div className="absolute top-1/2 right-1/4 w-8 h-8 bg-blue-500 rounded-full"></div>
        <div className="absolute top-1/3 left-1/2 w-6 h-6 bg-yellow-500 transform rotate-45"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Main content */}
          <div className="space-y-8">
            {/* Main title with geometric styling */}
            <div className="space-y-4">
              <div className="inline-block">
                <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black leading-none">
                  <span className="block bg-yellow-400 text-black px-6 py-3 transform -rotate-1 hover:rotate-0 inline-block mb-3 transition-transform duration-300 cursor-default">
                    {t('design', { es: 'DISEÑO', en: 'DESIGN' })}
                  </span>
                </h1>
              </div>
              
              <div className="flex items-center space-x-6">
                <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black text-black dark:text-white">
                  {t('and', { es: 'Y', en: '&' })}
                </h1>
                <div className="w-0 h-0 border-l-[80px] border-l-transparent border-r-[80px] border-r-transparent border-b-[100px] border-b-cyan-400"></div>
              </div>
              
              <div className="inline-block">
                <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black leading-none">
                  <span className="block bg-black dark:bg-white text-white dark:text-black px-6 py-3 transform rotate-1 hover:rotate-0 inline-block transition-transform duration-300 cursor-default">
                    {t('code', { es: 'CÓDIGO', en: 'CODE' })}
                  </span>
                </h1>
              </div>
              
              <div className="mt-6">
                <div className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 transform -rotate-1">
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">
                    {t('subtitle', {
                      es: 'EXPERIENCIAS DIGITALES',
                      en: 'DIGITAL EXPERIENCES'
                    })}
                  </h2>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="w-full flex justify-center mt-12">
              <div className="bg-black text-white shadow-xl border-2 border-black p-8 max-w-2xl mx-4">
                <p className="text-lg leading-relaxed text-center">
                  {t('description', {
                    es: 'Diseñadora UX y web especializada en la creatividad, puntualidad y entrega. Orientada a brindar soluciones reales y completas a las distintas necesidades de comunicación en los diversos espacios digitales.',
                    en: 'UX and web designer specialized in creativity, punctuality and delivery. Focused on providing real and complete solutions to the different communication needs in various digital spaces.'
                  })}
                </p>
              </div>
            </div>
          </div>

          {/* Stats and info panel */}
          <div className="relative">
            {/* Info card with geometric styling */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl border-4 border-black dark:border-white p-6 transform rotate-2 hover:rotate-0 transition-transform duration-300">
              <div className="space-y-6">
                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-orange-500 text-white p-4 rounded-lg transform -rotate-1">
                    <div className="font-black text-2xl">15+</div>
                    <div className="text-sm font-medium">
                      {t('projects', { es: 'PROYECTOS', en: 'PROJECTS' })}
                    </div>
                  </div>
                  <div className="bg-purple-500 text-white p-4 rounded-lg transform rotate-1">
                    <div className="font-black text-2xl">3+</div>
                    <div className="text-sm font-medium">
                      {t('years', { es: 'AÑOS', en: 'YEARS' })}
                    </div>
                  </div>
                </div>

                {/* Tech stack */}
                <div className="bg-black dark:bg-white text-white dark:text-black p-4 rounded-lg">
                  <div className="text-sm font-bold mb-3">TECH STACK</div>
                  <div className="flex flex-wrap gap-2">
                    {techStack.map((tech) => (
                      <Badge 
                        key={tech}
                        className="bg-yellow-400 text-black hover:bg-yellow-500 font-bold text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Availability */}
                <div className="bg-green-400 text-black p-4 rounded-lg text-center transform -rotate-1">
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-3 h-3 bg-green-800 rounded-full animate-pulse"></div>
                    <span className="font-bold text-sm">
                      {t('available', { es: 'DISPONIBLE', en: 'AVAILABLE' })}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};