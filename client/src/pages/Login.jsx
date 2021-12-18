import styled from "styled-components";
import bike from "../images/roadbikeposter.jpg";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0.4)
    ),
    url(${bike}) center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Wrapper = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  flex-direction: column;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 44px;
  font-weight: bold;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Input = styled.input`
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  border-radius: 10px;
`;

const Button = styled.button`
  width: 50%;
  border: none;
  padding: 15px 20px;
  background-color: black;
  color: white;
  cursor: pointer;
  margin-top: 20px;
  border-radius: 10px;
`;
const Link = styled.a`
  margin: 15px 0px;
  font-size: 15px;
  text-decoration: underline;
  cursor: pointer;
  font-weight: bold;
`;
const Desc = styled.p`
  text-align: center;
  font-size: 15px;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <Form>
          <Input placeholder="Username" />
          <Input placeholder="Email" />

          <Button>Sign In</Button>
        </Form>
        <Link>Forgot Password?</Link>
      </Wrapper>
    </Container>
  );
};

export default Login;
