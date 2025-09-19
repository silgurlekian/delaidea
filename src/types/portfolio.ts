export interface Project {
  id: string;
  title: {
    en: string;
    es: string;
  };
  description: {
    en: string;
    es: string;
  };
  category: 'ux-ui' | 'frontend' | 'fullstack';
  technologies: string[];
  image: string;
  additionalImages?: string[];
  year: number;
  client?: {
    en: string;
    es: string;
  };
  duration?: {
    en: string;
    es: string;
  };
  role?: {
    en: string;
    es: string;
  };
  challenges?: {
    en: string[];
    es: string[];
  };
  outcomes?: {
    en: string[];
    es: string[];
  };
  links?: {
    demo?: string;
    github?: string;
    behance?: string;
  };
  liveUrl?: string;
  caseStudyUrl?: string;
}

export type Language = 'es' | 'en';

export interface NavigationItem {
  label: {
    en: string;
    es: string;
  };
  href: string;
}

export interface ContactInfo {
  email: string;
  linkedin?: string;
  github?: string;
  behance?: string;
  dribbble?: string;
}