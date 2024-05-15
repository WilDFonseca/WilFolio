import './styles.css'



function App() {
  return (
    <div className="containerHeader">
        <div className = "Header">
          <h1 className= "title">Wildney Fonseca</h1>
            <hr></hr>
            </div>
        <div className="bodyFolio">
          <div className='containerBody'>
            <div className="Texts">
              <h3 className="welcomeMessage">Welcome!</h3>
              <h2 className="Subtitle">My name is Wildney</h2>
              <p className="textBody">I'm a Product Owner and a Full Stack developer <br/> Here you can lear more about me and my work! </p>
              <div className="buttonsDiv">
                <button className="buttonAbout">About Me</button>
                <button className="buttonWork">My Work</button>
                <button className="buttonContact">Contact Me</button>
              </div>
            </div>
            <div className='myPhotoDiv'>
              <img src="./images/cv.jpg" alt="Wildney Fonseca Professional Photo" className='myPhoto' width="375" height="500"></img>
            </div>
          </div>
        </div> 
    </div>
  );
}

export default App;
