import React from "react"

import calculator from "../Images/project_calculator.gif"
import weather from "../Images/project_weather.gif"
import reactNative from "../Images/project_track.png"
import instaClone from "../Images/instaclone/rn-instaclone.gif"
import portfolio from "../Images/project_portfolio-final.gif"
import gpni from "../Images/project_GPLanding.jpg"
import "./Featured.css"
import { Link } from "react-router-dom"


function Featured() {

    return <section id="featured" className="featured-section pt-5">
        <div className="container">
            <h3 className="pt-4 section-title font-weight-bold text-center mb-3">Featured Projects</h3>
            <div className="section-intro mx-auto text-center mb-5 text-secondary">
                Here's a few things I've built recently. Hover over any to read more and to see my code!
            </div>
            <div className="project-cards row mb-2 mb-lg-5">
                {/* PROJECT 1 */}
                <div className="col-12 col-lg-4">
                    <div class="card rounded-0 border-0 shadow-sm mb-5 mb-lg-0 featured-item">
                        <div class="card-img-container position-relative">
                            <img class="card-img-top rounded-0" src={instaClone} alt="" />
                            <div class="card-img-overlay">
                                <div class="overlay-text">
                                    View code
                                    <a href="https://github.com/rpollock03/rn_instagram_clone" target="_blank">
                                        <br />
                                        <button class="btn btn-primary">Github</button></a>
                                    <br />
                                    <br />
                                        View blog post
                                        <br />
                                    <a href="https://github.com/rpollock03/rn_instagram_clone" target="_blank">
                                        <button class="btn btn-success">Blog</button></a>
                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title font-weight-bold">Instagram clone</h5>
                            <p class="card-text">Post, comment, follow...a fully functional instagram clone!</p>
                            <p class="card-text"><small class="text-muted">#ReactNative #Redux #Javascript #Firebase</small></p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-4">
                    <div class="card rounded-0 border-0 shadow-sm mb-5 mb-lg-0 featured-item">
                        <div class="card-img-container position-relative">
                            <img class="card-img-top rounded-0" src={calculator} alt="" />
                            <div class="card-img-overlay">
                                <div class="overlay-text">
                                    View code
                                    <a href="https://github.com/rpollock03/iphone-calculator" target="_blank">
                                        <br />
                                        <button class="btn btn-primary">Github</button></a>
                                    <br />
                                    <br />
                                        View blog post
                                        <br />
                                    <a href="https://github.com/rpollock03/rn_instagram_clone" target="_blank">
                                        <button class="btn btn-success">Blog</button></a>
                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">iOS Calculator</h5>
                            <p class="card-text">Built with React, the styling on this fully functional calculator is  iOS inspired</p>
                            <p class="card-text"><small class="text-muted">#Javascript #React #Frontend #CSS</small></p>
                        </div>
                    </div>
                </div>
                {/* PROJECT 2 */}
                <div className="col-12 col-lg-4">
                    <div class="card rounded-0 border-0 shadow-sm mb-5 mb-lg-0 featured-item">
                        <div class="card-img-container position-relative">
                            <img class="card-img-top rounded-0" src={weather} alt="" />
                            <div class="card-img-overlay">
                                <div class="overlay-text">
                                    View code
                                    <a href="https://github.com/rpollock03/weather-app" target="_blank">
                                        <br />
                                        <button class="btn btn-primary">Github</button></a>
                                    <br />
                                    <br />
                                        View blog post
                                        <br />
                                    <a href="https://github.com/rpollock03/rn_instagram_clone" target="_blank">
                                        <button class="btn btn-success">Blog</button></a>
                                </div>
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
                <div className="col-12 col-lg-4 mt-3">
                    <div class="card rounded-0 border-0 shadow-sm mb-5 mb-lg-0 featured-item">
                        <div class="card-img-container position-relative">
                            <img class="card-img-top rounded-0" src={reactNative} alt="" />
                            <div class="card-img-overlay">
                                <div class="overlay-text">
                                    View frontend code
                                    <a href="https://github.com/rpollock03/tracking-app_frontend" target="_blank">
                                        <br />
                                        <button class="btn btn-primary">Github</button></a> <br /><br />
                                         View backend code
                                    <a href="https://github.com/rpollock03/tracking-app_backend" target="_blank">
                                        <br />
                                        <button class="btn btn-primary">Github</button></a>
                                    <br />
                                    <br />
                                        View blog post
                                        <br />
                                    <a href="https://github.com/rpollock03/rn_instagram_clone" target="_blank">
                                        <button class="btn btn-success">Blog</button></a>
                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Location Tracker</h5>
                            <p class="card-text">Location tracking app built with React Native.</p>
                            <p class="card-text"><small class="text-muted">#ReactNative #ContextAPI #NodeExpress</small></p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-4 mt-3">
                    <div class="card rounded-0 border-0 shadow-sm mb-5 mb-lg-0 featured-item">
                        <div class="card-img-container position-relative">
                            <img class="card-img-top rounded-0" src={portfolio} alt="" />
                            <div class="card-img-overlay">
                                <div class="overlay-text">
                                    View code
                                    <a href="https://github.com/rpollock03/portfolio-site" target="_blank">
                                        <br />
                                        <button class="btn btn-primary">Github</button></a>
                                    <br />
                                    <br />
                                        View blog post
                                        <br />
                                    <a href="https://github.com/rpollock03/rn_instagram_clone" target="_blank">
                                        <button class="btn btn-success">Blog</button></a>
                                </div>
                            </div>
                        </div>

                        <div class="card-body">
                            <h5 class="card-title">This site!</h5>
                            <p class="card-text">Wouldn't be much of a developer if I didn't make my own portfolio!</p>
                            <p class="card-text"><small class="text-muted">#Javascript #React #Frontend #ReactRouter</small></p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-4 mt-3">
                    <div class="card rounded-0 border-0 shadow-sm mb-5 mb-lg-0 featured-item">
                        <div class="card-img-container position-relative">
                            <img class="card-img-top rounded-0" src={gpni} alt="" />
                            <div class="card-img-overlay">
                                <div class="overlay-text">View code <button class="btn btn-primary">Github</button> </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Landing Page</h5>
                            <p class="card-text">A bootstrap landing page for a political party</p>
                            <p class="card-text"><small class="text-muted">#Javascript #React #Frontend</small></p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="text-center">
                <Link to="/projects">
                    <a className="btn btn-primary btn-lg" href="#">View all</a>
                </Link>
            </div>


        </div>
    </section>
}

export default Featured