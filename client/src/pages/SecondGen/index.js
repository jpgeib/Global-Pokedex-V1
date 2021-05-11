import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";

class SecondGen extends Component {
    render() {
        return (
            <>
                <Grid.Row>
                    <Grid.Column>
                        <Header as="h1">Generation II: Gold, Silver, and Crystal</Header>
                    </Grid.Column>
                </Grid.Row>
            </>
        );
    }
}

export default SecondGen;