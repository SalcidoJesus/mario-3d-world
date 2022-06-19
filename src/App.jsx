
import React from 'react'
import Menu from "./components/Menu.jsx";
import Header from "./components/Header.jsx";
import BotonesDivisores from "./components/BotonesDivisores.jsx";
import BodyPage from "./components/BodyPage.jsx";
import CatTastic from "./components/CatTastic.jsx";
import Footer from "./components/Footer.jsx";

function App() {

  return (
    <div className="w-[1920px] xsm:w-full mx-auto">
      <Menu/>
      <Header/>
      <BotonesDivisores/>
      <BodyPage/>
      <CatTastic/>
      <Footer/>
    </div>
  )
}

export default App
