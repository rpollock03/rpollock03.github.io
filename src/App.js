import React, { useEffect, useState } from "react"
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

import ScrollToTop from "./ScrollToTop"

import { HashRouter as Router, Switch, Route } from "react-router-dom"
//Normally BrowserRouter but this creates problems with react router.
import { HashLink } from "react-router-hash-link"

const Home = () => {

  const [isAtBottom, setIsAtBottom] = useState(false)

  const handleScroll = () => {
    const bottom = Math.ceil(window.innerHeight + window.scrollY + 500) >= document.documentElement.scrollHeight

    if (bottom) {
      setIsAtBottom(true)
    }

    if (window.pageYOffset === 0) {
      setIsAtBottom(false)
    }

  }



  useEffect(() => {
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div id="container" onScroll={handleScroll}>
      <Nav />
      <Masthead />
      <Skills />
      <Featured />

      <Carousel />
      <Contact />
      <HashLink to={isAtBottom ? "/#" : "/#contact"} style={{ textDecoration: 'none' }}>
        <button id="back-to-top" className="btn  btn-secondary fixed-bottom mb-5"><i class={isAtBottom ? "fas fa-arrow-circle-up" : "fas fa-address-card"}></i> {isAtBottom ? "Back to top" : "Get in touch"}</button>
      </HashLink>
    </div>
  )
}






function App() {
  return (
    <Router >
      <ScrollToTop />
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/blog" component={Blog} />
      <Route path="/projects" component={ProjectsPage} />
      <Route path="/post/:slug" component={BlogPost} />
    </Router>
  )

}

export default App