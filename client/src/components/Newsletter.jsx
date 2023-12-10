import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  height: 50vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #f1e3e5;
  margin-top: 30px;
  ${mobile({ height: "50vh", marginTop: "190px" })}
`;
const Letter = styled.h1`
  margin-bottom: 20px;
`;
const Decraption = styled.h4`
  margin-bottom: 20px;
`;
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Input = styled.input`
  padding: 10px;
  width: 50vw;
  border: none;
`;

const Newsletter = () => {
  return (
    <Container>
      <Letter>Newsletter</Letter>
      <Decraption>Get timely updates from your favorite products</Decraption>
      <SearchContainer>
        <Input vlaue="your email"></Input>
        <Button variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
      </SearchContainer>
    </Container>
  );
};
export default Newsletter;
