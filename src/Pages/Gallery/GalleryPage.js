import styled from "styled-components"
import Carousel from "./Carousel"
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import { useState, useEffect} from "react"
import background from "../../Assets/carousel-background-image.jpeg"
import HereForYou from "../HomePage/HereForYou"

import image1 from "../../images/gallerypage/001.jpg"
import image2 from "../../images/gallerypage/004.jpg"
import image3 from "../../images/gallerypage/005-Correction.jpg"
import image4 from "../../images/gallerypage/006.jpg"
import image5 from "../../images/gallerypage/009.jpg"
import image6 from "../../images/gallerypage/010.jpg"
import image7 from "../../images/gallerypage/011.jpg"
import image8 from "../../images/gallerypage/012.jpg"
import image9 from "../../images/gallerypage/014.jpg"
import image10 from "../../images/gallerypage/018.jpg"
import image11 from "../../images/gallerypage/020.jpg"
import image12 from "../../images/gallerypage/022.jpg"
import image13 from "../../images/gallerypage/023-Correction.jpg"
import image14 from "../../images/gallerypage/023.jpg"
import image15 from "../../images/gallerypage/026.jpg"
import image16 from "../../images/gallerypage/029.jpg"
import image17 from "../../images/gallerypage/032.jpg"
import image18 from "../../images/gallerypage/036.jpg"
import image19 from "../../images/gallerypage/037-Correction.jpg"
import image20 from "../../images/gallerypage/045.jpg"
import image21 from "../../images/gallerypage/048.jpg"
import image22 from "../../images/gallerypage/054.jpg"
import image23 from "../../images/gallerypage/056.jpg"
import image24 from "../../images/gallerypage/059.jpg"
import image25 from "../../images/gallerypage/062.jpg"
import image26 from "../../images/gallerypage/064.jpg"
import image27 from "../../images/gallerypage/066.jpg"
import image28 from "../../images/gallerypage/074.jpg"
import image29 from "../../images/gallerypage/085.jpg"

const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
    image18,
    image19,
    image20,
    image21,
    image22,
    image23,
    image24,
    image25,
    image26,
    image27,
    image28,
    image29
]

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    color: #272053;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Title = styled.h2`
    margin-top: 110px;
    font-size: 88px;
`

const ImagesContainer = styled.div`
    margin-top: 30px;
    margin-bottom: 50px;
    width: 80%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(repeat, 1fr);
    grid-column-gap: 30px;
    grid-row-gap: 30px;
    
`

const Image = styled.div`
    width: 300px;
    height: 200px;
    background-image: ${p => `url(${p.image})`};
    background-position: center;
    background-size: cover;
    cursor: pointer;
`

const BackgroundImage = styled.div`
    width: 100%;
    height: 300px;
    background-image: ${p => `url(${background})`};
    background-size: cover;
    background-position: 0 -100px;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    opacity: 0.6;
`


const GalleryPage = ({bodyref}) => {

    const [num, setNum] = useState(-1)
// disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks

    useEffect(() => {
        if(num >= 0){disableBodyScroll(bodyref); return}
        else if(num === -1) {enableBodyScroll(bodyref); return}
        return () => {clearAllBodyScrollLocks(bodyref)}
    }, [num])

    const handleClick = (i) => {
        setNum(i)
    }

    console.log(num)

    return <Container>
    <BackgroundImage />
        <Title>Our Guests</Title>
        <ImagesContainer>
            {images.map((image, i) => {
                return <Image 
                onClick={() => handleClick(i)}
                image={image} key={i} />
            })}
        </ImagesContainer>
        <Carousel num={num} setNum={setNum} images={images} />

        <HereForYou />
    </Container>
} 

export default GalleryPage;