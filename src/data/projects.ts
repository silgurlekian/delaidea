import { Project } from '../types/portfolio';

export const projects: Project[] = [
  {
    id: 'ecommerce-redesign',
    title: {
      es: 'Rediseño de E-commerce',
      en: 'E-commerce Redesign'
    },
    description: {
      es: 'Rediseño completo de una plataforma de e-commerce para mejorar la experiencia de usuario y aumentar las conversiones.',
      en: 'Complete redesign of an e-commerce platform to improve user experience and increase conversions.'
    },
    category: 'ux-ui',
    technologies: ['Figma', 'Adobe XD', 'Principle', 'InVision'],
    image: 'modern workspace design',
    additionalImages: [
      'https://images.unsplash.com/photo-1721864428881-dbabb9ea0017?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBtb2JpbGUlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzU4MjQ3Mjk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1570894808314-677b57f25e45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBzY3JlZW5zfGVufDF8fHx8MTc1ODI0NzI5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    year: 2024,
    client: {
      es: 'TechStore',
      en: 'TechStore'
    },
    duration: {
      es: '3 meses',
      en: '3 months'
    },
    role: {
      es: 'UX/UI Designer Principal',
      en: 'Lead UX/UI Designer'
    },
    challenges: {
      es: [
        'Mejorar la navegación y búsqueda de productos',
        'Optimizar el proceso de checkout',
        'Crear un sistema de diseño escalable'
      ],
      en: [
        'Improve product navigation and search',
        'Optimize checkout process',
        'Create a scalable design system'
      ]
    },
    outcomes: {
      es: [
        '40% aumento en conversiones',
        '25% reducción en abandono de carrito',
        '60% mejora en satisfacción del usuario'
      ],
      en: [
        '40% increase in conversions',
        '25% reduction in cart abandonment',
        '60% improvement in user satisfaction'
      ]
    },
    links: {
      demo: 'https://ecommerce-demo.example.com',
      behance: 'https://behance.net/gallery/ecommerce-redesign'
    }
  },
  {
    id: 'dashboard-analytics',
    title: {
      es: 'Dashboard de Analytics',
      en: 'Analytics Dashboard'
    },
    description: {
      es: 'Desarrollo de un dashboard interactivo para visualización de datos y métricas empresariales en tiempo real.',
      en: 'Development of an interactive dashboard for real-time business data and metrics visualization.'
    },
    category: 'frontend',
    technologies: ['React', 'TypeScript', 'D3.js', 'Tailwind CSS'],
    image: 'data visualization dashboard',
    additionalImages: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmFseXRpY3MlMjBjaGFydHMlMjBkYXRhJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3NTgyMTU5ODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    year: 2024,
    client: {
      es: 'DataCorp',
      en: 'DataCorp'
    },
    duration: {
      es: '4 meses',
      en: '4 months'
    },
    role: {
      es: 'Frontend Developer',
      en: 'Frontend Developer'
    },
    challenges: {
      es: [
        'Manejar grandes volúmenes de datos',
        'Crear visualizaciones interactivas complejas',
        'Optimizar rendimiento para tiempo real'
      ],
      en: [
        'Handle large data volumes',
        'Create complex interactive visualizations',
        'Optimize performance for real-time updates'
      ]
    },
    outcomes: {
      es: [
        'Procesamiento de 1M+ datos por segundo',
        '50% mejora en tiempo de carga',
        '95% de satisfacción del cliente'
      ],
      en: [
        'Processing 1M+ data points per second',
        '50% improvement in loading time',
        '95% client satisfaction'
      ]
    },
    links: {
      demo: 'https://analytics-dashboard.example.com',
      github: 'https://github.com/username/analytics-dashboard'
    }
  },
  {
    id: 'mobile-banking-app',
    title: {
      es: 'App de Banca Móvil',
      en: 'Mobile Banking App'
    },
    description: {
      es: 'Diseño y desarrollo de una aplicación móvil para servicios bancarios con enfoque en seguridad y usabilidad.',
      en: 'Design and development of a mobile banking application focused on security and usability.'
    },
    category: 'ux-ui',
    technologies: ['Figma', 'React Native', 'TypeScript', 'Biometric Auth'],
    image: 'mobile banking interface',
    year: 2023,
    client: {
      es: 'BankSecure',
      en: 'BankSecure'
    },
    duration: {
      es: '6 meses',
      en: '6 months'
    },
    role: {
      es: 'UX/UI Designer & Frontend Developer',
      en: 'UX/UI Designer & Frontend Developer'
    },
    challenges: {
      es: [
        'Implementar autenticación biométrica',
        'Cumplir regulaciones bancarias',
        'Diseñar para múltiples dispositivos'
      ],
      en: [
        'Implement biometric authentication',
        'Comply with banking regulations',
        'Design for multiple devices'
      ]
    },
    outcomes: {
      es: [
        'Certificación de seguridad bancaria',
        '80% adopción en primer mes',
        '4.8/5 rating en app stores'
      ],
      en: [
        'Banking security certification',
        '80% adoption in first month',
        '4.8/5 rating in app stores'
      ]
    },
    links: {
      demo: 'https://banking-app-demo.example.com',
      behance: 'https://behance.net/gallery/mobile-banking'
    }
  },
  {
    id: 'design-system',
    title: {
      es: 'Sistema de Diseño Empresarial',
      en: 'Enterprise Design System'
    },
    description: {
      es: 'Creación de un sistema de diseño completo para una empresa tecnológica multinacional.',
      en: 'Creation of a comprehensive design system for a multinational technology company.'
    },
    category: 'ux-ui',
    technologies: ['Figma', 'Storybook', 'React', 'SCSS'],
    image: 'design system components',
    year: 2023,
    client: {
      es: 'GlobalTech',
      en: 'GlobalTech'
    },
    duration: {
      es: '8 meses',
      en: '8 months'
    },
    role: {
      es: 'Design System Lead',
      en: 'Design System Lead'
    },
    challenges: {
      es: [
        'Unificar múltiples productos',
        'Crear documentación completa',
        'Implementar tokens de diseño'
      ],
      en: [
        'Unify multiple products',
        'Create comprehensive documentation',
        'Implement design tokens'
      ]
    },
    outcomes: {
      es: [
        '70% reducción en tiempo de desarrollo',
        '15 productos adoptaron el sistema',
        '90% consistencia entre productos'
      ],
      en: [
        '70% reduction in development time',
        '15 products adopted the system',
        '90% consistency across products'
      ]
    },
    links: {
      demo: 'https://design-system.example.com',
      github: 'https://github.com/username/design-system'
    }
  },
  {
    id: 'saas-platform',
    title: {
      es: 'Plataforma SaaS',
      en: 'SaaS Platform'
    },
    description: {
      es: 'Desarrollo frontend de una plataforma SaaS para gestión de proyectos con interfaz moderna y responsive.',
      en: 'Frontend development of a SaaS platform for project management with modern and responsive interface.'
    },
    category: 'frontend',
    technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
    image: 'project management interface',
    year: 2023,
    client: {
      es: 'ProjectPro',
      en: 'ProjectPro'
    },
    duration: {
      es: '5 meses',
      en: '5 months'
    },
    role: {
      es: 'Senior Frontend Developer',
      en: 'Senior Frontend Developer'
    },
    challenges: {
      es: [
        'Implementar drag & drop complejo',
        'Optimizar para equipos grandes',
        'Crear animaciones fluidas'
      ],
      en: [
        'Implement complex drag & drop',
        'Optimize for large teams',
        'Create smooth animations'
      ]
    },
    outcomes: {
      es: [
        '500+ equipos usando la plataforma',
        '99.9% uptime',
        'Finalista en premios SaaS'
      ],
      en: [
        '500+ teams using the platform',
        '99.9% uptime',
        'Finalist in SaaS awards'
      ]
    },
    links: {
      demo: 'https://saas-platform.example.com',
      github: 'https://github.com/username/saas-platform'
    }
  },
  {
    id: 'travel-booking-app',
    title: {
      es: 'App de Reservas de Viajes',
      en: 'Travel Booking App'
    },
    description: {
      es: 'Diseño y desarrollo de una aplicación móvil para reservas de viajes con experiencia personalizada.',
      en: 'Design and development of a travel booking mobile app with personalized experience.'
    },
    category: 'fullstack',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Stripe API'],
    image: 'travel booking app interface',
    year: 2023,
    client: {
      es: 'TravelCorp',
      en: 'TravelCorp'
    },
    duration: {
      es: '7 meses',
      en: '7 months'
    },
    role: {
      es: 'Fullstack Developer & UX Designer',
      en: 'Fullstack Developer & UX Designer'
    },
    challenges: {
      es: [
        'Integrar múltiples APIs de viajes',
        'Manejar pagos internacionales',
        'Sincronización offline'
      ],
      en: [
        'Integrate multiple travel APIs',
        'Handle international payments',
        'Offline synchronization'
      ]
    },
    outcomes: {
      es: [
        '100K+ descargas en primer año',
        '4.7/5 rating promedio',
        '40% aumento en reservas'
      ],
      en: [
        '100K+ downloads in first year',
        '4.7/5 average rating',
        '40% increase in bookings'
      ]
    },
    links: {
      demo: 'https://travel-app.example.com',
      github: 'https://github.com/username/travel-booking'
    }
  },
  {
    id: 'portfolio-website',
    title: {
      es: 'Portfolio Personal',
      en: 'Personal Portfolio'
    },
    description: {
      es: 'Desarrollo de un portfolio personal con diseño moderno y animaciones interactivas.',
      en: 'Development of a personal portfolio with modern design and interactive animations.'
    },
    category: 'frontend',
    technologies: ['React', 'TypeScript', 'Motion', 'Tailwind CSS'],
    image: 'portfolio website design',
    year: 2024,
    client: {
      es: 'Proyecto Personal',
      en: 'Personal Project'
    },
    duration: {
      es: '2 meses',
      en: '2 months'
    },
    role: {
      es: 'Designer & Developer',
      en: 'Designer & Developer'
    },
    challenges: {
      es: [
        'Crear animaciones fluidas',
        'Optimizar rendimiento',
        'Diseño responsive completo'
      ],
      en: [
        'Create smooth animations',
        'Optimize performance',
        'Complete responsive design'
      ]
    },
    outcomes: {
      es: [
        '95+ score en Lighthouse',
        '10+ ofertas de trabajo',
        'Featured en dev.to'
      ],
      en: [
        '95+ Lighthouse score',
        '10+ job offers',
        'Featured on dev.to'
      ]
    },
    links: {
      demo: 'https://portfolio.example.com',
      github: 'https://github.com/username/portfolio'
    }
  },
  {
    id: 'fitness-tracker',
    title: {
      es: 'App de Fitness',
      en: 'Fitness Tracker App'
    },
    description: {
      es: 'Aplicación móvil para seguimiento de ejercicios y nutrición con gamificación.',
      en: 'Mobile app for exercise and nutrition tracking with gamification features.'
    },
    category: 'ux-ui',
    technologies: ['Figma', 'Principle', 'After Effects', 'Sketch'],
    image: 'fitness app interface',
    year: 2022,
    client: {
      es: 'FitTech',
      en: 'FitTech'
    },
    duration: {
      es: '4 meses',
      en: '4 months'
    },
    role: {
      es: 'UX/UI Designer',
      en: 'UX/UI Designer'
    },
    challenges: {
      es: [
        'Motivar uso diario',
        'Simplificar datos complejos',
        'Diseño inclusivo'
      ],
      en: [
        'Motivate daily usage',
        'Simplify complex data',
        'Inclusive design'
      ]
    },
    outcomes: {
      es: [
        '200K+ usuarios activos',
        '85% retención mensual',
        'App del año en fitness'
      ],
      en: [
        '200K+ active users',
        '85% monthly retention',
        'Fitness app of the year'
      ]
    },
    links: {
      behance: 'https://behance.net/gallery/fitness-app'
    }
  },
  {
    id: 'alta-tienda',
    title: {
      es: 'Alta Tienda',
      en: 'Alta Tienda'
    },
    description: {
      es: 'Diseño y desarrollo de una plataforma de e-commerce premium para productos de lujo con experiencia de compra sofisticada.',
      en: 'Design and development of a premium e-commerce platform for luxury products with sophisticated shopping experience.'
    },
    category: 'fullstack',
    technologies: ['React', 'TypeScript', 'Next.js', 'Node.js', 'MongoDB', 'Stripe'],
    image: 'luxury ecommerce store',
    additionalImages: [
      'https://images.unsplash.com/photo-1681152968214-9dad026ad188?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwcm9kdWN0JTIwc2hvd2Nhc2V8ZW58MXx8fHwxNzU4MjQ3Mjk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    year: 2024,
    client: {
      es: 'Alta Tienda',
      en: 'Alta Tienda'
    },
    duration: {
      es: '6 meses',
      en: '6 months'
    },
    role: {
      es: 'Fullstack Developer & UX Designer',
      en: 'Fullstack Developer & UX Designer'
    },
    challenges: {
      es: [
        'Crear una experiencia de lujo digital',
        'Implementar checkout seguro para productos de alto valor',
        'Diseñar catálogo visual sofisticado',
        'Integrar sistema de inventario en tiempo real'
      ],
      en: [
        'Create a digital luxury experience',
        'Implement secure checkout for high-value products',
        'Design sophisticated visual catalog',
        'Integrate real-time inventory system'
      ]
    },
    outcomes: {
      es: [
        '300% aumento en ventas online',
        '92% satisfacción del cliente',
        '50% reducción en tiempo de carga',
        'Certificación de seguridad PCI DSS'
      ],
      en: [
        '300% increase in online sales',
        '92% customer satisfaction',
        '50% reduction in loading time',
        'PCI DSS security certification'
      ]
    },
    links: {
      demo: 'https://alta-tienda.example.com',
      github: 'https://github.com/username/alta-tienda'
    }
  }
];