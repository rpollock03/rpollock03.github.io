import React from "react"
import "./App.css"
import Nav from "./components/Nav"
import Masthead from "./components/Home/Masthead"
import Skills from "./components/Home/Skills"
import Featured from "./components/Home/Featured"
import Carousel from "./components/Home/Carousel"
import Contact from "./components/Home/Contact"
import About from "./components/About/About"
import Blog from "./components/Blog/Blog"
import BlogPost from "./components/Blog/BlogPost"
import ProjectsPage from "./components/Projects/ProjectsPage"

import { HashRouter as Router, Switch, Route } from "react-router-dom"
//Normally BrowserRouter but this creates problems with react router.


const Home = () => {

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
    <Router >
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/blog" component={Blog} />
      <Route path="/projects" component={ProjectsPage} />
      <Route path="/post/:slug" component={BlogPost} />
    </Router>
  )

}

export default App