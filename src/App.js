import React from "react"
import "./App.css"
import Nav from "./components/Nav"
import Masthead from "./components/Masthead"
import Skills from "./components/Skills"
import Featured from "./components/Featured"
import Carousel from "./components/Carousel"
import Contact from "./components/Contact"
import About from "./components/About"
import Blog from "./components/Blog"

import {BrowserRouter as Router, Switch, Route} from "react-router-dom"


const Home = ()=> {

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


function App() {
  return (
    <Router>
      <Route path ="/" exact component={Home} />
      <Route path="/about" component={About}/>
      <Route path ="/blog" component={Blog}/>
  </Router>
  )

}

export default App