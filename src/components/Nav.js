import React from "react"
import Hamburger from "./Hamburger"

import "./Nav.css"

function Nav() {



    return (<nav id="navbar-main" class="navbar navbar-expand-lg  fixed-top">
        <div className="container">
            <a class="navbar-brand" href="#">Navbar</a>
            <button id="navbar-toggler" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <Hamburger />
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="#"><i class="fas fa-home"></i> Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><i class="fas fa-briefcase"></i> Projects</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><i class="fas fa-newspaper"></i> Blog</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">placeholder</a>
                    </li>
                </ul>
            </div>
        </div>



    </nav>
    )
}

export default Nav