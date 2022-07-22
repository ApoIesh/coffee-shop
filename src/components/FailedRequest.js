import React, {Component} from 'react';
import {View, Text, ImageBackground, StatusBar} from 'react-native';
import styles, {black_color, hp, white_color, wp} from './Assets/style/styles';
import {navigate} from '../NavigationActions';
import {Button} from './Assets/common';
import {L} from '../config';

class FailedRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container_black}>
        <View style={[styles.view_92, {alignItems: 'center'}]}>
          <ImageBackground
            source={require('./Assets/image/payfail.png')}
            resizeMode={'cover'}
            style={styles.imageRequest}
          />
          <Text style={[styles.Bold_20pt_white, {marginVertical: hp(1)}]}>
            {L.order_failed}
          </Text>
          <Text style={[styles.Regular_14pt_gray, {marginVertical: hp(1)}]}>
            {L.problem_in_requested_order}
          </Text>

          <Button
            marginTop={hp(8)}
            backgroundColor={white_color}
            label={L.try_again}
            TextColor={black_color}
            onPress={() => navigate('SuccessRequest')}
          />
        </View>
      </View>
    );
  }
}

export default FailedRequest;
