import React from "react"

import "./Contact.css"

function Contact() {


    return <section id="contact" className="pt-5">
        <div id="contact-intro">
            <div className="container">
                <h3 className="pt-4 section-title text-white font-weight-bold text-center mb-4">How do you take your coffee? ☕</h3>
                <div className="section-intro mx-auto text-center mb-5 text-white">
                    I'd love to chat about any of my projects, working together, learning opportunities or just a general natter about all things code! You can reach me via any of the following:
                 <ul className="list-inline list-unstyled  pt-2 mt-4">
                        <li className="social-icon list-inline-item text-white"><a href="https://twitter.com/bobbytbls" target="_blank"><i class="fab fa-twitter"></i></a></li>
                        <li className=" social-icon list-inline-item text-white"><a href="https://www.facebook.com/rpollock03/" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
                        <li className="social-icon list-inline-item text-white"><a href="https://github.com/rpollock03" target="_blank"><i class="fab fa-github"></i></a></li>
                        <li className="social-icon list-inline-item text-white"><a href=""><i class="fab fa-instagram" target="_blank"></i></a></li>
                        <li className="social-icon list-inline-item text-white">
                            <a href=""><i class="far fa-envelope"></i></a>
                        </li>
                    </ul>
                </div>
            </div>

            <nav id="navbar-footer" class="navbar navbar-expand-lg sticky-bottom">
                <div className="container justify-content-center">
                    <span class="navbar-brand">Made with Bootstrap, React and ❤️ - © Robert Pollock 2021 </span>
                </div>

            </nav>
        </div>

    </section>
}

export default Contact