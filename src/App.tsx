import React, { useEffect } from 'react';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { RouteProvider, useRoute } from './contexts/RouteContext';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { ProjectDetailPage } from './components/ProjectDetailPage';
import { Background } from './components/Background';

function AppContent() {
  const { currentRoute } = useRoute();
  const { t } = useLanguage();

  useEffect(() => {
    document.title = t('hero.title');
  }, [t]);

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: '#ffffff' }}>
      <Background />
      <Header />
      <div className="relative z-10">
        {currentRoute === 'home' && <HomePage />}
        {currentRoute === 'project-detail' && <ProjectDetailPage />}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <RouteProvider>
          <AppContent />
        </RouteProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}