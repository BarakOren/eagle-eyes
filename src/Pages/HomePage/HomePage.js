import styled from "styled-components"
import Intro from "./Intro"
import WhoAreWe from "./WhoAreWe"
import Cards from "./Cards"
import Faqs from "../../Components/faqs/faqs"
import TireMarkBackground from "../../Assets/tire-mark-background.jpg"
import HereForYou from "./HereForYou"

const Container = styled.div`
    width: 100%;
`

const FaqContainre = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: center;

    @media only screen and (max-width: 900px) {
        height: 120vh;
    }
    @media only screen and (max-width: 620px) {
        height: 130vh;
    }
    @media only screen and (max-width: 580px) {
        height: 150vh;
    }
    @media only screen and (max-width: 470px) {
        display: none;
    }
`

const FaqBackground = styled.div`
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-image: url(${TireMarkBackground});
    position: absolute;
    background-size: cover;
    background-position: 10% 50%;
    opacity: 0.4;
    z-index: -1;
` 

const FaqInsideContainer = styled.div`
    width: 80%;
`

const Homepage = () => {
    return <Container>
    <Intro />
    <WhoAreWe />
    <Cards />

    <FaqContainre>
    <FaqBackground />
    <FaqInsideContainer>
    <Faqs />
    </FaqInsideContainer>
    </FaqContainre>
    
    <HereForYou />
    </Container>
}

export default Homepage