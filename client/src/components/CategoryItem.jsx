import styled from "styled-components";
import { Link } from "react-router-dom";
import { mobile } from "../responsive";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 100vh;
  /* width: 100vw; */
  position: relative;
  ${mobile({ height: "30vh", width: "100%" })}
`;
const Image = styled.img`
  margin: 30px;
  object-fit: cover;
  height: 100%;
  width: 100%;
  ${mobile({ height: "100%", margin: "0px", objectFit: "cover" })}
`;
const Info = styled.div`
  top: 0px;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  bottom: 0px;
  margin: auto;
  cursor: pointer;
  z-index: 2;
  ${mobile({ width: "100%" })}
`;
const Title = styled.h2`
  font-size: 25px;
  font-weight: 800;
  letter-spacing: 4px;
  margin-top: 30px;
  margin-left: 200px;
  margin-bottom: 20px;
  color: red;
  width: 100%;
  ${mobile({ marginLeft: "170px", width: "100%" })}
`;
const Button = styled.button`
  padding: 10px;
  font-size: 15px;
  font-weight: 400;
  margin-left: 100px;
  ${mobile({ marginLeft: "0px" })}
`;

function CategoryItem({ item }) {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button>Show More</Button>
        </Info>
      </Link>
    </Container>
  );
}

export default CategoryItem;
