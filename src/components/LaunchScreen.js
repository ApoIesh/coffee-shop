import React, {Component} from 'react';
import {View} from 'react-native';
import styles, {black_color} from './Assets/style/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {reset} from '../NavigationActions';

class LaunchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  async componentDidMount() {
    try {
      const token = await AsyncStorage.getItem('token');
      // console.log("token",token);
      const Intro = await AsyncStorage.getItem('Intro');
      const lang = await AsyncStorage.getItem('languageKey');

      if (token !== null) {
        reset('TabComponent');
      } else {
        if (Intro) {
          reset('SignIn');
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
