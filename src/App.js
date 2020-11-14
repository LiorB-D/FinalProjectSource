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
import ReactMapGL from 'react-mapbox-gl';

function App() {

  const [viewport, setViewport] = useState ({
    width: 1200,
    height: 500,
    latitude: 38.034494,
    longitude: -78.504003,
    zoom: 13,
  });

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
              <ReactMapGL
                mapboxApiAccessToken="process.env.pk.eyJ1IjoicnVkeXNjaG5laWRlciIsImEiOiJja2dwZWszazQwaXdjMnFwM3dodTk1ZHB4In0.yCwfcZYI9zIEaEO978lDqQ"
                {...viewport}
                onViewportChange={nextViewport => setViewport(nextViewport)}
              />
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
