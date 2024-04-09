import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive';

const Container = styled.div`
    height: 60px;
    ${mobile({height:"80px"})}
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({padding:"5px 0px"})}
`;

const Left = styled.div`
    flex: 1;
    display:flex;
    align-items: center;    
    ${mobile({marginLeft: "5px"})}
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({display: "none"})}
`;

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    ${mobile({ margin:"3px" })}
`;

const Input = styled.input`
    border: none;
    ${mobile({width: "60px"})}
`

const Center = styled.div`
    flex: 1;
    text-align: center;
    ${mobile({marginLeft: "10px"})}
`;

const Logo = styled.h1`
    font-weight: bold;
    ${mobile({padding: "8px ", fontSize: "18px"})}
`;


const Right = styled.div`
    flex: 1;    
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({flex: 2, justifyContent: "center", marginLeft: "-20px"})}
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "10px", marginLeft: "10px", fontWeight: "600" })}
`

const Navbar = () => {
  return (
      <Container>
          <Wrapper>
              <Left>
                  <Language>BR</Language>
                  <SearchContainer>
                      <Input placeholder="Pesquisar"/> 
                      <Search style={{color:"gray", fontSize:16}} />
                  </SearchContainer>
              </Left>
              <Center><Logo >J F MATERIAIS.</Logo></Center>
              <Right>
                  <MenuItem>REGISTRAR</MenuItem>
                  <MenuItem>LOGAR</MenuItem>
                  <MenuItem>
                    <Badge badgeContent={4} color="primary"> <ShoppingCartOutlined/></Badge>
                  </MenuItem>
              </Right>
          </Wrapper>
      </Container>
  )
}

export default Navbar