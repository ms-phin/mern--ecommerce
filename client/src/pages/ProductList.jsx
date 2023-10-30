import React, { useState } from "react";
import Navabar from "../components/Navabar";
import Feed from "../components/Feed";
import styled from "styled-components";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Fotter from "../components/Fotter";

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
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    setColor(event.target.value);
  };
  console.log(color);

  const handleSizeChange = (event) => {
    event.preventDefault();
    setSize(event.target.value);
  };
  console.log(size);

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
                value={color}
                onChange={handleChange}
              >
                <Option value="">All</Option>
                <Option value="red">Red</Option>
                <Option value="blue">Blue</Option>
                <Option value="green">Green</Option>
              </Select>
            </label>
          </FliterColor>

          <FliterSize>
            <label>
              Size:
              <Select style={{ padding: "7px" }} onChange={handleSizeChange}>
                <Option value="">All</Option>
                <Option value="small">Small</Option>
                <Option value="medium">Medium</Option>
                <Option value="large">Large</Option>
              </Select>
            </label>
          </FliterSize>
        </Fliter>
        <Fliter>
          <FliterText>Sort Products</FliterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option> Price (desc)</Option>
          </Select>
        </Fliter>
      </FLiterContainer>
      <Products />
      <Newsletter />
      <Fotter />
    </Container>
  );
}

export default ProductList;
