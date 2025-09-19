import React, { useState, useEffect } from 'react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Mail, MapPin, Phone, Linkedin, Github, Twitter, ExternalLink, Copy, Check, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function ModernContact(): JSX.Element {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [copiedItem, setCopiedItem] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('contact');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItem(type);
      setTimeout(() => setCopiedItem(''), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const contactMethods = [
    {
      id: 'email',
      icon: Mail,
      label: 'Email',
      value: 'hello@portfolio.com',
      href: 'mailto:hello@portfolio.com',
      color: 'text-vibrant-blue',
      bgColor: 'bg-vibrant-blue/10'
    },
    {
      id: 'phone',
      icon: Phone,
      label: 'Teléfono',
      value: '+34 600 000 000',
      href: 'tel:+34600000000',
      color: 'text-vibrant-green',
      bgColor: 'bg-vibrant-green/10'
    },
    {
      id: 'location',
      icon: MapPin,
      label: 'Ubicación',
      value: 'Madrid, España',
      href: '#',
      color: 'text-vibrant-purple',
      bgColor: 'bg-vibrant-purple/10'
    }
  ];

  const socialLinks = [
    {
      id: 'linkedin',
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/username',
      color: 'hover:text-blue-600',
      bgColor: 'hover:bg-blue-600/10'
    },
    {
      id: 'github',
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/username',
      color: 'hover:text-gray-800',
      bgColor: 'hover:bg-gray-800/10'
    },
    {
      id: 'twitter',
      icon: Twitter,
      label: 'Twitter',
      href: 'https://twitter.com/username',
      color: 'hover:text-sky-500',
      bgColor: 'hover:bg-sky-500/10'
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-primary" />
            <Badge className="bg-primary/10 text-primary border-primary/20">
              {t('contact.title')}
            </Badge>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-6">
            Conectemos
            <span className="text-primary">.</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Me encantaría escuchar sobre él y ver cómo podemos trabajar juntos.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Contact Methods */}
          <div className={`space-y-6 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <div className="glass-card rounded-3xl p-8">
              <h3 className="text-2xl font-semibold mb-8">Información de contacto</h3>
              
              <div className="space-y-6">
                {contactMethods.map((method, index) => {
                  const IconComponent = method.icon;
                  return (
                    <div
                      key={method.id}
                      className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 hover:bg-muted/30 group animate-slide-up-fade interactive-elem`}
                      style={{ animationDelay: `${400 + index * 100}ms` }}
                      data-cursor-text={`Contactar por ${method.label}`}
                    >
                      <div className={`w-12 h-12 rounded-xl ${method.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className={`w-5 h-5 ${method.color}`} />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-muted-foreground">{method.label}</div>
                        <div className="font-medium group-hover:text-primary transition-colors duration-300">
                          {method.value}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => copyToClipboard(method.value, method.id)}
                          className="w-8 h-8 p-0 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
                        >
                          {copiedItem === method.id ? (
                            <Check className="w-3 h-3 text-green-500" />
                          ) : (
                            <Copy className="w-3 h-3" />
                          )}
                        </Button>
                        {method.href !== '#' && (
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => window.open(method.href, '_blank')}
                            className="w-8 h-8 p-0 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
                          >
                            <ExternalLink className="w-3 h-3" />
                          </Button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card rounded-3xl p-8">
              <h3 className="text-xl font-semibold mb-6">Sígueme en redes</h3>
              <div className="grid grid-cols-3 gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <Button
                      key={social.id}
                      variant="ghost"
                      size="lg"
                      onClick={() => window.open(social.href, '_blank')}
                      className={`h-16 flex-col gap-2 rounded-xl transition-all duration-300 hover-lift ${social.color} ${social.bgColor} animate-slide-up-fade interactive-elem`}
                      style={{ animationDelay: `${600 + index * 100}ms` }}
                      data-cursor-text={`Ver ${social.label}`}
                    >
                      <IconComponent className="w-5 h-5" />
                      <span className="text-xs">{social.label}</span>
                    </Button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className={`space-y-8 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            
            {/* Main CTA Card */}
            <div className="glass-card rounded-3xl p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/20 to-transparent rounded-full blur-2xl" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-sm text-muted-foreground">Disponible para nuevos proyectos</span>
                </div>
                
                <h3 className="text-2xl font-semibold mb-4">
                  ¿Listo para crear algo increíble juntos?
                </h3>
                
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Estoy siempre abierto a discutir nuevas oportunidades, colaboraciones interesantes o simplemente charlar sobre tecnología y diseño.
                </p>
                
                <Button 
                  size="lg"
                  className="w-full btn-interactive bg-primary hover:bg-primary/90 text-primary-foreground animate-interactive-glow hover-lift interactive-elem group/btn"
                  onClick={() => window.open('mailto:hello@portfolio.com', '_blank')}
                  data-cursor-text="Enviar email"
                >
                  <Mail className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform duration-300" />
                  <span className="group-hover/btn:scale-105 transition-transform duration-300">
                    Enviar mensaje
                  </span>
                </Button>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card rounded-2xl p-6 text-center">
                <div className="text-2xl font-bold text-vibrant-green mb-1">24h</div>
                <div className="text-sm text-muted-foreground">Tiempo de respuesta</div>
              </div>
              <div className="glass-card rounded-2xl p-6 text-center">
                <div className="text-2xl font-bold text-vibrant-blue mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Proyectos completados</div>
              </div>
            </div>

            {/* Quote Card */}
            <div className="glass-card rounded-3xl p-8 border-l-4 border-primary">
              <blockquote className="text-muted-foreground italic mb-4">
                "El buen diseño es obvio. El gran diseño es transparente."
              </blockquote>
              <cite className="text-sm font-medium">— Joe Sparano</cite>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="glass-card rounded-2xl p-6 inline-block">
            <p className="text-sm text-muted-foreground">
              © 2024 Portfolio. Diseñado y desarrollado con ❤️ usando React y TypeScript.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}