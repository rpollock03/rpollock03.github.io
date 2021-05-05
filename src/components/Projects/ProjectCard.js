import React from "react"

import { Link } from "react-router-dom"

const ProjectCard = (props) => {


    if (props.tags.includes(props.filter) || props.filter == "all" || props.filter == null) {
        return (<div className="col-12 col-lg-4">
            <div class="card rounded-0 border-0 shadow-sm mx-4 mx-md-0 mb-5 featured-item text-secondary">
                <div class="card-img-container position-relative">
                    <img class="card-img-top rounded-0" src={props.image} alt="" />
                    <div class="card-img-overlay">
                        <div class="overlay-text">
                            <span>View code</span>
                            <a href={props.gitlink} target="_blank">
                                <br />
                                <button class="btn btn-primary">Github</button></a>
                            <br />
                            <br />
                            {props.bloglink ? (
                                <>
                                    <span>View blog post</span>
                                    <br />
                                    <Link to={props.bloglink} key={props.bloglink}>
                                        <button class="btn btn-success">Blog</button>
                                    </Link>
                                </>
                            ) : null}






                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <h5 class="card-title font-weight-bold">{props.title}</h5>
                    <p class="card-text" style={{ lineHeight: "1.5em", height: "4.5em", overflow: "hidden" }}>{props.summary}</p>
                    <p class="card-text"><small class="text-muted">{props.tags.map(tag => {
                        return (<span className="badge bg-secondary text-light mr-2">#{tag}</span>)
                    })}</small></p>
                </div>
            </div>
        </div>)
    } else return null

}

export default ProjectCard