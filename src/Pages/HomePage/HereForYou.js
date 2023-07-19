import styled from "styled-components"
import background from "../../Assets/contactus-background.jpg"
import { Link } from "react-router-dom"

const Container = styled.div`
    width: 100%;
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px 0;
    position: relative;

    @media only screen and (max-width: 471px) {
        height: 100vh;
    }

   
`

const Background = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${background});
    background-size: cover;
    background-position: center;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    opacity: 0.2;
    filter: grayscale(50%);
` 


const Title = styled.h5`
    width: 100%;
    text-align: center;
    font-size: 62px;
    margin: 20px 0px 70px 0;
    color: rgb(39, 32, 83);

    span {
        font-size: 72px;
        background: linear-gradient(30deg, #ffbb00, #ff773d); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    @media only screen and (max-width: 900px) {
        font-size: 52px;
        span {
            font-size: 62px;
        }
    }

    @media only screen and (max-width: 750px) {
        width: 80%;
        margin: 20px 0px 40px 0;
    }

    @media only screen and (max-width: 471px) {
        width: 90%;
        margin: 0 0 100px 0;
    }
 
`

const Text = styled.p`
    font-size: 22px;
    color: rgb(39, 32, 83);

    @media only screen and (max-width: 900px) {
        font-size: 18px;
    }
    @media only screen and (max-width: 600px) {
        width: 90%;
    }
`


const BookATour = styled(Link)`    
    text-decoration: none;
    padding: 12px 32px;
    background: #ffbb00; /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #ffbb00, #ff773d); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #ffbb00, #ff773d); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    /* background-color: #272053; */
    color: white;
    border: none;
    border-radius: 16px;
    font-size: 18px;

    &:hover {
        cursor: pointer;
    }

    &:active {
        transform:scale(0.98);
    }

    @media only screen and (max-width: 750px) {
        font-size: 16px;
    }
   
`

const HereForYou = () => {
    return <Container>
    <Background />
        <Title>We Are Here For You <span>24/7!</span></Title>
        <Text>Contact us day or night, we will answer any question any time.
        <br />
        Or Book a trip within a minute, with a short whatsapp message!
        </Text>
        <BookATour onClick={() => window.scrollTo({ top: 0 })} to="/contact-us">Contact Us</BookATour>
    </Container>
}

export default HereForYou