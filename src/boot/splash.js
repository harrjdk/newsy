import React, { Component } from "react";
import { Spinner, Container, Header, Title, Body, Left, Right } from "native-base";
import App from "../App";
import { Font } from 'expo';
import { SafeAreaView } from "react-navigation";

export default class Splash extends Component {
    constructor() {
        super();
        this.state = {
            isReady: false
        };
    }

    componentWillMount() {
        setTimeout(() => this.loadNews(), 2000);
    }

    loadNews = async () => {
        // Load fonts
        await Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
            Entypo: require("native-base/Fonts/Entypo.ttf"),
            Feather: require("native-base/Fonts/Feather.ttf"),
            FontAwesome: require("native-base/Fonts/FontAwesome.ttf"),
            Octicons: require("native-base/Fonts/Octicons.ttf"),
          });
        // TODO Load News!
        this.setState({isReady: true});
    }

    render() {
        if (!this.state.isReady) {
            return (
                <Container>
                    <Header>
                        <Left /><Body /><Right />
                    </Header>
                    <Body>
                        <Spinner color="red" />
                    </Body>
                </Container>
            );
        } else {
            return (
                <>
                    <App />
                </>
            );
        }
    }
}