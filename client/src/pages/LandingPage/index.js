import React, { Component } from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import GenIStarters from "../../assets/images/gen1-starters.webp";
import GenIIStarters from "../../assets/images/gen2-starters.webp";
import GenIIIStarters from "../../assets/images/gen3-starters.jpg";
import GenIVStarters from "../../assets/images/gen4-starters.jpg";
import GenVStarters from "../../assets/images/gen5-starters.jpg";
import GenVIStarters from "../../assets/images/gen6-starters.jpg";
import GenVIIStarters from "../../assets/images/gen7-starters.webp";
import GenVIIIStarters from "../../assets/images/gen8-starters.jpg";


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
                        <Header as="h3">Generation I</Header>
                        <Image as={Link} to="/geni" size="medium" src={GenIStarters} />
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Header as="h3">Generation II</Header>
                        <Image as={Link} to="/genii" size="medium" src={GenIIStarters} />
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Header as="h3">Generation III</Header>
                        <Image as={Link} to="/geniii" size="medium" src={GenIIIStarters} />
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Header as="h3">Generation IV</Header>
                        <Image as={Link} to="/geniv" size="medium" src={GenIVStarters} />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Header as="h3">Generation V</Header>
                        <Image as={Link} to="/genv" size="medium" src={GenVStarters} />
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Header as="h3">Generation VI</Header>
                        <Image as={Link} to="/genvi" size="medium" src={GenVIStarters} />
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Header as="h3">Generation VII</Header>
                        <Image as={Link} to="/genvii" size="medium" src={GenVIIStarters} />
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Header as="h3">Generation VIII</Header>
                        <Image as={Link} to="/genviii" size="medium" src={GenVIIIStarters} />
                    </Grid.Column>
                </Grid.Row>
            </>
        );
    }
}

export default LandingPage;