import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Animated, Image, ScrollView, FlatList} from 'react-native';
import HomeTabNavigator from './navigators/HomeTabNavigator'


export default class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <HomeTabNavigator />
    );
  }
}


