import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import styled from "styled-components"
import { useState } from "react";
import { sliderItems } from "../data";
import { mobile } from "../responsive";


const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    ${mobile({display: "none"})}
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.6;
    z-index:2;
`;

const Wrapper = styled.div`
    height: 100%;   
    display: flex;
    transition: all 2s ease;
    transform: translateX(${(props)=> props.slideIndex * -100}vw);
`;

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: ${props=>props.bg};
`;

const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
`;

const Image = styled.img`
    position: relative;
    top: 25%;
    left: 20%;
   height: 45%;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
    padding-right: 100px;
`;

const Title = styled.h1`
    font-size: 70px;
    color: #000000;  
`;

const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 800;
    letter-spacing: 3px;
    color: #000000;
`;

const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    font-weight: 800;
    background-color: transparent;
    cursor: pointer;
    color: #000000;
`;

const Slider = () => {
    const [slideIndex, setslideIndex] = useState(0)
    const handleClick = (direction) => {
        if (direction === "left") {
            setslideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        } else {
            setslideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    };

    return (
        <Container>
            <Arrow direction="left" onClick={()=>handleClick("left")}>
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item) => ( 
                    <Slide bg={item.bg} key={item._id}>
                    <ImgContainer>
                        <Image src={item.img} />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Desc>
                            {item.desc}
                        </Desc>
                        <Button>Comprar</Button>
                    </InfoContainer>
                </Slide>
            ))}
            </Wrapper>
            <Arrow direction="right" onClick={()=>handleClick("right")}>
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    );
};


export default Slider