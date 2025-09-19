import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, value?: any) => string;
}

type TranslationKey = string;
type TranslationValue = string;
type Translations = Record<TranslationKey, TranslationValue>;

const translations: Record<Language, Translations> = {
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.projects': 'Proyectos',
    'nav.contact': 'Contacto',
    
    // Hero Section
    'hero.title': 'DISEÑO Y CÓDIGO. Experiencias digitales',
    'hero.subtitle': 'Frontend Developer especializado en crear interfaces que IMPACTAN. React, TypeScript y diseño UX/UI que conecta con las personas.',
    'hero.cta': 'VER PROYECTOS',
    
    // Projects Section
    'projects.title': 'Mis Proyectos',
    'projects.subtitle': 'Una selección de mis trabajos más recientes en UX/UI y desarrollo frontend',
    'projects.viewDetails': 'Ver detalles',
    'projects.close': 'Cerrar',
    'projects.technologies': 'Tecnologías',
    'projects.role': 'Mi rol',
    'projects.duration': 'Duración',
    'projects.challenge': 'Desafío',
    'projects.solution': 'Solución',
    'projects.results': 'Resultados',
    'projects.sectionSubtitle': 'MIS TRABAJOS',
    'projects.mainTitle.part1': 'PROYECTOS',
    'projects.mainTitle.part2': 'RECIENTES',
    'projects.description': 'Cada proyecto es una oportunidad de crear algo único. Aquí están mis trabajos más destacados.',
    'projects.viewProject': 'VER PROYECTO',
    'projects.loadMore': 'MÁS PROYECTOS',
    'projects.filter.all': 'TODOS',
    'projects.filter.uxui': 'UX/UI',
    'projects.filter.frontend': 'FRONTEND',
    'projects.filter.fullstack': 'FULLSTACK',
    'hero.badge': '',
    'hero.stats.projects': 'PROYECTOS',
    'hero.stats.years': 'AÑOS',
    'hero.techStack': 'TECH STACK',
    'hero.status': 'DISPONIBLE',
    'projects.filter.showing': 'Mostrando',
    'projects.filter.projectsIn': 'proyectos de',
    'projects.filter.clear': 'Limpiar filtro',
    'projects.empty.title': 'No se encontraron proyectos',
    'projects.empty.description': 'No hay proyectos disponibles para la categoría seleccionada.',
    'projects.empty.viewAll': 'Ver todos los proyectos',
    
    // Contact Section
    'contact.title': 'Contacto',
    'contact.subtitle': 'Colaboremos en tu próximo proyecto',
    'contact.email': 'Email',
    'contact.phone': 'Teléfono',
    'contact.location': 'Ubicación',
    'contact.social': 'Redes sociales',
    
    // Accessibility
    'aria.languageSelector': 'Selector de idioma',
    'aria.openProjectDetails': 'Abrir detalles del proyecto',
    'aria.closeModal': 'Cerrar modal',
    'aria.mainNavigation': 'Navegación principal',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'DESIGN & CODE. Digital experiences',
    'hero.subtitle': 'Frontend Developer specialized in creating interfaces that IMPACT. React, TypeScript and UX/UI design that connects with people.',
    'hero.cta': 'VIEW PROJECTS',
    
    // Projects Section
    'projects.title': 'My Projects',
    'projects.subtitle': 'A selection of my recent work in UX/UI design and frontend development',
    'projects.viewDetails': 'View details',
    'projects.close': 'Close',
    'projects.technologies': 'Technologies',
    'projects.role': 'My role',
    'projects.duration': 'Duration',
    'projects.challenge': 'Challenge',
    'projects.solution': 'Solution',
    'projects.results': 'Results',
    'projects.sectionSubtitle': 'MY WORK',
    'projects.mainTitle.part1': 'RECENT',
    'projects.mainTitle.part2': 'PROJECTS',
    'projects.description': 'Every project is an opportunity to create something unique. Here are my most outstanding works.',
    'projects.viewProject': 'VIEW PROJECT',
    'projects.loadMore': 'MORE PROJECTS',
    'projects.filter.all': 'ALL',
    'projects.filter.uxui': 'UX/UI',
    'projects.filter.frontend': 'FRONTEND',
    'projects.filter.fullstack': 'FULLSTACK',
    'hero.badge': '',
    'hero.stats.projects': 'PROJECTS',
    'hero.stats.years': 'YEARS',
    'hero.techStack': 'TECH STACK',
    'hero.status': 'AVAILABLE',
    'projects.filter.showing': 'Showing',
    'projects.filter.projectsIn': 'projects in',
    'projects.filter.clear': 'Clear filter',
    'projects.empty.title': 'No projects found',
    'projects.empty.description': 'There are no projects available for the selected category.',
    'projects.empty.viewAll': 'View all projects',
    
    // Contact Section
    'contact.title': 'Contact',
    'contact.subtitle': "Let's collaborate on your next project",
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.location': 'Location',
    'contact.social': 'Social media',
    
    // Accessibility
    'aria.languageSelector': 'Language selector',
    'aria.openProjectDetails': 'Open project details',
    'aria.closeModal': 'Close modal',
    'aria.mainNavigation': 'Main navigation',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string, value?: any): string => {
    // If value is provided and has language properties, use it
    if (value && typeof value === 'object' && value[language]) {
      return value[language];
    }
    
    // If value is a simple string, return it
    if (typeof value === 'string') {
      return value;
    }
    
    // Otherwise, use the translation key from the translations object
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}