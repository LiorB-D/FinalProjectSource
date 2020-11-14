import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import LGH from "./LGH.jpeg";
import LGH_dog from "./LGH_dog.jpeg";
import LBD from "./LBD.JPG";
import LBD_dog from "./LBD_dog.JPG";
import RS from "./RS.JPG";
import RS_dog from "./RS_dog.jpg";

export class About extends React.Component {
  render() {
    return (
      <div className="AboutUs">
        <Grid item container justify="center" spacing={3}>
          <h3 className="About">
            This website was created by Lucia Hoerr, Lior Ben-David, and Rudy
            Schneider in November of 2020 as a part of the Forge (formerly
            HackCville) Source program.
          </h3>
        </Grid>

        <Grid container justify="center" spacing={4}>
          <Grid item>
            <ul>
              <img src={LGH} alt="Lucia" width="200" height="300" border="3" />{" "}
              <img
                src={LGH_dog}
                alt="Petunia"
                width="130"
                height="200"
                border="3"
                borderColor="red"
              />
              <p>Lucia Hoerr</p>
            </ul>
          </Grid>

          <Grid item>
            <ul>
              <img src={LBD} alt="Lior" width="210" height="300" border="3" />{" "}
              <img
                src={LBD_dog}
                alt="Lior's Dog"
                width="130"
                height="200"
                border="3"
              />
              <p>Lior Ben-David</p>
            </ul>
          </Grid>

          <Grid item>
            <ul>
              <img src={RS} alt="Rudy" width="200" height="300" border="3" />{" "}
              <img
                src={RS_dog}
                alt="Rudy's Dog"
                width="130"
                height="200"
                border="3"
              />
              <p>Rudy Schneider</p>
            </ul>
          </Grid>
        </Grid>
      </div>
    );
  }
}
