import React from 'react'
import styled from 'styled-components'

import img1 from '../../assets/Nffts/2146.svg';
import img2 from '../../assets/Nffts/3107.svg';
import img3 from '../../assets/Nffts/4315.svg';
import img4 from '../../assets/Nffts/5494.svg';
import img5 from '../../assets/Nffts/6824.svg';
import img6 from '../../assets/Nffts/7692.svg';
import img7 from '../../assets/Nffts/9599.svg';
import img8 from '../../assets/Nffts/9694.svg';
import ConfettiComponent from '../Confetti';

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.body};
  position: relative;
`
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.text};
  width: fit-content;

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`
const Container = styled.div`
width: 75%;
margin: 2rem auto;

display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;

@media (max-width: 64em) {
  width: 80%;
}
@media (max-width: 48em) {
  width: 90%;
  justify-content: center;
}
`
const Item = styled.div`
width: calc(20rem - 4vw);
padding: 1rem 0;
color: ${props => props.theme.body};
marginL: 2rem 1rem;
position: relative;
z-index: 5;

backdrop-filter: blur(4px);

border: 2px solid ${props => props.theme.text};
border-radius: 20px;


&:hover{
  img{
    transform: translateY(-2rem) scale(1.2);
  }
}

@media (max-width: 30em) {
  width: 70vw;
}
`

const ImageContainer = styled.div`
width: 80%;
margin: 0 auto;
background-color: ${props => props.theme.carouselColor};
border: 1px solid ${props => props.theme.text};
padding: 1rem;

border-radius: 20px;
cursor: pointer;

img{
  width: 100%;
  height: auto;
transition: all 0.3s ease;
}
`
const Name = styled.h2`
font-size: ${(props) => props.theme.fontlg};
display: flex;
align-items: center;
justify-content: center;
text-transform: uppercase;
color: ${props => props.theme.text};
margin-top: 1rem;

`
const Position = styled.h2`
font-size: ${(props) => props.theme.fontmd};
display: flex;
align-items: center;
justify-content: center;
text-transform: uppercase;
color: ${props => `rgba(${props.theme.textRgba})`};
margin-top: 1rem;

`

const MemberComponent = ({ img, name=" ",position=" "}) => {

  return(
    <Item>
      <ImageContainer>
        <img src={img} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
      <Position>{position}</Position>
    </Item>

  )
}

const Team = () => {
  return (
    <Section id="team">
    <ConfettiComponent />
      <Title>Team</Title>
      <Container>
        <MemberComponent img={img1} name="GREG" position="Creator" />
        <MemberComponent img={img5} name="UPRIZN" position="Co-Creator"/>
        <MemberComponent img={img2} name="KAT" position="Manager"/>
        <MemberComponent img={img7} name="WAVEYTIDE" position="DevOps"/>
        <MemberComponent img={img3} name="FASO" position="Business" />
        <MemberComponent img={img4} name="CHAU" position="Social Media"/>
        <MemberComponent img={img6} name="DACRUZY" position="UI/UX"/>
        <MemberComponent img={img8} name="DC" position="Management"/>
      </Container>
    </Section>
  )
}

export default Team