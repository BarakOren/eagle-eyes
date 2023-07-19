import styled from "styled-components";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const StyledLink = styled(Link)`
  font-size: 24px;
  cursor: pointer;
  transition: 0.2s box-shadow;
  color: rgba(39, 32, 83, 1);
  text-decoration: none;
  position: relative;
  width: 170px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: ${p => p.selected ? 'underline rgba(39, 32, 83, 1)' : 'none'};
`;


const MenuLink = (props) => {
  const location = useLocation().pathname;
  const { name, to, setMenuToggle, menuToggle } = props;

  const selected = location === to;

  return (
    <StyledLink
    to={to}
      selected={selected}
      onClick={() => {setMenuToggle(false); window.scrollTo({ top: 0 });}}
      menuToggle={menuToggle}
    >{name}
    </StyledLink>
  );
};

export default MenuLink;