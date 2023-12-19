import styled from "styled-components";
import Navabar from "../components/Navabar";
import Feed from "../components/Feed";
import Fotter from "../components/Fotter";
import Add from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { addProduct } from "../reducer/cartReducer";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { mobile } from "../responsive";
// import { useHistory } from "react-router-dom";

const Container = styled.div`
  height: 128vh;
  width: 100vw;
  overflow: hidden;
  /* display: flex; */
  ${mobile({ height: "120vh" })}
`;
const Wrapper = styled.div`
  height: 60%;
  width: 70%;
  display: flex;
  margin-top: 30px;
  margin-left: 40px;
  ${mobile({ display: "flex", flexDirection: "column" })}
`;
const ImageContainer = styled.div`
  flex: 1;
  height: "500px";
  width: "500px";
  ${mobile({
    display: "flex",
    height: "30%",
    marginLeft: "80px",
    maxHeight: "200px",
  })}
`;
const InfoContainer = styled.div`
  flex: 1;
  ${mobile({ height: "50%", marginLeft: "30px" })}
`;
const Image = styled.img`
  width: "80%";
  height: "80%";
  ${mobile({ height: "100%", objectFit: "contain" })}
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
  ${mobile({
    ":nth-child(2)": {
      marginLeft: "20px",
    },
  })}
`;
const Fliter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const FliterTitle = styled.div`
  font-size: 20px;
  font-weight: 200;
  margin-right: 10px;
`;
const FilterColor = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 20px;
  background-color: ${(props) => props.color};
  margin-left: 5px;
  cursor: pointer;
  transition: all 0.5s ease;
`;

const FliterSize = styled.select`
  padding: 7px;
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
  margin-left: 112px;
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
  const user = useSelector((state) => state.user);
  console.log(user.currentUser);
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(
          "https://ecommerce-app-f1ic.onrender.com/api/product/find/" + id
        );
        setProduct(res.data);
      } catch (error) {}
    };
    getProduct();
  }, [id]);

  const handelQuantity = (type) => {
    if (type === "remove") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  // const handleClick = () => {
  //   dispatch(addProduct({ ...product, quantity, color, size }));
  // };
  const handleClick = () => {
    if (user.currentUser) {
      // If there is a user, dispatch the addProduct action
      dispatch(addProduct({ ...product, quantity, color, size }));
    } else {
      // If there is no user, handle the logic accordingly (e.g., show a message)
      navigate("/sign-in");
    }
  };
  return (
    <Container>
      <Navabar />
      <Feed />
      <Wrapper>
        <ImageContainer>
          {/* <Image src={product.img} /> */}
          <Image
            src={product.img}
            style={{ height: "400px", width: "500px", objectFit: "contain" }}
          />
        </ImageContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don’t look even slightly
            believable.
          </Desc>
          <Price>$ {product.price}</Price>
          <FliterConatiner>
            <Fliter>
              <FliterTitle>color</FliterTitle>
              {product.color?.map((c) => (
                <FilterColor color={c} key={c} onClick={() => setColor(c)} />
              ))}
            </Fliter>
            <Fliter>
              <FliterTitle style={{ marginLeft: "60px" }}>size</FliterTitle>
              <FliterSize onChange={(e) => setSize(e.target.value)}>
                {product.size?.map((s) => (
                  <Option key={s}>{s}</Option>
                ))}
              </FliterSize>
            </Fliter>
          </FliterConatiner>
          <CartConatier>
            <Remove
              onClick={() => handelQuantity("remove")}
              style={{ cursor: "pointer" }}
            />
            <Amount>{quantity}</Amount>
            <Add
              onClick={() => handelQuantity("add")}
              style={{ cursor: "pointer" }}
            />
            <Button onClick={handleClick}>Add to Cart</Button>
          </CartConatier>
        </InfoContainer>
      </Wrapper>
      <Fotter />
    </Container>
  );
}

export default product;
