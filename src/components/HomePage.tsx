import React from 'react';
import { Hero } from './Hero';
import { Projects } from './Projects';
import { Contact } from './Contact';

export function HomePage() {
  return (
    <main className="relative">
      {/* Hero Section */}
      <Hero />
      
      {/* Projects Section */}
      <Projects />
      
      {/* Contact Section */}
      <Contact />
    </main>
  );
}