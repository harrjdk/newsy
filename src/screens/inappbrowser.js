import React, { Component } from "react";
import { Container, Body, Header, Icon, Text, Title, List, ListItem, Spinner, Left, Thumbnail, Footer } from "native-base";
import { WebView } from "react-native";

export default class InAppBrowser extends Component {
    static navigationOptions = {
        title: 'View Article',
    };
    constructor(props){
        super(props);
    }
    render() {
        const { navigation } = this.props;
        console.log("navigating to "+JSON.stringify(navigation));
        if(!navigation.state.params) {
            return <></>;
        }
        return (
            <Container>
                <WebView
                        source={{uri: navigation.state.params.url}}
                        style={{marginTop: 20}}
                    />
            </Container>
        );
    }
}