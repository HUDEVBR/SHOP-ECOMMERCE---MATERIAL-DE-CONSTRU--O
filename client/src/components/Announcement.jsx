import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    background-color: #19c1df;
    color: white;
    display: flex;
    align-items: center;
    justify-content:center;
    font-size: 14px;
    font-weight: 500;
`;

const Announcement = () => {
  return (
      <Container>
          Super Oferta ! Frete Grátis em pedidos acima de R$ 100,00
      </Container>
  )
}

export default Announcement