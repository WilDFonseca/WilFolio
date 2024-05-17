import React, { useState, useRef, useEffect } from 'react';
import './styles.css';

function App() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [menuHeight, setMenuHeight] = useState(600); // Initial menu height

  const menuContentRef = useRef(null);

  useEffect(() => {
    if (menuContentRef.current) {
      setMenuHeight(menuContentRef.current.scrollHeight);
    }
  }, [activeMenu]);

  const toggleSideMenu = (menu) => {
    if (activeMenu === menu) {
      setActiveMenu(null);
    } else {
      setActiveMenu(menu);
    }
  };

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

              <div className={`sideMenu ${activeMenu ? 'open' : ''}`} style={{ height: menuHeight }}>
              <a href="javascript:void(0)" className="closeBtn" onClick={() => setActiveMenu(null)}>&times;</a>
              <div className="menuContent" ref={menuContentRef}>
                {activeMenu === 'aboutMe' && (
                        <>
                          <div className="menuText">
                            <a href="#story">My Story</a>
                            <h3>My Story</h3>
                            <p>This is my story...</p>
                          </div>
                          <div className="menuText">
                          <a href="#cv">My CV</a>
                            <h3>My CV</h3>
                            <p>This is my CV...</p>
                          </div>
                          <div className="menuText">
                          <a href="#achievements">Challenges and Achievements</a>
                            <h3>Challenges and Achievements</h3>
                            <p>These are my challenges and achievements...</p>
                          </div>
                        </>
                    )}
                  {activeMenu === 'myWork' && (
                        <>
                        <div className="menuText">
                        <a href="#Digital Product">Digital Product Business Case</a>
                          <h3>Digital Product Business Case</h3>
                          <p>This is my Digital Product Business Case...</p>
                        </div>
                        <div className="menuText">
                        <a href="#My projects">My projects</a>
                          <h3>My projects</h3>
                          <p>This is my My projects...</p>
                        </div>
                        <div className="menuText">
                        <a href="#GitHub">My GitHub</a>
                          <h3>GitHub</h3>
                          <p>Here is my GitHub...</p>
                        </div>
                      </>
                    )}
                  {activeMenu === 'contactMe' && (
                     <>
                     <div className="menuText">
                     <a href="#story">Contact me by Whatsapp</a>
                       <h3>Contact me by Whatsapp</h3>
                       <p>My Whatsapp</p>
                     </div>
                     <div className="menuText">
                     <a href="#cv">Contact me by Email</a>
                       <h3>Contact me by Email</h3>
                       <p>My Email</p>
                     </div>
                     <div className="menuText">
                     <a href="#achievements">Contact me by LinkedIn</a>
                       <h3>Contact me by LinkedIn</h3>
                       <p>My LinkedIn</p>
                     </div>
                   </>
            )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
