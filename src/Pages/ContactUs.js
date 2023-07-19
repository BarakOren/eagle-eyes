import styled from "styled-components"
import background from "../Assets/contactus-page-background.jpg"
import whatsapp from "../Assets/whatsapp.svg"
import phone from "../Assets/phone.svg"



const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    color: #272053;
    position: relative;
    background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0) 100%);
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-bottom: 60px;
`

const Background = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-image: url(${background});
    background-size: cover;
    z-index: -1;
    opacity: 0.3;

    
    @media only screen and (max-width: 700px){
        background-position: center;
    }
`

const Title = styled.h2`
    width: 100%;
    text-align: center;
    font-size: 100px;
    margin: 0;
    padding-top: 100px;

    @media only screen and (max-width: 620px){
        font-size: 80px;
    }
`

const Text = styled.p`
    font-size: 18px;
    margin-top: 50px;

    @media only screen and (max-width: 620px){
        font-size: 16px;
    }
`

const LinksContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin-top: 70px;

    @media only screen and (max-width: 1096px){
        width: 70%;
    }

    @media only screen and (max-width: 725px){
        width: 90%;
    }

    @media only screen and (max-width: 570px){
        margin-top: 30px;
        flex-direction: column;
        gap: 20px 0;
    }
`

const Row = styled.a`
    align-items: center;
    display: flex;
    text-decoration: none;
    background-color: #272053;
    padding: 12px 22px;
    border-radius: 12px;

 
`

const P = styled.p`
    font-weight: 500;
    text-decoration: none;
    color: white;
    letter-spacing: 1px;
    font-size: 20px;

    @media only screen and (max-width: 800px){
        font-size: 18px;
    }
`

const Icon = styled.img`
    width: 32px;
    height: auto;
    margin-right: 12px;

    @media only screen and (max-width: 800px){
        width: 30px;
    }
`


const List = styled.ul`
    width: 30%;
    /* list-style-type: none; */
`

const Item = styled.li`
    padding-bottom: 10px;
    text-align: left;
`

const ContactUs = () => {
    return <Container>
    <Background />
    <Title>Contact Us</Title>
    <Text>Message Us Any Time!</Text>

    <LinksContainer>
        <Row href="https://wa.me/+971556414935?text=" target="_blank">
            <Icon src={whatsapp} alt="whatsapp icon" />
            <P>+971 55 641 4935</P>
        </Row>
        <Row href="tel:+97155641 4935">
        <Icon src={phone} alt="phone icon" />
        <P>+971 55 641 4935</P>
        </Row>
    
    </LinksContainer>

    <Text>For booking please send us the following information:</Text>
    <List>
    <Item>Name</Item>
    <Item>Tour Name</Item>
    <Item>Number Of People</Item>
    <Item>Number Of People</Item>
    <Item>Number Of Children/Infants</Item>
    <Item>Date Of Tour</Item>
    <Item>Contact Number</Item>
    </List>
    </Container>
}

export default ContactUs

