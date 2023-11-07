import React from "react";
import styled from "styled-components";
import Badge from "@mui/material/Badge";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Container = styled.div`
  width: 100%;
  height: 50px;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  /* justify-content: center; */
`;
const Language = styled.h5`
  font-size: 15px;
  cursor: pointer;
  margin-right: 10px;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: #837575 1px solid;
  border-radius: 5px;
`;
const Input = styled.input`
  border: none;
  outline: none;
`;

const Center = styled.div`
  flex: 1;
`;
const Header = styled.h1`
  display: flex;
  text-decoration: none;
  color: black;
  align-items: center;
  justify-content: center;
`;

const Right = styled.div`
  flex: 1;
  /* margin-left: 30px; */
  /* margin-right: 30px; */
  display: flex;
  align-items: center;
  justify-content: end;
`;
const Registrer = styled.h3`
  margin-right: 25px;
  color: black;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
const Login = styled.h3`
  margin-right: 25px;
  color: black;
`;
const Icone = styled.h3`
  color: black;
`;

const Navabar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  console.log(quantity);
  return (
    <div>
      <Container>
        <Wrapper>
          <Left>
            <Language>EN</Language>
            <SearchContainer>
              <Input placeholder="Search..." />
              <SearchOutlinedIcon />
            </SearchContainer>
          </Left>
          <Center>
            <StyledLink to="/">
              <Header>BEBILO</Header>
            </StyledLink>
          </Center>
          <Right>
            <StyledLink to="/sign-up">
              <Registrer>Register</Registrer>
            </StyledLink>
            <StyledLink to="/sign-in">
              <Login>Login</Login>
            </StyledLink>
            <StyledLink to="/cart">
              <Icone>
                <Badge badgeContent={quantity} color="primary">
                  <ShoppingCartOutlined />
                </Badge>
              </Icone>
            </StyledLink>
          </Right>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Navabar;
