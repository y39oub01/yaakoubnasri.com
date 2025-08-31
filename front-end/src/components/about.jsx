import React  from "react";
import me from '../assets/me.png';

function About_me({darkmode} ){
    return(
       <section className={darkmode ? "dark-section-aboutme " : "light-section-aboutme "}>
        <div className="about-container">
            <div className="about-content">
            <h2>About me </h2>
            <p className="aboutme-para">I am Yaakoub Nasri, an enthusiastic IT student with a passion for programming, artificial intelligence, and machine learning. 
                Currently, I am dedicated to building my skills through practical projects and continuous learning. 
                My goal is to become an AI and ML expert and achieve full independence by creating intelligent and innovative solutions.
                 What sets me apart is my commitment to consistency, my curiosity for new technologies, and my drive to constantly improve both my technical and soft skills. 
                 I believe in delivering quality work and maintaining a friendly, approachable attitude in all my collaborations.

            </p>
            <div className="about-image-container">
                <img className="about-image" src={me} alt="" srcset="" />

            </div>
            
           
            


        </div>
        </div>
       </section>
    );


}
export default About_me;