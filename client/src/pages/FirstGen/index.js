import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";

class FirstGen extends Component {
    render() {
        return (
            <>
                <Grid.Row>
                    <Grid.Column>
                        <Header as="h1">Generation I: Red, Blue, and Yellow</Header>
                    </Grid.Column>
                </Grid.Row>
            </>
        );
    }
}

export default FirstGen;