import React from "react"

import Nav from "./Nav.js"




const Blog = () => {


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
            <section className="px-3 py-5 p-md-5 row">
                <div className="col-lg-8 mx-auto">
                    <div class="card ">
                        <div class="card-header">
                            Featured
  </div>
                        <div class="card-body d-flex flex-row">
                            <img className="mr-3 img-fluid" src="https://placekitten.com/200/300" style={{ maxWidth: 110 }} alt="Card image" />
                            <div>
                                <h5 class="card-title">Special title treatment</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div class="card-footer text-muted d-flex flex-row justify-content-between">
                            <div><span class="badge bg-secondary text-light">#ReactNative</span></div>
                            <div>2 days ago</div>
                        </div>
                    </div>
                </div>
            </section>

        </>)
}

export default Blog






