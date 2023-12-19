import { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../reducer/apiCall";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(https://images.pexels.com/photos/5886041/pexels-photo-5886041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940),
    center;
  ${mobile({})}
`;

const FormContainer = styled.form`
  background-color: white;
  height: 40%;
  width: 36%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${mobile({
    width: "90%",
    height: "60%",
    marginBottom: "30px",
  })}
`;
const Title = styled.h3`
  margin-left: 40px;
  margin-top: 15px;
`;
const InputContainer = styled.div``;
const Input = styled.input`
  padding: 5px;
  margin: 5px;
  width: 70%;
  margin-left: 40px;
`;
const Rules = styled.span`
  margin-left: 40px;
  font-size: 13px;
`;
const From = styled.form``;
const Button = styled.button`
  font-size: 15px;
  font-weight: 500;
  color: #000;
  background-color: teal;
  padding: 12px;
  width: 30%;
  margin-left: 40px;
  margin-bottom: 7px;
  margin-top: 10px;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }

  &:hover {
    background-color: black;
    color: white;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 15px;
  font-weight: 400;
  color: #5cad4c;
`;
const Error = styled.span`
  color: red;
  margin-left: 40px;
`;

function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const { isFetching, isError } = useSelector((state) => state.user);

  const handelClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <Container>
      <FormContainer>
        <Title>SIGN IN</Title>
        <From>
          <InputContainer>
            <Input
              placeholder="username"
              type="text"
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              placeholder="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputContainer>
          <Button onClick={handelClick} disabled={isFetching}>
            LOGIN
          </Button>
        </From>

        {isError && <Error>Something Went Wrong</Error>}
        <Rules>
          Dont have an account? <StyledLink to="/sign-up">Sign Up</StyledLink>
        </Rules>
      </FormContainer>
    </Container>
  );
}

export default Login;
