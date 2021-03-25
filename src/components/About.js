import React from "react"

import Nav from "./Nav.js"

import { Link } from "react-router-dom"
import profile2 from "./profilesecond.png"






const About = () => {



    return (
        <>
            <Nav />
            <div class="about-header-cont pt-4 pb-2" style={{ backgroundColor: "#6f6db2" }}>
                <div className="container mt-5 text-white text-center">
                    <h1 className="mt-0 font-weight-bold">About Me</h1>
                </div>
            </div>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-6 col-lg-4 mx-auto">
                            <img className="mt-5 w-100" src={profile2} alt="" />
                            <div className="text-secondary font-italic py-1">Hai there! Me in my natural environment.</div>
                        </div>
                        <div className="col-lg-8 mx-auto">
                            <h3 className="section-title font-weight-bold  mt-5 mb-3">My coding journey</h3>
                            <div className="section-intro mx-auto mb-5 text-secondary">
                                Welcome to my site! My name's Rob and I'm from Belfast, Northern Ireland, but I've lived abroad extensively - including in Vancouver Canada and San Jose California, which is where I was bitten by the tech bug in 2018!
                <br />
                                <br />
                I love the power, elegance and versatility of computer science and have had the pleasure of teaching myself a variety of different programming languages, including Python, C, and Javascript. I must admit I have a particular fondness for Javascript (and it's libraries like React) and have spent countless hours building projects or working through challenges on places like codewars!
                <br />
                                <br />
                I have quite an unassuming academic/professional background. I studied history, politics and law at university, falling into an interesting career in politics working as a campaign manager and parliamentary researcher. On the side I did a lot of work as a movie extra, featuring in TV shows such as Game of Thrones!
                <br />
                                <br />
                I stumbled upon coding purely by accident and am 100% self-taught - alumni of various coffee shops as well as Medium, Freecodecamp, Harvard online and Udemy (<a href="#">see my blog article for more about my coding journey</a>). Coming from a completely non-tech background, I am living proof that anyone can learn to code and I firmly believe that this accessibility - due in large part to the incredible support for open source learning - is nothing short of revolutionary.
                <br />
                                <br />
                I'm in the early stages of forming a local group for those learning to code in my city to network, help one another and socialise over coffee (check out <a href="#">Coffee & Code Belfast</a>) and someday hope to give back more to this awesome community. In the meantime, you can find me hacking away at a keyboard (or banging against it!) as I continue on my learning path - wherever it leads!
                <br />
                                <br />
                When I'm not behind a keyboard, you can find me hiking, golfing, playing guitar or brewing my own beer! Speaking of, always game for chatting all things code so feel free to contact me for a coffee/beer - virtual or otherwise!


            </div>
                            <div className="text-center mb-5 pb-5">
                                <button
                                    className="btn btn-primary btn-lg"

                                >
                                    Contact me
                            </button>


                            </div>

                        </div>

                    </div>



                </div>
            </section>

        </>)
}

export default About






