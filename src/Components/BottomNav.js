import styled from "styled-components";
import logo from "../Assets/logo.png"
import whatsapp from "../Assets/whatsapp.svg"
import phone from "../Assets/phone.svg"
import email from "../Assets/email.svg"
import facebook from "../Assets/facebook.svg"

const Container = styled.div`
    width: 90%;
    padding: 20px 5%;
    background-color: #795747;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
`

const Logo = styled.img`
    width: 50%;
    height: auto;
`

const Column = styled.div`
    max-width: 300px;
    height: 90%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
    gap: 20px 0;
    color: white;
`

const Row = styled.a`
    width: 40%;
    align-items: center;
    display: flex;
    text-decoration: none;
`

const Icon = styled.img`
    width: 26px;
    height: auto;
    margin-right: 12px;
`

const P = styled.p`
    text-align: left;
    width: 80%;
`

const A = styled.a`
    font-weight: 500;
    text-decoration: none;
    color: white;
    letter-spacing: 1px;
    font-size: 14px;
`

const CopyRights = styled.p`
    font-size: 14px;
    color: white;
`

const LinksContainer = styled.div`
    margin-left: 50px;
    width: 80%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 20px 50px;
`

const BottomNav = () => {
    return <Container>
    <Column>
    
    <Logo src={logo} alt="icon" />

    <CopyRights>© Copyright 2022-23 | Eagle Eyes Tourism</CopyRights>

    </Column>

    <LinksContainer>
    <Row href="https://wa.me/+971556414935?text=" target="_blank">
            <Icon src={whatsapp} alt="whatsapp icon" />
            <A>+971 55 641 4935</A>
        </Row>
        <Row href="tel:+97155641 4935">
            <Icon src={phone} alt="phone icon" />
            <A>+971 55 641 4935</A>
        </Row>
        <Row href="tel:+97155641 4935">
            <Icon src={email} alt="email icon" />
            <A>booking@bestdesertsafarideal.com</A>
        </Row>
        <Row href="https://www.facebook.com/eagle.eyes.tourism/" target="_blank">
        <Icon src={facebook} alt="facebook icon" />
        <A>facebook</A>
    </Row>
    </LinksContainer>

    </Container>
}

export default BottomNav;