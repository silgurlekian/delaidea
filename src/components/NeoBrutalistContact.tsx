import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Mail, MapPin, Phone, Linkedin, Github, Twitter, ExternalLink, Copy, Check, Zap, Star, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function NeoBrutalistContact() {
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
      label: 'EMAIL',
      value: 'hello@portfolio.com',
      href: 'mailto:hello@portfolio.com',
      color: 'bg-yellow-400',
      hoverColor: 'hover:bg-red-500'
    },
    {
      id: 'phone',
      icon: Phone,
      label: 'TELÉFONO',
      value: '+34 600 000 000',
      href: 'tel:+34600000000',
      color: 'bg-green-400',
      hoverColor: 'hover:bg-blue-500'
    },
    {
      id: 'location',
      icon: MapPin,
      label: 'UBICACIÓN',
      value: 'MADRID, ESPAÑA',
      href: '#',
      color: 'bg-purple-500',
      hoverColor: 'hover:bg-orange-500'
    }
  ];

  const socialLinks = [
    {
      id: 'linkedin',
      icon: Linkedin,
      label: 'LINKEDIN',
      href: 'https://linkedin.com/in/username',
      color: 'bg-blue-500',
      hoverColor: 'hover:bg-yellow-400'
    },
    {
      id: 'github',
      icon: Github,
      label: 'GITHUB',
      href: 'https://github.com/username',
      color: 'bg-black',
      hoverColor: 'hover:bg-green-400'
    },
    {
      id: 'twitter',
      icon: Twitter,
      label: 'TWITTER',
      href: 'https://twitter.com/username',
      color: 'bg-cyan-400',
      hoverColor: 'hover:bg-red-500'
    }
  ];

  return (
    <section id="contact" className="pt-32 pb-20 px-6 lg:px-8 relative bg-black">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className={`mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-8 bg-yellow-400 flex items-center justify-center transform rotate-45">
              <Heart className="w-4 h-4 text-black transform -rotate-45" />
            </div>
            <span className="font-black uppercase tracking-[0.3em] text-sm text-white">¡HABLEMOS!</span>
          </div>
          
          <h2 className="space-y-4">
            <div className="text-6xl md:text-8xl lg:text-9xl font-black leading-none">
              <span className="text-yellow-400 bg-white px-4 py-2 transform -rotate-2 inline-block">
                CONTACTO
              </span>
            </div>
            <div className="text-2xl md:text-3xl font-bold text-white ml-8 transform rotate-1">
              <span className="bg-gradient-to-r from-green-400 to-blue-400 text-black px-3 py-1 inline-block">
                ¿TRABAJAMOS JUNTOS?
              </span>
            </div>
          </h2>
        </div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Left Column - Contact Info */}
          <div className={`space-y-8 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            
            {/* Contact Methods */}
            <div className="bg-white border-8 border-black p-8">
              <h3 className="font-black text-2xl mb-8 uppercase">INFORMACIÓN</h3>
              
              <div className="space-y-6">
                {contactMethods.map((method, index) => {
                  const IconComponent = method.icon;
                  return (
                    <div
                      key={method.id}
                      className="bg-gray-100 border-4 border-black p-4 transition-all duration-300 group cursor-pointer"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 ${method.color} ${method.hoverColor} border-4 border-black flex items-center justify-center transition-all duration-300`}>
                          <IconComponent className="w-5 h-5 text-black" />
                        </div>
                        <div className="flex-1">
                          <div className="text-xs font-black uppercase text-gray-500 mb-1">{method.label}</div>
                          <div className="font-black text-xl text-black group-hover:text-red-500 transition-colors duration-300">
                            {method.value}
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            onClick={() => copyToClipboard(method.value, method.id)}
                            className="w-8 h-8 p-0 bg-yellow-400 hover:bg-green-400 text-black border-2 border-black opacity-0 group-hover:opacity-100 transition-all duration-300"
                          >
                            {copiedItem === method.id ? (
                              <Check className="w-3 h-3" />
                            ) : (
                              <Copy className="w-3 h-3" />
                            )}
                          </Button>
                          {method.href !== '#' && (
                            <Button
                              size="sm"
                              onClick={() => window.open(method.href, '_blank')}
                              className="w-8 h-8 p-0 bg-red-400 hover:bg-blue-400 text-black border-2 border-black opacity-0 group-hover:opacity-100 transition-all duration-300"
                            >
                              <ExternalLink className="w-3 h-3" />
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-yellow-400 border-8 border-black p-8">
              <h3 className="font-black text-2xl mb-6 uppercase text-black">REDES SOCIALES</h3>
              <div className="grid grid-cols-1 gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <Button
                      key={social.id}
                      onClick={() => window.open(social.href, '_blank')}
                      className={`h-16 flex items-center justify-between p-4 ${social.color} ${social.hoverColor} text-white hover:text-black font-black uppercase border-4 border-black transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]`}
                    >
                      <div className="flex items-center gap-3">
                        <IconComponent className="w-6 h-6" />
                        <span>{social.label}</span>
                      </div>
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column - CTA */}
          <div className={`space-y-8 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            
            {/* Main CTA */}
            <div className="bg-green-400 border-8 border-black p-8 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-black transform rotate-45" />
              <div className="absolute bottom-4 left-4 w-6 h-6 bg-red-500 rounded-full" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-4 h-4 bg-black rounded-full animate-pulse" />
                  <span className="font-black uppercase text-sm text-black">DISPONIBLE PARA PROYECTOS</span>
                </div>
                
                <h3 className="font-black text-3xl mb-4 uppercase text-black">
                  ¿TIENES UNA IDEA GENIAL?
                </h3>
                
                <p className="text-black font-bold mb-8 leading-relaxed">
                  Estoy siempre buscando nuevos desafíos creativos. 
                  Si tienes un proyecto interesante, ¡hablemos!
                </p>
                
                <Button 
                  className="w-full bg-black hover:bg-red-500 text-white font-black uppercase py-6 text-lg border-4 border-black hover:border-red-500 transition-all duration-300 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                  onClick={() => window.open('mailto:hello@portfolio.com', '_blank')}
                >
                  <Mail className="w-5 h-5 mr-3" />
                  ENVIAR MENSAJE
                  <Zap className="w-5 h-5 ml-3" />
                </Button>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-red-400 border-8 border-black p-6 text-center">
                <div className="font-black text-3xl text-black">24H</div>
                <div className="font-black text-sm text-black uppercase">RESPUESTA</div>
              </div>
              <div className="bg-blue-400 border-8 border-black p-6 text-center">
                <div className="font-black text-3xl text-black">100%</div>
                <div className="font-black text-sm text-black uppercase">COMPLETADO</div>
              </div>
            </div>

            {/* Quote */}
            <div className="bg-white border-8 border-black p-8">
              <div className="text-4xl font-black text-yellow-400 mb-4">"</div>
              <blockquote className="font-bold text-lg text-black italic mb-4">
                EL DISEÑO NO ES SOLO CÓMO SE VE. 
                EL DISEÑO ES CÓMO FUNCIONA.
              </blockquote>
              <cite className="font-black uppercase text-sm text-gray-600">— STEVE JOBS</cite>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className={`text-center mt-20 transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-yellow-400 border-8 border-black p-6 transform -rotate-1 inline-block">
            <p className="font-black text-black uppercase">
              © 2024 PORTFOLIO. HECHO CON ❤️ Y MUCHO CAFÉ.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}