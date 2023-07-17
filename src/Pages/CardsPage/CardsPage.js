import styled from "styled-components"
import { useLocation } from "react-router-dom"
import { CardsData, QuadCardsData } from "../../data"
import Card from "./Card"
import Background1 from "../../images/tour-page-background-1.jpg"
import Background2 from "../../images/tour-page-background-2.jpg"
import Background3 from "../../images/tour-page-background-3.jpg"
import Background4 from "../../images/tour-page-background-4.jpg"

const Container = styled.div`
    width: 100%;
    min-height: 100%;
    margin-top: 120px;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-bottom: 50px;
`

const Title = styled.h3`
    width: 100%;
    text-align: center;
    font-size: 88px;
    color:rgb(39, 32, 83);
    margin: 20px 0;
`


const Image = styled.div`
    width: 100%;
    height: 300px;
    background-image: ${p => `url(${p.image})`};
    background-size: cover;
    background-position: center;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    opacity: 0.8;
`

const CardsContainer = styled.div`
    padding-top: 50px;
    width: 90%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 20px 0;
    flex-wrap: wrap;
`

const CardsPage = () => {

    const location = useLocation().pathname

    const backgroundArr = [Background1, Background2, Background3, Background4]
    
    const data = location === '/desert-safari' ? CardsData : QuadCardsData
    const title = location === '/desert-safari' ? 'Desert Safari' : 'Quad Bikes'

    return <Container>
    <Image image={backgroundArr[(Math.floor(Math.random() * backgroundArr.length))]} alt="background image" />
        <Title>{title}</Title>
        <CardsContainer>
        {data.map((card, i) => {
            return <Card key={card.name} data={card} />
        })}
        </CardsContainer>
    </Container>
}

export default CardsPage