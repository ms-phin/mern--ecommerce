import styled from "styled-components";
import Navabar from "../components/Navabar";
import Feed from "../components/Feed";
import Fotter from "../components/Fotter";
import Add from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  /* display: flex; */
`;
const Wrapper = styled.div`
  height: 100%;
  width: 90%;
  display: flex;
  margin-top: 30px;
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const InfoContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 90%;
`;
const Title = styled.h2`
  /* margin-left: 20px; */
  font-size: 30px;
  font-weight: 200;
  margin-bottom: 20px;
`;
const Desc = styled.p`
  margin-bottom: 20px;
`;
const Price = styled.span`
  font-size: 30px;
  font-weight: 15px;
  margin-bottom: 20px;
`;
const FliterConatiner = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
`;
const Fliter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const FliterTitle = styled.div`
  font-size: 20px;
  font-weight: 200;
`;
const FlterColor = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 20px;
  background-color: ${(props) => props.color};
  margin-left: 5px;
`;

const FliterSize = styled.select`
  padding: 10px;
`;
// const Select = styled.select`
// `;
const Option = styled.option``;
const CartConatier = styled.div`
  margin-top: 30px;

  display: flex;
  align-items: center;
`;
const Amount = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  background-color: black;
  color: white;
  border-radius: 4px;
  margin: 8px;
  padding: 5px;
`;
const Button = styled.button`
  margin-left: 110px;
  padding: 10px;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    background-color: black;
    color: white;
  }
`;

function product() {
  return (
    <Container>
      <Navabar />
      <Feed />
      <Wrapper>
        <ImageContainer>
          <Image src="https://blog.bonfire.com/wp-content/uploads/2023/02/colorcombinations6-1.webp" />
        </ImageContainer>
        <InfoContainer>
          <Title>Denim Jumpster</Title>
          <Desc>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don’t look even slightly
            believable.
          </Desc>
          <Price>$ 20</Price>
          <FliterConatiner>
            <Fliter>
              <FliterTitle>color</FliterTitle>
              <FlterColor color="black" />
              <FlterColor color="blue" />
              <FlterColor color="gray" />
            </Fliter>
            <Fliter>
              <FliterTitle>size</FliterTitle>
              <FliterSize>
                <Option value="">ALL</Option>
                <Option value="">L</Option>
                <Option value="">M</Option>
                <Option value="">XL</Option>
                <Option value="">XXL</Option>
              </FliterSize>
            </Fliter>
          </FliterConatiner>
          <CartConatier>
            <Remove style={{ cursor: "pointer" }} />
            <Amount>1</Amount>
            <Add style={{ cursor: "pointer" }} />
            <Button>Add to Cart</Button>
          </CartConatier>
        </InfoContainer>
      </Wrapper>
      <Fotter />
    </Container>
  );
}

export default product;
