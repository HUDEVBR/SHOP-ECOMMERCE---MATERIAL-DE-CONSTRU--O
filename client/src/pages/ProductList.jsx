import styled from "styled-components"
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { useLocation } from 'react-router';
import { useState } from "react";

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
    const location = useLocation();
    const cat = location.pathname.split('/')[2]
    const [filters, setFilters] = useState({})
    const [sort, setSort] = useState('recentes')

    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value,
        })
    }
  return (
      <Container>
          <Navbar />
          <Announcement />
          <Title>Cabos</Title>
          <FilterContainer>
              <Filter>
                  <FilterText>Filtrar Produtos:</FilterText>
                  <Select name= 'tipo' onChange={handleFilters}>
                      <Option disabled>
                          Tipo de produto
                      </Option>
                      <Option>Cabos</Option>
                      <Option>Chuveiros</Option>
                      <Option>Cadeados</Option>
                      <Option>Disjuntores</Option> 
                      <Option>Lâmpadas</Option>
                  </Select>
                  <Select name = 'marca' onChange={handleFilters}>
                      <Option disabled>
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
                  <Select onChange={e => setSort(e.target.value)}>
                      <Option value='newest'>Recentes</Option>
                      <Option value='cresc'>Preço (cresc)</Option>
                      <Option value='decr'>Preço (decr)</Option>
                  </Select>
              </Filter>
          </FilterContainer>
          <Products cat={cat} filters={ filters} sort={sort} />
          <Newsletter />
          <Footer/>
      </Container>
  )
}

export default ProductList