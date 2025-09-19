import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Globe, Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function AsymmetricHeader(): JSX.Element {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = (): void => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const toggleLanguage = (): void => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        transform: `translateY(${scrollY * 0.1}px) rotate(${scrollY * 0.02}deg)`,
        background: `linear-gradient(135deg, rgba(139, 92, 246, ${0.1 + scrollY * 0.001}) 0%, rgba(236, 72, 153, ${0.1 + scrollY * 0.001}) 100%)`
      }}
    >
      <div className="backdrop-blur-xl border-b border-border/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo - Positioned asymmetrically */}
            <div className="flex-shrink-0 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <button
                onClick={() => scrollToSection('hero')}
                className="font-bold text-2xl bg-gradient-to-r from-[var(--vibrant-purple)] to-[var(--vibrant-pink)] bg-clip-text text-transparent hover:scale-110 transition-all duration-300"
                aria-label={language === 'es' ? 'Ir al inicio' : 'Go to home'}
              >
                Portfolio
              </button>
            </div>

            {/* Asymmetric Navigation */}
            <nav className="hidden md:block" role="navigation">
              <div className="flex items-center space-x-8 transform -skew-x-12">
                <button
                  onClick={() => scrollToSection('hero')}
                  className="text-muted-foreground hover:text-[var(--vibrant-purple)] transition-colors duration-200 font-medium transform skew-x-12 hover:scale-105 relative group"
                >
                  {t('nav.home')}
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--vibrant-purple)] to-[var(--vibrant-pink)] group-hover:w-full transition-all duration-300" />
                </button>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="text-muted-foreground hover:text-[var(--vibrant-blue)] transition-colors duration-200 font-medium transform skew-x-12 hover:scale-105 relative group"
                >
                  {t('nav.projects')}
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--vibrant-blue)] to-[var(--vibrant-green)] group-hover:w-full transition-all duration-300" />
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-muted-foreground hover:text-[var(--vibrant-green)] transition-colors duration-200 font-medium transform skew-x-12 hover:scale-105 relative group"
                >
                  {t('nav.contact')}
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--vibrant-green)] to-[var(--vibrant-orange)] group-hover:w-full transition-all duration-300" />
                </button>
              </div>
            </nav>

            {/* Language Toggle & Mobile Menu */}
            <div className="flex items-center space-x-4">
              
              {/* Asymmetric Language Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleLanguage}
                aria-label={t('aria.languageSelector')}
                className="flex items-center space-x-2 hover:bg-[var(--vibrant-purple)]/10 hover:text-[var(--vibrant-purple)] transition-all duration-300 transform -rotate-6 hover:rotate-0 rounded-2xl"
              >
                <Globe className="h-4 w-4" />
                <span className="uppercase font-medium">{language}</span>
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden hover:bg-[var(--vibrant-purple)]/10 hover:text-[var(--vibrant-purple)] transform rotate-45 hover:rotate-0 transition-all duration-300"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? t('aria.closeModal') : 'Open menu'}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Asymmetric Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden py-6 border-t border-border/30 bg-background/95 backdrop-blur-lg">
              <div className="grid grid-cols-1 gap-4 transform skew-y-1">
                <button
                  onClick={() => scrollToSection('hero')}
                  className="text-left text-muted-foreground hover:text-[var(--vibrant-purple)] transition-colors py-3 font-medium transform -skew-y-1 hover:translate-x-2 pl-4 border-l-2 border-transparent hover:border-[var(--vibrant-purple)]"
                >
                  {t('nav.home')}
                </button>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="text-left text-muted-foreground hover:text-[var(--vibrant-blue)] transition-colors py-3 font-medium transform -skew-y-1 hover:translate-x-2 pl-4 border-l-2 border-transparent hover:border-[var(--vibrant-blue)]"
                >
                  {t('nav.projects')}
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-left text-muted-foreground hover:text-[var(--vibrant-green)] transition-colors py-3 font-medium transform -skew-y-1 hover:translate-x-2 pl-4 border-l-2 border-transparent hover:border-[var(--vibrant-green)]"
                >
                  {t('nav.contact')}
                </button>
              </div>
            </nav>
          )}
        </div>
      </div>

      {/* Asymmetric progress indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-border to-transparent">
        <div 
          className="h-full bg-gradient-to-r from-[var(--vibrant-purple)] via-[var(--vibrant-pink)] to-[var(--vibrant-blue)] transition-all duration-300"
          style={{ 
            width: `${Math.min(100, (scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100)}%`,
            clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 100%, 20px 100%)'
          }}
        />
      </div>
    </header>
  );
}