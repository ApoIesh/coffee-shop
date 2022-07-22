import React, {Component} from 'react';
import {View, Text, ImageBackground, StatusBar} from 'react-native';
import styles, {black_color, hp, white_color, wp} from './Assets/style/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {navigate, reset} from '../NavigationActions';
import {Button} from './Assets/common';
import {L} from '../config';

class SuccessRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container_black}>
        <View style={[styles.view_92, {alignItems: 'center'}]}>
          <ImageBackground
            source={require('./Assets/image/shape.png')}
            resizeMode={'cover'}
            style={styles.imageRequest}
          />
          <Text style={[styles.Bold_20pt_white]}>{L.order_placed}</Text>
          <Text
            style={[
              styles.Regular_14pt_gray,
              {
                marginVertical: hp(1),
                lineHeight: wp(6),
                flexWrap: 'wrap',
                textAlign: 'center',
                maxWidth:wp(80)
              },
            ]}>
            {L.Check_all}
          </Text>

          <Button
            marginTop={hp(6)}
            backgroundColor={white_color}
            label={L.my_orders}
            TextColor={black_color}
            onPress={() => navigate(L.my_orders)}
          />
        </View>
      </View>
    );
  }
}

export default SuccessRequest;
