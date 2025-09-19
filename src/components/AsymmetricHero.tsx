import React, { useEffect, useState } from 'react';
import { ChevronDown, ArrowUpRight, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { useLanguage } from '../contexts/LanguageContext';

export function AsymmetricHero(): JSX.Element {
  const { t } = useLanguage();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent): void => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToProjects = (): void => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden pt-16">
      
      {/* Asymmetric background elements */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-br from-[var(--vibrant-purple)]/20 to-[var(--vibrant-pink)]/20 rounded-full blur-3xl"
          style={{
            top: '10%',
            right: '15%',
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px) rotate(45deg)`
          }}
        />
        <div 
          className="absolute w-80 h-80 bg-gradient-to-br from-[var(--vibrant-blue)]/20 to-[var(--vibrant-green)]/20 rounded-full blur-3xl"
          style={{
            bottom: '20%',
            left: '10%',
            transform: `translate(${mousePosition.x * -0.03}px, ${mousePosition.y * -0.03}px) rotate(-30deg)`
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Broken Grid Layout */}
        <div className="grid grid-cols-12 gap-6 min-h-[80vh] items-center">
          
          {/* Main title - Asymmetric placement */}
          <div className="col-span-12 lg:col-span-8 lg:col-start-2 relative">
            <div className={`transform transition-all duration-1000 delay-200 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
            }`}>
              
              {/* Floating accent card */}
              <Card className="absolute -top-8 -left-8 w-32 h-20 bg-gradient-to-br from-[var(--vibrant-orange)]/10 to-[var(--vibrant-pink)]/10 border-[var(--vibrant-orange)]/20 transform rotate-12 z-0 hidden lg:block">
                <div className="h-full flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-[var(--vibrant-orange)]" />
                </div>
              </Card>

              <h1 className="relative z-10">
                <span className="block text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight mb-4">
                  <span className="bg-gradient-to-r from-[var(--vibrant-purple)] via-[var(--vibrant-pink)] to-[var(--vibrant-blue)] bg-clip-text text-transparent transform inline-block hover:scale-105 transition-transform duration-300">
                    {t('hero.title').split('.')[0]}
                  </span>
                </span>
                
                <span className="block text-2xl sm:text-3xl lg:text-5xl font-medium text-muted-foreground transform -skew-x-6 ml-8 mt-2">
                  {t('hero.title').split('.')[1]}
                </span>
              </h1>
            </div>
          </div>

          {/* Subtitle - Offset positioning */}
          <div className="col-span-12 lg:col-span-6 lg:col-start-4 relative">
            <div className={`transform transition-all duration-1000 delay-500 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
            }`}>
              <Card className="bg-background/80 backdrop-blur-lg border-border/50 p-6 transform rotate-1 hover:rotate-0 transition-all duration-300 shadow-xl">
                <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                  {t('hero.subtitle')}
                </p>
              </Card>
            </div>
          </div>

          {/* CTA Section - Asymmetric placement */}
          <div className="col-span-12 lg:col-span-4 lg:col-start-8 relative">
            <div className={`transform transition-all duration-1000 delay-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}>
              <div className="space-y-6">
                <Button
                  onClick={scrollToProjects}
                  size="lg"
                  className="w-full lg:w-auto transform -rotate-2 hover:rotate-0 transition-all duration-300 bg-gradient-to-r from-[var(--vibrant-purple)] to-[var(--vibrant-pink)] hover:from-[var(--vibrant-pink)] hover:to-[var(--vibrant-purple)] text-white border-0 shadow-2xl hover:shadow-3xl text-lg px-8 py-4 group"
                >
                  <span className="mr-3">{t('hero.cta')}</span>
                  <ArrowUpRight className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </Button>

                {/* Decorative stats cards */}
                <div className="hidden lg:flex space-x-4">
                  <Card className="flex-1 p-4 bg-gradient-to-br from-[var(--vibrant-blue)]/5 to-[var(--vibrant-green)]/5 border-[var(--vibrant-blue)]/20 transform rotate-2">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[var(--vibrant-blue)]">6+</div>
                      <div className="text-xs text-muted-foreground">Proyectos</div>
                    </div>
                  </Card>
                  <Card className="flex-1 p-4 bg-gradient-to-br from-[var(--vibrant-green)]/5 to-[var(--vibrant-orange)]/5 border-[var(--vibrant-green)]/20 transform -rotate-2">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[var(--vibrant-green)]">3+</div>
                      <div className="text-xs text-muted-foreground">Años</div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>

          {/* Floating elements - Asymmetric scattered */}
          <div className="col-span-2 lg:col-span-1 lg:col-start-1 hidden lg:block">
            <div className={`space-y-8 transform transition-all duration-1000 delay-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
            }`}>
              <Card className="w-16 h-16 bg-gradient-to-br from-[var(--vibrant-purple)]/10 to-[var(--vibrant-pink)]/10 border-[var(--vibrant-purple)]/20 transform rotate-45 hover:rotate-90 transition-all duration-500" />
              <Card className="w-12 h-20 bg-gradient-to-br from-[var(--vibrant-blue)]/10 to-[var(--vibrant-green)]/10 border-[var(--vibrant-blue)]/20 transform -rotate-12 hover:rotate-0 transition-all duration-500" />
              <Card className="w-20 h-12 bg-gradient-to-br from-[var(--vibrant-green)]/10 to-[var(--vibrant-orange)]/10 border-[var(--vibrant-green)]/20 transform rotate-12 hover:-rotate-12 transition-all duration-500" />
            </div>
          </div>

          <div className="col-span-2 lg:col-span-1 lg:col-start-12 hidden lg:block">
            <div className={`space-y-6 transform transition-all duration-1000 delay-1200 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
            }`}>
              <Card className="w-14 h-14 bg-gradient-to-br from-[var(--vibrant-orange)]/10 to-[var(--vibrant-pink)]/10 border-[var(--vibrant-orange)]/20 transform -rotate-30 hover:rotate-0 transition-all duration-500" />
              <Card className="w-18 h-10 bg-gradient-to-br from-[var(--vibrant-pink)]/10 to-[var(--vibrant-purple)]/10 border-[var(--vibrant-pink)]/20 transform rotate-45 hover:-rotate-45 transition-all duration-500" />
            </div>
          </div>
        </div>

        {/* Scroll indicator - Asymmetric positioning */}
        <div className={`absolute bottom-8 left-1/4 transform transition-all duration-1000 delay-1500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
          <button
            onClick={scrollToProjects}
            className="flex flex-col items-center space-y-2 text-muted-foreground hover:text-[var(--vibrant-purple)] transition-colors group transform rotate-6 hover:rotate-0"
            aria-label={t('hero.cta')}
          >
            <span className="text-sm font-medium transform -rotate-6">{t('nav.projects')}</span>
            <ChevronDown className="h-5 w-5 animate-bounce group-hover:animate-none transition-colors" />
          </button>
        </div>
      </div>
    </section>
  );
}