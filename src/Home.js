import React, { Component, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './App.css';




export function Home(){

    const [searchStr, setSearchStr] = useState("VA");
    const [covidData, setData] = useState()
    const [url, setUrl] = useState("https://api.covidtracking.com/v1/states/va/current.json")
    const fetchData = async (s) => {
      let resp = fetch(url).then(response => response.json()).then(data => {
        console.log(data)
        updateCovid(data)
      })
    }  

    const updateCovid = (d) => {
      setData(d)
    }
    const search = (event) => {
      setUrl("https://api.covidtracking.com/v1/states/" + searchStr + "/current.json")
      fetchData(searchStr)
    }
    const updateField = e => {
      console.log(e.target.value)
      setSearchStr(e.target.value)
    }
    const DisplayData = () => {
      
      if(covidData == null) {
        return <p>Type in a valid state abbreviation</p>
      } else {
        return (<div>
          <h1>
            {covidData.state}
            
          </h1>
          <h5>Deaths: {covidData.death}</h5>
          <h5>Positive: {covidData.positive}</h5>
          <h5>Negative: {covidData.negative}</h5>
          
          </div>
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