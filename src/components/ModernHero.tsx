import React, { useEffect, useState, useRef } from 'react';
import { ArrowDown, Sparkles, Code, Palette, Zap } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { useLanguage } from '../contexts/LanguageContext';

export function ModernHero(): JSX.Element {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [typedText, setTypedText] = useState<string>('');
  const heroRef = useRef<HTMLElement>(null);
  const fullText = "Diseño y Código";

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (isVisible && typedText.length < fullText.length) {
      timeout = setTimeout(() => {
        setTypedText(fullText.substring(0, typedText.length + 1));
      }, 100);
    }
    return () => clearTimeout(timeout);
  }, [typedText, isVisible, fullText]);

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
      className="min-h-screen flex items-center justify-center pt-20 px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-12 grid-rows-6 gap-4 md:gap-6 h-[80vh] min-h-[600px]">
          
          {/* Main Title Card - Spans large area */}
          <div className={`col-span-12 md:col-span-8 row-span-3 glass-card rounded-3xl p-8 md:p-12 flex flex-col justify-center relative overflow-hidden group transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/20 to-transparent rounded-full blur-2xl" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <Badge className="bg-primary/10 text-primary border-primary/20 px-3 py-1">
                  <Sparkles className="w-3 h-3 mr-1" />
                  Portfolio 2024
                </Badge>
              </div>
              <h1 className="space-y-2">
                <div className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight">
                  <span className="text-foreground">{typedText}</span>
                  <span className="animate-pulse text-primary">|</span>
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light">
                  Experiencias digitales
                </div>
              </h1>
            </div>
            
            {/* Floating elements */}
            <div className="absolute bottom-4 right-4 opacity-30 group-hover:opacity-60 transition-opacity">
              <Code className="w-8 h-8 text-primary animate-float" />
            </div>
          </div>

          {/* Profile/About Card */}
          <div className={`col-span-12 md:col-span-4 row-span-2 glass-card rounded-3xl p-6 relative overflow-hidden group transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent" />
            <div className="relative z-10 h-full flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm text-muted-foreground">Disponible para proyectos</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Frontend Developer</h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                Especializado en React, TypeScript y diseño de experiencias digitales modernas.
              </p>
              <div className="mt-4 flex gap-2">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                  <Palette className="w-3 h-3 text-primary" />
                </div>
                <div className="w-6 h-6 bg-accent/30 rounded-full flex items-center justify-center">
                  <Code className="w-3 h-3 text-accent-foreground" />
                </div>
              </div>
            </div>
          </div>

          {/* Stats Card */}
          <div className={`col-span-6 md:col-span-3 row-span-2 glass-card rounded-3xl p-6 relative overflow-hidden group transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-vibrant-blue/20 to-transparent rounded-full blur-xl" />
            <div className="relative z-10">
              <div className="text-3xl font-bold text-vibrant-blue mb-1">15+</div>
              <div className="text-sm text-muted-foreground">Proyectos completados</div>
              <div className="mt-4 flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className={`w-1 h-6 rounded-full ${i < 4 ? 'bg-vibrant-blue' : 'bg-muted'}`} />
                ))}
              </div>
            </div>
          </div>

          {/* Technologies Card */}
          <div className={`col-span-6 md:col-span-3 row-span-2 glass-card rounded-3xl p-6 relative overflow-hidden group transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-vibrant-purple/20 to-transparent rounded-full blur-lg" />
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-4 h-4 text-vibrant-purple" />
                <span className="text-sm font-medium">Tech Stack</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {['React', 'TS', 'Node', 'Figma', 'Next', 'UI/UX'].map((tech, i) => (
                  <div key={tech} className="text-xs px-2 py-1 bg-muted rounded-lg text-center font-medium animate-slide-up-fade" style={{animationDelay: `${i * 100}ms`}}>
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Card */}
          <div className={`col-span-12 md:col-span-6 row-span-1 glass-card rounded-3xl p-6 flex items-center relative overflow-hidden group transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5" />
            <div className="relative z-10 flex items-center justify-between w-full">
              <div>
                <h3 className="font-semibold mb-1">¿Listo para crear algo increíble?</h3>
                <p className="text-sm text-muted-foreground">Explora mis proyectos más recientes</p>
              </div>
              <Button
                onClick={scrollToProjects}
                className="btn-interactive bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 hover-lift interactive-elem"
                data-cursor-text="Ver proyectos"
              >
                <span className="mr-2">Explorar</span>
                <ArrowDown className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Experience Years Card */}
          <div className={`col-span-12 md:col-span-6 row-span-1 glass-card rounded-3xl p-6 flex items-center justify-between relative overflow-hidden group transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="absolute inset-0 bg-gradient-to-r from-vibrant-green/10 to-vibrant-blue/10" />
            <div className="relative z-10 flex items-center justify-between w-full">
              <div className="flex items-center gap-4">
                <div className="text-2xl font-bold text-vibrant-green">3+</div>
                <div className="text-sm text-muted-foreground">Años de experiencia</div>
              </div>
              <div className="flex gap-2">
                <div className="w-8 h-8 bg-vibrant-green/20 rounded-full flex items-center justify-center animate-pulse">
                  <div className="w-3 h-3 bg-vibrant-green rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ease-out delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <button
            onClick={scrollToProjects}
            className="flex flex-col items-center space-y-2 text-muted-foreground hover:text-primary transition-all duration-300 group hover-lift interactive-elem"
            aria-label="Scroll to projects"
            data-cursor-text="Scroll down"
          >
            <span className="text-xs uppercase tracking-wide">Scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-muted-foreground to-transparent" />
            <ArrowDown className="h-4 w-4 animate-bounce group-hover:animate-none group-hover:scale-110 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
}