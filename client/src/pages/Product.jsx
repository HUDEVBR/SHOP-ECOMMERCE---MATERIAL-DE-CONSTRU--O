import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";
import { mobile } from "../responsive";

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
    width: 100%;
    height: 90vh;
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

const FilterBrandTypes = styled.select`
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
  return (
      <Container>
          <Navbar />
          <Announcement />
          <Wrapper>
              <ImgContainer>
                  <Image src="/images/taschibra_luminaria_01.png" />
              </ImgContainer>
              <InfoContainer>
                  <Title>Produto</Title>
                  <Desc>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium eaque iure atque? Hic vitae voluptatibus maiores exercitationem cumque odit quisquam officiis harum eius. Rerum vero corrupti debitis ea facilis quidem!</Desc>
                  <Price>R$ 50,00</Price>
                  <FilterContainer>
                  <Filter>
                          <FilterTitle>Marca:</FilterTitle>
                          <FilterBrandTypes>
                                    <FilterBrand value="default"></FilterBrand>
                                    <FilterBrand value="0">3M</FilterBrand>
                                    <FilterBrand value="1">G.E. General Eletrics</FilterBrand>
                                    <FilterBrand value="2">Cobrecon</FilterBrand>
                                    <FilterBrand value="3">Lorenzetti</FilterBrand>
                                    <FilterBrand value="4">Lumifacil</FilterBrand>
                                    <FilterBrand value="5">Megatron</FilterBrand>
                                    <FilterBrand value="6">Papaiz</FilterBrand>
                                    <FilterBrand value="7">Starret</FilterBrand>
                                    <FilterBrand value="8">Taschibra</FilterBrand>
                                    <FilterBrand value="9">Imperial</FilterBrand>
                                </FilterBrandTypes>
                  </Filter>
                  <Filter>
                      <FilterTitle >Preços:</FilterTitle>    
                          <FilterValues>
                            <FilterPrice>Até R$ 50</FilterPrice>
                            <FilterPrice>De R$ 51 Até R$ 100</FilterPrice>
                            <FilterPrice>De R$ 101 Até R$ 200</FilterPrice>
                            <FilterPrice>Mais de R$ 201</FilterPrice>
                        </FilterValues>
                  </Filter>
                  </FilterContainer>
                  <AddContainer>
                      <AmountContainer>
                          <Remove />
                          <Amount>1</Amount>
                          <Add/>
                      </AmountContainer>
                      <Button>ADICIONAR AO CARRINHO</Button>
                  </AddContainer>
              </InfoContainer>
          </Wrapper>
          <Newsletter />
          <Footer/>
      </Container>
  )
}

export default Product