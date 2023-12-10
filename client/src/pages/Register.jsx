import { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { mobile } from "../responsive";
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
`;
const FormContainer = styled.form`
  background-color: white;
  height: 50%;
  width: 40%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  ${mobile({ width: "100%" })}
`;
const Title = styled.h3``;
const InputContainer = styled.div`
  margin-left: 40px;
`;
const Input = styled.input`
  padding: 5px;
  margin: 5px;
  width: 40%;
`;
const Rules = styled.span`
  margin: 20px;
  font-size: 13px;
`;
const Button = styled.button`
  font-size: 15px;
  font-weight: 500;
  color: #000;
  background-color: teal;
  padding: 15px;

  &:hover {
    background-color: black;
    color: white;
  }
`;

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          username,
          email,
          password,
        }
      );

      console.log(response.data); // Handle the response from the backend

      // Reset the form fields
      setUsername("");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error(error);
    }
  };
  console.log("usename, email, password" + email, password, username);
  return (
    <Container>
      <FormContainer onSubmit={handleRegister}>
        <Title>Create An Account</Title>
        <InputContainer>
          <Input
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="username"
            value={username}
          />
          <Input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="email"
            value={email}
          />
          <Input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="password"
            value={password}
          />
        </InputContainer>
        <Rules>
          By creating an acount, I consent to the proccess of my personal data
          in accordance with the PRIVACY POLICY
        </Rules>
        <Button type="submit">CREATE</Button>
      </FormContainer>
    </Container>
  );
}

export default Register;
