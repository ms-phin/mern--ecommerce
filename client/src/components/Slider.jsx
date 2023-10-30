import React, { useState } from "react";

import styled from "styled-components";
import { sliderItems } from "../../src/data";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #6a7b8d; /* Replace with your desired background color */
  color: white;
  border: none;
  position: fixed;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0px;
  bottom: 0px;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;
const Slide = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;
const ImageContainer = styled.div`
  display: flex;
  margin: 10px;
  align-items: center;
  justify-content: center;
`;
const Image = styled.img`
  height: 82vh;
  width: 100%;
  object-fit: cover;
`;
const ImageDesc = styled.div`
  margin: 55px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #${(props) => props.bacg};
`;
const Title = styled.h2`
  margin-bottom: 10px;
  margin-left: 10px;
  font-size: 50px;
  letter-spacing: 4px;
`;
const Desc = styled.h4`
  margin-bottom: 10px;
  margin-left: 10px;
  font-size: 20px;
  font-weight: 800;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

function Slider() {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else if (direction === "right") {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlinedIcon />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide key={item.id}>
            <ImageContainer>
              <Image src={item.img} />
            </ImageContainer>
            <ImageDesc bacg={item.bg}>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>Show Now</Button>
            </ImageDesc>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlinedIcon />
      </Arrow>
    </Container>
  );
}

export default Slider;
