import styled from "styled-components";
import jeep from "../../Assets/jeep-svg.svg"

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: rgb(39, 32, 83);
    position: relative;
`

const P = styled.p`
    margin-right: 30px;
`

const Price = styled.p`
    padding: 6px 10px;
    background-color: #FFCF54;
    border-radius: 6px;
`

const Icon = styled.img`
    width: 50px;
    height: auto;
    margin-right: 20px;
    transition: .2s all;

    &:hover {
        filter: drop-shadow(5px 10px 20px #272053) ;
    }
`

const Pickup = (props) => {
    const {pickup, price} = props
    return <Container>
    <Icon src={jeep} alt="jeep icon" />
    <P>{pickup ? '4x4 Home Pick & Drop' : 'Without Pick & Drop'}</P>
    {pickup && <Price>{price} AED | Per Person</Price>}
    </Container>
}

export default Pickup