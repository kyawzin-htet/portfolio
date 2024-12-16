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
`;

const Button = ({text, href}) => {

  const handleClick = () => {
    window.open(href, '_blank');
  };

  return (
    <StyledButton onClick={handleClick} >
      {text}
      {}
    </StyledButton>

  )
}

export default Button

