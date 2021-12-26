import styled from "styled-components";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Announcement from "../components/Announcement";
import roadbike from "../images/roadbikeposter.jpg";
import mountainbike from "../images/mountainbikeregister.jpg";
import ebike from "../images/ebikeside.png";
import hybridbike from "../images/hybridside.png";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useState } from "react";
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
  text-transform: capitalize;
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
  const location = useLocation();
  const category = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("Price (Low to High)");

  const handleFilter = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };
  const handleImg = (category) => {
    if (category === "mountain") {
      return mountainbike;
    } else if (category === "road") {
      return roadbike;
    } else if (category === "electric") {
      return ebike;
    } else {
      return hybridbike;
    }
  };
  return (
    <Container>
      <Announcement />
      <Navbar />
      <ImgContainer image={handleImg(category)}></ImgContainer>
      <Title>{`${category} Bikes`}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter by Color:</FilterText>
          <Select name="color" onChange={handleFilter}>
            <Option disabled selected>
              Color
            </Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>gray</Option>
            <Option>blue</Option>
          </Select>
          <Select name="size" onChange={handleFilter}>
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
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="asc" selected>
              Price (Low to High)
            </Option>
            <Option value="asc">Price (Low to High)</Option>
            <Option value="desc">Price (High to Low)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products category={category} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
