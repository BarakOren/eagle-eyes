import styled from "styled-components"
import Intro from "./Intro"
import WhoAreWe from "./WhoAreWe"
import Cards from "./Cards"

const Container = styled.div`
    width: 100%;
`

const Homepage = () => {
    return <Container>
    <Intro />
    <WhoAreWe />
    <Cards />
    </Container>
}

export default Homepage