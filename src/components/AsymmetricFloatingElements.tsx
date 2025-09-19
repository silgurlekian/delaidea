import React, { useEffect, useState } from 'react';
import { Triangle, Circle, Square, Star, Diamond, Hexagon } from 'lucide-react';

interface FloatingElement {
  id: number;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  size: string;
  position: { x: number; y: number };
  rotation: number;
  duration: number;
  delay: number;
}

export function AsymmetricFloatingElements(): JSX.Element {
  const [elements, setElements] = useState<FloatingElement[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const icons = [Triangle, Circle, Square, Star, Diamond, Hexagon];
    const colors = [
      'text-[var(--vibrant-purple)]',
      'text-[var(--vibrant-pink)]',
      'text-[var(--vibrant-blue)]',
      'text-[var(--vibrant-green)]',
      'text-[var(--vibrant-orange)]'
    ];
    const sizes = ['h-4 w-4', 'h-6 w-6', 'h-8 w-8', 'h-3 w-3', 'h-5 w-5'];

    const newElements: FloatingElement[] = Array.from({ length: 15 }, (_, index) => ({
      id: index,
      icon: icons[Math.floor(Math.random() * icons.length)],
      color: colors[Math.floor(Math.random() * colors.length)],
      size: sizes[Math.floor(Math.random() * sizes.length)],
      position: {
        x: Math.random() * 100,
        y: Math.random() * 100
      },
      rotation: Math.random() * 360,
      duration: 10 + Math.random() * 20,
      delay: Math.random() * 5
    }));

    setElements(newElements);

    const handleMouseMove = (e: MouseEvent): void => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map((element) => {
        const Icon = element.icon;
        const parallaxX = (mousePosition.x - window.innerWidth / 2) * 0.01;
        const parallaxY = (mousePosition.y - window.innerHeight / 2) * 0.01;
        
        return (
          <div
            key={element.id}
            className="absolute opacity-20 hover:opacity-40 transition-opacity duration-500"
            style={{
              left: `${element.position.x}%`,
              top: `${element.position.y}%`,
              transform: `translate(${parallaxX}px, ${parallaxY}px) rotate(${element.rotation}deg)`,
              animationDelay: `${element.delay}s`,
              animationDuration: `${element.duration}s`
            }}
          >
            <Icon 
              className={`${element.size} ${element.color} animate-floating-asymmetric`}
            />
          </div>
        );
      })}

      {/* Geometric shapes with CSS */}
      <div className="absolute top-1/4 left-1/4 w-8 h-8 border-2 border-[var(--vibrant-purple)]/30 rotate-45 animate-spin-slow opacity-20" />
      <div className="absolute top-1/3 right-1/3 w-12 h-12 border-2 border-[var(--vibrant-blue)]/30 rounded-full animate-pulse opacity-20" />
      <div className="absolute bottom-1/4 left-1/3 w-6 h-6 bg-[var(--vibrant-green)]/20 transform rotate-12 animate-bounce-slow opacity-20" />
      <div className="absolute bottom-1/3 right-1/4 w-10 h-10 border-2 border-[var(--vibrant-orange)]/30 clip-polygon animate-spin-reverse opacity-20" />

      {/* Asymmetric gradient blobs */}
      <div 
        className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-[var(--vibrant-purple)]/5 to-[var(--vibrant-pink)]/5 rounded-full blur-3xl animate-float-blob opacity-30"
        style={{ 
          clipPath: 'ellipse(60% 40% at 30% 70%)',
          animationDelay: '0s'
        }}
      />
      <div 
        className="absolute top-1/2 right-0 w-80 h-48 bg-gradient-to-br from-[var(--vibrant-blue)]/5 to-[var(--vibrant-green)]/5 rounded-full blur-3xl animate-float-blob opacity-30"
        style={{ 
          clipPath: 'ellipse(40% 60% at 70% 30%)',
          animationDelay: '2s'
        }}
      />
      <div 
        className="absolute bottom-0 left-1/2 w-72 h-72 bg-gradient-to-br from-[var(--vibrant-green)]/5 to-[var(--vibrant-orange)]/5 rounded-full blur-3xl animate-float-blob opacity-30"
        style={{ 
          clipPath: 'ellipse(50% 70% at 50% 20%)',
          animationDelay: '4s'
        }}
      />

      <style jsx>{`
        @keyframes floating-asymmetric {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(0deg) scale(1);
          }
          25% {
            transform: translateY(-10px) translateX(5px) rotate(90deg) scale(1.1);
          }
          50% {
            transform: translateY(-20px) translateX(-5px) rotate(180deg) scale(0.9);
          }
          75% {
            transform: translateY(-10px) translateX(10px) rotate(270deg) scale(1.05);
          }
        }

        @keyframes float-blob {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(0deg) scale(1);
          }
          33% {
            transform: translateY(-30px) translateX(20px) rotate(120deg) scale(1.1);
          }
          66% {
            transform: translateY(20px) translateX(-15px) rotate(240deg) scale(0.9);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0) rotate(12deg);
          }
          50% {
            transform: translateY(-10px) rotate(12deg);
          }
        }

        .animate-floating-asymmetric {
          animation: floating-asymmetric 15s ease-in-out infinite;
        }

        .animate-float-blob {
          animation: float-blob 20s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin-reverse 15s linear infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        .clip-polygon {
          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        }
      `}</style>
    </div>
  );
}