import styled from "styled-components";
import Navabar from "../components/Navabar";
import Feed from "../components/Feed";
import Fotter from "../components/Fotter";
import Add from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { addProduct } from "../reducer/cartReducer";
import { useDispatch } from "react-redux";

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
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/product/find/" + id
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

  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity, color, size }));
  };

  return (
    <Container>
      <Navabar />
      <Feed />
      <Wrapper>
        <ImageContainer>
          <Image src={product.img} />
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
              <FliterTitle>size</FliterTitle>
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
