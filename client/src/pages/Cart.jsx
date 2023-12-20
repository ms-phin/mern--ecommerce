import Navabar from "..//components/Navabar";
import Feed from "..//components/Feed";
import Fotter from "..//components/Fotter";
import styled from "styled-components";
import Add from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addProductQuantity } from "../reducer/cartReducer";
import Pay from "../Pay";
import { mobile } from "../responsive";

const Conatiner = styled.div`
  /* height: 100vh;
  width: 100vw; */
  overflow: hidden;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 100%;
  height: 100%; */
`;
const Title = styled.h2`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
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
  &:hover {
    cursor: pointer;
  }
`;
const MiddleDesc = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({
    display: "none",
  })}
`;
const Shopping = styled.span`
  margin: 10px;
  text-decoration: underline;
`;

const ProductAdd = styled.div`
  display: flex;
  ${mobile({ display: "flex", flexDirection: "column" })}
`;
const ProductItems = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
`;
const ProductSummer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  border: 0.5px solid lightgray;
  padding: 10px;
  height: 300px;
  margin: 5px;
`;
const ProductdDesc = styled.span`
  display: flex;
  margin-left: 10px;
  ${mobile({ display: "flex", flexDirection: "column" })}
`;
const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const ImageCOntainer = styled.span`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  height: 200px;
  width: 200px;
  margin: 10px;
  object-fit: cover;
`;
const ImageDesc = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: center; */
  margin-left: 15px;
`;
const NameProduct = styled.span`
  margin: 10px;
`;

const ColorProduct = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  /* ${(props) => props.color} */
  margin: 8px;
`;

const PriceContaer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${mobile({ marginBottom: "30px", backgroundColor: "gray" })}
`;
const PriceDesc = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  font-size: 20px;
`;
const AmountNumber = styled.span`
  margin: 5px;
`;
const PriceValue = styled.span`
  font-size: 30px;
`;
const IdProduct = styled.span`
  margin: 10px;
  ${mobile({
    display: "none",
  })}
`;
const SizeProduct = styled.span`
  margin: 10px;
  ${mobile({
    marginTop: "-20px",
  })}
`;
const OrderTitle = styled.span`
  font-size: 35px;
  font-weight: 300;
  margin-left: 5px;
  margin-bottom: 10px;
`;
const SummerItemText = styled.span``;
const SummerItemprice = styled.span``;

const PayContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 5px;
  margin-bottom: 25px;
  font-weight: 500;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

function Cart() {
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  const user = useSelector((state) => state.user);
  console.log(cart);
  console.log(user.currentUser);
  const amount = cart.total;
  const username = user.currentUser?.username;
  console.log(username);
  const email = user.currentUser?.email;
  const tx_ref = `${username}-tx-13122623`;
  const public_key = "CHAPUBK_TEST-QWrLBBQxr4sTSewtSnaf5XNNzP23Ya61";
  const dispatch = useDispatch();

  const handleQuantity = (index, quantity) => {
    dispatch(addProductQuantity({ index, quantity }));
  };

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
          <ProductItems>
            {cart.products &&
              cart.products.map((item, index) => (
                <ProductdDesc key={item._id}>
                  <ImageCOntainer>
                    <Image src={item.img} />
                    <ImageDesc>
                      <NameProduct>
                        <b>Product</b> {item.Title}
                      </NameProduct>
                      <IdProduct>
                        <b>Id</b> {item._id}
                      </IdProduct>
                      <ColorProduct color={item.color}></ColorProduct>
                      <SizeProduct>
                        <b>size</b> {item.size}
                      </SizeProduct>
                    </ImageDesc>
                  </ImageCOntainer>
                  <PriceContaer>
                    <PriceDesc>
                      <Add
                        style={{ cursor: "pointer" }}
                        onClick={() => handleQuantity(index, 1)}
                      />
                      <AmountNumber>{item.quantity}</AmountNumber>
                      <Remove
                        style={{ cursor: "pointer" }}
                        onClick={() => handleQuantity(index, -1)}
                      />
                    </PriceDesc>
                    <PriceValue>$ {item.price * item.quantity}</PriceValue>
                  </PriceContaer>
                </ProductdDesc>
              ))}
            <Hr />
          </ProductItems>
          <ProductSummer>
            <OrderTitle>ORDER SUMMARY</OrderTitle>
            <PayContainer>
              <SummerItemText>Subtotal</SummerItemText>
              <SummerItemprice>$ {cart.total}</SummerItemprice>
            </PayContainer>
            <PayContainer>
              <SummerItemText>Estimated Shipping</SummerItemText>
              <SummerItemprice>$ 9.80</SummerItemprice>
            </PayContainer>
            <PayContainer>
              <SummerItemText>Shopping Discount</SummerItemText>
              <SummerItemprice>$ -5.77</SummerItemprice>
            </PayContainer>
            <PayContainer type="total">
              <SummerItemText>Total</SummerItemText>
              <SummerItemprice>{cart.total}</SummerItemprice>
            </PayContainer>
            <Button type="right">
              {" "}
              <Pay
                username={username}
                email={email}
                amount={amount}
                tx_ref={tx_ref}
                public_key={public_key}
              />
            </Button>
          </ProductSummer>
        </ProductAdd>
      </Wrapper>
      <Fotter />
    </Conatiner>
  );
}

export default Cart;
