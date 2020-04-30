import React from 'react';
import logo from './logo.svg';
// Import the BrowserRouter, Route and Link components
import { BrowserRouter, Route, Link } from 'react-router-dom';
import WorkExperience from './components/WorkExperience.js';
import Skills from './components/Skills.js'; 
import Education from './components/Education.js'; 
import About from './components/About.js'; 
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
  
        // Set up the Router
        <Route exact path="/" component={About} />
        <Route path="/work-experience" component={WorkExperience} />
        <Route path="/education" component={Education} />
        <Route path="/skills" component={Skills} />
        <Route path="/about" component={About} />
  
        <div className="navigation">
          <img src={logo} className="logo-image" alt="Logo Image" />
          <div className="navigation-sub">
                                          
            // Set up the Links
            <Link to="/" className="item">About</Link>
            <Link to="/education" className="item">Education</Link>
            <Link to="/skills" className="item">Skills</Link>
            <Link to="/work-experience" className="item">WorkExperience</Link>
            <Link to="/about" className="item">About</Link>
  
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
