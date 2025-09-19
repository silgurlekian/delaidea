import React, { useEffect, useRef } from 'react';

export function Background() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent): void => {
      const elements = document.querySelectorAll('.neo-floating-element');
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / 20;
        const y = (e.clientY - rect.top - rect.height / 2) / 20;
        
        (element as HTMLElement).style.transform = `translate(${x}px, ${y}px) rotate(${x}deg)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      
      {/* Geometric Shapes */}
      
      <div className="neo-floating-element absolute top-40 right-20 w-12 h-12 bg-red-500 opacity-50" 
           style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
      
      <div className="neo-floating-element absolute bottom-32 left-1/4 w-20 h-20 bg-green-400 border-4 border-black rounded-full opacity-40" />
      
      <div className="neo-floating-element absolute top-1/3 right-1/4 w-14 h-14 bg-blue-500 opacity-45 transform rotate-12" 
           style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 60%, 80% 100%, 20% 100%, 0% 60%)' }} />
      
      <div className="neo-floating-element absolute bottom-20 right-16 w-10 h-10 bg-purple-500 border-4 border-black transform -rotate-45 opacity-55" />
      
      <div className="neo-floating-element absolute top-2/3 left-16 w-8 h-8 bg-orange-400 opacity-50" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="w-full h-full bg-black" style={{
          backgroundImage: `
            linear-gradient(black 2px, transparent 2px),
            linear-gradient(90deg, black 2px, transparent 2px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Dots Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle, black 2px, transparent 2px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Animated Lines */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-black/10 to-transparent animate-pulse" />
      <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-black/10 to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-black/10 to-transparent animate-pulse" style={{ animationDelay: '2s' }} />
      
      <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-black/10 to-transparent animate-pulse" style={{ animationDelay: '0.5s' }} />
      <div className="absolute top-2/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-black/10 to-transparent animate-pulse" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-black/10 to-transparent animate-pulse" style={{ animationDelay: '2.5s' }} />
    </div>
  );
}