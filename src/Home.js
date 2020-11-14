import React, { Component, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './App.css';
export function Home(){

    const [searchStr, setSearchStr] = useState("VA");
  


    const search = (event) => {

    }
    const updateField = e => {
      setSearchStr(e.target.value)
    }

    return (<div className = "Home">
      <form>
      <TextField className = "Input" label="Enter your state" value = {searchStr} onChange = {updateField}/>
      <div className = "btn">
        <Button variant="contained" className = "btn" onClick = {() => search()}>Search</Button>
        </div>
      </form>
    </div>)
  

}