import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Splash from './src/boot/splash';
import { AppRegistry } from 'react-native'

export default class App extends React.Component {
  render() {
    return (
      <Splash />
    );
  }
}
AppRegistry.registerComponent('newsy', () => App);