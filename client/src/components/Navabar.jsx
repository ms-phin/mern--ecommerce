import React from "react";
import styled from "styled-components";
import Badge from "@mui/material/Badge";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";

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
`;

const Center = styled.div`
  flex: 1;
`;
const Header = styled.h1`
  display: flex;

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
`;
const Login = styled.h3`
  margin-right: 25px;
`;
const Icone = styled.h3``;

const Navabar = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Left>
            <Language>EN</Language>
            <SearchContainer>
              <Input></Input>
              <SearchOutlinedIcon />
            </SearchContainer>
          </Left>
          <Center>
            <Header>BEBILO</Header>
          </Center>
          <Right>
            <Registrer>Register</Registrer>
            <Login>Login</Login>
            <Icone>
              <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </Icone>
          </Right>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Navabar;
