import styled from "styled-components"

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`

const Title = styled.h5`
    font-size: 30px;
    margin: 30px 0 20px 0;
    text-align: left;
    width: 100%;
`

const List = styled.ul`
    width: 100%;
    margin: 0;
    columns: 2;
    -webkit-columns: 2;
    -moz-columns: 2;
    /* list-style-type: none; */
`

const Item = styled.li`
    padding-bottom: 10px;
    text-align: left;
`



const TourIncludes = () => {
    return <Container>
        <Title>Tour Inculdes</Title>
        <List>
            <Item>Dune Bashing</Item>
            <Item>Live Belly Dance Show</Item>
            <Item>Tanoura Dance Show</Item>
            <Item>Live Fire Show</Item>
            <Item>Short Camel Ride</Item>
            <Item>Tea & Unlimited Soft Drinks</Item>
            <Item>Starter served at 7:00 pm</Item>
            <Item>Sand Boarding</Item>
            <Item>Sunset Photography (Own camera)</Item>
            <Item>Arabic Costumes (Only for pictures)</Item>
        </List>
        <Title>Optional (Paid)</Title>
        <List>
        <Item>Falcon Picture</Item>
        <Item>Quad Bike (Single & Double)</Item>
        <Item>Long Camel Ride</Item>

    </List>

    </Container>
}

export default TourIncludes;