import styled from "styled-components"
import Image from "../../Assets/mainimage22.jpg"
import { Parallax } from 'react-scroll-parallax';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import { Link } from "react-router-dom";
import BagePaperCut from "../../Assets/bagepapercut.png"


const Container = styled.div`
    width: 100%;
    color: black;
    height: calc(100vh - 40px);
    background-image: url(${Image});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;

    @media only screen and (max-width: 1100px) {
        background-size: 120%;
    }

    @media only screen and (max-width: 900px) {
        background-size: 130%;
    }

    
    @media only screen and (max-width: 800px) {
        background-size: 150%;
    }

    @media only screen and (max-width: 800px) {
        background-size: 150%;
    }

    @media only screen and (max-width: 600px) {
        background-size: 268%;
        background-position: 99% 38%;
        opacity: 1;
    }
`


const TextContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 120px;
    text-align: left;
    transform: translateY(-50%);
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    @media only screen and (max-width: 900px) {
        left: 100px;
    }

    @media only screen and (max-width: 800px) {
        left: 90px;
    }

    @media only screen and (max-width: 600px) {
        left: 55%;
        top: 46%;
        transform: translate(-50%, -50%);
        text-align: center;
    }

    
    @media only screen and (max-width: 420px) {
        left: 65%;
        transform: translate(-50%, -50%);
        text-align: center;
    }

`

const H1 = styled.h1`
    font-size: 100px;
    font-family: 'BioRhyme', serif;
    margin: 0;
    color: white;
    line-height: 70px;
    letter-spacing: 10px;
    cursor: default;


    @media only screen and (max-width: 1100px) {
        font-size: 90px;
        line-height: 60px;
    }
    @media only screen and (max-width: 900px) {
        font-size: 80px;
        line-height: 50px;
    }
    @media only screen and (max-width: 800px) {
        font-size: 60px;
        line-height: 60px;
    }

    @media only screen and (max-width: 600px) {
        text-shadow: 0 0 10px #000;
    -moz-text-shadow: 0 0 2px #000;
    -webkit-text-shadow: 0 0 2px #000;
    }

    @media only screen and (max-width: 500px) {
        font-size:50px;
    }
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

const BookATour = styled(Link)`    
    text-decoration: none;
    padding: 12px 32px;
    background-color: #272053;
    color: white;
    border: none;
    border-radius: 16px;
    font-size: 16px;
    position: absolute;
    bottom: -80px;
    left: 50%;
    transform: translateX(-50%);

    &:hover {
        cursor: pointer;
    }

    &:active {
        transform: translateX(-50%) scale(0.98);
    }
`


const PaperCut = styled.div`
    width: 100%;
    height: 30px;
    bottom: -11px;
    position: absolute;
    background-image: url(${BagePaperCut});
    z-index: 10;
    background-size: cover;
    
`

// <ParallaxBanner
// layers={[
//     {
//     image: Image,
//     speed: -20,
    
//     },
// ]}
// style={{ aspectRatio: '2 / 1' }}
// />

const Intro = () => {

    const width = window.innerWidth < 420

    return <Container>
    <PaperCut />
    <TextContainer>
    <Parallax 
    disabled={width} 
    opacity={[2, 0]} 
    // translateY={['-50px', '100px']} 
    translateX={['0px', '-100px']}
    
    >
    <H1>DUBAI<br/><Span>SAFARI</Span><br/>DESERT</H1>
    <BookATour onClick={() => window.scrollTo({ top: 0 })} to="/contact-us">Book A Tour</BookATour>
    </Parallax>
    </TextContainer>
    </Container>
}

export default Intro;