import styled from "styled-components"
import arrow from "../../Assets/rightarrow.svg"
import { Link } from "react-router-dom"

import SelfDriveSafari from "../../images/self-drive-safari.jpg"
import DesertSafariBus from "../../images/desert-safari-bus.jpg"
import EveningDesertSafari from "../../images/evening-desert-safari.jpg"
import VIPDesertSafari from "../../images/vip-desert-safari.jpg"
import PrivateDesertSafari from "../../images/private-desert-safari.jpg"
import DesertSafariQuadBike from "../../images/desert-safari-quad-bike.jpg"
import MorningDesertSafari from "../../images/morning-desert-safari.jpg"
import OvernightDesertSafari from "../../images/overnight-desert-safari.jpg"
import DuneBuggy from "../../images/dune-buggy.jpg"

import QuadBikeSingle from "../../images/quad-bike-1.jpg"
import QuadBikeSingle1Hour from "../../images/quad-bike-2.jpg"
import QuadBikeDouble from "../../images/quad-bike-3.jpg"
import RZR1SeaterBuggy from "../../images/Rzr-2-seater-buggy.jpg"
import RZR2SeaterBuggy from "../../images/dune-buggy.jpg"
import RZR4SeaterBuggy from "../../images/rzr-3-seater-buggy.jpg"

const images = {
    OvernightDesertSafari,
    DuneBuggy,
    MorningDesertSafari,
    DesertSafariQuadBike,
    PrivateDesertSafari,
    VIPDesertSafari,
    EveningDesertSafari,
    DesertSafariBus,
    SelfDriveSafari,
    QuadBikeSingle,
    QuadBikeSingle1Hour,
    QuadBikeDouble,
    RZR1SeaterBuggy,
    RZR2SeaterBuggy,
    RZR4SeaterBuggy
  };

const Container = styled(Link)`
    width: 200px;
    padding: 0 20px;
    height: 300px;
    border-radius: 16px;
    background-image: ${p => `url(${p.background})`};
    background-size: cover;
    position: relative;
    cursor: pointer;

    &:hover {
        filter: drop-shadow(5px 5px 5px rgba(0,0,0,0.5)) ;
    }

    
    @media only screen and (max-width: 890px){
        width: 180px;
        height: 280px;
    }

    @media only screen and (max-width: 761px){
        width: 200px;
        height: 300px;
    }

    @media only screen and (max-width: 561px){
        width: 160px;
        height: 260px;
    }
    @media only screen and (max-width: 480px){
        width: 120px;
        height: 220px;
    }


`

const RightArrow = styled.img`
    opacity: 0;
    width:40px;
    height: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: .2s all;
    padding: 10px;

    
    ${Container}:hover & {
        opacity: 1; 
  }

`

const BlackScreen = styled.div`
    width: 100%;
    height: 100%;
    opacity: 1;
    background-color: rgb(123, 81, 56, 0.4);
    border-radius: 16px;
    transition: .2s all;
    position: absolute;
    top: 0;
    left: 0;

    ${Container}:hover & {
        background-color: rgb(123, 81, 56, 0.7);
  }

`

const Title = styled.h3`
    font-size: 18px;
    position: absolute;
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
    color: white;
    width: 100%;
    padding: 6px 0;
    margin: 0;

    @media only screen and (max-width: 480px){
    top: 20px;
        font-size: 16px;
    }
`

const Price = styled.p`
    position: absolute;
    bottom: 20px;
    left: 3px;
    padding: 6px;
    color: white;

    @media only screen and (max-width: 480px){
        bottom:10px;
        font-size: 14px;
    }
`



const Card = ({data}) => {

    const {name, url, price, image} = data

    return <Container to={`/tour/${url}`} onClick={() => window.scrollTo({ top: 0 })} background={images[image]} >
    <BlackScreen />
    <RightArrow src={arrow} alt="arrow" />
    <Title>{name}</Title>
    <Price>{price} AED | Per Person</Price>
    </Container>
}

export default Card;