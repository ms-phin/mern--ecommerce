import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;
const Image = styled.img`
  margin: 30px;
  object-fit: cover;
  height: 100%;
  width: 100%;
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
`;
const Title = styled.h2`
  font-size: 25px;
  font-weight: 800;
  letter-spacing: 4px;
  margin-top: 30px;
  margin-left: 136px;
  margin-bottom: 20px;
  color: white;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 15px;
  font-weight: 400;
  margin-left: 120px;
`;

function CategoryItem({ item }) {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>Show More</Button>
      </Info>
    </Container>
  );
}

export default CategoryItem;
