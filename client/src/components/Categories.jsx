import styled from "styled-components";
import CategoryItem from "./CategoryItem";
import { categories } from "../../src/data";

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  overflow: hidden;
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
