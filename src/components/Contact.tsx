import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Mail, MapPin, Linkedin, Instagram, ExternalLink, Copy, Check, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Contact() {
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
      value: 'hola@delaidea.com',
      href: 'mailto:hola@delaidea.com',
      color: 'bg-yellow-400',
      hoverColor: 'hover:bg-red-500'
    },
    {
      id: 'location',
      icon: MapPin,
      label: t('contact.location'),
      value: 'BUENOS AIRES, ARGENTINA',
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
      href: 'https://linkedin.com/company/delaidea/',
      color: 'bg-blue-500',
      hoverColor: 'hover:bg-yellow-400'
    },
    {
      id: 'instagram',
      icon: Instagram,
      label: 'INSTAGRAM',
      href: 'https://www.instagram.com/delaideacom/',
      color: 'bg-black',
      hoverColor: 'hover:bg-green-400'
    }
  ];

  return (
    <section id="contact" className="pt-32 pb-20 px-6 lg:px-8 relative bg-black">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>

          <h2 className="space-y-4">
            <div className="text-6xl md:text-8xl lg:text-9xl font-black leading-none">
              <span className="text-yellow-400 bg-white px-4 py-2 transform -rotate-2 inline-block">
                {t('contact.title').toUpperCase()}
              </span>
            </div>
            <div className="text-2xl md:text-3xl font-bold text-white ml-8 transform rotate-1">
              <span className="bg-gradient-to-r from-green-400 to-blue-400 text-black px-3 py-1 inline-block">
                {t('contact.subtitle').toUpperCase()}
              </span>
            </div>
          </h2>
        </div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-2 gap-16">

          {/* Left Column - Contact Info */}
          <div className={`space-y-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>

            {/* Contact Methods */}
            <div className="bg-white border-8 border-black p-8">
              <h3 className="font-black text-2xl mb-8 uppercase">{t('contact.info')}</h3>

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


          </div>

          {/* Right Column - CTA */}
          <div className={`space-y-8 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}>

            {/* Social Links */}
            <div className="bg-yellow-400 border-8 border-black p-8">
              <h3 className="font-black text-2xl mb-6 uppercase text-black">{t('contact.social')}</h3>
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
        </div>

        {/* Footer */}
        <div className={`text-center mt-20 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
          <div className="bg-yellow-400 border-8 border-black p-6 transform -rotate-1 inline-block">
            <p className="font-black text-black uppercase">
              {t('footer.text').toUpperCase()}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}