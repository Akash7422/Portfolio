import React from "react"
import Header from "./Components/Header/Header"
import Nav from "./Components/Nav/nav"
import About from "./Components/About/about"
import Experience from "./Components/Experience/experience"
import Services from "./Components/Services/services"
import Portpolio from "./Components/Portpolio/portpolio"
import Testimonials from "./Components/Testimonials/testimonials"
import Contacts from "./Components/Contacts/contacts"
import Footer from "./Components/Footer/Footer"

const App = () => {
    return (
        <div>
            <Header />
            <Nav />
            <About />
            <Experience />
            <Services />
            <Portpolio />
            {/* <Testimonials /> */}
            <Contacts />
            <Footer />
        </div>
    )
}

export default App
