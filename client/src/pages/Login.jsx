import styled from "styled-components";
import bike from "../images/roadbikeposter.jpg";
import { login } from "../redux/apiCalls";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";

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
  &:disabled {
    color: darkgray;
    cursor: not-allowed;
  }
`;

const Error = styled.span`
  color: red;
`;
const HomeButton = styled.button`
  border: none;
  padding: 10px 10px;
  background-color: black;
  color: white;
  cursor: pointer;
  border-radius: 10px;
  position: absolute;
  top: 5%;
  right: 5%;
`;
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.user);

  const handleloginClick = (e) => {
    e.preventDefault();
    try {
      login(dispatch, { username, password });
    } catch (err) {
      window.location.replace("/login");
    }
  };
  return (
    <Container>
      <Link to="/" className="link">
        <HomeButton>Home</HomeButton>
      </Link>
      <Wrapper>
        <Title>Sign In</Title>
        <Form>
          <Input
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <Input
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            required
          />

          <Button onClick={handleloginClick}>Sign In</Button>
          {error && <Error>Something went wrong....</Error>}
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
