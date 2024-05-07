import React from 'react'
import styled from 'styled-components'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'
import Title from '../components/Title'

const Section = styled.section`
  min-height:100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  color: ${props => props.theme.text};
  align-items: center;
  position: relative;
  border-radius: 1rem 1rem 0rem 0rem;
  border-top: 2px solid ${props => props.theme.secondaryText};
  background-color: #0d0d0d;
  flex-direction: column;
`
const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`
const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`


const Download = styled.div`
  width: 90%;
  display: flex;
  justify-content: flex-end;
  margin: 1rem;
`


const About = () => {

  const text = "I'm a passionate full-stack developer with over 4 years of experience navigating the ever-evolving landscape of web development.My journey began with a deep dive into the MERN stack, where I honed my skills in MongoDB, Express.js, React, and Node.js, allowing me to build robust and scalable web applications.But my passion for learning doesn't stop there. I thrive on the challenge of picking up new frameworks and languages, and I'm comfortable working on both the front-end and back-end, as well as venturing into the world of mobile app development.This versatility and adaptability empower me to approach any project with confidence and enthusiasm.";

  return (
    <Section id="about"> 
      <Container>

        <Title title="A Little About Me" />

        <Content>         
            <Paragraph paragraph={text}/>             
        </Content>
      </Container>

        <Download
          data-aos="fade-up"
          data-aos-duration="2000"
          // data-aos-anchor-placement="center-top"
        >
          <Button
            text="Download Resume"
            href="https://flowcv.com/resume/i2uq3gtgdo"
          />
        </Download>
    </Section>
  )
}

export default About
