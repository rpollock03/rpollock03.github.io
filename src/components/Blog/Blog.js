import React, { useState, useEffect } from "react"

import Nav from "../Nav"
import { Link } from "react-router-dom"

import postsData from "./_posts"




const Blog = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        handleFilter("all")
    }, [])


    const handleFilter = (selectedFilter) => {

        const mappedPosts = postsData.map(post => {

            if (selectedFilter === "all" || post.categories.includes(selectedFilter)) {
                return (
                    <div class="card ">
                        <div class="card-body d-flex flex-row">
                            <img className="mr-3 img-fluid" src={post.picture} style={{ maxWidth: 110 }} alt="Card image" />
                            <div>
                                <h5 class="card-title font-weight-bold">{post.title}</h5>
                                <p class="card-text" style={{ lineHeight: "1.5em", height: "3em", overflow: "hidden" }}>{post.text}</p>

                                <Link to={"/post/" + post.slug} key={post.slug}>
                                    <button class="btn btn-primary">Read more</button>
                                </Link>
                            </div>
                        </div>
                        <div class="card-footer text-muted d-flex flex-row justify-content-between">
                            <div>
                                {post.categories.map(category => {
                                    return <span class="badge bg-secondary text-light mr-2">{category}</span>
                                })}
                            </div>
                            <div>{post.date}</div>
                        </div>
                    </div>
                )
            }
        })

        setPosts(mappedPosts)

    }



    return (
        <>
            <Nav />
            <div class="pt-4 pb-2" style={{ backgroundColor: "#6f6db2" }}>
                <div className="container mt-5 text-white text-center ">
                    <h1 className="mt-0 font-weight-bold">Blog</h1>
                    <div className="lead">Welcome to my blog. Subscribe and get my latest blog post in your inbox.</div>
                    <form className="form-inline justify-content-center p-3">
                        <div className="form-group">
                            <label className="sr-only" for="semail">Your email</label>
                            <input type="email" id="semail" name="seamil1" class="form-control mr-md-1 semail" placeholder="Enter email" />
                        </div>
                        <button type="submit" class="btn btn-primary">Subscribe</button>
                    </form>
                </div>
            </div>
            <div className="container pt-5 d-flex justify-content-center">
                <button type="button" class="btn btn-outline-primary mx-2" onClick={() => handleFilter("projects")}>Projects</button>
                <button type="button" class="btn btn-outline-secondary mx-2" onClick={() => handleFilter("travel")}>Travel</button>
                <button type="button" class="btn btn-outline-success mx-2" onClick={() => handleFilter("personal")}> Personal</button>
                <button type="button" class="btn btn-outline-danger mx-2" onClick={() => handleFilter("tutorial")}>Tutorial</button>
                <button type="button" class="btn btn-outline-warning mx-2" onClick={() => handleFilter("dev")}>Dev</button>
                <button type="button" class="btn btn-outline-info mx-2" onClick={() => handleFilter("other")}>Other</button>
                <button type="button" class="btn btn-outline-dark mx-2" onClick={() => handleFilter("all")}>All</button>
            </div>
            <section className="px-3 py-5 p-md-5 row">
                <div className="col-lg-8 mx-auto">

                    {posts}










                </div>
            </section>

        </>)
}

export default Blog






