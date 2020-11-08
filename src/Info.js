import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';


export class Info extends React.Component {

  render() {
    return(<div className = "MoreInfo">
        <Grid container justify = "left" spacing = {2}>
          <Grid item>
              <h3>How Covid-19 Spreads:</h3>
              <p className = "InfoP">COVID-19 spreads easily from person to person, mainly by the following routes:</p>
              <ul>
                <li className = "InfoP">
                  Between people who are in close contact with one another (within 6 feet).
                </li>
                <li className = "InfoP">
                Through respiratory droplets produced when an infected person coughs, sneezes, breathes, sings or talks.
                Respiratory droplets cause infection when they are inhaled or deposited on mucous membranes, such as those that line the inside of the nose and mouth.
                </li>
                <li className = "InfoP">
                People who are infected but do not have symptoms can also spread the virus to others.
                </li>
              </ul>
          </Grid>
          <Grid item>
          <h3>Symptoms for Covid-19 Include:</h3>
        <ul>
        <li>
        Fever or chills
        </li>
        <li>
        Cough
        </li>
        <li>
        Shortness of breath or difficulty breathing
        </li>
        <li>
        Fatigue
        </li>
        <li>
        Muscle or body aches
        </li>
        <li>
        Headache
        </li>
        <li>
        New loss of taste or smell
        </li>
        <li>
        Sore throat
        </li>
        <li>
        Congestion or runny nose
        </li>
        <li>
        Nausea or vomiting
        </li>
        <li>
        Diarrhea
        </li>
        </ul>
          </Grid>
          <Grid item>
          <h3>Helpful links:</h3>
        <ul>
          <li><a href = "https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/about-face-coverings.html">How should I wear a mask?</a></li>
          <li><a href = "https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/quarantine.html">When should I quarantine?</a></li>
          <li><a href = "https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/testing.html">Should I get tested?</a></li>
        </ul>
          </Grid>
        </Grid>
        
    

    </div>)
  }

}