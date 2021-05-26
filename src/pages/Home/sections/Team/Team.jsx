import React, { useState, useEffect } from "react";
import styles from "./team.module.scss";
import { FaGithub } from "react-icons/fa";
import smaranjit0 from "../../../../assets/images/team/smaranjit0.png";
import smaranjit1 from "../../../../assets/images/team/smaranjit1.png";
import anush from "../../../../assets/images/team/anush0.png";
import anush0 from "../../../../assets/images/team/anush1.png";
import anush1 from "../../../../assets/images/team/anush2.png";
import FluidCard from "./components/FluidCard/FluidCard";

function Team() {
  const maintainerSection = [
    {
      name: "Smaranjit Ghose",
      title: "Lead Developer",
      githubLink: "https://github.com/smaranjitghose",
      linkedinLink: "https://www.linkedin.com/in/smaranjitghose/",
      imgArray: [smaranjit0, smaranjit1],
    },
    {
      name: "Anush Bhatia",
      title: "Lead Developer",
      githubLink: "https://github.com/anushbhatia",
      linkedinLink: "https://www.linkedin.com/in/anushbhatia/",
      imgArray: [anush, anush0, anush1],
    },
  ];

  const [contributors, setContributors] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/repos/smaranjitghose/doc2pen/contributors?per_page=1000")
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        setContributors(
          data.filter(element => !(element.login === "smaranjitghose" || element.login === "anushbhatia"))
        );
      });
  }, []);

  return (
    <div className={styles.Team} id="home_team">
      {/* <!-- Project Maintainer Sub Section --> */}
      <br />
      <br /> <p className={styles.titleMain}>Project Maintainers</p>
      <br />
      <br />
      <div className={styles.projectMaintainers}>
        {maintainerSection.map((item, index) => (
          <FluidCard content={item} key={index}/>
        ))}
      </div>
      {/* <!-- Contributora Sub Section --> */}
      <br />
      <br />
      <p className={styles.titleMain}>Clan of Contributors</p>
      <br />
      <br />
      <div className={styles.team_container}>
        {contributors.map(c => (
          <figure
            className={`${styles.position_relative} ${styles.d_inline_block} ${styles.text_center} ${styles.grid_wd_100} ${styles.figure}`}
            key={c.login}
          >
            <img src={c.avatar_url} className={styles.grid_wd_100} alt="Profile" />
            <figcaption className={`${styles.position_absolute} ${styles.grid_wd_100} ${styles.va_top}`}>
              <div className={styles.text}>
                <a href={c.html_url} className={styles.social_icon} target="_blank" rel="noreferrer">
                  <FaGithub />
                </a>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

export default Team;
