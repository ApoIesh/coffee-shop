import React, {Component} from 'react';
import {StatusBar, View, Text, ImageBackground} from 'react-native';
import {L} from '../config';
import styles, {
  black_color,
  hp,
  Primary_color,
  white_color,
  wp,
} from './Assets/style/styles';
import {navigate} from '../NavigationActions';
import {Button} from './Assets/common/Button';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    //STATE

    //PROPS

    //OTHER

    return (
      <View style={[styles.container_Primary]}>
        <View style={styles.view_92}>
          <View style={styles.register_text}>
            <Text style={styles.custom_light_white}>{L.welcome_to}</Text>
            <Text style={styles.custom_bold_white}>{'Cafe'}</Text>
          </View>

          <Button
            backgroundColor={white_color}
            label={L.sign_up}
            TextColor={black_color}
            marginBottom={hp(2.3)}
            height={hp(8)}
            onPress={() => navigate('SignUp')}
          />
          <Button
            backgroundColor={black_color}
            label={L.sign_in}
            TextColor={white_color}
            borderWidth={wp(0.25)}
            height={hp(8)}
            onPress={() => navigate('SignIn')}
          />
        </View>
      </View>
    );
  }
}

export default Register;
