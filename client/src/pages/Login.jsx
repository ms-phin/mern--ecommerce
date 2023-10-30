import styled from "styled-components";

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
  height: 40%;
  width: 36%;
  display: flex;
  flex-direction: column;
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
const Button = styled.button`
  font-size: 15px;
  font-weight: 500;
  color: #000;
  background-color: teal;
  padding: 15px;
  width: 30%;
  margin-left: 40px;
  margin-bottom: 20px;
  margin-top: 10px;

  &:hover {
    background-color: black;
    color: white;
  }
`;

function Login() {
  return (
    <Container>
      <FormContainer>
        <Title>SIGN IN</Title>
        <InputContainer>
          <Input placeholder="username" />
          <Input placeholder="password" />
        </InputContainer>
        <Button>LOGIN</Button>
        <Rules>DO YOU NOT REMEBER THE PASSWORD ? CREAYE NEW ACCOUNT</Rules>
      </FormContainer>
    </Container>
  );
}

export default Login;
