import React from "react"
import "./about.css"
import About_me from "../../assets/sideImage.jpg"
import { BsAwardFill } from "react-icons/bs"
import { VscFolderActive } from "react-icons/vsc"
import { AiOutlineUser } from "react-icons/ai"
import { FaBlackTie } from "react-icons/fa"

const about = () => {
    return (
        <section id="about">
            <h5>Get to know</h5>
            <h2> About Me</h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={About_me} alt="Profile Pic" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <BsAwardFill className="about__icon" />
                            <h5> Experience</h5>
                            <small> 1.8+ year working </small>
                        </article>

                        <article className="about__card">
                            <FaBlackTie className="about__icon" />
                            <h5> Role</h5>
                            <small> Test Engineer </small>
                        </article>
                        <article className="about__card">
                            <VscFolderActive className="about__icon" />
                            <h5> Intrested</h5>
                            <small>Fullstack web development</small>
                        </article>
                    </div>
                    <p className="para">
                        Organized and hard-working employee looking for an
                        opportunity to join as a Web Developer. Looking to take
                        advantage of my skills in Web Development and create
                        responsive web design using latest technologies like
                        ReactJS, HTML5, JavaScript, CSS, MongoDB, Express, and
                        NodeJS. And also to pursue a challenging career and be a
                        part of progressive organization that gives a scope to
                        enhance my knowledge and utilizing my skills towards the
                        growth of the organization.
                    </p>
                    <a href="#contact" className="btn btn-primary">
                        Lets Talk
                    </a>
                </div>
            </div>
        </section>
    )
}

export default about
