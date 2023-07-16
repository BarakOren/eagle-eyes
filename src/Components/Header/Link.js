import { Link } from "react-router-dom";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const LinkStyles = styled(Link)`
    text-decoration: none;
    color: white;
    border-bottom: ${p => p.match ? '3px solid white' : ''};
    padding: 10px 0;
`

const LinkTag = ({link}) => {

    const location = useLocation().pathname

    const { name, to } = link
    return <LinkStyles match={location === to} to={to}>{name}</LinkStyles>
}

export default LinkTag