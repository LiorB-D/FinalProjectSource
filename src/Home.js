import React, { Component, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './App.css';


const url = "https://api.covidtracking.com/v1/states/va/current.json"

export function Home(){

    const [searchStr, setSearchStr] = useState("VA");
    const [covidData, setData] = useState()

    const fetchData = async () => {
      let resp = fetch(url).then(response => response.json()).then(data => {
        console.log(data)
        setData(data)
      })
    }  

    const search = (event) => {
      fetchData()
    }
    const updateField = e => {
      setSearchStr(e.target.value)
    }
    const DisplayData = () => {
      
      if(covidData == null) {
        return <p>Type in a valid state abbreviation</p>
      } else {
        return (
          <p>
            {covidData.state}
          </p>
        )
      }
    }
    return (<div className = "Home">
      <form>
      <TextField className = "Input" label="Enter your state" value = {searchStr} onChange = {updateField}/>
      <div className = "btn">
        <Button variant="contained" className = "btn" onClick = {() => search()}>Search</Button>
      
      </div>
      <DisplayData/>
      </form>
    </div>)
  

}