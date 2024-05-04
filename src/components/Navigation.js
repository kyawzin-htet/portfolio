import React, { useLayoutEffect, useRef } from 'react'
import { useWindowScroll } from 'react-use'
import styled from 'styled-components'

const Section = styled.section`
  position: fixed;
  bottom: 0;
  transition: all 0.3s ease;
  z-index: 6;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 64em) {
    display: none;
  }
`

const Navbar = styled.nav`
    position: relative;
    width: 20%;
    height: auto;
    border-radius: 0.3rem;
    background-color: rgba(0, 0, 0, 0.3);
    border: 1px solid  ${(props) => props.theme.secondaryText};
    color: ${(props) => props.theme.text};
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    padding: 1rem 0.5rem;
    margin-bottom: 0.5rem;
    @media (max-width: 64em) {
      display:none;
    }
`

const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
`

const MenuItem = styled.li`
  margin: 0 1rem;
  color: ${props => props.theme.text};
  cursor: pointer;

  &::after{
    content: "";
    display: block;
    width: 0%;
    height: 2px;
    background-color: ${props => props.theme.secondaryText};
    transition: width 0.3s ease;
  }

  &:hover::after{
    width: 100%;
  }
`

const Divider = styled.span`
  display: flex;
  width: 0.05rem;
  height: 2vh;
  background: ${(props) => props.theme.secondaryText};
  transform: rotate(25deg);
`;

const Navigation = () => {

  const scrollTo = (id) => {
    let element = document.getElementById(id);

    element.scrollIntoView({
      behavior:'smooth',
      block: 'start',
      inline: 'nearest'
    })
  }

  const ref = useRef(null);
  const {y} = useWindowScroll();

  useLayoutEffect(() =>{
      if(y > 200){
          ref.current.style.display = "flex"
      }else{
          ref.current.style.display = "none"
      }
  },[y])
  return (
    <Section id="navigation" ref={ref}>
      <Navbar>
        <Menu>
          <MenuItem onClick={() => scrollTo('home')}>Home</MenuItem>
          <Divider />
          <MenuItem onClick={() => scrollTo('about')}>Me</MenuItem>
          <Divider />
          <MenuItem onClick={() => scrollTo('experience')}>Exp</MenuItem>
          <Divider />
          <MenuItem onClick={() => scrollTo('projects')}>Works</MenuItem>
        </Menu>
      </Navbar>
    </Section>
  )
}

export default Navigation;
