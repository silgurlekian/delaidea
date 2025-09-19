import React, { useState } from 'react';
import { Button } from './ui/button';
import { Globe, Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useRoute } from '../contexts/RouteContext';

export function Header() {
  const { language, setLanguage, t } = useLanguage();
  const { currentRoute, navigateToHome } = useRoute();
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

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
    <header className="bg-white">
      <div className="flex items-center justify-between px-6 lg:px-8 py-4">

        {/* Logo */}
        <button
          onClick={() => {
            if (currentRoute === 'home') {
              scrollToSection('hero');
            } else {
              navigateToHome();
            }
          }}
          className="flex items-center space-x-3 text-black p-2"
          aria-label={language === 'es' ? 'Ir al inicio' : 'Go to home'}
        >
          <img src="/images/logo_dli.png" alt="Portfolio Logo" className="h-12 w-auto" />
        </button>

        {/* Desktop Navigation */}
        {currentRoute === 'home' && (
          <nav className="hidden md:flex items-center gap-2" role="navigation">
            <button
              onClick={() => scrollToSection('hero')}
              className="px-4 py-2 font-black uppercase text-sm text-black hover:text-white hover:bg-black transition-all duration-300"
            >
              {t('nav.home')}
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="px-4 py-2 font-black uppercase text-sm text-black hover:text-white hover:bg-black transition-all duration-300"
            >
              {t('nav.projects')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-4 py-2 font-black uppercase text-sm text-black hover:text-white hover:bg-black transition-all duration-300"
            >
              {t('nav.contact')}
            </button>
          </nav>
        )}

        {/* Controls */}
        <div className="flex items-center space-x-2">

          {/* Language Toggle */}
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            aria-label={t('aria.languageSelector')}
            className="hidden sm:flex items-center space-x-1 h-10 px-3 bg-green-400 hover:bg-blue-500 text-black hover:text-white font-black uppercase transition-all duration-300"
          >
            <Globe className="h-4 w-4" />
            <span className="text-xs">{language}</span>
          </Button>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 p-0 bg-purple-500 hover:bg-orange-500 text-white transition-all duration-300 transform hover:rotate-90"
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

      {/* Mobile Menu */}
      {mobileMenuOpen && currentRoute === 'home' && (
        <div className="md:hidden bg-black text-white p-6">
          <nav className="space-y-4">
            <button
              onClick={() => scrollToSection('hero')}
              className="block w-full text-left font-black uppercase text-lg hover:text-yellow-400 transition-colors duration-300 transform hover:translate-x-2"
            >
              {t('nav.home')}
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="block w-full text-left font-black uppercase text-lg hover:text-green-400 transition-colors duration-300 transform hover:translate-x-2"
            >
              {t('nav.projects')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left font-black uppercase text-lg hover:text-red-400 transition-colors duration-300 transform hover:translate-x-2"
            >
              {t('nav.contact')}
            </button>

            <div className="border-t-2 border-gray-600 pt-4 mt-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleLanguage}
                className="w-full justify-start font-black uppercase text-lg hover:text-blue-400 p-0"
              >
                <Globe className="h-4 w-4 mr-2" />
                {language === 'es' ? 'ENGLISH' : 'ESPAÑOL'}
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}