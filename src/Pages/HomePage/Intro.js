import styled from "styled-components"
import Image from "../../Assets/mainimage2.jpg"
import { Parallax } from 'react-scroll-parallax';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';






const Container = styled.div`
    width: 100%;
    color: black;
    height: calc(100vh - 40px);
    /* background-image: url(${Image}); */
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
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
    width: 1000px;
`

const H1 = styled.h1`
    font-size: 100px;
    font-family: 'BioRhyme', serif;
    margin: 0;
    color: white;
    line-height: 70px;
    letter-spacing: 10px;
    cursor: default;
    transition: .5s all ease-in-out;
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

const BookATour = styled.button`    
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

const Intro = () => {

    const width = window.innerWidth < 420

    return <Container>
    <ParallaxBanner
    layers={[
        {
        image: Image,
        speed: -20,
        
        },
    ]}
    style={{ aspectRatio: '2 / 1' }}
    />
    <TextContainer>
    <Parallax disabled={width} opacity={[2, 0]} translateY={['-50px', '100px']} translateX={['0px', '-100px']}>
    <H1>DUBAI<br/><Span>SAFARI</Span><br/>DESERT</H1>
    <BookATour>Book A Tour</BookATour>
    </Parallax>
    </TextContainer>
    </Container>
}

export default Intro;