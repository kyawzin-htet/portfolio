import React from 'react'
import styled from 'styled-components'


const Card = styled.div`
    background: #000;
    border-radius: 10px;
    overflow: hidden;
    transition: transform 0.3s ease;
    border: 1px solid rgba(255, 255, 255, 0.1);
    position: relative;
    padding: 2rem;
`


const Title = styled.h3`
    font-size: 2rem;
    font-weight: 700;
    color: ${props => props.theme.text};
    margin: 0 0 1.5rem 0;
`

const Description = styled.p`
    color: ${props => props.theme.secondaryText};
    font-size: 0.9rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    height: 100px;
`

const TechStack = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
    height: 100px;
`

const Tech = styled.span`
    font-size: 0.75rem;
    padding: 0.35rem 0.8rem;
    border-radius: 50px;
    background:  #666666;
    color: #fff;
    font-weight: 500;
    height: 10px;
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Links = styled.div`
    display: flex;
    gap: 0.8rem;
    margin-top: auto;
    

    @media (max-width: 480px) {
        flex-direction: column;
        gap: 0.6rem;
    }
`

const Button = styled.a`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.7rem 1.2rem;
    border-radius: 5px;
    font-size: 0.9rem;
    font-weight: 500;
    text-decoration: none;
    transition: all 0.2s ease;
    cursor: pointer;
    white-space: nowrap;
    width: fit-content;
    // cursor: pointer;
    
    &.demo {
        background: ${props => props.theme.primary};
        color: white;
        border: 0.5px solid ${props => props.theme.secondaryText};

        &:hover::before,
        &:hover::after {
            transform: scale(0);
        }

        &:hover {
            box-shadow: inset 0px 0px 25px ${props => props.theme.secondaryText};
        }ox-shadow: 0 2px 4px ${props => props.theme.primary}40;
        }
    }

    &.github {
        background: transparent;
        color: ${props => props.theme.text};
        border: 0.5px solid ${props => props.theme.secondaryText};

        &:hover::before,
        &:hover::after {
            transform: scale(0);
        }

        &:hover {
            box-shadow: inset 0px 0px 25px ${props => props.theme.secondaryText};
        }
    }

    svg {
        width: 18px;
        height: 18px;
    }

    @media (max-width: 768px) {
        font-size: 0.85rem;
        padding: 0.6rem 1rem;

        svg {
            width: 16px;
            height: 16px;
        }
    }
`

function Project({ title, description, techStack, url, github }) {
    return (
        <Card>
            <Title>{title}</Title>

            <Description>{description}</Description>

            <TechStack>
                {techStack.map((tech, index) => (
                    <Tech key={index}>✓ {tech}</Tech>
                ))}
            </TechStack>

            <Links>
                {url && (
                    <Button 
                        href={url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="demo"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Demo 
                    </Button>
                )}
                {github && (
                    <Button 
                        href={github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="github"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        Source
                    </Button>
                )} 
            </Links>
        </Card>
    );
}

export default Project
