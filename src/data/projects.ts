// projects.ts
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
  challenges?: ProjectTexts[];
  outcomes?: ProjectTexts[];
  additionalImages?: string[];
}

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
    id: 'design-system-reencuentro',
    title: {
      es: 'Design System: Reencuentro',
      en: 'Design System: Reencuentro'
    },
    description: {
      es: `Creación de un Design System integral desde cero para unificar la identidad visual y la experiencia de usuario en todos los productos de la empresa. El proyecto incluyó la definición de la identidad de marca, la creación de una librería de componentes en React, la documentación interactiva con Storybook y la automatización del flujo de diseño a desarrollo a través de tokens de diseño.`,
      en: `Creation of a comprehensive Design System from scratch to unify the visual identity and user experience across all company products. The project included defining the brand identity, building a React component library, interactive documentation with Storybook, and automating the design-to-development workflow through design tokens.`
    },
    role: {
      es: 'Lead Product Designer / Frontend Engineer',
      en: 'Lead Product Designer / Frontend Engineer'
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
      'Vite',
      'WCAG'
    ],
    links: {
      demo: 'https://designsystem.reencuentro.com', 
      github: 'https://github.com/reencuentro-org/design-system',
    },
    challenges: [
      {
        es: 'Migrar productos heredados a la nueva librería de componentes sin causar interrupciones ni regresiones visuales.',
        en: 'Migrating legacy products to the new component library without causing visual regressions or interruptions.'
      },
      {
        es: 'Establecer un sistema de versionado semántico (SemVer) claro y un flujo de trabajo de "release" para comunicar los cambios a los equipos de desarrollo.',
        en: 'Establishing a clear semantic versioning (SemVer) system and release workflow to communicate changes to development teams.'
      },
      {
        es: 'Crear un sistema de tokens de diseño que sea la fuente de la verdad para diseñadores (Figma) y desarrolladores (código).',
        en: 'Creating a design token system that serves as the single source of truth for both designers (Figma) and developers (code).'
      },
      {
        es: 'Capacitar a los equipos sobre cómo usar el Design System y evangelizar sobre la importancia de la consistencia y la accesibilidad.',
        en: 'Training teams on how to use the Design System and evangelizing the importance of consistency and accessibility.'
      }
    ],
    outcomes: [
      {
        es: 'Se centralizó y documentó la paleta de colores, tipografías, espaciado y sombras, permitiendo una consistencia del 100% en todos los productos.',
        en: 'The color palette, typography, spacing, and shadows were centralized and documented, enabling 100% consistency across all products.'
      },
      {
        es: 'Se construyó una librería de más de 50 componentes React, lo que redujo el tiempo de desarrollo de nuevas características en un 35%.',
        en: 'A library of over 50 React components was built, which reduced the development time for new features by 35%.'
      },
      {
        es: 'La documentación interactiva en Storybook se convirtió en el principal recurso para la colaboración entre diseño y desarrollo.',
        en: 'The interactive documentation in Storybook became the primary resource for collaboration between design and development.'
      },
      {
        es: 'Se implementaron pruebas de accesibilidad y visuales en el pipeline CI/CD, asegurando el cumplimiento de las normas WCAG y previniendo regresiones.',
        en: 'Accessibility and visual tests were implemented in the CI/CD pipeline, ensuring compliance with WCAG standards and preventing regressions.'
      }
    ],
    additionalImages: [
      'https://images.unsplash.com/photo-1737918543118-9c9e074c60b5?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1555949963-aa79dcee9812?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1400&q=80'
    ]
  }
];