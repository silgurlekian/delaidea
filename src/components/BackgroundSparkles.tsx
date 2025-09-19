import React, { useEffect, useRef } from 'react';

export function BackgroundSparkles(): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Update CSS variables for magnetic effects
      containerRef.current.style.setProperty('--mouse-x', `${x / 50}px`);
      containerRef.current.style.setProperty('--mouse-y', `${y / 50}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Large morphing blobs - More subtle */}
      <div className="absolute top-20 left-10 w-96 h-96 animate-morphing-blob opacity-30"
           style={{ 
             background: 'radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, rgba(139, 92, 246, 0.05) 50%, transparent 70%)',
             filter: 'blur(25px)'
           }} />
      
      <div className="absolute top-1/3 right-20 w-80 h-80 animate-morphing-blob opacity-25" 
           style={{ 
             background: 'radial-gradient(circle, rgba(236, 72, 153, 0.06) 0%, rgba(245, 158, 11, 0.04) 50%, transparent 70%)',
             filter: 'blur(30px)',
             animationDelay: '7s'
           }} />
      
      <div className="absolute bottom-32 left-1/4 w-72 h-72 animate-morphing-blob opacity-28"
           style={{ 
             background: 'radial-gradient(circle, rgba(59, 130, 246, 0.07) 0%, rgba(16, 185, 129, 0.05) 50%, transparent 70%)',
             filter: 'blur(28px)',
             animationDelay: '14s'
           }} />

      {/* Interactive floating particles */}
      <div className="absolute top-40 left-1/3 w-3 h-3 bg-primary/40 rounded-full animate-particle-float magnetic-element" />
      <div className="absolute top-96 right-1/4 w-2 h-2 rounded-full animate-particle-float magnetic-element"
           style={{ 
             backgroundColor: 'rgba(236, 72, 153, 0.5)',
             animationDelay: '2s'
           }} />
      <div className="absolute bottom-1/2 left-1/2 w-4 h-4 rounded-full animate-particle-float magnetic-element"
           style={{ 
             backgroundColor: 'rgba(59, 130, 246, 0.4)', 
             animationDelay: '4s'
           }} />
      <div className="absolute top-1/2 left-20 w-2.5 h-2.5 rounded-full animate-particle-float magnetic-element"
           style={{ 
             backgroundColor: 'rgba(16, 185, 129, 0.45)',
             animationDelay: '1s'
           }} />
      <div className="absolute bottom-40 right-32 w-3.5 h-3.5 rounded-full animate-particle-float magnetic-element"
           style={{ 
             backgroundColor: 'rgba(245, 158, 11, 0.4)',
             animationDelay: '3s'
           }} />

      {/* Sparkling dots with glow */}
      <div className="absolute top-24 right-1/3 w-2 h-2 bg-primary/60 rounded-full animate-sparkle animate-interactive-glow" />
      <div className="absolute bottom-24 left-32 w-1.5 h-1.5 rounded-full animate-sparkle animate-interactive-glow"
           style={{ 
             backgroundColor: 'rgba(139, 92, 246, 0.6)',
             animationDelay: '1.5s'
           }} />
      <div className="absolute top-80 right-16 w-2.5 h-2.5 rounded-full animate-sparkle animate-interactive-glow"
           style={{ 
             backgroundColor: 'rgba(236, 72, 153, 0.5)',
             animationDelay: '2.8s'
           }} />

      {/* Geometric shapes with rotation */}
      <div className="absolute top-32 right-1/4 w-5 h-5 border-2 border-primary/30 rotate-45 animate-float magnetic-element" />
      <div className="absolute bottom-64 left-24 w-6 h-6 border-2 rotate-12 animate-float magnetic-element"
           style={{ 
             borderColor: 'rgba(236, 72, 153, 0.25)',
             animationDelay: '3s'
           }} />
      <div className="absolute top-2/3 right-20 w-4 h-4 border-2 rotate-45 animate-float magnetic-element"
           style={{ 
             borderColor: 'rgba(59, 130, 246, 0.3)',
             animationDelay: '1.5s'
           }} />
      <div className="absolute bottom-1/4 left-1/3 w-7 h-7 border-2 rotate-12 animate-float magnetic-element"
           style={{ 
             borderColor: 'rgba(16, 185, 129, 0.28)',
             animationDelay: '4s'
           }} />

      {/* Subtle grid overlay with interaction */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none">
        <div 
          className="w-full h-full transition-opacity duration-300"
          style={{
            backgroundImage: `
              radial-gradient(circle at 1px 1px, rgba(99, 102, 241, 0.15) 1px, transparent 0)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Ambient light effects */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-accent/10 to-transparent pointer-events-none" />
      
      {/* Corner accent gradients */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/8 via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-accent/10 via-transparent to-transparent pointer-events-none" />
    </div>
  );
}