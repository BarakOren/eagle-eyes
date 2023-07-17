import Homepage from './Pages/HomePage/HomePage';
import { Route, Routes } from 'react-router-dom';
import styled, {createGlobalStyle} from "styled-components"
import TopNav from './Components/TopNav';
import Header from './Components/Header/Header';
import { ParallaxProvider } from 'react-scroll-parallax';
import TripPage from './Pages/HomePage/Trip/TripPage';
import BottomNav from './Components/BottomNav';

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
  background: rgb(39, 39, 39);
}

::-webkit-scrollbar-thumb:hover{
  background: rgb(68, 68, 68);
}

`;


function App() {
  return (
    <>
    <GlobalStyle />
    <TopNav />
    <Header />
    <ParallaxProvider>
    <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/tour/:tour" element={<TripPage />} />
    </Routes>
    <BottomNav />
    </ParallaxProvider>
   
    </>
  );
}

export default App;
