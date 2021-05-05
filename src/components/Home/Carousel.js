import React from "react"

import "./Carousel.css"

import Facebook from "../Blog/BlogPics/blog_facebook.jpg"
import Auth from "../Blog/BlogPics/blog_auth.png"
import Mql from "../Blog/BlogPics/blog_forex.png"

import { Link } from "react-router-dom"

function Carousel() {

    return (<section className="py-5">
        <div className="container">
            <div className="container">




                <h3 className="pt-4 section-title font-weight-bold text-center mb-3">Blog</h3>
                <div className="section-intro mx-auto text-center mb-5 text-secondary">
                    I blog about coding, travel and sometimes other things!
            </div>
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100" src={Facebook} alt="First slide" />
                            <div class="carousel-caption d-block">
                            <Link to={"/post/silicon-valley"} key={"/post/silicon-valley"} style={{ textDecoration: 'none', color: "white" }}>
                                <h4 className="font-weight-bold"><span>Travel: Silicon Valley</span></h4>
                                <p><span>A guide to the tech sites of silicon valley!</span></p>
                            </Link>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src={Auth} alt="Second slide" />
                            <div class="carousel-caption d-block">
                                <h5><span>Tutorial: User Auth</span></h5>
                                <p><span>A guide to user authentication/authorisation</span></p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src={Mql} alt="Third slide" />
                            <div class="carousel-caption d-block">


                                <Link to={"/post/my-coding-journey"} key={"/post/my-coding-journey"} style={{ textDecoration: 'none', color: "white" }}>
                                    <h4 className="font-weight-bold"><span>My Coding Journey</span></h4>
                                    <p><span>How I got into coding what I learnt first!</span></p>
                                </Link>


                            </div>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>

            </div>
            <div className="text-center pt-5">
                <Link to="/blog">
                    <a className="btn btn-primary btn-lg" href="#">All Posts</a>
                </Link>
            </div>
        </div>
    </section>








    )
}






export default Carousel





