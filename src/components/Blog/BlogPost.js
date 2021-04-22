import React, { useState } from "react"

import Nav from "../Nav.js"
import { Link, useParams } from "react-router-dom"


import postsData from "./_posts"


const BlogPost = (props) => {

    const { slug } = useParams()
    const post = postsData.find(post => post.slug === slug)
    return (<>
        <Nav />
        <div className="container">


            <div className="row ">


                <div className="col-12 col-lg-8 mx-auto pt-5 mt-5">
                    <div className="header">
                        <h2 className="title mb-2 font-weight-bold">{post.title}</h2>
                        <div className="mb-3" style={{ color: "#8f8f8f" }}>
                            <span>{post.date}</span>
                        </div>
                        <p className="font-italic">{post.summary}</p>
                    </div>

                    <div className="blog-post-body">
                        <figure>
                            <img className="img-fluid px-5" src={post.picture} alt="" />
                            <figcaption className="mt-2 text-center image-caption" style={{ color: "#8f8f8f" }}>
                                {post.caption}
                            </figcaption>
                        </figure>
                        <p>
                            {post.text}
                        </p>
                        <p>
                            {post.text1}
                        </p>
                        <blockquote className="blockquote  my-4" style={{ borderLeft: "10px solid #ccc", }}>
                            <p className="ml-4 font-italic">"{post.blockquote}"</p>

                        </blockquote>

                        <p>{post.text2}</p>
                        <figure >
                            <img className="img-fluid px-5" src={post.picture2} alt="" />
                            <figcaption className="mt-2 text-center image-caption" style={{ color: "#8f8f8f" }}>
                                {post.caption2}
                            </figcaption>
                        </figure>


                        <p>
                            {post.text3}
                        </p>
                        <p>
                            {post.text4}
                        </p>
                        <figure  >
                            <img className="img-fluid px-5" src={post.picture3} alt="" />
                            <figcaption className="mt-2 text-center image-caption" style={{ color: "#8f8f8f" }}>
                                {post.caption3}
                            </figcaption>
                        </figure>
                        <div className="text-center m-4 p-4">
                            <button
                                className="btn btn-primary btn-lg"

                            >
                                Back to Blogs
                            </button>


                        </div>



                    </div>
                </div>
            </div>
        </div>
    </>)

}


export default BlogPost