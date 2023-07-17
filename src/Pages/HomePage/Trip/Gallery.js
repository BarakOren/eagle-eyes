import styled from "styled-components";
import one from "../../../images/gallery/045-300x200.jpg"
import two from "../../../images/gallery/048-300x200.jpg"
import three from "../../../images/gallery/054-300x200.jpg"
import four from "../../../images/gallery/056-300x200.jpg"
import five from "../../../images/gallery/059-300x200.jpg"


const Container = styled.div`
    width: 30%;
    display: flex;
    align-items: center;
    flex-direction: column;
    border: 1px solid black;
`

const Image = styled.img`
    width: 90%;
    margin: 20px 0;
    height: auto;
`

const Gallery = () => {
    return <Container>
    <Image src={one} alt="image" />
    <Image src={two} alt="image" />
    <Image src={three} alt="image" />
    <Image src={four} alt="image" />
    <Image src={five} alt="image" />

    </Container>
}

export default Gallery