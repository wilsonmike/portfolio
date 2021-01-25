import './App.css';
import home from './assets/drag.svg';
import work from './assets/layers.svg';
import resume from './assets/paragraph.svg'; 
import contact from './assets/cloud.svg';
import logo from './assets/mlogowhite.svg';
import linkedin from './assets/linkedin.svg';
import github from './assets/github.svg';
import uncorkd from './assets/cork-icons.svg';
import study from './assets/open-book.svg';

function App() {
  return (
    <div>
      <main>
        <section className="glass">
          <div className="dashboard">
            <div className="user">
              <img className="branding" src={logo} alt="MW Logo"/>
              <h3>Mike Wilson</h3>
              <p className="bio">[Dev with design chops]</p>
            </div>
            <div className="links">
            <div className="link">
              <img className="nav-icons" src={home} alt="Home Icon"/>
              <h2>Home</h2>
            </div>
            <div className="link">
            <img className="nav-icons" src={work} alt="Work Icon"/>
              <h2>Work</h2>
            </div>
            <div className="link">
            <img className="nav-icons" src={resume} alt="Resume Icon"/>
              <h2>Resume</h2>
            </div>
            <div className="link">
            <img className="nav-icons" src={contact} alt="Contact Icon"/>
              <h2>Contact</h2>
            </div>
            </div>
            <div className="link">
              <img className="linkedin" src={linkedin} alt="LinkedIn"/>
              <h3 className="linkin">LinkedIn</h3>
              <a rel="noreferrer" href="https://github.com/wilsonmike"><img className="linkedin" src={github} alt="GitHub"/></a>
              <a rel="noreferrer" className="socials" target="_blank" href="https://github.com/wilsonmike"><h3 className="linkin">GitHub</h3></a>
            </div>
          </div>
          <div className="projects">
            <div className="status">
              <h1>Completed Projects</h1>
            </div>
            <div className="cards">
              <div className="card">
              <img className="nav-icons" src={uncorkd} alt="UnCorkd"/>
                <div className="project-info">
                  <h2>UnCorkd</h2>
                  <p>Angular, Firebase, PostgreSQL</p>
                </div>
                <h2 className="percentage">Live Project</h2>
              </div>
              <div className="card">
              <img className="nav-icons" src={study} alt="Study Chat"/>
                <div className="project-info">
                  <h2>Study Chat</h2>
                  <p>React, Firebase Realtime Database</p>
                </div>
                <h2 className="percentage">Live Project</h2>
              </div>
              <div className="card">
                <div className="project-info">
                  <h2>Covidly</h2>
                  <p>React, COVID-19 API, Data Visualization</p>
                </div>
                <h2 className="percentage">Live Project</h2>
              </div>
              <div className="card">
                <div className="project-info">
                  <h2>UnCorkd</h2>
                  <p>Angular, Firebase, PostgreSQL</p>
                </div>
                <h2 className="percentage">Live Project</h2>
              </div>
            </div>
          </div>
        </section>  
      </main>
      <div className="blob1">
      </div>
      <div className="blob2"></div>
    </div>
      
    
  
  );
}

export default App;
