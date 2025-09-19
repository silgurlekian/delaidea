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
  {
    id: 'design-system',
    title: {
      es: 'Design System: Reencuentro',
      en: 'Design System: Reencuentro'
    },
    description: {
      es: `Creación de un Design System completo que unifica la identidad visual, tokens de diseño y componentes reutilizables para acelerar el desarrollo y asegurar consistencia entre productos. Incluye: sistema de tokens (colores, tipografías, espaciados), librería de componentes en React + Tailwind, documentación en Storybook, pruebas visuales y flujo de diseño en Figma.`,
      en: `Creation of a complete Design System that unifies visual identity, design tokens and reusable components to speed up development and ensure consistency across products. Includes: token system (colors, typography, spacing), a component library in React + Tailwind, Storybook docs, visual tests and a Figma design flow.`
    },
    role: {
      es: 'Lead Product Designer / Frontend Engineer (colaborativo)',
      en: 'Lead Product Designer / Frontend Engineer (collaborative)'
    },
    duration: {
      es: '6 meses (iterativo)',
      en: '6 months (iterative)'
    },
    client: {
      es: 'Proyecto Interno — Reencuentro',
      en: 'Internal Project — Reencuentro'
    },
    year: 2025,
    category: 'ux-ui',
    technologies: [
      'Figma',
      'Tokens (JSON)',
      'Style Dictionary',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Storybook',
      'Chromatic',
      'Jest',
      'Testing Library',
      'ESLint',
      'Prettier',
      'Vite'
    ],
    links: {
      demo: 'https://designsystem.example.com', // placeholder
      github: 'https://github.com/your-org/design-system',
      behance: 'https://www.behance.net/your-profile' // opcional
    },
    challenges: [
      {
        es: 'Unificar la visual y componentes entre varios productos heredados sin romper integraciones existentes.',
        en: 'Unify visuals and components across multiple legacy products without breaking existing integrations.'
      },
      {
        es: 'Crear un sistema de tokens escalable que pueda exportarse a CSS variables, Tailwind config y tokens JS.',
        en: 'Create a scalable token system that can be exported to CSS variables, Tailwind config and JS tokens.'
      },
      {
        es: 'Documentar y versionar componentes (semver) para que el equipo de frontend los consuma con confianza.',
        en: 'Document and version components (semver) so frontend teams can consume them with confidence.'
      },
      {
        es: 'Asegurar accesibilidad (WCAG) y tests visuales en el pipeline CI/CD.',
        en: 'Ensure accessibility (WCAG) and visual tests in the CI/CD pipeline.'
      }
    ],
    outcomes: [
      {
        es: 'Set de tokens centralizados (colores, tipografías, espacios, sombras) exportables a múltiples formatos.',
        en: 'Centralized tokens set (colors, typography, spacing, shadows) exportable to multiple formats.'
      },
      {
        es: 'Librería de componentes React documentada en Storybook con controles, tests unitarios y visuales.',
        en: 'React component library documented in Storybook with controls, unit and visual tests.'
      },
      {
        es: 'Plantillas y ejemplos para integrar tokens en Tailwind y CSS variables, reduciendo tiempo de implementación.',
        en: 'Templates and examples to integrate tokens into Tailwind and CSS variables, reducing implementation time.'
      },
      {
        es: 'Guía de accesibilidad y checklist para QA que reduce regresiones en contrastes y navegabilidad a teclado.',
        en: 'Accessibility guide and QA checklist that reduces regressions in contrast and keyboard navigation.'
      },
      {
        es: 'Release cadenciado y changelog para que los equipos puedan actualizar componentes con semver y migrar cambios.',
        en: 'Cadenced release and changelog so teams can upgrade components with semver and migrate changes.'
      }
    ],
    additionalImages: [
      'https://images.unsplash.com/photo-1737918543118-9c9e074c60b5?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1555949963-aa79dcee9812?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1400&q=80'
    ]
  }
];
