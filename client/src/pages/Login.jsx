import styled from "styled-components";
import logo from "../assets/images/background_jfmateriais.png"
import { login } from "../redux/apiCalls";
import { mobile } from "../responsive";
import {useDispatch, useSelector} from "react-redux"
import { useState } from "react";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)),url(${logo}) center 80%;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    `;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({width: "75%", position: "absolute", bottom: "300px"})}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
  border: solid 1px;
  background-color: transparent;
  color: #2e3092;
  font-weight: 500;
  &::placeholder{
    color: #c5c5c5; 
    font-weight: 700;
  }
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #85bc18;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled{
    color: #85bc18  ;
    cursor: not-allowed;
  }
`;

const Link = styled.a`
  margin: 5px 0;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
`

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, {username, password})
  };

  return (
    <Container>
    <Wrapper>
        <Title>LOGAR</Title>
        <Form>
          <Input
              placeholder="Usuário"
              onChange={(e) => setUsername(e.target.value)}
          />
          <Input
              placeholder="Senha"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleClick} disabled={isFetching}>LOGIN</Button>
          { error && <Error>Algo deu errado ...</Error>}
          <Link>ESQUECEU SEU SENHA?</Link>
          <Link>CRIAR NOVA CONTA</Link> 
        </Form>
    </Wrapper>
  </Container>
  )
}

export default Login