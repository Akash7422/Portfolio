import React from "react"
import "./portpolio.css"
const Wrapper = (props) => {
    return (
        <article className="ptp__items">
            <div className="ptp__item-image">
                <img src={props.imgLink} alt="img1" />
            </div>
            <h3>{props.title}</h3>
            <p>{props.sub}</p>
            <div className="ptp__item-cta">
                <a href={props.github} className="btn " target="__blank">
                    {" "}
                    GitHub
                </a>
                <a
                    href={props.liveDemo}
                    className="btn btn-primaray"
                    target="__blank">
                    {" "}
                    Live Demo
                </a>
            </div>
        </article>
    )
}

export default Wrapper
