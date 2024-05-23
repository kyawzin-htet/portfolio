
import React from 'react'
import styled from 'styled-components'


const Section = styled.a`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0rem;
    border-top: 1px solid ${(props) => props.theme.secondaryText};
    cursor: pointer;
    transition: all 0.2s;
   

    @media (max-width: 98em){
        padding: 1.5rem 0rem;
    }


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

    &:last-of-type{
        border-bottom: 1px solid ${(props) => props.theme.secondaryText};
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
const TechStack = styled.div`
    width: 50%;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5vw; 
    justify-content: flex-end;
    p {
        transition: all 0.4s;
        font-size: ${props => props.theme.fontxs};
        padding: 5px 10px;
        background: ${props => props.theme.secondaryText};
        color: ${props => props.theme.text};
        border-radius: 10px;
        width: fit-content;
    }

    @media (max-width: 64em) {
        gap: 1vw;
        p {
            padding: 1vw 1vw;
            font-size: 0.5em;
        }
    }
`


function Project({index, title, url, manageModal, techStack}) {

    return (
        <Section 
            onMouseEnter={(e) => {manageModal(true, index, e.clientX, e.clientY)}} 
            onMouseLeave={(e) => {manageModal(false, index, e.clientX, e.clientY)}}
            href={url}
            target="_blank"
        >
            <h2>{title}</h2>
            <TechStack
                
            >
                {
                    techStack.map((item, index) =>{
                        return (
                            <>
                                <p 
                                data-aos="zoom-in"
                                data-aos-duration="2000"
                                key={index}>{item}</p>
                            </>
                        )
                    })
                }
            </TechStack>
        </Section>
    )
}

export default Project
