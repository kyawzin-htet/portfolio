import React, { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import MainVideo from '../assets/backgroundVideo.mp4'
import { motion } from 'framer-motion'
import img from "../assets/Images/profile.jpg";
import Lottie from 'react-lottie';
import animationData from '../assets/lottie/arrowdown.json';


const VideoContainer = styled.section`
    width: 100%;
    height: 100vh;
    position: relative;
    video{
        width: 100%;
        height: 100vh;
        object-fit: cover;
    }
`

const DarkOverlay = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.95);
`

const Info = styled(motion.div)`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.text};
`

const ArrowDown = styled.div`
    position: absolute;
    margin-bottom: 10vh;
    bottom: 0;
`
const CardContainer = styled.div`
  position: relative;
  width: 250px;
  height: 250px;
  border-radius: 10px;
  z-index: 1111;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 2px 2px 6px ${props => props.theme.secondaryText}, -2px -2px 6px ${props => props.theme.secondaryText};
  z-index: -1;

  .profile{
    position: absolute;
    top: 5px;
    left: 5px;
    width: 240px;
    height: 240px;
    z-index: 2;
    background: #000;
    backdrop-filter: blur(24px);
    border-radius: 8px;
    overflow: hidden;
    outline: 2px solid #000;
    opacity: 0.8;
  }
`;

const BlobAnimation = keyframes`
  0% {
    transform: translate(-100%, -100%) translate3d(0, 0, 0);
  }
  25% {
    transform: translate(-100%, -100%) translate3d(100%, 0, 0);
  }
  50% {
    transform: translate(-100%, -100%) translate3d(100%, 100%, 0);
  }
  75% {
    transform: translate(-100%, -100%) translate3d(0, 100%, 0);
  }
  100% {
    transform: translate(-100%, -100%) translate3d(0, 0, 0);
  }
`;

const Blob = styled.div`
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  width: 150px;
  height: 150px;
  border-radius: 10%;
  background-color: ${props => props.theme.text};
  opacity: 1;
  filter: blur(12px);
  animation: ${BlobAnimation} 5s infinite ease;
`;


const nameVariants = {
  hidden: {
    opacity: 0,
    x: -300,
  },
  visible: (scrollY) => ({
    opacity: 1,
    x: 10,
    transition: {
      type: 'spring',
      duration: 1,
      delay: 1,
      ease: 'easeInOut',
    },
  }),
};

const positionVariants = {
  hidden: {
    opacity: 0,
    x: 300,
  },
  visible: (scrollY) =>(
    {
      opacity: 1,
      x: 0,
  
      transition: {
        type: 'spring',
        duration: 1,
        delay: 1, // 2
        ease: 'easeInOut',
      },
    }),
};


const Marquee = styled.div`
  position: absolute;
  // min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 64em){
    justify-content: center;
}
`;
const Banner = styled(motion.h2)`
  font-size: ${(props) => props.theme.fontxxxl};
  // font-family: 'Kaushan Script';
  color: ${(props) => props.theme.text};
  white-space: nowrap;
  line-height: 4rem;

  @media (max-width: 70em){
    font-size: ${(props) => props.theme.fontxl};
  }
  @media (max-width: 64em){
      // margin: 1rem 0;
      line-height: 1rem;
      font-size: ${(props) => props.theme.fontxl};
  }
 
  @media (max-width: 48em){
      font-size: ${(props) => props.theme.fontxl};
      margin: 0.5rem 0;

  }
  @media (max-width: 30em){
      font-size: ${(props) => props.theme.fontxl};
  }

  span {
    display: block;
    padding: 1rem 2rem;
    @media (max-width: 70em){
      overflow-x: scroll;
    }
    @media (max-width: 64em){
      overflow-x: scroll;
    }
  }
`;


const CoverVideo = () => {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  
  return (

    <VideoContainer>
      <DarkOverlay />
      <Info>
         <CardContainer>
          <img
            className="profile"
            src={img}
            alt="Kyaw Zin Htet"       
          />
          <Blob />
        </CardContainer>
        <Marquee id="direction">
          <Banner variants={nameVariants} initial="hidden" animate={scrollY > 100 ?  'hidden' : 'visible' }>
            <span>
              KYAW ZIN HTET
            </span>
          </Banner>
          <Banner variants={positionVariants} initial="hidden" animate={scrollY > 110 ?  'hidden' : 'visible' }>
            <span>
              A Full-stack Developer
            </span>
          </Banner>
        </Marquee>

        <ArrowDown>
          <Lottie
            className="lottie"
            options={defaultOptions}
            width={60}
            height={60}
          />
        </ArrowDown>
      </Info>
      <video src={MainVideo} type="video/mp4" autoPlay muted loop />
    </VideoContainer>
  )
}

export default CoverVideo;