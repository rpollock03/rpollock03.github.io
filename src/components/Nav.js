import React from "react"
import Hamburger from "./Hamburger"

import "./Nav.css"
import { Link } from "react-router-dom"


function Nav() {

    return (<nav id="navbar-main" class="navbar navbar-expand-lg  fixed-top">
        <div className="container">
            <a class="navbar-brand" href="#">Robert James Pollock</a>
            <button id="navbar-toggler" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <Hamburger />
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <a class="nav-link" href="#"><i class="fas fa-home"></i> Home <span class="sr-only">(current)</span></a>
                        </Link>
                    </li>

                    <li class="nav-item">
                        <Link to="/projects">
                            <a class="nav-link" href="#"><i class="fas fa-briefcase"></i> Projects</a>
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/blog" style={{ textDecoration: 'none' }}>
                            <a class="nav-link" href="#"><i class="fas fa-newspaper"></i> Blog</a>
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/about" style={{ textDecoration: 'none' }}>
                            <a href="#" class="nav-link"><i class="fas fa-user"></i> About</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>



    </nav>
    )
}

export default Nav