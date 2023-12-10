import styled from "styled-components";
import CategoryItem from "./CategoryItem";
import { categories } from "../../src/data";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  ${mobile({ flexDirection: "column", height: "120vh" })}
`;
function Categories() {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
}

export default Categories;
