import React, { Component } from "react";
import { Container, Body, Header, Title } from "native-base";

export default class Home extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Container>
                <Header>
                    <Body>
                        <Title>Newsy</Title>
                    </Body>
                </Header>
            </Container>
        )
    }
}