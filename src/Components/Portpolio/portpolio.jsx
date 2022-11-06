import React from "react"
import IMG1 from "../../assets/portfolio1.jpg"
import IMG2 from "../../assets/portfolio2.jpg"
import IMG3 from "../../assets/portfolio3.jpg"
import IMG4 from "../../assets/portfolio4.jpg"
import IMG5 from "../../assets/portfolio5.png"
import IMG6 from "../../assets/portfolio6.jpg"
import "./portpolio.css"
import projects from "./projects"
import Wrapper from "./portfolioWrapper"
const portpolio = () => {
    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portapolio</h2>
            <div className="container ppt__cntnr">
                {projects.map((project) => (
                    <Wrapper
                        key={project.key}
                        title={project.title}
                        sub={project.sub}
                        imgLink={project.imgLink}
                        github={project.github}
                        liveDemo={project.liveDemo}
                    />
                ))}
            </div>
        </section>
    )
}

export default portpolio
