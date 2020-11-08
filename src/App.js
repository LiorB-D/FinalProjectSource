import './App.css';
import TextField from '@material-ui/core/TextField';
import {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Home} from './Home.js'
import {About} from './About.js'
import {Info} from './Info.js'

function App() {
  return (
    <Router>
      <div className = "App">
      <nav><ul className = "TopBar"> 
          <li className = "NavItem">
            <Link to="/">Home</Link>
          </li>
          <li className = "NavItem">
            <Link to="/about">About</Link>
          </li>
          <li className = "NavItem">
            <Link to="/info">More Information</Link>
          </li>
        </ul></nav>
        <Switch>
            <Route path="/about">
              <h1>About</h1>
              <About/>
            </Route>
            <Route path="/info">
              <h1>More Information</h1>
              <Info/>
            </Route>
            <Route path="/">
              <h1>Home</h1>
              <Home/>
            </Route>

        </Switch>
      <header>
        
      </header>
    </div>
    </Router>
  );
}

export default App;
