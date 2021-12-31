import React from "react";
import SendIcon from "@mui/icons-material/Send";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useState } from "react";
const Container = styled.div`
  height: 40vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 50px;
  margin-bottom: 20px;
  ${mobile({ fontSize: "30px", textAlign: "center" })}
`;

const Description = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center", fontSize: "20px" })}
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "80%" })}
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: black;
  color: white;
  cursor: pointer;
`;
const Newsletter = () => {
  const [email, setEmail] = useState(true);
  const handleClick = () => {
    setEmail(false);
  };
  return (
    <>
      {email ? (
        <Container>
          <Title>Sign up for new bikes and special offers.</Title>
          <Description>We promise not to be jerks about it.</Description>
          <InputContainer>
            <Input placeholder="Enter your email" />
            <Button onClick={handleClick}>
              <SendIcon />
            </Button>
          </InputContainer>
        </Container>
      ) : (
        <Container>
          <Title>THANKS !</Title>
          <Description>Look for great stuff in your inbox soon!</Description>
        </Container>
      )}
    </>
  );
};

export default Newsletter;
