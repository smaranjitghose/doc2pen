import React, { useRef } from "react";
import ExperienceForm from "../../components/ExperienceForm/ExperienceForm";
import Map from "../../components/Map/Map";
import styles from "./ContactUs.module.css";

function ContactUs() {
  const mapRef = useRef()
  
  return (
    <div className={styles.ContactUs} id="home_contact">
      <div className={styles.heading}>Get In Touch</div>
      <div className={styles.contact_and_info_container}>

        <ExperienceForm />

        <div ref={mapRef} className={styles.map}>
          <Map/>
        </div>
        
      </div>
    </div>
  );
}

export default ContactUs;
