import styled from "styled-components";
import Logo from "../../Assets/logo.png"
import LinkTag from "./Link";

const Container = styled.header`
    width: 100%;
    height: 70px;
    position: absolute;
    top: 40px;
    left: 0;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px rgba(255,255,255, 0.5) solid;
    @media only screen and (max-width: 600px) {
    display: none;
  }
`

const LogoImage = styled.img`
    height: 50px;
    padding: 10px 20px;
    width: auto;
    background-color: rgba(39, 40, 44, 0.8);
`

const LinksContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    @media only screen and (max-width: 1000px) {
        width: 70%;
  }
`

const Header = () => {

    const Links = [
        {name: 'Home', to: '/'},
        {name: 'Desert Safari', to: '/desert-safari'},
        {name: 'Quad Bikes', to: '/quad-bikes'},
        {name: 'Gallery', to: '/gallery'},
        {name: 'Contact Us', to: '/contact-us'},
    ]

    return <Container>
    <LogoImage src={Logo} alt="logo" />
    <LinksContainer>
    {Links.map((link, i) => {
        return <LinkTag key={i} link={link} />
    })}
    </LinksContainer>
    </Container>
}

export default Header;