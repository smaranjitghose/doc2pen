import React from 'react';
import styles from './about.module.scss';
import step1 from './../../../../assets/images/home-about/step1.svg';
import step2 from './../../../../assets/images/home-about/step2.svg';
import step3 from './../../../../assets/images/home-about/step3.svg';
import step4 from './../../../../assets/images/home-about/step4.svg';
import openSource from './../../../../assets/images/home-about/open-source.svg';


function Step(props) {
    return (
      <div className={`${styles.step} ${props.reverse && styles.step_reverse}`}>
        <div className={styles.illustration}>
          <img className ={styles.image} src={props.img} alt="Page" />
        </div>
        <div className={styles.step_text}>
          <div className={styles.step_title}>{props.title}</div>
          <div className={styles.step_content}>{props.content}</div>
        </div>
      </div>
    );
}

function About() {
    return (
        <div className={styles.About} id="home_about">
            <div className={styles.title}>
                What are we about?
            </div>
            <div className={styles.line}>Are you a <b><i>student</b></i> who is tired of having to <b><i>write out assignments on paper, draw sketches by hand, scan each page, convert it all to a PDF</b></i>, and finally submit?</div>
            <div className={styles.line}>Does it seem <b><i>too much of a hassle</b></i> in this age of online education?</div>
            <div className={styles.line}>If your answer is <b><i>yes</b></i>, then you've come to the <b><i>right place!</b></i></div>            
            <div className={styles.line}><b><i>Doc2Pen</b></i> is the 1 stop shop for getting all your <b><i>"handmade" assignments ready for submission digitally</b></i>.</div>
            <div className={styles.line}>Use the highly customisable <b><i>Editor page</b></i> to <b><i>type in text and get a handwritten document!</b></i></div>            
            <div className={styles.line}>Use the <b><i>Sketch page</b></i> to <b><i>digitally draw in a handmade style</b></i>!</div> 
            <div className={styles.line}>And in the end, use the <b><i>Media Manip page</b></i> to <b><i>convert your assignment into the appropriate format</b></i> for submission!</div> 

            <div className={styles.steps}>
                <Step
                    img={step1}
                    title="Step 1 : Pick a Page"
                    content="Here, you can choose one either from the wide variety of pages available or you can upload your own institution's letterpad."
                    reverse={false}
                />
                <Step
                    img={step2}
                    title="Step 2 : Pick a Font"
                    content="You can adjust the combination of font-style, font-color and font-size to the one which resembles your handwriting."
                    reverse={true}    
                />
                <Step
                    img={step3}
                    title="Step 3 : Type it"
                    content="Use your fast typing skill to type the assignment in the editor and get it in handwritten form."
                    reverse={false}
                />
                <Step
                    img={step4}
                    title="Step 4 : Download it"
                    content="You can now download/export it in the .png, .jpg, .jpeg or .pdf format and get it printed in order to submit in the college."
                    reverse={true}    
                />
            </div>
            <img src={openSource} alt="Open Source" style={{width: "55vw"}}/>
            <div className={styles.open_source}>
                <div>
                    Now, as Doc2Pen saves a lot of your time, you can now spend your valuable time in learning some practical stuff.
                </div>
                <br />
                <div>
                    And So, here comes the Good News, Doc2pen is an Open Source Project, we welcome your contributions 🙂.
                </div>
            </div>
        </div>
    )
}

export default About
