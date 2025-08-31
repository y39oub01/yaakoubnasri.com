import React  from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

function Home({darkmode, scorlto, refs} ){
    
    return(
       <section className={darkmode ? "dark-section" : "light-section"}>
        <div className="hero-content">
            <h1>Hi, I'm </h1>
    <span className="gradient-text" >Yaakoub Nasri</span>


        </div>
    
    <h2>Full Stack Developer</h2>
    <p>I build exceptional digital experiences with modern technologies. 
        Passionate about creating efficient, scalable, and user-friendly applications.
    Currently enhancing my backend and deployment skills, with future goals of specializing in AI and Machine Learning. </p>
    
    <div className="button-group">
        <button onClick={() => scorlto(refs.Projectsref) } className="btn btn-primary">View my work</button>
        <button onClick={() => scorlto(refs.Contactref) } className="btn" >Contact me</button>
    </div>
    
   <div className="social-links">
    <a href="https://github.com/y39oub01" aria-label="GitHub">
        <i className="fab fa-github"></i>
    </a>
    <a href="https://www.linkedin.com/in/yaakoub-nasri-40213b364/" aria-label="LinkedIn">
        <i className="fab fa-linkedin"></i>
    </a>
    <a href="mailto:yaakoubnasri01@gmail.com" aria-label="Email">
        <i className="fas fa-envelope"></i>
    </a>
</div>
    
</section>

    );


}
export default Home;
