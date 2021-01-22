import './App.css';

function App() {
  return (
    <div>
      <header>
        
      </header>
      <div className="mid-main">
      <div className="nav-leader">
         
         <h3>Mike</h3>
           <nav className="nav-list">
             <a className="nav-link active" href="#">Home</a>
             <a className="nav-link" href="#">Work</a>
             <a className="nav-link" href="#">Resume</a>
           </nav>
       </div>
            <div class="card-deck">
        <div class="card">
          {/* <img src="..." class="card-img-top" alt="..." /> */}
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div class="card">
          {/* <img src="..." class="card-img-top" alt="..."/> */}
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
      </div>
     
    </div>
  );
}

export default App;
