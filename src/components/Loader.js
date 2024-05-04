import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import Lottie from 'react-lottie';
import animationData from '../assets/lottie/loading.json';

const Container = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  touch-action: none;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  width: 100%;

  svg {
    width: 4vw;
    height: auto;
    overflow: visible;
    stroke-linejoin: round;
    stroke-linecap: round;
    g {
      path {
        stroke: #fff;
      }
    }
    @media (max-width: 64em) {
        width: 10vw;
    }
  }
`;

const pathVariants = {
    hidden: {
        opacity: 0,
        pathLength: 0,
    },
    visible: {
        opacity: 1,
        pathLength: 1,

        transition: {
            duration: 2,
            // yoyo: Infinity,
            ease: 'easeInOut',
        },
    },
};


const Loader = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <Container
            initial={{ y: 0, opacity: 1 }}
            exit={{ y: '100%', opacity: 0 }}
            transition={{ duration: 2 }}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                enableBackground="new 0 0 24 24"
                viewBox="0 0 24 24"
                fill="none"
            >
                <g>
                    <motion.path
                        variants={pathVariants}
                        initial="hidden"
                        animate="visible"
                        d="M15.5 9L15.6716 9.17157C17.0049 10.5049 17.6716 11.1716 17.6716 12C17.6716 12.8284 17.0049 13.4951 15.6716 14.8284L15.5 15 M13.2942 7.17041L12.0001 12L10.706 16.8297 M8.49994 9L8.32837 9.17157C6.99504 10.5049 6.32837 11.1716 6.32837 12C6.32837 12.8284 6.99504 13.4951 8.32837 14.8284L8.49994 15 M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8"
                    />
                </g>
            </svg>
            <Lottie
                className="lottie"
                options={defaultOptions}
                width={300}
                height={100}
            />

        </Container>
    );
};

export default Loader;
