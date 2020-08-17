import React from "react"

import calculator from "./projects/calculator.gif"

import "./Featured.css"

function Featured() {

    return <section id="featured" className="featured-section pt-5">
        <div className="container">
            <h3 className="pt-4 section-title font-weight-bold text-center mb-3">Featured Projects</h3>
            <div className="section-intro mx-auto text-center mb-5 text-secondary">
                Here's some cool things I've made recently:
            </div>
            <div className="project-cards row mb-2 mb-lg-5">
                {/* PROJECT 1 */}
                <div className="col-12 col-lg-4">
                    <div class="card rounded-0 border-0 shadow-sm mb-5 mb-lg-0 featured-item">
                        <div class="card-img-container position-relative">
                            <img class="card-img-top rounded-0" src={calculator} alt="" />
                            <div class="card-img-overlay">
                                <div class="overlay-text">View code <button class="btn btn-primary">Github</button> </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">iOS Calculator</h5>
                            <p class="card-text">An iOS styled calculator built with React.</p>
                            <p class="card-text"><small class="text-muted">#Javascript #React</small></p>
                        </div>
                    </div>
                </div>
                {/* PROJECT 2 */}
                <div className="col-12 col-lg-4">
                    <div class="card rounded-0 border-0 shadow-sm mb-5 mb-lg-0 featured-item">
                        <div class="card-img-container position-relative">
                            <img class="card-img-top rounded-0" src="http://www.fillmurray.com/460/300" alt="" />
                            <div class="card-img-overlay">
                                <div class="overlay-text">Hello world <button class="btn btn-primary">Go to</button> </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-muted">#Javascript #React</small></p>
                        </div>
                    </div>
                </div>
                {/* PROJECT 3 */}
                <div className="col-12 col-lg-4">
                    <div class="card rounded-0 border-0 shadow-sm mb-5 mb-lg-0 featured-item">
                        <div class="card-img-container position-relative">
                            <img class="card-img-top rounded-0" src="http://www.fillmurray.com/460/300" alt="" />
                            <div class="card-img-overlay">
                                <div class="overlay-text">Hello world <button class="btn btn-primary">Go to</button> </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-muted">#Javascript #React</small></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <a className="btn btn-primary btn-lg" href="#">View all</a>
            </div>


        </div>
    </section>
}

export default Featured