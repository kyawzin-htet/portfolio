import React, { useLayoutEffect, useRef } from 'react'
import styled from 'styled-components'
import CoverVideo from '../components/CoverVideo'
import Logo from '../components/Logo'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const Section = styled.section`
  min-height: ${props => `calc(100vh - ${props.theme.navHeight})`};
  width: 100%;
  overflow: hidden;
  position: relative;
  color: #fff;
`
const Home = () => {

  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(() =>{

    let element = ref.current;

    ScrollTrigger.create({
      trigger: element,
      start: 'top top',
      end: 'bottom top',
      pin: true,
      pinSpacing: false,
      scrub: true,
    })
    return () =>{
      ScrollTrigger.kill();
    };
  }, [])

  return (
    <Section id="home">
        <div >
          <CoverVideo />
          <Logo />  
        </div>
    </Section>
  )
}

export default Home
