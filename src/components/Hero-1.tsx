import { ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { useLanguage } from '../contexts/LanguageContext';

export function Hero(): JSX.Element {
  const { t } = useLanguage();

  const scrollToProjects = (): void => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight bg-gradient-to-r from-[var(--vibrant-purple)] via-[var(--vibrant-pink)] to-[var(--vibrant-blue)] bg-clip-text text-transparent animate-gradient-x">
              {t('hero.title')}
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              {t('hero.subtitle')}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="min-w-[220px] bg-gradient-to-r from-[var(--vibrant-purple)] to-[var(--vibrant-pink)] hover:from-[var(--vibrant-pink)] hover:to-[var(--vibrant-purple)] text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-lg py-6"
            >
              {t('hero.cta')}
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="pt-16">
            <button
              onClick={scrollToProjects}
              className="inline-flex flex-col items-center space-y-2 text-muted-foreground hover:text-foreground transition-colors group"
              aria-label={t('hero.cta')}
            >
              <span className="text-sm font-medium">{t('nav.projects')}</span>
              <ChevronDown className="h-5 w-5 animate-bounce group-hover:animate-none transition-colors" />
            </button>
          </div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-[var(--vibrant-purple)] to-[var(--vibrant-pink)] rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-[var(--vibrant-blue)] to-[var(--vibrant-green)] rounded-full opacity-20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-[var(--vibrant-orange)] to-[var(--vibrant-pink)] rounded-full opacity-10 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      </div>

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
          animation: gradient-x 4s ease infinite;
        }
      `}</style>
    </section>
  );
}