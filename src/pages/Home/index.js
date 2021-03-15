import React from "react";
import MetaComponent from "../../seo/MetaComponent";
import metaData from "../../seo/metaData";

import About from "./sections/About/About";
import Banner from "./sections/Banner/Banner";
import OpenSource from "./sections/OpenSource/OpenSource";
import SupportUs from "./sections/SupportUs/SupportUs";
import Team from "./sections/Team/Team";
import ContactUs from "./sections/ContactUs/ContactUs";
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
      <SupportUs />
      <ContactUs />
      <ScrollToTop />
    </div>
  );
}

export default Home;
