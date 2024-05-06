import React, { useLayoutEffect, useRef } from 'react'
import styled from 'styled-components'
import DrawSvg from '../components/DrawSvg'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { GoArrowUpRight } from "react-icons/go";
import Title from '../components/Title'

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  position: relative;
  // border-top: 1px solid ${props => props.theme.secondaryText};
  background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='100%25' width='100%25'%3E%3Cdefs%3E%3Cpattern id='doodad' width='38' height='38' viewBox='0 0 40 40' patternUnits='userSpaceOnUse' patternTransform='rotate(180)'%3E%3Crect width='100%25' height='100%25' fill='rgba(0, 0, 0,1)'/%3E%3Cpath d='M-0.5 20v20h1v-20zM39.5 20v20h1v-20z' fill='rgba(13, 13, 13,1)'/%3E%3Cpath d='M-10 29.5 h60 v1 h-60z' fill='rgba(13, 13, 13,1)'/%3E%3Cpath d='M19.5 0v40h1v-40z' fill='rgba(13, 13, 13,1)'/%3E%3Cpath d='M-10 9.5h60v1h-60z' fill='rgba(13, 13, 13,1)'/%3E%3Cpath d='M-0.5 0v20h1v-20zM39.5 0v20h1v-20z' fill='rgba(13, 13, 13,1)'/%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23doodad)' height='200%25' width='200%25'/%3E%3C/svg%3E ");
`

const Container = styled.div`
  width: 70%;
  height: 200vh;
  // background-color: ${(props) => props.theme.body};
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width:64em){
    width: 95%;
  }
  @media (max-width:48em){
    width: 90%;
  }
`

const SvgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const Items = styled.ul`
  list-style: none;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // background-color: ${(props) => props.theme.secondaryText};

  // @media (max-width:48em){
  //   width: 90%;
  // }

  &>*:nth-of-type(2n +1){
    justify-content: start;
    @media (max-width:48em){
      justify-content: center;
    }
    div{
      border-radius: 5px 0 5px 0;
      text-align: left;

      @media (max-width:48em){
        border-radius: 0 5px 0 5px;
        text-align: left;
        p{
          border-radius:  0 4px 0 4px;
        }
      }
    }
    p{
      border-radius: 4px 0 4px 0;
    }
  }
  &>*:nth-of-type(2n){
    justify-content: end;
    @media (max-width:48em){
      justify-content: center;
    }
    div{
      border-radius: 0 5px 0 5px;
      text-align: left;
    }
    p{
      border-radius:  0 4px 0 4px;
    }
  }
`

const Item = styled.li`
  width: 100%;
  height: 100%;
  display: flex;

  @media (max-width:48em){
    justify-content: flex-end !important;
  }
`

const ItemContainer = styled.div`
  width: 40%;
  height: fit-content;
  padding: 0.5rem;
  border: 1px solid ${(props) => props.theme.secondaryText};

  @media (max-width:48em){
    width: 90%;
    padding: 0.1rem;
  }
`

const Box = styled.div`
  height: fit-content;
  background-color: rgba(26, 26, 26, 0.7);
  color: ${(props) => props.theme.text};
  padding: 0.5rem;
  position: relative;
  border: 1px solid ${(props) => props.theme.secondaryText};
  line-height: 1.5rem;

  div{
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }
`
const SubTitle = styled.span`
  display: block;
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.text};

  @media (max-width:48em){
    font-size: ${(props) => props.theme.fontmd};
    font-weight: 600;
  }
`

const Company = styled.a`
  // display: block;
  font-size: ${(props) => props.theme.fontmd};
  color: ${(props) => props.theme.secondaryText};

  display: block;
  flex-direction: row;
  align-items: center;
  transition: all 0.5s;
  cursor: pointer;

  &::after{
    content: "";
    display: block;
    width: 0%;
    height: 2px;
    background-color: ${props => props.theme.secondaryText};
    transition: width 0.3s ease;
  }

  &:hover::after{
    width: 100%;
  }

  @media (max-width:48em){
    font-size: ${(props) => props.theme.fontsm};
    font-weight: 400;
  }

`

const Date = styled.span`
  display: block;
  font-size: ${(props) => props.theme.fontxs};
  color: ${(props) => props.theme.secondaryText};

  font-weight: 400;
  margin:0.1rem 0;
  @media (max-width:48em){
    font-size: ${(props) => props.theme.fontxs};
    font-weight: 400;
  }
