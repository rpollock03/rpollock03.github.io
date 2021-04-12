import React from "react"

import Nav from "../Nav"



const ProjectsPage = () => {

    return (
        <>
            <Nav />
            <div class="pt-4 pb-2" style={{ backgroundColor: "#6f6db2" }}>
                <div className="container mt-5 text-white text-center ">
                    <h1 className="mt-0 font-weight-bold">Projects</h1>
                    <div className="lead">Write-ups of some of my projects here.</div>

                </div>
            </div>
            <div className="container pt-5 d-flex justify-content-center">
                <button type="button" class="btn btn-outline-primary mx-2">React</button>
                <button type="button" class="btn btn-outline-secondary mx-2">Vanilla JS</button>
                <button type="button" class="btn btn-outline-success mx-2">React Native</button>
                <button type="button" class="btn btn-outline-danger mx-2">Python</button>
                <button type="button" class="btn btn-outline-warning mx-2">C</button>
                <button type="button" class="btn btn-outline-info mx-2">Other</button>
                <button type="button" class="btn btn-outline-dark mx-2">All</button>
            </div>

        </>
    )
}

export default ProjectsPage