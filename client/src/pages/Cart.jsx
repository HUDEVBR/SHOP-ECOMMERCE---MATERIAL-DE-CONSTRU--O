import { Add, Remove } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'
import { mobile } from '../responsive';
import StripeCheckout from 'react-stripe-checkout';
import { useEffect, useState } from 'react';
import { userRequest } from '../requestMethod'
import {useNavigate} from 'react-router-dom'

const KEY = process.env.REACT_APP_STRIPE

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

const ProductBrand = styled.span``;

const ProductSize = styled.span``;

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
    const cart = useSelector((state) => state.cart);
    const [stripeToken, setStripeToken] = useState(null);
    const navigate = useNavigate();

    const onToken = (token) => {
        setStripeToken(token)
    }

    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await userRequest.post("/checkout/payment", {
                    tokenId: stripeToken.id,
                    amount: 500,
                });
                navigate.push("/success", {
                    stripeData: res.data,
                    products: cart,
                });
            } catch (error) { }
        };
        stripeToken && makeRequest();
    }, [stripeToken, cart.total, navigate]);

  return (
    
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
                          {cart.products.map((product) => ( 
                              < Product >
                              <ProductDetail>
                                      <Image src={product.img} />
                                  <Details>
                                      <ProductName><b>Produto:</b> {product.title} </ProductName>
                                      <ProductId><b>ID:</b> {product._id }</ProductId>
                                          <ProductBrand> <b>Marca:</b> {product.brand} </ProductBrand>
                                          <ProductSize><b>Tamanho:</b> {product.size}</ProductSize>
                                  </Details>
                              </ProductDetail>
                              <PriceDetail>
                                  <ProductAmountContainer>
                                      <Add />
                                          <ProductAmount>{product.quantity}</ProductAmount>
                                      <Remove/>
                                  </ProductAmountContainer>
                                      <ProductPrice>R$ {product.price * product.quantity}</ProductPrice>
                              </PriceDetail>
                          </Product>
                        ))}
                        < Hr />
                      </Info>
                      <Summary>
                          <SummaryTitle>RESUMO DE PEDIDOS</SummaryTitle>
                          <SummaryItem>
                              <SummaryItemText>Subtotal</SummaryItemText>
                              <SummaryItemPrice>R$ {cart.total}</SummaryItemPrice>
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
                              <SummaryItemPrice>R$ {cart.total }</SummaryItemPrice>
                          </SummaryItem>
                          {/*Método de checkout da compra no Stripe*/ }
                          <StripeCheckout
                              name='JF MAT CONST'
                              image ={'https://raw.githubusercontent.com/HUDEVBR/SHOP-ECOMMERCE---MATERIAL-DE-CONSTRU--O/main/client/src/assets/images/ícone.png'}
                              billingAddress
                              shippingAddress
                              currency='BRL'
                              description={`O total é de: ${cart.total}`}
                              amount={cart.total * 100}
                              token={onToken}
                              stripeKey={KEY}
                          >
                          <Button>FINALIZAR COMPRA</Button>
                          </StripeCheckout>
                      </Summary>
                  </Bottom>
              </Wrapper>
              <Footer/>
        </Container>
    
  )
}

export default Cart