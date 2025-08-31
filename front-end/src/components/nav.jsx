import React from 'react';
import moon from '../assets/night-mode.png';
import sun from '../assets/day-mode.png';
function Head_nav( {scorlto, refs, darkmode, changemode} ){
    return(
        <nav className={darkmode ? "dark-nav" : "light-nav"}>
           <div className='logo'>Yaakoub Nasri</div>
           <ul className='nav-link'>
            <li> <a onClick={() => scorlto(refs.Homeref) }>Home </a> </li>
            <li> <a onClick={() => scorlto(refs.Aboutref) }>About me </a> </li>
            <li> <a onClick={() => scorlto(refs.Skillsref) }>Skills </a> </li>
            <li> <a onClick={() => scorlto(refs.Projectsref) }>Projects </a> </li>
            <li> <a onClick={() => scorlto(refs.Contactref) }>Contact </a> </li>
           
            <li>
                <button onClick={changemode}>
                    <img src={darkmode? moon : sun} alt={darkmode ? 'Dark mode icon' : 'Light mode icon'} />
                </button>
                </li>
           </ul>

        </nav>



    );
}
export default Head_nav;
