import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { RouteProvider } from './contexts/RouteContext';
import { NeoBrutalistHeader } from './components/NeoBrutalistHeader';
import { NeoBrutalistHomePage } from './components/NeoBrutalistHomePage';
import { NeoBrutalistProjectDetailPage } from './components/NeoBrutalistProjectDetailPage';
import { NeoBrutalistBackground } from './components/NeoBrutalistBackground';

import { useRoute } from './contexts/RouteContext';

function AppContent(): JSX.Element {
  const { currentRoute } = useRoute();

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: '#ffffff' }}>
      {/* NeoBrutalist background */}
      <NeoBrutalistBackground />
      
      {/* NeoBrutalist header */}
      <NeoBrutalistHeader />

      {/* Route-based content */}
      <div className="relative z-10">
        {currentRoute === 'home' && <NeoBrutalistHomePage />}
        {currentRoute === 'project-detail' && <NeoBrutalistProjectDetailPage />}
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