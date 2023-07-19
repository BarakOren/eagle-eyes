import styled from "styled-components";
import twentyfourSVG from "../../Assets/24svg.svg"
import jeepSVG from "../../Assets/jeep-svg.svg"
import languageSVG from "../../Assets/language-svg.svg"
import lightningSVG from "../../Assets/lightning-svg.svg" 
import background from "../../Assets/whoarewebackground.jpg"
import Cards from "./Cards";


const Container = styled.section`
    width: 100%;
    height: calc(100vh + 11px);
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #272053;
    position: relative;
`

const Background = styled.div`
    width: 100%;
    height: 100%;
    filter: grayscale(100%);
    opacity: 0.1;
    position: absolute;
    top: 0;
    left: 0;
    background-image: url(${background});
    background-size: cover;
    z-index: -1;
`

const Title = styled.h2`
    width: 100%;
    text-align: center;
    font-size: 100px;
    margin: 60px 0 20px 0;
`

const P = styled.p`
    width: 70%;
    font-size: 18px;
`

const LogosContainer = styled.div`
    margin-top: 100px;
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`

const LogoAndText = styled.div`
    width: 150px;
    transition: .2s all;

    &:hover {
        filter: drop-shadow(10px 10px 30px #272053) ;

    }
`

const Text = styled.p`
    margin: 10px 0 0 0;
`

const SVG = styled.img`
    width: 80px;
    height: auto;
    transition: .2s all;

    &:hover {
        transform: rotateX(10deg) rotateY(-10deg) translate(-10%, -10%);
    }
`

const WhoAreWe = () => {
    return <Container>

    <Background />

    <Title>Who Are We?</Title>
    <P>Desert Safari Dubai with Eagle Eyes Tourism which is the best sightseeing tour agency with Best Desert Safari Deal in Dubai, United Arab Emirates, having years of experience. We have been offering desert safari Dubai tours services to tourists for many years and have been widely recognized for our superior service.</P>
    
    <LogosContainer>

    <LogoAndText>
    <SVG src={lightningSVG} alt="icon"/>
    <Text>Instant Booking</Text>
    </LogoAndText>

    <LogoAndText>
    <SVG src={jeepSVG} alt="icon"/>
    <Text>Pick Up & Drop Off</Text>
    </LogoAndText>

    <LogoAndText> 
    <SVG src={twentyfourSVG} alt="icon"/>
    <Text>Availability 24/7</Text>
    </LogoAndText>

    <LogoAndText>
    <SVG src={languageSVG} alt="icon"/>
    <Text>English & Arabic Support</Text>
    </LogoAndText>


    </LogosContainer>

    </Container>
}

export default WhoAreWe;