import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import LandingPage from "../../pages/LandingPage";
import FirstGen from "../../pages/FirstGen";
import SecondGen from "../../pages/SecondGen";
import ThirdGen from "../../pages/ThirdGen";
import FourthGen from "../../pages/FourthGen";
import FifthGen from "../../pages/FifthGen";

import "./style.css";

class App extends Component {
    render() {
        return (
            <>
                <Grid>
                    <Route exact path="/" render={() => <LandingPage />} />
                    <Route exact path="/geni" render={() => <FirstGen />} />
                    <Route exact path="/genii" render={() => <SecondGen />} />
                    <Route exact path="/geniii" render={() => <ThirdGen />} />
                    <Route exact path="/geniv" render={() => <FourthGen />} />
                    <Route exact path="/genv" render={() => <FifthGen />} />
                </Grid>
            </>
        );
    }
}

export default App;