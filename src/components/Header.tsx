import React, { useState } from 'react';
import { Button } from './ui/button';
import { Globe, Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Header(): JSX.Element {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('hero')}
              className="font-bold text-xl bg-gradient-to-r from-[var(--vibrant-purple)] to-[var(--vibrant-pink)] bg-clip-text text-transparent hover:from-[var(--vibrant-pink)] hover:to-[var(--vibrant-purple)] transition-all duration-300"
              aria-label={language === 'es' ? 'Ir al inicio' : 'Go to home'}
            >
              Portfolio
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block" role="navigation" aria-label={t('aria.mainNavigation')}>
            <ul className="flex items-center space-x-8">
              <li>
                <button
                  onClick={() => scrollToSection('hero')}
                  className="text-muted-foreground hover:text-[var(--vibrant-purple)] transition-colors duration-200 font-medium"
                >
                  {t('nav.home')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="text-muted-foreground hover:text-[var(--vibrant-blue)] transition-colors duration-200 font-medium"
                >
                  {t('nav.projects')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-muted-foreground hover:text-[var(--vibrant-green)] transition-colors duration-200 font-medium"
                >
                  {t('nav.contact')}
                </button>
              </li>
            </ul>
          </nav>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              aria-label={t('aria.languageSelector')}
              className="flex items-center space-x-2 hover:bg-[var(--vibrant-purple)]/10 hover:text-[var(--vibrant-purple)] transition-colors duration-200"
            >
              <Globe className="h-4 w-4" />
              <span className="uppercase font-medium">{language}</span>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden hover:bg-[var(--vibrant-purple)]/10 hover:text-[var(--vibrant-purple)]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? t('aria.closeModal') : 'Open menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav
            id="mobile-menu"
            className="md:hidden py-4 border-t border-border/50 bg-background/95 backdrop-blur-lg"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <ul className="space-y-4">
              <li>
                <button
                  onClick={() => scrollToSection('hero')}
                  className="block w-full text-left text-muted-foreground hover:text-[var(--vibrant-purple)] transition-colors py-2 font-medium"
                >
                  {t('nav.home')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="block w-full text-left text-muted-foreground hover:text-[var(--vibrant-blue)] transition-colors py-2 font-medium"
                >
                  {t('nav.projects')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="block w-full text-left text-muted-foreground hover:text-[var(--vibrant-green)] transition-colors py-2 font-medium"
                >
                  {t('nav.contact')}
                </button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}