import styled from "styled-components";
import arrow from '../../Assets/rightarrow.svg'
import Xsvg from "../../Assets/Xsvg.svg"
import { useEffect } from "react";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.8);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 20;
    display: ${p => p.display ? 'block' : 'none'};
`

const Flex = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Image = styled.img`
    width: 50%;
    height: auto;
    margin: 0 10vw;
`

const Arrow = styled.img`
    width: 40px;
    height: auto;
    cursor: pointer;
    opacity: ${p => p.opacity ? '0.3' : '1'};
`

const Count = styled.p`
    position: absolute;
    top: 30px;
    left: 30px;
    font-size: 18px;
    color: white;
    letter-spacing: 3px;
`

const X = styled.p`
    top: 28px;
    right: 40px;
    position: absolute;
    color: white;
    cursor: pointer;
    font-size: 22px;
`

const Carousel = (props) => {
    const {images, num, setNum} = props;

    useEffect(() => {
        const keyDownHandler = event => {
          if (event.key === 'Escape') {
            event.preventDefault();
            setNum(-1);
          }
        };
        document.addEventListener('keydown', keyDownHandler);
        return () => {document.removeEventListener('keydown', keyDownHandler);};
      }, []);

    const handleRightArrow = () => {
        if(num === images.length - 1) return ;
        setNum(num + 1)
    }

    const handleLeftArrow = () => {
        if(num === 0) return;
        setNum(num - 1)
    }

    return <Container display={num !== -1} >
    <Flex>
    <X onClick={() => setNum(-1)}>X</X>
    <Count>{num + 1} / {images.length}</Count>
    <Arrow opacity={num === 0} onClick={() => handleLeftArrow()} style={{transform: 'rotate(180deg)'}} src={arrow} alt="arrow" />
    <Image src={images[num]} alt="image" />
    <Arrow opacity={num === images.length - 1} onClick={() => handleRightArrow()} src={arrow} alt="arrow" />
    </Flex>
    </Container>
}

export default Carousel