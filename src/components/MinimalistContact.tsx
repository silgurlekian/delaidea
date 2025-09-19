import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { useLanguage } from '../contexts/LanguageContext';

interface ContactItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href: string | null;
}

interface SocialLink {
  icon: React.ComponentType<{ className?: string }>;
  name: string;
  href: string;
}

export function MinimalistContact(): JSX.Element {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
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
      href: 'mailto:hello@portfolio.com'
    },
    {
      icon: Phone,
      label: t('contact.phone'),
      value: '+34 123 456 789',
      href: 'tel:+34123456789'
    },
    {
      icon: MapPin,
      label: t('contact.location'),
      value: 'Madrid, España',
      href: null
    }
  ];

  const socialLinks: SocialLink[] = [
    {
      icon: Linkedin,
      name: 'LinkedIn',
      href: 'https://linkedin.com'
    },
    {
      icon: Github,
      name: 'GitHub',
      href: 'https://github.com'
    },
    {
      icon: Twitter,
      name: 'Twitter',
      href: 'https://twitter.com'
    }
  ];

  return (
    <section id="contact" className="py-24 px-6 lg:px-8 bg-muted/30 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Clean section header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
            {t('contact.title')}
          </h2>
          <div className="w-16 h-px bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        {/* Horizontal Contact Layout */}
        <div className={`transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          
          {/* Contact Information - Horizontal Layout */}
          <Card className="p-8 md:p-12 bg-background border-border/50 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              {contactInfo.map((item: ContactItem, index: number) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex flex-col items-center text-center group">
                    <div className="p-4 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-all duration-300 mb-4 group-hover:scale-110">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-medium text-foreground mb-2">
                      {item.label}
                    </h3>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                      {item.value}
                    </p>
                  </div>
                );

                if (item.href) {
                  return (
                    <a
                      key={index}
                      href={item.href}
                      className="block hover:scale-[1.02] transition-transform duration-200 p-4 rounded-lg hover:bg-muted/50"
                    >
                      {content}
                    </a>
                  );
                }

                return (
                  <div key={index} className="p-4 rounded-lg hover:bg-muted/50 transition-colors duration-200">
                    {content}
                  </div>
                );
              })}
            </div>
          </Card>

          {/* Social Links - Horizontal Layout */}
          <Card className="p-8 md:p-12 bg-background border-border/50 mb-12">
            <div className="text-center mb-8">
              <h3 className="text-xl font-medium text-foreground mb-2">
                {t('contact.social')}
              </h3>
              <p className="text-muted-foreground">
                Conecta conmigo en redes sociales
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              {socialLinks.map((social: SocialLink, index: number) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-4 bg-muted/50 hover:bg-primary/10 rounded-lg transition-all duration-300 hover:scale-105 group min-w-[180px] justify-center sm:justify-start"
                  >
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-200">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                      <p className="text-foreground font-medium">
                        {social.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        @portfolio
                      </p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-200 hidden sm:block" />
                  </a>
                );
              })}
            </div>
          </Card>
        </div>

        {/* CTA Section */}
        <div className={`transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <Card className="p-8 md:p-12 text-center bg-gradient-to-br from-primary/5 via-accent/5 to-background border-border/50 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
            <div className="absolute top-4 right-4 w-20 h-20 border border-primary/20 rounded-full" />
            <div className="absolute bottom-4 left-4 w-16 h-16 border border-accent/20 rounded-full" />
            
            <div className="relative z-10 space-y-6">
              <h3 className="text-2xl md:text-3xl font-light text-foreground">
                ¿Listo para colaborar?
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Estoy siempre abierto a nuevos proyectos y oportunidades emocionantes. 
                No dudes en contactarme para discutir cómo podemos trabajar juntos.
              </p>
              <div className="pt-4">
                <Button
                  asChild
                  size="lg"
                  className="px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <a href="mailto:hello@portfolio.com" className="inline-flex items-center space-x-2">
                    <Mail className="h-4 w-4" />
                    <span>Enviar mensaje</span>
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © 2024 Portfolio. Diseñado con atención al detalle.
            </p>
            <div className="flex items-center space-x-6">
              {socialLinks.map((social: SocialLink, index: number) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-110"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}