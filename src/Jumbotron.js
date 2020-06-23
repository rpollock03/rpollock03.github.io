import React from "react"

import Image from "./images/IMG-5741-Original.jpg"
import "./Jumbotron.css"


function Jumbotron() {


    return (
        <div className="jumbotron-cont">
            <div className="inner-cont row">
                <div className="col-12 col-md-6 profile-cont">
                    <img className="profile-pic" src={Image} alt="" />

                </div>
                <div className="intro col-12 col-md-6">
                    <span className="heading">Hi I'm Rob,</span><br />

                    <span className="subHeading">I'm a coffee addicted <span className="full-stack">{"{full stack}"} </span>developer from <i class="fas fa-map-marker-alt"></i><a href="#"> Belfast, Ireland</a></span>
                </div>
                <br />
                <div className="btn-cont">
                    <button> <i class="fas fa-arrow-down"></i> </button>
                </div>

            </div>

        </div>
    )
}


export default Jumbotron