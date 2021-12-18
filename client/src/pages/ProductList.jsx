import styled from "styled-components";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Announcement from "../components/Announcement";
import roadbike from "../images/roadbikeposter.jpg";
import { mobile } from "../responsive";
const Container = styled.div``;
const ImgContainer = styled.div`
  display: flex;
  margin: 40px;
  height: 400px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: linear-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.1)
    ),
    url(${(props) => props.image}) no-repeat center/cover;
  ${mobile({ height: "250px" })}
`;

const Title = styled.h1`
  text-align: center;
  font-size: 80px;
  font-weight: bold;
  color: black;
  margin-top: -75px;
  margin-bottom: 30px;
  ${mobile({ fontSize: "50px" })}
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  margin-left: 10px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <ImgContainer image={roadbike}></ImgContainer>
      <Title>Road Bikes</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter by Color:</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort By Price:</FilterText>
          <Select>
            <Option selected>Price (Low to High)</Option>
            <Option>Price (Low to High)</Option>
            <Option>Price (High to Low)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
