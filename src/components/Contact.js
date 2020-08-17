import React from "react"

import "./Contact.css"

function Contact() {


    return <section id="contact" className="py-5">
        <div id="contact-intro">
            <div className="container">
                <h3 className="pt-4 section-title text-white font-weight-bold text-center mb-3">Featured Projects</h3>
                <div className="section-intro mx-auto text-center mb-5 text-white">
                    Here's some cool things I've made recently:
                 <ul className="list-inline list-unstyled  py-3">
                        <li className="social-icon list-inline-item text-white"><i class="fab fa-twitter"></i></li>
                        <li className=" social-icon list-inline-item text-white"><i class="fab fa-facebook-f"></i></li>
                        <li className="social-icon list-inline-item text-white"><i class="fab fa-github"></i></li>
                        <li className="social-icon list-inline-item text-white"><i class="fab fa-instagram"></i></li>
                        <li className="social-icon list-inline-item text-white">
                            <i class="far fa-envelope"></i>
                        </li>
                    </ul>
                    <span><a href="#">robertpollockbfs@gmail.com</a></span>
                    <a href='https://ko-fi.com/Z8Z11WXD3' target='_blank'><img height='36' src='https://cdn.ko-fi.com/cdn/kofi1.png?v=2' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>
                </div>
            </div>


        </div>
        <div className="container">
            <form id="contact-form" className="contact-form col-lg-8 mx-lg-auto" method="post">
                <h3 class="text-center mb-3">title here</h3>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label class="sr-only" for="cname">Name</label>
                        <input type="text" className="form-control" id="cname" name="name" placeholder="name" minlength="2" required aria-required="true" />
                    </div>
                    <div className="form-group col-md-6">
                        <label class="sr-only" for="cemail">Email</label>
                        <input type="email" className="form-control" id="cemail" name="email" placeholder="Email" required aria-required="true" />
                    </div>
                    <div className="form-group col-12">
                        <label class="sr-only" for="cmessage">Your message</label>
                        <textarea className="form-control" id="cmessage" name="message" placeholder="Enter your message" rows="10" required aria-required="true" />
                    </div>
                    <div className="form-group col-12">
                        <bbutton type="submit" className="btn btn-block btn-primary py-2">Send it</bbutton>
                    </div>


                </div>

            </form>
        </div>
    </section>
}

export default Contact