import React, { useLayoutEffect, useRef } from 'react'
import { useWindowScroll } from 'react-use';
import styled from 'styled-components'

const Div = styled.div`
 width: 3rem;
 height: 3rem;
 box-sizing: border-box;
 margin: 0;
 padding: 0;
 color: ${(props) => props.theme.secondaryText};
 border: 1px solid  ${(props) => props.theme.secondaryText};
 font-size: ${(props) => props.theme.fontxl};
 position: fixed;
 right: 1rem;
 bottom: 1rem;
 cursor: pointer;
 display: flex;
 justify-content: center;
 align-items: center;
 border-radius: 50%;
 z-index: 100;

 transition: all 0.2s ease;
 &:hover {
    transform: scale(1.1);
 }
 &:active {
    transform: scale(0.9);
 }

 @media (max-width: 64em) {
  width: 2rem;
  height: 2rem;
  font-size: ${(props) => props.theme.fontlg};
  right: 0.5rem;
  bottom: 0.5rem;
 }
`

// Animated SVG Component
const AnimatedArrow = styled.svg`
  width: 1.5rem;
  height: 1.5rem;
  stroke: #fff;
  stroke-width: 2;
  fill: none;

  // Hover animation
  ${Div}:hover & {
    transform: translateY(-5px);
    transition: transform 0.2s ease-in-out;
  }
`

const ScrollToTop = () => {
  const ref = useRef(null);
  const { y } = useWindowScroll();

  const scrollToTop = () => {
    let element = document.getElementById('home');
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  };

  useLayoutEffect(() => {
    if (y > 200) {
      ref.current.style.display = 'flex';
    } else {
      ref.current.style.display = 'none';
    }
  }, [y]);

  return (
    <Div ref={ref} onClick={() => scrollToTop()}>
      <AnimatedArrow viewBox="0 0 24 24">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </AnimatedArrow>
    </Div>
  );
};

export default ScrollToTop;
