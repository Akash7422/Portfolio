import React from "react"
import "./experience.css"
import Skillcards from "./skillcards"
import frontend, { backend } from "./skills"
const experience = () => {
    return (
        <section id="exp">
            <h5> What skils I have </h5>
            <h2> My experience</h2>
            <div className="container exp__container">
                <div className="exp__frontend">
                    <h3>Frontend Development</h3>
                    <div className="exp_content">
                        {frontend.map((frontend, index) => (
                            <Skillcards
                                key={index}
                                skill={frontend.skill}
                                level={frontend.level}
                            />
                        ))}
                    </div>
                </div>
                <div className="exp__backend">
                    <h3>Backend Development</h3>
                    <div className="exp_content">
                        {backend.map((backend, index) => (
                            <Skillcards
                                key={index}
                                skill={backend.skill}
                                level={backend.level}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default experience
