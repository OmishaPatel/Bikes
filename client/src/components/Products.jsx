import React from "react";
import styled from "styled-components";
import { popularBikes } from "../data";
import Product from "./Product";
import { mobile } from "../responsive";
const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Title = styled.h1`
  font-size: 40px;
  text-align: center;
  color: black;
  padding-top: 20px;
`;
const Products = () => {
  return (
    <>
      <Container>
        {popularBikes.map((item) => {
          return <Product item={item} key={item.id} />;
        })}
      </Container>
    </>
  );
};

export default Products;
