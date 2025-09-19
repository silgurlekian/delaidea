import React from 'react';
import { NeoBrutalistHero } from './NeoBrutalistHero';
import { NeoBrutalistProjects } from './NeoBrutalistProjects';
import { NeoBrutalistContact } from './NeoBrutalistContact';

export function NeoBrutalistHomePage() {
  return (
    <main className="relative">
      {/* Hero Section */}
      <NeoBrutalistHero />
      
      {/* Projects Section */}
      <NeoBrutalistProjects />
      
      {/* Contact Section */}
      <NeoBrutalistContact />
    </main>
  );
}