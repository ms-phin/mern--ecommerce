import styled from "styled-components";
import ProductItems from "./ProductItems";
import { popularProducts } from "../../src/data";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background-color: white;
  height: 100vh;
  width: 100%;
`;

function Products() {
  return (
    <Container>
      {popularProducts.map((item) => (
        <ProductItems item={item} key={item.id} />
      ))}
    </Container>
  );
}

export default Products;
