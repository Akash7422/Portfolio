import React from "react"
import "./services.css"
import { BiCheck } from "react-icons/bi"
import Servicecards from "./servicecards"
import webdev from "./servicelist"

const services = () => {
    return (
        <section id="services">
            <h5>What I offer</h5>
            <h2>Services</h2>
            <div className="container ss__ctnr">
                <article className="ss">
                    <div className="ss__head">
                        <h3>Web Development</h3>
                    </div>
                    <ul className="ss__list">
                        {webdev.map((webdev) =>
                            webdev.title === "webdev" ? (
                                <Servicecards
                                    key={webdev.key}
                                    list={webdev.list}
                                />
                            ) : (
                                ""
                            )
                        )}
                    </ul>
                </article>
                <article className="ss">
                    <div className="ss__head">
                        <h3>Software Testing</h3>
                    </div>
                    <ul className="ss__list">
                        {webdev.map((webdev) =>
                            webdev.title === "Testing" ? (
                                <Servicecards
                                    key={webdev.key}
                                    list={webdev.list}
                                />
                            ) : (
                                ""
                            )
                        )}
                    </ul>
                </article>
            </div>
        </section>
    )
}

export default services
