import React, { useEffect, useState, useRef } from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { useLanguage } from '../contexts/LanguageContext';

export function MinimalistHero(): JSX.Element {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left - rect.width / 2) / 20,
          y: (e.clientY - rect.top - rect.height / 2) / 20
        });
      }
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
    <section 
      ref={heroRef}
      id="hero" 
      className="min-h-screen flex items-center justify-center pt-16 px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Interactive background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`
          }}
        />
        <div 
          className="absolute top-3/4 right-1/4 w-3 h-3 bg-accent/40 rounded-full animate-pulse delay-1000"
          style={{
            transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px)`
          }}
        />
        <div 
          className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-primary/50 rounded-full animate-pulse delay-500"
          style={{
            transform: `translate(${mousePosition.x * 0.7}px, ${mousePosition.y * 0.7}px)`
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        {/* Main content with generous spacing */}
        <div className="space-y-12">
          
          {/* Interactive title with clean typography */}
          <div className={`space-y-8 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h1 className="space-y-4 group">
              <span 
                className="block text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-foreground transition-all duration-300 hover:text-primary"
                style={{
                  transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
                }}
              >
                {t('hero.title').split('.')[0]}
                <Sparkles className="inline ml-4 h-8 w-8 text-primary/60 animate-pulse" />
              </span>
              <span 
                className="block text-2xl md:text-3xl lg:text-4xl font-light text-muted-foreground transition-all duration-300 group-hover:text-foreground"
                style={{
                  transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`
                }}
              >
                {t('hero.title').split('.')[1]}
              </span>
            </h1>
          </div>

          {/* Interactive subtitle */}
          <div className={`transition-all duration-1000 ease-out delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <p 
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed hover:text-foreground transition-colors duration-300"
              style={{
                transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
              }}
            >
              {t('hero.subtitle')}
            </p>
          </div>

          {/* Animated line separator */}
          <div className={`transition-all duration-1000 ease-out delay-500 ${
            isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto animate-pulse" />
          </div>

          {/* Interactive CTA */}
          <div className={`transition-all duration-1000 ease-out delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="btn-interactive px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:scale-105 hover-lift animate-interactive-glow interactive-elem group"
              data-cursor-text="Ver proyectos"
            >
              <span className="relative z-10">{t('hero.cta')}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded" />
            </Button>
          </div>
        </div>

        {/* Interactive scroll indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ease-out delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <button
            onClick={scrollToProjects}
            className="flex flex-col items-center space-y-2 text-muted-foreground hover:text-primary transition-all duration-300 group hover-lift interactive-elem"
            aria-label={t('hero.cta')}
            data-cursor-text="Scroll down"
          >
            <span className="text-sm group-hover:scale-105 transition-transform duration-300">Scroll</span>
            <div className="relative">
              <ArrowDown className="h-4 w-4 animate-bounce group-hover:animate-none group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 bg-primary/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-300" />
            </div>
          </button>
        </div>

        {/* Floating decorative elements */}
        <div className="absolute top-1/3 -left-20 w-32 h-32 border border-primary/10 rounded-full animate-float opacity-30" />
        <div className="absolute bottom-1/3 -right-16 w-24 h-24 border border-accent/15 rounded-full animate-float delay-1000 opacity-40" />
        <div className="absolute top-2/3 left-1/3 w-16 h-16 border border-primary/20 rotate-45 animate-float delay-500 opacity-25" />
      </div>
    </section>
  );
}