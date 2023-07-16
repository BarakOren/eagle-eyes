import styled from "styled-components"
import WhatsAppSVG from "../Assets/whatsapp.svg"
import PhoneSVG from "../Assets/phone.svg"

const Container = styled.div`
    /* position: absolute;
    top: 0;
    left: 0; */
    width: 100%;
    height: 40px;
    background-color: #795747;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const WhatsAppContainer = styled.a`
    min-width: 200px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-decoration: none;
    margin-left: 30px;
`

const SVG = styled.img`
    height: 18px;
    width: auto;
    margin-right: 8px;
`

const P = styled.p`
    font-size: 12px;
    color: white;
`

const TopNav = () => {
    return <Container>
        <WhatsAppContainer href="https://wa.me/+971556414935?text=" target="_blank">
        <SVG src={WhatsAppSVG} alt="WhatsApp Icon" />
        <P>WhatsApp +971 55 641 4935</P>
        </WhatsAppContainer>

        <WhatsAppContainer href="tel:+97155641 4935">
        <SVG src={PhoneSVG} alt="Phone Icon" />
        <P>+971 55 641 4935</P>
        </WhatsAppContainer>
    </Container>
}   

export default TopNav