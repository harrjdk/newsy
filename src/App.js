import React, {Component} from "react";
import { createDrawerNavigator, createStackNavigator, createAppContainer, SafeAreaView } from "react-navigation";
import Home from "./screens/home";
import Sidebar from "./screens/sidebar";
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import newsReducer from './reducers/newsReducer'
import InAppBrowser from "./screens/inappbrowser";

const sidebarListings = [{
    icon: "md-home",
    name: "Home",
    route: "Home"
}];

const Drawer = createDrawerNavigator(
    {
        Home: {
            screen: Home
        }
        
    },
    {
        initialRouteName: "Home",
        contentComponent: props => <Sidebar sidebarItems={sidebarListings}  {...props} />
    }
);

const AppNav = createStackNavigator(
    {
        Drawer: {
            screen: Drawer
        },
        Home: {
            screen: Home
        },
        InAppBrowser: {
            screen: InAppBrowser
        }
    },
    {
        initialRouteName: "Drawer",
    }
);

const AppContainer = createAppContainer(AppNav);

const client = axios.create({
    baseURL: "https://newsapi.org",
    responseType: "json"
});
const store = createStore(newsReducer, applyMiddleware(axiosMiddleware(client)));
// Export our root
export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <SafeAreaView style={{flex:1, backgroundColor:"rgb(40,40,180)"}}>
                    <AppContainer style={{backgroundColor: "rgb(40,40,180)"}} />
                </SafeAreaView>
            </Provider>
        );
    }
}
  