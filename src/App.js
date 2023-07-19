import Homepage from './Pages/HomePage/HomePage';
import { Route, Routes } from 'react-router-dom';
import styled, {createGlobalStyle} from "styled-components"
import TopNav from './Components/TopNav';
import Header from './Components/Header/Header';
import { ParallaxProvider } from 'react-scroll-parallax';
import BottomNav from './Components/BottomNav';
import TripPage from "./Pages/Trip/TripPage"
import CardsPage from './Pages/CardsPage/CardsPage';
import ContactUs from "./Pages/ContactUs"
import GalleryPage from './Pages/Gallery/GalleryPage';
import { useRef, useState } from 'react';
import Hamburger from './Components/Menu/Hamburger';
import Menu from './Components/Menu/Menu';


const GlobalStyle = createGlobalStyle`
  body {
    background: #FFF8F1;
    // color: rgb(230,230,230);
    text-align: center;
    margin: 0;
    overflow-x: hidden;
    font-family: 'Work Sans', sans-serif;
  }

p, h1 {
  margin: 0;
}

::-webkit-scrollbar{
  width: 12px;
}

::-webkit-scrollbar-thumb{
  background-color: rgb(39, 32, 83);
}

`;

const EagleEyeTourism = styled.p`
    position: absolute;
    top: 30px;
    right: 30px;
    font-size: 16px;
    color: white;
    z-index: 1;

    
    @media only screen and (min-width: 600px){
        display: none;
}
`


function App() {

  const bodyref = useRef(null)

  const [menuToggle, setMenuToggle] = useState(false)

  return (
    <>
    <GlobalStyle />
    <EagleEyeTourism>Eagle Eye Tourism</EagleEyeTourism>
    <TopNav />
    <Header />
    <Menu menuToggle={menuToggle} setMenuToggle={setMenuToggle} />
    <Hamburger menuToggle={menuToggle} setMenuToggle={setMenuToggle} />
    <ParallaxProvider>
    <Routes>
    <Route path="/" element={<Homepage />} />
    <Route exact path="/gallery" element={<GalleryPage bodyref={bodyref} />} />
    <Route exact path="/contact-us" element={<ContactUs />} />
    <Route path="/:cardspage" element={<CardsPage />} />
    <Route path="/tour/:tour" element={<TripPage />} />
    </Routes>
    <BottomNav />
    </ParallaxProvider>
   
    </>
  );
}

export default App;
