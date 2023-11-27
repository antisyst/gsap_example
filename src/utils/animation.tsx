import { useRef, useEffect, ReactNode } from 'react';
import gsap, { Power4 } from 'gsap';

interface TextAnimationProps {
  children: ReactNode;
}

const TextAnimation = ({ children }: TextAnimationProps) => {

  const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (textRef.current) {
        const chars = textRef.current.textContent?.split('');
        if (chars) {
          textRef.current.innerHTML = '';
          chars.forEach((char, index) => {
            const span = document.createElement('span');
            span.innerHTML = char === ' ' ? '&nbsp;' : char;
            textRef.current?.appendChild(span);
            gsap.from(span, {
              opacity: 0,
              y: 20,
              rotationX: 180,
              duration: 1,
              ease: Power4.easeOut,
              delay: index * 0.05,
            });
          });
        }
      }
    }, [textRef]);

  return <div ref={textRef} className="text">{children}</div>;
};

export default TextAnimation;
