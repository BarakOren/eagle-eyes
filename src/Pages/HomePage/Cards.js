import styled from "styled-components"
import Card from "./Card"
import {CardsData, QuadCardsData} from "../../data"
import { useRef, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

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
    width: 90%;
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

const RowTitleContainer = styled.div`
    margin: 50px 30px 30px 70px;
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const RowTitle = styled.h2`
    width: 50%;
    font-size: 52px;
    font-family: 'BioRhyme', serif;
    color: white;
    line-height: 38px;
    letter-spacing: 10px;
    color: #272053;
    cursor: default;
    text-align: left;
    margin: 0 0 20px 0;
`



const Span = styled.span`
    margin: 0 0px 0 0;
    color: #FFDE9F;
    display:inline-block;
    font-family: 'Shrikhand', cursive;
    -webkit-transform:scale(1,1.3); /* Safari and Chrome */
    -moz-transform:scale(1,1.3); /* Firefox */
    -ms-transform:scale(1,1.3); /* IE 9 */
    -o-transform:scale(1,1.3); /* Opera */
    transform:scale(1,1.3); /* W3C */    
`

const Description = styled.p`
    font-size: 16px;
    width: 50%;
    color:#272053;
    text-align: left;
`

const Cards = () => {


    function useHorizontalScroll() {
        const elRef = useRef();
        useEffect(() => {
          const el = elRef.current;
          if (el) {
            const onWheel = e => {
              if (e.deltaY === 0) {return};
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
    <RowTitleContainer>
    <RowTitle>Dubai <Span>Safari</Span> Deals</RowTitle>
    <Description>Choose one of our recommended dubai desert tours.</Description>
    </RowTitleContainer>
        <CardsContainer  ref={scrollRef}>
        {CardsData.map((card) => {
            return <Card 
            key={card.name}
            data={card}
            />
        })}
        </CardsContainer>
    </CardsRow>

    <CardsRow background='#F3F3F3' style={{paddingTop: '30px'}}>
    <RowTitleContainer>
    <RowTitle>Quads<Span>Bike</Span> Deals</RowTitle>
    <Description>All the quad-bikes and RZR options in the dubai desert.</Description>
    </RowTitleContainer>
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