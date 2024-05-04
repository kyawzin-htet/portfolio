
import React from 'react'
import styled from 'styled-components'


const Section = styled.a`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 4rem 0rem;
    border-top: 1px solid ${(props) => props.theme.secondaryText};
    cursor: pointer;
    transition: all 0.2s;
    @media (max-width: 64em){
        padding: 2rem 0rem;
    }
    h2{
        font-size: ${(props) => props.theme.fontlg};
        margin: 0px;
        font-weight: 400;
        transition: all 0.4s;
        @media (max-width:48em){
            font-size: ${(props) => props.theme.fontmd};
            font-weight: 300;
          }
    }

    p{
        transition: all 0.4s;
        font-weight: 300;
    }

    &:last-of-type{
        border-bottom: 1px solid rgb(201, 201, 201);
    }

    &:hover{
        opacity: 0.5;
        h2{
            transform: translateX(-10px);
        }
        p{
            transform: translateX(10px);
        }
    }
`

function Project({index, title, url, manageModal}) {

    return (
        <Section 
            onMouseEnter={(e) => {manageModal(true, index, e.clientX, e.clientY)}} 
            onMouseLeave={(e) => {manageModal(false, index, e.clientX, e.clientY)}}
            href={url}
            target="_blank"
        >
            <h2>{title}</h2>
            <p>Design & Development</p>
        </Section>
    )
}

export default Project
