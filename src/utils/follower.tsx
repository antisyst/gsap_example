import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const CursorFollower: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    if (cursor) {
      let isCursorMoving = false;

      document.addEventListener('mousemove', (e) => {
        isCursorMoving = true;
        gsap.to(cursor, {
          duration: 0.9,
          x: e.clientX,
          y: e.clientY,
          ease: 'power2.out',
        });
      });

      document.addEventListener('mouseleave', () => {
        isCursorMoving = false;
      });

      const stopCursor = () => {
        if (!isCursorMoving) {
          gsap.to(cursor, {
            duration: 0.3,
            x: cursor.getBoundingClientRect().left + window.scrollX,
            y: cursor.getBoundingClientRect().top + window.scrollY,
            ease: 'power2.out',
          });
        }
      };

      const stopCursorInterval = setInterval(stopCursor, 100);

      return () => {
        clearInterval(stopCursorInterval);
      };
    }
  }, []);

  return <div ref={cursorRef} className="cursor" />;
};

export default CursorFollower;
