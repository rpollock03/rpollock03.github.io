import React from "react"

import "./Carousel.css"


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
                            <img class="d-block w-100" src="http://www.fillmurray.com/460/300" alt="First slide" />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>This is a title</h5>
                                <p>Lorem ipsom caption here about what this is</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="http://www.fillmurray.com/460/300" alt="Second slide" />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>This is a title</h5>
                                <p>Lorem ipsom caption here about what this is</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="http://www.fillmurray.com/460/300" alt="Third slide" />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>This is a title</h5>
                                <p>Lorem ipsom caption here about what this is</p>
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

        </div>
    </section>








    )
}






export default Carousel





