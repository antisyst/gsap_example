import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import styled from 'styled-components';
import { Power4 } from 'gsap/all';

const SecondHeroContent = styled.div `
position: absolute;
top: 41%;
left: 8%;
color: var(--color-white);
display: flex;
align-items: center;
justify-content: center;
flex-direction: row;

span {
    font-size: calc(13px + 6.2vmin);
    font-weight: 600;
}
`

const ContentSecond = () => {


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

  return (
    <SecondHeroContent ref={textRef} className="text">
        <h1>One Code at a Time.</h1>
    </SecondHeroContent>
  )
}

export default ContentSecond;