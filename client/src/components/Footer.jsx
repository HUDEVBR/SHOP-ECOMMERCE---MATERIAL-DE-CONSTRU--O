import { EmailOutlined, Facebook, Instagram, Phone, Room, WhatsApp } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" , height: "80vh", marginBottom: "20px"})}
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
    ${mobile({fontSize: "12px", padding: "-15px", alignItems: "center", justifyContent: "center"})}
`;

const Logo = styled.h1``;

const Desc = styled.p`
    margin: 20px 0px;
`;

const SocialContainer = styled.div`
    display: flex;
    ${mobile({marginBottom: "10px", justifyContent: "center"})}
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: ${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    a{
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;   
    }

    ${mobile({width: "10vw"})}
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({display: "none"})}
`;

const Title = styled.h3`
    margin-bottom: 30px;
    ${mobile({marginBottom: "10px"})}
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;
 
const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({fontSize: "12px", backgroundColor: "#eee", padding: "5px"})}
`;

const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
${mobile({marginBottom: "10px"})}
`;

const Payment = styled.img`
    position: relative;
    width: 70%;
`;

const Footer = () => {
  return (
      <Container>
          <Left>
              <Logo>J F ENGENHARIA</Logo>
              <Desc>Uma loja de material de construção, voltada à venda
                  de ferramentas, utensílios, peças e matérias primas necessários
                  para a construção e reforma de casas, apartamentos e prédios
                  residenciais ou comerciais.
              </Desc>
              <SocialContainer>
                  <SocialIcon color="#3B5999">
                      <Facebook/>
                  </SocialIcon>
                  <SocialIcon color="#E4405F">
                      <Instagram/>
                  </SocialIcon>
                  <SocialIcon color="#02bb12">                  
                      <a href="https://web.whatsapp.com/send/?phone=%2B5521989197968&text&type=phone_number&app_absent=0" ><WhatsApp /></a> 
                  </SocialIcon>
              </SocialContainer>
          </Left>      
          <Center>
              <Title>Links Úteis</Title>
              <List>
                  <ListItem>Home</ListItem>
                  <ListItem>Carrinho</ListItem>
                  <ListItem>Fios</ListItem>
                  <ListItem>Disjuntores</ListItem>
                  <ListItem>Fitas</ListItem>
                  <ListItem>Lâmpadas</ListItem>
                  <ListItem>Minha Conta</ListItem>
                  <ListItem>Pedidos</ListItem>
                  <ListItem>Lista de Desejos</ListItem>
                  <ListItem>Termos</ListItem>
              </List>
          </Center>      
          <Right>
              <Title>Contato</Title>
              <ContactItem><Room style={{marginRight:"10px"}} />RUA MARIA QUITERIA, 47, CORUMBÁ, NOVA IGUAÇU, RJ - 26041-740</ContactItem>
              <ContactItem><Phone style={{marginRight:"10px"}}/>(21)989197968</ContactItem>
              <ContactItem><EmailOutlined  style={{marginRight:"10px"}}/>jfengenhariabr@gmail.com</ContactItem>
              <Payment src="/images/tipos_pgto.png"/>
          </Right>      
      </Container>
  )
}

export default Footer