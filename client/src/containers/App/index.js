import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import LandingPage from "../../pages/LandingPage";
import FirstGen from "../../pages/FirstGen";
import SecondGen from "../../pages/SecondGen";
import ThirdGenRoutes from "../../routes/ThirdGenRoutes";
import FourthGen from "../../pages/FourthGen";
import FifthGen from "../../pages/FifthGen";
import SixthGen from "../../pages/SixthGen";
import SeventhGen from "../../pages/SeventhGen";
import EighthGen from "../../pages/EighthGen";


import "./style.css";

class App extends Component {
    render() {
        return (
            <>
                <Grid id="main-container">
                    <Route exact path="/" render={() => <LandingPage />} />
                    <Route exact path="/geni" render={() => <FirstGen />} />
                    <Route exact path="/genii" render={() => <SecondGen />} />
                    <ThirdGenRoutes />
                    <Route exact path="/geniv" render={() => <FourthGen />} />
                    <Route exact path="/genv" render={() => <FifthGen />} />
                    <Route exact path="/genvi" render={() => <SixthGen />} />
                    <Route exact path="/genvii" render={() => <SeventhGen />} />
                    <Route exact path="/genviii" render={() => <EighthGen />} />
                </Grid>
            </>
        );
    }
}

export default App;