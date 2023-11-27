import { useRef, useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { Power4 } from 'gsap/all';
import { HiArrowUpRight } from "react-icons/hi2";
import ContentSecond from '../utils/content';
import TypewriterEffect from '../utils/writer';
import BackgroundVideo from '../assets/background.mp4';

const HeroConfig = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 100vh;
`;

const BackGroundBase = styled.div`
    position: absolute;
    right: 50px;
    height: auto;
    top: 100px;
    width: 800px;
    z-index: -4;
    transition: all 0.3s linear;

    video {
        width: 100%;
    }
`;
const HeroContent = styled.div `
    position: absolute;
    top: 32%;
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

    div {
        &:nth-child(2) {
            position: absolute;
        }
    }
`
const TargetHeroContent = styled.p `
    top: 55%;
    position: absolute;
    width: 40%;
    font-weight: 400;
    left: 15%;
    color: var(--color-white);
    font-size: 20px;
`
const ButtonBase = styled.a `
  width: 160px;
  height: 160px;
  backdrop-filter: blur(7px);
  position: absolute;
  bottom: 17%;
  border-radius: 50%;
  border: 1.4px solid var(--color-white);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--color-white);
  background: none;
  transition: all 0.2s linear;
  justify-content: center;

  p {
    margin-top: 7px;
    font-weight: 500;
  }

  svg {
    transition: all 0.2s linear;
    font-size: 35px;
  }

  &:hover {
    transform: scale(1.15);
    background: var(--color-white);
    color: var(--color-black);

    svg {
        font-size: 38px;
    }
  }
`

const Header = () => {

    const handleMouseEnter = () => {
        gsap.to('.cursor', { scale: 1.5, duration: 0.1 });
      };
    
      const handleMouseLeave = () => {
        gsap.to('.cursor', { scale: 1, duration: 0.1 });
      };

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
        <HeroConfig>
            <HeroContent ref={textRef} className="text">
               <h1>Infinite Possibilities</h1><br />
            </HeroContent>
            <ContentSecond/>
            <TargetHeroContent>
              <TypewriterEffect text='your ideas are the blueprint, and together we build the extraordinary.'/>
              <TypewriterEffect text='we believe in collaborative partnerships that propel your vision to new heights.'/>
            </TargetHeroContent>
            <ButtonBase  onMouseEnter={handleMouseEnter}
                         onMouseLeave={handleMouseLeave}>
                <HiArrowUpRight/>
                <p>discover works</p>
            </ButtonBase>
            <BackGroundBase>
                <video src={BackgroundVideo} autoPlay loop muted playsInline />
            </BackGroundBase>
        </HeroConfig>
    );
};

export default Header;
