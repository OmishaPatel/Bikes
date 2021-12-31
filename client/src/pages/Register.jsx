import styled from "styled-components";
import bike from "../images/mountainbikeregister.jpg";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { register } from "../redux/apiCalls";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.6),
      rgba(255, 255, 255, 0.6)
    ),
    url(${bike}) center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
`;

const Wrapper = styled.div`
  padding: 10px;
  width: 50%;
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

const Agreement = styled.span`
  font-size: 15px;
  margin: 20px 0px;
  text-align: center;
  max-width: 40%;
  ${mobile({ maxWidth: "75%" })}
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: black;
  color: white;
  cursor: pointer;
  border-radius: 10px;
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
const Error = styled.span`
  color: red;
`;
const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching } = useSelector((state) => state.user);
  const [error, setError] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    if (!username || !email || !password) {
      setError(true);
      window.location.replace("/register");
    }
    register(dispatch, { username, email, password });
    window.location.replace("/login");
  };
  return (
    <Container>
      <Link to="/" className="link">
        <HomeButton>Home</HomeButton>
      </Link>
      <Wrapper>
        <Title>Sign Up</Title>

        <Form>
          <Input
            placeholder="Username"
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <Input
            placeholder="Email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={handleClick} disabled={isFetching}>
            Sign Up
          </Button>
          {error && <Error>Something went wrong...</Error>}
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
