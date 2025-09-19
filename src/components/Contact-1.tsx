import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { useLanguage } from '../contexts/LanguageContext';

interface ContactItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href: string | null;
  ariaLabel: string | null;
}

interface SocialLink {
  icon: React.ComponentType<{ className?: string }>;
  name: string;
  href: string;
  ariaLabel: string;
}

export function Contact(): JSX.Element {
  const { t } = useLanguage();

  const contactInfo: ContactItem[] = [
    {
      icon: Mail,
      label: t('contact.email'),
      value: 'hello@portfolio.com',
      href: 'mailto:hello@portfolio.com',
      ariaLabel: 'Enviar email'
    },
    {
      icon: Phone,
      label: t('contact.phone'),
      value: '+34 123 456 789',
      href: 'tel:+34123456789',
      ariaLabel: 'Llamar por teléfono'
    },
    {
      icon: MapPin,
      label: t('contact.location'),
      value: 'Madrid, España',
      href: null,
      ariaLabel: null
    }
  ];

  const socialLinks: SocialLink[] = [
    {
      icon: Linkedin,
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      ariaLabel: 'Ver perfil de LinkedIn'
    },
    {
      icon: Github,
      name: 'GitHub',
      href: 'https://github.com',
      ariaLabel: 'Ver perfil de GitHub'
    },
    {
      icon: Twitter,
      name: 'Twitter',
      href: 'https://twitter.com',
      ariaLabel: 'Ver perfil de Twitter'
    }
  ];

  const gradients = [
    'from-[var(--vibrant-purple)] to-[var(--vibrant-pink)]',
    'from-[var(--vibrant-blue)] to-[var(--vibrant-green)]',
    'from-[var(--vibrant-orange)] to-[var(--vibrant-pink)]'
  ];

  const socialGradients = [
    'from-blue-500 to-blue-600',
    'from-gray-700 to-gray-900',
    'from-blue-400 to-blue-500'
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[var(--vibrant-green)] via-[var(--vibrant-blue)] to-[var(--vibrant-purple)] bg-clip-text text-transparent">
            {t('contact.title')}
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[var(--vibrant-purple)] mb-8">
              {t('contact.title')}
            </h3>
            
            <div className="space-y-4">
              {contactInfo.map((item: ContactItem, index: number) => {
                const Icon = item.icon;
                const content = (
                  <Card className={`p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-gradient bg-gradient-to-br from-background to-muted/20 relative overflow-hidden group`}>
                    <div className={`absolute inset-0 bg-gradient-to-r ${gradients[index]} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                    <div className="flex items-center space-x-4 relative z-10">
                      <div className={`p-3 bg-gradient-to-r ${gradients[index]} rounded-xl shadow-lg`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-muted-foreground font-semibold mb-1">
                          {item.label}
                        </p>
                        <p className="text-foreground font-medium truncate">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  </Card>
                );

                if (item.href) {
                  return (
                    <a
                      key={index}
                      href={item.href}
                      className="block"
                      aria-label={item.ariaLabel || undefined}
                    >
                      {content}
                    </a>
                  );
                }

                return <div key={index}>{content}</div>;
              })}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[var(--vibrant-blue)] mb-8">
              {t('contact.social')}
            </h3>
            
            <div className="space-y-4">
              {socialLinks.map((social: SocialLink, index: number) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.ariaLabel}
                    className="block"
                  >
                    <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-transparent bg-gradient-to-br from-background to-muted/20 relative overflow-hidden group">
                      <div className={`absolute inset-0 bg-gradient-to-r ${socialGradients[index]} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                      <div className="flex items-center space-x-4 relative z-10">
                        <div className={`p-3 bg-gradient-to-r ${socialGradients[index]} rounded-xl shadow-lg`}>
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="font-bold text-lg">
                            {social.name}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            @portfolio
                          </p>
                        </div>
                      </div>
                    </Card>
                  </a>
                );
              })}
            </div>

            {/* CTA */}
            <div className="pt-8">
              <Button
                asChild
                size="lg"
                className="w-full bg-gradient-to-r from-[var(--vibrant-green)] to-[var(--vibrant-blue)] hover:from-[var(--vibrant-blue)] hover:to-[var(--vibrant-green)] text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-lg py-6"
              >
                <a
                  href="mailto:hello@portfolio.com"
                  className="flex items-center justify-center space-x-3"
                >
                  <Mail className="h-6 w-6" />
                  <span className="font-semibold">
                    {t('contact.email')}
                  </span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}