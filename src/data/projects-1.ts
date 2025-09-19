export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'ux-ui' | 'frontend' | 'fullstack';
  technologies: string[];
  role: {
    es: string;
    en: string;
  };
  duration: {
    es: string;
    en: string;
  };
  challenge: {
    es: string;
    en: string;
  };
  solution: {
    es: string;
    en: string;
  };
  results: {
    es: string;
    en: string;
  };
  images?: {
    url: string;
    caption: {
      es: string;
      en: string;
    };
    alt: string;
  }[];
  links?: {
    demo?: string;
    github?: string;
    behance?: string;
  };
}

export const projects: Project[] = [
  {
    id: '7',
    title: 'Fintech Design System - "Pulse"',
    description: 'Complete design system creation from research to production for MoneyFlow fintech - 240+ design tokens, 12-color semantic palette, 150+ components, automated testing pipeline, and comprehensive documentation serving 50K+ daily users',
    image: 'design system components',
    category: 'ux-ui',
    technologies: ['Figma', 'Storybook', 'Tokens Studio', 'React', 'TypeScript', 'Styled Components', 'Chromatic', 'Figma API', 'GitHub Actions'],
    role: {
      es: 'Lead Design Systems Designer & Frontend Architect',
      en: 'Lead Design Systems Designer & Frontend Architect'
    },
    duration: {
      es: '10 meses (Enero - Octubre 2024)',
      en: '10 months (January - October 2024)'
    },
    challenge: {
      es: 'MoneyFlow operaba 4 productos críticos (web banking, mobile app, admin dashboard, marketing sites) con 15 desarrolladores y 3 diseñadores trabajando sin estándares unificados. Problemas específicos: 47 variaciones de botones, 23 tonos de azul diferentes, inconsistencias de spacing (12px vs 16px vs 20px), 156 horas mensuales perdidas en decisiones de diseño repetitivas, 68 bugs de UI reportados mensualmente, imposibilidad de mantener brand consistency a escala, y time-to-market de 6 semanas para features simples. La ausencia de sistema comprometía la expansión internacional planificada.',
      en: 'MoneyFlow operated 4 critical products (web banking, mobile app, admin dashboard, marketing sites) with 15 developers and 3 designers working without unified standards. Specific problems: 47 button variations, 23 different blue shades, spacing inconsistencies (12px vs 16px vs 20px), 156 monthly hours lost on repetitive design decisions, 68 monthly UI bugs reported, inability to maintain brand consistency at scale, and 6-week time-to-market for simple features. The absence of a system compromised the planned international expansion.'
    },
    solution: {
      es: 'Diseñé e implementé el Design System "Pulse" siguiendo metodología Atomic Design + Token-Based Architecture. **FASE 1 - Research & Audit (6 semanas)**: Auditoría visual completa identificando 312 componentes únicos, entrevistas con 25 usuarios finales, workshops con 8 stakeholders internos, competitive analysis de 12 fintech (Stripe, Revolut, N26), y definición de principios de diseño. **FASE 2 - Foundations (4 semanas)**: Creación de paleta de colores de 12 primitivos + 45 semánticos con ratios de contraste WCAG AA, sistema tipográfico de 8 escalas (12px-48px), grid system de 8px, 16 valores de spacing, 6 niveles de elevation, y 5 border-radius scales. **FASE 3 - Tokens & Architecture (3 semanas)**: Implementación de 240+ design tokens en Tokens Studio con nomenclatura semántica (color.background.primary, spacing.component.padding), configuración de multi-brand theming, sync automático Figma-to-Code via GitHub Actions. **FASE 4 - Component Library (8 semanas)**: Desarrollo de 150+ componentes categorizados: Foundations (Colors, Typography, Spacing), Atoms (30 componentes: Button, Input, Icon), Molecules (45 componentes: Search Bar, Navigation Item, Card Header), Organisms (35 componentes: Data Table, Navigation, Forms), Templates (15 layouts), cada uno con variantes, estados, y responsive behavior. **FASE 5 - Implementation (6 semanas)**: Migración de codebase existente, implementación de React components con TypeScript interfaces, setup de Storybook con 100% coverage, integración de Chromatic para visual regression testing, CI/CD pipeline con automated testing. **FASE 6 - Documentation & Adoption (4 semanas)**: Creación de guidelines completas, onboarding para equipos, training sessions, contribution processes, y governance framework.',
      en: 'I designed and implemented the "Pulse" Design System following Atomic Design + Token-Based Architecture methodology. **PHASE 1 - Research & Audit (6 weeks)**: Complete visual audit identifying 312 unique components, interviews with 25 end users, workshops with 8 internal stakeholders, competitive analysis of 12 fintechs (Stripe, Revolut, N26), and design principles definition. **PHASE 2 - Foundations (4 weeks)**: Creation of 12 primitive + 45 semantic color palette with WCAG AA contrast ratios, 8-scale typography system (12px-48px), 8px grid system, 16 spacing values, 6 elevation levels, and 5 border-radius scales. **PHASE 3 - Tokens & Architecture (3 weeks)**: Implementation of 240+ design tokens in Tokens Studio with semantic naming (color.background.primary, spacing.component.padding), multi-brand theming configuration, automatic Figma-to-Code sync via GitHub Actions. **PHASE 4 - Component Library (8 weeks)**: Development of 150+ categorized components: Foundations (Colors, Typography, Spacing), Atoms (30 components: Button, Input, Icon), Molecules (45 components: Search Bar, Navigation Item, Card Header), Organisms (35 components: Data Table, Navigation, Forms), Templates (15 layouts), each with variants, states, and responsive behavior. **PHASE 5 - Implementation (6 weeks)**: Existing codebase migration, React components implementation with TypeScript interfaces, Storybook setup with 100% coverage, Chromatic integration for visual regression testing, CI/CD pipeline with automated testing. **PHASE 6 - Documentation & Adoption (4 weeks)**: Complete guidelines creation, team onboarding, training sessions, contribution processes, and governance framework.'
    },
    results: {
      es: '**IMPACTO CUANTIFICABLE POST-IMPLEMENTACIÓN**: Desarrollo acelerado: 78% reducción en tiempo de feature development (de 6 semanas a 1.3 semanas promedio), 156 → 24 horas mensuales en decisiones de diseño. Calidad mejorada: 89% reducción en bugs de UI (68 → 7 reportes mensuales), 98.7% consistencia visual medida con automated tools, 100% compliance WCAG AA. Adopción y escalabilidad: 100% adopción por 5 equipos (18 personas), 0 training time para nuevos desarrolladores, soporte exitoso para lanzamiento de 3 productos internacionales. ROI comprobado: $147K USD ahorrados anualmente en tiempo de desarrollo, $89K en reducción de QA costs, $56K en faster time-to-market. Métricas técnicas: 99.2% uptime en Storybook, 2.3s average build time, 0 breaking changes en 8 meses de producción. El sistema escala actualmente 8 productos, 25 desarrolladores, y 7 mercados internacionales sin modificaciones arquitecturales.',
      en: '**QUANTIFIABLE POST-IMPLEMENTATION IMPACT**: Accelerated development: 78% reduction in feature development time (from 6 weeks to 1.3 weeks average), 156 → 24 monthly hours on design decisions. Improved quality: 89% reduction in UI bugs (68 → 7 monthly reports), 98.7% visual consistency measured with automated tools, 100% WCAG AA compliance. Adoption and scalability: 100% adoption by 5 teams (18 people), 0 training time for new developers, successful support for 3 international product launches. Proven ROI: $147K USD saved annually in development time, $89K in QA cost reduction, $56K in faster time-to-market. Technical metrics: 99.2% uptime in Storybook, 2.3s average build time, 0 breaking changes in 8 months of production. The system currently scales 8 products, 25 developers, and 7 international markets without architectural modifications.'
    },
    images: [
      {
        url: 'https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMGtpdCUyMGludGVyZmFjZXxlbnwxfHx8fDE3NTgwMzE5MTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        caption: {
          es: 'Biblioteca completa "Pulse" con arquitectura Atomic Design: 🎨 Foundations (color palette de 12 primitivos + 45 semánticos, typography scale de 8 niveles, spacing grid 8px), ⚛️ Atoms (30 componentes básicos), 🧬 Molecules (45 componentes compuestos), 🔬 Organisms (35 componentes complejos), 📄 Templates (15 layouts). Cada componente incluye 8+ variantes, 5+ estados (default, hover, active, disabled, loading), documentación inline, y código React auto-generado.',
          en: 'Complete "Pulse" library with Atomic Design architecture: 🎨 Foundations (12 primitive + 45 semantic color palette, 8-level typography scale, 8px spacing grid), ⚛️ Atoms (30 basic components), 🧬 Molecules (45 compound components), 🔬 Organisms (35 complex components), 📄 Templates (15 layouts). Each component includes 8+ variants, 5+ states (default, hover, active, disabled, loading), inline documentation, and auto-generated React code.'
        },
        alt: 'Complete Figma design system library with Atomic Design structure'
      },
      {
        url: 'https://images.unsplash.com/photo-1642261366979-704a073bef4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjB0b2tlbnMlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU4MTEzNTY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        caption: {
          es: 'Sistema de 240+ design tokens implementado con Tokens Studio y nomenclatura semántica: 🎨 COLORES - Primitivos: Blue-50 a Blue-900, Gray-50 a Gray-900, semánticos: primary.default/hover/pressed, success.default/light/dark, error.default/light/dark, neutral.background/foreground/border. 📏 SPACING - 16 valores: 4px a 128px en múltiplos de 4. ✍️ TYPOGRAPHY - 8 escalas: text-xs (12px) a text-5xl (48px) con line-heights optimizados. 🌗 THEMES - Light/Dark mode con 45 semantic tokens automáticos. 📱 RESPONSIVE - 5 breakpoints con fluid scaling.',
          en: 'System of 240+ design tokens implemented with Tokens Studio and semantic naming: 🎨 COLORS - Primitives: Blue-50 to Blue-900, Gray-50 to Gray-900, semantic: primary.default/hover/pressed, success.default/light/dark, error.default/light/dark, neutral.background/foreground/border. 📏 SPACING - 16 values: 4px to 128px in multiples of 4. ✍️ TYPOGRAPHY - 8 scales: text-xs (12px) to text-5xl (48px) with optimized line-heights. 🌗 THEMES - Light/Dark mode with 45 automatic semantic tokens. 📱 RESPONSIVE - 5 breakpoints with fluid scaling.'
        },
        alt: 'Comprehensive design tokens system with semantic naming structure'
      },
      {
        url: 'https://images.unsplash.com/photo-1693045181254-08462917f681?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWdtYSUyMGRlc2lnbiUyMGRvY3VtZW50YXRpb258ZW58MXx8fHwxNzU4MTEzNTY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        caption: {
          es: 'Documentación técnica exhaustiva estructurada en 6 secciones: 📋 FOUNDATIONS - Principios de diseño, brand guidelines, accessibility standards WCAG AA. 🧩 COMPONENTS - Anatomy, usage guidelines, do/don\'t examples, responsive behavior. 💻 DEVELOPMENT - TypeScript interfaces, React props, implementation examples, performance guidelines. 🔄 WORKFLOW - Figma-to-Code pipeline, GitHub Actions integration, automated testing. 👥 GOVERNANCE - Contribution process, review guidelines, breaking changes protocol. 🎓 ONBOARDING - Training materials, certification path, team enablement.',
          en: 'Exhaustive technical documentation structured in 6 sections: 📋 FOUNDATIONS - Design principles, brand guidelines, WCAG AA accessibility standards. 🧩 COMPONENTS - Anatomy, usage guidelines, do/don\'t examples, responsive behavior. 💻 DEVELOPMENT - TypeScript interfaces, React props, implementation examples, performance guidelines. 🔄 WORKFLOW - Figma-to-Code pipeline, GitHub Actions integration, automated testing. 👥 GOVERNANCE - Contribution process, review guidelines, breaking changes protocol. 🎓 ONBOARDING - Training materials, certification path, team enablement.'
        },
        alt: 'Comprehensive design system documentation and governance structure'
      },
      {
        url: 'https://images.unsplash.com/photo-1743565915150-e57cb620fcfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wb25lbnQlMjBsaWJyYXJ5JTIwc3Rvcnlib29rfGVufDF8fHx8MTc1ODExMzU3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        caption: {
          es: 'Storybook en producción con infraestructura enterprise: 🚀 FEATURES - 100% component coverage, playground interactivo, props documentation automática, accessibility tests integrados. 🔍 TESTING - Chromatic integration para visual regression, Percy snapshots, automated cross-browser testing en 5 navegadores. 📊 METRICS - Performance monitoring, bundle size analysis, usage analytics por componente. 🔄 CI/CD - GitHub Actions deployment, automated version bumping, NPM package publishing. 👥 COLLABORATION - Design/Dev handoff tools, component status tracking, feedback system integrado.',
          en: 'Production Storybook with enterprise infrastructure: 🚀 FEATURES - 100% component coverage, interactive playground, automatic props documentation, integrated accessibility tests. 🔍 TESTING - Chromatic integration for visual regression, Percy snapshots, automated cross-browser testing on 5 browsers. 📊 METRICS - Performance monitoring, bundle size analysis, component usage analytics. 🔄 CI/CD - GitHub Actions deployment, automated version bumping, NPM package publishing. 👥 COLLABORATION - Design/Dev handoff tools, component status tracking, integrated feedback system.'
        },
        alt: 'Production-ready Storybook with comprehensive testing and collaboration features'
      }
    ],
    links: {
      demo: '#',
      behance: '#',
      github: '#'
    }
  },
  {
    id: '1',
    title: 'E-commerce Platform Redesign',
    description: 'Complete UX/UI redesign of a fashion e-commerce platform with focus on mobile experience',
    image: 'ecommerce fashion mobile',
    category: 'ux-ui',
    technologies: ['Figma', 'Adobe XD', 'Principle', 'Zeroheight'],
    role: {
      es: 'Diseñador UX/UI Principal',
      en: 'Lead UX/UI Designer'
    },
    duration: {
      es: '4 meses',
      en: '4 months'
    },
    challenge: {
      es: 'La plataforma tenía una tasa de conversión baja del 1.2% y alta tasa de abandono en móviles del 78%. Los usuarios reportaban dificultades para encontrar productos y completar compras.',
      en: 'The platform had a low conversion rate of 1.2% and high mobile abandonment rate of 78%. Users reported difficulties finding products and completing purchases.'
    },
    solution: {
      es: 'Desarrollé un nuevo sistema de navegación intuitivo, implementé filtros avanzados con IA, rediseñé el proceso de checkout a 2 pasos y creé un sistema de recomendaciones personalizado.',
      en: 'I developed a new intuitive navigation system, implemented AI-powered advanced filters, redesigned the checkout process to 2 steps, and created a personalized recommendation system.'
    },
    results: {
      es: 'Aumento del 185% en conversión móvil, reducción del 65% en tasa de abandono y incremento del 40% en valor promedio del pedido.',
      en: '185% increase in mobile conversion, 65% reduction in abandonment rate, and 40% increase in average order value.'
    },
    links: {
      behance: '#',
      demo: '#'
    }
  },
  {
    id: '2',
    title: 'React Dashboard App',
    description: 'Advanced analytics dashboard built with React, TypeScript and real-time data visualization',
    image: 'analytics dashboard dark',
    category: 'frontend',
    technologies: ['React', 'TypeScript', 'D3.js', 'Tailwind CSS', 'Socket.io'],
    role: {
      es: 'Desarrollador Frontend Senior',
      en: 'Senior Frontend Developer'
    },
    duration: {
      es: '6 meses',
      en: '6 months'
    },
    challenge: {
      es: 'Crear un dashboard complejo que manejara grandes volúmenes de datos en tiempo real con múltiples visualizaciones interactivas sin comprometer el rendimiento.',
      en: 'Create a complex dashboard handling large volumes of real-time data with multiple interactive visualizations without compromising performance.'
    },
    solution: {
      es: 'Implementé técnicas de virtualización, optimización de renders con React.memo, lazy loading de componentes y un sistema de cache inteligente para datos en tiempo real.',
      en: 'I implemented virtualization techniques, render optimization with React.memo, component lazy loading, and an intelligent cache system for real-time data.'
    },
    results: {
      es: 'Dashboard capaz de manejar 10K+ puntos de datos simultáneos, tiempo de carga inicial reducido en 70% y experiencia fluida incluso con datasets masivos.',
      en: 'Dashboard capable of handling 10K+ simultaneous data points, 70% reduction in initial load time, and smooth experience even with massive datasets.'
    },
    images: [
      {
        url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBhbmFseXRpY3MlMjBtb2NrdXB8ZW58MXx8fHwxNzU4MDAyNDI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        caption: {
          es: 'Dashboard principal con métricas en tiempo real',
          en: 'Main dashboard with real-time metrics'
        },
        alt: 'Analytics dashboard main view'
      },
      {
        url: 'https://images.unsplash.com/photo-1610913721979-b20ede600e63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmFseXRpY3MlMjBkYXNoYm9hcmQlMjBkYXJrfGVufDF8fHx8MTc1ODA1ODgyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        caption: {
          es: 'Vista detallada de componentes de datos interactivos',
          en: 'Detailed view of interactive data components'
        },
        alt: 'Interactive dashboard components'
      }
    ],
    links: {
      demo: '#',
      github: '#'
    }
  },
  {
    id: '3',
    title: 'Banking App UX Research',
    description: 'Complete user research and interface design for a digital banking application',
    image: 'banking mobile app',
    category: 'ux-ui',
    technologies: ['Figma', 'Maze', 'Hotjar', 'UserTesting', 'Miro'],
    role: {
      es: 'Investigador UX & Diseñador de Producto',
      en: 'UX Researcher & Product Designer'
    },
    duration: {
      es: '8 meses',
      en: '8 months'
    },
    challenge: {
      es: 'Diseñar una aplicación bancaria que fuera segura, accesible y fácil de usar para personas de todas las edades, especialmente adultos mayores con poca experiencia digital.',
      en: 'Design a banking app that was secure, accessible, and easy to use for people of all ages, especially older adults with limited digital experience.'
    },
    solution: {
      es: 'Realicé investigación etnográfica, pruebas de usabilidad con 50+ usuarios, implementé un sistema de diseño accesible y desarrollé flujos simplificados con retroalimentación clara.',
      en: 'I conducted ethnographic research, usability testing with 50+ users, implemented an accessible design system, and developed simplified flows with clear feedback.'
    },
    results: {
      es: 'Incremento del 92% en tareas completadas exitosamente, reducción del 80% en tiempo de onboarding y calificación de satisfacción de 4.8/5.',
      en: '92% increase in successfully completed tasks, 80% reduction in onboarding time, and 4.8/5 satisfaction rating.'
    },
    links: {
      behance: '#'
    }
  },
  {
    id: '4',
    title: 'SaaS Platform Frontend',
    description: 'Modern SaaS platform frontend with complex workflows and team collaboration features',
    image: 'saas platform interface',
    category: 'fullstack',
    technologies: ['Next.js', 'React', 'PostgreSQL', 'Prisma', 'tRPC', 'Tailwind CSS'],
    role: {
      es: 'Desarrollador Full Stack',
      en: 'Full Stack Developer'
    },
    duration: {
      es: '12 meses',
      en: '12 months'
    },
    challenge: {
      es: 'Construir una plataforma SaaS escalable con colaboración en tiempo real, gestión de permisos compleja y múltiples integraciones de terceros.',
      en: 'Build a scalable SaaS platform with real-time collaboration, complex permission management, and multiple third-party integrations.'
    },
    solution: {
      es: 'Desarrollé una arquitectura modular con microservicios, implementé WebSockets para colaboración en tiempo real y creé un sistema robusto de autenticación y autorización.',
      en: 'I developed a modular architecture with microservices, implemented WebSockets for real-time collaboration, and created a robust authentication and authorization system.'
    },
    results: {
      es: 'Plataforma soporta 1000+ usuarios concurrentes, tiempo de respuesta promedio bajo 200ms y 99.9% de uptime durante el primer año.',
      en: 'Platform supports 1000+ concurrent users, average response time under 200ms, and 99.9% uptime during the first year.'
    },
    links: {
      demo: '#',
      github: '#'
    }
  },
  {
    id: '5',
    title: 'Design System Creation',
    description: 'Comprehensive design system and component library for a fintech startup',
    image: 'design system components',
    category: 'ux-ui',
    technologies: ['Figma', 'Storybook', 'Tokens Studio', 'React', 'Styled Components'],
    role: {
      es: 'Diseñador de Sistemas & Desarrollador Frontend',
      en: 'Systems Designer & Frontend Developer'
    },
    duration: {
      es: '5 meses',
      en: '5 months'
    },
    challenge: {
      es: 'Crear un sistema de diseño cohesivo que unificara múltiples productos y pudiera escalar con el crecimiento acelerado de la startup.',
      en: 'Create a cohesive design system that would unify multiple products and scale with the startup\'s rapid growth.'
    },
    solution: {
      es: 'Desarrollé un sistema basado en tokens, creé más de 150 componentes reutilizables, implementé documentación interactiva y establecí procesos de contribución.',
      en: 'I developed a token-based system, created 150+ reusable components, implemented interactive documentation, and established contribution processes.'
    },
    results: {
      es: 'Reducción del 60% en tiempo de desarrollo de nuevas features, consistencia visual del 95% entre productos y adopción del 100% por equipos de desarrollo.',
      en: '60% reduction in development time for new features, 95% visual consistency across products, and 100% adoption by development teams.'
    },
    links: {
      demo: '#',
      behance: '#'
    }
  },
  {
    id: '6',
    title: 'Progressive Web App',
    description: 'High-performance PWA for a travel booking platform with offline capabilities',
    image: 'travel booking app',
    category: 'frontend',
    technologies: ['Vue.js', 'PWA', 'Service Workers', 'IndexedDB', 'WebGL'],
    role: {
      es: 'Desarrollador Frontend Especialista',
      en: 'Frontend Specialist Developer'
    },
    duration: {
      es: '7 meses',
      en: '7 months'
    },
    challenge: {
      es: 'Desarrollar una PWA que funcionara perfectamente offline, tuviera rendimiento nativo y soportara funcionalidades complejas como mapas 3D y realidad aumentada.',
      en: 'Develop a PWA that worked perfectly offline, had native performance, and supported complex features like 3D maps and augmented reality.'
    },
    solution: {
      es: 'Implementé estrategias avanzadas de caching, optimicé assets con técnicas de compresión, desarrollé un sistema de sincronización offline-online y integré WebGL para renders 3D.',
      en: 'I implemented advanced caching strategies, optimized assets with compression techniques, developed an offline-online sync system, and integrated WebGL for 3D rendering.'
    },
    results: {
      es: 'PWA con puntaje de 100/100 en Lighthouse, funcionalidad offline completa, reducción del 45% en tiempo de carga y experiencia indistinguible de app nativa.',
      en: 'PWA with 100/100 Lighthouse score, complete offline functionality, 45% reduction in load time, and native app-indistinguishable experience.'
    },
    links: {
      demo: '#',
      github: '#'
    }
  }
];