import React from "react"



const ProjectCard = (props) => {


    if (props.tags.includes(props.filter) || props.filter == "all" || props.filter == null) {
        return (<div className="col-12 col-lg-4">
            <div class="card rounded-0 border-0 shadow-sm mb-5 mb-lg-0 featured-item text-secondary">
                <div class="card-img-container position-relative">
                    <img class="card-img-top rounded-0" src={props.image} alt="" />
                    <div class="card-img-overlay">
                        <div class="overlay-text">
                            View code
                                    <a href={props.gitlink} target="_blank">
                                <br />
                                <button class="btn btn-primary">Github</button></a>
                            <br />
                            <br />
                                        View blog post
                                        <br />
                            <a href={props.bloglink} target="_blank">
                                <button class="btn btn-success">Blog</button></a>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <h5 class="card-title font-weight-bold">{props.title}</h5>
                    <p class="card-text">{props.summary}</p>
                    <p class="card-text"><small class="text-muted">{props.tags.map(tag => {
                        return (<span className="badge bg-secondary text-light mr-2">#{tag}</span>)
                    })}</small></p>
                </div>
            </div>
        </div>)
    } else return null

}

export default ProjectCard