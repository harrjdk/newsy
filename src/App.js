import React from "react";
import { Root } from "native-base";
import { createDrawerNavigator, createStackNavigator, createAppContainer } from "react-navigation";
import { Home } from "./src/screens";

const Drawer = createDrawerNavigator(
    {
        Home: {
            screen: Home
        }
    }
);

const AppNav = createStackNavigator(
    {
        Drawer: {
            screen: Drawer
        },
        Home: {
            screen: Home
        }
    },
    initialRouteName: "Home"
);

const AppContainer = createAppContainer(AppNavigator);

export default () =>
  <Root>
    <AppContainer />
  </Root>;