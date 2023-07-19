import styled from "styled-components"
import { useLocation } from "react-router-dom"
import {totalData} from "../../data"
import Pickup from "./Pickup"
import TourIncludes from "./TourInculdes"
import Gallery from "./Gallery"
import Reservation from "./Reservation"
import HereForYou from "../HomePage/HereForYou"

import Faqs from "../../Components/faqs/faqs"

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

import Background1 from "../../images/tour-page-background-1.jpg"
import Background2 from "../../images/tour-page-background-2.jpg"
import Background3 from "../../images/tour-page-background-3.jpg"
import Background4 from "../../images/tour-page-background-4.jpg"

const backgroundArr = [Background1, Background2, Background3, Background4]

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

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    color: #272053;
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

    @media only screen and (max-width: 500px){
        height: 250px;
}
`

const Name = styled.h2`
    margin-top: 110px;
    font-size: 88px;

    @media only screen and (max-width: 1100px){
        font-size: 60px;
        margin-bottom: 100px;
    }

    @media only screen and (max-width: 850px){
        font-size: 50px;
        margin-bottom: 100px;
    }
`

const Content = styled.div`
    width: 90%;
    display: flex;
    align-items: flex-start;
    justify-content: space-evenly;

    @media only screen and (max-width: 500px){
        flex-direction: column;
        align-items: center;
    }
`

const TextArea = styled.div`
    margin-top: 20px;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;

    @media only screen and (max-width: 500px){
        width: 90%;
        justify-content: center;
        text-align: center;
    }

`

const Text = styled.p`
    margin-top: 30px;
    text-align: left;

    @media only screen and (max-width: 500px){
        width: 90%;
        justify-content: center;
        text-align: center;
    }
`



const TripPage = () => {

    const location = useLocation().pathname
    const withoutSlash = location.substring(6)
    const data = totalData.find(tour => tour.url === withoutSlash)
    
    const {name, price, info} = data

    return <Container>
    <Image image={backgroundArr[(Math.floor(Math.random() * backgroundArr.length))]} alt="background image" />
    <Name>{name}</Name>
    
    <Content>

    <TextArea>
        <Pickup pickup={true} price={price} />
        <Text>{info}</Text>

        <TourIncludes />
        <Reservation name={name} />

    </TextArea>
    
    <Gallery />
    

    </Content>


    <div style={{width: '80%', marginBottom: '80px'}}>
    <Faqs />
    </div>

    <HereForYou />
   
    </Container>
}

export default TripPage