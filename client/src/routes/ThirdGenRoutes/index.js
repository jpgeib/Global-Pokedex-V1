import React, { Component } from "react";
import { Route } from "react-router-dom";
import ThirdGen from "../../pages/ThirdGen";
import ThirdNatDex from "../../pages/ThirdGen/ThirdNatDex";
import RS from "../../pages/ThirdGen/RS";
import FrLg from "../../pages/ThirdGen/FrLg";
import Emerald from "../../pages/ThirdGen/Emerald";

class ThirdGenRoutes extends Component {
    render() {
        return (
            <>
                <Route exact path="/geniii" render={() => <ThirdGen />} />
                <Route exact path="/geniii/national" render={() => <ThirdNatDex />} />
                <Route exact path="/geniii/rs" render={() => <RS />} />
                <Route exact path="/geniii/frlg" render={() => <FrLg />} />
                <Route exact path="/geniii/emerald" render={() => <Emerald />} />
            </>
        );
    }
};

export default ThirdGenRoutes;