import React, { useState } from "react";
import Navabar from "../components/Navabar";
import Feed from "../components/Feed";
import styled from "styled-components";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Fotter from "../components/Fotter";
import { useLocation } from "react-router-dom";
import { mobile } from "../responsive";

const Container = styled.div``;
const FLiterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Title = styled.h2`
  margin: 20px;
`;
const Fliter = styled.div`
  margin: 20px;
  display: flex;
  align-items: center;
  ${mobile({ display: "flex", flexDirection: "column" })}
`;
const FliterProducts = styled.h3`
  margin: 5px;
`;

const FliterText = styled.h3``;
const Select = styled.select``;
const Option = styled.option``;

const FliterColor = styled.div`
  padding: 10px;
  margin: 5px;
`;
const FliterSize = styled.div`
  margin: 5px;
  padding: 10px;
`;

function ProductList() {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("Newest");

  const handleFilters = (event) => {
    // event.preventDefault();
    const value = event.target.value;
    setFilters({
      ...filters,
      [event.target.name]: value,
    });
  };
  // console.log(fliters);

  return (
    <Container>
      <Navabar />
      <Feed />
      <Title>Deress</Title>
      <FLiterContainer>
        <Fliter>
          <FliterProducts>Products Fliter</FliterProducts>

          <FliterColor>
            <label>
              Color:
              <Select
                style={{ padding: "7px" }}
                name="color"
                onChange={handleFilters}
              >
                <Option disabled>All</Option>
                <Option value="red">Red</Option>
                <Option value="blue">Blue</Option>
                <Option value="green">Green</Option>
              </Select>
            </label>
          </FliterColor>

          <FliterSize>
            <label>
              Size:
              <Select
                name="size"
                style={{ padding: "7px" }}
                onChange={handleFilters}
              >
                <Option disabled>All</Option>
                <Option value="small">Small</Option>
                <Option value="medium">Medium</Option>
                <Option value="large">Large</Option>
              </Select>
            </label>
          </FliterSize>
        </Fliter>
        <Fliter>
          <FliterText>Sort Products</FliterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc"> Price (desc)</Option>
          </Select>
        </Fliter>
      </FLiterContainer>
      <Products cat={cat} filters={filters} sort={sort} />
      <Newsletter />
      <Fotter />
    </Container>
  );
}

export default ProductList;
