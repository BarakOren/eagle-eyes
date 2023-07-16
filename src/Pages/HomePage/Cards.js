import styled from "styled-components"
import Card from "./Card"
import {CardsData, QuadCardsData} from "../../data"
import { useRef, useEffect } from "react";

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: white;
`

const Title = styled.h2`
    width: 100%;
    text-align: center; 
    font-size: 88px;
    color: #272053;
    margin: 50px 0 30px 0;
`

const CardsRow = styled.div`
    padding: 50px 0;
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 0 20px;
    background-color: ${p => p.background};
`

const CardsContainer = styled.div`
    max-width: 90%;
    overflow-x: scroll;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 0 30px;
    padding: 0 20px 0 10px;

    
    &::-webkit-scrollbar{
        height: 6px;
    }
    
    &::-webkit-scrollbar-thumb{
        background-color: rgb(39, 32, 83);
    }

`

const RowTitle = styled.h2`
    width: 100px;
    font-size: 40px;
    margin: 0 80px 0 50px;
`

const Cards = () => {

    // <Title>Our Thrilling Deals</Title>

    function useHorizontalScroll() {
        const elRef = useRef();
        useEffect(() => {
          const el = elRef.current;
          if (el) {
            const onWheel = e => {
              if (e.deltaY == 0) return;
              e.preventDefault();
              el.scrollTo({
                left: el.scrollLeft + e.deltaY,
                behavior: "smooth"
              });
            };
            el.addEventListener("wheel", onWheel);
            return () => el.removeEventListener("wheel", onWheel);
          }
        }, []);
        return elRef;
      }

      const scrollRef = useHorizontalScroll();
      const scrollRefTwo = useHorizontalScroll();

    return <Container>
    <CardsRow background='white' >
        <RowTitle>Dubai Safari Deals</RowTitle>
        <CardsContainer ref={scrollRef}>
        {CardsData.map((card) => {
            return <Card 
            key={card.name}
            data={card}
            />
        })}
        </CardsContainer>
    </CardsRow>

    <CardsRow background='#F3F3F3' style={{paddingTop: '30px'}}>
        <RowTitle>Dubai Safari Deals</RowTitle>
        <CardsContainer ref={scrollRefTwo}>
        {QuadCardsData.map((card) => {
            return <Card 
            key={card.name}
            data={card}
            />
        })}
        </CardsContainer>
    </CardsRow>
    </Container>
}


export default Cards;