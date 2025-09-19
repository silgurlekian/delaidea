import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { RouteProvider } from './contexts/RouteContext';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { ProjectDetailPage } from './components/ProjectDetailPage';
import { Background } from './components/Background';

import { useRoute } from './contexts/RouteContext';

function AppContent(): JSX.Element {
  const { currentRoute } = useRoute();

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: '#ffffff' }}>
      {/* NeoBrutalist background */}
      <Background />
      
      {/* NeoBrutalist header */}
      <Header />

      {/* Route-based content */}
      <div className="relative z-10">
        {currentRoute === 'home' && <HomePage />}
        {currentRoute === 'project-detail' && <ProjectDetailPage />}
      </div>
    </div>
  );
}

export default function App(): JSX.Element {
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