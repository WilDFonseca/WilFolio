import React, { useState } from 'react';
import './styles.css';
import Accordion from './Accordion';

function App() {
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleSideMenu = (menu) => {
    if (activeMenu === menu) {
      setActiveMenu(null);
    } else {
      setActiveMenu(menu);
    }
  };

  const aboutMeSections = [
    { title: 'My Story', content: 'This is my story...' },
    { title: 'My CV', content: 'This is my CV...' },
    { title: 'Challenges and Achievements', content: 'These are my challenges and achievements...' }
  ];

  const myWorkSections = [
    { title: 'Digital Product Business Case', content: 'This is my Digital Product Business Case...' },
    { title: 'My Projects', content: 'These are my projects...' },
    { title: 'GitHub', content: 'Here is my GitHub...' }
  ];

  const contactMeSections = [
    { title: 'Contact me by WhatsApp', content: 'My WhatsApp...' },
    { title: 'Contact me by Email', content: 'My Email...' },
    { title: 'Contact me by LinkedIn', content: 'My LinkedIn...' }
  ];

  return (
    <div className="App">
      <div className="AppHeader">
        <h1 className="title">Wildney Fonseca</h1>
        <hr></hr>
      </div>
      <div className="bodyFolio">
        <div className='containerBody'>
          <div className="Texts">
            <h3 className="welcomeMessage">Welcome!</h3>
            <h2 className="Subtitle">My name is Wildney</h2>
            <p className="textBody">I'm a Product Owner and a Full Stack developer <br /> Here you can learn more about me and my work!</p>
            <div className="buttonsDiv">
              <a className="buttonAbout" onClick={() => toggleSideMenu('aboutMe')}>About Me</a>
              <a className="buttonWork" onClick={() => toggleSideMenu('myWork')}>My Work</a>
              <a className="buttonContact" onClick={() => toggleSideMenu('contactMe')}>Contact Me</a>
            </div>
          </div>
          <div className={`myPhotoDiv ${activeMenu ? 'fade' : ''}`}>
            <img src="./images/cv.jpg" alt="Wildney Fonseca Professional Photo" className='myPhoto' width="480" height="600"></img>
          </div>
          
          <div className={`sideMenu ${activeMenu ? 'open' : ''}`}>
            <a href="javascript:void(0)" className="closeBtn" onClick={() => setActiveMenu(null)}>&times;</a>
            <div className="menuContent">
              {activeMenu === 'aboutMe' && <Accordion sections={aboutMeSections} />}
              {activeMenu === 'myWork' && <Accordion sections={myWorkSections} />}
              {activeMenu === 'contactMe' && <Accordion sections={contactMeSections} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
