import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Mail, Linkedin, Github, Dribbble, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { contactInfo } from '../data/contact';

export const Contact: React.FC = () => {
  const { t } = useLanguage();

  const contactMethods = [
    {
      icon: Mail,
      label: { es: 'Email', en: 'Email' },
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
      color: 'bg-red-500 hover:bg-red-600',
      description: { es: 'Escríbeme directamente', en: 'Write me directly' }
    },
    {
      icon: Linkedin,
      label: { es: 'LinkedIn', en: 'LinkedIn' },
      value: 'linkedin.com/in/portfolio',
      href: contactInfo.linkedin,
      color: 'bg-blue-600 hover:bg-blue-700',
      description: { es: 'Conecta conmigo profesionalmente', en: 'Connect with me professionally' }
    },
    {
      icon: Github,
      label: { es: 'GitHub', en: 'GitHub' },
      value: 'github.com/portfolio',
      href: contactInfo.github,
      color: 'bg-gray-800 hover:bg-gray-900',
      description: { es: 'Explora mi código', en: 'Explore my code' }
    },
    {
      icon: Dribbble,
      label: { es: 'Dribbble', en: 'Dribbble' },
      value: 'dribbble.com/portfolio',
      href: contactInfo.dribbble,
      color: 'bg-pink-500 hover:bg-pink-600',
      description: { es: 'Ve mis diseños', en: 'See my designs' }
    }
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-800" id="contacto">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Geometric decorations */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-bl from-yellow-400 to-orange-500 opacity-10 transform rotate-45"></div>
          <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-gradient-to-tr from-purple-500 to-pink-500 opacity-10 transform -rotate-12"></div>
        </div>

        <div className="relative z-10">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black">
                <span className="bg-gradient-to-r from-green-500 to-cyan-500 text-white px-6 py-3 transform rotate-1 inline-block">
                  {t('contact-title', { es: 'CONTACTO', en: 'CONTACT' })}
                </span>
              </h2>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t('contact-subtitle', {
                es: '¿Tienes un proyecto en mente? Me encantaría saber de ti y explorar cómo podemos trabajar juntos.',
                en: 'Have a project in mind? I\'d love to hear from you and explore how we can work together.'
              })}
            </p>
          </div>

          {/* Contact methods grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {contactMethods.map((method) => {
              const IconComponent = method.icon;
              return (
                <Card 
                  key={method.label.en}
                  className="group overflow-hidden border-8 border-black dark:border-white bg-white dark:bg-gray-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 rounded-none"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`${method.color} w-12 h-12 flex items-center justify-center text-white transition-colors`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-1">
                          {t(`contact-${method.label.en.toLowerCase()}`, method.label)}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          {t(`contact-${method.label.en.toLowerCase()}-desc`, method.description)}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-500 font-mono truncate">
                          {method.value}
                        </p>
                      </div>
                      <Button
                        size="sm"
                        onClick={() => method.href && window.open(method.href, '_blank')}
                        className="bg-orange-500 hover:bg-orange-600 text-white opacity-0 group-hover:opacity-100 transition-opacity rounded-none"
                        aria-label={`${t('open', { es: 'Abrir', en: 'Open' })} ${t(`contact-${method.label.en.toLowerCase()}`, method.label)}`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* CTA section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 p-8 text-white border-8 border-black transform -rotate-1 hover:rotate-0 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-2">
                {t('cta-title', { 
                  es: '¿Listo para empezar?', 
                  en: 'Ready to get started?' 
                })}
              </h3>
              <p className="text-orange-100 mb-6">
                {t('cta-description', {
                  es: 'Hablemos sobre tu próximo proyecto y hagamos algo increíble juntos.',
                  en: 'Let\'s talk about your next project and make something amazing together.'
                })}
              </p>
              <Button
                onClick={() => window.open(`mailto:${contactInfo.email}`, '_blank')}
                className="bg-white text-orange-500 hover:bg-gray-100 font-bold px-8 py-3 transform rotate-1 hover:rotate-0 transition-transform rounded-none border-2 border-black"
              >
                <Mail className="w-5 h-5 mr-2" />
                {t('send-email', { es: 'Enviar email', en: 'Send email' })}
              </Button>
            </div>
          </div>

          {/* Availability status */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-3 bg-green-50 dark:bg-green-900/20 border-4 border-green-500 dark:border-green-400 px-6 py-3">
              <div className="w-3 h-3 bg-green-500 animate-pulse"></div>
              <span className="text-green-700 dark:text-green-300 font-medium">
                {t('availability', { 
                  es: 'Disponible para nuevos proyectos', 
                  en: 'Available for new projects' 
                })}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};