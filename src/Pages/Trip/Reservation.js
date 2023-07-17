import styled from "styled-components"

const Container = styled.div`
    margin-top: 30px;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    position: relative;
`

const Title = styled.h5`
    font-size: 40px;
    margin: 30px 0 20px 0;
    width: 100%;
    text-align: left;
`

const Text = styled.p`

`

const List = styled.ul`
    width: 100%;
    /* list-style-type: none; */
`

const Item = styled.li`
    padding-bottom: 10px;
    text-align: left;
`

const InstantText = styled.p`
    text-align: left;
    margin-top: 30px;
    font-weight: 600;
    margin-bottom: 20px;
`

const CallOrWhatsapp = styled.a`
    font-size: 18px;
    font-weight: 600;
    background-color: ${p => p.backgroundColor};
    padding: 6px 10px;
    align-self: flex-start;
    border-radius: 6px;
    color: white;
    margin: 6px 0;
`

const TicketSVG = styled.img`
    position: absolute;
    bottom: 100px;
    right: 20%;
    width: 70px;
    height: auto;
    border-radius: 50%;
    border: 3px solid #272053;
    padding: 20px;
`

const Reservation = ({name}) => {
    return <Container>
        <Title>For Quick Reservations of {name}</Title>
        <Text>Come along with us as we explore the desert. If you need any of our services, you may easily get in touch with us. Get in touch with us to plan an amazing experience.</Text>
        
        <InstantText>For instant booking confirmation please send the following details in WhatsApp</InstantText>
        
        <List>
            <Item>Name</Item>
            <Item>Tour - {name}</Item>
            <Item>Number Of People</Item>
            <Item>Number Of People</Item>
            <Item>Number Of Children/Infants</Item>
            <Item>Date Of Tour</Item>
            <Item>Contact Number</Item>
        </List>

        <CallOrWhatsapp backgroundColor={'rgba(37,211,102, 0.8)'} href="https://wa.me/+971556414935?text=" target="_blank">WhatsApp +971 55 641 4935</CallOrWhatsapp>
        <CallOrWhatsapp backgroundColor={'rgba(52, 183, 241, 0.8)'} href="tel:+97155641 4935" target="_blank">Call +971 55 641 4935</CallOrWhatsapp>

    </Container>
}

export default Reservation;