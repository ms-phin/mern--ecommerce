import styled from "styled-components";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const IconeContainer = styled.div`
  opacity: 0;
  height: 100%;
  width: 100%;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.2);
  top: 0px;
  bottom: 0px;
  margin: auto;
  cursor: pointer;
  z-index: 3;
`;

const Container = styled.div`
  background-color: white;
  margin: 10px;
  height: 50vh;
  position: relative;
  border-radius: 20px;
  &:hover ${IconeContainer} {
    opacity: 1;
  }
`;
const Image = styled.img`
  height: 100%;
`;

const CartIcon = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  margin: 5px;
  background-color: white;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: #704747;
    transition: all 1s ease;
    transform: scale(1.1);
  }
`;
const SearchIcon = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: white;
  margin: 5px;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: #704747;
    transition: all 1s ease;
    transform: scale(1.1);
  }
`;
const LoveIcon = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: white;
  color: black;
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: #704747;
    transition: all 1s ease;
    transform: scale(1.1);
  }
`;

const ProductItems = ({ item }) => {
  return (
    <Container key={item.id}>
      <Image src={item.img} />
      <IconeContainer>
        <CartIcon>
          <ShoppingCartOutlinedIcon />
        </CartIcon>
        <SearchIcon>
          <SearchOutlinedIcon />
        </SearchIcon>
        <LoveIcon>
          <FavoriteBorderOutlinedIcon />
        </LoveIcon>
      </IconeContainer>
    </Container>
  );
};

export default ProductItems;
