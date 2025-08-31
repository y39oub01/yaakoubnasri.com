import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import c from '../assets/c-.png';
import html from '../assets/html.png';
import js from '../assets/js.png';
import mysql from '../assets/mysql.png';
import php from '../assets/php.png';
import python from '../assets/python.png';
import django from '../assets/django.png';
import css from '../assets/css-3.png';
import react from '../assets/atom.png';
import node from '../assets/nodejs.png';


function Skills ({darkmode}){
 <div className='skill-item'></div>

    return(
        <section className={darkmode ? "dark-section-skills" : "light-section-skills"}>
  <div className="skills-container">
    <h2 className="skills-heading">My Skills</h2>
    
    <div className="skills-row">
      {/* Frontend Card */}
      <div className="skills-card">
        <h3 className="card-title">Frontend</h3>
        <div className="skills-grid">
          <div className="skill-item">
            <span>React</span>
            <img src={react} alt="React" />
            
          </div>
          <div className="skill-item">
            <span>JavaScript</span>
            <img src={js} alt="JavaScript" />
          </div>

          <div className="skill-item">
            <span>Html5</span>
            <img src={html} alt="JavaScript" />
          </div>
          <div className="skill-item">
            <span>CSS3</span>
            <img src={css} alt="JavaScript" />
          </div>
          
          {/* Add other frontend skills */}
        </div>
      </div>
      
      {/* Backend Card */}
      <div className="skills-card">
        <h3 className="card-title">Backend</h3>
        <div className="skills-grid">
          <div className="skill-item">
            <span>Node.js</span>
            <img src={node} alt="Node.js" />
          </div>
          <div className="skill-item">
            <span>Python</span>
            <img src={python} alt="Python" />
          </div>
          <div className="skill-item">
            <span>Django</span>
            <img src={django} alt="Python" />
          </div>
          <div className="skill-item">
            <span>MySQL</span>
            <img src={mysql} alt="Python" />
          </div>
          <div className="skill-item">
            <span>PHP</span>
            <img src={php} alt="Python" />
          </div>
          <div className="skill-item">
            <span>C prog language</span>
            <img src={c} alt="Python" />
          </div>
          
          {/* Add other backend skills */}
        </div>
      </div>
    </div>
  </div>
</section>

    );
}
export default Skills;