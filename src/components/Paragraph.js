import { useScroll, useTransform, motion } from 'framer-motion';
import React, { useRef } from 'react';
import styled from 'styled-components'

const Text = styled(motion.p)`
    
    color: ${(props) => props.theme.text};
    font-size: ${(props) => props.theme.fontlg};
    padding: 40px;
    letter-spacing: 0.2rem;
    font-weight: bold;
    display: flex;
    flex-wrap: wrap;
    text-align: justify;

    @media (max-width: 98em){
      font-size: ${(props) => props.theme.fontlg};
     }

    @media (max-width: 64em){
        letter-spacing: 0.1rem;
        padding: 10px;
        font-size: ${(props) => props.theme.fontmd};
    }

    .word{
        position: relative;
        margin-right: 12px;
        margin-top: 12px;
        .shadow{
            position: absolute;
            opacity: 20%;
        }

} 
`

export default function Paragraph({paragraph}) {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"]
  })

  const words = paragraph.split(" ")

  return (
    <Text 
      ref={container}         
    >
        {
        words.map( (word, i) => {
            const start = i / words.length
            const end = start + (1 / words.length)
            return <Word key={i} progress={scrollYProgress} range={[start, end]}>{word}</Word>
        })
        }
    </Text>
  )

}



const Word = ({children, progress, range}) => {

  const amount = range[1] - range[0]
  const step = amount / children.length

  return (

    <span className="word">

      {
        children.split("").map((char, i) => {

          const start = range[0] + (i * step);

          const end = range[0] + ((i + 1) * step)

          return <Char key={`c_${i}`} progress={progress} range={[start, end]}>{char}</Char>
        })
      }

    </span>
  )
}



const Char = ({children, progress, range}) => {

  const opacity = useTransform(progress, range, [0,1])

  return (

    <span>
      <span className="shadow">{children}</span>
      <motion.span style={{opacity: opacity}}>{children}</motion.span>
    </span>

  )

}