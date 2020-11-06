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
      <nav><ul> 
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/info">More Information</Link>
          </li>
        </ul></nav>
        <Switch>
            <Route path="/home">
              <h1>Home</h1>
              <Home/>

            </Route>
            <Route path="/about">
              <h1>About</h1>
            </Route>
            <Route path="/info">
              <h1>More Information</h1>
            </Route>

        </Switch>
      <header>
        
      </header>
    </div>
    </Router>
  );
}

export default App;
