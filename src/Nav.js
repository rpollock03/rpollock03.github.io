import React from "react"
import Hamburger from "./Hamburger"
import "./Nav.css"
function Nav() {

    return (<nav className="main-nav">

        <ul className="nav-links">
            <li><a href="#">About</a></li>
            <li><a href="#">Contacts</a></li>
            <li><a href="#">Projects</a></li>
        </ul>
        <Hamburger />
    </nav>)
}

export default Nav