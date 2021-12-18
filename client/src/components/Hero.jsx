import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
import bike from "../images/bike.mp4";
import { mobile } from "../responsive";
const Container = styled.div`
  display: flex;
  width: 100%;
  height: 80vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  z-index: 10;
  ${mobile({ height: "50vh" })}
`;
const Title = styled.h1`
  font-size: 50px;
  text-align: center;
  color: white;
  font-weight: bold;
  letter-spacing: 2px;
  &::first-letter {
    font-size: 70px;
  }
  ${mobile({ fontSize: "35px" })}
`;
const SubTitle = styled.h2`
  font-size: 30px;
  text-align: center;
  margin-top: 10px;
  color: white;
  letter-spacing: 3px;
  ${mobile({ fontSize: "25px" })}
`;
const Button = styled.button`
  padding: 15px;
  font-size: 20px;
  margin-top: 25px;
  background-color: transparent;
  cursor: pointer;
  color: black;
  background-color: white;
  border-radius: 5px;
  border: none;
  &:hover {
    color: white;
    background-color: #161515;
  }
  ${mobile({ fontSize: "15px", padding: "15px", marginTop: "20px" })}
`;
const Video = styled.video`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  object-fit: cover;
  transform: translate(-50%, -50%);
  z-index: -1;
  opacity: 1;
`;
const Hero = () => {
  return (
    <Container>
      <Video autoPlay="autoPlay" muted loop>
        <source src={bike} type="video/mp4" />
      </Video>
      <Title>Ride Unleashed</Title>
      <SubTitle>Our bike of the year</SubTitle>
      <Button>Learn More</Button>
    </Container>
  );
};

export default Hero;
