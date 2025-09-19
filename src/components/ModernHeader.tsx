import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Globe, Moon, Sun, Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { useRoute } from '../contexts/RouteContext';

export function ModernHeader(): JSX.Element {
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const { currentRoute, navigateToHome } = useRoute();
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string): void => {
    setMobileMenuOpen(false);
    if (currentRoute !== 'home') {
      navigateToHome();
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
      className={`fixed top-6 left-6 right-6 z-50 transition-all duration-500 ${
        scrolled || mobileMenuOpen
          ? 'glass-card shadow-2xl' 
          : 'bg-transparent'
      }`}
      style={{
        borderRadius: '24px',
      }}
    >
      <div className="px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          
          {/* Modern logo */}
          <button
            onClick={() => {
              if (currentRoute === 'home') {
                scrollToSection('hero');
              } else {
                navigateToHome();
              }
            }}
            className="flex items-center space-x-2 text-foreground hover:text-primary transition-all duration-300 hover-lift relative group interactive-elem"
            aria-label={language === 'es' ? 'Ir al inicio' : 'Go to home'}
            data-cursor-text="Home"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <div className="w-3 h-3 bg-white rounded-sm" />
            </div>
            <span className="font-semibold hidden sm:block">Portfolio</span>
          </button>

          {/* Desktop navigation */}
          {currentRoute === 'home' && (
            <nav className="hidden md:flex items-center" role="navigation">
              <div className="flex items-center bg-muted/30 rounded-full p-1 backdrop-blur-sm">
                <button
                  onClick={() => scrollToSection('hero')}
                  className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-background/50 rounded-full transition-all duration-300 interactive-elem"
                  data-cursor-text="Inicio"
                >
                  {t('nav.home')}
                </button>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-background/50 rounded-full transition-all duration-300 interactive-elem"
                  data-cursor-text="Proyectos"
                >
                  {t('nav.projects')}
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-background/50 rounded-full transition-all duration-300 interactive-elem"
                  data-cursor-text="Contacto"
                >
                  {t('nav.contact')}
                </button>
              </div>
            </nav>
          )}

          {/* Controls */}
          <div className="flex items-center space-x-2">
            
            {/* Theme toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              aria-label={language === 'es' ? 'Cambiar tema' : 'Toggle theme'}
              className="w-10 h-10 p-0 rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300 hover-lift interactive-elem"
              data-cursor-text={theme === 'light' ? 'Modo oscuro' : 'Modo claro'}
            >
              <div className="relative">
                {theme === 'light' ? (
                  <Moon className="h-4 w-4 transition-transform duration-300 hover:rotate-12" />
                ) : (
                  <Sun className="h-4 w-4 transition-transform duration-300 hover:rotate-90" />
                )}
              </div>
            </Button>

            {/* Language toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              aria-label={t('aria.languageSelector')}
              className="hidden sm:flex items-center space-x-1 h-10 px-3 rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300 hover-lift interactive-elem"
              data-cursor-text="Cambiar idioma"
            >
              <Globe className="h-4 w-4" />
              <span className="text-xs font-bold uppercase">{language}</span>
            </Button>

            {/* Mobile menu toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-10 h-10 p-0 rounded-full hover:bg-primary/10 transition-all duration-300"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && currentRoute === 'home' && (
          <div className="md:hidden border-t border-border/10 pt-4 pb-4 mt-2 animate-slide-up-fade">
            <nav className="flex flex-col space-y-2">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-left px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-muted/20 rounded-lg transition-all duration-300"
              >
                {t('nav.home')}
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-left px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-muted/20 rounded-lg transition-all duration-300"
              >
                {t('nav.projects')}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-muted/20 rounded-lg transition-all duration-300"
              >
                {t('nav.contact')}
              </button>
              
              <div className="border-t border-border/10 pt-2 mt-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleLanguage}
                  className="w-full justify-start px-4 py-2 hover:bg-muted/20 rounded-lg"
                >
                  <Globe className="h-4 w-4 mr-2" />
                  {language === 'es' ? 'English' : 'Español'}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}