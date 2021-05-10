import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import LandingPage from "../../pages/LandingPage";

import "./style.css";

class App extends Component {
    render() {
        return (
            <>
                <Grid>
                    <Route exact path="/" render={() => <LandingPage />} />
                </Grid>
            </>
        );
    }
}

export default App;