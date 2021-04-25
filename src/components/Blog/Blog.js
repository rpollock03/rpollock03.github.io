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
                    <div class="card mb-4 ">
                        <div class="card-body d-flex flex-row">
                            <div className="col-3 px-0">
                                <img className="img-fluid w-100 mb-3" src={post.picture} alt="Card image" />

                            </div>

                            <div className="col-9">
                                <h5 class="card-title font-weight-bold">{post.title}</h5>
                                <p class="card-text" style={{ lineHeight: "1.5em", height: "4.5em", overflow: "hidden" }}>{post.text}</p>
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
                        <div className="form-row">
                            <label className="sr-only" for="semail">Your email</label>
                            <input type="email" id="semail" name="seamail" class="form-control mr-3 semail" placeholder="Enter email" />
                        </div>
                        <button type="submit" class="btn btn-primary">Subscribe</button>
                    </form>
                </div>
            </div>
            <div className="container pt-5 d-flex flex-wrap justify-content-center">
                <button type="button" class="btn btn-outline-primary m-2" onClick={() => handleFilter("projects")}>Projects</button>
                <button type="button" class="btn btn-outline-secondary m-2" onClick={() => handleFilter("travel")}>Travel</button>
                <button type="button" class="btn btn-outline-success m-2" onClick={() => handleFilter("personal")}> Personal</button>
                <button type="button" class="btn btn-outline-danger m-2" onClick={() => handleFilter("tutorial")}>Tutorial</button>
                <button type="button" class="btn btn-outline-warning m-2" onClick={() => handleFilter("dev")}>Dev</button>
                <button type="button" class="btn btn-outline-info m-2" onClick={() => handleFilter("other")}>Other</button>
                <button type="button" class="btn btn-outline-dark m-2" onClick={() => handleFilter("all")}>All</button>
            </div>
            <section className="px-3 py-5 p-md-5 row">
                <div className="col-lg-8 mx-auto">

                    {posts}










                </div>
            </section>

        </>)
}

export default Blog






