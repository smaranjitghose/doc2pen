import React, {useState, useEffect} from 'react';
import styles from './Team.module.css';
import {FaGithub, FaLinkedinIn} from 'react-icons/fa';
import smaranjitLarge from '../../../../assets/images/team/smaranjit_ghose_large.webp';
import anushLarge from '../../../../assets/images/team/anush_bhatia_large.webp';
import smaranjitSmall from "../../../../assets/images/team/smaranjit_ghose_small.webp";
import anushSmall from "../../../../assets/images/team/anush_bhatia_small.webp";


function Team() {

    const maintainerSection = [
        {
          imageLarge: smaranjitLarge,
          imageSmall: smaranjitSmall,
          name: "Smaranjit Ghose",
          title: "Lead Developer",
          github: "https://github.com/smaranjitghose",
          linkedin: "https://www.linkedin.com/in/smaranjitghose/",
          imgclass: "image_1"
        },
        {
          imageLarge: anushLarge,
          imageSmall: anushSmall,
          name: "Anush Bhatia",
          title: "Lead Developer",
          github: "https://github.com/anushbhatia",
          linkedin: "https://www.linkedin.com/in/anushbhatia/",
          imgclass: "image_2"
        }
      ];

      const [contributors, setContributors] = useState([]);

      useEffect(() => {
        fetch('https://api.github.com/repos/smaranjitghose/doc2pen/contributors')
        .then(res => res.json())
        .then(data => {
          // console.log(data);
          setContributors(data.filter((element) => 
            !(element.login === "smaranjitghose" || element.login === "anushbhatia")
          ));
        })
      }, []);

    return (
        <div className={styles.Team} id="home_team">
            {/* <!-- Project Maintainer Sub Section --> */}
            <br/><br/> <h3>Project Maintainers</h3><br/><br/>
            <div className={styles.projectMaintainers}>
                {
                    maintainerSection.map(item =>
                      (
                      <div className={`${styles[item.imgclass]} ${styles.centeralign}`} key={item.name}>
                      <div className={styles.profile_container}>
                        <div className={styles.profile_wrapper}>
                          <div className={styles.profile_card}>
                          <img srcSet={`${item.imageSmall} 1x, ${item.imageLarge} 2x`} src={item.imageSmall} alt="profile pics"/> 
                          <h4>{item.name}</h4>
                          <h5>{item.title}</h5>
                          <div className={styles.icons}>
                            <a href={item.github} target="_blank" rel="noreferrer"><FaGithub /></a>
                            <a href={item.linkedin} target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
                          </div> 
                          </div>
                        </div>
                      </div>
                      </div>))
                }
            </div>
            
            {/* <!-- Contributora Sub Section --> */}
            <br/><br/>
            <h3>Clan of Contributors</h3><br/><br/>
            <div className={styles.team_container}>
                {
                  contributors.map(c => (
                    <figure className={`${styles.position_relative} ${styles.d_inline_block} ${styles.text_center} ${styles.grid_wd_100} ${styles.figure}`} key={c.login}>
                      <img src={c.avatar_url} className={styles.grid_wd_100} alt="Profile"/>
                      <figcaption className={`${styles.position_absolute} ${styles.grid_wd_100} ${styles.va_top}`}>
                        <div className={styles.text}>
                          <div>{c.login}</div>
                          <a href={c.html_url} className={styles.social_icon} target="_blank" rel="noreferrer">
                            <FaGithub />
                          </a>
                        </div>
                      </figcaption>
                    </figure>
                  ))
                }
            </div>
        </div>
    )
}

export default Team
