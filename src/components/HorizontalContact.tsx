import React, { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, ChevronLeft, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { useLanguage } from '../contexts/LanguageContext';

interface HorizontalContactProps {
  isActive: boolean;
  onPrev: () => void;
}

interface ContactItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href: string | null;
  ariaLabel: string | null;
  gradient: string;
}

interface SocialLink {
  icon: React.ComponentType<{ className?: string }>;
  name: string;
  href: string;
  ariaLabel: string;
  gradient: string;
}

export function HorizontalContact({ isActive, onPrev }: HorizontalContactProps): JSX.Element {
  const { t } = useLanguage();
  const [mounted, setMounted] = useState<boolean>(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    if (isActive) {
      setMounted(true);
    }
  }, [isActive]);

  const contactInfo: ContactItem[] = [
    {
      icon: Mail,
      label: t('contact.email'),
      value: 'hello@portfolio.com',
      href: 'mailto:hello@portfolio.com',
      ariaLabel: 'Enviar email',
      gradient: 'from-[var(--vibrant-purple)] to-[var(--vibrant-pink)]'
    },
    {
      icon: Phone,
      label: t('contact.phone'),
      value: '+34 123 456 789',
      href: 'tel:+34123456789',
      ariaLabel: 'Llamar por teléfono',
      gradient: 'from-[var(--vibrant-blue)] to-[var(--vibrant-green)]'
    },
    {
      icon: MapPin,
      label: t('contact.location'),
      value: 'Madrid, España',
      href: null,
      ariaLabel: null,
      gradient: 'from-[var(--vibrant-green)] to-[var(--vibrant-orange)]'
    }
  ];

  const socialLinks: SocialLink[] = [
    {
      icon: Linkedin,
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      ariaLabel: 'Ver perfil de LinkedIn',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: Github,
      name: 'GitHub',
      href: 'https://github.com',
      ariaLabel: 'Ver perfil de GitHub',
      gradient: 'from-gray-700 to-gray-900'
    },
    {
      icon: Twitter,
      name: 'Twitter',
      href: 'https://twitter.com',
      ariaLabel: 'Ver perfil de Twitter',
      gradient: 'from-blue-400 to-blue-500'
    }
  ];

  return (
    <div className="h-full flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-muted/20 to-background">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className={`absolute top-20 right-20 w-80 h-80 bg-gradient-to-r from-[var(--vibrant-green)] to-[var(--vibrant-blue)] rounded-full opacity-10 blur-3xl transition-all duration-1000 ${
          isActive && mounted ? 'animate-pulse scale-110' : 'scale-75 opacity-5'
        }`} />
        <div className={`absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-[var(--vibrant-purple)] to-[var(--vibrant-pink)] rounded-full opacity-10 blur-3xl transition-all duration-1000 delay-300 ${
          isActive && mounted ? 'animate-pulse scale-110' : 'scale-75 opacity-5'
        }`} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(16,185,129,0.1),rgba(255,255,255,0))]" />
      </div>

      {/* Navigation arrow */}
      <Button
        variant="ghost"
        size="sm"
        onClick={onPrev}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 z-20 bg-background/80 backdrop-blur-lg hover:bg-background border border-border/50 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300"
        aria-label="Previous section"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-8 w-full">
        <div className="text-center space-y-16">
          
          {/* Header */}
          <div className={`space-y-6 transition-all duration-1000 ${
            isActive && mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-[var(--vibrant-green)] via-[var(--vibrant-blue)] to-[var(--vibrant-purple)] bg-clip-text text-transparent">
              {t('contact.title')}
            </h2>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto">
              {t('contact.subtitle')}
            </p>
          </div>

          {/* Contact Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Contact Information */}
            <div className={`space-y-6 transition-all duration-1000 delay-300 ${
              isActive && mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
              <h3 className="text-2xl font-bold text-[var(--vibrant-purple)] mb-8 text-left">
                Información de contacto
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((item: ContactItem, index: number) => {
                  const Icon = item.icon;
                  const content = (
                    <Card 
                      className={`p-6 transition-all duration-300 hover:-translate-y-2 border-2 bg-gradient-to-br from-background to-muted/30 relative overflow-hidden group cursor-pointer ${
                        hoveredCard === index 
                          ? 'border-transparent shadow-2xl shadow-purple-500/20 scale-105' 
                          : 'border-border/50 hover:border-purple-200'
                      }`}
                      onMouseEnter={() => setHoveredCard(index)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                      <div className="flex items-center space-x-6 relative z-10">
                        <div className={`p-4 bg-gradient-to-r ${item.gradient} rounded-2xl shadow-lg`}>
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                        <div className="flex-1 text-left">
                          <p className="text-sm text-muted-foreground font-semibold mb-2 uppercase tracking-wide">
                            {item.label}
                          </p>
                          <p className="text-lg font-medium text-foreground">
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
            <div className={`space-y-6 transition-all duration-1000 delay-500 ${
              isActive && mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}>
              <h3 className="text-2xl font-bold text-[var(--vibrant-blue)] mb-8 text-left">
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
                      <Card className="p-6 transition-all duration-300 hover:-translate-y-2 border-2 border-border/50 hover:border-blue-200 bg-gradient-to-br from-background to-muted/30 relative overflow-hidden group cursor-pointer hover:shadow-2xl hover:shadow-blue-500/20">
                        <div className={`absolute inset-0 bg-gradient-to-r ${social.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                        <div className="flex items-center space-x-6 relative z-10">
                          <div className={`p-4 bg-gradient-to-r ${social.gradient} rounded-2xl shadow-lg`}>
                            <Icon className="h-8 w-8 text-white" />
                          </div>
                          <div className="flex-1 text-left">
                            <p className="text-lg font-bold">
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
            </div>
          </div>

          {/* CTA Section */}
          <div className={`transition-all duration-1000 delay-700 ${
            isActive && mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <Card className="p-8 bg-gradient-to-r from-[var(--vibrant-purple)]/5 via-[var(--vibrant-blue)]/5 to-[var(--vibrant-green)]/5 border-2 border-[var(--vibrant-purple)]/20 backdrop-blur-lg">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-center">
                  ¿Listo para colaborar?
                </h3>
                <p className="text-muted-foreground text-center max-w-2xl mx-auto">
                  Estoy siempre abierto a nuevos proyectos y oportunidades emocionantes. 
                  No dudes en contactarme para discutir cómo podemos trabajar juntos.
                </p>
                <div className="flex justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="text-lg px-8 py-4 bg-gradient-to-r from-[var(--vibrant-green)] to-[var(--vibrant-blue)] hover:from-[var(--vibrant-blue)] hover:to-[var(--vibrant-green)] text-white border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 group rounded-full"
                  >
                    <a
                      href="mailto:hello@portfolio.com"
                      className="flex items-center space-x-3"
                    >
                      <Send className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                      <span className="font-semibold">Enviar mensaje</span>
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      {isActive && mounted && (
        <>
          <div className="absolute top-1/4 left-16 w-3 h-3 bg-gradient-to-r from-[var(--vibrant-green)] to-[var(--vibrant-blue)] rounded-full opacity-60 animate-float" style={{ animationDelay: '0s' }} />
          <div className="absolute top-1/3 right-20 w-4 h-4 bg-gradient-to-r from-[var(--vibrant-purple)] to-[var(--vibrant-pink)] rounded-full opacity-60 animate-float" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-gradient-to-r from-[var(--vibrant-orange)] to-[var(--vibrant-green)] rounded-full opacity-60 animate-float" style={{ animationDelay: '2s' }} />
        </>
      )}

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-15px) rotate(180deg);
            opacity: 0.8;
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}