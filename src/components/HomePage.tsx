import React from 'react';
import { MinimalistHero } from './MinimalistHero';
import { MinimalistProjects } from './MinimalistProjects';
import { MinimalistContact } from './MinimalistContact';

export function HomePage(): JSX.Element {
  return (
    <main>
      {/* Hero Section */}
      <MinimalistHero />

      {/* Projects Section */}
      <MinimalistProjects />

      {/* Contact Section */}
      <MinimalistContact />
    </main>
  );
}