import React from "react"

import calculator from "./projects/calculator.gif"
import weather from "./projects/weather.gif"
import forex from "./projects/forex.gif"
import reactNative from "./projects/react native.png"

import "./Featured.css"

function Featured() {

    return <section id="featured" className="featured-section pt-5">
        <div className="container">
            <h3 className="pt-4 section-title font-weight-bold text-center mb-3">Featured Projects</h3>
            <div className="section-intro mx-auto text-center mb-5 text-secondary">
                This site was designed and developed by yours truly to help me learn React. It's also super responsive (try resizing the page!) thanks to the awesome Bootstrap framework. Here's some other cool things I've made recently:
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
                            <p class="card-text">Built with React, the styling on this fully functional calculator is  iOS inspired</p>
                            <p class="card-text"><small class="text-muted">#Javascript #React #Frontend</small></p>
                        </div>
                    </div>
                </div>
                {/* PROJECT 2 */}
                <div className="col-12 col-lg-4">
                    <div class="card rounded-0 border-0 shadow-sm mb-5 mb-lg-0 featured-item">
                        <div class="card-img-container position-relative">
                            <img class="card-img-top rounded-0" src={weather} alt="" />
                            <div class="card-img-overlay">
                                <div class="overlay-text">View code <button class="btn btn-primary">Github</button> </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Weather App</h5>
                            <p class="card-text">Search for forecasts and weather map by auto GPS or manual search </p>
                            <p class="card-text"><small class="text-muted">#Javascript #React #Leaflet #Frontend</small></p>
                        </div>
                    </div>
                </div>
                {/* PROJECT 3 */}
                <div className="col-12 col-lg-4">
                    <div class="card rounded-0 border-0 shadow-sm mb-5 mb-lg-0 featured-item">
                        <div class="card-img-container position-relative">
                            <img class="card-img-top rounded-0" src={reactNative} alt="" />
                            <div class="card-img-overlay">
                                <div class="overlay-text">View code <button class="btn btn-primary">Github</button> </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Location Tracker</h5>
                            <p class="card-text">Location tracking app built with React Native.</p>
                            <p class="card-text"><small class="text-muted">#ReactNative</small></p>
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