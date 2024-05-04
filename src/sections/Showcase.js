import React, { useRef } from 'react'
import styled, { keyframes } from 'styled-components'

const Section = styled.section`
  min-height: 30vh;
  width: 100%;
  position: ralative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  border-radius: 1rem;
`

const Title = styled.div`
  width: 100%;
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};
  padding: 0rem 0rem 2rem 1rem;
  @media (max-width: 64em){
    width: 100%;
    display: flex;
    justify-content: flex-start;
    font-size: ${(props) => props.theme.fontxl};
    margin: 1.5rem 1rem;
  }
`

const move = keyframes`
  0%{ transform: translateX(50%)};
  100%{ transform: translateX(-50%)};
`

const Row = styled.div`
  white-space: nowrap;
  box-sizing: content-box;
  margin: 1rem 0;
  display: flex;
  animation: ${move} 20s linear infinite ${props => props.direction};
`

const ToolContainer = styled.div`
  width: 10rem;
  margin: 0 1rem;
  border: 1px solid ${props => props.theme.secondaryText};
  border-radius: 5px;
  cursor: pointer;
  padding: 1rem;
  display: flex;
  justify-content: center;
  color: ${props => props.theme.secondaryText}
`

const Language = ({tool, passRef}) =>{

  let play = (e) =>{
    passRef.current.style.animationPlayState = 'running';
  }

  let pause = (e) =>{
    passRef.current.style.animationPlayState = 'paused';
  }

  return(
    <ToolContainer onMouseMove={e => pause(e)} onMouseOut={e => play(e)} >
     {tool}
    </ToolContainer>
  )
}

const Showcase = () => {

  const Row1Ref = useRef(null);
  const Row2Ref = useRef(null);
  
  return (
    <Section id="showcase">
      <Title
         data-aos="fade-up"
         data-aos-duration="2000"
      >
       &#123; Tools &#125;
      </Title>
      <Row direction="none" ref={Row1Ref}>
        <Language tool="react" passRef={Row1Ref} />
        <Language tool="react" passRef={Row1Ref} />
        <Language tool="react" passRef={Row1Ref} />
        <Language tool="react" passRef={Row1Ref} />
        <Language tool="react" passRef={Row1Ref} />
      </Row>

      <Row direction="reverse" ref={Row2Ref}>
        <Language tool="react" passRef={Row2Ref} />
        <Language tool="react" passRef={Row2Ref} />
        <Language tool="react" passRef={Row2Ref} />
        <Language tool="react" passRef={Row2Ref} />
        <Language tool="react" passRef={Row2Ref} />
      </Row>
    </Section>
  )
}

export default Showcase
