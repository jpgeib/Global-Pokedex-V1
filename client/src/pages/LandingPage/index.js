import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";

class LandingPage extends Component {
    render() {
        return (
            <>
                <Grid.Row>
                    <Grid.Column>
                        <Header as="h1">Welcome to Global Pokédex! - Please select a generation.</Header>
                    </Grid.Column>
                </Grid.Row>
            </>
        );
    }
}

export default LandingPage;