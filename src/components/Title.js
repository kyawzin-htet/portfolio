import React from 'react'
import styled from 'styled-components'

const Text = styled.div`
    font-size: ${(props) => props.theme.fontxl};
    text-transform: capitalize;
    color: ${(props) => props.theme.text};
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem auto;

    @media (max-width:64em){
        font-size: ${(props) => props.theme.fontxl};
        justify-content: flex-start;
        padding: 0rem 1rem;
    }
`

const Title = (props) => {
  return (
    <Text
        data-aos="fade-right"
        data-aos-duration="2000"    
    >
        &#123; {props.title} &#125;
    </Text>
  )
}

export default Title
