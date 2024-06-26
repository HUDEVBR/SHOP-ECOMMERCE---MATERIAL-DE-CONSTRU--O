import styled from "styled-components";
import { mobile } from "../responsive";
import {Link} from 'react-router-dom'

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;
const Image = styled.img`
width: 100%;
height: 100%;
object-fit: contain;
background-color:#b6b6b6;
${mobile({height: "30vh"})}
`;
const Info = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;
const Title = styled.h1`
color: #ffffff;
margin-bottom: 20px;
`;

const Button = styled.button`
border: none;
padding: 10px;
background-color: white;
color: gray;
font-weight: 600;
cursor: pointer;
`;

const CategoryItem = ({item}) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
      <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button>COMPRE AGORA</Button>
        </Info>
      </Link>
      </Container>
  )
}

export default CategoryItem