import React from 'react'
import Footer from './Footer/Footer'
import About from './About/About'
import ContactUs from './ContactUs/ContactUs'
import Header from './Header/Header'
import Home from './Home/Home'
import OpenSource from './OpenSource/OpenSource'
import SupportUs from './SupportUs/SupportUs'
import Team from './Team/Team'

function HomePage() {
    return (
        <div className="HomePage" style={{fontFamily: "Montserrat"}}>
            <Header />
            <Home />
            <About />
            <Team />
            <OpenSource />
            <ContactUs />
            <SupportUs />
            <Footer />
        </div>
    )
}

export default HomePage
