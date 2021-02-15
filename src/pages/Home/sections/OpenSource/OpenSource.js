import React from "react";
import styles from "./OpenSource.module.css";

function OpenSource() {
  const recentEventsDetails = [
    {
      coverImage: "/images/events/SLOP.webp",
      eventName: "SLOP",
      altName: "SLOP Logo",
      eventDescription: `An inititative by the Developer Student Club (DA-IICT), exclusively for students who are new to open source software development.`,
      referencePage: "https://slop.dscdaiict.in/projects",
    },
    {
      coverImage: "/images/events/hakin_codes.webp",
      eventName: "Hakincodes",
      altName: "Hakincodes Logo",
      eventDescription: `Established in 2020 with a mission to empower youth i.e. students, developers & many more by giving opportunities to grow and learn.`,
      referencePage: "https://hakincodes.tech/",
    },
    {
      coverImage: "/images/events/psoc_logo.webp",
      eventName: "PSOC",
      altName: "PSOC Logo",
      eventDescription: `It's a 2 month long event conducted by Programming Club, UIET, aiming to help beginners get started with Open Source development.`,
      referencePage: "https://www.pclubsummerofcode.in/",
    },
    {
      coverImage: "/images/events/woc-logo.webp",
      eventName: "DevScript Winter of Code 2020",
      altName: "WOC Logo",
      eventDescription:
        "Winter of Code envisioned by DevScript that helps understand the paradigm of Open Source contribution.",
      referencePage: "https://devscript.tech/woc/",
    },
    {
      coverImage: "/images/events/SWOC-logo.webp",
      eventName: "Script Winter of Code 2021",
      altName: "SWOC Logo",
      eventDescription:
        "Script Winter of Code envisioned by the Script Foundation aims to bring students into the world of open source development.",
      referencePage: "https://swoc.tech/index.html",
    },
    {
      coverImage: "/images/events/mwoc.webp",
      eventName: "Mexili Winter of Code 2021",
      altName: "MWOC Logo",
      eventDescription:
        "Mexili is a Free and Open Source organization whose motivation is to funnel learning and implementation through Open Source Software Development.",
      referencePage: "https://mexili.org/winter_of_code/#/",
    },
    {
      coverImage: "/images/events/crosswoc.webp",
      eventName: "Cross Winter of Code 2021",
      altName: "CrossWOC Logo",
      eventDescription:
        "CrossWoC is a six-week long opensource event organised by IEEE DTU & IEEE DTU CS, which gives programmers and innovators an opportunity to bring out their nascent talent and find intriguing solutions to real-world problems.",
      referencePage: "https://crosswoc.ieeedtu.in/",
    },
    {
      coverImage: "/images/events/gssoc.webp",
      eventName: "GirlScript Summer of Code 2021",
      altName: "GSSOC Logo",
      eventDescription:
        "GSSOC is a 3 month long Open Source program during summers conducted by GirlScript Foundation with an aim to help beginners get started with Open Source Development while encouraging diversity.",
      referencePage: "https://gssoc.girlscript.tech/",
    },
  ];


  return (
    <div className={styles.OpenSource}>
      <div className={styles.title}>Open Source Programs we are a part of</div>
      <div className={styles.content}>"To do something really well, you have to get a lot of people involved."</div>
      <div className={styles.card_holder}>
        {recentEventsDetails.map(event => (
          <div className={`${styles.card} r-events-card`} key={event.eventName}>
            <div className={styles.card_image}>
              <img src={event.coverImage} alt={event.altName} aria-label={event.altName} />
            </div>
            <div className={styles.card_text}>
              <h2>{event.eventName}</h2>
              <p className="pt-1 event-body">{event.eventDescription}</p>
            </div>
            <div className={styles.card_stats}>
              <a href={event.referencePage} className={styles.card_btn}>
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OpenSource;
