import React, { useEffect, useState, useRef } from 'react';
import { ArrowDownRight } from 'lucide-react';
import { Button } from './ui/button';
import { useLanguage } from '../contexts/LanguageContext';

export function NeoBrutalistHero(): JSX.Element {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToProjects = (): void => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={heroRef}
      id="hero" 
      className="min-h-screen flex items-center pt-16 px-6 lg:px-8 relative overflow-hidden"
      style={{ 
        background: 'linear-gradient(135deg, #fff 0%, #f8f9fa 50%, #fff 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto w-full relative">
        
        {/* Geometric Background Elements */}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-br from-orange-400 to-red-500 rounded-none transform rotate-12 opacity-80" 
             style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 60%, 80% 100%, 20% 100%, 0% 60%)' }} />
        
        <div className="absolute top-40 -left-16 w-64 h-64 bg-gradient-to-tr from-green-400 to-blue-500 rounded-none transform -rotate-45" 
             style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
        
        <div className="absolute bottom-20 right-40 w-40 h-40 bg-gradient-to-bl from-purple-500 to-pink-500 rounded-full" />

        {/* Main Content */}
        <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          
          {/* Left Column - Text */}
          <div className={`space-y-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            


            {/* Main Title - Fragmentado */}
            <div className="space-y-4">
              <h1 className="space-y-2">
                <div className="text-6xl md:text-8xl lg:text-9xl font-black leading-none">
                  <span className="block text-black transform -rotate-2 inline-block bg-yellow-400 px-4 py-2">
                    {t('hero.title').split(' ')[0]}
                  </span>
                </div>
                <div className="text-6xl md:text-8xl lg:text-9xl font-black leading-none ml-12">
                  <span className="text-black transform rotate-1 inline-block">
                    {t('hero.title').split(' ')[1]}
                  </span>
                </div>
                <div className="text-6xl md:text-8xl lg:text-9xl font-black leading-none">
                  <span className="block text-white bg-black px-4 py-2 transform rotate-1 inline-block">
                    {t('hero.title').split(' ')[2]}
                  </span>
                </div>
              </h1>
              
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-700 ml-8 transform -rotate-1">
                <span className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-3 py-1 inline-block">
                  {t('hero.title').split('. ')[1]}
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="bg-black text-white p-6 transform rotate-1 max-w-lg">
              <p className="text-lg font-bold leading-relaxed">
                {t('hero.subtitle')}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 pt-8">
              <Button
                onClick={scrollToProjects}
                className="bg-green-400 hover:bg-green-500 text-black font-black text-lg px-8 py-6 rounded-none transform -rotate-1 hover:rotate-0 transition-all duration-300 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] interactive-elem"
                data-cursor-text="Ver proyectos"
              >
{t('hero.cta')}
                <ArrowDownRight className="w-6 h-6 ml-2" />
              </Button>
              
              <Button
                variant="outline"
                className="border-4 border-black bg-white text-black font-black text-lg px-8 py-6 rounded-none transform rotate-1 hover:-rotate-1 transition-all duration-300 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
{t('nav.contact')}
              </Button>
            </div>
          </div>

          {/* Right Column - Visual Elements */}
          <div className={`relative transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            
            {/* Main Card */}
            <div className="bg-white border-8 border-black p-8 transform -rotate-3 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
              <div className="space-y-6">
                
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-orange-400 p-4 transform rotate-2">
                    <div className="text-3xl font-black text-black">15+</div>
                    <div className="text-sm font-bold text-black uppercase">{t('hero.stats.projects')}</div>
                  </div>
                  <div className="bg-purple-500 p-4 transform -rotate-1">
                    <div className="text-3xl font-black text-white">3+</div>
                    <div className="text-sm font-bold text-white uppercase">{t('hero.stats.years')}</div>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="bg-black p-4 transform rotate-1">
                  <div className="text-sm font-black text-white uppercase mb-2">{t('hero.techStack')}</div>
                  <div className="flex flex-wrap gap-2">
                    {['REACT', 'TYPESCRIPT', 'NODE', 'FIGMA'].map((tech) => (
                      <span key={tech} className="bg-yellow-400 text-black px-2 py-1 text-xs font-black">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Status */}
                <div className="flex items-center justify-between bg-green-400 p-4 transform -rotate-1">
                  <span className="text-black font-black uppercase">{t('hero.status')}</span>
                  <div className="w-4 h-4 bg-black rounded-full animate-pulse" />
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-8 -right-8 w-16 h-16 bg-red-500 rounded-none transform rotate-45 animate-bounce" />
            <div className="absolute bottom-4 -left-4 w-12 h-12 bg-blue-500 rounded-none animate-pulse" />
            <div className="absolute top-1/2 -right-12 w-8 h-8 bg-yellow-400 rounded-full animate-spin" />
          </div>
        </div>


      </div>
    </section>
  );
}