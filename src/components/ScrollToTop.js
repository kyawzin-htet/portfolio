import React, { useLayoutEffect, useRef } from 'react'
import { useWindowScroll } from 'react-use';
import styled from 'styled-components'

const Up = styled.div`
 width: 3rem;
 height: 3rem;
 box-sizing: border-box;
 margin: 0;
 padding: 0;
 color: ${props => props.theme.secondaryText};
 background-color: #0F0F0F;

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
 &:hover{
    transform: scale(1.1);
 }
 &:active{
    transform: scale(0.9);
 }

 @media (max-width: 64em){
  width: 2rem;
  height: 2rem;
  font-size: ${(props) => props.theme.fontlg};
  right: 0.5rem;
  bottom: 0.5rem;
}
`

const ScrollToTop = () => {

    const ref = useRef(null);
    const {y} = useWindowScroll();

    const scrollToTop = () => {
        let element = document.getElementById("home");
    
        element.scrollIntoView({
          behavior:'smooth',
          block: 'start',
          inline: 'nearest'
        })
      }

    useLayoutEffect(() =>{
        if(y > 200){
            ref.current.style.display = "flex"
        }else{
            ref.current.style.display = "none"
        }
    },[y])

  return (
    <Up ref={ref} onClick={() => scrollToTop()}>
        &#x2191;
    </Up>
  )
}

export default ScrollToTop
