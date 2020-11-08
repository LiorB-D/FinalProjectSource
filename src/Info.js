import React, { Component } from 'react';


export class Info extends React.Component {

  render() {
    return(<div>
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
        <h3>Helpful links:</h3>
        <ul>
          <li><a href = "https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/about-face-coverings.html">How should I wear a mask?</a></li>
          <li><a href = "https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/quarantine.html">When should I quarantine?</a></li>
          <li><a href = "https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/testing.html">Should I get tested?</a></li>
        </ul>
    </div>)
  }

}