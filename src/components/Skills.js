import React from "react"

import "./Skills.css"

function Skills() {

    return (<section className="skills-section pt-5">
        <div className="container">
            <h3 className="section-title font-weight-bold text-center mb-3">Skills Overview</h3>
            <div className="section-intro mx-auto text-center mb-5 text-secondary">
                I make clean, powerful and responsive websites. MERN stack.
            </div>
            <div className="skills-block mx-auto pt-5">
                <div className="row">
                    <div className="skills-block col-12 col-lg-4 mb-5 mb-3 mb-lg-0">
                        <div className="skills-block-inner bg-white shadow-sm py-4 px-6 position-relative">
                            <h4 className="skills-cat text-center mb-3 mt-5">Frontend</h4>
                            <div className="skills-icon-holder position-absolute d-inline-block rounded-circle text-center text-white">
                                <i class="fas fa-laptop-code"></i>
                            </div>
                            <ul className="skills-list list-unstyled text-secondary ml-5">
                                <li className="mb-2">
                                    <i class="fas fa-check mr-3"></i>
                                    React/Redux
                                </li>
                                <li className="mb-2">
                                    <i class="fas fa-check mr-3"></i>
                                    HTML/CSS
                                </li>
                                <li className="mb-2">
                                    <i class="fas fa-check mr-3"></i>
                                    Bootstrap
                                </li>
                                <li className="mb-2">
                                    <i class="fas fa-check mr-3"></i>
                                    Javascript/jQuery
                                </li>
                                <li className="mb-2">
                                    <i class="fas fa-check mr-3"></i>
                                    SASS/SCSS
                                </li>
                            </ul>
                            <i class="devicon-javascript-plain colored"></i>
                        </div>
                    </div>
                    <div className="skills-block col-12 col-lg-4 mb-5 mb-3 mb-lg-0">
                        <div className="skills-block-inner bg-white shadow-sm py-4 px-6 position-relative">
                            <h4 className="skills-cat text-center mb-3 mt-5">Backend</h4>
                            <div className="skills-icon-holder position-absolute d-inline-block rounded-circle text-center text-white">
                                <i class="fas fa-server"></i>
                            </div>
                            <ul className="skills-list list-unstyled text-secondary ml-5">
                                <li className="mb-2">
                                    <i class="fas fa-check mr-3"></i>
                                    Node
                                </li>
                                <li className="mb-2">
                                    <i class="fas fa-check mr-3"></i>
                                    Express.js
                                </li>
                                <li className="mb-2">
                                    <i class="fas fa-check mr-3"></i>
                                    Python
                                </li>
                                <li className="mb-2">
                                    <i class="fas fa-check mr-3"></i>
                                    Flask/Jinja
                                </li>
                                <li className="mb-2">
                                    <i class="fas fa-check mr-3"></i>
                                    C/C++
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="skills-block col-12 col-lg-4 mb-5 mb-3 mb-lg-0">
                        <div className="skills-block-inner bg-white shadow-sm py-4 px-6 position-relative">
                            <h4 className="skills-cat text-center mb-3 mt-5">Databases</h4>
                            <div className="skills-icon-holder position-absolute d-inline-block rounded-circle text-center text-white">
                                <i class="fas fa-database"></i>
                            </div>
                            <ul className="skills-list list-unstyled text-secondary ml-5">
                                <li className="mb-2">
                                    <i class="fas fa-check mr-3"></i>
                                    MongoDB
                                </li>
                                <li className="mb-2">
                                    <i class="fas fa-check mr-3"></i>
                                    SQL
                                </li>
                                <li className="mb-2">
                                    <i class="fas fa-check mr-3"></i>
                                    Mongoose
                                </li>
                                <li className="mb-2">
                                    <i class="fas fa-check mr-3"></i>
                                    JSON/APIs
                                </li>
                                <li className="mb-2">
                                    <i class="fas fa-check mr-3"></i>
                                    PHP (learning)
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
            <div className="text-center pt-lg-5">
                <a className="btn btn-primary btn-lg" href="#">More about me</a>
            </div>

        </div>

    </section>
    )
}



export default Skills