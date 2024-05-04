import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import styled from 'styled-components'
import Project from '../components/Project';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import kanban from '../assets/Images/projects/kanban.png'
import weather from '../assets/Images/projects/weather.png'
import crypto from '../assets/Images/projects/crypto.png'
import authapp from '../assets/Images/projects/crypto.png'
import kmovies from '../assets/Images/projects/crypto.png'
import rhyme4u from '../assets/Images/projects/crypto.png'
import Title from '../components/Title'
import { ScrollTrigger } from 'gsap/all'

const Section = styled.div`
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    border-top: 1px solid ${props => props.theme.secondaryText};
    background: black;
`

const Container = styled.div`
    width: 70%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 5rem;
    @media (max-width: 64em){
      width: 90%;
      gap: 0rem;
    }
`

const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    color: ${(props) => props.theme.secondaryText};
`

const ModalContainer = styled(motion.div)`
    height: 20rem;
    width: 22rem;
    position: fixed;
    top: 50%;
    left: 50%;
    background-color: white;
    pointer-events: none;
    overflow: hidden;
    z-index: 3;
    @media (max-width: 64em){
      height: 13rem;
      width: 15rem;
    }
`

const ModalSlider = styled.div`
    height: 100%;
    width: 100%;
    position: relative;
    transition: top 0.5s cubic-bezier(0.76, 0, 0.24, 1);
    img{
      height: 80%;
      width: 80%;
    }
`

const Modal = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
        height: auto;
    }
`

const Cursor = styled(motion.div)`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: ${props => props.theme.secondaryText};
    color: white;
    position: fixed;
    z-index:3;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 300;
    pointer-events: none;
`

const CursorLabel = styled(motion.div)`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: ${props => props.theme.secondaryText};
    color: white;
    position: fixed;
    z-index:3;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 300;
    pointer-events: none;
    background-color: transparent;
`


const projects = [
  {
    title: "Weather App",
    src: weather,
    color: "#000000",
    url: 'https://weatherapp-k-next.vercel.app/'
  },
  {
    title: "Kanban App",
    src: kanban,
    color: "#636e72",
    url: 'https://mern-stack-kanban.vercel.app'
  },
  {
    title: "Crypto Track",
    src: crypto,
    color: "#b2bec3",
    url: 'https://track-app-crypto.netlify.app/'
  },
  {
    title: "Rhyme4U",
    src: rhyme4u,
    color: "#dfe6e9",
    url: 'https://rhyme4u.netlify.app/'
  },
  {
    title: "Auth App",
    src: authapp,
    color: "#000000",
    url: 'https://mern-authenication.vercel.app/'
  },
  {
    title: "Kmovies",
    src: kmovies,
    color: "#636e72",
    url: 'https://moviesk.netlify.app/'
  }
]
const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: { scale: 1, x: "-50%", y: "-50%", transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } },
  closed: { scale: 0, x: "-50%", y: "-50%", transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] } }
}

function Projects() {

  const [modal, setModal] = useState({ active: false, index: 0 })
  const { active, index } = modal;
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  let xMoveContainer = useRef(null);
  let yMoveContainer = useRef(null);
  let xMoveCursor = useRef(null);
  let yMoveCursor = useRef(null);
  let xMoveCursorLabel = useRef(null);
  let yMoveCursorLabel = useRef(null);

  useEffect(() => {
    //Move Container
    xMoveContainer.current = gsap.quickTo(modalContainer.current, "left", { duration: 0.8, ease: "power3" })
    yMoveContainer.current = gsap.quickTo(modalContainer.current, "top", { duration: 0.8, ease: "power3" })
    //Move cursor
    xMoveCursor.current = gsap.quickTo(cursor.current, "left", { duration: 0.5, ease: "power3" })
    yMoveCursor.current = gsap.quickTo(cursor.current, "top", { duration: 0.5, ease: "power3" })
    //Move cursor label
    xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "left", { duration: 0.45, ease: "power3" })
    yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "top", { duration: 0.45, ease: "power3" })
  }, [])

  const moveItems = (x, y) => {
    xMoveContainer.current(x)
    yMoveContainer.current(y)
    xMoveCursor.current(x)
    yMoveCursor.current(y)
    xMoveCursorLabel.current(x)
    yMoveCursorLabel.current(y)
  }
  const manageModal = (active, index, x, y) => {
    moveItems(x, y)
    setModal({ active, index })
  }

  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(() => {

    let element = ref.current;

    ScrollTrigger.create({
      trigger: element,
      start: 'top top',
      end: 'bottom top',
      pin: true,
      pinSpacing: false,
      scrub: true,
    })
    return () => {
      ScrollTrigger.kill();
    };
  }, [])

  return (
    <Section
      onMouseMove={(e) => { moveItems(e.clientX, e.clientY) }}
      id="projects"
      ref={ref}
    >

      <Container ref={ref}>

        <Title title="Projects" />

        <Body>
          {
            projects.map((project, index) => {
              return <Project index={index} title={project.title} url={project.url} manageModal={manageModal} key={index} />
            })
          }
        </Body>
        {/* <Rounded>
          <p>More work</p>
        </Rounded> */}
        <>
          <ModalContainer
            ref={modalContainer}
            variants={scaleAnimation}
            initial="initial"
            animate={active ? "enter" : "closed"}
          >
            
            <ModalSlider
              style={{ top: index * -100 + "%" }}
            >
              {
                projects.map((project, index) => {
                  const { src, color, title } = project
                  return <Modal style={{ backgroundColor: color }} key={`modal_${index}`}>
                    <img
                      src={src}
                      width={300}
                      height={0}
                      alt={title}
                    />
                  </Modal>
                })
              }
            </ModalSlider>
          </ModalContainer>
          <Cursor
            ref={cursor}
            variants={scaleAnimation}
            initial="initial"
            animate={active ? "enter" : "closed"}
          ></Cursor>
          <CursorLabel
            ref={cursorLabel}
            variants={scaleAnimation}
            initial="initial"
            animate={active ? "enter" : "closed"}
          >
            demo &#62;
          </CursorLabel>
        </>
      </Container>
    </Section>
  )
}

export default Projects