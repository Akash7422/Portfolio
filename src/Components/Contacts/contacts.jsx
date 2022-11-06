import React, { useRef, useState, useEffect } from "react"
import "./contact.css"
import dotenv from "dotenv"
import { dirname } from "path"
import path from "path"
import { MdEmail } from "react-icons/md"
import { RiMessage3Fill } from "react-icons/ri"
import { AiOutlineWhatsApp } from "react-icons/ai"
import emailjs from "emailjs-com"
dotenv.config({ path: "./config.env" })
const Contacts = () => {
    const [showdiv, setshowDiv] = useState(false)
    const [inputText, setInputText] = useState({
        name: "",
        email: "",
        message: "",
    })
    const hideshoeDiv = () => {
        setTimeout(() => {
            setshowDiv(false)
        }, 4000)
    }
    function handleChange(event) {
        const { name, value } = event.target

        setInputText((prevValue) => {
            if (name === "name") {
                return {
                    name: value,
                    email: prevValue.email,
                    message: prevValue.message,
                }
            } else if (name === "email") {
                return {
                    name: prevValue.name,
                    email: value,
                    message: prevValue.lName,
                }
            } else if (name === "message") {
                return {
                    name: prevValue.name,
                    email: prevValue.emai,
                    message: value,
                }
            }
        })
    }
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault()
        emailjs
            .sendForm(
                "service_ndfw1ti",
                "template_ahoyyqi",
                form.current,
                "9EyYm66pWfIkcAp-v"
            )
            .then(
                (result) => {
                    setshowDiv(true)
                    hideshoeDiv()
                    setInputText(() => {
                        return {
                            name: "",
                            email: "",
                            message: "",
                        }
                    })
                },
                (error) => {
                    console.log(error.text)
                }
            )
    }

    return (
        <section id="contact">
            <h5>Get in touch</h5>
            <h2>Contact Me</h2>
            {/* {showdiv && (
                <div className="center">
                    Mail sent successfully.. Thanks for contacting Me!!
                </div>
            )} */}
            <div className="container cntct__cntnr">
                <div className="cntc__options">
                    <article className="cntc__option">
                        <MdEmail className="cntc__option-icons" />
                        <h4>Email</h4>
                        <h5>akashmk1998@gmail.com</h5>
                        <a href="mailto:akashmk1998@gmail.com" target="__blank">
                            send a message
                        </a>
                    </article>
                    <article className="cntc__option">
                        <RiMessage3Fill />
                        <h4>Messanger</h4>
                        <h5>Akash K</h5>
                        <a
                            href="https://www.facebook.com/akashmk.akashmk.5/"
                            target="__blank">
                            send a message
                        </a>
                    </article>
                    <article className="cntc__option">
                        <AiOutlineWhatsApp />
                        <h4>WhastApp</h4>
                        <h5>Akash K</h5>
                        <a
                            href="https://api.whatsapp.com/send?phone=+919108964269"
                            target="__blank">
                            send a message
                        </a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input
                        onChange={handleChange}
                        type="text"
                        name="name"
                        placeholder="Your full Name"
                        value={inputText.name}
                        required
                    />
                    <input
                        onChange={handleChange}
                        type="email"
                        name="email"
                        placeholder="Your Mail Id"
                        value={inputText.email}
                        required
                    />
                    <textarea
                        onChange={handleChange}
                        name="message"
                        rows="7"
                        placeholder="your message"
                        value={inputText.message}
                        required
                    />
                    <button type="submit" className="btn btn-primary">
                        Contact me
                    </button>
                    {showdiv && (
                        <div className="center">
                            Mail sent successfully.. Thanks for contacting Me!!
                        </div>
                    )}
                </form>
            </div>
        </section>
    )
}

export default Contacts
