import React from "react"
import FeaturedProjects from "../Projects/FeaturedProjects"
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
                <FeaturedProjects />

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