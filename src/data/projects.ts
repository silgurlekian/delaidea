// src/data/projects.ts
export interface ProjectLinks {
  demo?: string;
  github?: string;
  behance?: string;
}

export interface ProjectTexts {
  es: string;
  en: string;
}

export interface Project {
  id: string;
  title: string | ProjectTexts;
  description: string | ProjectTexts;
  role?: string | ProjectTexts;
  duration?: string | ProjectTexts;
  client?: string | ProjectTexts;
  year?: number;
  category: 'ux-ui' | 'frontend' | 'fullstack';
  technologies: string[];
  links?: ProjectLinks;
  challenges?: ProjectTexts[]; // lista de retos
  outcomes?: ProjectTexts[];   // lista de resultados
  additionalImages?: string[]; // imágenes extra
}

// Ejemplo de datos
export const projects: Project[] = [
  {
    id: 'ecommerce-redesign',
    title: { es: 'Rediseño de E-commerce', en: 'E-commerce Redesign' },
    description: { es: 'Descripción del proyecto en español.', en: 'Project description in English.' },
    role: { es: 'Diseñador UX/UI', en: 'UX/UI Designer' },
    duration: { es: '3 meses', en: '3 months' },
    client: { es: 'Alta Tienda', en: 'Alta Store' },
    year: 2025,
    category: 'ux-ui',
    technologies: ['Figma', 'React', 'Tailwind CSS'],
    links: {
      demo: 'https://example.com/demo',
      github: 'https://github.com/example/repo',
      behance: 'https://behance.net/example'
    },
    challenges: [
      { es: 'Reto 1 en español', en: 'Challenge 1 in English' },
      { es: 'Reto 2 en español', en: 'Challenge 2 in English' }
    ],
    outcomes: [
      { es: 'Resultado 1 en español', en: 'Outcome 1 in English' },
      { es: 'Resultado 2 en español', en: 'Outcome 2 in English' }
    ],
    additionalImages: [
      'https://images.unsplash.com/photo-1721864428881-dbabb9ea0017?...',
      'https://images.unsplash.com/photo-1570894808314-677b57f25e45?...'
    ]
  },
  // Puedes agregar más proyectos aquí
];
