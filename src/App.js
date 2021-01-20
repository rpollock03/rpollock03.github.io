import React from "react"
import "./App.css"
import Nav from "./components/Nav"
import Masthead from "./components/Masthead"
import Skills from "./components/Skills"
import Featured from "./components/Featured"
import Carousel from "./components/Carousel"
import Contact from "./components/Contact"


function App() {
  return (
    <div id="container" >
      <Nav />
      <Masthead />
      <Skills />
      <Featured />
      <Carousel />
      <Contact />

      <a href="#"><button id="back-to-top" className="btn btn-secondary fixed-bottom"><i class="fas fa-arrow-circle-up"></i></button></a>
    </div>
  )

}

export default App