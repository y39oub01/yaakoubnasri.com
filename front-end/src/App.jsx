import React ,  { useRef, useState, useEffect }  from 'react';
import Head_nav from './components/nav.jsx';
import Home from './components/home.jsx';
import About from './components/about.jsx';
import Skills  from './components/skills.jsx';
import Projects from './components/projects.jsx';
import Contact from './components/contact.jsx';
import Footer from './components/footer.jsx';

import './App.css'

function App() {
  const [darkmode , setdarkmode]=useState(true);
  const Homeref =useRef(null);
  const Aboutref =useRef(null);
  const Skillsref =useRef(null);
  const Projectsref=useRef(null);
  const Contactref =useRef(null);
  const Footerref =useRef(null);
  function scroll(ref){
   
    ref.current.scrollIntoView({ behavior: 'smooth' });
  
  
}
  const changemode=()=>setdarkmode(!darkmode);


  useEffect(() => {
    // This code runs once when the component mounts (on initial load/refresh)
    window.scrollTo(0, 0); // Scroll to the top of the page

    // Optional: If you want to also remove any hash from the URL on load/refresh
    // This can prevent the browser from trying to scroll to an element based on the hash
    if (window.location.hash) {
      window.history.replaceState(null, document.title, window.location.pathname);
      // Using replaceState instead of pushState to not add a new entry to browser history
    }
  }, []); 

  return (
    <>
    <Head_nav scorlto={scroll} 
    refs= {{Homeref , Aboutref, Skillsref , Projectsref , Contactref , Footerref}} 
    darkmode={darkmode}
    changemode={changemode}
    />
    <div ref={Homeref}> <Home scorlto={scroll} refs={{ Projectsref , Contactref}} darkmode={darkmode}  /> </div>
    <div ref={Aboutref}> <About darkmode={darkmode}/> </div>
    <div ref={Skillsref}> <Skills darkmode={darkmode} /> </div>
    <div ref={Projectsref}> <Projects darkmode={darkmode} /> </div>
    <div ref={Contactref}>  <Contact darkmode={darkmode} /> </div>
    <Footer scorlto={scroll} 
    refs={{Homeref , Aboutref, Skillsref , Projectsref , Contactref}} 
    darkmode={darkmode}
    
    />
    </>
  )
}

export default App;
