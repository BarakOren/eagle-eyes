import styled from "styled-components";
import logo from "../Assets/logo.png"
import whatsapp from "../Assets/whatsapp.svg"

const Container = styled.div`
    width: 100%;
    height: 300px;
    background-color: #795747;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
`

const Logo = styled.img`
    width: 20%;
    height: auto;
`

const ContactUs = styled.div`
    width: 30%;
    height: 90%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 20px 0;
`

const Row = styled.div`
    width: 100%;
`

const Icon = styled.img`
    width: 30px;
    height: auto;
`

const BottomNav = () => {
    return <Container>
    <Logo src={logo} alt="icon" />
    <ContactUs>
        <Row>
            <Icon src={whatsapp} alt="whatsapp icon" />
        </Row>
    </ContactUs>
    </Container>
}

export default BottomNav;