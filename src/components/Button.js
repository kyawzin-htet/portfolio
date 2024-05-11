import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  width: 10em;
  position: relative;
  height: 3.5em;
  border: 3px ridge  ${props => props.theme.secondaryText};
  outline: none;
  background-color: transparent;
  color: white;
  transition: 1s;
  border-radius: 0.3em;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;

  &:hover::before,
  &:hover::after {
    transform: scale(0);
  }

  &:hover {
    box-shadow: inset 0px 0px 25px ${props => props.theme.secondaryText};
  }

  &::after,
  &::before {
    content: '';
    position: absolute;
    width: 95%;
    height: 40%;
    //background-color: transparent;
    background-color: #0D0D0D;
    transition: 0.5s;
  }

  &::after {
    top: -10px;
    left: 3%;
    transform-origin: center;
  }

  &::before {
    top: 80%;
    left: 3%;
    transform-origin: center;
  }
`;

const Button = ({text, href}) => {

  const handleClick = () => {
    window.open(href, '_blank');
  };

  return (
    <StyledButton onClick={handleClick} >
      {text}
    </StyledButton>

  )
}

export default Button

