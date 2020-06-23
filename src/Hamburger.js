import React from "react"
import "./Hamburger.css"


function Hamburger() {

    function handleHamburger() {

        const hamburger = document.querySelector(".hamburger")
        hamburger.classList.toggle("open")

        //following needed for navlink visibility. Can remove if re-using this hamburger component.
        const navLinks = document.querySelector(".nav-links")
        navLinks.classList.toggle("open");
        const links = document.querySelectorAll("li");
        links.forEach(link => {
            link.classList.toggle('fade');
        })
    }

    return (
        <div class="hamburger" onClick={handleHamburger}>
            <div className="line top-line"></div>
            <div className="line middle-line"></div>
            <div className="line bottom-line"></div>
        </div>
    )
}








export default Hamburger