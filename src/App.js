import './App.css';
import TextField from '@material-ui/core/TextField';
import {useState, useEffect} from 'react';

function App() {
  return (
    <div>
      <header>
        <TextField label = "My Zipcode"/>
      </header>
    </div>
  );
}

export default App;
