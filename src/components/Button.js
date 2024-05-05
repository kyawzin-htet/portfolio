import React from 'react'
import styled from 'styled-components'

const FancyLink = styled.a`
  background-color: transparent;
  border: 2px solid ${props => props.theme.secondaryText};
  border-radius: 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  float: right;
  font-weight: 700;
  letter-spacing: 0.05em;
  margin: 0;
  outline: none;
  overflow: visible;
  padding: 1.25em 2em;
  position: relative;
  text-align: center;
  text-decoration: none;
  text-transform: none;
  transition: all 0.3s ease-in-out;
  user-select: none;
  font-size: 13px;

  &:hover {
    color: ${props => props.theme.text};
    background: black;
  }
`;

const Text = styled.span`
  font-size: 1.125em;
  line-height: 1.33333em;
  padding-left: 2em;
  display: block;
  text-align: left;
  transition: all 0.3s ease-in-out;
  text-transform: uppercase;
  text-decoration: none;
  color: ${props => props.theme.text};
`;

const TopKey = styled.span`
  height: 2px;
  width: 1.5625rem;
  top: -2px;
  left: 0.625rem;
  position: absolute;
  background: ${props => props.theme.border};
  transition: width 0.5s ease-out, left 0.3s ease-out;

  ${FancyLink}:hover & {
    left: -2px;
    width: 0;
  }
`;

const BottomKey1 = styled.span`
  height: 2px;
  width: 1.5625rem;
  right: 1.875rem;
  bottom: -2px;
  position: absolute;
  background: ${props => props.theme.border};
  transition: width 0.5s ease-out, right 0.3s ease-out;

  ${FancyLink}:hover & {
    right: 0;
    width: 0;
  }
`;

const BottomKey2 = styled.span`
  height: 2px;
  width: 0.625rem;
  right: 0.625rem;
  bottom: -2px;
  position: absolute;
  background: ${props => props.theme.border};
  transition: width 0.5s ease-out, right 0.3s ease-out;

  ${FancyLink}:hover & {
    right: 0;
    width: 0;
  }
`;

const Button = ({text, href}) => {

  return (
    <FancyLink href={href} target="_blank">
      <TopKey />
      <Text>{text}</Text>
      <BottomKey1 />
      <BottomKey2 />
    </FancyLink>

  )
}

export default Button
