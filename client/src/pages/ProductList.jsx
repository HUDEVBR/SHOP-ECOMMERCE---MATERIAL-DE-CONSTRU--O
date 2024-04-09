import styled from "styled-components"
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";

const Container = styled.div``;

const Title = styled.h1`
    margin: 20px;
`;

const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
`;

const Filter = styled.div`
    margin: 20px;
    ${mobile({width: "0px 20px", display: "flex", flexDirection: "column"})}
`;

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({marginRight: "0"})}
`;

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({margin: "10px 0"})}
`;

const Option = styled.option`
    display: flex;
    text-align: center;
`;

const ProductList = () => {
  return (
      <Container>
          <Navbar />
          <Announcement />
          <Title>Cabos</Title>
          <FilterContainer>
              <Filter>
                  <FilterText>Filtrar Produtos:</FilterText>
                  <Select>
                      <Option disabled selected>
                          Tipo de produto
                      </Option>
                      <Option>Cabos</Option>
                      <Option>Chuveiros</Option>
                      <Option>Cadeados</Option>
                      <Option>Disjuntores</Option> 
                      <Option>Lâmpadas</Option>
                  </Select>
                  <Select>
                      <Option disabled selected>
                          Marca
                      </Option>
                      <Option>3M</Option>
                      <Option>Cobrecon</Option>
                      <Option>G.E Genereal Eletric</Option>
                      <Option>Lorenzetti</Option> 
                      <Option>Papaiz</Option>
                      <Option>Megatron</Option>
                      <Option>Starret</Option> 
                      <Option>Taschibra</Option>
                  </Select>
              </Filter>
              <Filter>
                  <FilterText>Organizar Produtos:</FilterText>
                  <Select>
                      <Option selected>Recentes</Option>
                      <Option>Preço (cresc)</Option>
                      <Option>Preço (decr)</Option>
                  </Select>
              </Filter>
          </FilterContainer>
          <Products />
          <Newsletter />
          <Footer/>
      </Container>
  )
}

export default ProductList