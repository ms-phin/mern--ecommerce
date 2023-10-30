import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 30px;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: #1212c9;
  color: white;
`;
const Header = styled.h4``;
const Feed = () => {
  return (
    <Container>
      <Header>Super Deal shipping on Onder Over $50</Header>
    </Container>
  );
};

export default Feed;
