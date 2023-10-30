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
  height: 50%;
  width: 40%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
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
  return (
    <Container>
      <FormContainer>
        <Title>Create An Account</Title>
        <InputContainer>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
        </InputContainer>
        <Rules>
          By creating an acount, I consent to the proccess of my personal data
          in accordance with the PRIVACY POLICY
        </Rules>
        <Button>CREATE</Button>
      </FormContainer>
    </Container>
  );
}

export default Register;
