import './App.css';

function App() {
  return (
    <div>
      <main>
        <section className="glass">
          <div className="dashboard">
            <div className="user">
              <h3>Mike Wilson</h3>
              <p>Dev with design chops</p>
            </div>
            <div className="links">
            <div className="link">
              <h2>Home</h2>
            </div>
            <div className="link">
              <h2>Work</h2>
            </div>
            <div className="link">
              <h2>Resume</h2>
            </div>
            <div className="link">
              <h2>Contact</h2>
            </div>
            </div>
            <div className="linked">
              <h2>LinkedIn</h2>
            </div>
          </div>
          <div className="projects">
            <div className="status">
              Completed Projects
            </div>
            <div className="cards">
              <div className="card">
                <div className="project-info">
                  <h2>UnCorkd</h2>
                  <p>Angular, Firebase, PostgreSQL</p>
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
