import React from "react"
import profile from "./profile.jpg"

import "./Masthead.css"

function Masthead() {

    return (<div class="masthead-cont py-5">
        <div className="container d-flex align-items-center flex-column flex-md-row text-white">
            <img className="rounded-circle mt-5 profile-photo" src={profile} alt="" />
            <div className="mt-4 ml-md-4 teaser text-center text-md-left">
                <div className="lead">Hello, my name is</div>
                <h2 className="mt-0 display-4 font-weight-bold">Rob</h2>
                <div className="bio mb-3 lead">I'm a coffee-addicted <span>{"{full-stack}"}</span> web developer from <span id="location"><i class="fas fa-map-marker-alt"></i> Belfast, Northern Ireland</span></div>
                <hr />
                <a className="btn btn-primary font-weight-bold" href="#featured">Check me out</a>
            </div>
        </div>


    </div>)
}








export default Masthead