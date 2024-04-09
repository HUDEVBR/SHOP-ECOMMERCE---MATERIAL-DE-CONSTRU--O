import styled from "styled-components";
import logo from "../assets/images/background_jfmateriais.png"
import { mobile } from "../responsive";

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
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({width: "75%", position: "absolute", bottom: "270px"})}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
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

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #85bc18;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  return (
        <Container>
          <Wrapper>
              <Title>CRIE SUA CONTA</Title>
              <Form>
                  <Input placeholder="Nome" />
                  <Input placeholder="Sobrenome" />
                  <Input placeholder="Nome de usuário" />
                  <Input placeholder="Email" />
                  <Input placeholder="Senha" />
                  <Input placeholder="Confirmar senha" />
                  <Agreement>Ao estar criando esta conta, Eu concedo o processamento dos meus
                      dados pessoais de acordo com a <b>POLÍTICA DE PRIVACIDADE</b> e a <b>LGPD</b>.
                  </Agreement>
                  <Button>CRIAR</Button>
              </Form>
          </Wrapper>
        </Container>
  )
}

export default Register