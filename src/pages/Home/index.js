import React from 'react'
import MetaComponent from '../../seo/MetaComponent'
import metaData from '../../seo/metaData'

import About from './sections/About/About'
import ContactUs from './sections/ContactUs/ContactUs'
import Banner from './sections/Banner/Banner'
import OpenSource from './sections/OpenSource/OpenSource'
import SupportUs from './sections/SupportUs/SupportUs'
import Team from './sections/Team/Team'
import Footer from "../../components/Footer/Footer";
import ScrollToTop from "./../../components/ScrollToTopButton/ScrollToTopButton";

function Home() {
    return (
      <div className="HomePage">
        <MetaComponent
          title={metaData.home.title}
          description={metaData.home.description}
          keywords={metaData.home.keywords}
        />
        <Banner />
        <About />
        <Team />
        <OpenSource />
        <ContactUs />
        <SupportUs />
        <Footer />
        <ScrollToTop />
      </div>
    );
}

export default Home
