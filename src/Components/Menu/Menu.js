import styled from "styled-components";
// import MenuLink from "./Link";
import { useId } from "react";
import MenuLink from "./Link"
// import bg from "../../assets/menubg.gif"

const Container = styled.div`
    display: none;
  @media only screen and (max-width: 600px) {
    display: flex;
  }
  transition: 1s ease-in-out;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: ${(p) => p.left};
  background: #FFF8F1;
  z-index: 15;
  align-items: center;
  justify-content: center;
`;

const LinksContainer = styled.div`
  height: 360px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  z-index: 2;
`;

const Background = styled.div`
  opacity: 0.1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  filter: invert(1);
  background-image: ${p => `url(${p.bg})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 1;
`;

const Menu = (props) => {
  const { menuToggle, setMenuToggle } = props;
  const id = useId();

  const Links = [
    {name: 'Home', to: '/'},
    {name: 'Desert Safari', to: '/desert-safari'},
    {name: 'Quad Bikes', to: '/quad-bikes'},
    {name: 'Gallery', to: '/gallery'},
    {name: 'Contact Us', to: '/contact-us'},
]


  return (
    <Container left={menuToggle ? "0%" : "-101%"}>
      <LinksContainer>
        {Links.map((link, i) => {
            return ( <MenuLink
                key={`${id}-${i}`}
                name={link.name}
                to={link.to}
                setMenuToggle={setMenuToggle}
                menuToggle={menuToggle}
                />
            );
          })}
      </LinksContainer>
      <Background />
    </Container>
  );
};

export default Menu;