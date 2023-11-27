import styled from 'styled-components';
import gsap from 'gsap';
import { Link } from 'react-router-dom';
import { Power4 } from 'gsap/all';
import { useRef, useEffect } from 'react';
import TypewriterEffect from '../utils/writer';


const NavbarBase = styled.div `
  position: fixed;
  top: 0;
  width: 100%;
  height: auto;
  padding: 40px 9%;
`
const NavbarConfig = styled.nav `
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: var(--color-white);

  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;


    &:nth-child(2) {
      gap: 0 43px;
    }
    &:nth-child(3) {
      a {
        text-decoration: none;
        font-size: 20px;
        color: var(--color-white);
        font-weight: 500;
        position: relative;
        transition: all 0.1s linear;


        &:hover {
          &::before {
            width: 100%;
          }
        }

        &::before {
          content: "";
          position: absolute;
          bottom: -2px;
          left: 1px;
          width: 3px;
          height: 1.3px;
          background-color: var(--color-white);
          transition: all 0.3s linear;
        }
      }
    }
    }
  }
  `
  const RouteItem = styled.a `
    text-decoration: none;
    font-weight: 600;
    color: var(--color-white);
    font-size: 20px;
    padding: 10px 0;
    transition: all 0.3s ease-out;

    &:hover {
      opacity: 1;

      &:not(:hover) {
        opacity: 0.6;
      }
    }
  `
    const LogoItem = styled.div `
      span {
        font-size: 28px;
        font-weight: 600;
      }
    `



const Navbar = () => {

  const links = [
    { name: 'projects', path: '/projects' },
    { name: 'services', path: '/services' },
    { name: 'careers', path: '/careers' },
  ];

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
    <NavbarBase>
    <NavbarConfig>
      <LogoItem ref={textRef} className="text">
        <h2>Zenith Studio</h2>
      </LogoItem>
      <div>
       {links.map((link) => (
        <RouteItem key={link.path} href={link.path}       
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
          <TypewriterEffect text={link.name}/>
        </RouteItem>
      ))}
      </div>
      <div>
        <Link to='/careers'
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}
        ><TypewriterEffect text='talk us'/></Link>
      </div>
    </NavbarConfig>
    </NavbarBase>
  )
}

export default Navbar