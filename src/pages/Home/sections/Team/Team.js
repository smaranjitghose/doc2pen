import React, {useState, useEffect} from 'react';
import styles from './Team.module.css';
import {FaGithub} from 'react-icons/fa';
import Lottie from 'lottie-react-web';
import GithubAnimation from '../../../../assets/lotties/github.json';
import LinkedinAnimation from '../../../../assets/lotties/linkedin.json';
import Aos from 'aos';
import 'aos/dist/aos.css';
import smaranjitLarge from '../../../../assets/images/team/smaranjit_ghose_large.webp';
import anushLarge from '../../../../assets/images/team/anush_bhatia_large.webp';
import smaranjitSmall from "../../../../assets/images/team/smaranjit_ghose_small.webp";
import anushSmall from "../../../../assets/images/team/anush_bhatia_small.webp";


function Team() {

    useEffect(() => {
      Aos.init({
        duration: 800,
        delay: 1000
      })
    }, []);

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
        fetch('https://api.github.com/repos/smaranjitghose/doc2pen/contributors?per_page=1000')
        .then(res => res.json())
        .then(data => {
          // console.log(data);
          setContributors(data.filter((element) => 
            !(element.login === "smaranjitghose" || element.login === "anushbhatia")
          ));
        })
      }, []);

      useEffect(() => {
        window.addEventListener('keydown', (event) => {
          // ...
        });
      }, []);

    return (
        <div className={styles.Team} id="home_team">
            {/* <!-- Project Maintainer Sub Section --> */}
            <br/><br/> <p className={styles.titleMain}>Project Maintainers</p><br/><br/>
            <div className={styles.projectMaintainers}>
                {
                    maintainerSection.map(item =>
                      (
                      <div data-aos="fade-up" >
                      <div className={styles.profile_container}>
                        <div className={styles.profile_wrapper}>
                        <img src={item.imageLarge} alt="Maintainers"/>
                        </div>  
                      </div>
                      <div className={styles.profile_card}> 
                          <h4>{item.name}</h4>
                          <h5>{item.title}</h5>
                          <div className={styles.icons}>
                          <a href={item.github} target="_blank" rel="noreferrer">
                              <Lottie 
                              options={{
                                animationData: GithubAnimation
                              }}/>
                            </a>
                            <a href={item.linkedin} target="_blank" rel="noreferrer" onMouseEnter>
                              <Lottie 
                                options={{
                                  animationData: LinkedinAnimation
                                }}/>
                            </a>
                          </div> 
                          </div>
                      </div>))
                }
            </div>
            
            {/* <!-- Contributors Sub Section --> */}
            <br/><br/>
            <p className={styles.titleMain}>Clan of Contributors</p><br/><br/>
            <div className={styles.team_container}>
                {
                  contributors.map(c => (
                    <figure className={`${styles.position_relative} ${styles.d_inline_block} ${styles.text_center} ${styles.grid_wd_100} ${styles.figure}`} key={c.login}>
                      <img src={c.avatar_url} className={styles.grid_wd_100} alt="Profile"/>
                      <figcaption className={`${styles.position_absolute} ${styles.grid_wd_100} ${styles.va_top}`}>
                        <div className={styles.text}>
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
