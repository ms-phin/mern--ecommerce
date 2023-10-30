import Navabar from "..//components/Navabar";
import Feed from "..//components/Feed";
import Fotter from "..//components/Fotter";
import styled from "styled-components";
import Add from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove";

const Conatiner = styled.div`
  /* overflow: hidden; */
`;
const Wrapper = styled.div`
  /* height: 100vh; */
  width: 100vw;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const Title = styled.h2`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${(props) => (props.type === "sure" ? "15px" : "0px")};
  font-weight: 200;
`;
const TopButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Button = styled.button`
  margin: 20px;
  padding: 8px;
  background-color: ${(props) => (props.type === "right" ? "black" : "white")};
  color: ${(props) => (props.type === "right" ? "white" : "black")};
  cursor: pointer;
`;
const MiddleDesc = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Shopping = styled.span`
  margin-left: 10px;
  text-decoration: underline;
`;
const ProductAdd = styled.div`
  display: flex;
  margin: 20px;
`;

const ProducBody = styled.div`
  flex: 3;
  margin-right: 30px;
`;
const ProductSummer = styled.span`
  flex: 1;
  height: 50vh;
  border: 1px solid black;
`;
const ProductdDesc = styled.span`
  display: flex;
  width: 100%;
  margin-top: 20px;
`;

const ImageContainer = styled.div`
  display: flex;
  flex: 2;
`;
const Image = styled.img`
  height: 75%;
  width: 30%;
  object-fit: cover;
`;

const ImageDesc = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
`;
const NameProduct = styled.span`
  margin-bottom: 20px;
`;
const ColorProduct = styled.span`
  margin-bottom: 20px;
  width: 30px;
  height: 30px;
  border-radius: 50px;
`;
const SizeProduct = styled.span``;
const PriceContaer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
`;
const IdProduct = styled.div`
  margin-bottom: 20px;
`;
const PriceDesc = styled.div`
  display: flex;
  align-items: center;
  justify-content: centers;
`;
const AmountNumber = styled.div`
  margin: 0px 10px;
`;
const PriceValue = styled.div`
  font-size: 15px;
  margin-top: 15px;
  font-weight: 200;
`;

const SummerItem = styled.div`
  display: flex;
  justify-content: space-between;
`;
const SummerItemText = styled.span`
  margin-bottom: 15px;
  margin-left: 20px;
  font-size: 15px;
`;
const SummerItemPrice = styled.span`
  margin-bottom: 15px;
  margin-right: 20px;
`;

function Cart() {
  return (
    <Conatiner>
      <Navabar />
      <Feed />
      <Wrapper>
        <Title> YOUR BAG</Title>
        <TopButton>
          <Button>Continue Shopping </Button>
          <MiddleDesc>
            <Shopping>Shopping Bag</Shopping>
            <Shopping>Your Whylist</Shopping>
          </MiddleDesc>
          <Button type="right">CheckOut Now</Button>
        </TopButton>
        <ProductAdd>
          <ProducBody>
            <ProductdDesc>
              <ImageContainer>
                <Image src="https://flyingcart.pk/cdn/shop/products/1_227b79f9-ee6b-4b72-bab4-7657a4b9461a.jpg?v=1678535186" />
                <ImageDesc>
                  <NameProduct>
                    <b>product</b> BEBILO SHOES
                  </NameProduct>
                  <IdProduct>
                    <b>Id</b> 12345432
                  </IdProduct>
                  <ColorProduct
                    style={{ backgroundColor: "black" }}
                  ></ColorProduct>
                  <SizeProduct>
                    <b>size</b> L
                  </SizeProduct>
                </ImageDesc>
              </ImageContainer>
              <PriceContaer>
                <PriceDesc>
                  <Add style={{ cursor: "pointer" }} />
                  <AmountNumber>3</AmountNumber>
                  <Remove style={{ cursor: "pointer" }} />
                </PriceDesc>
                <PriceValue style={{ fontWeight: "300" }}>$ 40</PriceValue>
              </PriceContaer>
            </ProductdDesc>
            <hr />
            <ProductdDesc>
              <ImageContainer>
                <Image src="https://flyingcart.pk/cdn/shop/products/1_227b79f9-ee6b-4b72-bab4-7657a4b9461a.jpg?v=1678535186" />
                <ImageDesc>
                  <NameProduct>
                    <b>product</b> BEBILO SHOES
                  </NameProduct>
                  <IdProduct>
                    <b>Id</b> 12345432
                  </IdProduct>
                  <ColorProduct
                    style={{ backgroundColor: "black" }}
                  ></ColorProduct>
                  <SizeProduct>
                    <b>size</b> L
                  </SizeProduct>
                </ImageDesc>
              </ImageContainer>
              <PriceContaer>
                <PriceDesc>
                  <Add style={{ cursor: "pointer" }} />
                  <AmountNumber>3</AmountNumber>
                  <Remove style={{ cursor: "pointer" }} />
                </PriceDesc>
                <PriceValue>$ 40</PriceValue>
              </PriceContaer>
            </ProductdDesc>
          </ProducBody>
          <ProductSummer>
            <Title type="sure">OREDER SUMMER</Title>
            <SummerItem>
              <SummerItemText>Subtotal</SummerItemText>
              <SummerItemPrice>$ 78</SummerItemPrice>
            </SummerItem>
            <SummerItem>
              <SummerItemText>Estimated Shipping</SummerItemText>
              <SummerItemPrice>$ 5.8</SummerItemPrice>
            </SummerItem>
            <SummerItem>
              <SummerItemText>Shipping Discount </SummerItemText>
              <SummerItemPrice>$ -7.8</SummerItemPrice>
            </SummerItem>
            <SummerItem>
              <SummerItemText style={{ fontSize: "20px" }}>
                <b>Total</b>
              </SummerItemText>
              <SummerItemPrice style={{ fontSize: "20px" }}>
                <b>$ 80</b>
              </SummerItemPrice>
            </SummerItem>
            <Button style={{ width: "90%" }} type="right">
              CheckOut Now
            </Button>
          </ProductSummer>
        </ProductAdd>
      </Wrapper>
      <Fotter />
    </Conatiner>
  );
}

export default Cart;
