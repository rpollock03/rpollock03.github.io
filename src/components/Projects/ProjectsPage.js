import React, { useState } from "react"

import Nav from "../Nav"
import FeaturedProjects from "./FeaturedProjects"

import instaclone from "../Images/project_forex.gif"
import ProjectCard from "./ProjectCard"

const ProjectsPage = () => {

    const [filter, setFilter] = useState("all")

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter)
    }

    return (
        <>
            <Nav />
            <div class="pt-4 pb-2" style={{ backgroundColor: "#6f6db2" }}>
                <div className="container mt-5 text-white text-center ">
                    <h1 className="mt-0 font-weight-bold">Projects</h1>
                    <div className="lead">Write-ups of some of my projects here.</div>

                </div>
            </div>
            <div className="container p-5 d-flex justify-content-center">
                <button type="button" class="btn btn-outline-primary mx-2" onClick={() => handleFilterChange("react")}>React</button>
                <button type="button" class="btn btn-outline-secondary mx-2" onClick={() => handleFilterChange("javascript")}>Javascript</button>
                <button type="button" class="btn btn-outline-success mx-2" onClick={() => handleFilterChange("react-native")}>React Native</button>
                <button type="button" class="btn btn-outline-danger mx-2" onClick={() => handleFilterChange("python")}>Python</button>
                <button type="button" class="btn btn-outline-warning mx-2" onClick={() => handleFilterChange("c")}>C</button>
                <button type="button" class="btn btn-outline-info mx-2" onClick={() => handleFilterChange("other")}>Other</button>
                <button type="button" class="btn btn-outline-dark mx-2" onClick={() => handleFilterChange("all")}>All</button>
            </div>
            <div className="container">
                <div className="project-cards row mb-2 mb-lg-5">
                    <FeaturedProjects filter={filter} />
                    <ProjectCard
                        image={instaclone}
                        gitlink="https://github.com/rpollock03/rn_instagram_clone"
                        bloglink="https://github.com/rpollock03/rn_instagram_clone"
                        title="Instagram Clone"
                        summary="Post, comment, follow...a fully functional instagram clone! ost, comment, follow...a fully functional instagram clone!"
                        tags={["react-native", "redux", "firebase"]}
                        filter={filter}
                    />
                </div>
            </div>

        </>
    )
}

export default ProjectsPage