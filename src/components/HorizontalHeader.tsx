import React from 'react';
import { Button } from './ui/button';
import { Globe, Home, FolderOpen, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

type Section = 'hero' | 'projects' | 'contact';

interface HorizontalHeaderProps {
  currentSection: Section;
  onSectionChange: (section: Section) => void;
  sections: Section[];
}

const sectionIcons = {
  hero: Home,
  projects: FolderOpen,
  contact: Mail
};

const sectionColors = {
  hero: 'from-[var(--vibrant-purple)] to-[var(--vibrant-pink)]',
  projects: 'from-[var(--vibrant-blue)] to-[var(--vibrant-green)]',
  contact: 'from-[var(--vibrant-green)] to-[var(--vibrant-orange)]'
};

export function HorizontalHeader({ currentSection, onSectionChange, sections }: HorizontalHeaderProps): JSX.Element {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = (): void => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  const getSectionLabel = (section: Section): string => {
    switch (section) {
      case 'hero':
        return t('nav.home');
      case 'projects':
        return t('nav.projects');
      case 'contact':
        return t('nav.contact');
      default:
        return section;
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => onSectionChange('hero')}
              className="font-bold text-xl bg-gradient-to-r from-[var(--vibrant-purple)] to-[var(--vibrant-pink)] bg-clip-text text-transparent hover:from-[var(--vibrant-pink)] hover:to-[var(--vibrant-purple)] transition-all duration-300"
              aria-label={language === 'es' ? 'Ir al inicio' : 'Go to home'}
            >
              Portfolio
            </button>
          </div>

          {/* Tab Navigation */}
          <nav className="flex items-center space-x-1 bg-muted/50 rounded-full p-1 backdrop-blur-lg" role="navigation" aria-label={t('aria.mainNavigation')}>
            {sections.map((section: Section) => {
              const Icon = sectionIcons[section];
              const isActive = currentSection === section;
              
              return (
                <Button
                  key={section}
                  variant="ghost"
                  size="sm"
                  onClick={() => onSectionChange(section)}
                  className={`relative px-6 py-2 rounded-full transition-all duration-300 ${
                    isActive
                      ? `bg-gradient-to-r ${sectionColors[section]} text-white shadow-lg hover:shadow-xl`
                      : 'text-muted-foreground hover:text-foreground hover:bg-background/50'
                  }`}
                  aria-label={getSectionLabel(section)}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <Icon className="h-4 w-4 mr-2" />
                  <span className="font-medium hidden sm:inline">
                    {getSectionLabel(section)}
                  </span>
                  
                  {/* Active indicator */}
                  {isActive && (
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                      <div className={`w-2 h-2 bg-gradient-to-r ${sectionColors[section]} rounded-full shadow-lg`} />
                    </div>
                  )}
                </Button>
              );
            })}
          </nav>

          {/* Language Toggle */}
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              aria-label={t('aria.languageSelector')}
              className="flex items-center space-x-2 hover:bg-[var(--vibrant-purple)]/10 hover:text-[var(--vibrant-purple)] transition-all duration-300 rounded-full px-4"
            >
              <Globe className="h-4 w-4" />
              <span className="uppercase font-medium">{language}</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Section progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-muted">
        <div 
          className={`h-full transition-all duration-700 ease-out bg-gradient-to-r ${sectionColors[currentSection]}`}
          style={{ 
            width: `${((sections.indexOf(currentSection) + 1) / sections.length) * 100}%` 
          }}
        />
      </div>
    </header>
  );
}