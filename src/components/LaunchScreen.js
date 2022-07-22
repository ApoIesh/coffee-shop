import React, {Component} from 'react';
import {View, Text, ImageBackground, StatusBar} from 'react-native';
import styles, {black_color, hp, wp} from './Assets/style/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {navigate, reset} from '../NavigationActions';

class LaunchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  async componentDidMount() {
    try {
      const token = await AsyncStorage.getItem('token');
      // console.log("0100",token);
      const Intro = await AsyncStorage.getItem('Intro');
      const lang = await AsyncStorage.getItem('language');

      if (token !== null) {
        reset('TabComponent');
      } else {
        if (Intro) {
          reset('Register');
        } else {
          AsyncStorage.setItem('Intro', 'true');
          reset('Intro');
        }
      }
    } catch (error) {}
  }

  render() {
    return <View style={[styles.container, {backgroundColor: black_color}]} />;
  }
}

export default LaunchScreen;
