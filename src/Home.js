import React, { Component, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './App.css';
import './App.css';
import {VictoryChart, VictoryLine, VictoryTheme, VictoryAxis, VictoryTooltip, VictoryVoronoiContainer} from 'victory'



export function Home(){

    const [searchStr, setSearchStr] = useState("VA");
    const [covidData, setData] = useState()
    const [currUrl, setCurrUrl] = useState("https://api.covidtracking.com/v1/states/va/current.json")
    const [histUrl, setHistUrl] = useState("https://api.covidtracking.com/v1/states/va/daily.json")
    const [lineData, setLineData] = useState([])
    const [deathLineData, setDeathData] = useState([])



    const SECOND_COLOR = "rgb(0, 0, 0)";
    const PRIMARY_COLOR = "rgb(200, 30, 30)";

    const sharedAxisStyles = {

      tickLabels: {
        fill: SECOND_COLOR,
        fontSize: 10,
      },
      axisLabel: {
        fill: SECOND_COLOR,
        fontSize: 10,
        fontStyle: "italic"
      },
      
    };



    const fetchData = async () => {
      let resp = fetch(currUrl).then(response => response.json()).then(data => {
        console.log(data)
        updateCovid(data)
      })
      let resp2 = fetch(histUrl).then(response => response.json()).then(data => {
        console.log(data)
        updateHistData(data)
        setSearchStr(searchStr)
      })
    }  

    const updateCovid = (d) => {
      setData(d)
    }
    const updateHistData = (d) => {
      let pSet = []
      let dSet = []
      let i = 0
      d.slice(0,30).map((day) => {
        pSet.push({x: 30 - i, y: day.positive})
        dSet.push({x: 30 - i, y: day.death})
        i += 1
      })
      setLineData(pSet)
      setDeathData(dSet)
      console.log(lineData)
    }
    const search = (event) => {
      setCurrUrl("https://api.covidtracking.com/v1/states/" + searchStr + "/current.json")
      setHistUrl("https://api.covidtracking.com/v1/states/" + searchStr + "/daily.json")
      fetchData()
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
          <h5>Deaths: {covidData.death}, Positive: {covidData.positive}, Negative: {covidData.negative}</h5>
          
            <div className = "chart">
            <h3>Positive Cases in the Past 30 Days</h3>
            <VictoryChart
          width = {300} height = {200}
          containerComponent={
            <VictoryVoronoiContainer
              labels={({ datum }) => `${datum.y} Positive Cases`}
            />
          }
        >
            <VictoryAxis
              style={{
                ...sharedAxisStyles,
                grid: {
                  fill: SECOND_COLOR,
                  stroke: SECOND_COLOR,
                  pointerEvents: "painted",
                  strokeWidth: 0.5
                }
              }}
              dependentAxis
            />
            <VictoryAxis
              style={{
                ...sharedAxisStyles,
                axisLabel: { ...sharedAxisStyles.axisLabel, padding: 35 }
              }}
              label="Day (Past month)"
            />
          <VictoryLine
            style={{
              data: { stroke: PRIMARY_COLOR },
              parent: { border: SECOND_COLOR},
            }}
            data = {lineData}
            labelComponent={<VictoryTooltip/>}
          />
        </VictoryChart>

        <h3>Covid-19 Deaths in the Past 30 Days</h3>
            <VictoryChart
          width = {300} height = {200}
          containerComponent={
            <VictoryVoronoiContainer
              labels={({ datum }) => `${datum.y} Deaths`}
            />
          }
        >
            <VictoryAxis
              style={{
                ...sharedAxisStyles,
                grid: {
                  fill: SECOND_COLOR,
                  stroke: SECOND_COLOR,
                  pointerEvents: "painted",
                  strokeWidth: 0.5
                }
              }}
              dependentAxis
            />
            <VictoryAxis
              style={{
                ...sharedAxisStyles,
                axisLabel: { ...sharedAxisStyles.axisLabel, padding: 35 }
              }}
              label="Day (Past month)"
            />
          <VictoryLine
            style={{
              data: { stroke: PRIMARY_COLOR },
              parent: { border: SECOND_COLOR},
            }}
            data = {deathLineData}
            labelComponent={<VictoryTooltip/>}
          />
        </VictoryChart>

            </div>
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