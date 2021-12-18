import { useState } from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

import { sliderItem } from "../data";
const Container = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ height: "50vh" })}
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.slideIndex * -50}vw);
  /* transition: all 1s ease-in-out; */
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #f1e7e7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.9;
  z-index: 2;
  ${mobile({ height: "40px", width: "40px" })}
`;
const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 50vw;
  height: 90vh;
  ${mobile({ height: "50vh" })}
`;
const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
  background-color: #161515;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: -40px;
`;
const Image = styled.img`
  height: 60%;
  width: 80%;
  transition: 0.4s;
  &:hover {
    transform: scale(1.05);
  }
  ${mobile({ height: "60%", width: "80%", objectFit: "cover" })}
`;

const Title = styled.h1`
  font-size: 40px;
  text-align: center;
  background-color: #161515;
  color: white;
  padding-top: 20px;
  ${mobile({ fontSize: "30px" })}
`;

const Button = styled.button`
  padding: 15px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  color: black;
  background-color: white;
  border-radius: 5px;
  z-index: 999;
  border: none;
  margin-top: -15px;
  transition: 0.4s;
  &:hover {
    color: white;
    background-color: #161515;
    transform: scale(1.05);
  }
  ${mobile({ fontSize: "15px", padding: "10px" })}
`;
const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 2 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 2 : 0);
    }
  };
  return (
    <>
      <Title>Explore Bikes</Title>
      <Container>
        <Arrow direction="left" onClick={() => handleClick("left")}>
          <ArrowLeftIcon />
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
          {sliderItem.map((item) => {
            return (
              <Slide key={item.id}>
                <ImgContainer>
                  <Image src={item.img} />
                  <Button>{item.btnInfo}</Button>
                </ImgContainer>
              </Slide>
            );
          })}
        </Wrapper>
        <Arrow direction="right" onClick={() => handleClick("right")}>
          <ArrowRightIcon />
        </Arrow>
      </Container>
    </>
  );
};

export default Slider;
