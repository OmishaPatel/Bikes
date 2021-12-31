import styled from "styled-components";
import { mobile } from "../responsive";
import Bike from "../images/buffalo.jpg";
import Navbar from "../components/Navbar";
const ComponentContainer = styled.div``;
const Container = styled.div`
  display: flex;
  width: 100%;
  height: 90vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 30px;
  margin-top: 10px;
  text-align: center;
  color: black;
  font-weight: bold;
  &::first-letter {
    font-size: 40px;
  }
  ${mobile({ fontSize: "20px" })}
`;
const SubTitle = styled.h2`
  font-size: 18px;
  overflow: hidden;
  text-align: center;
  margin-top: 10px;
  max-width: 80%;
  font-weight: 400;
  color: black;
  ${mobile({ fontSize: "10px" })}
`;
const Button = styled.button`
  padding: 15px;
  font-size: 20px;
  margin-top: 25px;
  background-color: black;
  cursor: pointer;
  color: white;
  border-radius: 5px;
  border: none;

  ${mobile({ fontSize: "15px", padding: "15px", marginTop: "20px" })}
`;
const ImgContainer = styled.img`
  height: 40%;
  width: 40%;
  object-fit: cover;
  transition: 0.4s;
`;

const LearnMore = () => {
  return (
    <ComponentContainer>
      <Navbar />
      <Container>
        <ImgContainer src={Bike} />
        <Title>
          World Bicycle Relief’s Buffalo Bicycle is our Bike of the Year
        </Title>
        <SubTitle>
          This year we chose World Bicycle Relief’s hard working Buffalo
          Bicycle. They’re designed for the rigors of daily life in developing
          countries where people often have to walk long distances to accomplish
          everyday tasks. Since 2005, Buffalo Bicycles have helped kids get to
          school, health workers to patients, and farmers to market. World
          Bicycle Relief is on a mission to continue helping people gain
          mobility and independence through bicycles. What can you do to help? A
          donation to World Bicycle Relief in any amount helps empower someone
          in need.
        </SubTitle>
        <Button>Donate</Button>
      </Container>
    </ComponentContainer>
  );
};
export default LearnMore;
