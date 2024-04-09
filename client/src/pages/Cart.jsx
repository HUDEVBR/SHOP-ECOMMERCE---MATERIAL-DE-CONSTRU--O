import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import styled from 'styled-components'
import Footer from '../components/Footer';
import { Add, Remove } from '@material-ui/icons';
import { mobile } from '../responsive';

const Container = styled.div``;

const Wrapper = styled.div`
    padding: 20px;
    ${mobile({padding: "10px"})}
`;

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${(props) => props.type === "filled" && "none"};
    background-color: ${(props) => props.type === "filled" ? "black" : "transparent"};
    color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
    ${mobile({display: "none"})}
`;

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0 10px;
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection: "column"})}
`;
const Info = styled.div`
    flex: 3;
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection: "column"})}
`;

const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`;

const Image = styled.img`
    width: 200px;
`;

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.span`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
`;

const PriceDetail = styled.span`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({margin: "5px 15px"})}
`;

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({marginBottom: "column"})}    
`;

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`;

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 60vh;
`;

const SummaryTitle = styled.h1`
    font-weight: 200;
`;

const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type === "total" && "500"};
    font-size: ${props => props.type === "total" && "24px"};
`;


const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;


const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
`;

const Cart = () => {
  return (
    <div>
        <Container>
              <Navbar />
              <Announcement />
              <Wrapper>
                  <Title>LAMPADAS</Title>
                  <Top>
                      
                      <TopButton>CONTINUAR COMPRANDO</TopButton>
                      <TopTexts>
                          <TopText>Lampadas (2)</TopText>
                          <TopText>Itens desejados (0)</TopText>
                      </TopTexts>
                      <TopButton type="filled">FINALIZAR COMPRAS</TopButton>
                  </Top>
                  <Bottom>
                      <Info>
                          <Product>
                              <ProductDetail>
                                  <Image src="./images/taschibra_luminaria_01.png"/>
                                  <Details>
                                      <ProductName><b>Produto:</b> Luminaria Taschibra </ProductName>
                                      <ProductId><b>ID:</b> 002</ProductId>
                                      <ProductColor color="black"/>
                                  </Details>
                              </ProductDetail>
                              <PriceDetail>
                                  <ProductAmountContainer>
                                      <Add />
                                      <ProductAmount>2</ProductAmount>
                                      <Remove/>
                                  </ProductAmountContainer>
                                  <ProductPrice>R$ 30</ProductPrice>
                              </PriceDetail>
                          </Product>
                          <Hr/>
                          <Product>
                              <ProductDetail>
                                  <Image src="./images/starret_broca_01.png"/>
                                  <Details>
                                      <ProductName><b>Produto:</b> Broca Starret </ProductName>
                                      <ProductId><b>ID:</b> 002</ProductId>
                                      <ProductColor color="black"/>
                                  </Details>
                              </ProductDetail>
                              <PriceDetail>
                                  <ProductAmountContainer>
                                      <Add />
                                      <ProductAmount>1</ProductAmount>
                                      <Remove/>
                                  </ProductAmountContainer>
                                  <ProductPrice>R$ 20</ProductPrice>
                              </PriceDetail>
                          </Product>
                      </Info>
                      <Summary>
                          <SummaryTitle>RESUMO DE PEDIDOS</SummaryTitle>
                          <SummaryItem>
                              <SummaryItemText>Subtotal</SummaryItemText>
                              <SummaryItemPrice>R$ 50</SummaryItemPrice>
                          </SummaryItem>
                          <SummaryItem>
                              <SummaryItemText>Frete</SummaryItemText>
                              <SummaryItemPrice>R$ 10</SummaryItemPrice>
                          </SummaryItem>
                          <SummaryItem>
                              <SummaryItemText>Desconto com Frete</SummaryItemText>
                              <SummaryItemPrice>R$ -4</SummaryItemPrice>
                          </SummaryItem>
                          <SummaryItem type="total">
                              <SummaryItemText>Total</SummaryItemText>
                              <SummaryItemPrice>R$ 56</SummaryItemPrice>
                          </SummaryItem>
                          <Button>FINALIZAR COMPRA</Button>
                      </Summary>
                  </Bottom>
              </Wrapper>
              <Footer/>
        </Container>
    </div>
  )
}

export default Cart