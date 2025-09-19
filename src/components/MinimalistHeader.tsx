import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Globe, Moon, Sun } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { useRoute } from '../contexts/RouteContext';

export function MinimalistHeader(): JSX.Element {
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const { currentRoute, navigateToHome } = useRoute();
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string): void => {
    if (currentRoute !== 'home') {
      navigateToHome();
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const toggleLanguage = (): void => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'glass-card shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Interactive logo */}
          <button
            onClick={() => {
              if (currentRoute === 'home') {
                scrollToSection('hero');
              } else {
                navigateToHome();
              }
            }}
            className="text-foreground hover:text-primary transition-all duration-300 hover-lift relative group interactive-elem"
            aria-label={language === 'es' ? 'Ir al inicio' : 'Go to home'}
            data-cursor-text="Home"
          >
            <span className="text-xl font-medium relative z-10">Portfolio</span>
            <div className="absolute inset-0 bg-primary/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300" />
          </button>

          {/* Interactive navigation - only show on home page */}
          {currentRoute === 'home' && (
            <nav className="hidden md:flex items-center space-x-8" role="navigation">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-muted-foreground hover:text-foreground transition-all duration-300 relative group px-3 py-2 rounded-lg hover:bg-primary/5 interactive-elem"
                data-cursor-text="Inicio"
              >
                {t('nav.home')}
                <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-8 group-hover:left-1/2 group-hover:-translate-x-1/2 transition-all duration-300 rounded-full" />
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-muted-foreground hover:text-foreground transition-all duration-300 relative group px-3 py-2 rounded-lg hover:bg-primary/5 interactive-elem"
                data-cursor-text="Proyectos"
              >
                {t('nav.projects')}
                <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-8 group-hover:left-1/2 group-hover:-translate-x-1/2 transition-all duration-300 rounded-full" />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-muted-foreground hover:text-foreground transition-all duration-300 relative group px-3 py-2 rounded-lg hover:bg-primary/5 interactive-elem"
                data-cursor-text="Contacto"
              >
                {t('nav.contact')}
                <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-8 group-hover:left-1/2 group-hover:-translate-x-1/2 transition-all duration-300 rounded-full" />
              </button>
            </nav>
          )}

          {/* Controls */}
          <div className="flex items-center space-x-2">
            
            {/* Interactive theme toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              aria-label={language === 'es' ? 'Cambiar tema' : 'Toggle theme'}
              className="btn-interactive hover:bg-primary/10 hover:text-primary transition-all duration-300 hover-lift relative group interactive-elem"
              data-cursor-text={theme === 'light' ? 'Modo oscuro' : 'Modo claro'}
            >
              {theme === 'light' ? (
                <Moon className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
              ) : (
                <Sun className="h-4 w-4 group-hover:rotate-90 transition-transform duration-300" />
              )}
            </Button>

            {/* Interactive language toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              aria-label={t('aria.languageSelector')}
              className="btn-interactive flex items-center space-x-2 hover:bg-primary/10 hover:text-primary transition-all duration-300 hover-lift relative group interactive-elem"
              data-cursor-text="Cambiar idioma"
            >
              <Globe className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
              <span className="uppercase text-sm font-medium group-hover:scale-105 transition-transform duration-300">{language}</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}