import React from 'react';
import styles from './OpenSource.module.css';

function OpenSource() {

    const recentEventsDetails = [
        {
            coverImage: '/images/events/SLOP.png',
            eventName: 'SLOP',
            altName: 'SLOP Logo',
            eventDescription: `An inititative by the Developer Student Club (DA-IICT), exclusively for students who are new to open source software development.`,
            referencePage: 'https://slop.dscdaiict.in/projects'
        },
        {
            coverImage: '/images/events/hakin_codes.png',
            eventName: 'Hakincodes',
            altName: 'Hakincodes Logo',
            eventDescription: `Established in 2020 with a mission to empower youth i.e. students, developers & many more by giving opportunities to grow and learn.`,
            referencePage: 'https://hakincodes.tech/'
        },
        {
            coverImage: '/images/events/psoc_logo.png',
            eventName: 'PSOC',
            altName: 'PSOC Logo',
            eventDescription: `It's a 2 month long event conducted by Programming Club, UIET, aiming to help beginners get started with Open Source development.`,
            referencePage: 'https://www.pclubsummerofcode.in/'
        },
        {
            coverImage: '/images/events/woc-logo.png',
            eventName:'DevScript Winter of Code 2020',
            altName:'WOC Logo',
            eventDescription: 'Winter of Code envisioned by DevScript that helps understand the paradigm of Open Source contribution.',
            referencePage:'https://devscript.tech/woc/'
        },
        {
            coverImage: '/images/events/SWOC-logo.png',
            eventName:'Script Winter of Code 2021',
            altName:'SWOC Logo',
            eventDescription: 'Script Winter of Code envisioned by the Script Foundation aims to bring students into the world of open source development.',
            referencePage:'https://swoc.tech/index.html'
        }
    ];

    return (
        <div className={styles.OpenSource}>
            <div className={styles.title}>Open Source Programs we are a part of</div>
            <div className={styles.content}>"To do something really well, you have to get a lot of people involved."</div>

            <div className={styles.card_holder}>
                {
                    recentEventsDetails.map(event => (
                        <div className={`${styles.card} r-events-card`} key={event.eventName}>
                            <div className={styles.card_image}>
                                <img
                                    src={event.coverImage}
                                    alt={event.altName}
                                    aria-label={event.altName}
                                />
                            </div>
                            <div className={styles.card_text}>
                                <h2>{event.eventName}</h2>
                                <p className="pt-1 event-body">
                                    {event.eventDescription}
                                </p>
                            </div>
                            <div className={styles.card_stats}>
                                <a href={event.referencePage} className={styles.card_btn}>Read More</a>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default OpenSource
