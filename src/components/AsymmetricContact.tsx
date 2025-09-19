import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Send, MessageCircle, Calendar } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { useLanguage } from '../contexts/LanguageContext';

interface ContactItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href: string | null;
  color: string;
  rotation: string;
}

interface SocialLink {
  icon: React.ComponentType<{ className?: string }>;
  name: string;
  href: string;
  color: string;
  position: string;
}

export function AsymmetricContact(): JSX.Element {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('contact');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const contactInfo: ContactItem[] = [
    {
      icon: Mail,
      label: t('contact.email'),
      value: 'hello@portfolio.com',
      href: 'mailto:hello@portfolio.com',
      color: 'from-[var(--vibrant-purple)] to-[var(--vibrant-pink)]',
      rotation: 'rotate-2'
    },
    {
      icon: Phone,
      label: t('contact.phone'),
      value: '+34 123 456 789',
      href: 'tel:+34123456789',
      color: 'from-[var(--vibrant-blue)] to-[var(--vibrant-green)]',
      rotation: '-rotate-3'
    },
    {
      icon: MapPin,
      label: t('contact.location'),
      value: 'Madrid, España',
      href: null,
      color: 'from-[var(--vibrant-green)] to-[var(--vibrant-orange)]',
      rotation: 'rotate-1'
    }
  ];

  const socialLinks: SocialLink[] = [
    {
      icon: Linkedin,
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      color: 'from-blue-500 to-blue-600',
      position: 'top-4 right-4'
    },
    {
      icon: Github,
      name: 'GitHub',
      href: 'https://github.com',
      color: 'from-gray-700 to-gray-900',
      position: 'bottom-4 left-4'
    },
    {
      icon: Twitter,
      name: 'Twitter',
      href: 'https://twitter.com',
      color: 'from-blue-400 to-blue-500',
      position: 'top-4 left-4'
    }
  ];

  const quickActions = [
    {
      icon: MessageCircle,
      label: 'Chat directo',
      description: 'Hablemos por WhatsApp',
      color: 'from-green-500 to-green-600',
      href: 'https://wa.me/34123456789',
      rotation: 'rotate-3'
    },
    {
      icon: Calendar,
      label: 'Agendar reunión',
      description: '30 min de consulta gratuita',
      color: 'from-purple-500 to-pink-500',
      href: '#',
      rotation: '-rotate-2'
    },
    {
      icon: Send,
      label: 'Email directo',
      description: 'Envíame tu propuesta',
      color: 'from-blue-500 to-cyan-500',
      href: 'mailto:hello@portfolio.com',
      rotation: 'rotate-1'
    }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      
      {/* Asymmetric background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-[var(--vibrant-green)]/10 to-[var(--vibrant-blue)]/10 rounded-full blur-3xl transform rotate-45" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-[var(--vibrant-purple)]/10 to-[var(--vibrant-pink)]/10 rounded-full blur-3xl transform -rotate-45" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Asymmetric header */}
        <div className="mb-20 relative">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-6 lg:col-start-2">
              <div className={`transform transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}>
                <h2 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-[var(--vibrant-green)] via-[var(--vibrant-blue)] to-[var(--vibrant-purple)] bg-clip-text text-transparent transform skew-x-6">
                  {t('contact.title')}
                </h2>
              </div>
            </div>
            
            <div className="col-span-12 lg:col-span-4 lg:col-start-8">
              <div className={`transform transition-all duration-1000 delay-300 ${
                isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
              }`}>
                <Card className="p-6 bg-gradient-to-br from-[var(--vibrant-orange)]/5 to-[var(--vibrant-pink)]/5 border-[var(--vibrant-orange)]/20 transform -rotate-3 hover:rotate-0 transition-all duration-300">
                  <p className="text-lg text-muted-foreground transform rotate-3">
                    {t('contact.subtitle')}
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Broken grid main content */}
        <div className="grid grid-cols-12 gap-8">
          
          {/* Contact information - Asymmetric cards */}
          <div className="col-span-12 lg:col-span-7 space-y-6">
            <div className={`transform transition-all duration-1000 delay-500 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              <h3 className="text-2xl font-bold text-[var(--vibrant-purple)] mb-8 transform -skew-x-12">
                Información de contacto
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((item: ContactItem, index: number) => {
                  const Icon = item.icon;
                  const content = (
                    <Card 
                      className={`group p-6 transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-background to-muted/30 relative overflow-hidden cursor-pointer border-2 ${
                        hoveredCard === index 
                          ? 'border-transparent shadow-2xl scale-105 rotate-0' 
                          : `border-border/50 hover:border-purple-200 transform ${item.rotation} hover:rotate-0`
                      }`}
                      onMouseEnter={() => setHoveredCard(index)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                      <div className="flex items-center space-x-6 relative z-10">
                        <div className={`p-4 bg-gradient-to-r ${item.color} rounded-2xl shadow-lg transform group-hover:rotate-12 transition-transform duration-300`}>
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                        <div className="flex-1">
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
                      <a key={index} href={item.href} className="block">
                        {content}
                      </a>
                    );
                  }

                  return <div key={index}>{content}</div>;
                })}
              </div>
            </div>
          </div>

          {/* Quick actions - Scattered layout */}
          <div className="col-span-12 lg:col-span-5 relative">
            <div className={`transform transition-all duration-1000 delay-700 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
            }`}>
              <h3 className="text-2xl font-bold text-[var(--vibrant-blue)] mb-8 transform skew-x-12">
                Acciones rápidas
              </h3>

              <div className="space-y-6">
                {quickActions.map((action, index) => {
                  const Icon = action.icon;
                  return (
                    <a
                      key={index}
                      href={action.href}
                      target={action.href.startsWith('http') ? '_blank' : undefined}
                      rel={action.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="block"
                    >
                      <Card className={`group p-6 bg-gradient-to-br from-background to-muted/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer border-2 border-border/50 hover:border-blue-200 transform ${action.rotation} hover:rotate-0 relative overflow-hidden`}>
                        <div className={`absolute inset-0 bg-gradient-to-r ${action.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                        <div className="relative z-10">
                          <div className="flex items-start space-x-4">
                            <div className={`p-3 bg-gradient-to-r ${action.color} rounded-xl shadow-lg`}>
                              <Icon className="h-6 w-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-bold text-lg mb-1">
                                {action.label}
                              </h4>
                              <p className="text-sm text-muted-foreground">
                                {action.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Social media - Floating asymmetric */}
        <div className="mt-20 relative">
          <div className={`transform transition-all duration-1000 delay-1000 ${
            isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          }`}>
            <div className="grid grid-cols-12 gap-6">
              
              {/* CTA Card */}
              <div className="col-span-12 lg:col-span-8 lg:col-start-3">
                <Card className="p-8 bg-gradient-to-r from-[var(--vibrant-purple)]/5 via-[var(--vibrant-blue)]/5 to-[var(--vibrant-green)]/5 border-2 border-[var(--vibrant-purple)]/20 backdrop-blur-lg transform -skew-y-1 hover:skew-y-0 transition-all duration-500">
                  <div className="space-y-6 transform skew-y-1">
                    <div className="text-center space-y-4">
                      <h3 className="text-3xl font-bold bg-gradient-to-r from-[var(--vibrant-purple)] to-[var(--vibrant-blue)] bg-clip-text text-transparent">
                        ¿Listo para colaborar?
                      </h3>
                      <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Estoy siempre abierto a nuevos proyectos y oportunidades emocionantes. 
                        No dudes en contactarme para discutir cómo podemos trabajar juntos.
                      </p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                      <Button
                        asChild
                        size="lg"
                        className="text-lg px-8 py-4 bg-gradient-to-r from-[var(--vibrant-green)] to-[var(--vibrant-blue)] hover:from-[var(--vibrant-blue)] hover:to-[var(--vibrant-green)] text-white border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 group transform rotate-1 hover:rotate-0 rounded-2xl"
                      >
                        <a href="mailto:hello@portfolio.com" className="flex items-center space-x-3">
                          <Send className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                          <span className="font-semibold">Enviar mensaje</span>
                        </a>
                      </Button>

                      <div className="flex items-center space-x-4">
                        {socialLinks.map((social, index) => {
                          const Icon = social.icon;
                          return (
                            <a
                              key={index}
                              href={social.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group"
                            >
                              <div className={`p-3 bg-gradient-to-r ${social.color} rounded-full shadow-lg hover:shadow-xl transform rotate-12 group-hover:rotate-0 transition-all duration-300 hover:scale-110`}>
                                <Icon className="h-5 w-5 text-white" />
                              </div>
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating decorative elements */}
      {isVisible && (
        <>
          <div className="absolute top-1/4 left-8 w-4 h-4 bg-gradient-to-r from-[var(--vibrant-green)] to-[var(--vibrant-blue)] rounded-full opacity-60 animate-float" style={{ animationDelay: '0s' }} />
          <div className="absolute top-1/3 right-12 w-3 h-3 bg-gradient-to-r from-[var(--vibrant-purple)] to-[var(--vibrant-pink)] rounded-full opacity-60 animate-float" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-1/4 left-1/3 w-5 h-5 bg-gradient-to-r from-[var(--vibrant-orange)] to-[var(--vibrant-green)] rounded-full opacity-60 animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-gradient-to-r from-[var(--vibrant-blue)] to-[var(--vibrant-purple)] rounded-full opacity-60 animate-float" style={{ animationDelay: '1.5s' }} />
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
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}