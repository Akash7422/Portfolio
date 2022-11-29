import React from "react"
import "./header.css"
import CTA from "./CTA"
import ME from "../../assets/akash_29.jpg"
import HeaderSocial from "./HeaderSocial"

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5> Hello I'm</h5>
                <h1> Akash Killikyatar</h1>
                <h5 className="text-light">
                    Freelancer (Fullstack Developer, MERN)
                </h5>
                <CTA />
                <HeaderSocial />
                <div className="me">
                    <img className="imgset" src={ME} alt="Profile Pic" />
                </div>
                <a href="#contact" className="scroll__down">
                    Scroll Down
                </a>
            </div>
        </header>
    )
}

export default Header
