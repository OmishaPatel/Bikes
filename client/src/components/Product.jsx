import React, { useState } from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;
const Container = styled.div`
  flex: 1;
  margin: 25px;
  min-width: 350px;
  height: 380px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  transition: all 3s ease;
  &:hover ${Info} {
    opacity: 1;
  }
  ${mobile({ minWidth: "300px", height: "300px" })}
`;
const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 75%;
  width: 100%;
  object-fit: contain;
  padding: 10px;
  z-index: 2;
  &:hover {
    transition: all 2s ease;
  }
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;
const Name = styled.h1`
  font-size: 20px;
  position: absolute;
  bottom: 0;
  left: 0;
  color: #332d2d;
  font-style: italic;
  margin-left: 15px;
  padding-bottom: 20px;
  font-family: "Roboto", sans-serif;
`;

const Product = ({ item }) => {
  const [open, setOpen] = useState(false);
  return (
    <Container
      onMouseOver={() => setOpen(true)}
      onMouseOut={() => setOpen(false)}
    >
      <Circle />
      <Image src={open ? item.imgFront : item.imgSide} />
      <Name>{item.title}</Name>
      <Info>
        <Icon>
          <Link to={`/product/${item._id}`} className="link">
            <SearchIcon />
          </Link>
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
