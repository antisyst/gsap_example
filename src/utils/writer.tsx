import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const TypewriterEffect: React.FC<{ text: string }> = ({ text }) => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      const chars = text.split('');
      textRef.current.innerHTML = ''; 

      chars.forEach((char, index) => {
        const delay = index * 0.05;
        const span = document.createElement('span');
        span.textContent = char;
        span.style.opacity = '0';
        textRef.current?.appendChild(span); 

        gsap.to(span, {
          opacity: 1,
          duration: 0.3,
          ease: 'power2.inOut',
          delay,
        });
      });
    }
  }, [text]);

  return <div ref={textRef} style={{ whiteSpace: 'pre' }} />;
};

export default TypewriterEffect;
