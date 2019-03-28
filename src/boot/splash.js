import React, { Component } from "react";
import { Spinner } from "native-base";
import { default as App } from "../App";

export default class Splash extends Component {
    constructor() {
        super();
        this.state = {
            isReady: false
        };
    }

    componentWillMount() {
        this.loadNews();
    }

    async loadNews() {
        //TODO

        this.setState({isReady: true});
    }

    render() {
        if (!this.state.isReady) {
            return (
                <Spinner color="red" />
            );
        } else {
            return (
                <App />
            );
        }
    }
}