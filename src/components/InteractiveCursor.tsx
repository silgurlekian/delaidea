import React, { useEffect, useRef, useState } from 'react';

export function InteractiveCursor(): JSX.Element {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState('');

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    
    if (!cursor || !follower) return;

    const moveCursor = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      
      cursor.style.left = `${x}px`;
      cursor.style.top = `${y}px`;
      
      // Follower has a slight delay
      setTimeout(() => {
        follower.style.left = `${x}px`;
        follower.style.top = `${y}px`;
      }, 100);
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.matches('button, a, [role="button"], .interactive-elem')) {
        setIsHovering(true);
        const text = target.getAttribute('data-cursor-text');
        if (text) setCursorText(text);
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.matches('button, a, [role="button"], .interactive-elem')) {
        setIsHovering(false);
        setCursorText('');
      }
    };

    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <div
        ref={cursorRef}
        className={`fixed w-4 h-4 pointer-events-none z-50 mix-blend-difference transition-all duration-200 ${
          isHovering ? 'scale-150 bg-white' : 'scale-100 bg-primary'
        }`}
        style={{
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />
      
      {/* Follower */}
      <div
        ref={followerRef}
        className={`fixed w-8 h-8 pointer-events-none z-40 border-2 transition-all duration-300 ${
          isHovering 
            ? 'scale-200 border-primary/50 bg-primary/10' 
            : 'scale-100 border-primary/30 bg-transparent'
        }`}
        style={{
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Cursor text */}
      {cursorText && (
        <div
          className="fixed pointer-events-none z-50 bg-foreground text-background px-2 py-1 rounded text-sm whitespace-nowrap transition-opacity duration-200"
          style={{
            left: `${cursorRef.current?.offsetLeft || 0}px`,
            top: `${(cursorRef.current?.offsetTop || 0) - 40}px`,
            transform: 'translate(-50%, 0)',
          }}
        >
          {cursorText}
        </div>
      )}
    </>
  );
}