`

const Text = styled.p`
  font-size: ${(props) => props.theme.fontxs};
  text-align: justify;
`

const RoadMapItem = ({title, subtext, company, date, addToRef}) =>{

  return(
    <Item 
      ref={addToRef} 
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <ItemContainer>
          <Box>
            <div>
              <SubTitle>{title}</SubTitle>
              <Company
                href="https://www.linkedin.com/company/caringcodecreation/" 
                target="_blank"
              >
                &#123; {company} &#125;
                <GoArrowUpRight className="icon" />
              </Company>
            </div>
            <Date>({date})</Date>
            <Text>{subtext}</Text>
          </Box>
      </ItemContainer>
    </Item>
  )
}

const Experience = () => {

  const revealRefs = useRef([]);
  revealRefs.current = [];
  gsap.registerPlugin(ScrollTrigger);

  const addToRefs = (el) =>{
    if(el && !revealRefs.current.includes(el)){
      revealRefs.current.push(el);
    }
  }

  useLayoutEffect(() =>{
    let t1 = gsap.timeline();
    revealRefs.current.forEach( (el, index) =>{
      t1.fromTo(
        el.childNodes[0],
        {
          y: '0'
        },{
          y: '-30%',
          scrollTrigger:{
            id: `section-${index +1}`,
            trigger: el,
            start: 'top center+=200px',
            end: 'bottom center',
            scrub: true,
            // markers: true,
          }
        }
      )
    })
    return () =>{

    };
  },[]);
  return (
    <Section id="experience">
      <Title title="Experiences" />

      <Container>
        <SvgContainer>
            <DrawSvg />
        </SvgContainer>

        <Items>
          <Item>&nbsp;</Item>
          <RoadMapItem 
            addToRef={addToRefs}
            title="Full-Stack Developer"
            company={"C3"} 
            date={"Jan-2024/Now"}
            subtext="During my time as a Frontend Developer, 
            I focused on creating and maintaining frontend components. 
            Collaborating closely with designers and backend developers, 
            I ensured seamless integration of frontend components with backend 
            APIs for efficient data flow. consistently stayed updated on industry
             trends to enhance development processes and product quality."
          />
          <RoadMapItem 
            addToRef={addToRefs} 
            title="Full-Stack Developer" 
            company={"Tunyat"} 
            date={"Jun-2023/Dec-2023"}
            subtext="During my time as a Frontend Developer, 
            I focused on creating and maintaining frontend components. 
            Collaborating closely with designers and backend developers, 
            I ensured seamless integration of frontend components with backend 
            APIs for efficient data flow. consistently stayed updated on industry
             trends to enhance development processes and product quality." 
          />
          <RoadMapItem 
            addToRef={addToRefs} 
            title="Web Developer" 
            company={"MDITS"} 
            date={"Jan-2022/May-2023"}
            subtext="During my time as a Frontend Developer, 
            I focused on creating and maintaining frontend components. 
            Collaborating closely with designers and backend developers, 
            I ensured seamless integration of frontend components with backend 
            APIs for efficient data flow. consistently stayed updated on industry
             trends to enhance development processes and product quality." 
          />
          <RoadMapItem 
            addToRef={addToRefs} 
            title="Junior Developer" 
            company={"MDITS"} 
            date={"Jun-2020/Dec-2021"}
            subtext="During my time as a Frontend Developer, 
            I focused on creating and maintaining frontend components. 
            Collaborating closely with designers and backend developers, 
            I ensured seamless integration of frontend components with backend 
            APIs for efficient data flow. consistently stayed updated on industry
             trends to enhance development processes and product quality." 
          />
          <RoadMapItem 
            addToRef={addToRefs} 
            title="Intern" 
            company={"Global Wave Technology"} 
            date={"Dec-2019/Feb-2020"}
            subtext="During my time as a Frontend Developer, 
            I focused on creating and maintaining frontend components. 
            Collaborating closely with designers and backend developers, 
            I ensured seamless integration of frontend components with backend 
            APIs for efficient data flow. consistently stayed updated on industry
             trends to enhance development processes and product quality." 
          />
        </Items>
      </Container>
    </Section>
  )
}

export default Experience
