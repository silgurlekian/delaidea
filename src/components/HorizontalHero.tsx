import React, { useEffect, useState } from 'react';
import { ChevronRight, ArrowDown } from 'lucide-react';
import { Button } from './ui/button';
import { useLanguage } from '../contexts/LanguageContext';

interface HorizontalHeroProps {
  isActive: boolean;
  onNext: () => void;
}

export function HorizontalHero({ isActive, onNext }: HorizontalHeroProps): JSX.Element {
  const { t } = useLanguage();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    if (isActive) {
      setMounted(true);
    }
  }, [isActive]);

  return (
    <div className="relative h-full flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        {/* Animated gradient orbs */}
        <div className={`absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-[var(--vibrant-purple)] to-[var(--vibrant-pink)] rounded-full opacity-20 blur-3xl transition-all duration-1000 ${
          isActive && mounted ? 'animate-pulse scale-110' : 'scale-75 opacity-10'
        }`} />
        <div className={`absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-[var(--vibrant-blue)] to-[var(--vibrant-green)] rounded-full opacity-20 blur-3xl transition-all duration-1000 delay-300 ${
          isActive && mounted ? 'animate-pulse scale-110' : 'scale-75 opacity-10'
        }`} />
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-[var(--vibrant-orange)] to-[var(--vibrant-pink)] rounded-full opacity-15 blur-3xl transition-all duration-1000 delay-500 ${
          isActive && mounted ? 'animate-pulse scale-110' : 'scale-75 opacity-5'
        }`} />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.1)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-30" />
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-8 text-center relative z-10">
        <div className="space-y-12">
          {/* Title with staggered animation */}
          <div className="space-y-8">
            <h1 className={`transition-all duration-1000 ${
              isActive && mounted 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}>
              <span className="block text-6xl sm:text-7xl lg:text-9xl font-bold tracking-tight bg-gradient-to-r from-[var(--vibrant-purple)] via-[var(--vibrant-pink)] to-[var(--vibrant-blue)] bg-clip-text text-transparent animate-gradient-x">
                {t('hero.title').split('.')[0]}
              </span>
              <span className={`block text-3xl sm:text-4xl lg:text-6xl font-medium mt-4 text-muted-foreground transition-all duration-1000 delay-300 ${
                isActive && mounted 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}>
                {t('hero.title').split('.')[1]}
              </span>
            </h1>
            
            <p className={`text-xl sm:text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-500 ${
              isActive && mounted 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}>
              {t('hero.subtitle')}
            </p>
          </div>

          {/* CTA Button */}
          <div className={`transition-all duration-1000 delay-700 ${
            isActive && mounted 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
            <Button
              onClick={onNext}
              size="lg"
              className="text-xl px-12 py-6 bg-gradient-to-r from-[var(--vibrant-purple)] to-[var(--vibrant-pink)] hover:from-[var(--vibrant-pink)] hover:to-[var(--vibrant-purple)] text-white border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 group rounded-full"
            >
              <span className="mr-3">{t('hero.cta')}</span>
              <ChevronRight className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation hint */}
      <div className={`absolute bottom-12 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${
        isActive && mounted 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-4'
      }`}>
        <button
          onClick={onNext}
          className="flex flex-col items-center space-y-2 text-muted-foreground hover:text-[var(--vibrant-purple)] transition-colors group"
          aria-label="Scroll to next section"
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <div className="flex space-x-1">
            <ArrowDown className="h-4 w-4 animate-bounce group-hover:animate-none" />
            <ChevronRight className="h-4 w-4 opacity-60" />
          </div>
        </button>
      </div>

      {/* Floating elements */}
      {isActive && mounted && (
        <>
          <div className="absolute top-1/4 left-12 w-4 h-4 bg-gradient-to-r from-[var(--vibrant-purple)] to-[var(--vibrant-pink)] rounded-full opacity-60 animate-float" style={{ animationDelay: '0s' }} />
          <div className="absolute top-1/3 right-16 w-3 h-3 bg-gradient-to-r from-[var(--vibrant-blue)] to-[var(--vibrant-green)] rounded-full opacity-60 animate-float" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-gradient-to-r from-[var(--vibrant-orange)] to-[var(--vibrant-pink)] rounded-full opacity-60 animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-1/3 right-1/4 w-5 h-5 bg-gradient-to-r from-[var(--vibrant-green)] to-[var(--vibrant-blue)] rounded-full opacity-40 animate-float" style={{ animationDelay: '1.5s' }} />
        </>
      )}

      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        .animate-gradient-x {
          animation: gradient-x 6s ease infinite;
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}