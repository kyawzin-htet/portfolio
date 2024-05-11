import React from 'react'
import styled from 'styled-components'
import { DiReact } from "react-icons/di";
import { CiHeart } from "react-icons/ci";
import Button from '../components/Button';

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #0d0d0d;
  border-top: 1px solid ${props => props.theme.secondaryText};
  gap: 10rem;
  @media (max-width: 64em){
    min-height: 60vh;
    gap: 3rem
  }
`

const Quote = styled.p`
    width: 100%;
    color: ${(props) => props.theme.secondaryText};
    font-size: ${(props) => props.theme.fontxxl};
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Kaushan Script";
    opacity: 0.3;
    text-align: justify;
    @media (max-width: 98em){
      width: 90%;
      font-size: ${(props) => props.theme.fontxl};
     }
    @media (max-width: 64em){
     width: 90%;
     font-size: ${(props) => props.theme.fontlg};
    }
`;

const GetInTouch = styled.section`
    width: 100vw;
    display: flex;
    flex-direction: row;
    @media (max-width: 64em){
      width: 100vw;
      gap: 2rem;
      flex-direction: column-reverse;
     }
`;

const Left = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  .made{
    display: flex;
    align-items: center;
  }
  .heart{
    color: yellow;
    font-size: 2rem;
  }
  .react{
    color: #62DAFB;
    font-size: 2rem;
  }
  @media (max-width: 64em){
    width: 100%;
    align-items: flex-start;
    margin-left: 1rem;
   }
`;

const Text = styled.p`
   color: ${(props) => props.theme.text};
   font-size: ${(props) => props.theme.fontmd};
   @media (max-width: 64em){
    font-size: ${(props) => props.theme.sm};
   }
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  @media (max-width: 64em){
    width: 100%;
    flex-direction: row;
    justify-content: center;
   }
`;

const Footer = () => {

  return (
    <Section>
            <Quote
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              &#34;Rather than exceptional gifts, I offer a burning curiosity that fuels my exploration.&#34;
            </Quote>

            {/* <Paragraph paragraph={text}/> */}

            <GetInTouch>
                <Left>
                    <Text>
                        <p className="made">
                          Made with <CiHeart className="heart"/>  and <DiReact className="react"/>
                        </p>
                        <p>© 2023 KYAW ZIN HTET. ALL RIGHT RESERVED.</p>
                    </Text>
                </Left>

                <Right>
                    <Button
                      text="Linkedin"
                      href="https://www.linkedin.com/in/kyaw-zin-htet-dev/"
                    />

                    <Button
                      text="Github"
                      href="https://github.com/kyawzin-htet"
                    />
                </Right>       
             </GetInTouch>
    </Section>
  )
}

export default Footer
