import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";

class LandingPage extends Component {
    render() {
        return (
            <>
                <Grid.Row>
                    <Grid.Column>
                        <Header as="h1">Welcome to Global Pokédex! - Please select a generation.</Header>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Link to="/geni">Generation I</Link>
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Link to="/genii">Generation II</Link>
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Link to="/geniii">Generation III</Link>
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Link to="/geniv">Generation IV</Link>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Link to="/genv">Generation V</Link>
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Link to="/genvi">Generation VI</Link>
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Link to="/genvii">Generation VII</Link>
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Link to="/genviii">Generation VIII</Link>
                    </Grid.Column>
                </Grid.Row>
            </>
        );
    }
}

export default LandingPage;