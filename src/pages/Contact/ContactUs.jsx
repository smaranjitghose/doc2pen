import React, { useRef } from "react";
import MetaComponent from "../../seo/MetaComponent";
import metaData from '../../seo/metaData'
import ExperienceForm from "./components/ExperienceForm/ExperienceForm";
import Map from "./components/Map/Map";
import styles from "./ContactUs.module.css";

function ContactUs() {
  const mapRef = useRef()
  
  return (
    <div className={styles.ContactUs} id="home_contact">
      <MetaComponent
        title={metaData.contact.title}
        description={metaData.contact.description}
        keywords={metaData.contact.keywords}
      />
      <div className={styles.heading}>Get In Touch</div>
      <div className={styles.contact_and_info_container}>
        <ExperienceForm />

        <div ref={mapRef} className={styles.map}>
          <Map />
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
