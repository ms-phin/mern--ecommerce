import React from "react";
import styled from "styled-components";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import Instagram from "@mui/icons-material/Instagram";
import Twitter from "@mui/icons-material/Twitter";
import Pinterest from "@mui/icons-material/Pinterest";
import Room from "@mui/icons-material/Room";
import Phone from "@mui/icons-material/Phone";
import MailOutLlne from "@mui/icons-material/MailOutline";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  background-color: aliceblue;
  ${mobile({
    display: "flex",
    flexDirection: "column",
    height: "90vh",
  })}
`;
const Left = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({
    display: "flex",
    flexDirection: "column",
    height: "33vh",
  })}
`;
const Logo = styled.h1`
  margin-bottom: 20px;
  ${mobile({
    marginBottom: "5px",
  })}
`;
const Desc = styled.p`
  margin-bottom: 20px;
  ${mobile({
    marginBottom: "5px",
  })}
`;
const SocialIcon = styled.div`
  margin: 10px;
  ${mobile({
    margin: "0px",
  })}
`;
const Center = styled.div`
  flex: 1;
  margin-bottom: 10px;
  ${mobile({
    height: "33vh",
    marginTop: "-170px",
    marginLeft: "12px",
  })}
`;
const Title = styled.h3`
  margin-bottom: 30px;
  margin-top: 20px;
`;
const List = styled.ul`
  padding: 0px;
  margin: 0px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 8px;
`;
const Right = styled.div`
  flex: 1;
  ${mobile({
    height: "33vh",
    marginTop: "-130px",
    marginLeft: "12px",
    marginBottom: "10px",
  })}
`;
const ContactItem = styled.h4`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;
function Fotter() {
  return (
    <Container>
      <Left>
        <Logo>BEBILO</Logo>
        <Desc>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </Desc>
        <SocialIcon>
          <FacebookOutlinedIcon />
          <Twitter />
          <Instagram />
          <Pinterest />
        </SocialIcon>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} />
          Hawassa , the southeastern of the city
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />
          +2519232402
        </ContactItem>
        <ContactItem>
          <MailOutLlne style={{ marginRight: "10px" }} />
          mesfinbaby1993@gmail.com
        </ContactItem>
      </Right>
    </Container>
  );
}

export default Fotter;
