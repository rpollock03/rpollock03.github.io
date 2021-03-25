import React from "react"

import Nav from "./Nav.js"



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
            <section className="px-3 py-5 p-md-5 row"></section>
        </>
    )
}

export default ProjectsPage