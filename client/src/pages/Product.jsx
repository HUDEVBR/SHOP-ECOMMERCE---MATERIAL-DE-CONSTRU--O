import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";
import { mobile } from "../responsive";
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";
import { addProduct } from '../redux/cartRedux'
import { useDispatch } from "react-redux";


const Container = styled.div``;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({padding: "10px", flexDirection: "column"})}
`;
const ImgContainer = styled.div`
    flex: 1;
`;

const Image = styled.img`
    width: 75%;
    height: 75%;
    object-fit: cover;
    ${mobile({width: "70%", height: "30vh"})}
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({padding: "10px"})}
`;

const Title = styled.h1`
    font-weight: 800;
`;

const Desc = styled.p`
    font-weight: 400;
    margin: 20px 0px;
    font-size: 18px;
`;

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`;

const FilterContainer = styled.div`
    width: 70%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    ${mobile({width: "100%", flexDirection: "column"})}
`;

const Filter = styled.div`
    display: flex;
    align-content: center;
    ${mobile({margin: "10px"})}
    
`;
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
    padding: 0px 20px;
    ${mobile({padding: "0 10px"})}
`;

const FilterBrandTypes = styled.span`
`;

const FilterBrand = styled.option`
    width: 150%;
    color: black;
    margin:4px 5px;
    cursor: pointer;

    &:active{
        color: black;
        font-weight: bolder
    }
    ${mobile({width: "40%"})}
`;
const FilterValues = styled.select`
    margin-left: 10px;
    padding: 5px;
`;

const FilterPrice = styled.option``;

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({width: "100%"})}
`;

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
`;

const Button = styled.button`
    padding: 12px;
    border: 2px solid teal;
    background-color: white;
    font-weight: 500;

    &:hover{
        background-color: #eaeef1;
        font-weight: 700;
    }
`;


const Product = () => {
    const location = useLocation();
    const id = location.pathname.split('/')[2];
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [brand, setBrand] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await publicRequest.get('/products/find/' + id)
                setProduct(res.data)
            } catch (error) {
                
            }
        };
        getProduct()
    }, [id]);

    const handleQuantity = (type) => {
        if (type === 'dec') {
            quantity > 1 && setQuantity(quantity - 1);
        } else {
            setQuantity(quantity + 1)
        }
    }

    const handleClick = () => {
        //atualizar o carrinho
        dispatch(
            addProduct({ ...product, quantity, brand }));
    };

  return (
      <Container>
          <Navbar />
          <Announcement />
          <Wrapper>
              <ImgContainer>
                  <Image src={`http://localhost:5000${product.img}`} />
              </ImgContainer>
              <InfoContainer>
                  <Title>{product.title}</Title>
                  <Desc>{product.desc}</Desc>
                  <Price>R$ {product.price}</Price>
                  <FilterContainer>
                  <Filter>
                          <FilterTitle>Marca:</FilterTitle>
                          <FilterBrandTypes onChange={(e) => setBrand(e.target.value)}>
                              {product.brand?.map((m) => (
                                  <FilterBrand key={m}>{ m}</FilterBrand>
                              ))}
                                </FilterBrandTypes>
                  </Filter>
                  </FilterContainer>
                  <AddContainer>
                      <AmountContainer>
                          <Remove onClick={() => handleQuantity('dec')} />
                          <Amount>{quantity}</Amount>
                          <Add onClick={() => handleQuantity('inc')}/>
                      </AmountContainer>
                      <Button onClick={handleClick}>ADICIONAR AO CARRINHO</Button>
                  </AddContainer>
              </InfoContainer>
          </Wrapper>
          <Newsletter />
          <Footer/>
      </Container>
  )
}

export default Product