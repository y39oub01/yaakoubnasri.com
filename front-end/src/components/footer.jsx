import React from 'react';

function Footer({scorlto, refs, darkmode}){
    return(
        <footer className={darkmode?'dark-footer':'light-footer'}>
    <div className="footer-content">
        <div className="footer-links-container">
            <ul className='footer-links'>
           <li > <a onClick={() => scorlto(refs.Homeref) }>Home </a> </li>
            <li> <a onClick={() => scorlto(refs.Aboutref) }>About me </a> </li>
            <li> <a onClick={() => scorlto(refs.Skillsref) }>Skills </a> </li>
            <li> <a onClick={() => scorlto(refs.Projectsref) }>Projects </a> </li>
            <li> <a onClick={() => scorlto(refs.Contactref) }>Contact </a> </li>
            
            </ul> 
        </div>
        
        <p className="footer-copyright">© 2025 Yaakoub Nasri. All rights reserved.</p>
        <p className="footer-tagline">Designed with passion, coded with precision.</p>
    </div>
</footer>

    );

}
export default Footer;